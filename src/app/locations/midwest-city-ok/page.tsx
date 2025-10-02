import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, Phone, Clock, Users, Award, TrendingUp, Zap, Shield, Bot, Cog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Business Automation Midwest City OK | Military & Logistics Solutions | RJ Business Solutions',
  description: 'Leading AI automation expert in Midwest City, Oklahoma. Custom chatbots, process automation, and digital transformation for military & logistics businesses. 24/7 support.',
  keywords: 'AI automation Midwest City, business automation Midwest City OK, military & logistics AI solutions, chatbot services Midwest City',
  openGraph: {
    title: 'AI Business Automation Midwest City OK | RJ Business Solutions',
    description: 'Transform your Midwest City business with AI automation. Serving military & logistics industry with custom solutions.',
    url: 'https://rjbusinesssolutions.org/locations/midwest-city-ok',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/locations/midwest-city-ok'
  }
};

const midwest-cityData = {
  population: "57,493",
  businesses: "2,800+",
  focus: "Military & Logistics",
  industries: ["Military & Logistics", "Technology", "Healthcare", "Manufacturing", "Services"]
};

export default function MidwestCityAIAutomation() {
  return (
    <>
      <Script
        id="structured-data-midwest-city"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "RJ Business Solutions - Midwest City AI Automation Hub",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Midwest City",
            "addressRegion": "OK",
            "addressCountry": "US"
          },
          "telephone": "+18775618001"
        }) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="text-blue-400 mr-2" size={32} />
              <span className="text-xl text-blue-200">Midwest City, Oklahoma</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Midwest City AI Automation Hub
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Military & Logistics Digital Transformation & AI Solutions
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving 2,800+ Midwest City businesses with cutting-edge AI automation,
              custom chatbots, and digital transformation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call Midwest City: (877) 561-8001
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

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">57,493</div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">2,800+</div>
              <div className="text-gray-600">Businesses</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">97%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              AI Solutions for Midwest City Businesses
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Specialized automation for military & logistics and local industries
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600">
                    <Bot size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">AI Chatbots for Midwest City</h3>
                    <p className="text-gray-600 mb-4">
                      Custom AI chatbots that understand your Midwest City customers and military & logistics industry needs.
                    </p>
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
                    <Cog size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Business Process Automation</h3>
                    <p className="text-gray-600 mb-4">
                      Streamline your Midwest City military & logistics operations with intelligent automation and workflow optimization.
                    </p>
                    <div className="text-2xl font-bold text-green-600 mb-2">Starting at $1,497/month</div>
                    <Link 
                      href="/services/process-automation"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Automate Your Midwest City Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join successful Midwest City businesses that have transformed operations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8775618001"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-purple-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call Midwest City: (877) 561-8001
            </a>
            <Link
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule Free Midwest City Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-8 bg-gray-100 text-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <p>
              <strong>RJ Business Solutions Midwest City</strong> - AI automation hub serving Midwest City, Oklahoma since 2020
            </p>
          </div>
        </div>
      </section>
    </>
  );
}