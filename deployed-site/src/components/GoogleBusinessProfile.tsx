'use client'

import { Star, Clock, Phone, MapPin, Globe, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface GoogleBusinessProfileProps {
  placeId?: string
  businessName?: string
  cid?: string // Customer ID from GMB
}

export default function GoogleBusinessProfile({ 
  placeId = process.env.NEXT_PUBLIC_GMB_PLACE_ID || 'ChIJLbd25Ze9GIcRmh0-R67hiAA', 
  businessName = 'RJ Business Solutions',
  cid = process.env.NEXT_PUBLIC_GMB_CID || '12289372519890860680'
}: GoogleBusinessProfileProps) {
  
  // Generate Google Reviews link
  const reviewsLink = `https://search.google.com/local/reviews?placeid=${placeId}`
  const writeReviewLink = `https://search.google.com/local/writereview?placeid=${placeId}`
  const mapsLink = `https://maps.google.com/?cid=${cid}`
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Google Business Profile Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{businessName}</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white/90">5.0 (127 reviews)</span>
                  </div>
                </div>
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png" 
                  alt="Google" 
                  className="h-8"
                />
              </div>
            </div>

            {/* Business Info */}
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-sm text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Contact</p>
                    <a href="tel:8775618001" className="text-sm text-primary-600 hover:underline">
                      (877) 561-8001
                    </a>
                    <p className="text-sm text-gray-600">24/7 Support Available</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Service Area</p>
                    <p className="text-sm text-gray-600">Nationwide Service</p>
                    <p className="text-sm text-gray-600">On-site consultations available</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Website</p>
                    <a href="https://rjbusinesssolutions.org" className="text-sm text-primary-600 hover:underline">
                      rjbusinesssolutions.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900 mb-2">Services Offered</p>
                <div className="flex flex-wrap gap-2">
                  {['AI Automation', 'Custom Chatbots', 'Process Automation', 'Business Intelligence', 'Cloud Solutions'].map((service) => (
                    <span key={service} className="inline-flex items-center gap-1 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                      <CheckCircle className="h-3 w-3" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href={writeReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
                >
                  Write a Review
                </a>
                <a 
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
                >
                  View on Google Maps
                </a>
                <a 
                  href={reviewsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
                >
                  Read All Reviews
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">Verified Business Profile</p>
            <div className="flex justify-center items-center gap-8">
              <img src="/google-verified.png" alt="Google Verified" className="h-12" />
              <img src="/google-guaranteed.png" alt="Google Guaranteed" className="h-12" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Google Verified Business</p>
                <p className="text-sm text-gray-600">Trusted by 500+ clients nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}