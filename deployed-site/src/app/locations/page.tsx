import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { citiesData, getAllStates } from '@/lib/cities-data'
import { MapPin, Building2, Users, TrendingUp, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Locations | AI Automation Solutions Nationwide | RJ Business Solutions',
  description: 'RJ Business Solutions provides AI automation and digital transformation services across major US cities. Find local AI solutions in Dallas, Chicago, Miami, New York, Los Angeles, and more.',
  keywords: 'AI automation locations, business solutions USA, AI chatbots nationwide, process automation cities, machine learning services, Rick Jefferson, RJ Business Solutions',
  openGraph: {
    title: 'Service Locations - RJ Business Solutions',
    description: 'Enterprise AI solutions available nationwide. Local expertise in 50+ major US cities.',
    url: 'https://rjbusinesssolutions.org/locations',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'RJ Business Solutions - Nationwide AI Services'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/locations'
  }
}

const stateGroups = {
  'Southwest': ['Texas', 'Arizona', 'Nevada', 'New Mexico'],
  'Southeast': ['Florida', 'Georgia', 'North Carolina', 'Tennessee'],
  'Northeast': ['New York', 'Massachusetts', 'Pennsylvania'],
  'Midwest': ['Illinois', 'Wisconsin', 'Michigan', 'Minnesota', 'Ohio', 'Missouri'],
  'West Coast': ['California', 'Washington', 'Oregon', 'Colorado']
}

export default function LocationsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RJ Business Solutions',
    description: 'AI automation and business solutions provider serving major US cities',
    url: 'https://rjbusinesssolutions.org',
    telephone: '877-561-8001',
    email: 'rick@rjbusinesssolutions.org',
    founder: {
      '@type': 'Person',
      name: 'Rick Jefferson'
    },
    areaServed: citiesData.map(city => ({
      '@type': 'City',
      name: city.city,
      containedInPlace: {
        '@type': 'State',
        name: city.state
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-primary-600" />
                <span className="text-primary-600 font-semibold">Nationwide Coverage</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                AI Solutions Available
                <span className="text-primary-600"> Nationwide</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From coast to coast, RJ Business Solutions delivers enterprise-grade AI automation 
                to businesses in 50+ major US cities. Local expertise, national reach.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-gray-600">Cities Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">25</div>
                  <div className="text-sm text-gray-600">States Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">10K+</div>
                  <div className="text-sm text-gray-600">Businesses Transformed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Major Markets We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select your city to discover local AI solutions tailored for your market
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Feature top markets */}
              {[
                { city: 'New York', state: 'NY', slug: 'new-york', highlight: 'Financial Capital' },
                { city: 'Los Angeles', state: 'CA', slug: 'los-angeles', highlight: 'Entertainment Hub' },
                { city: 'Chicago', state: 'IL', slug: 'chicago', highlight: 'Business Center' },
                { city: 'Dallas', state: 'TX', slug: 'dallas', highlight: 'Tech Growth' },
                { city: 'Miami', state: 'FL', slug: 'miami', highlight: 'International Gateway' },
                { city: 'San Francisco', state: 'CA', slug: 'san-francisco', highlight: 'Innovation Hub' },
                { city: 'Houston', state: 'TX', slug: 'houston', highlight: 'Energy Capital' },
                { city: 'Atlanta', state: 'GA', slug: 'atlanta', highlight: 'Southeast Hub' }
              ].map((market) => (
                <Link 
                  key={market.slug}
                  href={`/locations/${market.slug}`}
                  className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{market.city}</h3>
                      <p className="text-gray-600">{market.state}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-sm text-primary-600 font-semibold">{market.highlight}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Locations by Region */}
        {Object.entries(stateGroups).map(([region, states]) => (
          <section key={region} className="py-16 bg-gray-50 odd:bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                {region} Region
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {states.map(state => {
                  const stateCities = citiesData.filter(city => city.state === state)
                  if (stateCities.length === 0) return null
                  
                  return (
                    <div key={state} className="bg-white rounded-xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                        {state}
                      </h3>
                      <ul className="space-y-2">
                        {stateCities.map(city => (
                          <li key={city.slug}>
                            <Link 
                              href={`/locations/${city.slug}`}
                              className="flex items-center justify-between group hover:text-primary-600 transition-colors"
                            >
                              <span className="flex items-center">
                                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                                {city.city}
                                {city.metro && (
                                  <span className="text-xs text-gray-500 ml-2">({city.metro})</span>
                                )}
                              </span>
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Why Local Matters */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Think Global, Act Local
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                We combine enterprise-grade AI technology with deep local market understanding
              </p>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Building2 className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Local Presence</h3>
                  <p className="text-white/80 text-sm">
                    On-site consultations in every major market
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Market Expertise</h3>
                  <p className="text-white/80 text-sm">
                    Understanding of local business dynamics
                  </p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Regional Growth</h3>
                  <p className="text-white/80 text-sm">
                    Solutions tailored for regional markets
                  </p>
                </div>
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Nationwide Network</h3>
                  <p className="text-white/80 text-sm">
                    Connected solutions across all locations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Can't Find Your City?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We provide remote AI solutions to businesses nationwide. 
                Contact us to discuss how we can transform your business, regardless of location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:8775618001" 
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Call (877) 561-8001
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link 
                  href="/#contact" 
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  )
}