import { CheckCircle } from 'lucide-react'

const features = [
  {
    title: 'Local Expertise',
    description: 'Deep understanding of New Mexico business landscape and regulations',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored AI implementations that fit your specific industry needs',
  },
  {
    title: 'Rapid Deployment',
    description: 'Get up and running in days, not months, with our streamlined process',
  },
  {
    title: 'Ongoing Support',
    description: '24/7 support and continuous optimization of your AI systems',
  },
  {
    title: 'ROI Focused',
    description: 'Average 300% ROI within the first year of implementation',
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security and compliance with industry standards',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why New Mexico Businesses Choose RJ Business Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience serving businesses across Albuquerque, Santa Fe, Las Cruces, and beyond, 
              we understand the unique challenges and opportunities in the Land of Enchantment.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success by the Numbers</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Customer Satisfaction</span>
                  <span className="font-bold">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Process Efficiency Gain</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-secondary-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="font-bold">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">50M+</div>
                  <div className="text-sm text-gray-600">Tasks Automated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-600">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}