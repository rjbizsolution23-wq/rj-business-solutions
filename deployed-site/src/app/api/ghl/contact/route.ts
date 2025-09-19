import { NextRequest, NextResponse } from 'next/server'

const GHL_API_KEY = process.env.GHL_API_KEY
const GHL_LOCATION_ID = 'qQnxRHDtyx0uydPd5sRl'

export async function POST(request: NextRequest) {
  console.log('Received form submission')
  
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body
    
    console.log('Form data:', { name, email, phone, company, message })
    
    // Log the API key (first few characters only for security)
    console.log('Using API Key:', GHL_API_KEY?.substring(0, 20) + '...')
    
    // Create contact in Go High Level using v2 API
    const contactPayload = {
      firstName: name.split(' ')[0],
      lastName: name.split(' ').slice(1).join(' ') || '',
      email,
      phone,
      companyName: company || '',
      tags: ['website-lead', 'ai-automation', 'rjbusinesssolutions.org'],
      source: 'Website Contact Form',
      customFields: [
        {
          key: 'message',
          value: message || 'No message provided'
        },
        {
          key: 'source_url',
          value: 'https://rjbusinesssolutions.org'
        }
      ]
    }
    
    console.log('Sending to GHL:', JSON.stringify(contactPayload, null, 2))
    
    const ghlResponse = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        ...contactPayload
      }),
    })
    
    const responseText = await ghlResponse.text()
    console.log('GHL Response Status:', ghlResponse.status)
    console.log('GHL Response:', responseText)
    
    if (!ghlResponse.ok) {
      console.error('GHL Error Response:', responseText)
      
      // Try alternate endpoint if first one fails
      console.log('Trying alternate GHL endpoint...')
      const altResponse = await fetch(`https://rest.gohighlevel.com/v1/contacts/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          locationId: GHL_LOCATION_ID,
          ...contactPayload
        }),
      })
      
      const altResponseText = await altResponse.text()
      console.log('Alt GHL Response:', altResponseText)
      
      if (!altResponse.ok) {
        throw new Error(`Failed to create contact in GHL: ${altResponseText}`)
      }
      
      const contact = JSON.parse(altResponseText)
      console.log('Contact created successfully:', contact)
      
      return NextResponse.json({ 
        success: true, 
        message: 'Contact created successfully (fallback)',
        contactId: contact.contact?.id || contact.id
      })
    }
    
    const contact = JSON.parse(responseText)
    console.log('Contact created successfully:', contact)
    
    // Try to send automated SMS (optional - don't fail if this doesn't work)
    try {
      const smsPayload = {
        type: 'SMS',
        contactId: contact.contact?.id || contact.id,
        message: `Hi ${name.split(' ')[0]}, thank you for contacting RJ Business Solutions! We've received your inquiry about AI automation solutions. Rick Jefferson will reach out within 24 hours to discuss how we can transform your business. For immediate assistance, call us at (877) 561-8001.`,
      }
      
      await fetch('https://services.leadconnectorhq.com/conversations/messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify(smsPayload),
      })
      console.log('SMS sent successfully')
    } catch (smsError) {
      console.log('SMS sending failed (non-critical):', smsError)
    }
    
    // Try to create a task (optional - don't fail if this doesn't work)
    try {
      const taskPayload = {
        title: `Follow up with ${name} - ${company || 'Individual'}`,
        description: `Contact requested AI automation consultation. Message: ${message}`,
        dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        contactId: contact.contact?.id || contact.id,
        assignedTo: 'rick@rjbusinesssolutions.org',
      }
      
      await fetch('https://services.leadconnectorhq.com/tasks/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify(taskPayload),
      })
      console.log('Task created successfully')
    } catch (taskError) {
      console.log('Task creation failed (non-critical):', taskError)
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Contact created successfully',
      contactId: contact.contact?.id || contact.id
    })
  } catch (error) {
    console.error('Error creating contact:', error)
    
    // Even if GHL fails, we can still log the submission
    console.log('IMPORTANT: Form submission that failed to sync to GHL:')
    console.log('=====================================')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Form Data:', await request.json().catch(() => 'Could not parse'))
    console.log('=====================================')
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'We received your submission but had trouble syncing with our CRM. Please call us at (877) 561-8001 or email rick@rjbusinesssolutions.org',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}