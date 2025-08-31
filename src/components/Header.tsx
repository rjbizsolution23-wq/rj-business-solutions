'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="RJ Business Solutions Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-primary-600">RJ Business Solutions</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600">Home</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/services/ai-chatbots" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-t-lg">
                  AI Chatbots
                </Link>
                <Link href="/services/process-automation" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Process Automation
                </Link>
                <Link href="/services/machine-learning" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Machine Learning
                </Link>
                <Link href="/services/business-intelligence" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Business Intelligence
                </Link>
                <Link href="/services/cloud-engineering" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-b-lg">
                  Cloud Engineering
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 flex items-center">
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/landing/ai-voice-bot" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-t-lg">
                  AI Voice Bot
                </Link>
                <Link href="/landing/custom-chatbots" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Custom Chatbots
                </Link>
                <Link href="/landing/seo-services" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  SEO Services
                </Link>
                <Link href="/landing/social-media-management" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Social Media Management
                </Link>
                <Link href="/landing/website-funnels" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Websites & Funnels
                </Link>
                <Link href="/landing/insurance-leads" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Insurance Leads
                </Link>
                <Link href="/landing/credit-repair" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Credit Repair Business
                </Link>
                <Link href="/landing/business-growth" className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-b-lg">
                  Business Growth
                </Link>
              </div>
            </div>
            <Link href="#about" className="text-gray-700 hover:text-primary-600">About</Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary-600">Contact</Link>
            <a href="tel:8775618001" className="flex items-center text-primary-600 font-semibold">
              <Phone className="w-4 h-4 mr-2" />
              (877) 561-8001
            </a>
            <Link href="#contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Home</Link>
              <div className="block px-3 py-2 text-gray-700 font-semibold">Services</div>
              <Link href="/services/ai-chatbots" className="block px-6 py-2 text-gray-600 hover:text-primary-600">AI Chatbots</Link>
              <Link href="/services/process-automation" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Process Automation</Link>
              <Link href="/services/machine-learning" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Machine Learning</Link>
              <Link href="/services/business-intelligence" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Business Intelligence</Link>
              <Link href="/services/cloud-engineering" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Cloud Engineering</Link>
              <div className="block px-3 py-2 text-gray-700 font-semibold">Solutions</div>
              <Link href="/landing/ai-voice-bot" className="block px-6 py-2 text-gray-600 hover:text-primary-600">AI Voice Bot</Link>
              <Link href="/landing/custom-chatbots" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Custom Chatbots</Link>
              <Link href="/landing/seo-services" className="block px-6 py-2 text-gray-600 hover:text-primary-600">SEO Services</Link>
              <Link href="/landing/social-media-management" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Social Media</Link>
              <Link href="/landing/website-funnels" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Websites & Funnels</Link>
              <Link href="/landing/insurance-leads" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Insurance Leads</Link>
              <Link href="/landing/credit-repair" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Credit Repair</Link>
              <Link href="/landing/business-growth" className="block px-6 py-2 text-gray-600 hover:text-primary-600">Business Growth</Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-primary-600">About</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">Contact</Link>
              <a href="tel:8775618001" className="block px-3 py-2 text-primary-600 font-semibold">
                <Phone className="w-4 h-4 inline mr-2" />
                (877) 561-8001
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}