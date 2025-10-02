#!/usr/bin/env node

/**
 * INDUSTRY-SPECIFIC PAGE GENERATOR
 * Generates industry vertical pages for each state to maximize local SEO coverage
 */

const fs = require('fs');
const path = require('path');

const industryData = {
  // NEW MEXICO INDUSTRIES
  newMexico: {
    state: 'New Mexico',
    stateAbbr: 'NM',
    industries: [
      { name: 'Oil & Gas Automation', slug: 'oil-gas', businesses: '850+', description: 'AI solutions for drilling, pipeline monitoring, and energy trading' },
      { name: 'Government AI Solutions', slug: 'government', businesses: '1,200+', description: 'Citizen services, permit processing, and public administration automation' },
      { name: 'Tourism & Hospitality AI', slug: 'tourism', businesses: '2,100+', description: 'Hotel management, visitor services, and tourism marketing automation' },
      { name: 'Agriculture Technology', slug: 'agriculture', businesses: '680+', description: 'Smart farming, irrigation automation, and crop monitoring systems' },
      { name: 'Mining & Natural Resources', slug: 'mining', businesses: '320+', description: 'Resource extraction automation and environmental monitoring' },
      { name: 'Native American Business', slug: 'native-business', businesses: '450+', description: 'Tribal enterprise automation and cultural preservation technology' },
      { name: 'Military & Defense', slug: 'military', businesses: '890+', description: 'Defense contractor automation and military base services' },
      { name: 'Nuclear & Research', slug: 'nuclear-research', businesses: '180+', description: 'National laboratory automation and scientific research tools' },
      { name: 'Arts & Creative Industries', slug: 'arts-creative', businesses: '1,800+', description: 'Gallery management, artist services, and creative business automation' },
      { name: 'Border Trade & Logistics', slug: 'border-trade', businesses: '420+', description: 'Cross-border commerce and international trade automation' }
    ]
  },

  // TEXAS INDUSTRIES  
  texas: {
    state: 'Texas',
    stateAbbr: 'TX',
    industries: [
      { name: 'Energy & Petrochemicals', slug: 'energy-petrochemicals', businesses: '12,500+', description: 'Oil refining, pipeline automation, and energy trading systems' },
      { name: 'Financial Services', slug: 'financial-services', businesses: '8,900+', description: 'Banking automation, fintech solutions, and regulatory compliance' },
      { name: 'Technology & Software', slug: 'technology-software', businesses: '15,200+', description: 'Enterprise software automation and tech startup solutions' },
      { name: 'Aerospace & Defense', slug: 'aerospace-defense', businesses: '3,400+', description: 'Aviation automation, defense systems, and space technology' },
      { name: 'Healthcare & Life Sciences', slug: 'healthcare-life-sciences', businesses: '18,700+', description: 'Medical practice automation and pharmaceutical solutions' },
      { name: 'Agriculture & Ranching', slug: 'agriculture-ranching', businesses: '6,800+', description: 'Ranch management, crop automation, and agribusiness solutions' },
      { name: 'Transportation & Logistics', slug: 'transportation-logistics', businesses: '9,300+', description: 'Fleet management, shipping automation, and supply chain optimization' },
      { name: 'Real Estate & Construction', slug: 'real-estate-construction', businesses: '11,600+', description: 'Property management automation and construction project management' },
      { name: 'Manufacturing & Industrial', slug: 'manufacturing-industrial', businesses: '7,200+', description: 'Factory automation, quality control, and industrial IoT solutions' },
      { name: 'International Trade', slug: 'international-trade', businesses: '4,100+', description: 'Import/export automation and global commerce solutions' }
    ]
  },

  // Additional states with key industries...
  arizona: {
    state: 'Arizona',
    stateAbbr: 'AZ', 
    industries: [
      { name: 'Technology & Semiconductors', slug: 'technology-semiconductors', businesses: '4,200+', description: 'Tech manufacturing and semiconductor automation' },
      { name: 'Tourism & Hospitality', slug: 'tourism-hospitality', businesses: '8,900+', description: 'Resort management and visitor experience automation' },
      { name: 'Healthcare & Retirement', slug: 'healthcare-retirement', businesses: '6,700+', description: 'Senior care automation and medical practice management' },
      { name: 'Aerospace & Defense', slug: 'aerospace-defense', businesses: '1,800+', description: 'Aviation and defense contractor automation' },
      { name: 'Real Estate & Development', slug: 'real-estate-development', businesses: '5,400+', description: 'Property management and development automation' }
    ]
  }
};

