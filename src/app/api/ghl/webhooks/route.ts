import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// GHL Webhook Handler
const WEBHOOK_SECRET = 'your_webhook_secret'; // Set this in GHL webhook settings

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-ghl-signature');

    // Verify webhook signature (optional but recommended)
    if (WEBHOOK_SECRET && signature) {
      const expectedSignature = crypto
        .createHmac('sha256', WEBHOOK_SECRET)
        .update(body)
        .digest('hex');

      if (signature !== expectedSignature) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
      }
    }

    const data = JSON.parse(body);
    const { type, locationId, contactId, opportunityId } = data;

    console.log('GHL Webhook received:', type, data);

    // Handle different webhook types
    switch (type) {
      case 'ContactCreate':
        await handleContactCreate(data);
        break;
      case 'ContactUpdate':
        await handleContactUpdate(data);
        break;
      case 'ContactDelete':
        await handleContactDelete(data);
        break;
      case 'OpportunityCreate':
        await handleOpportunityCreate(data);
        break;
      case 'OpportunityStatusUpdate':
        await handleOpportunityStatusUpdate(data);
        break;
      case 'AppointmentScheduled':
        await handleAppointmentScheduled(data);
        break;
      case 'AppointmentCancelled':
        await handleAppointmentCancelled(data);
        break;
      case 'FormSubmitted':
        await handleFormSubmitted(data);
        break;
      case 'InboundMessage':
        await handleInboundMessage(data);
        break;
      case 'TaskCompleted':
        await handleTaskCompleted(data);
        break;
      case 'NoteAdded':
        await handleNoteAdded(data);
        break;
      case 'TagAdded':
        await handleTagAdded(data);
        break;
      case 'TagRemoved':
        await handleTagRemoved(data);
        break;
      case 'WorkflowCompleted':
        await handleWorkflowCompleted(data);
        break;
      default:
        console.log('Unhandled webhook type:', type);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

// Webhook Handlers
async function handleContactCreate(data: any) {
  console.log('New contact created:', data.contact);
  // Add your logic here (e.g., send welcome email, add to CRM, etc.)
}

async function handleContactUpdate(data: any) {
  console.log('Contact updated:', data.contact);
  // Add your logic here
}

async function handleContactDelete(data: any) {
  console.log('Contact deleted:', data.contactId);
  // Add your logic here
}

async function handleOpportunityCreate(data: any) {
  console.log('New opportunity created:', data.opportunity);
  // Add your logic here
}

async function handleOpportunityStatusUpdate(data: any) {
  console.log('Opportunity status updated:', data.opportunity);
  // Add your logic here
}

async function handleAppointmentScheduled(data: any) {
  console.log('Appointment scheduled:', data.appointment);
  // Add your logic here
}

async function handleAppointmentCancelled(data: any) {
  console.log('Appointment cancelled:', data.appointment);
  // Add your logic here
}

async function handleFormSubmitted(data: any) {
  console.log('Form submitted:', data.submission);
  // Add your logic here
}

async function handleInboundMessage(data: any) {
  console.log('Inbound message received:', data.message);
  // Add your logic here (e.g., auto-reply, notification, etc.)
}

async function handleTaskCompleted(data: any) {
  console.log('Task completed:', data.task);
  // Add your logic here
}

async function handleNoteAdded(data: any) {
  console.log('Note added:', data.note);
  // Add your logic here
}

async function handleTagAdded(data: any) {
  console.log('Tag added:', data.tag);
  // Add your logic here
}

async function handleTagRemoved(data: any) {
  console.log('Tag removed:', data.tag);
  // Add your logic here
}

async function handleWorkflowCompleted(data: any) {
  console.log('Workflow completed:', data.workflow);
  // Add your logic here
}

export async function GET() {
  return NextResponse.json({ 
    message: 'GHL Webhook endpoint ready',
    webhookUrl: 'https://rjbusinesssolutions.org/api/ghl/webhooks',
    supportedEvents: [
      'ContactCreate',
      'ContactUpdate',
      'ContactDelete',
      'OpportunityCreate',
      'OpportunityStatusUpdate',
      'AppointmentScheduled',
      'AppointmentCancelled',
      'FormSubmitted',
      'InboundMessage',
      'TaskCompleted',
      'NoteAdded',
      'TagAdded',
      'TagRemoved',
      'WorkflowCompleted'
    ]
  });
}