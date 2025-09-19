import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Globe, Zap, ShoppingCart, Smartphone, TrendingUp, Code, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'High-Converting Websites & Sales Funnels | RJ Business Solutions',
  description: 'Get a website or sales funnel that converts visitors into customers. Custom design, mobile-optimized, fast-loading, and built to generate leads and sales.',
  keywords: 'website design, sales funnels, landing pages, conversion optimization, web development, clickfunnels, lead generation websites, New Mexico web design, Albuquerque, Santa Fe, Rick Jefferson',
  openGraph: {
    title: 'Professional Websites & Sales Funnels - RJ Business Solutions',
    description: 'Transform your online presence with high-converting websites and sales funnels that drive results.',
    url: 'https://rjbusinesssolutions.org/landing/website-funnels',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/website-funnels-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Website & Funnel Services by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/landing/website-funnels'
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
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sites that load in under 2 seconds'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Perfect on every device and screen'
  },
  {
    icon: ShoppingCart,
    title: 'Built to Convert',
    description: 'Turn visitors into paying customers'
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimized',
    description: 'Rank higher and get found online'
  }
]

const websiteFeatures = [
  'Custom responsive design tailored to your brand',
  'Lightning-fast page load speeds',
  'SEO optimization for higher rankings',
  'Mobile-first development approach',
  'Secure hosting and SSL certificates',
  'Content management system (CMS)',
  'Contact forms and lead capture',
  'Google Analytics integration',
  'Social media integration',
  'Ongoing maintenance and support'
]

const funnelFeatures = [
  'High-converting landing pages',
  'A/B split testing capabilities',
  'Email automation integration',
  'Payment gateway integration',
  'Upsell and downsell sequences',
  'Order bump functionality',
  'Membership site capabilities',
  'Webinar funnel creation',
  'Lead magnet delivery systems',
  'Analytics and conversion tracking'
]

export default function WebsiteFunnelsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Globe className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold">Websites & Sales Funnels</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Websites & Funnels That 
              <span className="text-secondary block mt-2">Convert Like Crazy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Stop losing money with a website that doesn't convert. Get a custom-built website or 
              sales funnel designed to turn visitors into customers, automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#consultation" 
                className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
              >
                Get Your Free Website Strategy Call
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
              Get a website that works as hard as you do!
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Is Your Website Costing You Customers?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Slow & Outdated',
                description: 'Your website takes forever to load and looks like it was built in 2010'
              },
              {
                title: 'No Lead Generation',
                description: 'Visitors leave without taking action or providing their contact information'
              },
              {
                title: 'Poor Mobile Experience',
                description: '60% of your traffic is mobile but your site doesn\'t work properly on phones'
              }
            ].map((problem, index) => (
              <div key={index} className="bg-red-50 border-2 border-red-100 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3 text-red-700">{problem.title}</h3>
                <p className="text-gray-700">{problem.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            Every day your website isn't converting is money left on the table. Let RJ Business Solutions 
            build you a website or sales funnel that actually generates leads and sales 24/7.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What Makes Our Websites Different
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Choose Your Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Website Services */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-gray-900">Professional Websites</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Perfect for businesses that need a professional online presence to showcase their 
                services and generate leads consistently.
              </p>
              <ul className="space-y-3 mb-8">
                {websiteFeatures.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="#consultation" 
                className="block text-center bg-primary hover:bg-primary-700 text-white py-3 rounded-lg font-bold transition-all duration-200"
              >
                Get Your Website Quote
              </Link>
            </div>

            {/* Funnel Services */}
            <div className="bg-secondary/5 rounded-2xl p-8 shadow-xl border-2 border-secondary">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="h-8 w-8 text-secondary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Sales Funnels</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Ideal for businesses ready to scale with automated sales systems that convert 
                cold traffic into paying customers.
              </p>
              <ul className="space-y-3 mb-8">
                {funnelFeatures.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="#consultation" 
                className="block text-center bg-secondary hover:bg-secondary/90 text-primary py-3 rounded-lg font-bold transition-all duration-200"
              >
                Build My Sales Funnel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Results That Speak for Themselves
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                type: 'E-commerce Site',
                result: '312% increase in sales',
                timeframe: 'in 90 days'
              },
              {
                type: 'Service Business Funnel',
                result: '47 qualified leads/week',
                timeframe: 'consistently'
              },
              {
                type: 'SaaS Landing Page',
                result: '8.7% conversion rate',
                timeframe: 'from cold traffic'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-sm font-semibold text-secondary mb-2">{item.type}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.result}</div>
                <div className="text-gray-600">{item.timeframe}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Proven Development Process
          </h2>
          <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Strategy', description: 'Define goals and map user journey' },
              { step: '2', title: 'Design', description: 'Create stunning, conversion-focused designs' },
              { step: '3', title: 'Development', description: 'Build fast, responsive, SEO-friendly sites' },
              { step: '4', title: 'Testing', description: 'Optimize for maximum conversions' },
              { step: '5', title: 'Launch & Scale', description: 'Go live and continuously improve' }
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
            Investment Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Landing Page',
                price: '$997',
                features: [
                  'Single high-converting page',
                  'Mobile responsive design',
                  'Lead capture forms',
                  'Basic SEO setup',
                  '30-day support'
                ]
              },
              {
                name: 'Professional Website',
                price: '$2,997',
                featured: true,
                features: [
                  '5-10 page custom website',
                  'Content management system',
                  'Advanced SEO optimization',
                  'Contact forms & integrations',
                  '90-day support',
                  'Google Analytics setup'
                ]
              },
              {
                name: 'Complete Sales Funnel',
                price: '$4,997+',
                features: [
                  'Full funnel system',
                  'Email automation setup',
                  'Payment integration',
                  'A/B testing setup',
                  'Conversion optimization',
                  '6-month support'
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
                <div className="text-3xl font-bold text-primary mb-6">
                  {pkg.price}
                </div>
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
            Built by an Expert Who Gets Results
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/rick-jefferson.jpg"
                alt="Rick Jefferson - Web Development Expert"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-secondary"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Rick Jefferson</h3>
              <p className="text-lg mb-4 text-gray-700">
                Rick Jefferson combines technical expertise with conversion psychology to create websites 
                and funnels that don't just look great – they generate real business results.
              </p>
              <p className="text-gray-600 mb-6">
                With experience building hundreds of high-converting websites and funnels, Rick knows exactly 
                what it takes to turn your online presence into a revenue-generating machine.
              </p>
              <div className="flex items-center gap-4">
                <Code className="h-12 w-12 text-secondary" />
                <div>
                  <p className="font-bold text-gray-900">Full-Stack Developer</p>
                  <p className="text-gray-600">10+ Years Building Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Get Your Free Website Strategy Session
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
            Discover exactly what you need to create a website or funnel that converts. 
            Book your free consultation with Rick Jefferson today.
          </p>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
              style={{ width: '100%', minHeight: '750px', border: 'none' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your Website Strategy Session - RJ Business Solutions"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript" async></script>
          </div>
          <p className="text-center text-sm mt-6 text-gray-500">
            100% Free. No obligation. Real solutions.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Losing Money with a Website That Doesn't Convert
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a website or funnel that works 24/7 to grow your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#consultation" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Start Your Project Today
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