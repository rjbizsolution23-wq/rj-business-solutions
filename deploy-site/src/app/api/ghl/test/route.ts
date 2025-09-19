import { NextResponse } from 'next/server';
import ghlApi from '@/lib/ghl-api';

export async function GET() {
  const results: any = {};
  
  try {
    // Test getting contacts
    console.log('Testing: Get Contacts...');
    const contacts = await ghlApi.getContacts();
    results.contacts = { success: true, count: contacts.contacts?.length || 0 };
  } catch (error: any) {
    results.contacts = { success: false, error: error.message };
  }

  try {
    // Test getting opportunities
    console.log('Testing: Get Opportunities...');
    const opportunities = await ghlApi.getOpportunities();
    results.opportunities = { success: true, count: opportunities.opportunities?.length || 0 };
  } catch (error: any) {
    results.opportunities = { success: false, error: error.message };
  }

  try {
    // Test getting campaigns
    console.log('Testing: Get Campaigns...');
    const campaigns = await ghlApi.getCampaigns();
    results.campaigns = { success: true, count: campaigns.campaigns?.length || 0 };
  } catch (error: any) {
    results.campaigns = { success: false, error: error.message };
  }

  try {
    // Test getting workflows
    console.log('Testing: Get Workflows...');
    const workflows = await ghlApi.getWorkflows();
    results.workflows = { success: true, count: workflows.workflows?.length || 0 };
  } catch (error: any) {
    results.workflows = { success: false, error: error.message };
  }

  try {
    // Test getting calendars
    console.log('Testing: Get Calendars...');
    const calendars = await ghlApi.getCalendars();
    results.calendars = { success: true, count: calendars.calendars?.length || 0 };
  } catch (error: any) {
    results.calendars = { success: false, error: error.message };
  }

  try {
    // Test getting forms
    console.log('Testing: Get Forms...');
    const forms = await ghlApi.getForms();
    results.forms = { success: true, count: forms.forms?.length || 0 };
  } catch (error: any) {
    results.forms = { success: false, error: error.message };
  }

  try {
    // Test getting custom fields
    console.log('Testing: Get Custom Fields...');
    const customFields = await ghlApi.getCustomFields();
    results.customFields = { success: true, count: customFields.customFields?.length || 0 };
  } catch (error: any) {
    results.customFields = { success: false, error: error.message };
  }

  try {
    // Test getting tags
    console.log('Testing: Get Tags...');
    const tags = await ghlApi.getTags();
    results.tags = { success: true, count: tags.tags?.length || 0 };
  } catch (error: any) {
    results.tags = { success: false, error: error.message };
  }

  try {
    // Test getting users
    console.log('Testing: Get Users...');
    const users = await ghlApi.getUsers();
    results.users = { success: true, count: users.users?.length || 0 };
  } catch (error: any) {
    results.users = { success: false, error: error.message };
  }

  try {
    // Test getting location settings
    console.log('Testing: Get Location Settings...');
    const location = await ghlApi.getLocationSettings();
    results.location = { success: true, name: location.name || 'Unknown' };
  } catch (error: any) {
    results.location = { success: false, error: error.message };
  }

  // Calculate success rate
  const totalTests = Object.keys(results).length;
  const successfulTests = Object.values(results).filter((r: any) => r.success).length;
  const successRate = Math.round((successfulTests / totalTests) * 100);

  return NextResponse.json({
    message: 'GHL API Test Results',
    locationId: 'og3uHNkGTLO2mJrIVHb9',
    timestamp: new Date().toISOString(),
    successRate: `${successRate}%`,
    summary: `${successfulTests}/${totalTests} tests passed`,
    results,
    dashboardUrl: 'https://rjbusinesssolutions.org/ghl-dashboard',
    webhookUrl: 'https://rjbusinesssolutions.org/api/ghl/webhooks'
  });
}