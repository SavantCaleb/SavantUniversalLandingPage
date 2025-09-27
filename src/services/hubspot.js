export class HubSpotService {
  constructor(apiKey, portalId) {
    this.apiKey = apiKey;
    this.portalId = portalId;
    this.baseUrl = 'https://api.hubapi.com';
  }
  
  async createContact(formData) {
    const hubspotData = {
      properties: {
        email: formData.email,
        firstname: formData.firstName,
        lastname: formData.lastName,
        company: formData.company,
        phone: formData.phone,
        industry: formData.industry,
        message: formData.message,
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_term: formData.utm_term,
        utm_content: formData.utm_content,
        business_vertical: formData.vertical,
        landing_page: formData.landing_page,
        session_id: formData.session_id,
        ab_test_variant: formData.variant,
        lead_source: 'Website Form'
      }
    };
    
    try {
      const response = await fetch(`${this.baseUrl}/crm/v3/objects/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(hubspotData)
      });
      
      if (!response.ok) {
        throw new Error(`HubSpot API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('HubSpot contact creation failed:', error);
      throw error;
    }
  }
  
  async submitForm(formData, formGuid) {
    const submissionData = {
      fields: [
        { name: 'email', value: formData.email },
        { name: 'firstname', value: formData.firstName },
        { name: 'lastname', value: formData.lastName },
        { name: 'company', value: formData.company },
        { name: 'phone', value: formData.phone },
        { name: 'industry', value: formData.industry },
        { name: 'message', value: formData.message }
      ],
      context: {
        hutk: this.getHubSpotCookie(),
        pageUri: window.location.href,
        pageName: document.title
      }
    };
    
    try {
      const response = await fetch(`${this.baseUrl}/submissions/v3/integration/submit/${this.portalId}/${formGuid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });
      
      if (!response.ok) {
        throw new Error(`HubSpot form submission error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('HubSpot form submission failed:', error);
      throw error;
    }
  }
  
  getHubSpotCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'hubspotutk') {
        return value;
      }
    }
    return null;
  }
  
  async trackEvent(eventName, properties) {
    const eventData = {
      eventName,
      properties: {
        ...properties,
        timestamp: Date.now()
      }
    };
    
    try {
      const response = await fetch(`${this.baseUrl}/events/v3/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(eventData)
      });
      
      if (!response.ok) {
        throw new Error(`HubSpot event tracking error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('HubSpot event tracking failed:', error);
      throw error;
    }
  }
}