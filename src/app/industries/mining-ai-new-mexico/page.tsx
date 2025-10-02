import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Building, MapPin, Phone, Users, Award, TrendingUp, Zap, Shield, Bot, Cog } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mining & Natural Resources AI Automation New Mexico | Industry Solutions | RJ Business Solutions',
  description: 'Resource extraction automation and environmental monitoring in New Mexico. Serving 320+ mining & natural resources businesses with specialized AI automation and digital transformation.',
  keywords: 'mining & natural resources AI New Mexico, mining automation, New Mexico mining & natural resources, industry AI solutions',
  openGraph: {
    title: 'Mining & Natural Resources AI Automation New Mexico | RJ Business Solutions',
    description: 'Resource extraction automation and environmental monitoring across New Mexico.',
    url: 'https://rjbusinesssolutions.org/industries/mining-ai-new-mexico',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/industries/mining-ai-new-mexico'
  }
};

export default function MiningNaturalResourcesAINewMexico() {
  return (
    <>
      <Script
        id="structured-data-mining-nm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "RJ Business Solutions - Mining & Natural Resources AI New Mexico",
          "description": "Resource extraction automation and environmental monitoring",
          "areaServed": {
            "@type": "State",
            "name": "New Mexico"
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
              <span className="text-xl text-indigo-200">New Mexico</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mining & Natural Resources AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-indigo-100">
              Resource extraction automation and environmental monitoring
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving 320+ mining & natural resources businesses across New Mexico with specialized AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Call New Mexico: (877) 561-8001
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
              <div className="text-3xl font-bold text-indigo-600 mb-2">320+</div>
              <div className="text-gray-600">New Mexico Businesses</div>
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
              Mining & Natural Resources AI Automation Solutions
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Specialized solutions for New Mexico's mining & natural resources sector
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
                      Custom AI chatbots designed for mining & natural resources businesses with industry-specific knowledge and workflows.
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
                      Streamline mining & natural resources operations with intelligent workflow automation and business process optimization.
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
            Transform Your Mining & Natural Resources Business with AI
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join New Mexico mining & natural resources businesses that have automated operations with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8775618001"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-indigo-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call New Mexico: (877) 561-8001
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
}