import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Search, TrendingUp, Target, ChartBar, Users, Award, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Services That Drive Real Results | RJ Business Solutions',
  description: 'Rank #1 on Google with proven SEO strategies. Get more organic traffic, leads, and sales with expert SEO services in New Mexico. Free SEO audit included.',
  keywords: 'SEO services, search engine optimization, Google ranking, organic traffic, local SEO, New Mexico SEO, Albuquerque SEO, Santa Fe SEO, Las Cruces SEO, Rick Jefferson',
  openGraph: {
    title: 'Professional SEO Services - RJ Business Solutions',
    description: 'Dominate search results and grow your business with expert SEO. Get your free SEO audit today.',
    url: 'https://rjbusinesssolutions.org/landing/seo-services',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/seo-services-og.jpg',
      width: 1200,
      height: 630,
      alt: 'SEO Services by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/landing/seo-services'
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
    icon: TrendingUp,
    title: 'Higher Rankings',
    description: 'Reach page 1 of Google for your target keywords'
  },
  {
    icon: Users,
    title: 'More Traffic',
    description: 'Increase organic visitors by 200-500%'
  },
  {
    icon: Target,
    title: 'Quality Leads',
    description: 'Attract buyers actively searching for your services'
  },
  {
    icon: ChartBar,
    title: 'Proven ROI',
    description: 'Track results with detailed analytics and reporting'
  }
]

const services = [
  'Technical SEO Audit & Optimization',
  'Keyword Research & Strategy',
  'On-Page SEO Optimization',
  'Content Creation & Optimization',
  'Link Building & Authority Building',
  'Local SEO & Google My Business',
  'Mobile SEO Optimization',
  'Site Speed Optimization',
  'Schema Markup Implementation',
  'Monthly Reporting & Analytics'
]

const results = [
  { metric: '487%', label: 'Average Traffic Increase' },
  { metric: '3.2x', label: 'More Qualified Leads' },
  { metric: '82%', label: 'Page 1 Rankings Achieved' },
  { metric: '6:1', label: 'Average ROI' }
]

export default function SEOServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Search className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold">Professional SEO Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get Found on Google. 
              <span className="text-secondary block mt-2">Dominate Your Competition.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Proven SEO strategies that drive real results. Increase your organic traffic, 
              generate more leads, and grow your revenue with expert SEO services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#audit" 
                className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
              >
                Get Your FREE SEO Audit
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
              See where you rank and how to improve - 100% FREE!
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            SEO Results That Speak for Themselves
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
            Our data-driven SEO strategies consistently deliver measurable results for businesses 
            across New Mexico and beyond. Let us show you what's possible for your business.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose RJ Business Solutions for SEO?
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Comprehensive SEO Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Every SEO campaign is customized to your business goals, target audience, and competition. 
              We don't believe in one-size-fits-all solutions.
            </p>
            <Link 
              href="#audit" 
              className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Start Your SEO Campaign Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Proven SEO Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Audit & Analysis', description: 'Complete technical SEO audit and competitor analysis' },
              { step: '2', title: 'Strategy Development', description: 'Custom SEO strategy based on your goals and market' },
              { step: '3', title: 'Implementation', description: 'Execute on-page, off-page, and technical optimizations' },
              { step: '4', title: 'Monitor & Scale', description: 'Track results and continuously improve rankings' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Rick Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Your SEO Expert: Rick Jefferson
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/rick-jefferson.jpg"
                alt="Rick Jefferson - SEO Expert"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-secondary"
              />
            </div>
            <div>
              <p className="text-lg mb-4 text-gray-700">
                With over a decade of experience in digital marketing and SEO, Rick Jefferson has helped 
                hundreds of businesses achieve top rankings on Google and dramatically increase their organic traffic.
              </p>
              <p className="text-gray-600 mb-4">
                Rick's data-driven approach combines technical SEO expertise with deep understanding of search 
                algorithms and user intent. He specializes in helping New Mexico businesses dominate their 
                local markets while expanding their reach nationally.
              </p>
              <div className="flex items-center gap-4">
                <Award className="h-12 w-12 text-secondary" />
                <div>
                  <p className="font-bold text-gray-900">Certified SEO Professional</p>
                  <p className="text-gray-600">Google Analytics & Search Console Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Form Section */}
      <section id="audit" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Get Your FREE SEO Audit ($497 Value)
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
            Discover exactly where you rank, what's holding you back, and how to fix it. 
            Get a comprehensive SEO audit with actionable recommendations.
          </p>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
              style={{ width: '100%', minHeight: '750px', border: 'none' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your Free SEO Audit - RJ Business Solutions"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript" async></script>
          </div>
          <p className="text-center text-sm mt-6 text-gray-500">
            100% Free. No obligation. Real results.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Stop losing customers to your competition. Start ranking higher today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#audit" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Get Your Free SEO Audit
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