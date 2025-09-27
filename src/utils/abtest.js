import { setCookie, getCookie } from './cookies.js';

export class ABTestManager {
  constructor() {
    this.tests = new Map();
    this.initializeTests();
  }
  
  initializeTests() {
    // Define A/B tests
    this.addTest('headline_test_2024', {
      variants: ['control', 'variant'],
      traffic: 0.5, // 50% split
      description: 'Test different headline approaches'
    });
    
    this.addTest('cta_button_test', {
      variants: ['control', 'variant'],
      traffic: 0.5,
      description: 'Test different CTA button text'
    });
    
    this.addTest('form_layout_test', {
      variants: ['control', 'variant_compact', 'variant_multi_step'],
      traffic: 0.33, // 33% each
      description: 'Test different form layouts'
    });
  }
  
  addTest(testId, config) {
    this.tests.set(testId, {
      id: testId,
      variants: config.variants,
      traffic: config.traffic,
      description: config.description,
      isActive: true
    });
  }
  
  getVariant(testId) {
    const test = this.tests.get(testId);
    if (!test || !test.isActive) {
      return 'control';
    }
    
    // Check if user already has a variant assigned
    const cookieKey = `ab_test_${testId}`;
    const existingVariant = getCookie(cookieKey);
    if (existingVariant && test.variants.includes(existingVariant)) {
      return existingVariant;
    }
    
    // Assign new variant based on user ID or random
    const userId = this.getUserId();
    const variant = this.assignVariant(testId, userId);
    
    // Store variant in cookie for consistency
    setCookie(cookieKey, variant, 30); // 30 days
    
    return variant;
  }
  
  assignVariant(testId, userId) {
    const test = this.tests.get(testId);
    if (!test) return 'control';
    
    // Use deterministic assignment based on user ID for consistency
    const hash = this.hashCode(userId + testId);
    const bucket = Math.abs(hash) % 100;
    
    const variants = test.variants;
    const trafficPerVariant = Math.floor(100 / variants.length);
    
    for (let i = 0; i < variants.length; i++) {
      const lowerBound = i * trafficPerVariant;
      const upperBound = (i + 1) * trafficPerVariant;
      
      if (bucket >= lowerBound && bucket < upperBound) {
        return variants[i];
      }
    }
    
    // Fallback to last variant for any remaining traffic
    return variants[variants.length - 1];
  }
  
  getUserId() {
    let userId = getCookie('ab_user_id');
    if (!userId) {
      userId = this.generateUserId();
      setCookie('ab_user_id', userId, 365); // 1 year
    }
    return userId;
  }
  
  generateUserId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
  
  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }
  
  trackVariantImpression(testId, variant) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'experiment_impression', {
        experiment_id: testId,
        variant_id: variant,
        non_interaction: true
      });
    }
    
    // Track to internal analytics
    this.trackEvent('ab_test_impression', {
      test_id: testId,
      variant: variant,
      user_id: this.getUserId()
    });
  }
  
  trackConversion(testId, variant, conversionType = 'primary', value = 1) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'experiment_conversion', {
        experiment_id: testId,
        variant_id: variant,
        conversion_type: conversionType,
        value: value
      });
    }
    
    // Track to internal analytics
    this.trackEvent('ab_test_conversion', {
      test_id: testId,
      variant: variant,
      conversion_type: conversionType,
      value: value,
      user_id: this.getUserId()
    });
  }
  
  trackEvent(eventName, properties) {
    // Send to analytics endpoint
    fetch('/api/analytics/ab-test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event: eventName,
        properties: {
          ...properties,
          timestamp: Date.now(),
          url: window.location.href
        }
      })
    }).catch(error => {
      console.error('A/B test tracking failed:', error);
    });
  }
  
  getActiveTests() {
    return Array.from(this.tests.values()).filter(test => test.isActive);
  }
  
  getTestConfig(testId) {
    return this.tests.get(testId);
  }
  
  disableTest(testId) {
    const test = this.tests.get(testId);
    if (test) {
      test.isActive = false;
    }
  }
  
  enableTest(testId) {
    const test = this.tests.get(testId);
    if (test) {
      test.isActive = true;
    }
  }
}

export class ABTestCalculator {
  static calculateZScore(controlConversions, controlVisitors, variantConversions, variantVisitors) {
    const p1 = controlConversions / controlVisitors;
    const p2 = variantConversions / variantVisitors;
    const pPool = (controlConversions + variantConversions) / (controlVisitors + variantVisitors);
    
    if (pPool === 0 || pPool === 1) {
      return 0; // Avoid division by zero
    }
    
    const se = Math.sqrt(pPool * (1 - pPool) * (1/controlVisitors + 1/variantVisitors));
    return se === 0 ? 0 : (p2 - p1) / se;
  }
  
  static calculatePValue(zScore) {
    // Approximation of the cumulative standard normal distribution
    const z = Math.abs(zScore);
    const t = 1 / (1 + 0.2316419 * z);
    const d = 0.3989423 * Math.exp(-z * z / 2);
    const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return 2 * prob; // Two-tailed test
  }
  
  static analyzeTest(controlConv, controlVis, variantConv, variantVis) {
    if (controlVis === 0 || variantVis === 0) {
      return {
        error: 'Insufficient data for analysis',
        controlRate: 0,
        variantRate: 0,
        lift: 0,
        pValue: 1,
        isSignificant: false,
        confidence: 0
      };
    }
    
    const controlRate = controlConv / controlVis;
    const variantRate = variantConv / variantVis;
    const zScore = this.calculateZScore(controlConv, controlVis, variantConv, variantVis);
    const pValue = this.calculatePValue(zScore);
    const lift = controlRate === 0 ? 0 : ((variantRate - controlRate) / controlRate * 100);
    
    return {
      controlRate: (controlRate * 100).toFixed(2),
      variantRate: (variantRate * 100).toFixed(2),
      lift: lift.toFixed(2),
      pValue: pValue.toFixed(4),
      isSignificant: pValue < 0.05,
      confidence: ((1 - pValue) * 100).toFixed(1),
      zScore: zScore.toFixed(2),
      sampleSize: {
        control: controlVis,
        variant: variantVis
      }
    };
  }
  
  static calculateMinimumSampleSize(baselineRate, minimumDetectableEffect, alpha = 0.05, power = 0.8) {
    // Calculate minimum sample size for A/B test
    const zAlpha = 1.96; // For 95% confidence
    const zBeta = 0.84;  // For 80% power
    
    const p1 = baselineRate;
    const p2 = baselineRate * (1 + minimumDetectableEffect);
    const pBar = (p1 + p2) / 2;
    
    const numerator = Math.pow(zAlpha * Math.sqrt(2 * pBar * (1 - pBar)) + zBeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2)), 2);
    const denominator = Math.pow(p2 - p1, 2);
    
    return Math.ceil(numerator / denominator);
  }
}