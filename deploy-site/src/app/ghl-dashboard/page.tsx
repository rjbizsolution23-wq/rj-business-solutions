'use client';

import { useState, useEffect } from 'react';
import ghlApi from '@/lib/ghl-api';

export default function GHLDashboard() {
  const [contacts, setContacts] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('contacts');
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [contactsData, opportunitiesData, campaignsData] = await Promise.all([
        ghlApi.getContacts(),
        ghlApi.getOpportunities(),
        ghlApi.getCampaigns()
      ]);
      
      setContacts(contactsData.contacts || []);
      setOpportunities(opportunitiesData.opportunities || []);
      setCampaigns(campaignsData.campaigns || []);
    } catch (error) {
      console.error('Error loading GHL data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateContact = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await ghlApi.createContact(newContact);
      setMessage('Contact created successfully!');
      setNewContact({ firstName: '', lastName: '', email: '', phone: '' });
      loadData();
    } catch (error) {
      setMessage('Error creating contact');
    }
  };

  const handleSendSMS = async (contactId: string, name: string) => {
    const message = prompt(`Send SMS to ${name}:`);
    if (message) {
      try {
        await ghlApi.sendSMS(contactId, message);
        setMessage('SMS sent successfully!');
      } catch (error) {
        setMessage('Error sending SMS');
      }
    }
  };

  const handleSendEmail = async (contactId: string, name: string) => {
    const subject = prompt(`Email subject for ${name}:`);
    const body = prompt('Email body:');
    if (subject && body) {
      try {
        await ghlApi.sendEmail(contactId, subject, body);
        setMessage('Email sent successfully!');
      } catch (error) {
        setMessage('Error sending email');
      }
    }
  };

  const handleAddTag = async (contactId: string, name: string) => {
    const tag = prompt(`Add tag to ${name}:`);
    if (tag) {
      try {
        await ghlApi.addTag(contactId, tag);
        setMessage('Tag added successfully!');
        loadData();
      } catch (error) {
        setMessage('Error adding tag');
      }
    }
  };

  const handleDeleteContact = async (contactId: string, name: string) => {
    if (confirm(`Delete contact ${name}?`)) {
      try {
        await ghlApi.deleteContact(contactId);
        setMessage('Contact deleted successfully!');
        loadData();
      } catch (error) {
        setMessage('Error deleting contact');
      }
    }
  };

  if (loading) return <div className="p-8">Loading GHL data...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">GHL Management Dashboard</h1>
        
        {message && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">
            {message}
          </div>
        )}

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          {['contacts', 'opportunities', 'campaigns', 'create'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium capitalize ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Contacts ({contacts.length})</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Name</th>
                    <th className="text-left p-2">Email</th>
                    <th className="text-left p-2">Phone</th>
                    <th className="text-left p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact: any) => (
                    <tr key={contact.id} className="border-b hover:bg-gray-50">
                      <td className="p-2">{contact.firstName} {contact.lastName}</td>
                      <td className="p-2">{contact.email}</td>
                      <td className="p-2">{contact.phone}</td>
                      <td className="p-2">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleSendSMS(contact.id, contact.firstName)}
                            className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                          >
                            SMS
                          </button>
                          <button
                            onClick={() => handleSendEmail(contact.id, contact.firstName)}
                            className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                          >
                            Email
                          </button>
                          <button
                            onClick={() => handleAddTag(contact.id, contact.firstName)}
                            className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600"
                          >
                            Tag
                          </button>
                          <button
                            onClick={() => handleDeleteContact(contact.id, contact.firstName)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Opportunities Tab */}
        {activeTab === 'opportunities' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Opportunities ({opportunities.length})</h2>
            <div className="grid gap-4">
              {opportunities.map((opp: any) => (
                <div key={opp.id} className="border rounded-lg p-4 hover:shadow-md">
                  <h3 className="font-bold">{opp.name || opp.title}</h3>
                  <p className="text-gray-600">Status: {opp.status}</p>
                  <p className="text-gray-600">Value: ${opp.monetaryValue || 0}</p>
                  <p className="text-gray-600">Stage: {opp.pipelineStage}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Campaigns ({campaigns.length})</h2>
            <div className="grid gap-4">
              {campaigns.map((campaign: any) => (
                <div key={campaign.id} className="border rounded-lg p-4 hover:shadow-md">
                  <h3 className="font-bold">{campaign.name}</h3>
                  <p className="text-gray-600">Status: {campaign.status}</p>
                  <p className="text-gray-600">Type: {campaign.type}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Create Contact Tab */}
        {activeTab === 'create' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Create New Contact</h2>
            <form onSubmit={handleCreateContact} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  value={newContact.firstName}
                  onChange={(e) => setNewContact({...newContact, firstName: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  value={newContact.lastName}
                  onChange={(e) => setNewContact({...newContact, lastName: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  value={newContact.email}
                  onChange={(e) => setNewContact({...newContact, email: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
              >
                Create Contact
              </button>
            </form>
          </div>
        )}

        {/* Webhook Setup Instructions */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-2">Setup GHL Webhooks</h3>
          <p className="mb-2">To receive real-time updates, add this webhook URL in your GHL settings:</p>
          <code className="block bg-gray-100 p-2 rounded">
            https://rjbusinesssolutions.org/api/ghl/webhooks
          </code>
          <p className="mt-2 text-sm text-gray-600">
            Go to Settings → Webhooks → Add Webhook in your GHL account
          </p>
        </div>
      </div>
    </div>
  );
}