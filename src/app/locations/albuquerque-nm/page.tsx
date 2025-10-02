import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Phone, MapPin, Clock, Users, Award, TrendingUp, Zap, Shield, Bot, Cog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Business Automation Albuquerque NM | RJ Business Solutions | (877) 561-8001',
  description: 'Leading AI automation expert in Albuquerque, New Mexico. Custom chatbots, voice bots, and business process automation. Serving Duke City businesses with cutting-edge AI solutions. 24/7 support.',
  keywords: 'AI automation Albuquerque, business automation Albuquerque NM, chatbot development Albuquerque, voice bot services Duke City, AI business solutions New Mexico, automated lead generation Albuquerque',
  openGraph: {
    title: 'AI Business Automation Albuquerque NM | RJ Business Solutions',
    description: 'Transform your Albuquerque business with AI automation, custom chatbots, and intelligent process automation. Serving Duke City since 2020.',
    url: 'https://rjbusinesssolutions.org/locations/albuquerque-nm',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Business Automation Albuquerque NM | RJ Business Solutions',
    description: 'Leading AI automation services in Albuquerque, New Mexico. Custom solutions for Duke City businesses.',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/locations/albuquerque-nm'
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RJ Business Solutions - Albuquerque AI Automation Hub",
  "description": "Leading AI automation and business solutions provider serving Albuquerque, New Mexico and surrounding areas",
  "url": "https://rjbusinesssolutions.org/locations/albuquerque-nm",
  "logo": "https://rjbusinesssolutions.org/logo.png",
  "image": "https://rjbusinesssolutions.org/images/albuquerque-ai-hub.jpg",
  "telephone": "+18775618001",
  "email": "rick@rjbusinesssolutions.org",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "Rick Jefferson",
    "jobTitle": "AI Systems Architect & Full-Stack Engineer"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Albuquerque",
    "addressRegion": "NM",
    "addressCountry": "US",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.0844",
      "longitude": "-106.6504"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Albuquerque",
    "containedIn": {
      "@type": "State",
      "name": "New Mexico"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI & Automation Services Albuquerque",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Chatbot Development Albuquerque",
          "description": "Custom AI chatbots for Albuquerque businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Process Automation Albuquerque",
          "description": "Automated workflows and business processes for Duke City companies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Voice Bot Services Albuquerque",
          "description": "AI voice automation for lead generation and customer service"
        }
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "RJ Business Solutions transformed our Albuquerque restaurant chain with AI automation. Our order accuracy improved by 95% and we reduced staff workload significantly.",
      "author": {
        "@type": "Person",
        "name": "Maria Gonzalez"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
  "serviceArea": [
    "Albuquerque",
    "Rio Rancho", 
    "Bernalillo",
    "Los Alamos",
    "Santa Fe"
  ],
  "priceRange": "$997-$15,000"
};

const albuquerqueData = {
  population: "564,559",
  metroPopulation: "916,528", 
  businesses: "35,000+",
  majorIndustries: [
    "Technology & Software",
    "Healthcare & Biotech", 
    "Aerospace & Defense",
    "Energy & Utilities",
    "Financial Services",
    "Manufacturing"
  ],
  neighborhoods: [
    "Old Town", "Nob Hill", "Northeast Heights", "Foothills", "Westside", "North Valley"
  ]
};

export default function AlbuquerqueAIAutomation() {
  return (
    <>
      <Script
        id="structured-data-albuquerque"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="text-blue-400 mr-2" size={32} />
              <span className="text-xl text-blue-200">Albuquerque, New Mexico</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Business Automation Hub
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Transforming Duke City Businesses with Intelligent AI Solutions
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving {albuquerqueData.businesses} Albuquerque businesses with cutting-edge AI automation, 
              custom chatbots, and digital transformation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call Now: (877) 561-8001
              </a>
              <Link
                href="#services"
                className="inline-block bg-white hover:bg-gray-100 text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                View AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">{albuquerqueData.population}</div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">{albuquerqueData.businesses}</div>
              <div className="text-gray-600">Businesses</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">127+</div>
              <div className="text-gray-600">AI Projects</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Albuquerque */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Why Albuquerque Businesses Choose RJ Business Solutions
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Deep local market knowledge combined with cutting-edge AI technology
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  <MapPin size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Local Market Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of Albuquerque's business landscape, from Old Town retailers 
                  to Sandia Labs contractors to UNM-affiliated healthcare providers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4">
                  <Zap size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">48-Hour AI Deployment</h3>
                <p className="text-gray-600">
                  Get your AI chatbot or voice bot live in 48 hours or less. 
                  Perfect for Duke City's fast-paced business environment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-purple-600 mb-4">
                  <Award size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">97% Success Rate</h3>
                <p className="text-gray-600">
                  Proven track record with 127+ successful AI implementations 
                  across Albuquerque's diverse business sectors.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-4">
                  <Users size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Bilingual AI Support</h3>
                <p className="text-gray-600">
                  English and Spanish AI solutions perfect for Albuquerque's 
                  diverse customer base and Hispanic market.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-red-600 mb-4">
                  <Shield size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-gray-600">
                  Military-grade security protocols suitable for Sandia Labs, 
                  Kirtland AFB contractors, and sensitive business data.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-teal-600 mb-4">
                  <TrendingUp size={48} />
                </div>
                <h3 className="text-xl font-bold mb-3">ROI Guarantee</h3>
                <p className="text-gray-600">
                  Average 340% ROI within 6 months or we'll work for free 
                  until you see results. That's our Duke City promise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services for Albuquerque */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              AI Automation Services in Albuquerque
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Tailored solutions for Duke City's unique business environment
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600">
                    <Bot size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">AI Chatbots for Albuquerque Businesses</h3>
                    <p className="text-gray-600 mb-4">
                      Custom AI chatbots that understand your Albuquerque customers. 
                      From tourism inquiries in Old Town to tech support for software companies.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        24/7 customer support automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Lead qualification for Albuquerque market
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Bilingual English/Spanish support
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Integration with local business systems
                      </li>
                    </ul>
                    <div className="text-2xl font-bold text-blue-600 mb-2">Starting at $997/month</div>
                    <Link 
                      href="/landing/custom-chatbots"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About AI Chatbots
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-green-600">
                    <Phone size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">AI Voice Bots for Lead Generation</h3>
                    <p className="text-gray-600 mb-4">
                      Automated voice calling systems that sound human and convert leads. 
                      Perfect for Albuquerque's competitive business landscape.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Automated lead calling and qualification
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Appointment scheduling automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Follow-up call sequences
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        CRM integration and lead tracking
                      </li>
                    </ul>
                    <div className="text-2xl font-bold text-green-600 mb-2">Starting at $1,497/month</div>
                    <Link 
                      href="/landing/ai-voice-bot"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Voice Bots
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
                    <h3 className="text-2xl font-bold mb-3">Business Process Automation</h3>
                    <p className="text-gray-600 mb-4">
                      Streamline your Albuquerque business operations with intelligent automation. 
                      From inventory management to customer onboarding.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Workflow automation and optimization
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Document processing automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Data entry and validation automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Custom API integrations
                      </li>
                    </ul>
                    <div className="text-2xl font-bold text-purple-600 mb-2">Starting at $2,497/month</div>
                    <Link 
                      href="/services/process-automation"
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Automation
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600">
                    <TrendingUp size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">AI-Powered Marketing Automation</h3>
                    <p className="text-gray-600 mb-4">
                      Dominate Albuquerque's market with AI-driven marketing campaigns 
                      that adapt and optimize in real-time.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Social media automation and posting
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Email marketing sequence automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Ad campaign optimization
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Content generation and curation
                      </li>
                    </ul>
                    <div className="text-2xl font-bold text-orange-600 mb-2">Starting at $1,997/month</div>
                    <Link 
                      href="/landing/social-media-management"
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Marketing AI
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Albuquerque Industries We Serve */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Industries We Serve in Albuquerque
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Specialized AI solutions for Duke City's key business sectors
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {albuquerqueData.majorIndustries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{industry}</h3>
                  <p className="text-gray-600 text-sm">
                    Custom AI automation solutions tailored for {industry.toLowerCase()} businesses in Albuquerque
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in Albuquerque */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Albuquerque Neighborhoods We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {albuquerqueData.neighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="font-semibold text-gray-800">{neighborhood}</div>
                  <div className="text-sm text-gray-600">AI Services Available</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Success Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Albuquerque Success Story
              </h2>
              <div className="text-center">
                <blockquote className="text-xl italic mb-4">
                  "RJ Business Solutions transformed our local restaurant chain with AI automation. 
                  Our Albuquerque locations now handle 300% more orders with the same staff, 
                  and our customer satisfaction scores went from 3.2 to 4.8 stars across all platforms."
                </blockquote>
                <cite className="font-semibold">
                  — Maria Gonzalez, Owner of Sazon New Mexican Restaurants (5 Albuquerque locations)
                </cite>
                <div className="mt-4 text-blue-200">
                  <strong>Results:</strong> 95% order accuracy • 60% faster service • $47K monthly savings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Automate Your Albuquerque Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 127+ successful Duke City businesses that have transformed their operations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:8775618001"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call (877) 561-8001
            </a>
            <Link
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
          <div className="flex items-center justify-center text-green-200">
            <Clock className="mr-2" size={16} />
            <span>Available 24/7 for AI Support</span>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-8 bg-gray-100 text-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <p className="mb-2">
              <strong>RJ Business Solutions Albuquerque</strong> - AI Automation Hub serving Duke City since 2020
            </p>
            <p>
              Proudly serving businesses in Albuquerque, Rio Rancho, Bernalillo, Los Alamos, Santa Fe, 
              and throughout the greater Albuquerque metropolitan area with cutting-edge AI solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}