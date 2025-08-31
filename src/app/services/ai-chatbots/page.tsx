import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { Bot, MessageSquare, Clock, TrendingUp, Shield, Users, CheckCircle, ArrowRight, Zap, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Chatbot Development Services | RJ Business Solutions - New Mexico',
  description: 'Transform customer service with intelligent AI chatbots. 24/7 automated support, lead qualification, and sales assistance for New Mexico businesses. Built by Rick Jefferson.',
  keywords: 'AI chatbots, conversational AI, customer service automation, chatbot development, New Mexico, Albuquerque, Santa Fe, Las Cruces, virtual assistant, automated support, lead generation chatbot, sales chatbot, Rick Jefferson',
  openGraph: {
    title: 'AI Chatbot Development Services - RJ Business Solutions',
    description: 'Deploy intelligent chatbots that handle customer inquiries 24/7, reducing response time by 90%. Expert AI development by Rick Jefferson.',
    url: 'https://rjbusinesssolutions.org/services/ai-chatbots',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/ai-chatbots-og.jpg',
      width: 1200,
      height: 630,
      alt: 'AI Chatbot Services by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/services/ai-chatbots'
  }
}

const benefits = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a customer inquiry with round-the-clock automated support'
  },
  {
    icon: TrendingUp,
    title: '90% Faster Response',
    description: 'Instant responses to customer queries, improving satisfaction rates'
  },
  {
    icon: Shield,
    title: 'Consistent Quality',
    description: 'Deliver accurate, on-brand responses every single time'
  },
  {
    icon: Users,
    title: 'Scalable Support',
    description: 'Handle unlimited conversations simultaneously without additional staff'
  }
]

const features = [
  'Natural Language Processing (NLP) for human-like conversations',
  'Multi-language support for New Mexico\'s diverse population',
  'Integration with CRM systems and databases',
  'Lead qualification and routing to sales teams',
  'Appointment scheduling and calendar integration',
  'Order tracking and status updates',
  'FAQ automation and knowledge base integration',
  'Sentiment analysis and escalation triggers',
  'Custom personality and brand voice configuration',
  'Analytics dashboard with conversation insights'
]

const useCases = [
  {
    industry: 'Healthcare',
    applications: ['Patient appointment scheduling', 'Symptom pre-screening', 'Insurance verification', 'Prescription refill requests']
  },
  {
    industry: 'E-commerce',
    applications: ['Product recommendations', 'Order tracking', 'Return processing', 'Size and fit guidance']
  },
  {
    industry: 'Real Estate',
    applications: ['Property inquiries', 'Virtual tour scheduling', 'Mortgage pre-qualification', 'Document collection']
  },
  {
    industry: 'Education',
    applications: ['Student support', 'Course enrollment', 'Campus information', 'Assignment help']
  }
]

export default function AIChatbotsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bot className="h-6 w-6 text-primary-600" />
                <span className="text-primary-600 font-semibold">AI Chatbot Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Intelligent AI Chatbots That 
                <span className="text-primary-600"> Never Sleep</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Deploy conversational AI that handles customer inquiries, qualifies leads, and drives sales 24/7.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Built with cutting-edge NLP and machine learning by Rick Jefferson, serving businesses across Albuquerque, Santa Fe, Las Cruces, and all of New Mexico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                  Get Your Custom Chatbot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="tel:8775618001" className="btn-secondary inline-flex items-center justify-center">
                  Call (877) 561-8001
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-primary-600 mr-2" />
                  Setup in 48 Hours
                </div>
                <div className="flex items-center">
                  <Brain className="h-5 w-5 text-primary-600 mr-2" />
                  Self-Learning AI
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">AI Assistant</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Hello! I'm your AI assistant. How can I help you transform your business today?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4 ml-12">
                    <p className="text-sm text-gray-900">
                      I need help automating customer support
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">
                          Perfect! I can help you reduce support tickets by 70% with intelligent automation. Let me schedule a consultation with Rick Jefferson...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">70%</div>
                    <div className="text-xs text-gray-600">Ticket Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">24/7</div>
                    <div className="text-xs text-gray-600">Availability</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">90%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
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
              Why New Mexico Businesses Choose Our AI Chatbots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Albuquerque's tech startups to Santa Fe's tourism industry, our chatbots deliver measurable results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Chatbot Features
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Built by Rick Jefferson using cutting-edge frameworks including LangChain, CrewAI, and custom transformer models, 
                our chatbots go beyond simple Q&A to deliver intelligent, context-aware conversations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Chatbot ROI Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Support Tickets
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="1000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Average Handle Time (minutes)
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="15"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Support Staff Hourly Rate
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="25"
                  />
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Estimated Monthly Savings</span>
                    <span className="text-2xl font-bold text-primary-600">$4,375</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Hours Saved</span>
                    <span className="font-bold text-gray-900">175 hours/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROI Timeline</span>
                    <span className="font-bold text-gray-900">2-3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Chatbot Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI assistants for every New Mexico industry
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-start">
                      <MessageSquare className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powered by Cutting-Edge AI Technology
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Rick Jefferson builds chatbots using the most advanced AI frameworks and technologies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['LangChain', 'CrewAI', 'GPT-4', 'Claude', 'Pinecone', 'Supabase', 'Next.js', 'Python'].map((tech) => (
                <div key={tech} className="bg-white/10 backdrop-blur-sm rounded-lg py-4 px-6">
                  <span className="text-white font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Deploy Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of New Mexico businesses already using our intelligent chatbots to transform customer experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="/services" 
                className="btn-secondary inline-flex items-center justify-center"
              >
                Explore All Services
              </a>
            </div>
            <p className="text-gray-600 mt-6 text-sm">
              Free consultation • 48-hour deployment • No setup fees for New Mexico businesses
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}