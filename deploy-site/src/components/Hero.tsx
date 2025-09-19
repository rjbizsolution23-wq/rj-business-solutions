import Link from 'next/link'
import { ArrowRight, Bot, Zap, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with 
              <span className="text-primary-600"> AI Automation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Hyper-Scalable Code. Autonomous Architectures. AI-Native Deployments.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Led by Rick Jefferson, AI Systems Architect & Full-Stack Engineer, we deliver production-grade intelligent ecosystems that execute, evolve, and scale across your New Mexico business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:8775618001" className="btn-secondary inline-flex items-center justify-center">
                Call (877) 561-8001
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-primary-600 mr-2" />
                Fast Implementation
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-primary-600 mr-2" />
                ROI Guaranteed
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl opacity-20 blur-3xl"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <Bot className="h-24 w-24 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">AI-Powered Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Custom AI Chatbots & Virtual Assistants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Automated Workflow & Process Optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Intelligent Document Processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Predictive Analytics & Insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}