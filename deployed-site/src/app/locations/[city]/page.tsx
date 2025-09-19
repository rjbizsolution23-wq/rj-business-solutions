import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalendarWidget from '@/components/CalendarWidget'
import Link from 'next/link'
import { getCityBySlug, citiesData } from '@/lib/cities-data'
import { 
  MapPin, Building2, Users, TrendingUp, Award, Clock, 
  CheckCircle, ArrowRight, Phone, Mail, Globe, Briefcase,
  Bot, Cpu, Cloud, BarChart3, Settings, Rocket
} from 'lucide-react'

export async function generateStaticParams() {
  return citiesData.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityData = getCityBySlug(params.city)
  
  if (!cityData) {
    return {
      title: 'Location Not Found',
    }
  }

  const title = `AI Automation & Business Solutions in ${cityData.city}, ${cityData.stateAbbr} | RJ Business Solutions`
  const description = `Transform your ${cityData.city} business with AI automation, custom chatbots, and digital solutions. Serving ${cityData.metro || cityData.city} with cutting-edge technology. Local expertise, enterprise results.`

  return {
    title,
    description,
    keywords: `AI automation ${cityData.city}, business solutions ${cityData.city}, AI chatbots ${cityData.city}, ${cityData.state}, process automation ${cityData.city}, machine learning ${cityData.city}, ${cityData.metro || ''}, ${cityData.nearbyTowns?.join(', ') || ''}, Rick Jefferson, RJ Business Solutions`,
    openGraph: {
      title,
      description,
      url: `https://rjbusinesssolutions.org/locations/${params.city}`,
      type: 'website',
      images: [{
        url: 'https://rjbusinesssolutions.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `RJ Business Solutions - ${cityData.city}, ${cityData.stateAbbr}`
      }]
    },
    alternates: {
      canonical: `https://rjbusinesssolutions.org/locations/${params.city}`
    }
  }
}

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: '24/7 intelligent customer support that never sleeps',
    link: '/services/ai-chatbots'
  },
  {
    icon: Settings,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows',
    link: '/services/process-automation'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Predictive analytics and smart decision-making',
    link: '/services/machine-learning'
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Data-driven insights for growth',
    link: '/services/business-intelligence'
  },
  {
    icon: Cloud,
    title: 'Cloud Engineering',
    description: 'Scalable infrastructure solutions',
    link: '/services/cloud-engineering'
  },
  {
    icon: Rocket,
    title: 'Digital Marketing',
    description: 'AI-powered marketing automation',
    link: '/landing/business-growth'
  }
]

