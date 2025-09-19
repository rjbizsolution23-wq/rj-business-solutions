import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalendarWidget from '@/components/CalendarWidget'
import Link from 'next/link'
import { BarChart3, PieChart, TrendingUp, Database, Eye, Gauge, CheckCircle, ArrowRight, Activity, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Intelligence & Analytics | RJ Business Solutions - New Mexico',
  description: 'Transform raw data into actionable insights with custom dashboards, real-time analytics, and AI-powered reporting. Expert BI solutions by Rick Jefferson for New Mexico businesses.',
  keywords: 'business intelligence, BI, data analytics, dashboards, reporting, data visualization, New Mexico, Albuquerque, Santa Fe, Power BI, Tableau, data warehousing, Rick Jefferson',
  openGraph: {
    title: 'Business Intelligence Solutions - RJ Business Solutions',
    description: 'Turn data into decisions with AI-powered business intelligence and custom analytics dashboards.',
    url: 'https://rjbusinesssolutions.org/services/business-intelligence',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/business-intelligence-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Business Intelligence Solutions by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/services/business-intelligence'
  }
}

const benefits = [
  {
    icon: Eye,
    title: 'Real-Time Visibility',
    description: 'Monitor your business metrics in real-time with live dashboards'
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Decisions',
    description: 'Make confident decisions backed by comprehensive analytics'
  },
  {
    icon: Gauge,
    title: 'Performance Tracking',
    description: 'Track KPIs and performance metrics across all departments'
  },
  {
    icon: Activity,
    title: 'Predictive Insights',
    description: 'Forecast trends and anticipate market changes'
  }
]

const biSolutions = [
  {
    category: 'Executive Dashboards',
    features: [
      'Real-time revenue and profit tracking',
      'Sales pipeline visualization',
      'Customer acquisition metrics',
      'Market share analysis',
      'Competitive intelligence'
    ]
  },
  {
    category: 'Operational Analytics',
    features: [
      'Supply chain optimization',
      'Inventory management insights',
      'Production efficiency metrics',
      'Quality control analytics',
      'Resource utilization tracking'
    ]
  },
  {
    category: 'Financial Intelligence',
    features: [
      'Cash flow forecasting',
      'Budget vs actual analysis',
      'Profitability analytics',
      'Cost center tracking',
      'Financial risk assessment'
    ]
  },
  {
    category: 'Customer Analytics',
    features: [
      'Customer segmentation',
      'Lifetime value analysis',
      'Churn prediction',
      'Satisfaction scoring',
      'Behavior analytics'
    ]
  }
]

const technologies = [
  { name: 'Power BI', type: 'Visualization' },
  { name: 'Tableau', type: 'Visualization' },
  { name: 'Looker', type: 'Visualization' },
  { name: 'PostgreSQL', type: 'Database' },
  { name: 'Snowflake', type: 'Data Warehouse' },
  { name: 'Apache Spark', type: 'Processing' },
  { name: 'Airflow', type: 'Orchestration' },
  { name: 'Python', type: 'Analysis' }
]

const metrics = [
  { value: '500+', label: 'Dashboards Deployed' },
  { value: '10TB+', label: 'Data Processed Daily' },
  { value: '50ms', label: 'Query Response Time' },
  { value: '99.9%', label: 'Uptime SLA' }
]

export default function BusinessIntelligencePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-primary-50 to-cyan-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
                <span className="text-blue-600 font-semibold">Business Intelligence</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                See Everything.
                <span className="text-blue-600"> Decide Faster.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Transform scattered data into unified insights with AI-powered business intelligence that drives strategic decisions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Rick Jefferson architects enterprise-grade BI systems using Power BI, Tableau, and custom analytics platforms 
                that give New Mexico businesses a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                  Get Your BI Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="#demo" className="btn-secondary inline-flex items-center justify-center">
                  See Live Demo
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-xs text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Executive Dashboard</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Revenue YTD</span>
                      <span className="text-xs text-green-600 font-semibold">+23.5%</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">$4.2M</div>
                    <div className="mt-2 h-20">
                      <svg viewBox="0 0 200 80" className="w-full h-full">
                        <polyline
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          points="0,60 40,50 80,55 120,35 160,20 200,15"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#06B6D4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <PieChart className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-medium text-gray-600">Market Share</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">34.2%</div>
                      <div className="text-xs text-green-600">+5.1%</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Activity className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-medium text-gray-600">Efficiency</span>
                      </div>
                      <div className="text-xl font-bold text-gray-900">87%</div>
                      <div className="text-xs text-green-600">+12%</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-600 mb-1">AI Insight</div>
                    <p className="text-sm font-medium text-gray-900">
                      Revenue trending 23% above forecast. Recommend increasing Q4 inventory by 15%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Intelligence That Drives Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Albuquerque's tech sector to Santa Fe's tourism industry, our BI solutions deliver clarity
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive BI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom analytics and reporting for every department and use case
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {biSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Layers className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">{solution.category}</h3>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade BI Technology Stack
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Rick Jefferson builds BI systems using best-in-class technologies that scale with your business. 
                From data ingestion to visualization, we handle the entire pipeline with tools trusted by 
                Fortune 500 companies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{tech.name}</span>
                    <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">{tech.type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">BI Implementation Process</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Database className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Integration</h4>
                      <p className="text-sm text-gray-600 mt-1">Connect all your data sources into a unified warehouse</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Dashboard Design</h4>
                      <p className="text-sm text-gray-600 mt-1">Create intuitive visualizations tailored to your needs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Activity className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-Time Analytics</h4>
                      <p className="text-sm text-gray-600 mt-1">Deploy live monitoring and alerting systems</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Continuous Optimization</h4>
                      <p className="text-sm text-gray-600 mt-1">AI-driven insights and performance improvements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Story: Albuquerque Retail Chain
              </h2>
              <p className="text-xl text-gray-600">
                How we transformed data chaos into strategic clarity
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">The Challenge</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-600">Data scattered across 5 different systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-600">Manual reporting taking 40+ hours monthly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-600">No real-time visibility into inventory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-600">Decisions based on 30-day old data</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">The Solution</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">Unified data warehouse with Snowflake</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">Automated ETL pipelines with Airflow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">Real-time Power BI dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">AI-powered demand forecasting</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t pt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">The Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">85%</div>
                    <div className="text-sm text-gray-600">Faster Reporting</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">$1.2M</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">32%</div>
                    <div className="text-sm text-gray-600">Inventory Reduction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Data Visibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Turn Your Data Into Your Greatest Asset
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join New Mexico's data-driven businesses with custom BI solutions by Rick Jefferson
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Your BI Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:8775618001" 
                className="bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                Call (877) 561-8001
              </a>
            </div>
            <p className="text-white/80 mt-6 text-sm">
              Free data assessment • Dashboard demo available • Implementation in 2-4 weeks
            </p>
          </div>
        </div>
      </section>

      <CalendarWidget />
      <Footer />
    </main>
  )
}