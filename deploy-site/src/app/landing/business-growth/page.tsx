import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Rocket, TrendingUp, Users, Target, BarChart3, Briefcase, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Growth Consulting & Strategy | RJ Business Solutions',
  description: 'Transform your business with proven growth strategies. Get expert consulting, systems optimization, and digital transformation to scale your revenue and profits.',
  keywords: 'business growth, business consulting, growth strategy, business coaching, revenue optimization, digital transformation, New Mexico business consultant, Albuquerque, Santa Fe, Las Cruces, Rick Jefferson',
  openGraph: {
    title: 'Business Growth Consulting - RJ Business Solutions',
    description: 'Unlock explosive growth with expert business consulting and proven strategies.',
    url: 'https://rjbusinesssolutions.org/landing/business-growth',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/business-growth-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Business Growth Consulting by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/landing/business-growth'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const benefits = [
  {
    icon: Rocket,
    title: 'Rapid Growth',
    description: 'Accelerate your business growth 3-10x faster'
  },
  {
    icon: Target,
    title: 'Clear Strategy',
    description: 'Get a roadmap to achieve your business goals'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Work with experienced business strategists'
  },
  {
    icon: BarChart3,
    title: 'Measurable Results',
    description: 'Track progress with data-driven metrics'
  }
]

const services = [
  'Strategic business planning and goal setting',
  'Revenue optimization and pricing strategy',
  'Sales process development and optimization',
  'Marketing strategy and implementation',
  'Operations and systems automation',
  'Team building and leadership development',
  'Financial planning and cash flow management',
  'Digital transformation and technology adoption',
  'Customer experience optimization',
  'Business model innovation'
]

const results = [
  { metric: '287%', label: 'Average Revenue Increase' },
  { metric: '4.2x', label: 'ROI on Consulting' },
  { metric: '67%', label: 'Profit Margin Improvement' },
  { metric: '92%', label: 'Client Success Rate' }
]

const growthAreas = [
  {
    title: 'Revenue Growth',
    items: ['New revenue streams', 'Pricing optimization', 'Sales acceleration', 'Market expansion']
  },
  {
    title: 'Operational Excellence',
    items: ['Process automation', 'Cost reduction', 'Efficiency gains', 'Quality improvement']
  },
  {
    title: 'Market Domination',
    items: ['Competitive advantage', 'Brand positioning', 'Customer acquisition', 'Market share growth']
  },
  {
    title: 'Team Performance',
    items: ['Leadership development', 'Culture building', 'Talent retention', 'Productivity boost']
  }
]

