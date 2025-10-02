#!/usr/bin/env node

/**
 * ADDITIONAL PAGE GENERATOR
 * Generates metro area, suburb, and specialized pages to reach 300+ total pages
 */

const fs = require('fs');
const path = require('path');

// Generate metro area suburbs and specialized pages
const additionalLocations = {
  // NEW MEXICO METROS & SUBURBS
  newMexicoMetros: [
    // Albuquerque Metro
    { name: 'Rio Rancho', state: 'New Mexico', stateAbbr: 'NM', population: '104,046', businesses: '4,800+', focus: 'Residential & Tech', metro: 'Albuquerque' },
    { name: 'Bernalillo', state: 'New Mexico', stateAbbr: 'NM', population: '8,948', businesses: '380+', focus: 'Historic & Tourism', metro: 'Albuquerque' },
    { name: 'Corrales', state: 'New Mexico', stateAbbr: 'NM', population: '8,329', businesses: '420+', focus: 'Equestrian & Rural', metro: 'Albuquerque' },
    { name: 'Tijeras', state: 'New Mexico', stateAbbr: 'NM', population: '541', businesses: '45+', focus: 'Rural & Recreation', metro: 'Albuquerque' },
    
    // Santa Fe Metro
    { name: 'Eldorado', state: 'New Mexico', stateAbbr: 'NM', population: '6,130', businesses: '280+', focus: 'Residential & Arts', metro: 'Santa Fe' },
    { name: 'Tesuque', state: 'New Mexico', stateAbbr: 'NM', population: '909', businesses: '85+', focus: 'Arts & Tourism', metro: 'Santa Fe' },
    { name: 'Chimayo', state: 'New Mexico', stateAbbr: 'NM', population: '3,177', businesses: '120+', focus: 'Arts & Culture', metro: 'Santa Fe' },
    
    // Las Cruces Metro  
    { name: 'Mesilla', state: 'New Mexico', stateAbbr: 'NM', population: '2,196', businesses: '180+', focus: 'Historic & Tourism', metro: 'Las Cruces' },
    { name: 'Anthony', state: 'New Mexico', stateAbbr: 'NM', population: '9,360', businesses: '420+', focus: 'Border Trade', metro: 'Las Cruces' },
    { name: 'Sunland Park', state: 'New Mexico', stateAbbr: 'NM', population: '17,581', businesses: '680+', focus: 'Border & Gaming', metro: 'Las Cruces' }
  ],

  // TEXAS DFW METROPLEX SUBURBS
  texasDFW: [
    { name: 'Allen', state: 'Texas', stateAbbr: 'TX', population: '105,623', businesses: '8,500+', focus: 'Family & Sports', metro: 'Dallas-Fort Worth' },
    { name: 'Flower Mound', state: 'Texas', stateAbbr: 'TX', population: '75,956', businesses: '6,200+', focus: 'Corporate & Family', metro: 'Dallas-Fort Worth' },
    { name: 'Lewisville', state: 'Texas', stateAbbr: 'TX', population: '111,822', businesses: '7,800+', focus: 'Corporate & Lake Recreation', metro: 'Dallas-Fort Worth' },
    { name: 'Carrollton', state: 'Texas', stateAbbr: 'TX', population: '133,434', businesses: '9,600+', focus: 'Technology & Corporate', metro: 'Dallas-Fort Worth' },
    { name: 'Richardson', state: 'Texas', stateAbbr: 'TX', population: '119,469', businesses: '12,500+', focus: 'Technology & Telecom', metro: 'Dallas-Fort Worth' },
    { name: 'Addison', state: 'Texas', stateAbbr: 'TX', population: '16,661', businesses: '4,800+', focus: 'Corporate & Hospitality', metro: 'Dallas-Fort Worth' },
    { name: 'Southlake', state: 'Texas', stateAbbr: 'TX', population: '31,684', businesses: '3,200+', focus: 'Affluent & Corporate', metro: 'Dallas-Fort Worth' },
    { name: 'Grapevine', state: 'Texas', stateAbbr: 'TX', population: '50,195', businesses: '4,500+', focus: 'Tourism & Hospitality', metro: 'Dallas-Fort Worth' },
    { name: 'Euless', state: 'Texas', stateAbbr: 'TX', population: '56,334', businesses: '4,200+', focus: 'Aviation & Corporate', metro: 'Dallas-Fort Worth' },
    { name: 'Bedford', state: 'Texas', stateAbbr: 'TX', population: '49,765', businesses: '3,800+', focus: 'Corporate & Aviation', metro: 'Dallas-Fort Worth' }
  ],

  // TEXAS HOUSTON METRO SUBURBS  
  texasHouston: [
    { name: 'Sugar Land', state: 'Texas', stateAbbr: 'TX', population: '111,026', businesses: '8,900+', focus: 'Energy & Corporate', metro: 'Houston' },
    { name: 'Pearland', state: 'Texas', stateAbbr: 'TX', population: '125,817', businesses: '7,200+', focus: 'Energy & Family', metro: 'Houston' },
    { name: 'League City', state: 'Texas', stateAbbr: 'TX', population: '114,424', businesses: '6,500+', focus: 'Aerospace & Energy', metro: 'Houston' },
    { name: 'Missouri City', state: 'Texas', stateAbbr: 'TX', population: '74,259', businesses: '4,800+', focus: 'Energy & Residential', metro: 'Houston' },
    { name: 'Katy', state: 'Texas', stateAbbr: 'TX', population: '21,894', businesses: '3,200+', focus: 'Energy & Family', metro: 'Houston' },
    { name: 'Spring', state: 'Texas', stateAbbr: 'TX', population: '62,559', businesses: '4,500+', focus: 'Energy & Healthcare', metro: 'Houston' },
    { name: 'Tomball', state: 'Texas', stateAbbr: 'TX', population: '12,341', businesses: '1,200+', focus: 'Energy & Agriculture', metro: 'Houston' },
    { name: 'Cypress', state: 'Texas', stateAbbr: 'TX', population: '181,681', businesses: '8,900+', focus: 'Energy & Residential', metro: 'Houston' },
    { name: 'Humble', state: 'Texas', stateAbbr: 'TX', population: '16,795', businesses: '1,800+', focus: 'Energy & Logistics', metro: 'Houston' },
    { name: 'Kingwood', state: 'Texas', stateAbbr: 'TX', population: '71,552', businesses: '4,200+', focus: 'Energy & Residential', metro: 'Houston' }
  ],

  // ARIZONA PHOENIX METRO SUBURBS
  arizonaPhoenix: [
    { name: 'Fountain Hills', state: 'Arizona', stateAbbr: 'AZ', population: '25,167', businesses: '2,800+', focus: 'Retirement & Tourism', metro: 'Phoenix' },
    { name: 'Paradise Valley', state: 'Arizona', stateAbbr: 'AZ', population: '12,658', businesses: '1,500+', focus: 'Luxury & Tourism', metro: 'Phoenix' },
    { name: 'Cave Creek', state: 'Arizona', stateAbbr: 'AZ', population: '4,892', businesses: '680+', focus: 'Tourism & Recreation', metro: 'Phoenix' },
    { name: 'Carefree', state: 'Arizona', stateAbbr: 'AZ', population: '3,690', businesses: '420+', focus: 'Retirement & Arts', metro: 'Phoenix' },
    { name: 'Queen Creek', state: 'Arizona', stateAbbr: 'AZ', population: '59,519', businesses: '4,200+', focus: 'Family & Growth', metro: 'Phoenix' },
    { name: 'Anthem', state: 'Arizona', stateAbbr: 'AZ', population: '22,700', businesses: '1,800+', focus: 'Family & Corporate', metro: 'Phoenix' },
    { name: 'Ahwatukee', state: 'Arizona', stateAbbr: 'AZ', population: '80,868', businesses: '5,200+', focus: 'Corporate & Family', metro: 'Phoenix' },
    { name: 'Sun City', state: 'Arizona', stateAbbr: 'AZ', population: '37,499', businesses: '2,400+', focus: 'Retirement & Healthcare', metro: 'Phoenix' },
    { name: 'Sun City West', state: 'Arizona', stateAbbr: 'AZ', population: '24,535', businesses: '1,600+', focus: 'Retirement & Recreation', metro: 'Phoenix' },
    { name: 'El Mirage', state: 'Arizona', stateAbbr: 'AZ', population: '35,702', businesses: '1,900+', focus: 'Family & Growth', metro: 'Phoenix' }
  ],

  // WISCONSIN MILWAUKEE METRO SUBURBS
  wisconsinMilwaukee: [
    { name: 'Brookfield', state: 'Wisconsin', stateAbbr: 'WI', population: '38,649', businesses: '4,200+', focus: 'Corporate & Healthcare', metro: 'Milwaukee' },
    { name: 'Menomonee Falls', state: 'Wisconsin', stateAbbr: 'WI', population: '37,636', businesses: '3,800+', focus: 'Manufacturing & Corporate', metro: 'Milwaukee' },
    { name: 'New Berlin', state: 'Wisconsin', stateAbbr: 'WI', population: '39,834', businesses: '3,500+', focus: 'Manufacturing & Residential', metro: 'Milwaukee' },
    { name: 'Franklin', state: 'Wisconsin', stateAbbr: 'WI', population: '36,013', businesses: '2,900+', focus: 'Manufacturing & Family', metro: 'Milwaukee' },
    { name: 'Oak Creek', state: 'Wisconsin', stateAbbr: 'WI', population: '36,325', businesses: '3,200+', focus: 'Manufacturing & Airport', metro: 'Milwaukee' },
    { name: 'Germantown', state: 'Wisconsin', stateAbbr: 'WI', population: '20,093', businesses: '1,800+', focus: 'Manufacturing & Residential', metro: 'Milwaukee' },
    { name: 'Mequon', state: 'Wisconsin', stateAbbr: 'WI', population: '25,142', businesses: '2,400+', focus: 'Affluent & Corporate', metro: 'Milwaukee' },
    { name: 'Pewaukee', state: 'Wisconsin', stateAbbr: 'WI', population: '8,166', businesses: '890+', focus: 'Lake Recreation & Corporate', metro: 'Milwaukee' },
    { name: 'Sussex', state: 'Wisconsin', stateAbbr: 'WI', population: '10,884', businesses: '1,200+', focus: 'Manufacturing & Residential', metro: 'Milwaukee' },
    { name: 'Mukwonago', state: 'Wisconsin', stateAbbr: 'WI', population: '7,682', businesses: '680+', focus: 'Rural & Recreation', metro: 'Milwaukee' }
  ],

  // ILLINOIS CHICAGO SUBURBS (100-mile radius)
  illinoisChicago: [
    { name: 'Palatine', state: 'Illinois', stateAbbr: 'IL', population: '67,908', businesses: '6,200+', focus: 'Corporate & Manufacturing', metro: 'Chicago' },
    { name: 'Des Plaines', state: 'Illinois', stateAbbr: 'IL', population: '58,362', businesses: '5,800+', focus: 'Manufacturing & Airport', metro: 'Chicago' },
    { name: 'Mount Prospect', state: 'Illinois', stateAbbr: 'IL', population: '56,265', businesses: '4,900+', focus: 'Corporate & Residential', metro: 'Chicago' },
    { name: 'Hoffman Estates', state: 'Illinois', stateAbbr: 'IL', population: '52,530', businesses: '5,500+', focus: 'Corporate & Technology', metro: 'Chicago' },
    { name: 'Downers Grove', state: 'Illinois', stateAbbr: 'IL', population: '49,670', businesses: '4,800+', focus: 'Corporate & Healthcare', metro: 'Chicago' },
    { name: 'Elmhurst', state: 'Illinois', stateAbbr: 'IL', population: '47,692', businesses: '4,200+', focus: 'Healthcare & Education', metro: 'Chicago' },
    { name: 'Lombard', state: 'Illinois', stateAbbr: 'IL', population: '44,476', businesses: '3,900+', focus: 'Corporate & Healthcare', metro: 'Chicago' },
    { name: 'Buffalo Grove', state: 'Illinois', stateAbbr: 'IL', population: '41,778', businesses: '3,800+', focus: 'Corporate & Technology', metro: 'Chicago' },
    { name: 'Wheeling', state: 'Illinois', stateAbbr: 'IL', population: '38,688', businesses: '3,200+', focus: 'Manufacturing & Corporate', metro: 'Chicago' },
    { name: 'Northbrook', state: 'Illinois', stateAbbr: 'IL', population: '33,170', businesses: '3,600+', focus: 'Corporate & Affluent', metro: 'Chicago' }
  ],

  // FLORIDA MIAMI METRO SUBURBS
  floridaMiami: [
    { name: 'Aventura', state: 'Florida', stateAbbr: 'FL', population: '37,199', businesses: '3,200+', focus: 'Luxury & International Business', metro: 'Miami' },
    { name: 'Doral', state: 'Florida', stateAbbr: 'FL', population: '75,874', businesses: '8,900+', focus: 'International Business & Aviation', metro: 'Miami' },
    { name: 'Pinecrest', state: 'Florida', stateAbbr: 'FL', population: '18,223', businesses: '1,200+', focus: 'Affluent & Professional', metro: 'Miami' },
    { name: 'Palmetto Bay', state: 'Florida', stateAbbr: 'FL', population: '24,439', businesses: '1,800+', focus: 'Residential & Professional', metro: 'Miami' },
    { name: 'Key Biscayne', state: 'Florida', stateAbbr: 'FL', population: '14,809', businesses: '890+', focus: 'Tourism & Luxury', metro: 'Miami' },
    { name: 'Bal Harbour', state: 'Florida', stateAbbr: 'FL', population: '3,093', businesses: '420+', focus: 'Luxury & Tourism', metro: 'Miami' },
    { name: 'Bay Harbor Islands', state: 'Florida', stateAbbr: 'FL', population: '5,877', businesses: '680+', focus: 'Luxury & Professional', metro: 'Miami' },
    { name: 'Surfside', state: 'Florida', stateAbbr: 'FL', population: '5,689', businesses: '520+', focus: 'Tourism & Residential', metro: 'Miami' },
    { name: 'Golden Beach', state: 'Florida', stateAbbr: 'FL', population: '919', businesses: '85+', focus: 'Luxury & Residential', metro: 'Miami' },
    { name: 'Indian Creek', state: 'Florida', stateAbbr: 'FL', population: '86', businesses: '12+', focus: 'Ultra-Luxury', metro: 'Miami' }
  ],

  // GEORGIA ATLANTA METRO SUBURBS
  georgiaAtlanta: [
    { name: 'Dunwoody', state: 'Georgia', stateAbbr: 'GA', population: '51,683', businesses: '6,800+', focus: 'Corporate & Technology', metro: 'Atlanta' },
    { name: 'Peachtree City', state: 'Georgia', stateAbbr: 'GA', population: '37,371', businesses: '3,200+', focus: 'Corporate & Family', metro: 'Atlanta' },
    { name: 'Milton', state: 'Georgia', stateAbbr: 'GA', population: '41,426', businesses: '2,800+', focus: 'Affluent & Equestrian', metro: 'Atlanta' },
    { name: 'Brookhaven', state: 'Georgia', stateAbbr: 'GA', population: '55,554', businesses: '4,200+', focus: 'Corporate & Healthcare', metro: 'Atlanta' },
    { name: 'Decatur', state: 'Georgia', stateAbbr: 'GA', population: '24,928', businesses: '2,400+', focus: 'Arts & Education', metro: 'Atlanta' },
    { name: 'Kennesaw', state: 'Georgia', stateAbbr: 'GA', population: '35,301', businesses: '3,500+', focus: 'University & Corporate', metro: 'Atlanta' },
    { name: 'Acworth', state: 'Georgia', stateAbbr: 'GA', population: '22,683', businesses: '1,800+', focus: 'Lake Recreation & Residential', metro: 'Atlanta' },
    { name: 'Woodstock', state: 'Georgia', stateAbbr: 'GA', population: '35,065', businesses: '2,900+', focus: 'Family & Corporate', metro: 'Atlanta' },
    { name: 'Canton', state: 'Georgia', stateAbbr: 'GA', population: '30,424', businesses: '2,200+', focus: 'Manufacturing & Family', metro: 'Atlanta' },
    { name: 'Cumming', state: 'Georgia', stateAbbr: 'GA', population: '7,318', businesses: '1,200+', focus: 'Lake Recreation & Tourism', metro: 'Atlanta' }
  ],

  // OKLAHOMA CITY METRO SUBURBS
  oklahomaCity: [
    { name: 'Edmond', state: 'Oklahoma', stateAbbr: 'OK', population: '94,428', businesses: '6,800+', focus: 'Education & Corporate', metro: 'Oklahoma City' },
    { name: 'Moore', state: 'Oklahoma', stateAbbr: 'OK', population: '62,793', businesses: '3,200+', focus: 'Family & Residential', metro: 'Oklahoma City' },
    { name: 'Norman', state: 'Oklahoma', stateAbbr: 'OK', population: '128,026', businesses: '7,500+', focus: 'University & Research', metro: 'Oklahoma City' },
    { name: 'Yukon', state: 'Oklahoma', stateAbbr: 'OK', population: '23,630', businesses: '1,400+', focus: 'Family & Agriculture', metro: 'Oklahoma City' },
    { name: 'Mustang', state: 'Oklahoma', stateAbbr: 'OK', population: '23,147', businesses: '1,200+', focus: 'Family & Residential', metro: 'Oklahoma City' },
    { name: 'Bethany', state: 'Oklahoma', stateAbbr: 'OK', population: '19,292', businesses: '980+', focus: 'University & Residential', metro: 'Oklahoma City' },
    { name: 'Warr Acres', state: 'Oklahoma', stateAbbr: 'OK', population: '10,095', businesses: '680+', focus: 'Residential & Retail', metro: 'Oklahoma City' },
    { name: 'Del City', state: 'Oklahoma', stateAbbr: 'OK', population: '21,762', businesses: '1,100+', focus: 'Residential & Retail', metro: 'Oklahoma City' },
    { name: 'Midwest City', state: 'Oklahoma', stateAbbr: 'OK', population: '57,493', businesses: '2,800+', focus: 'Military & Logistics', metro: 'Oklahoma City' },
    { name: 'Choctaw', state: 'Oklahoma', stateAbbr: 'OK', population: '12,467', businesses: '620+', focus: 'Rural & Family', metro: 'Oklahoma City' }
  ]
};

