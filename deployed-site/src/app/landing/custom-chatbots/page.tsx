import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Bot, MessageSquare, Clock, DollarSign, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom AI Chatbots for Business | RJ Business Solutions',
  description: 'Get a custom AI chatbot that handles customer support, generates leads, and books appointments 24/7. Reduce costs by 80% while improving customer satisfaction.',
  keywords: 'AI chatbot, custom chatbot, chatbot development, customer service automation, lead generation chatbot, appointment booking bot, New Mexico chatbot services, Albuquerque, Santa Fe, Las Cruces, Rick Jefferson',
  openGraph: {
    title: 'Custom AI Chatbot Development - RJ Business Solutions',
    description: 'Automate customer support and lead generation with intelligent AI chatbots that work 24/7.',
    url: 'https://rjbusinesssolutions.org/landing/custom-chatbots',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/custom-chatbots-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Custom Chatbot Services by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/landing/custom-chatbots'
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
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a customer inquiry again'
  },
  {
    icon: DollarSign,
    title: '80% Cost Reduction',
    description: 'Save thousands on customer support'
  },
  {
    icon: Users,
    title: 'Instant Response',
    description: 'Answer customers in milliseconds'
  },
  {
    icon: Zap,
    title: 'Scalable Support',
    description: 'Handle unlimited conversations'
  }
]

const features = [
  'Natural language understanding and conversation',
  'Multi-language support for global reach',
  'Lead qualification and capture',
  'Appointment scheduling and calendar integration',
  'Product recommendations and upselling',
  'FAQ automation and instant answers',
  'CRM and email marketing integration',
  'Custom training on your business data',
  'Analytics and conversation insights',
  'Human handoff when needed'
]

const useCases = [
  {
    title: 'Customer Support',
    description: 'Answer questions, resolve issues, and provide 24/7 support',
    icon: MessageSquare
  },
  {
    title: 'Lead Generation',
    description: 'Qualify prospects and capture contact information automatically',
    icon: Users
  },
  {
    title: 'Sales Assistant',
    description: 'Guide customers through products and close sales',
    icon: DollarSign
  },
  {
    title: 'Appointment Booking',
    description: 'Schedule meetings directly into your calendar',
    icon: Clock
  }
]

const stats = [
  { metric: '67%', label: 'Support Tickets Resolved' },
  { metric: '3.4x', label: 'More Leads Generated' },
  { metric: '91%', label: 'Customer Satisfaction' },
  { metric: '<2sec', label: 'Average Response Time' }
]

