import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, Phone, Users, Award, TrendingUp, Zap, Shield, Bot, Cog, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Business Automation Pearland TX | Energy & Family Solutions | RJ Business Solutions',
  description: 'Leading AI automation expert in Pearland, Texas. Custom solutions for energy & family businesses in the Houston metro area. Local expertise with enterprise results.',
  keywords: 'AI automation Pearland, business automation Pearland TX, energy & family AI solutions, Houston metro AI services',
  openGraph: {
    title: 'AI Business Automation Pearland TX | RJ Business Solutions',
    description: 'Transform your Pearland business with AI automation. Serving energy & family in Houston metro.',
    url: 'https://rjbusinesssolutions.org/locations/pearland-tx',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/locations/pearland-tx'
  }
};

export default function PearlandAIAutomation() {
  return (
    <>
      <Script
        id="structured-data-pearland"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "RJ Business Solutions - Pearland AI Automation",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pearland",
            "addressRegion": "TX",
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
              <span className="text-xl text-green-200">Pearland, Texas</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pearland AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              Energy & Family Automation in Houston Metro
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving 7,200+ Pearland businesses with specialized AI automation
              for energy & family in the greater Houston metropolitan area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call Pearland: (877) 561-8001
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
              <div className="text-3xl font-bold text-green-600 mb-2">125,817</div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">7,200+</div>
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
              AI Solutions for Pearland Businesses
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Specialized automation for energy & family in Houston metro area
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
                      Custom AI chatbots designed for Pearland energy & family businesses 
                      with local market knowledge and Houston metro expertise.
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
                      Streamline Pearland energy & family operations with intelligent 
                      workflow automation tailored for Houston metro businesses.
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
            Ready to Automate Your Pearland Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Pearland energy & family businesses leveraging AI automation in Houston metro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8775618001"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call Pearland: (877) 561-8001
            </a>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule Pearland Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}