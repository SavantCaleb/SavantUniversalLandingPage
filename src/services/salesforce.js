export class SalesforceService {
  constructor(orgId, webToLeadUrl = 'https://webto.salesforce.com/servlet/servlet.WebToLead') {
    this.orgId = orgId;
    this.webToLeadUrl = webToLeadUrl;
  }
  
  async submitLead(formData) {
    const salesforceData = new FormData();
    
    // Standard Salesforce Web-to-Lead fields
    salesforceData.append('oid', this.orgId);
    salesforceData.append('retURL', window.location.origin + '/thank-you');
    salesforceData.append('first_name', formData.firstName);
    salesforceData.append('last_name', formData.lastName);
    salesforceData.append('email', formData.email);
    salesforceData.append('phone', formData.phone);
    salesforceData.append('company', formData.company);
    salesforceData.append('description', formData.message);
    
    // Custom fields (these IDs need to be configured in your Salesforce org)
    salesforceData.append('00N5000000xxxxx', formData.industry); // Industry custom field
    salesforceData.append('00N5000000yyyyy', formData.utm_source); // UTM Source
    salesforceData.append('00N5000000zzzzz', formData.utm_campaign); // UTM Campaign
    salesforceData.append('00N5000000aaaaa', formData.vertical); // Business Vertical
    salesforceData.append('00N5000000bbbbb', formData.landing_page); // Landing Page
    salesforceData.append('00N5000000ccccc', formData.variant); // A/B Test Variant
    salesforceData.append('00N5000000ddddd', formData.session_id); // Session ID
    
    // Lead source
    salesforceData.append('lead_source', 'Website');
    
    try {
      const response = await fetch(`${this.webToLeadUrl}?encoding=UTF-8`, {
        method: 'POST',
        mode: 'no-cors', // Required for Salesforce Web-to-Lead
        body: salesforceData
      });
      
      // Note: Due to no-cors mode, we can't check response status
      // Assume success if no error is thrown
      return { success: true, message: 'Lead submitted to Salesforce' };
    } catch (error) {
      console.error('Salesforce submission failed:', error);
      throw error;
    }
  }
  
  // Alternative method using Salesforce REST API (requires CORS setup)
  async submitLeadViaAPI(formData, accessToken) {
    const leadData = {
      FirstName: formData.firstName,
      LastName: formData.lastName,
      Email: formData.email,
      Phone: formData.phone,
      Company: formData.company,
      Description: formData.message,
      Industry: formData.industry,
      LeadSource: 'Website',
      UTM_Source__c: formData.utm_source,
      UTM_Campaign__c: formData.utm_campaign,
      Business_Vertical__c: formData.vertical,
      Landing_Page__c: formData.landing_page,
      AB_Test_Variant__c: formData.variant,
      Session_ID__c: formData.session_id
    };
    
    try {
      const response = await fetch('/services/data/v57.0/sobjects/Lead/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(leadData)
      });
      
      if (!response.ok) {
        throw new Error(`Salesforce API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Salesforce API submission failed:', error);
      throw error;
    }
  }
  
  async updateLead(leadId, updateData, accessToken) {
    try {
      const response = await fetch(`/services/data/v57.0/sobjects/Lead/${leadId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(updateData)
      });
      
      if (!response.ok) {
        throw new Error(`Salesforce update error: ${response.status}`);
      }
      
      return { success: true };
    } catch (error) {
      console.error('Salesforce lead update failed:', error);
      throw error;
    }
  }
  
  // Helper method to validate required fields
  validateLeadData(formData) {
    const required = ['firstName', 'lastName', 'email'];
    const missing = required.filter(field => !formData[field]);
    
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(', ')}`);
    }
    
    return true;
  }
}