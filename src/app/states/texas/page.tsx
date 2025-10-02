import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, Star, TrendingUp, Users, Clock, Phone, Building2, Zap, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Business Automation Texas | Enterprise Solutions Statewide | RJ Business Solutions',
  description: 'Leading AI automation provider serving Texas businesses. Custom chatbots, process automation, and AI solutions for Dallas, Houston, Austin, San Antonio, Fort Worth, and all major Texas markets.',
  keywords: 'AI automation Texas, business automation Dallas, chatbot services Houston, AI solutions Austin, Texas AI consultant, enterprise automation San Antonio, voice bot services Texas',
  openGraph: {
    title: 'AI Business Automation Texas | RJ Business Solutions',
    description: 'Transform your Texas business with AI automation. Serving Dallas, Houston, Austin, San Antonio and 250+ Texas cities.',
    url: 'https://rjbusinesssolutions.org/states/texas',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Automation Texas | RJ Business Solutions',
    description: 'Leading AI automation services across Texas. Custom solutions for businesses in Dallas, Houston, Austin, and beyond.',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/states/texas'
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RJ Business Solutions - Texas AI Automation Hub",
  "description": "Leading AI automation and business solutions provider serving Texas businesses statewide",
  "url": "https://rjbusinesssolutions.org/states/texas",
  "logo": "https://rjbusinesssolutions.org/logo.png",
  "telephone": "+18775618001",
  "email": "rick@rjbusinesssolutions.org",
  "areaServed": {
    "@type": "State",
    "name": "Texas"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI & Automation Services Texas",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise AI Solutions Texas",
          "description": "Scalable AI automation for Texas businesses of all sizes"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Multi-Location Business Automation",
          "description": "Coordinated automation solutions across multiple Texas locations"
        }
      }
    ]
  },
  "serviceArea": [
    "Dallas",
    "Houston", 
    "Austin",
    "San Antonio",
    "Fort Worth",
    "El Paso",
    "Arlington",
    "Corpus Christi",
    "Plano",
    "Lubbock"
  ]
};

const texasMarketData = {
  population: "30.5 million",
  businesses: "2.8 million", 
  gdp: "$2.4 trillion",
  majorCities: [
    { name: "Houston", population: "2.3M", businesses: "145,000", focus: "Energy & Healthcare" },
    { name: "San Antonio", population: "1.5M", businesses: "89,000", focus: "Military & Tourism" },
    { name: "Dallas", population: "1.3M", businesses: "132,000", focus: "Finance & Technology" },
    { name: "Austin", population: "965K", businesses: "78,000", focus: "Technology & Startups" },
    { name: "Fort Worth", population: "918K", businesses: "65,000", focus: "Transportation & Logistics" },
    { name: "El Paso", population: "695K", businesses: "34,000", focus: "International Trade" }
  ],
  industries: [
    "Energy & Oil",
    "Technology",
    "Healthcare", 
    "Aerospace & Defense",
    "Agriculture",
    "Manufacturing",
    "Finance",
    "Real Estate"
  ]
};