export default function BusinessGrowthPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Rocket className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold">Business Growth Consulting</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Scale Your Business to 
              <span className="text-secondary block mt-2">7-Figures and Beyond</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Get the strategies, systems, and support you need to transform your business 
              into a scalable, profitable machine that runs without you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#strategy-session" 
                className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
              >
                Get Your Free Growth Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:8775618001" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200"
              >
                Call (877) 561-8001
              </a>
            </div>
            <p className="text-sm mt-6 text-gray-300">
              Free consultation valued at $997
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Is Your Business Stuck in a Growth Plateau?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Working IN, Not ON',
                description: 'You\'re trapped in day-to-day operations with no time for strategy'
              },
              {
                title: 'Revenue Ceiling',
                description: 'Can\'t seem to break through to the next level of growth'
              },
              {
                title: 'No Clear Path',
                description: 'Lacking a proven roadmap to scale sustainably'
              }
            ].map((problem, index) => (
              <div key={index} className="bg-red-50 border-2 border-red-100 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-red-700">{problem.title}</h3>
                <p className="text-gray-700">{problem.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            You're not alone. 87% of businesses fail to scale beyond $1M in revenue. 
            RJ Business Solutions provides the expertise and systems to break through your growth barriers.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Proven Results for Growing Businesses
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{result.metric}</div>
                <p className="text-gray-600">{result.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            Our clients consistently achieve breakthrough results by implementing our proven 
            growth strategies and systems.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What You Get with RJ Business Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Growth Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            We Help You Grow in Every Area
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {growthAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Comprehensive Business Growth Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg shadow">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="#strategy-session" 
              className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Unlock Your Growth Potential
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Proven Growth Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Diagnose', description: 'Deep dive into your business' },
              { step: '2', title: 'Strategize', description: 'Create custom growth plan' },
              { step: '3', title: 'Implement', description: 'Execute with expert guidance' },
              { step: '4', title: 'Optimize', description: 'Refine and improve continuously' },
              { step: '5', title: 'Scale', description: 'Expand and dominate market' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                business: 'Tech Startup',
                result: '$250K to $2.1M in 18 months',
                strategy: 'Product-market fit and scaling systems'
              },
              {
                business: 'Service Company',
                result: '5x revenue with 50% less work',
                strategy: 'Automation and premium positioning'
              },
              {
                business: 'E-commerce Brand',
                result: '$50K/mo to $500K/mo in 1 year',
                strategy: 'Funnel optimization and paid ads'
              }
            ].map((study, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <div className="text-sm font-semibold text-secondary mb-2">{study.business}</div>
                <div className="text-2xl font-bold text-gray-900 mb-3">{study.result}</div>
                <p className="text-gray-600">{study.strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Choose Your Growth Package
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Growth Audit',
                price: '$997',
                duration: 'One-time',
                features: [
                  'Business assessment',
                  'Growth opportunity analysis',
                  'Strategic roadmap',
                  'Priority action plan',
                  '90-minute strategy call'
                ]
              },
              {
                name: 'Growth Accelerator',
                price: '$2,997',
                duration: '/month',
                featured: true,
                features: [
                  'Weekly strategy calls',
                  'Custom growth plan',
                  'Implementation support',
                  'Team training included',
                  'Unlimited email support',
                  'Performance tracking'
                ]
              },
              {
                name: 'Scale Partnership',
                price: '$5,997+',
                duration: '/month',
                features: [
                  'Done-with-you implementation',
                  'C-suite advisory',
                  'Full team alignment',
                  'Systems development',
                  'Investor readiness',
                  'Exit strategy planning'
                ]
              }
            ].map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-8 shadow-xl ${pkg.featured ? 'ring-4 ring-secondary transform scale-105' : ''}`}
              >
                {pkg.featured && (
                  <div className="bg-secondary text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-6">
                    <span className="font-bold">MOST POPULAR</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{pkg.name}</h3>
                <div className="text-3xl font-bold text-primary mb-1">
                  {pkg.price}<span className="text-lg text-gray-600">{pkg.duration}</span>
                </div>
                <ul className="space-y-3 mb-8 mt-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="#strategy-session" 
                  className={`block text-center py-3 rounded-lg font-bold transition-all duration-200 ${
                    pkg.featured 
                      ? 'bg-secondary hover:bg-secondary/90 text-primary' 
                      : 'bg-primary hover:bg-primary-700 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Rick Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Your Business Growth Expert
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/rick-jefferson.jpg"
                alt="Rick Jefferson - Business Growth Expert"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-secondary"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Rick Jefferson</h3>
              <p className="text-lg mb-4 text-gray-700">
                Rick Jefferson is a serial entrepreneur and business growth strategist who has built 
                multiple 7-figure businesses and helped hundreds of companies scale successfully.
              </p>
              <p className="text-gray-600 mb-6">
                With expertise in digital transformation, systems optimization, and strategic growth, 
                Rick provides the roadmap and support businesses need to achieve exponential growth.
              </p>
              <div className="flex items-center gap-4">
                <Briefcase className="h-12 w-12 text-secondary" />
                <div>
                  <p className="font-bold text-gray-900">Serial Entrepreneur</p>
                  <p className="text-gray-600">15+ Years Building & Scaling Businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Session Section */}
      <section id="strategy-session" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Get Your Free Growth Strategy Session
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
            Discover the hidden opportunities in your business and get a custom roadmap to 
            explosive growth. This 45-minute session is valued at $997 - yours free today.
          </p>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
              style={{ width: '100%', minHeight: '750px', border: 'none' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your Business Growth Strategy Session - RJ Business Solutions"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript" async></script>
          </div>
          <p className="text-center text-sm mt-6 text-gray-500">
            100% Free. No obligation. Actionable insights guaranteed.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock Explosive Growth?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stop leaving money on the table. Get the strategies and support to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#strategy-session" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Claim Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:8775618001" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200"
            >
              Call (877) 561-8001
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}