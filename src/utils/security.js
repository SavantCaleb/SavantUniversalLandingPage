export class SecurityManager {
  constructor() {
    this.rateLimit = new Map();
    this.csrfToken = null;
    this.initializeSecurity();
  }
  
  initializeSecurity() {
    this.generateCSRFToken();
    this.cleanupRateLimit();
  }
  
  generateCSRFToken() {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const array = new Uint8Array(32);
      crypto.getRandomValues(array);
      this.csrfToken = btoa(String.fromCharCode(...array));
    } else {
      // Fallback for older browsers
      this.csrfToken = Math.random().toString(36).substr(2) + Date.now().toString(36);
    }
    
    // Store in meta tag for server-side validation
    let metaTag = document.querySelector('meta[name="csrf-token"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = 'csrf-token';
      metaTag.content = this.csrfToken;
      document.head.appendChild(metaTag);
    } else {
      metaTag.content = this.csrfToken;
    }
    
    return this.csrfToken;
  }
  
  getCSRFToken() {
    return this.csrfToken;
  }
  
  checkRateLimit(ip = null, limit = 5, window = 60000) {
    const clientIP = ip || this.getClientIP();
    const now = Date.now();
    const userAttempts = this.rateLimit.get(clientIP) || [];
    
    // Filter attempts within the time window
    const recentAttempts = userAttempts.filter(time => now - time < window);
    
    if (recentAttempts.length >= limit) {
      return false; // Rate limit exceeded
    }
    
    // Add current attempt
    recentAttempts.push(now);
    this.rateLimit.set(clientIP, recentAttempts);
    
    return true;
  }
  
  getClientIP() {
    // This is a simplified client-side IP detection
    // In production, use server-side IP detection
    return 'client-' + (sessionStorage.getItem('client-id') || this.generateClientId());
  }
  
  generateClientId() {
    const clientId = Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('client-id', clientId);
    return clientId;
  }
  
  cleanupRateLimit() {
    // Cleanup old rate limit entries every 5 minutes
    setInterval(() => {
      const now = Date.now();
      const fiveMinutesAgo = now - (5 * 60 * 1000);
      
      for (const [ip, attempts] of this.rateLimit.entries()) {
        const recentAttempts = attempts.filter(time => time > fiveMinutesAgo);
        if (recentAttempts.length === 0) {
          this.rateLimit.delete(ip);
        } else {
          this.rateLimit.set(ip, recentAttempts);
        }
      }
    }, 5 * 60 * 1000); // 5 minutes
  }
  
  validateHoneypot(formData) {
    // Check if honeypot field is filled (indicates bot)
    return !formData.website || formData.website.trim() === '';
  }
  
  sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    // Remove potentially dangerous content
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .replace(/data:/gi, '') // Remove data: protocol
      .trim()
      .substring(0, 1000); // Limit length
  }
  
  validateFormSubmission(formData) {
    const errors = [];
    
    // Check CSRF token
    if (!formData.csrf_token || formData.csrf_token !== this.csrfToken) {
      errors.push('Invalid security token');
    }
    
    // Check rate limiting
    if (!this.checkRateLimit()) {
      errors.push('Too many requests. Please try again later.');
    }
    
    // Check honeypot
    if (!this.validateHoneypot(formData)) {
      errors.push('Invalid form submission');
    }
    
    // Validate submission timing (too fast = likely bot)
    const submissionTime = Date.now();
    const pageLoadTime = performance.timing.loadEventEnd;
    const timeDiff = submissionTime - pageLoadTime;
    
    if (timeDiff < 3000) { // Less than 3 seconds = suspicious
      errors.push('Form submitted too quickly');
    }
    
    return errors.length === 0 ? null : errors;
  }
  
  createSecureHeaders() {
    return {
      'X-CSRF-Token': this.csrfToken,
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    };
  }
  
  encryptSensitiveData(data) {
    // Simple obfuscation for client-side (not true encryption)
    // Real encryption should be done server-side
    try {
      const encoded = btoa(JSON.stringify(data));
      return encoded.split('').reverse().join('');
    } catch (error) {
      console.error('Encryption failed:', error);
      return data;
    }
  }
  
  decryptSensitiveData(encryptedData) {
    try {
      const reversed = encryptedData.split('').reverse().join('');
      const decoded = atob(reversed);
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Decryption failed:', error);
      return null;
    }
  }
  
  validateEmail(email) {
    // Enhanced email validation with security checks
    if (!email || typeof email !== 'string') return false;
    
    // Basic format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    
    // Length checks
    if (email.length > 254) return false; // RFC 5321 limit
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /script/i,
      /javascript/i,
      /\<|\>/,
      /\[|\]/,
      /\{|\}/
    ];
    
    return !suspiciousPatterns.some(pattern => pattern.test(email));
  }
  
  validatePhoneNumber(phone) {
    if (!phone) return true; // Optional field
    
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');
    
    // Check length and format
    if (digits.length < 10 || digits.length > 11) return false;
    if (digits.length === 11 && digits[0] !== '1') return false;
    
    // Check for obviously fake numbers
    const fakePatterns = [
      /^1?0{10}$/, // All zeros
      /^1?1{10}$/, // All ones
      /^1?1234567890$/, // Sequential
      /^1?5555555555$/ // All 5s
    ];
    
    return !fakePatterns.some(pattern => pattern.test(digits));
  }
  
  logSecurityEvent(eventType, details) {
    const event = {
      type: eventType,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      details: details
    };
    
    // Send to security monitoring endpoint
    fetch('/api/security/log', {
      method: 'POST',
      headers: this.createSecureHeaders(),
      body: JSON.stringify(event)
    }).catch(error => {
      console.error('Security logging failed:', error);
    });
  }
}