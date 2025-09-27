import { getCookie } from './cookies.js';

export class AnalyticsTracker {
  constructor() {
    this.isGA4Loaded = false;
    this.isFBPixelLoaded = false;
    this.hybridTracker = new HybridTracker('/api/analytics/events');
    this.initializeAnalytics();
  }
  
  initializeAnalytics() {
    this.loadGA4();
    this.loadFacebookPixel();
  }
  
  loadGA4() {
    if (typeof gtag !== 'undefined') {
      this.isGA4Loaded = true;
      return;
    }
    
    // Load Google Analytics 4
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);
    
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { dataLayer.push(arguments); };
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        send_page_view: false // We'll send manually
      });
      this.isGA4Loaded = true;
    };
  }
  
  loadFacebookPixel() {
    if (typeof fbq !== 'undefined') {
      this.isFBPixelLoaded = true;
      return;
    }
    
    // Load Facebook Pixel
    (function(f,b,e,v,n,t,s) {
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
    this.isFBPixelLoaded = true;
  }
  
  trackPageView() {
    const utmData = this.getUTMData();
    
    // Google Analytics 4
    if (this.isGA4Loaded && typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_vertical': 'vertical',
          'custom_parameter_utm_source': 'utm_source',
          'custom_parameter_utm_campaign': 'utm_campaign'
        }
      });
      
      gtag('event', 'page_view', {
        ...utmData,
        page_title: document.title,
        page_location: window.location.href
      });
    }
    
    // Facebook Pixel
    if (this.isFBPixelLoaded && typeof fbq !== 'undefined') {
      fbq('track', 'PageView', {
        content_name: utmData.vertical || 'general',
        content_category: 'landing_page'
      });
    }
    
    // Hybrid tracking
    this.hybridTracker.trackEvent('page_view', {
      page_title: document.title,
      page_url: window.location.href,
      ...utmData
    });
  }
  
  trackEvent(eventName, parameters = {}) {
    const utmData = this.getUTMData();
    const eventData = {
      ...parameters,
      ...utmData,
      timestamp: Date.now(),
      page_url: window.location.href
    };
    
    // Google Analytics 4
    if (this.isGA4Loaded && typeof gtag !== 'undefined') {
      gtag('event', eventName, eventData);
    }
    
    // Facebook Pixel equivalent events
    if (this.isFBPixelLoaded && typeof fbq !== 'undefined') {
      const fbEventName = this.mapToFBEvent(eventName);
      if (fbEventName) {
        fbq('track', fbEventName, {
          content_name: `${utmData.vertical || 'general'}_${eventName}`,
          content_category: utmData.vertical || 'general',
          value: parameters.value || 1,
          currency: 'USD',
          ...parameters
        });
      }
    }
    
    // Hybrid tracking
    this.hybridTracker.trackEvent(eventName, eventData);
  }
  
  trackConversion(eventName, parameters = {}) {
    const utmData = this.getUTMData();
    const conversionData = {
      ...parameters,
      ...utmData,
      conversion_value: parameters.value || 1,
      currency: 'USD',
      timestamp: Date.now()
    };
    
    // Enhanced Google Analytics 4 conversion tracking
    if (this.isGA4Loaded && typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        ...conversionData,
        custom_parameter_vertical: utmData.vertical,
        session_start: utmData.session_start,
        landing_page: utmData.landing_page
      });
      
      // Also track as enhanced conversion
      gtag('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID/CONVERSION_ID',
        value: conversionData.conversion_value,
        currency: 'USD',
        ...conversionData
      });
    }
    
    // Facebook Pixel conversion tracking
    if (this.isFBPixelLoaded && typeof fbq !== 'undefined') {
      fbq('track', 'Lead', {
        content_name: `${utmData.vertical || 'general'}_lead`,
        content_category: utmData.vertical || 'general',
        value: conversionData.conversion_value,
        currency: 'USD'
      });
    }
    
    // Hybrid tracking for conversion
    this.hybridTracker.trackEvent('conversion', conversionData);
  }
  
  mapToFBEvent(eventName) {
    const eventMap = {
      'form_opened': 'InitiateCheckout',
      'generate_lead': 'Lead',
      'form_submitted': 'CompleteRegistration',
      'page_view': 'PageView',
      'button_click': 'ViewContent'
    };
    
    return eventMap[eventName] || null;
  }
  
  getUTMData() {
    return {
      utm_source: getCookie('utm_utm_source'),
      utm_medium: getCookie('utm_utm_medium'),
      utm_campaign: getCookie('utm_utm_campaign'),
      utm_term: getCookie('utm_utm_term'),
      utm_content: getCookie('utm_utm_content'),
      email: getCookie('utm_email'),
      vertical: getCookie('utm_vertical'),
      landing_page: getCookie('landing_page'),
      session_start: getCookie('session_start'),
      session_id: getCookie('session_id')
    };
  }
}

export class HybridTracker {
  constructor(serverEndpoint) {
    this.serverEndpoint = serverEndpoint;
    this.clientEvents = [];
    this.batchSize = 10;
    this.flushInterval = 5000;
    this.startBatching();
  }
  
  trackEvent(eventName, properties) {
    const eventData = {
      event: eventName,
      properties: {
        ...properties,
        timestamp: Date.now(),
        url: window.location.href,
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        viewport_size: `${window.innerWidth}x${window.innerHeight}`
      }
    };
    
    this.clientEvents.push(eventData);
    
    if (this.clientEvents.length >= this.batchSize) {
      this.flush();
    }
  }
  
  async flush() {
    if (this.clientEvents.length === 0) return;
    
    const batch = [...this.clientEvents];
    this.clientEvents = [];
    
    try {
      await fetch(this.serverEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          events: batch,
          session_id: getCookie('session_id'),
          client_timestamp: Date.now()
        })
      });
    } catch (error) {
      console.error('Hybrid tracking flush failed:', error);
      // Re-add events to queue for retry
      this.clientEvents.unshift(...batch);
    }
  }
  
  startBatching() {
    setInterval(() => {
      this.flush();
    }, this.flushInterval);
    
    // Flush on page unload
    window.addEventListener('beforeunload', () => {
      this.flush();
    });
    
    // Flush on page visibility change (mobile optimization)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.flush();
      }
    });
  }
}