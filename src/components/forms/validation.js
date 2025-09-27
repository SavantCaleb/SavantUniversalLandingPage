export class FormValidator {
  validateContactForm(data) {
    const errors = {};
    
    // Name validation - allow letters, spaces, hyphens, apostrophes
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    if (!data.firstName || !nameRegex.test(data.firstName)) {
      errors.firstName = 'First name is required and must contain only letters, spaces, hyphens, and apostrophes';
    }
    
    if (!data.lastName || !nameRegex.test(data.lastName)) {
      errors.lastName = 'Last name is required and must contain only letters, spaces, hyphens, and apostrophes';
    }
    
    // Email validation with proper regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (US format) - optional but if provided must be valid
    if (data.phone) {
      const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
      const cleanPhone = this.formatPhone(data.phone);
      if (!phoneRegex.test(cleanPhone)) {
        errors.phone = 'Phone format should be (555) 123-4567';
      }
    }
    
    // Industry validation
    if (!data.industry) {
      errors.industry = 'Please select your industry';
    }
    
    // Company name validation - if provided, check for reasonable length
    if (data.company && (data.company.length < 2 || data.company.length > 100)) {
      errors.company = 'Company name must be between 2 and 100 characters';
    }
    
    // Message validation - if provided, check length
    if (data.message && data.message.length > 1000) {
      errors.message = 'Message must be less than 1000 characters';
    }
    
    return Object.keys(errors).length === 0 ? null : errors;
  }
  
  formatPhone(phone) {
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX
    if (digits.length === 10) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length === 11 && digits[0] === '1') {
      return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    }
    
    return phone; // Return original if can't format
  }
  
  sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    // Remove potentially dangerous characters but preserve basic punctuation
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }
  
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Additional checks for common issues
    if (!email) return false;
    if (email.length > 254) return false; // RFC 5321 limit
    if (email.includes('..')) return false; // Consecutive dots
    if (email.startsWith('.') || email.endsWith('.')) return false;
    
    return emailRegex.test(email);
  }
  
  validatePhone(phone) {
    if (!phone) return true; // Phone is optional
    
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10 || (digits.length === 11 && digits[0] === '1');
  }
  
  validateName(name) {
    if (!name) return false;
    if (name.length < 2 || name.length > 50) return false;
    
    const nameRegex = /^[a-zA-Z\s\-']+$/;
    return nameRegex.test(name);
  }
  
  validateIndustry(industry) {
    const validIndustries = [
      'hvac', 'plumbing', 'realestate', 'healthcare', 
      'retail', 'manufacturing', 'other'
    ];
    return validIndustries.includes(industry);
  }
}