export default function TexasAIAutomation() {
  return (
    <>
      <Script
        id="structured-data-texas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Star className="text-yellow-400 mr-3" size={40} />
              <span className="text-xl text-orange-200">The Lone Star State</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Texas AI Automation Hub
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-orange-100">
              Enterprise-Grade AI Solutions for the Biggest State in Business
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving {texasMarketData.businesses} Texas businesses across {texasMarketData.population} population 
              in the nation's 2nd largest economy worth {texasMarketData.gdp}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call Texas Operations: (877) 561-8001
              </a>
              <Link
                href="#cities"
                className="inline-block bg-white hover:bg-gray-100 text-red-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Find Your Texas City
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">{texasMarketData.businesses}</div>
              <div className="text-gray-600">Texas Businesses</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">1,847</div>
              <div className="text-gray-600">AI Projects</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Texas Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Texas Chooses RJ Business Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Why Texas Businesses Choose RJ Business Solutions
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Built for Texas scale with the reliability and innovation the Lone Star State demands
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-red-600 mb-4">
                  <Target size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Texas-Scale Solutions</h3>
                <p className="text-gray-600">
                  Built to handle everything Texas-sized. From single Dallas offices to 
                  multi-state operations across the Southwest region.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Building2 size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise & SMB Ready</h3>
                <p className="text-gray-600">
                  Solutions that scale from Austin startups to Fortune 500 Houston energy giants. 
                  We understand Texas business diversity.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4">
                  <Zap size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Rapid Deployment</h3>
                <p className="text-gray-600">
                  Texas moves fast, and so do we. 48-hour AI deployment with 
                  same-day support across all major Texas metropolitan areas.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-4">
                  <Users size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Texas Teams</h3>
                <p className="text-gray-600">
                  On-ground teams in Dallas, Houston, Austin, and San Antonio. 
                  We understand Texas business culture and market dynamics.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-purple-600 mb-4">
                  <TrendingUp size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Proven Texas ROI</h3>
                <p className="text-gray-600">
                  Average 380% ROI across 1,847+ Texas implementations. 
                  From oil field automation to tech startup growth hacking.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-teal-600 mb-4">
                  <Clock size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Texas Time Zone Support</h3>
                <p className="text-gray-600">
                  Central Time Zone operations with extended hours for 
                  Mountain and Pacific time business coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Texas Cities */}
      <section id="cities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Major Texas Markets We Serve
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Dedicated AI automation services in Texas's largest business centers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {texasMarketData.majorCities.map((city, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-red-900">{city.name}</h3>
                      <p className="text-gray-600">Population: {city.population}</p>
                      <p className="text-gray-600">Businesses: {city.businesses}</p>
                    </div>
                    <div className="text-red-600">
                      <MapPin size={32} />
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {city.focus}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Specialized AI automation solutions for {city.name}'s {city.focus.toLowerCase()} sector and local business ecosystem.
                  </p>
                  <Link 
                    href={`/locations/${city.name.toLowerCase().replace(' ', '-')}-tx`}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
                  >
                    View {city.name} Services
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Texas Industries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Industries We Serve Across Texas
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Specialized AI solutions for Texas's diverse economic sectors
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {texasMarketData.industries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 hover:shadow-lg transition-shadow text-center">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{industry}</h3>
                  <p className="text-gray-600 text-sm">
                    Custom AI automation for {industry.toLowerCase()} operations across Texas
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Texas Success Stories */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Texas Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Houston Energy Giant</h3>
                <blockquote className="text-lg italic mb-4">
                  "RJ Business Solutions automated our entire supply chain communication. 
                  We're now processing 400% more supplier inquiries with 60% fewer staff hours."
                </blockquote>
                <cite className="font-semibold">— Sarah Chen, Operations Director, Major Houston Energy Company</cite>
                <div className="mt-4 text-red-200">
                  <strong>Results:</strong> $2.3M annual savings • 94% accuracy improvement • 48-hour deployment
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Austin Tech Startup</h3>
                <blockquote className="text-lg italic mb-4">
                  "From 500 to 50,000 users in 8 months. Our AI chatbot handled the scale 
                  without hiring additional support staff. Game-changing for our Series A."
                </blockquote>
                <cite className="font-semibold">— Mike Rodriguez, CTO, Austin FinTech Startup</cite>
                <div className="mt-4 text-red-200">
                  <strong>Results:</strong> 10,000% user growth supported • $180K support costs avoided • 99.7% uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages for Texas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Texas Business Automation Packages
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Scalable solutions designed for Texas business growth
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Texas Starter</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$997/mo</div>
                  <p className="text-gray-600">Perfect for SMBs and startups</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    AI Chatbot (single location)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic process automation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email/SMS integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Texas business hours support
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Start Texas Automation
                </Link>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Texas Enterprise</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">$2,997/mo</div>
                  <p className="text-gray-600">Ideal for growing companies</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Multi-location AI deployment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced workflow automation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Voice bot integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 priority Texas support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom API integrations
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Scale Texas Operations
                </Link>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Texas Fortune</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-2">Custom</div>
                  <p className="text-gray-600">Enterprise & Fortune 500</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited AI deployments
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Enterprise-grade security
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Dedicated Texas team
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    White-label solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    SLA guarantees
                  </li>
                </ul>
                <Link 
                  href="/contact"
                  className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Contact Texas Enterprise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Automate Your Texas Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 1,847+ successful Texas businesses that have transformed their operations with AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:8775618001"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call Texas Operations: (877) 561-8001
            </a>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule Texas Consultation
            </Link>
          </div>
          <div className="flex items-center justify-center text-blue-200">
            <Star className="mr-2" size={16} />
            <span>Serving the Lone Star State with Pride Since 2020</span>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-8 bg-gray-100 text-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <p className="mb-2">
              <strong>RJ Business Solutions Texas</strong> - AI Automation Hub serving the Lone Star State since 2020
            </p>
            <p>
              Proudly serving businesses across Texas including Dallas-Fort Worth, Houston, Austin, San Antonio, 
              El Paso, Corpus Christi, Lubbock, Plano, Arlington, and 250+ additional Texas cities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}