export default function CustomChatbotsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Bot className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold">Custom AI Chatbots</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your AI Employee That 
              <span className="text-secondary block mt-2">Never Takes a Break</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Custom AI chatbots that handle customer support, generate leads, and book appointments 24/7. 
              Save 80% on support costs while delighting your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#demo" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
              >
                See Your Chatbot in Action
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
              Setup in 48 hours. No coding required.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Stop Losing Customers to Slow Response Times
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Missed Opportunities',
                description: '78% of customers buy from the first business that responds'
              },
              {
                title: 'High Support Costs',
                description: 'Paying $25-50 per hour for human support agents'
              },
              {
                title: 'Limited Hours',
                description: 'Losing business outside of 9-5 working hours'
              }
            ].map((problem, index) => (
              <div key={index} className="bg-red-50 border-2 border-red-100 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-red-700">{problem.title}</h3>
                <p className="text-gray-700">{problem.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            Your competitors are using AI chatbots to respond instantly, capture more leads, and provide 
            better customer service. Don't get left behind.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            The Power of AI Chatbots
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.metric}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Your Business Needs an AI Chatbot
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What Your Chatbot Can Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <Icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Enterprise-Grade Chatbot Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg shadow">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Our chatbots are powered by the latest AI technology and customized specifically for your business, 
              ensuring accurate responses and seamless customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Chatbots for Every Industry
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                industry: 'E-commerce',
                applications: ['Product recommendations', 'Order tracking', 'Returns & refunds', 'Inventory questions']
              },
              {
                industry: 'Healthcare',
                applications: ['Appointment scheduling', 'Symptom checker', 'Insurance verification', 'Prescription refills']
              },
              {
                industry: 'Real Estate',
                applications: ['Property inquiries', 'Virtual tours', 'Mortgage calculator', 'Agent scheduling']
              },
              {
                industry: 'Education',
                applications: ['Student support', 'Course enrollment', 'FAQ automation', 'Campus information']
              },
              {
                industry: 'Finance',
                applications: ['Account inquiries', 'Transaction support', 'Loan applications', 'Investment advice']
              },
              {
                industry: 'Travel',
                applications: ['Booking assistance', 'Itinerary planning', 'Flight status', 'Hotel recommendations']
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">{item.industry}</h3>
                <ul className="space-y-2">
                  {item.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Your Chatbot Live in 48 Hours
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Consultation', description: 'Understand your needs and goals' },
              { step: '2', title: 'Customization', description: 'Build and train your AI chatbot' },
              { step: '3', title: 'Integration', description: 'Connect to your website and tools' },
              { step: '4', title: 'Launch', description: 'Go live and start converting' }
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

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Chatbot Solutions for Every Budget
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$297',
                period: '/month',
                features: [
                  'Up to 1,000 conversations',
                  'Basic customization',
                  'Website widget',
                  'Email support',
                  'Analytics dashboard'
                ]
              },
              {
                name: 'Professional',
                price: '$597',
                period: '/month',
                featured: true,
                features: [
                  'Up to 5,000 conversations',
                  'Advanced AI training',
                  'Multi-channel support',
                  'CRM integration',
                  'Priority support',
                  'Custom branding'
                ]
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                features: [
                  'Unlimited conversations',
                  'Multiple chatbots',
                  'API access',
                  'Dedicated account manager',
                  'Custom integrations',
                  'White-label options'
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
                  {pkg.price}<span className="text-lg text-gray-600">{pkg.period}</span>
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
                  href="#demo" 
                  className={`block text-center py-3 rounded-lg font-bold transition-all duration-200 ${
                    pkg.featured 
                      ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Calculate Your ROI
          </h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Without Chatbot</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Support Agent (Monthly)</span>
                    <span className="font-bold text-red-600">$4,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Missed Leads (Monthly)</span>
                    <span className="font-bold text-red-600">$8,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">After-Hours Lost Sales</span>
                    <span className="font-bold text-red-600">$5,000</span>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span className="font-bold">Total Monthly Cost</span>
                    <span className="font-bold text-red-600">$17,000</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">With AI Chatbot</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Chatbot (Monthly)</span>
                    <span className="font-bold text-green-600">$597</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Setup (One-time)</span>
                    <span className="font-bold text-green-600">$1,997</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Maintenance</span>
                    <span className="font-bold text-green-600">$0</span>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span className="font-bold">Total Monthly Cost</span>
                    <span className="font-bold text-green-600">$597</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-secondary/10 rounded-lg text-center">
              <p className="text-2xl font-bold text-gray-900">
                Monthly Savings: <span className="text-secondary">$16,403</span>
              </p>
              <p className="text-gray-600 mt-2">That's $196,836 saved per year!</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Rick Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Your AI Chatbot Expert
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/rick-jefferson.jpg"
                alt="Rick Jefferson - AI Chatbot Expert"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-secondary"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Rick Jefferson</h3>
              <p className="text-lg mb-4 text-gray-700">
                Rick Jefferson is at the forefront of AI chatbot technology, helping businesses automate 
                customer interactions and scale their operations efficiently.
              </p>
              <p className="text-gray-600 mb-6">
                With expertise in natural language processing and conversational AI, Rick creates chatbots 
                that feel human, understand context, and deliver exceptional customer experiences.
              </p>
              <div className="flex items-center gap-4">
                <Bot className="h-12 w-12 text-secondary" />
                <div>
                  <p className="font-bold text-gray-900">AI Implementation Expert</p>
                  <p className="text-gray-600">500+ Chatbots Deployed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            See Your Custom Chatbot in Action
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
            Book a free demo to see how an AI chatbot can transform your customer experience 
            and boost your bottom line.
          </p>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
              style={{ width: '100%', minHeight: '750px', border: 'none' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your Chatbot Demo - RJ Business Solutions"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript" async></script>
          </div>
          <p className="text-center text-sm mt-6 text-gray-500">
            Free demo. See results in real-time. No obligation.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the AI Revolution
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let your competitors steal your customers with faster response times
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#demo" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Get Your AI Chatbot Now
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