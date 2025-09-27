import { setCookie, getCookie } from '../../utils/cookies.js';

export class UTMTracker {
  constructor() {
    this.captureUTMParameters();
    this.initializeAttribution();
  }

  captureUTMParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content'),
      email: urlParams.get('email'),
      vertical: urlParams.get('vertical')
    };

    Object.keys(utmParams).forEach(key => {
      if (utmParams[key]) {
        setCookie(`utm_${key}`, utmParams[key], 1);
      }
    });

    setCookie('landing_page', window.location.pathname, 1);
    setCookie('session_start', Date.now(), 1);
    
    if (!getCookie('session_id')) {
      setCookie('session_id', this.generateSessionId(), 1);
    }
  }

  generateSessionId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  addUTMHiddenFields(formSelector) {
    const forms = document.querySelectorAll(formSelector);
    const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'email', 'vertical'];

    forms.forEach(form => {
      utmFields.forEach(field => {
        const value = getCookie(`utm_${field}`);
        if (value) {
          let hiddenInput = form.querySelector(`input[name="${field}"]`);
          if (!hiddenInput) {
            hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = field;
            form.appendChild(hiddenInput);
          }
          hiddenInput.value = value;
        }
      });

      const sessionId = getCookie('session_id');
      if (sessionId) {
        let sessionInput = form.querySelector('input[name="session_id"]');
        if (!sessionInput) {
          sessionInput = document.createElement('input');
          sessionInput.type = 'hidden';
          sessionInput.name = 'session_id';
          form.appendChild(sessionInput);
        }
        sessionInput.value = sessionId;
      }
    });
  }

  initializeAttribution() {
    this.attributionTracker = new AttributionTracker();
    const source = getCookie('utm_utm_source');
    const medium = getCookie('utm_utm_medium');
    const campaign = getCookie('utm_utm_campaign');
    const vertical = getCookie('utm_vertical');

    if (source || medium || campaign || vertical) {
      this.attributionTracker.addTouchpoint(source, medium, campaign, vertical);
    }
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

export class AttributionTracker {
  constructor() {
    this.touchpoints = JSON.parse(localStorage.getItem('attribution_touchpoints') || '[]');
    this.attributionWindow = 30;
  }

  addTouchpoint(source, medium, campaign, vertical) {
    const touchpoint = {
      source,
      medium,
      campaign,
      vertical,
      timestamp: Date.now(),
      page: window.location.pathname
    };

    this.touchpoints.push(touchpoint);

    const cutoff = Date.now() - (this.attributionWindow * 24 * 60 * 60 * 1000);
    this.touchpoints = this.touchpoints.filter(tp => tp.timestamp > cutoff);

    localStorage.setItem('attribution_touchpoints', JSON.stringify(this.touchpoints));
  }

  getFirstTouchAttribution() {
    if (this.touchpoints.length === 0) return null;
    const firstTouch = this.touchpoints[0];
    return `${firstTouch.source}_${firstTouch.medium}`;
  }

  getLastTouchAttribution() {
    if (this.touchpoints.length === 0) return null;
    const lastTouch = this.touchpoints[this.touchpoints.length - 1];
    return `${lastTouch.source}_${lastTouch.medium}`;
  }

  getTimeDecayAttribution() {
    if (this.touchpoints.length === 0) return {};

    const now = Date.now();
    const weights = this.touchpoints.map(tp => {
      const daysOld = (now - tp.timestamp) / (24 * 60 * 60 * 1000);
      return Math.exp(-daysOld / 7);
    });

    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    const attribution = {};

    this.touchpoints.forEach((tp, index) => {
      const key = `${tp.source}_${tp.medium}`;
      const normalizedWeight = weights[index] / totalWeight;
      attribution[key] = (attribution[key] || 0) + normalizedWeight;
    });

    return attribution;
  }

  getLinearAttribution() {
    if (this.touchpoints.length === 0) return {};

    const attribution = {};
    const weight = 1 / this.touchpoints.length;

    this.touchpoints.forEach(tp => {
      const key = `${tp.source}_${tp.medium}`;
      attribution[key] = (attribution[key] || 0) + weight;
    });

    return attribution;
  }

  getAllTouchpoints() {
    return this.touchpoints;
  }
}