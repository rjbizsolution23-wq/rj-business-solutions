import { Metadata } from 'next';
import Link from 'next/link';
import { allMarkets, getMarketsByState, getTopMarkets } from '@/lib/all-markets-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Service Locations | AI Automation in 400+ Cities Nationwide | RJ Business Solutions',
  description: 'RJ Business Solutions provides AI automation, custom chatbots, and digital transformation services in over 400 cities across all 50 states. Complete nationwide coverage from NYC to LA, Boston to Miami. Find your local office.',
  keywords: 'AI automation locations, business solutions near me, chatbot services by city, digital transformation services, local AI consultants',
  openGraph: {
    title: 'Service Locations | AI Automation in 400+ Cities Nationwide | RJ Business Solutions',
    description: 'Find AI automation and business solutions in your city. Serving 400+ markets across all 50 states.',
    url: 'https://rjbusinesssolutions.org/locations',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Locations | RJ Business Solutions',
    description: 'AI automation services in 100+ cities across NM, TX, CO, AZ, OK',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/locations'
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RJ Business Solutions",
  "url": "https://rjbusinesssolutions.org",
  "logo": "https://rjbusinesssolutions.org/logo.png",
  "telephone": "+18775618001",
  "email": "rick@rjbusinesssolutions.org",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Albuquerque",
    "addressRegion": "NM",
    "addressCountry": "US"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "New Mexico"
    },
    {
      "@type": "State",
      "name": "Texas"
    },
    {
      "@type": "State",
      "name": "Colorado"
    },
    {
      "@type": "State",
      "name": "Arizona"
    },
    {
      "@type": "State",
      "name": "Oklahoma"
    },
    {
      "@type": "State",
      "name": "Kansas"
    },
    {
      "@type": "State",
      "name": "Utah"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI & Automation Services",
    "itemListElement": allMarkets.map(city => ({
      "@type": "Offer",
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "containedIn": {
          "@type": "State",
          "name": city.state
        }
      },
      "itemOffered": {
        "@type": "Service",
        "name": `AI Automation Services in ${city.name}`,
        "url": `https://rjbusinesssolutions.org/locations/${city.slug}`
      }
    }))
  }
};

export default function LocationsPage() {
  // Get markets by state
  const marketsByState = getMarketsByState();
  const stateNames = Object.keys(marketsByState).sort();

  // Get largest markets
  const largeMarkets = getTopMarkets(12);

  return (
    <>
      <Script
        id="structured-data-locations"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Automation Services in 400+ Cities Nationwide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transforming Businesses Across the Southwest United States
            </p>
            <p className="text-lg mb-8">
              Complete US Coverage - NYC to LA, Boston to Miami, Seattle to DC - We're Everywhere
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Call Now: 877-561-8001
              </a>
              <Link
                href="#find-location"
                className="inline-block bg-white hover:bg-gray-100 text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Find Your City
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">400+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500mi</div>
              <div className="text-gray-600">Service Radius</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Markets Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Major Markets We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {largeMarkets.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6"
              >
                <h3 className="text-xl font-bold mb-2 text-purple-900">
                  {city.name}, {city.stateAbbr}
                </h3>
                <div className="text-gray-600 space-y-1">
                  <p>Population: {city.population.toLocaleString()}</p>
                  <p>Metro Area: {city.metroPopulation?.toLocaleString() || 'N/A'}</p>
                  <p>Businesses: {city.businessInfo.totalBusinesses.toLocaleString()}</p>
                  <p className="text-sm pt-2">
                    Top Industries: {city.topIndustries.slice(0, 3).join(', ')}
                  </p>
                </div>
                <div className="mt-4 text-blue-600 font-semibold">
                  View {city.name} Services →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Locations by State */}
      <section id="find-location" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Find Your Local Office
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Select your state and city below to find specialized AI automation services in your area
          </p>

          <div className="max-w-7xl mx-auto">
            {stateNames.map((state, index) => (
              <div key={state} className={`mb-12 ${index > 0 ? 'pt-8 border-t' : ''}`}>
                <h3 className="text-2xl font-bold mb-6 text-purple-900">
                  {state} ({marketsByState[state].length} cities)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {marketsByState[state].map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.slug}`}
                      className="group"
                    >
                      <div className="bg-white rounded-lg p-4 hover:bg-purple-50 transition-colors border border-gray-200 hover:border-purple-300">
                        <div className="font-semibold text-gray-900 group-hover:text-purple-700">
                          {city.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Pop: {city.population.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400 mt-1">
                          {city.businessInfo.totalBusinesses.toLocaleString()} businesses
                        </div>
                        {city.marketSize === 'large' && (
                          <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                            Major Market
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage Map Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Comprehensive Southwest Coverage
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                RJ Business Solutions provides AI automation and digital transformation services throughout
                the entire United States. With regional operations in every major metropolitan area including
                New York, Los Angeles, Chicago, Philadelphia, Boston, and DC, we maintain a strong local presence in over 400 cities nationwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Primary Service States</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Northeast:</strong> NYC, Boston, Philadelphia, DC, and entire corridor</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>West Coast:</strong> Complete coverage from Seattle to San Diego</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Southeast:</strong> Miami to Charlotte, Atlanta to Virginia Beach</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span><strong>Central US:</strong> Chicago, Dallas, Houston, Denver, and heartland</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Capabilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>On-site consultations in major markets</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Remote implementation nationwide</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>24/7 AI support for all locations</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Local partnerships in each market</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Why Choose a Local AI Partner?</h3>
                <p className="mb-4">
                  Working with a regional AI automation provider offers distinct advantages:
                </p>
                <ul className="space-y-2">
                  <li>• Understanding of local market dynamics and competition</li>
                  <li>• Familiarity with regional business practices and regulations</li>
                  <li>• Ability to provide in-person support when needed</li>
                  <li>• Connections with local technology ecosystems and resources</li>
                  <li>• Time zone alignment for better communication and support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No matter which city you're in, we're here to help you automate, scale, and grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8775618001"
              className="inline-block bg-white hover:bg-gray-100 text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Call 877-561-8001
            </a>
            <Link
              href="/contact"
              className="inline-block bg-purple-800 hover:bg-purple-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Quick Links to Popular Cities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm">
              {allMarkets.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {city.name}, {city.stateAbbr}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}