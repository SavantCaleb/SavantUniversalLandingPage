// Supabase client configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://atchdevctikwbammpefo.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0Y2hkZXZjdGlrd2JhbW1wZWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwMDI5NjksImV4cCI6MjA3NDU3ODk2OX0.x1d3sPuvIvF9nvthLFdLRUYUfiW4nl5dlOzmkTUgRFo';

class SupabaseAnalytics {
  constructor() {
    this.supabaseUrl = SUPABASE_URL;
    this.supabaseKey = SUPABASE_ANON_KEY;
    this.currentSession = null;
    this.sessionInitialized = false;
    this.initializationPromise = this.initializeSession();
  }

  // Initialize or get existing session
  async initializeSession() {
    try {
      // Get or create session ID
      let sessionId = sessionStorage.getItem('supabase_session_id');
      let isNewSession = false;
      
      if (!sessionId) {
        sessionId = this.generateSessionId();
        sessionStorage.setItem('supabase_session_id', sessionId);
        isNewSession = true;
      }

      // Get location data
      const locationData = await this.getLocationData();
      
      // Get device/browser info
      const deviceInfo = this.getDeviceInfo();
      
      // Get URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      
      const sessionData = {
        session_id: sessionId,
        ip_address: locationData.ip,
        user_agent: navigator.userAgent,
        country: locationData.country,
        city: locationData.city,
        region: locationData.region,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        device_type: deviceInfo.deviceType,
        browser: deviceInfo.browser,
        os: deviceInfo.os,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`,
        referrer: document.referrer,
        landing_page: window.location.pathname + window.location.search,
        initial_vertical: urlParams.get('vertical'),
        initial_utm_source: urlParams.get('utm_source'),
        initial_utm_medium: urlParams.get('utm_medium'),
        initial_utm_campaign: urlParams.get('utm_campaign'),
        initial_utm_term: urlParams.get('utm_term'),
        initial_utm_content: urlParams.get('utm_content'),
        session_start_time: new Date().toISOString()
      };

      // Always try to create the session first (ignore 409 conflicts)
      // This ensures the session exists in the database before we track events
      await this.createSession(sessionData);
      
      // Skip session updates for now - they're not critical if session exists
      // The 409 conflict means the session is already in the database
      this.currentSession = sessionData;
      this.sessionInitialized = true;
      
    } catch (error) {
      console.warn('Failed to initialize Supabase session:', error);
      // Fallback to localStorage for offline functionality
      this.currentSession = { session_id: this.generateSessionId() };
      this.sessionInitialized = true;
    }
  }

  // Generate unique session ID
  generateSessionId() {
    const timestamp = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2);
    const extraRandom = Math.random().toString(36).substring(2);
    return `${timestamp}_${randomPart}_${extraRandom}`;
  }

  // Clean event data for JSONB storage
  cleanEventData(eventData) {
    try {
      // Remove undefined values and functions
      const cleaned = {};
      for (const [key, value] of Object.entries(eventData)) {
        if (value !== undefined && value !== null && typeof value !== 'function') {
          // Convert non-serializable values to strings
          if (typeof value === 'object' && value instanceof Date) {
            cleaned[key] = value.toISOString();
          } else if (typeof value === 'object') {
            try {
              cleaned[key] = JSON.parse(JSON.stringify(value));
            } catch (e) {
              cleaned[key] = String(value);
            }
          } else {
            cleaned[key] = value;
          }
        }
      }
      return cleaned;
    } catch (error) {
      console.warn('Failed to clean event data:', error);
      return {};
    }
  }

  // Get location data from IP
  async getLocationData() {
    try {
      // Try ipify.org first (more reliable CORS)
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      
      if (data.ip) {
        try {
          // Try to get location data from a different service
          const locationResponse = await fetch(`https://api.country.is/${data.ip}`);
          const locationData = await locationResponse.json();
          return {
            ip: data.ip,
            country: locationData.country || 'unknown',
            city: 'unknown', // Most free services don't provide city
            region: 'unknown'
          };
        } catch (locationError) {
          // Just return with IP if location lookup fails
          return {
            ip: data.ip,
            country: 'unknown',
            city: 'unknown',
            region: 'unknown'
          };
        }
      }
    } catch (error) {
      try {
        // Fallback to ipapi.co if available
        const fallbackResponse = await fetch('https://ipapi.co/json/');
        const fallbackData = await fallbackResponse.json();
        return {
          ip: fallbackData.ip || null,
          country: fallbackData.country_name || 'unknown',
          city: fallbackData.city || 'unknown',
          region: fallbackData.region || 'unknown'
        };
      } catch (fallbackError) {
        // If all fails, return null for IP (valid for PostgreSQL INET type)
        return {
          ip: null,
          country: 'unknown',
          city: 'unknown',
          region: 'unknown'
        };
      }
    }
  }

  // Get device information
  getDeviceInfo() {
    const userAgent = navigator.userAgent;
    
    let deviceType = 'desktop';
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      deviceType = /iPad/.test(userAgent) ? 'tablet' : 'mobile';
    }

    let browser = 'unknown';
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';

    let os = 'unknown';
    if (userAgent.includes('Windows')) os = 'Windows';
    else if (userAgent.includes('Mac')) os = 'macOS';
    else if (userAgent.includes('Linux')) os = 'Linux';
    else if (userAgent.includes('Android')) os = 'Android';
    else if (userAgent.includes('iOS')) os = 'iOS';

    return { deviceType, browser, os };
  }

  // Create new session
  async createSession(sessionData) {
    try {
      const response = await fetch(`${this.supabaseUrl}/rest/v1/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${this.supabaseKey}`
        },
        body: JSON.stringify(sessionData)
      });

      if (!response.ok && response.status !== 409) {
        return false;
      }
      return true;
    } catch (error) {
      console.warn('Failed to create session:', error);
      return false;
    }
  }

  // Update existing session
  async updateSession(sessionId) {
    try {
      const response = await fetch(`${this.supabaseUrl}/rest/v1/sessions?session_id=eq.${sessionId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${this.supabaseKey}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          last_activity_time: new Date().toISOString(),
          total_page_views: 1, // We'll increment this with each page view
          updated_at: new Date().toISOString()
        })
      });

      if (!response.ok) {
        return false;
      }
      return true;
    } catch (error) {
      console.warn('Failed to update session:', error);
      return false;
    }
  }

  // Verify session exists in database
  async verifySessionExists(sessionId) {
    try {
      const response = await fetch(`${this.supabaseUrl}/rest/v1/sessions?session_id=eq.${sessionId}&select=session_id`, {
        headers: {
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${this.supabaseKey}`
        }
      });

      if (response.ok) {
        const sessions = await response.json();
        return sessions.length > 0;
      }
      return false;
    } catch (error) {
      console.warn('Failed to verify session exists:', error);
      return false;
    }
  }

  // Track events
  async trackEvent(eventType, eventData = {}) {
    // Wait for session initialization to complete
    if (!this.sessionInitialized) {
      await this.initializationPromise;
    }

    // Ensure we have a valid session before tracking
    if (!this.currentSession || !this.currentSession.session_id) {
      console.warn('No valid session for event tracking');
      this.storeEventLocally(eventType, eventData);
      return;
    }

    // Verify the session exists in the database before tracking events
    const sessionExists = await this.verifySessionExists(this.currentSession.session_id);
    
    if (!sessionExists) {
      await this.createSession(this.currentSession);
    }

    const urlParams = new URLSearchParams(window.location.search);
    
    // Clean and validate event data
    const cleanEventData = this.cleanEventData(eventData);
    
    // Create minimal event object to avoid any data type issues
    const event = {
      session_id: this.currentSession.session_id,
      event_type: eventType,
      event_data: cleanEventData || {},
      vertical: eventData.vertical || urlParams.get('vertical'),
      timestamp: new Date().toISOString()
    };

    // Add optional fields only if they have valid values
    if (eventData.page) event.page = eventData.page;
    if (this.currentSession.ip_address) event.ip_address = this.currentSession.ip_address;
    if (eventData.previous_page) event.previous_page = eventData.previous_page;
    if (eventData.tier_name) event.tier_name = eventData.tier_name;
    if (eventData.tier_price) event.tier_price = eventData.tier_price;
    if (eventData.form_field_name) event.form_field_name = eventData.form_field_name;
    
    // Add UTM fields only if they exist
    const utmSource = eventData.utm_source || urlParams.get('utm_source');
    const utmMedium = eventData.utm_medium || urlParams.get('utm_medium');
    const utmCampaign = eventData.utm_campaign || urlParams.get('utm_campaign');
    const utmTerm = eventData.utm_term || urlParams.get('utm_term');
    const utmContent = eventData.utm_content || urlParams.get('utm_content');
    
    if (utmSource) event.utm_source = utmSource;
    if (utmMedium) event.utm_medium = utmMedium;
    if (utmCampaign) event.utm_campaign = utmCampaign;
    if (utmTerm) event.utm_term = utmTerm;
    if (utmContent) event.utm_content = utmContent;

    try {
      const response = await fetch(`${this.supabaseUrl}/rest/v1/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${this.supabaseKey}`
        },
        body: JSON.stringify(event)
      });

      if (response.ok) {
        // Also store in localStorage as backup
        this.storeEventLocally(eventType, eventData);
        return; // Exit early on success
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Event tracking failed: ${response.status} - ${errorText}`);
      }
      
    } catch (error) {
      console.warn('Failed to track event to Supabase, storing locally:', error.message);
      this.storeEventLocally(eventType, eventData);
    }
  }

  // Store form submissions
  async trackFormSubmission(submissionData) {
    if (!this.currentSession) {
      await this.initializeSession();
    }

    // Calculate time to conversion
    const sessionStartTime = new Date(this.currentSession.session_start_time);
    const timeToConversion = Math.floor((Date.now() - sessionStartTime.getTime()) / 1000);

    const formSubmission = {
      session_id: this.currentSession.session_id,
      vertical: submissionData.vertical,
      ip_address: this.currentSession.ip_address,
      country: this.currentSession.country,
      city: this.currentSession.city,
      email: submissionData.formData.email,
      form_data: submissionData.formData,
      selected_tier_name: submissionData.selectedTierName,
      selected_tier_price: submissionData.selectedTier,
      time_to_conversion_seconds: timeToConversion,
      utm_source: this.currentSession.initial_utm_source,
      utm_medium: this.currentSession.initial_utm_medium,
      utm_campaign: this.currentSession.initial_utm_campaign,
      submitted_at: new Date().toISOString()
    };

    try {
      const response = await fetch(`${this.supabaseUrl}/rest/v1/form_submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${this.supabaseKey}`
        },
        body: JSON.stringify(formSubmission)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Mark session as converted
      await this.updateSessionConversion();
      
      // Also store locally as backup
      this.storeFormSubmissionLocally(submissionData);
      
    } catch (error) {
      console.warn('Failed to track form submission to Supabase, storing locally:', error);
      this.storeFormSubmissionLocally(submissionData);
    }
  }

  // Update session conversion status
  async updateSessionConversion() {
    try {
      const response = await fetch(`${this.supabaseUrl}/rest/v1/sessions?session_id=eq.${this.currentSession.session_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${this.supabaseKey}`
        },
        body: JSON.stringify({
          converted: true,
          conversion_type: 'email_signup',
          updated_at: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.warn('Failed to update session conversion:', error);
    }
  }

  // Get analytics data from Supabase
  async getAnalyticsData(dateRange = '7d') {
    try {
      // Use Edge Function for CORS-compliant analytics data
      const response = await fetch(`${this.supabaseUrl}/functions/v1/analytics-data?dateRange=${dateRange}`, {
        headers: {
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${this.supabaseKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      return { 
        events: data.events || [], 
        submissions: data.submissions || [], 
        funnel: data.funnel || [], 
        recentActivity: data.recentActivity || [],
        verticalStats: data.verticalStats || {},
        pricingValidation: data.pricingValidation || {}
      };
      
    } catch (error) {
      console.warn('Failed to get analytics data from Supabase Edge Function, falling back to direct API calls:', error);
      
      try {
        // Fallback to direct REST API calls (these have CORS enabled by default)
        const daysAgo = dateRange === '1d' ? 1 : dateRange === '7d' ? 7 : 30;
        const since = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString();

        // Get events
        const eventsResponse = await fetch(`${this.supabaseUrl}/rest/v1/events?timestamp=gte.${since}&order=timestamp.desc`, {
          headers: {
            'apikey': this.supabaseKey,
            'Authorization': `Bearer ${this.supabaseKey}`
          }
        });

        // Get form submissions
        const submissionsResponse = await fetch(`${this.supabaseUrl}/rest/v1/form_submissions?submitted_at=gte.${since}&order=submitted_at.desc`, {
          headers: {
            'apikey': this.supabaseKey,
            'Authorization': `Bearer ${this.supabaseKey}`
          }
        });

        const events = eventsResponse.ok ? await eventsResponse.json() : [];
        const submissions = submissionsResponse.ok ? await submissionsResponse.json() : [];

        return { events, submissions, funnel: [], recentActivity: [] };
        
      } catch (fallbackError) {
        console.warn('Direct API calls also failed, falling back to localStorage:', fallbackError);
        return this.getLocalAnalyticsData();
      }
    }
  }

  // Get recent activity from Supabase
  async getRecentActivity(limit = 100) {
    try {
      const response = await fetch(`${this.supabaseUrl}/rest/v1/recent_activity?limit=${limit}`, {
        headers: {
          'apikey': this.supabaseKey,
          'Authorization': `Bearer ${this.supabaseKey}`
        }
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn('Failed to get recent activity from Supabase:', error);
    }
    
    return [];
  }

  // Fallback methods for localStorage (existing functionality)
  storeEventLocally(eventType, eventData) {
    try {
      const events = JSON.parse(localStorage.getItem('analytics_events') || '[]');
      events.push({
        event: eventType,
        data: {
          ...eventData,
          timestamp: Date.now(),
          ip: this.currentSession?.ip_address || 'unknown'
        }
      });

      if (events.length > 1000) {
        events.splice(0, events.length - 1000);
      }

      localStorage.setItem('analytics_events', JSON.stringify(events));
    } catch (error) {
      console.warn('Failed to store event locally:', error);
    }
  }

  storeFormSubmissionLocally(submissionData) {
    try {
      const submissions = JSON.parse(localStorage.getItem('form_submissions') || '[]');
      submissions.push({
        ...submissionData,
        timestamp: Date.now()
      });

      if (submissions.length > 500) {
        submissions.splice(0, submissions.length - 500);
      }

      localStorage.setItem('form_submissions', JSON.stringify(submissions));
    } catch (error) {
      console.warn('Failed to store form submission locally:', error);
    }
  }

  getLocalAnalyticsData() {
    try {
      return {
        events: JSON.parse(localStorage.getItem('analytics_events') || '[]'),
        submissions: JSON.parse(localStorage.getItem('form_submissions') || '[]'),
        funnel: []
      };
    } catch (error) {
      return { events: [], submissions: [], funnel: [] };
    }
  }
}

// Create global instance
window.SupabaseAnalytics = new SupabaseAnalytics();

export default SupabaseAnalytics;