function generateSuburbPage(location) {
  const { name, state, stateAbbr, population, businesses, focus, metro } = location;
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  return `import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, Phone, Users, Award, TrendingUp, Zap, Shield, Bot, Cog, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Business Automation ${name} ${stateAbbr} | ${focus} Solutions | RJ Business Solutions',
  description: 'Leading AI automation expert in ${name}, ${state}. Custom solutions for ${focus.toLowerCase()} businesses in the ${metro} metro area. Local expertise with enterprise results.',
  keywords: 'AI automation ${name}, business automation ${name} ${stateAbbr}, ${focus.toLowerCase()} AI solutions, ${metro} metro AI services',
  openGraph: {
    title: 'AI Business Automation ${name} ${stateAbbr} | RJ Business Solutions',
    description: 'Transform your ${name} business with AI automation. Serving ${focus.toLowerCase()} in ${metro} metro.',
    url: 'https://rjbusinesssolutions.org/locations/${slug}-${stateAbbr.toLowerCase()}',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/locations/${slug}-${stateAbbr.toLowerCase()}'
  }
};

export default function ${name.replace(/\s+/g, '')}AIAutomation() {
  return (
    <>
      <Script
        id="structured-data-${slug}"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "RJ Business Solutions - ${name} AI Automation",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "${name}",
            "addressRegion": "${stateAbbr}",
            "addressCountry": "US"
          },
          "telephone": "+18775618001"
        }) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-800 to-teal-900 text-white py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Home className="text-green-400 mr-2" size={32} />
              <span className="text-xl text-green-200">${name}, ${state}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ${name} AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              ${focus} Automation in ${metro} Metro
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving ${businesses} ${name} businesses with specialized AI automation
              for ${focus.toLowerCase()} in the greater ${metro} metropolitan area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call ${name}: (877) 561-8001
              </a>
              <Link
                href="#services"
                className="inline-block bg-white hover:bg-gray-100 text-teal-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                View Local Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">${population}</div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">${businesses}</div>
              <div className="text-gray-600">Local Businesses</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">48hr</div>
              <div className="text-gray-600">Deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Local AI Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              AI Solutions for ${name} Businesses
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Specialized automation for ${focus.toLowerCase()} in ${metro} metro area
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-green-600">
                    <Bot size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Local AI Chatbots</h3>
                    <p className="text-gray-600 mb-4">
                      Custom AI chatbots designed for ${name} ${focus.toLowerCase()} businesses 
                      with local market knowledge and ${metro} metro expertise.
                    </p>
                    <div className="text-2xl font-bold text-green-600 mb-2">Starting at $997/month</div>
                    <Link 
                      href="/landing/custom-chatbots"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Chatbots
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-teal-600">
                    <Cog size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Business Process Automation</h3>
                    <p className="text-gray-600 mb-4">
                      Streamline ${name} ${focus.toLowerCase()} operations with intelligent 
                      workflow automation tailored for ${metro} metro businesses.
                    </p>
                    <div className="text-2xl font-bold text-teal-600 mb-2">Starting at $1,497/month</div>
                    <Link 
                      href="/services/process-automation"
                      className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Automation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Automate Your ${name} Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join ${name} ${focus.toLowerCase()} businesses leveraging AI automation in ${metro} metro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8775618001"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call ${name}: (877) 561-8001
            </a>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule ${name} Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}`;
}

