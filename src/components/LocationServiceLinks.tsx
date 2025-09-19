import Link from 'next/link';
import type { CityData } from '@/lib/top-100-markets-data';

interface LocationServiceLinksProps {
  city: CityData;
  nearbyMarkets: CityData[];
}

export default function LocationServiceLinks({ city, nearbyMarkets }: LocationServiceLinksProps) {
  const services = [
    {
      title: 'AI Automation Solutions',
      href: '/services/ai-automation',
      description: `Transform your ${city.name} business with intelligent automation`,
      icon: '🤖'
    },
    {
      title: 'Custom Chatbots',
      href: '/services/chatbots',
      description: '24/7 customer support powered by AI',
      icon: '💬'
    },
    {
      title: 'Process Optimization',
      href: '/services/process-optimization',
      description: 'Streamline operations and reduce costs',
      icon: '⚡'
    },
    {
      title: 'Data Analytics',
      href: '/services/analytics',
      description: 'Make data-driven decisions with AI insights',
      icon: '📊'
    },
    {
      title: 'API Integration',
      href: '/services/api-integration',
      description: 'Connect your systems seamlessly',
      icon: '🔗'
    },
    {
      title: 'Cloud Solutions',
      href: '/services/cloud',
      description: 'Scale your infrastructure efficiently',
      icon: '☁️'
    },
    {
      title: 'Digital Transformation',
      href: '/services/digital-transformation',
      description: 'Modernize your business technology',
      icon: '🚀'
    },
    {
      title: 'Consulting Services',
      href: '/contact',
      description: 'Expert guidance for your AI journey',
      icon: '💼'
    }
  ];

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Legal', href: '/industries/legal' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Education', href: '/industries/education' }
  ];

  return (
    <>
      {/* Services Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              AI Solutions for {city.name} Businesses
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Serving {city.population.toLocaleString()} residents and {city.businessInfo.totalBusinesses.toLocaleString()} businesses
              with cutting-edge AI automation and digital transformation services
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-purple-900 group-hover:text-purple-700">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>

            {/* Industry-specific Solutions */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Industry Solutions for {city.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="bg-purple-100 hover:bg-purple-200 text-purple-900 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>

              {/* Top Industries for this city */}
              {city.topIndustries && city.topIndustries.length > 0 && (
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-3">
                    Top Industries in {city.name}:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {city.topIndustries.slice(0, 4).map((industry, index) => (
                      <div key={index} className="flex items-center">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Local Market Insights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              {city.name} Market Insights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Local Demographics</h3>
                <ul className="space-y-2">
                  <li>Population: {city.population.toLocaleString()}</li>
                  {city.metroPopulation && (
                    <li>Metro Area: {city.metroPopulation.toLocaleString()}</li>
                  )}
                  <li>Median Income: ${city.demographics.medianIncome.toLocaleString()}</li>
                  <li>Growth Rate: {city.demographics.growthRate}%</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Business Environment</h3>
                <ul className="space-y-2">
                  <li>Total Businesses: {city.businessInfo.totalBusinesses.toLocaleString()}</li>
                  <li>Small Businesses: {city.businessInfo.smallBusinesses.toLocaleString()}</li>
                  <li>Avg Employees: {city.businessInfo.averageEmployees}</li>
                  <li>Market Size: {city.marketSize.charAt(0).toUpperCase() + city.marketSize.slice(1)}</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Why Choose Us</h3>
                <ul className="space-y-2">
                  <li>✓ Local {city.name} presence</li>
                  <li>✓ 24/7 AI-powered support</li>
                  <li>✓ Proven results</li>
                  <li>✓ Industry expertise</li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/about"
                className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors"
              >
                <span className="font-semibold">About Us</span>
                <p className="text-sm text-gray-600 mt-1">Learn about our mission</p>
              </Link>
              <Link
                href="/portfolio"
                className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors"
              >
                <span className="font-semibold">Case Studies</span>
                <p className="text-sm text-gray-600 mt-1">See our success stories</p>
              </Link>
              <Link
                href="/pricing"
                className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors"
              >
                <span className="font-semibold">Pricing</span>
                <p className="text-sm text-gray-600 mt-1">Transparent pricing plans</p>
              </Link>
              <Link
                href="/contact"
                className="bg-purple-100 hover:bg-purple-200 rounded-lg p-4 text-center transition-colors"
              >
                <span className="font-semibold text-purple-900">Get Started</span>
                <p className="text-sm text-purple-700 mt-1">Free consultation</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nearbyMarkets.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Also Serving Nearby Cities
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyMarkets.slice(0, 12).map((nearbyCity) => (
                  <Link
                    key={nearbyCity.slug}
                    href={`/locations/${nearbyCity.slug}`}
                    className="bg-white hover:bg-purple-50 border border-gray-200 hover:border-purple-300 px-4 py-2 rounded-lg text-sm transition-all"
                  >
                    {nearbyCity.name}, {nearbyCity.stateAbbr}
                  </Link>
                ))}
              </div>
              {nearbyMarkets.length > 12 && (
                <div className="text-center mt-6">
                  <Link
                    href="/locations"
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    View All {nearbyMarkets.length}+ Locations →
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}