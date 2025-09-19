import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Share2, TrendingUp, Calendar, BarChart3, Users, Heart, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Social Media Management Services | RJ Business Solutions',
  description: 'Professional social media management that drives engagement and grows your business. Content creation, posting, ads management, and analytics. Get started today!',
  keywords: 'social media management, social media marketing, Facebook marketing, Instagram marketing, LinkedIn marketing, content creation, social media ads, New Mexico, Albuquerque, Santa Fe, Rick Jefferson',
  openGraph: {
    title: 'Social Media Management Services - RJ Business Solutions',
    description: 'Grow your brand with professional social media management. Expert content creation and strategic posting.',
    url: 'https://rjbusinesssolutions.org/landing/social-media-management',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/social-media-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Social Media Management by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/landing/social-media-management'
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
    icon: Calendar,
    title: 'Consistent Posting',
    description: 'Never miss a post with our content calendar'
  },
  {
    icon: Users,
    title: 'Audience Growth',
    description: 'Attract and engage your ideal customers'
  },
  {
    icon: Heart,
    title: 'Engagement Boost',
    description: 'Build genuine connections with your audience'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Results',
    description: 'Track performance with detailed analytics'
  }
]

const services = [
  'Custom Content Creation & Design',
  'Strategic Content Calendar Planning',
  'Daily Social Media Monitoring',
  'Community Management & Engagement',
  'Social Media Advertising Campaigns',
  'Influencer Outreach & Partnerships',
  'Hashtag Research & Optimization',
  'Competitor Analysis & Monitoring',
  'Monthly Analytics & Reporting',
  'Crisis Management & Reputation Monitoring'
]

const platforms = [
  { name: 'Facebook', features: ['Business Page Management', 'Facebook Ads', 'Groups & Communities'] },
  { name: 'Instagram', features: ['Feed Posts & Stories', 'Reels & IGTV', 'Shopping Tags'] },
  { name: 'LinkedIn', features: ['Company Page Management', 'LinkedIn Ads', 'Thought Leadership'] },
  { name: 'Twitter/X', features: ['Tweet Strategy', 'Trending Topics', 'Twitter Spaces'] },
  { name: 'TikTok', features: ['Short-Form Videos', 'Trending Challenges', 'Influencer Collabs'] },
  { name: 'YouTube', features: ['Video Optimization', 'Channel Management', 'YouTube Shorts'] }
]

export default function SocialMediaManagementPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Share2 className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold">Social Media Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Social Media 
              <span className="text-secondary block mt-2">Into a Revenue Machine</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professional social media management that builds your brand, engages your audience, 
              and drives real business results. Let us handle your social while you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#consultation" 
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
              >
                Get Your Free Social Media Audit
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
              Join 200+ businesses growing with our social media expertise
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Social Media Success by the Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: '325%', label: 'Average Engagement Increase' },
              { metric: '2.8x', label: 'More Website Traffic' },
              { metric: '45%', label: 'Lead Generation Boost' },
              { metric: '$4.20', label: 'ROI for Every $1 Spent' }
            ].map((stat, index) => (
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
            Why Your Business Needs Professional Social Media Management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
            Stop struggling with inconsistent posting and low engagement. Our expert team creates compelling content, 
            manages your communities, and drives measurable results across all your social platforms.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Complete Social Media Management Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            We Manage All Major Social Platforms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-primary">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Social Media Management Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$597',
                features: [
                  '2 Social Platforms',
                  '12 Posts per Month',
                  'Basic Graphics',
                  'Monthly Analytics',
                  'Community Management'
                ]
              },
              {
                name: 'Growth',
                price: '$997',
                featured: true,
                features: [
                  '4 Social Platforms',
                  '20 Posts per Month',
                  'Custom Graphics & Videos',
                  'Weekly Analytics',
                  'Ad Campaign Management',
                  'Influencer Outreach'
                ]
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: [
                  'All Social Platforms',
                  'Daily Posting',
                  'Premium Content Creation',
                  'Real-time Analytics',
                  'Dedicated Account Manager',
                  'Full Marketing Integration'
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
                  {pkg.price}<span className="text-lg text-gray-600">/month</span>
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

      {/* About Rick Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Meet Your Social Media Expert
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/rick-jefferson.jpg"
                alt="Rick Jefferson - Social Media Expert"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-secondary"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Rick Jefferson</h3>
              <p className="text-lg mb-4 text-gray-700">
                Rick Jefferson brings a unique blend of creative storytelling and data-driven strategy to social media management. 
                With expertise across all major platforms, he helps businesses build authentic connections with their audiences.
              </p>
              <p className="text-gray-600 mb-6">
                From viral content creation to sophisticated ad campaigns, Rick's approach focuses on driving real business 
                results through social media, not just vanity metrics.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Meta Certified', 'Google Ads Certified', '10+ Years Experience'].map((cert, index) => (
                  <span key={index} className="bg-secondary/10 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Get Your Free Social Media Audit & Strategy Session
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
            Discover how to transform your social media presence into a powerful marketing tool. 
            Book your free consultation with Rick Jefferson today.
          </p>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
              style={{ width: '100%', minHeight: '750px', border: 'none' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your Social Media Strategy Session - RJ Business Solutions"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript" async></script>
          </div>
          <p className="text-center text-sm mt-6 text-gray-500">
            Free consultation. No obligations. Real strategies.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses growing their brand with professional social media management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#consultation" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Start Growing Today
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