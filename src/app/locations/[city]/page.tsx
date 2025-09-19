import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allMarkets, generateLocationKeywords, generateMetaDescription, generatePageTitle, getMarketsNearCity, type CityData } from '@/lib/all-markets-data';
import { getMarketsWithinRadius } from '@/lib/geolocation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import GoHighLevelCalendar from '@/components/GoHighLevelCalendar';
import CTA from '@/components/CTA';
import Link from 'next/link';
import Script from 'next/script';
import LocationServiceLinks from '@/components/LocationServiceLinks';

interface PageProps {
  params: {
    city: string;
  };
}

// Generate static params for all cities
export async function generateStaticParams() {
  return allMarkets.map((city) => ({
    city: city.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = allMarkets.find(c => c.slug === params.city);

  if (!city) {
    return {
      title: 'Location Not Found | RJ Business Solutions',
      description: 'The requested location page could not be found.',
    };
  }

  return {
    title: generatePageTitle(city),
    description: generateMetaDescription(city),
    keywords: generateLocationKeywords(city).join(', '),
    openGraph: {
      title: generatePageTitle(city),
      description: generateMetaDescription(city),
      url: `https://rjbusinesssolutions.org/locations/${city.slug}`,
      siteName: 'RJ Business Solutions',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: generatePageTitle(city),
      description: generateMetaDescription(city),
    },
    alternates: {
      canonical: `https://rjbusinesssolutions.org/locations/${city.slug}`
    }
  };
}

// Generate structured data for the page
function generateStructuredData(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://rjbusinesssolutions.org/locations/${city.slug}#business`,
        "name": `RJ Business Solutions - ${city.name}`,
        "image": "https://rjbusinesssolutions.org/logo.png",
        "url": `https://rjbusinesssolutions.org/locations/${city.slug}`,
        "telephone": "+18775618001",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": city.name,
          "addressRegion": city.stateAbbr,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": city.coordinates.lat,
          "longitude": city.coordinates.lng
        },
        "areaServed": {
          "@type": "City",
          "name": city.name,
          "@id": `https://rjbusinesssolutions.org/locations/${city.slug}#city`
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
          },
          "geoRadius": "50"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/rjbizsolutions",
          "https://www.linkedin.com/company/rj-business-solutions",
          "https://twitter.com/rjbizsolutions"
        ]
      },
      {
        "@type": "Service",
        "@id": `https://rjbusinesssolutions.org/locations/${city.slug}#service`,
        "serviceType": "AI Automation Services",
        "provider": {
          "@id": `https://rjbusinesssolutions.org/locations/${city.slug}#business`
        },
        "areaServed": {
          "@id": `https://rjbusinesssolutions.org/locations/${city.slug}#city`
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI & Business Automation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Chatbot Development",
                "description": `Custom AI chatbots for ${city.name} businesses to automate customer service and increase conversions`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Process Automation",
                "description": `Streamline operations for ${city.name} companies with intelligent automation solutions`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Intelligence",
                "description": `Data-driven insights and analytics for ${city.name} organizations`
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Digital Marketing",
                "description": `SEO, social media, and digital marketing services for ${city.name} businesses`
              }
            }
          ]
        }
      },
      {
        "@type": "City",
        "@id": `https://rjbusinesssolutions.org/locations/${city.slug}#city`,
        "name": city.name,
        "containedIn": {
          "@type": "State",
          "name": city.state,
          "containedIn": {
            "@type": "Country",
            "name": "United States"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://rjbusinesssolutions.org"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://rjbusinesssolutions.org/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": city.name,
            "item": `https://rjbusinesssolutions.org/locations/${city.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `What AI automation services do you offer in ${city.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We offer comprehensive AI automation services in ${city.name} including custom chatbot development, process automation, machine learning solutions, business intelligence, and digital marketing automation. Our solutions are tailored for ${city.topIndustries.slice(0, 3).join(', ')} industries.`
            }
          },
          {
            "@type": "Question",
            "name": `How much do AI automation services cost in ${city.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Our AI automation services in ${city.name} start at $997/month for small businesses. We offer customized packages based on your specific needs and scale. Contact us at 877-561-8001 for a free consultation and custom quote.`
            }
          },
          {
            "@type": "Question",
            "name": `Do you serve businesses outside of ${city.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes! While we specialize in serving ${city.name} businesses, we also work with companies in ${city.nearbyTowns ? city.nearbyTowns.slice(0, 3).join(', ') + ' and' : ''} throughout ${city.state}. We offer both on-site and remote services.`
            }
          },
          {
            "@type": "Question",
            "name": `How quickly can you implement AI solutions for my ${city.name} business?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Most AI chatbot and automation solutions can be implemented within 2-4 weeks for ${city.name} businesses. Simple chatbots can be deployed in as little as 48 hours, while complex enterprise solutions may take 6-8 weeks.`
            }
          }
        ]
      }
    ]
  };
}

export default function LocationPage({ params }: PageProps) {
  const city = allMarkets.find(c => c.slug === params.city);

  if (!city) {
    notFound();
  }

  const nearbyCities = getMarketsNearCity(city.slug, 100).slice(0, 8);
  const nearbyMarkets = getMarketsWithinRadius(city, 100);
  const jsonLd = generateStructuredData(city);

  return (
    <>
      {/* Structured Data */}
      <Script
        id={`structured-data-${city.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Automation & Business Solutions in {city.name}, {city.stateAbbr}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform Your {city.name} Business with Cutting-Edge AI Technology
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving {city.population.toLocaleString()} residents and {city.businessInfo.totalBusinesses.toLocaleString()} businesses in the {city.name} {city.metroPopulation ? `metro area (population: ${city.metroPopulation.toLocaleString()})` : 'area'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Call Now: 877-561-8001
              </a>
              <Link
                href="#contact"
                className="inline-block bg-white hover:bg-gray-100 text-purple-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Market Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {city.name} Market Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {city.businessInfo.totalBusinesses.toLocaleString()}
              </div>
              <div className="text-gray-600">Total Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ${city.demographics.medianIncome.toLocaleString()}
              </div>
              <div className="text-gray-600">Median Income</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {city.demographics.growthRate}%
              </div>
              <div className="text-gray-600">Annual Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {city.businessInfo.techBusinesses.toLocaleString()}
              </div>
              <div className="text-gray-600">Tech Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving {city.name}'s Top Industries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {city.topIndustries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-900">{industry}</h3>
                <p className="text-gray-600">
                  Specialized AI solutions tailored for {city.name}'s {industry.toLowerCase()} sector
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            AI Solutions for {city.name} Businesses
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From downtown {city.name} to {city.neighborhoods ? city.neighborhoods[0] : 'surrounding areas'},
            we help local businesses automate, scale, and thrive with AI technology
          </p>
          <Services />
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Why {city.name} Businesses Choose RJ Business Solutions
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                Located {city.distanceFromAlbuquerque > 0 ? `${city.distanceFromAlbuquerque} miles from our Albuquerque headquarters` : 'in the heart of New Mexico'},
                {city.name} represents a thriving market with {city.businessInfo.totalBusinesses.toLocaleString()} businesses
                and a growing population of {city.population.toLocaleString()}. Our AI automation solutions are specifically
                designed to help {city.name} businesses in key industries like {city.topIndustries.slice(0, 3).join(', ')}
                compete and succeed in today's digital economy.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Serving All {city.name} Neighborhoods
              </h3>
              <p className="mb-6">
                We provide on-site and remote AI automation services throughout the {city.name} area, including:
              </p>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                {city.neighborhoods?.map((neighborhood, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> {neighborhood}
                  </li>
                ))}
                {city.nearbyTowns?.map((town, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> {town}
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Local Market Expertise
              </h3>
              <p className="mb-6">
                With a median income of ${city.demographics.medianIncome.toLocaleString()} and a {city.demographics.growthRate}%
                annual growth rate, {city.name} businesses are investing in technology to stay competitive.
                Our solutions help local companies:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Automate customer service with AI chatbots trained on {city.name} market specifics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Streamline operations to compete with larger {city.state} metropolitan areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Generate qualified leads from the {city.metroPopulation ? city.metroPopulation.toLocaleString() : city.population.toLocaleString()} local consumers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <span>Scale efficiently in the {city.marketSize} {city.name} market</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">
                Service Areas Near {city.name}
              </h3>
              <p className="mb-6">
                In addition to {city.name}, we proudly serve businesses throughout {city.state}, including:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {nearbyCities.map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/locations/${nearbyCity.slug}`}
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {nearbyCity.name}, {nearbyCity.stateAbbr}
                    <span className="text-gray-500 text-sm ml-1">
                      ({Math.round(calculateDistance(city.coordinates, nearbyCity.coordinates))} mi)
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Trusted by {city.name} Businesses Since 2019
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-purple-200">AI Solutions Deployed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">97%</div>
                <div className="text-purple-200">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-purple-200">AI Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location-specific Services Links */}
      <LocationServiceLinks city={city} nearbyMarkets={nearbyMarkets} />

      {/* Features for Local Market */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advanced Features for {city.name} Businesses
          </h2>
          <Features />
        </div>
      </section>

      {/* ZIP Codes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Serving All {city.name} ZIP Codes
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {city.zipCodes.map((zip) => (
                <div key={zip} className="bg-white rounded px-3 py-2 text-center shadow-sm">
                  {zip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section id="booking" className="py-16 bg-gradient-to-b from-white via-purple-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Schedule Your Free {city.name} AI Consultation
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your business with AI automation tailored for your local market.
              Join hundreds of {city.name} businesses already using AI to automate, scale, and grow.
            </p>

            {/* Direct Booking Button */}
            <a
              href="https://app.rjbusinesssolutions.org/widget/booking/xwqTKzHNtV9woLqtrqo6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <span className="text-2xl">📅</span>
                <span>Book Your Free Consultation</span>
                <span className="text-2xl">→</span>
              </span>
            </a>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-green-500">✓</span>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-green-500">✓</span>
                <span>30-Minute Strategy Session</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-green-500">✓</span>
                <span>Custom AI Roadmap for {city.name}</span>
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <p className="text-gray-600 mb-4">Prefer to talk now?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8775618001"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all"
                >
                  <span>📞</span>
                  <span>Call (877) 561-8001</span>
                </a>
                <a
                  href="mailto:rick@rjbusinesssolutions.org"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-lg transition-all"
                >
                  <span>✉️</span>
                  <span>Email Rick</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer Links to Other Cities */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Service Locations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
            {allMarkets.slice(0, 24).map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className={`text-gray-600 hover:text-purple-600 ${
                  location.slug === city.slug ? 'font-bold text-purple-600' : ''
                }`}
              >
                {location.name}, {location.stateAbbr}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="text-purple-600 hover:text-purple-800 font-semibold">
              View All 100+ Locations →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper function to calculate distance
function calculateDistance(coord1: { lat: number; lng: number }, coord2: { lat: number; lng: number }): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
  const dLon = (coord2.lng - coord1.lng) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}