export default function CityPage({ params }: { params: { city: string } }) {
  const cityData = getCityBySlug(params.city)

  if (!cityData) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RJ Business Solutions',
    description: `AI automation and business solutions provider serving ${cityData.city}, ${cityData.state}`,
    url: `https://rjbusinesssolutions.org/locations/${params.city}`,
    telephone: '877-561-8001',
    email: 'rick@rjbusinesssolutions.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityData.city,
      addressRegion: cityData.stateAbbr,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.lat,
      longitude: cityData.lng
    },
    areaServed: [
      {
        '@type': 'City',
        name: cityData.city,
        containedInPlace: {
          '@type': 'State',
          name: cityData.state
        }
      },
      ...(cityData.nearbyTowns || []).map(town => ({
        '@type': 'City',
        name: town
      }))
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: cityData.lat,
        longitude: cityData.lng
      },
      geoRadius: '50 miles'
    },
    priceRange: '$$',
    openingHours: 'Mo-Fr 08:00-18:00',
    founder: {
      '@type': 'Person',
      name: 'Rick Jefferson'
    },
    sameAs: [
      'https://www.linkedin.com/company/rj-business-solutions',
      'https://twitter.com/rjbizsolutions'
    ]
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
                <span className="text-primary-600 font-semibold">
                  {cityData.city}, {cityData.state}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                AI Automation Solutions for 
                <span className="text-primary-600"> {cityData.city} </span>
                Businesses
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Transform your {cityData.metro || cityData.city} business with cutting-edge AI technology, 
                intelligent automation, and data-driven solutions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Proudly serving {cityData.city}, {cityData.nearbyTowns?.slice(0, 3).join(', ')}, 
                and all of {cityData.counties?.[0] || cityData.state} with enterprise-grade AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#consultation" className="btn-primary inline-flex items-center justify-center">
                  Get Free {cityData.city} Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href={`tel:${cityData.areaCode}5618001`} className="btn-secondary inline-flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call ({cityData.areaCode}) 561-8001
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-primary-600">{cityData.population}</div>
                  <div className="text-sm text-gray-600">Population Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Local Businesses</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Market Understanding */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We Understand {cityData.city} Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From {cityData.neighborhoods?.slice(0, 3).join(' to ')} and beyond, 
                we've helped {cityData.city} companies automate, innovate, and dominate their markets.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Building2 className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of {cityData.city}'s business landscape and market dynamics
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  Supporting {cityData.metro || cityData.city} businesses with personalized solutions
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Partners</h3>
                <p className="text-gray-600">
                  Helping {cityData.city} companies scale with AI-powered automation
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Track record of success across {cityData.state} businesses
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Solutions Tailored for {cityData.city}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade technology solutions designed for the unique needs of {cityData.metro || cityData.city} businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Link 
                    key={index}
                    href={service.link}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                  >
                    <Icon className="h-12 w-12 text-primary-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <span className="text-primary-600 font-semibold inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Local Service Areas */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Serving All of {cityData.metro || `${cityData.city} Area`}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                On-site consultations and remote support available throughout {cityData.counties?.join(', ') || cityData.state}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Service Area</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                    <span>{cityData.city} Downtown</span>
                  </li>
                  {cityData.neighborhoods?.slice(0, 5).map((neighborhood) => (
                    <li key={neighborhood} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                      <span>{neighborhood}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Cities</h3>
                <ul className="space-y-2">
                  {cityData.nearbyTowns?.slice(0, 6).map((town) => (
                    <li key={town} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary-600 mr-2" />
                      <span>{town}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Zip Codes Served</h3>
                <div className="grid grid-cols-2 gap-2">
                  {cityData.zipCodes.slice(0, 8).map((zip) => (
                    <span key={zip} className="text-gray-700">{zip}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why {cityData.city} Businesses Choose RJ Business Solutions
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
                Local presence, global technology, unmatched results
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
                  <p className="text-white/90">
                    Get your AI solutions up and running in 48 hours, not months
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Globe className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Local Support</h3>
                  <p className="text-white/90">
                    On-site consultations available throughout {cityData.metro || cityData.city}
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Briefcase className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                  <p className="text-white/90">
                    Solutions tailored for {cityData.city}'s key industries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your {cityData.city} Business?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Join hundreds of {cityData.state} businesses already leveraging AI for competitive advantage
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                  <a href={`tel:${cityData.areaCode}5618001`} className="text-primary-600 font-semibold text-lg">
                    ({cityData.areaCode}) 561-8001
                  </a>
                  <p className="text-gray-600 mt-1">Local {cityData.city} number</p>
                </div>
                <div className="text-center">
                  <Mail className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                  <a href="mailto:rick@rjbusinesssolutions.org" className="text-primary-600 font-semibold">
                    rick@rjbusinesssolutions.org
                  </a>
                  <p className="text-gray-600 mt-1">24-hour response time</p>
                </div>
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                  <p className="text-gray-700">
                    Serving all of {cityData.city}
                  </p>
                  <p className="text-gray-600 mt-1">On-site consultations available</p>
                </div>
              </div>
              <div className="text-center">
                <Link 
                  href="#consultation" 
                  className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
                >
                  Schedule Your Free {cityData.city} Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div id="consultation">
          <CalendarWidget />
        </div>
        
        <Footer />
      </main>
    </>
  )
}