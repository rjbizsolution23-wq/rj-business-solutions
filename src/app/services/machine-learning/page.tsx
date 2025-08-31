import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { Brain, TrendingUp, Eye, Target, Cpu, Database, CheckCircle, ArrowRight, LineChart, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Machine Learning Solutions | RJ Business Solutions - New Mexico',
  description: 'Leverage predictive analytics and machine learning to forecast trends, optimize operations, and make data-driven decisions. Expert ML engineering by Rick Jefferson for New Mexico businesses.',
  keywords: 'machine learning, ML, artificial intelligence, predictive analytics, deep learning, neural networks, New Mexico, Albuquerque, Santa Fe, data science, Rick Jefferson, TensorFlow, PyTorch, scikit-learn',
  openGraph: {
    title: 'Machine Learning Solutions - RJ Business Solutions',
    description: 'Transform data into competitive advantage with custom machine learning models. Built by Rick Jefferson.',
    url: 'https://rjbusinesssolutions.org/services/machine-learning',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/machine-learning-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Machine Learning Solutions by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/services/machine-learning'
  }
}

const capabilities = [
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast sales, demand, and market trends with 95% accuracy'
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image recognition, quality control, and visual inspection systems'
  },
  {
    icon: Target,
    title: 'Recommendation Engines',
    description: 'Personalized product and content recommendations'
  },
  {
    icon: Brain,
    title: 'Natural Language Processing',
    description: 'Text analysis, sentiment detection, and document understanding'
  }
]

const mlApplications = [
  {
    industry: 'Retail & E-commerce',
    solutions: [
      'Demand forecasting and inventory optimization',
      'Customer churn prediction',
      'Dynamic pricing models',
      'Fraud detection systems',
      'Product recommendation engines'
    ]
  },
  {
    industry: 'Healthcare',
    solutions: [
      'Disease prediction and diagnosis assistance',
      'Patient risk stratification',
      'Treatment outcome prediction',
      'Medical image analysis',
      'Drug discovery optimization'
    ]
  },
  {
    industry: 'Finance',
    solutions: [
      'Credit risk assessment',
      'Algorithmic trading strategies',
      'Anti-money laundering detection',
      'Customer lifetime value prediction',
      'Portfolio optimization'
    ]
  },
  {
    industry: 'Manufacturing',
    solutions: [
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain optimization',
      'Energy consumption forecasting',
      'Production planning optimization'
    ]
  }
]

const techStack = [
  { category: 'Frameworks', tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'] },
  { category: 'Languages', tools: ['Python', 'R', 'SQL', 'Julia'] },
  { category: 'Cloud ML', tools: ['AWS SageMaker', 'Google Cloud AI', 'Azure ML'] },
  { category: 'Data Tools', tools: ['Pandas', 'NumPy', 'Apache Spark', 'Dask'] }
]

const process = [
  {
    step: '1',
    title: 'Data Assessment',
    description: 'Evaluate your data quality, volume, and ML readiness'
  },
  {
    step: '2',
    title: 'Model Development',
    description: 'Build and train custom ML models tailored to your needs'
  },
  {
    step: '3',
    title: 'Validation & Testing',
    description: 'Rigorous testing to ensure accuracy and reliability'
  },
  {
    step: '4',
    title: 'Deployment',
    description: 'Production deployment with monitoring and optimization'
  }
]

export default function MachineLearningPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-primary-50 to-secondary-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-purple-600" />
                <span className="text-purple-600 font-semibold">Machine Learning Solutions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Turn Data Into
                <span className="text-purple-600"> Predictive Power</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Deploy cutting-edge machine learning models that predict outcomes, optimize operations, and drive intelligent decisions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Rick Jefferson builds production-grade ML systems using TensorFlow, PyTorch, and cloud-native architectures 
                for New Mexico's most innovative businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                  Build Your ML Model
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="#applications" className="btn-secondary inline-flex items-center justify-center">
                  Explore Applications
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 text-purple-600 mr-2" />
                  95% Model Accuracy
                </div>
                <div className="flex items-center">
                  <Cpu className="h-5 w-5 text-purple-600 mr-2" />
                  GPU Accelerated
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-primary-400 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Live ML Model Performance</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Sales Forecast Model</span>
                      <span className="text-sm font-bold text-purple-600">96.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-primary-600 h-2 rounded-full" style={{ width: '96.2%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Churn Prediction</span>
                      <span className="text-sm font-bold text-purple-600">92.7%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-primary-600 h-2 rounded-full" style={{ width: '92.7%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Anomaly Detection</span>
                      <span className="text-sm font-bold text-purple-600">98.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-primary-600 h-2 rounded-full" style={{ width: '98.5%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Model Insights</span>
                    <LineChart className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-purple-600">10M+</div>
                      <div className="text-xs text-gray-600">Predictions</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">0.02s</div>
                      <div className="text-xs text-gray-600">Latency</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">$2.3M</div>
                      <div className="text-xs text-gray-600">Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Machine Learning Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From predictive analytics to computer vision, we deliver ML solutions that transform New Mexico businesses
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific ML Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom machine learning models tailored to your industry's unique challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mlApplications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{app.industry}</h3>
                <ul className="space-y-2">
                  {app.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art ML Technology Stack
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Rick Jefferson leverages the most advanced machine learning frameworks and tools to build 
                models that are accurate, scalable, and production-ready. From TensorFlow to PyTorch, 
                from classical ML to deep learning, we've got you covered.
              </p>
              <div className="space-y-6">
                {techStack.map((stack, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-gray-900 mb-2">{stack.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our ML Development Process</h3>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">Average Project Timeline</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">POC Development</span>
                  <span className="text-sm font-bold text-purple-600">2-4 weeks</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-600">Production Deployment</span>
                  <span className="text-sm font-bold text-purple-600">4-8 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results for New Mexico Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our machine learning models deliver measurable business impact
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">42%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Revenue Increase</div>
              <p className="text-gray-600">Average improvement in sales forecasting accuracy leading to better inventory management</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">67%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Cost Reduction</div>
              <p className="text-gray-600">In operational expenses through predictive maintenance and optimization</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">3.2x</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">ROI in Year One</div>
              <p className="text-gray-600">Average return on investment from ML implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness the Power of Machine Learning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let Rick Jefferson build custom ML models that transform your data into competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Start Your ML Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:8775618001" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Call (877) 561-8001
              </a>
            </div>
            <p className="text-white/80 mt-6 text-sm">
              Free ML readiness assessment • POC in 2 weeks • Pay only for results
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}