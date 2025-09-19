import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Clock, CheckCircle, ArrowRight, Bot, PhoneCall, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Voice Bot That Calls & Qualifies Leads 24/7 | RJ Business Solutions',
  description: 'Never miss a lead again with AI Voice Bot automation. Automate lead outreach, qualify prospects instantly, save hours, and book more appointments. Expert implementation by Rick Jefferson.',
  keywords: 'AI voice bot, voice AI, automated calling, lead qualification, sales automation, appointment booking, AI phone calls, New Mexico, Albuquerque, Santa Fe, Las Cruces, Rick Jefferson',
  openGraph: {
    title: 'AI Voice Bot That Calls & Qualifies Leads - RJ Business Solutions',
    description: 'Automate your lead outreach and qualify prospects 24/7 with intelligent Voice AI Bot. Book your free strategy call now.',
    url: 'https://rjbusinesssolutions.org/landing/ai-voice-bot',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/ai-voice-bot-og.jpg',
      width: 1200,
      height: 630,
      alt: 'AI Voice Bot Services by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/landing/ai-voice-bot'
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
    icon: PhoneCall,
    title: '24/7 Lead Calling',
    description: 'Never miss a hot lead - AI calls instantly, any time'
  },
  {
    icon: Users,
    title: 'Instant Qualification',
    description: 'Ask the right questions and identify quality prospects'
  },
  {
    icon: Clock,
    title: 'Save 20+ Hours/Week',
    description: 'Free your sales team from cold calling'
  },
  {
    icon: TrendingUp,
    title: '3x More Appointments',
    description: 'Book qualified meetings directly into calendars'
  }
]

const problems = [
  {
    title: 'Sales Team Overwhelmed',
    description: 'Are your reps spending hours dialing cold leads instead of focusing on closing qualified opportunities?'
  },
  {
    title: 'Slow Lead Response Time',
    description: 'Losing valuable hot leads because your team can\'t follow up the instant they show interest?'
  },
  {
    title: 'Inconsistent Qualification',
    description: 'Is lead quality hit-or-miss, wasting time on prospects who aren\'t a good fit for your service?'
  }
]

const features = [
  'Natural conversation flow with advanced AI',
  'Custom qualification scripts for your business',
  'CRM integration and automatic data entry',
  'Appointment booking directly into calendars',
  'SMS/email follow-up sequences',
  'Real-time lead scoring and routing',
  'Call recording and transcription',
  'Performance analytics dashboard'
]

export default function AIVoiceBotPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Bot className="h-5 w-5 text-secondary" />
              <span className="text-secondary font-semibold">AI Voice Bot Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Never Miss a Lead Again: 
              <span className="text-secondary block mt-2">AI Voice Bot Calls & Qualifies Prospects 24/7</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Automate your lead outreach, qualify prospects instantly, save your sales team hours, 
              and book more appointments with our intelligent Voice AI Bot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#calendar" 
                className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
              >
                Book Your FREE Strategy Call Now
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
              Supercharge Your Sales Pipeline!
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Is Manual Lead Calling Slowing Your Growth?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg md:text-xl mt-14 max-w-3xl mx-auto text-gray-700">
            RJ Business Solutions builds and deploys custom Voice AI Bots that intelligently handle initial lead outreach, 
            ask crucial qualifying questions, and seamlessly hand off hot prospects (or even book appointments!), 
            freeing your sales team to focus on revenue generation.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Transform Your Sales Process with Voice AI
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

      {/* About Rick Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Meet Your Voice AI Automation Expert
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <Image
                src="/rick-jefferson.jpg"
                alt="Rick Jefferson - RJ Business Solutions"
                width={300}
                height={300}
                className="rounded-full shadow-2xl border-4 border-secondary"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Rick Jefferson</h3>
              <p className="text-lg mb-4 text-gray-700">Founder of RJ Business Solutions</p>
              <p className="text-gray-600 mb-4">
                Rick Jefferson specializes in applying cutting-edge Voice AI technology to solve real-world business challenges, 
                particularly in sales and lead generation. He designs intelligent voice automation systems that enhance efficiency 
                and drive results.
              </p>
              <p className="text-gray-600">
                His focus is on creating custom Voice AI Bots that act as tireless, effective extensions of your sales team, 
                handling initial outreach and qualification with speed and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What You'll Discover in Your Free Strategy Call
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              'How Voice AI can automate your current lead calling process and improve response times',
              'Strategies for designing effective call scripts and qualification criteria for the AI Bot',
              'How the Voice AI Bot can integrate with your CRM and schedule appointments directly',
              'RJ Business Solutions\' proven methodology for building and deploying high-performing Voice AI sales solutions'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-lg shadow">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link 
              href="#calendar" 
              className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
            >
              Yes! Book My Free Voice AI Bot Strategy Call!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="calendar" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Ready to Automate Lead Outreach? Book Your Call!
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
            Schedule your complimentary strategy session with Rick Jefferson. Discover how a custom Voice AI Bot 
            can revolutionize your lead qualification process and boost sales efficiency.
          </p>
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
              style={{ width: '100%', minHeight: '750px', border: 'none' }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Booking Calendar for RJ Business Solutions - Voice AI Bot Strategy"
            />
            <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript" async></script>
          </div>
          <p className="text-center text-sm mt-6 text-gray-500">
            Your information is kept confidential.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Buying Shared Leads - Start Closing More Deals!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let AI handle the calling while you focus on closing
          </p>
          <Link 
            href="#calendar" 
            className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center transition-all duration-200 shadow-xl"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}