import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Users, DollarSign, Target, Phone, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Exclusive Insurance Leads That Convert | RJ Business Solutions',
  description: 'Get high-quality, exclusive insurance leads delivered daily. Auto, home, life, and health insurance leads with verified contact info. Start closing more policies today.',
  keywords: 'insurance leads, exclusive leads, auto insurance leads, home insurance leads, life insurance leads, health insurance leads, Medicare leads, final expense leads, New Mexico insurance, Albuquerque, Santa Fe, Rick Jefferson',
  openGraph: {
    title: 'High-Quality Insurance Leads - RJ Business Solutions',
    description: 'Stop fighting for shared leads. Get exclusive, high-intent insurance prospects delivered to you daily.',
    url: 'https://rjbusinesssolutions.org/landing/insurance-leads',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/insurance-leads-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Insurance Lead Generation by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/landing/insurance-leads'
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

const leadTypes = [
  {
    icon: Shield,
    title: 'Auto Insurance',
    description: 'Drivers actively shopping for better coverage and rates'
  },
  {
    icon: Users,
    title: 'Life Insurance',
    description: 'Families seeking protection and financial security'
  },
  {
    icon: DollarSign,
    title: 'Health/Medicare',
    description: 'Individuals comparing plans and enrollment options'
  },
  {
    icon: Target,
    title: 'Home Insurance',
    description: 'Homeowners looking for comprehensive coverage'
  }
]

const benefits = [
  'Exclusive leads - never shared with competitors',
  'Real-time delivery to your CRM or phone',
  'Verified contact information',
  'Intent-based qualification',
  'Geographic and demographic targeting',
  'Custom lead filters based on your criteria',
  'Return/replacement guarantee',
  'Dedicated account management'
]

const stats = [
  { metric: '42%', label: 'Average Close Rate' },
  { metric: '3min', label: 'Average Delivery Time' },
  { metric: '100%', label: 'Exclusive to You' },
  { metric: '8:1', label: 'ROI Average' }
]

export default function InsuranceLeadsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold">Exclusive Insurance Leads</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Stop Fighting for Shared Leads
              <span className="text-secondary block mt-2">Get Exclusive Insurance Prospects</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              High-quality, exclusive insurance leads delivered in real-time. 
              Only you get the lead. Close more policies with prospects actively shopping for coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#get-started" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
              >
                Start Getting Leads Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:8775618001" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (877) 561-8001
              </a>
            </div>
            <p className="text-sm mt-6 text-gray-300">
              Join 500+ agents closing more deals with our leads
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            The Problem with Traditional Insurance Leads
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Shared 8+ Times',
                description: 'You\'re competing with multiple agents calling the same prospect within minutes'
              },
              {
                title: 'Poor Quality',
                description: 'Outdated info, wrong numbers, and prospects who never requested quotes'
              },
              {
                title: 'Low ROI',
                description: 'Spending thousands on leads that rarely convert into actual policies'
              }
            ].map((problem, index) => (
              <div key={index} className="bg-red-50 border-2 border-red-100 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-red-700">{problem.title}</h3>
                <p className="text-gray-700">{problem.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            RJ Business Solutions delivers exclusive, high-intent insurance leads that are never shared. 
            You're the only agent who gets the lead, giving you the best chance to close the sale.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Real Results for Insurance Agents
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

      {/* Lead Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Insurance Lead Types Available
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {leadTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              Plus: Final Expense, Medicare Supplement, Commercial Insurance, and more!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What Makes Our Leads Different
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="#get-started" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Start Getting Exclusive Leads
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How Our Lead Generation Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Prospect Searches', description: 'Consumer actively searches for insurance quotes online' },
              { step: '2', title: 'We Capture', description: 'Our system captures their information and intent' },
              { step: '3', title: 'Instant Delivery', description: 'Lead delivered to you in real-time (exclusive)' },
              { step: '4', title: 'You Close', description: 'Contact warm prospect and close the sale' }
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
            Flexible Lead Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                leads: '20 Leads/Month',
                price: 'From $25/lead',
                features: [
                  'Exclusive leads',
                  'Basic targeting',
                  'Email delivery',
                  'Weekly reporting',
                  'Email support'
                ]
              },
              {
                name: 'Professional',
                leads: '50 Leads/Month',
                price: 'From $20/lead',
                featured: true,
                features: [
                  'Exclusive leads',
                  'Advanced targeting',
                  'Real-time delivery',
                  'CRM integration',
                  'Dedicated support',
                  'Lead replacement'
                ]
              },
              {
                name: 'Agency',
                leads: '100+ Leads/Month',
                price: 'Custom Pricing',
                features: [
                  'Exclusive leads',
                  'Custom filters',
                  'API integration',
                  'Live transfer available',
                  'Account manager',
                  'Volume discounts'
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
                <div className="text-lg text-gray-600 mb-2">{pkg.leads}</div>
                <div className="text-2xl font-bold text-primary mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="#get-started" 
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

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What Insurance Agents Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "These leads are game-changers. My close rate went from 8% to 42% in just 2 months.",
                author: "Michael R.",
                role: "Auto Insurance Agent"
              },
              {
                quote: "Finally, leads that actually answer the phone and want to buy insurance!",
                author: "Sarah T.",
                role: "Life Insurance Specialist"
              },
              {
                quote: "The ROI is incredible. I'm getting 8x return on my lead investment consistently.",
                author: "David L.",
                role: "Medicare Agent"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Rick Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Your Lead Generation Partner
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/rick-jefferson.jpg"
                alt="Rick Jefferson - Lead Generation Expert"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-secondary"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Rick Jefferson</h3>
              <p className="text-lg mb-4 text-gray-700">
                Rick Jefferson has been helping insurance agents grow their books of business for over a decade. 
                His lead generation systems have generated millions in premium for agents nationwide.
              </p>
              <p className="text-gray-600 mb-6">
                "I understand the insurance industry's unique challenges. That's why every lead we deliver is 
                exclusive, verified, and from someone actively shopping for coverage. No recycled data, no shared 
                leads – just real prospects ready to buy."
              </p>
              <div className="flex items-center gap-4">
                <TrendingUp className="h-12 w-12 text-secondary" />
                <div>
                  <p className="font-bold text-gray-900">10+ Years in Insurance Marketing</p>
                  <p className="text-gray-600">Trusted by 500+ Insurance Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Start Getting Exclusive Insurance Leads Today
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
            Schedule a consultation to discuss your lead needs and get started with high-quality, 
            exclusive insurance prospects.
          </p>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
              style={{ width: '100%', minHeight: '750px', border: 'none' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your Insurance Lead Consultation - RJ Business Solutions"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript" async></script>
          </div>
          <p className="text-center text-sm mt-6 text-gray-500">
            No contracts. Cancel anytime. 100% exclusive leads.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Wasting Money on Bad Leads
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get exclusive, high-intent insurance leads that actually convert into policies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#get-started" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Get Your First Leads Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="tel:8775618001" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (877) 561-8001
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}