function generateIndustryPage(industry, state, stateAbbr) {
  const { name, slug, businesses, description } = industry;
  
  return `import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Building, MapPin, Phone, Users, Award, TrendingUp, Zap, Shield, Bot, Cog } from 'lucide-react';

export const metadata: Metadata = {
  title: '${name} AI Automation ${state} | Industry Solutions | RJ Business Solutions',
  description: '${description} in ${state}. Serving ${businesses} ${name.toLowerCase()} businesses with specialized AI automation and digital transformation.',
  keywords: '${name.toLowerCase()} AI ${state}, ${slug} automation, ${state} ${name.toLowerCase()}, industry AI solutions',
  openGraph: {
    title: '${name} AI Automation ${state} | RJ Business Solutions',
    description: '${description} across ${state}.',
    url: 'https://rjbusinesssolutions.org/industries/${slug}-ai-${state.toLowerCase().replace(' ', '-')}',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/industries/${slug}-ai-${state.toLowerCase().replace(' ', '-')}'
  }
};

export default function ${name.replace(/\s+|&/g, '')}AI${state.replace(/\s+/g, '')}() {
  return (
    <>
      <Script
        id="structured-data-${slug}-${stateAbbr.toLowerCase()}"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "RJ Business Solutions - ${name} AI ${state}",
          "description": "${description}",
          "areaServed": {
            "@type": "State",
            "name": "${state}"
          },
          "telephone": "+18775618001"
        }) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="text-indigo-400 mr-2" size={32} />
              <span className="text-xl text-indigo-200">${state}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              ${name} AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-indigo-100">
              ${description}
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving ${businesses} ${name.toLowerCase()} businesses across ${state} with specialized AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call ${state}: (877) 561-8001
              </a>
              <Link
                href="#solutions"
                className="inline-block bg-white hover:bg-gray-100 text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                View Industry Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 mb-2">${businesses}</div>
              <div className="text-gray-600">${state} Businesses</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%+</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">48hr</div>
              <div className="text-gray-600">Deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="solutions" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              ${name} AI Automation Solutions
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Specialized solutions for ${state}'s ${name.toLowerCase()} sector
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-indigo-600">
                    <Bot size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Industry-Specific AI Chatbots</h3>
                    <p className="text-gray-600 mb-4">
                      Custom AI chatbots designed for ${name.toLowerCase()} businesses with industry-specific knowledge and workflows.
                    </p>
                    <div className="text-2xl font-bold text-indigo-600 mb-2">Starting at $1,497/month</div>
                    <Link 
                      href="/landing/custom-chatbots"
                      className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600">
                    <Cog size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Process Automation</h3>
                    <p className="text-gray-600 mb-4">
                      Streamline ${name.toLowerCase()} operations with intelligent workflow automation and business process optimization.
                    </p>
                    <div className="text-2xl font-bold text-purple-600 mb-2">Starting at $2,497/month</div>
                    <Link 
                      href="/services/process-automation"
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Transform Your ${name} Business with AI
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join ${state} ${name.toLowerCase()} businesses that have automated operations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8775618001"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-indigo-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call ${state}: (877) 561-8001
            </a>
            <Link
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule Industry Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}`;
}

function generateIndustryPages() {
  console.log('🏭 GENERATING INDUSTRY-SPECIFIC PAGES...\n');
  
  let totalPages = 0;
  const industriesDir = path.join(__dirname, '..', 'src', 'app', 'industries');
  
  // Ensure industries directory exists
  if (!fs.existsSync(industriesDir)) {
    fs.mkdirSync(industriesDir, { recursive: true });
  }

  // Generate industry pages for each state
  Object.entries(industryData).forEach(([stateKey, stateInfo]) => {
    console.log(`🏭 GENERATING ${stateInfo.state.toUpperCase()} INDUSTRY PAGES...`);
    
    stateInfo.industries.forEach(industry => {
      const slug = `${industry.slug}-ai-${stateInfo.state.toLowerCase().replace(' ', '-')}`;
      const pageDir = path.join(industriesDir, slug);
      const pagePath = path.join(pageDir, 'page.tsx');
      
      // Create directory
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      
      // Generate page content
      const pageContent = generateIndustryPage(industry, stateInfo.state, stateInfo.stateAbbr);
      
      // Write file
      fs.writeFileSync(pagePath, pageContent);
      
      totalPages++;
      console.log(`   ✅ ${industry.name} (${industry.businesses} businesses)`);
    });
    
    console.log(`   🎯 ${stateInfo.state}: ${stateInfo.industries.length} industry pages generated\n`);
  });
  
  console.log(`🏆 TOTAL INDUSTRY PAGES GENERATED: ${totalPages}`);
  
  return totalPages;
}

// Run the generator
if (require.main === module) {
  generateIndustryPages();
}

module.exports = { generateIndustryPages, industryData };