function generateAdditionalPages() {
  console.log('🏘️  GENERATING METRO AREA & SUBURB PAGES...\n');
  
  let totalPages = 0;
  const locationsDir = path.join(__dirname, '..', 'src', 'app', 'locations');
  
  // Generate suburb pages for each metro area
  Object.entries(additionalLocations).forEach(([metroKey, locations]) => {
    const metroName = metroKey.replace(/([A-Z])/g, ' $1').trim().replace(/^(.)/, str => str.toUpperCase());
    console.log(`🏘️  GENERATING ${metroName.toUpperCase()} SUBURB PAGES...`);
    
    locations.forEach(location => {
      const slug = `${location.name.toLowerCase().replace(/\s+/g, '-')}-${location.stateAbbr.toLowerCase()}`;
      const pageDir = path.join(locationsDir, slug);
      const pagePath = path.join(pageDir, 'page.tsx');
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      
      // Skip if page already exists (from main generator)
      if (fs.existsSync(pagePath)) {
        console.log(`   ⚠️  ${location.name}, ${location.stateAbbr} (already exists - skipping)`);
        return;
      }
      
      // Generate page content
      const pageContent = generateSuburbPage(location);
      
      // Write file
      fs.writeFileSync(pagePath, pageContent);
      
      totalPages++;
      console.log(`   ✅ ${location.name}, ${location.stateAbbr} (${location.businesses} businesses)`);
    });
    
    console.log(`   🎯 ${metroName}: ${locations.filter(loc => !fs.existsSync(path.join(locationsDir, `${loc.name.toLowerCase().replace(/\s+/g, '-')}-${loc.stateAbbr.toLowerCase()}`, 'page.tsx'))).length} suburb pages generated\n`);
  });
  
  console.log(`🏆 TOTAL NEW SUBURB PAGES GENERATED: ${totalPages}`);
  
  return totalPages;
}

// Run the generator
if (require.main === module) {
  generateAdditionalPages();
}

module.exports = { generateAdditionalPages, additionalLocations };