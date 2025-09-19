import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { CreditCard, TrendingUp, Shield, CheckCircle, DollarSign, Award, ArrowRight, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Credit Repair Business Solutions | Start Your Credit Repair Company',
  description: 'Launch and grow your credit repair business with proven systems, software, and support. Get everything you need to help clients improve their credit scores and build a profitable business.',
  keywords: 'credit repair business, credit repair software, start credit repair company, credit consultant, credit restoration, business opportunity, New Mexico, Albuquerque, Santa Fe, Las Cruces, Rick Jefferson',
  openGraph: {
    title: 'Credit Repair Business Solutions - RJ Business Solutions',
    description: 'Start your profitable credit repair business with complete training, software, and ongoing support.',
    url: 'https://rjbusinesssolutions.org/landing/credit-repair',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/credit-repair-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Credit Repair Business Solutions by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/landing/credit-repair'
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
    icon: DollarSign,
    title: 'High Profit Margins',
    description: '$500-$3000 per client with minimal overhead'
  },
  {
    icon: TrendingUp,
    title: 'Growing Demand',
    description: '79 million Americans have credit issues'
  },
  {
    icon: Shield,
    title: 'Recession-Proof',
    description: 'People always need credit repair services'
  },
  {
    icon: Award,
    title: 'Be the Expert',
    description: 'Help people achieve their financial dreams'
  }
]

const includesFeatures = [
  'Professional credit repair software & CRM',
  'Complete business setup and formation',
  'Legal compliance and bonding assistance',
  'Marketing materials and website templates',
  'Lead generation strategies that work',
  'Client onboarding system and contracts',
  'Dispute letter templates and automation',
  'Training on credit laws and regulations',
  'Ongoing support and business coaching',
  'Access to private mastermind community'
]

const problems = [
  {
    title: '68 Million Americans',
    description: 'Have bad credit and need help improving their scores'
  },
  {
    title: '$10,000+ Lost',
    description: 'Average person loses in higher interest rates due to bad credit'
  },
  {
    title: '45% Denied',
    description: 'Nearly half of credit applications are rejected'
  }
]

export default function CreditRepairPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <CreditCard className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold">Credit Repair Business Opportunity</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Start Your $10K/Month 
              <span className="text-secondary block mt-2">Credit Repair Business</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Join the booming credit repair industry. Get everything you need to launch, grow, 
              and scale a profitable credit repair business helping people achieve financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#consultation" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
              >
                Start Your Credit Repair Business
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
              Complete business-in-a-box solution with ongoing support
            </p>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Massive Market Opportunity
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg text-center">
                <div className="text-3xl font-bold text-secondary mb-2">{problem.title}</div>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            The credit repair industry is worth $4.4 billion and growing. With millions needing help 
            and willing to pay for it, there's never been a better time to start your credit repair business.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Start a Credit Repair Business?
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

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {includesFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-gray-50 rounded-lg shadow">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              We provide everything you need to launch and grow a successful credit repair business, 
              from software and systems to marketing and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Income Potential Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Your Income Potential
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">10 Clients</div>
                <div className="text-3xl font-bold text-secondary">$5,000/mo</div>
                <div className="text-gray-600">Part-time income</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">25 Clients</div>
                <div className="text-3xl font-bold text-secondary">$12,500/mo</div>
                <div className="text-gray-600">Full-time income</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">50+ Clients</div>
                <div className="text-3xl font-bold text-secondary">$25,000+/mo</div>
                <div className="text-gray-600">Scale with team</div>
              </div>
            </div>
            <p className="text-center text-gray-700">
              Average client pays $500-$1500 for credit repair services. 
              Most stay for 3-6 months = $1,500-$9,000 lifetime value per client.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            How We Help You Launch
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Setup & Training', description: 'Complete business setup and comprehensive training' },
              { step: '2', title: 'Systems & Software', description: 'Get professional software and proven systems' },
              { step: '3', title: 'Marketing Launch', description: 'Start generating leads and signing clients' },
              { step: '4', title: 'Scale & Grow', description: 'Ongoing support to scale your business' }
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

      {/* Package Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Choose Your Package
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$997',
                features: [
                  'Basic credit repair training',
                  'Dispute letter templates',
                  'Client contract templates',
                  'Marketing materials',
                  '30-day email support'
                ]
              },
              {
                name: 'Professional',
                price: '$2,997',
                featured: true,
                features: [
                  'Complete training program',
                  'Professional CRM software',
                  'Automated dispute system',
                  'Website and funnel setup',
                  'Lead generation training',
                  '90-day coaching support'
                ]
              },
              {
                name: 'Enterprise',
                price: '$5,997',
                features: [
                  'Everything in Professional',
                  'Done-for-you marketing',
                  'Live weekly coaching calls',
                  'Advanced scaling strategies',
                  'Affiliate program setup',
                  '1-year mastermind access'
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
                <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="#consultation" 
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

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Went from 0 to 47 clients in 3 months. Now making $23k/month working from home.",
                author: "Jennifer M.",
                location: "Albuquerque, NM"
              },
              {
                quote: "The training and support were incredible. I replaced my corporate salary in 6 months.",
                author: "Carlos R.",
                location: "Santa Fe, NM"
              },
              {
                quote: "Best business decision I ever made. The demand for credit repair is unbelievable.",
                author: "Amanda K.",
                location: "Las Cruces, NM"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
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
            Your Credit Repair Business Mentor
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/rick-jefferson.jpg"
                alt="Rick Jefferson - Credit Repair Business Expert"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-secondary"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Rick Jefferson</h3>
              <p className="text-lg mb-4 text-gray-700">
                Rick Jefferson has helped hundreds of entrepreneurs launch successful credit repair businesses. 
                His proven systems and strategies have generated millions in revenue for his students.
              </p>
              <p className="text-gray-600 mb-6">
                "The credit repair industry changed my life, and I'm passionate about helping others achieve 
                the same success. With the right training and support, anyone can build a profitable credit 
                repair business that truly helps people."
              </p>
              <div className="flex items-center gap-4">
                <Award className="h-12 w-12 text-secondary" />
                <div>
                  <p className="font-bold text-gray-900">Certified Credit Consultant</p>
                  <p className="text-gray-600">10+ Years in Credit Industry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Do I need experience in credit repair?",
                answer: "No! Our comprehensive training covers everything from the basics to advanced strategies."
              },
              {
                question: "How quickly can I start making money?",
                answer: "Most students sign their first client within 30 days and reach $5k/month within 90 days."
              },
              {
                question: "Is credit repair legal?",
                answer: "Yes! Credit repair is 100% legal when done correctly. We teach full compliance with all laws."
              },
              {
                question: "How much time does this require?",
                answer: "You can start part-time with 10-15 hours per week and scale up as you grow."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Start Your Credit Repair Business Today
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
            Schedule your free consultation to learn how to launch your profitable credit repair business 
            with our proven system and support.
          </p>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
              style={{ width: '100%', minHeight: '750px', border: 'none' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your Credit Repair Business Consultation - RJ Business Solutions"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript" async></script>
          </div>
          <p className="text-center text-sm mt-6 text-gray-500">
            Limited spots available. Reserve yours now.
          </p>
        </div>
      </section>

      {/* Urgency CTA */}
      <section className="py-12 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
            <p className="text-lg font-semibold text-gray-900">
              Special Offer: Save $500 when you enroll this week! Limited time only.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Financial Freedom Starts Here
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful credit repair business owners
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#consultation" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Start Your Business Now
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