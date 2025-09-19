// Full GHL API Integration
const GHL_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55SWQiOiJvZzN1SE5rR1RMTzJtSnJJVkhiOSIsImxvY2F0aW9uSWQiOiJvZzN1SE5rR1RMTzJtSnJJVkhiOSIsInZlcnNpb24iOiJ2MSIsImlhdCI6MTcxNjQwNTI4OTI0MiwibmJmIjoxNzE2NDA1Mjg5MjQyfQ._telkkquCAQQGykE7Dm6N2pKgLF9jKz9dQWtJVJq37A';
const LOCATION_ID = 'og3uHNkGTLO2mJrIVHb9';
const GHL_BASE_URL = 'https://services.leadconnectorhq.com';

class GHLApi {
  private headers = {
    'Authorization': `Bearer ${GHL_API_KEY}`,
    'Content-Type': 'application/json',
    'Version': '2021-07-28'
  };

  // CONTACTS
  async createContact(data: any) {
    const response = await fetch(`${GHL_BASE_URL}/contacts/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        locationId: LOCATION_ID,
        ...data
      })
    });
    return response.json();
  }

  async getContacts() {
    const response = await fetch(`${GHL_BASE_URL}/contacts/?locationId=${LOCATION_ID}`, {
      headers: this.headers
    });
    return response.json();
  }

  async getContact(contactId: string) {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
      headers: this.headers
    });
    return response.json();
  }

  async updateContact(contactId: string, data: any) {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data)
    });
    return response.json();
  }

  async deleteContact(contactId: string) {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}`, {
      method: 'DELETE',
      headers: this.headers
    });
    return response.json();
  }

  // OPPORTUNITIES/PIPELINES
  async createOpportunity(data: any) {
    const response = await fetch(`${GHL_BASE_URL}/opportunities/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        locationId: LOCATION_ID,
        ...data
      })
    });
    return response.json();
  }

  async getOpportunities() {
    const response = await fetch(`${GHL_BASE_URL}/opportunities/search?location_id=${LOCATION_ID}`, {
      headers: this.headers
    });
    return response.json();
  }

  async updateOpportunity(opportunityId: string, data: any) {
    const response = await fetch(`${GHL_BASE_URL}/opportunities/${opportunityId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data)
    });
    return response.json();
  }

  // CALENDARS
  async getCalendars() {
    const response = await fetch(`${GHL_BASE_URL}/calendars/?locationId=${LOCATION_ID}`, {
      headers: this.headers
    });
    return response.json();
  }

  async createAppointment(data: any) {
    const response = await fetch(`${GHL_BASE_URL}/calendars/events`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        locationId: LOCATION_ID,
        ...data
      })
    });
    return response.json();
  }

  // CONVERSATIONS
  async sendSMS(contactId: string, message: string) {
    const response = await fetch(`${GHL_BASE_URL}/conversations/messages`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        type: 'SMS',
        locationId: LOCATION_ID,
        contactId,
        message
      })
    });
    return response.json();
  }

  async sendEmail(contactId: string, subject: string, body: string) {
    const response = await fetch(`${GHL_BASE_URL}/conversations/messages`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        type: 'Email',
        locationId: LOCATION_ID,
        contactId,
        subject,
        html: body
      })
    });
    return response.json();
  }

  // WORKFLOWS
  async triggerWorkflow(workflowId: string, contactId: string) {
    const response = await fetch(`${GHL_BASE_URL}/workflows/${workflowId}/trigger`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        locationId: LOCATION_ID,
        contactId
      })
    });
    return response.json();
  }

  async getWorkflows() {
    const response = await fetch(`${GHL_BASE_URL}/workflows/?locationId=${LOCATION_ID}`, {
      headers: this.headers
    });
    return response.json();
  }

  // FORMS
  async getForms() {
    const response = await fetch(`${GHL_BASE_URL}/forms/?locationId=${LOCATION_ID}`, {
      headers: this.headers
    });
    return response.json();
  }

  async submitForm(formId: string, data: any) {
    const response = await fetch(`${GHL_BASE_URL}/forms/submit`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        formId,
        locationId: LOCATION_ID,
        ...data
      })
    });
    return response.json();
  }

  // CUSTOM FIELDS
  async getCustomFields() {
    const response = await fetch(`${GHL_BASE_URL}/locations/${LOCATION_ID}/customFields`, {
      headers: this.headers
    });
    return response.json();
  }

  async createCustomField(data: any) {
    const response = await fetch(`${GHL_BASE_URL}/locations/${LOCATION_ID}/customFields`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    });
    return response.json();
  }

  // TAGS
  async getTags() {
    const response = await fetch(`${GHL_BASE_URL}/locations/${LOCATION_ID}/tags`, {
      headers: this.headers
    });
    return response.json();
  }

  async addTag(contactId: string, tag: string) {
    const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/tags`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ tags: [tag] })
    });
    return response.json();
  }

  // CAMPAIGNS
  async getCampaigns() {
    const response = await fetch(`${GHL_BASE_URL}/campaigns/?locationId=${LOCATION_ID}`, {
      headers: this.headers
    });
    return response.json();
  }

  async addToCampaign(campaignId: string, contactId: string) {
    const response = await fetch(`${GHL_BASE_URL}/campaigns/${campaignId}/contacts/${contactId}`, {
      method: 'POST',
      headers: this.headers
    });
    return response.json();
  }

  // USERS
  async getUsers() {
    const response = await fetch(`${GHL_BASE_URL}/users/?locationId=${LOCATION_ID}`, {
      headers: this.headers
    });
    return response.json();
  }

  // LOCATION SETTINGS
  async getLocationSettings() {
    const response = await fetch(`${GHL_BASE_URL}/locations/${LOCATION_ID}`, {
      headers: this.headers
    });
    return response.json();
  }

  async updateLocationSettings(data: any) {
    const response = await fetch(`${GHL_BASE_URL}/locations/${LOCATION_ID}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data)
    });
    return response.json();
  }
}

export const ghlApi = new GHLApi();
export default ghlApi;