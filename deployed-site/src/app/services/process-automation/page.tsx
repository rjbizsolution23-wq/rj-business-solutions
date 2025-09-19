import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalendarWidget from '@/components/CalendarWidget'
import Link from 'next/link'
import { Workflow, Clock, DollarSign, Target, Zap, Settings, CheckCircle, ArrowRight, BarChart3, GitBranch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Process Automation Services | RJ Business Solutions - New Mexico',
  description: 'Automate repetitive tasks and workflows with AI-powered process automation. Save 20+ hours per week. Expert automation engineering by Rick Jefferson for New Mexico businesses.',
  keywords: 'process automation, workflow automation, RPA, robotic process automation, business automation, New Mexico, Albuquerque, Santa Fe, task automation, digital transformation, Rick Jefferson, Apache Airflow, Zapier, Make',
  openGraph: {
    title: 'Process Automation Services - RJ Business Solutions',
    description: 'Automate repetitive tasks and workflows, saving your team 20+ hours per week. Expert automation by Rick Jefferson.',
    url: 'https://rjbusinesssolutions.org/services/process-automation',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/process-automation-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Process Automation Services by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/services/process-automation'
  }
}

const benefits = [
  {
    icon: Clock,
    title: 'Save 20+ Hours Weekly',
    description: 'Eliminate manual, repetitive tasks and free your team for strategic work'
  },
  {
    icon: DollarSign,
    title: '60% Cost Reduction',
    description: 'Reduce operational costs through intelligent automation'
  },
  {
    icon: Target,
    title: '99.9% Accuracy',
    description: 'Eliminate human error with precise, consistent automation'
  },
  {
    icon: Zap,
    title: '10x Faster Processing',
    description: 'Complete tasks in seconds that used to take hours'
  }
]

const automationAreas = [
  {
    category: 'Data Processing',
    tasks: [
      'Data entry and migration between systems',
      'Report generation and distribution',
      'Invoice processing and reconciliation',
      'Database synchronization',
      'Excel automation and transformation'
    ]
  },
  {
    category: 'Communication',
    tasks: [
      'Email automation and smart responses',
      'Meeting scheduling and calendar management',
      'Customer notification systems',
      'Internal team updates and alerts',
      'Document routing and approvals'
    ]
  },
  {
    category: 'Sales & Marketing',
    tasks: [
      'Lead scoring and qualification',
      'CRM data enrichment',
      'Social media posting and monitoring',
      'Email campaign automation',
      'Proposal and quote generation'
    ]
  },
  {
    category: 'Operations',
    tasks: [
      'Inventory management and reordering',
      'Employee onboarding workflows',
      'Compliance monitoring and reporting',
      'Backup and disaster recovery',
      'System health monitoring'
    ]
  }
]

const technologies = [
  { name: 'Apache Airflow', description: 'Enterprise workflow orchestration' },
  { name: 'Python Automation', description: 'Custom script development' },
  { name: 'Zapier/Make', description: 'No-code integrations' },
  { name: 'Selenium', description: 'Web automation' },
  { name: 'API Integrations', description: 'System connectivity' },
  { name: 'Cloud Functions', description: 'Serverless automation' }
]

const caseStudies = [
  {
    client: 'Albuquerque Manufacturing Co.',
    challenge: 'Manual inventory tracking across 3 warehouses',
    solution: 'Automated inventory sync with real-time alerts',
    results: ['75% reduction in stockouts', '30 hours/week saved', '$50K annual savings']
  },
  {
    client: 'Santa Fe Healthcare Network',
    challenge: 'Patient appointment reminders and follow-ups',
    solution: 'Automated SMS/email reminder system',
    results: ['40% reduction in no-shows', '95% patient satisfaction', '15 hours/week saved']
  },
  {
    client: 'Las Cruces Real Estate Group',
    challenge: 'Manual lead distribution to agents',
    solution: 'AI-powered lead routing and scoring',
    results: ['3x faster lead response', '45% increase in conversions', '20 hours/week saved']
  }
]

export default function ProcessAutomationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-50 to-primary-50 py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Workflow className="h-6 w-6 text-secondary-600" />
                <span className="text-secondary-600 font-semibold">Process Automation</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Automate Everything.
                <span className="text-secondary-600"> Focus on Growth.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Transform repetitive tasks into intelligent workflows that run 24/7 without human intervention.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Rick Jefferson engineers hyper-efficient automation systems using Apache Airflow, Python, and cloud-native technologies 
                for businesses across New Mexico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center">
                  Automate Your Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="#case-studies" className="btn-secondary inline-flex items-center justify-center">
                  View Case Studies
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Workflows Automated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">20+</div>
                  <div className="text-sm text-gray-600">Hours Saved Weekly</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">60%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Live Automation Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Invoice Processing</span>
                    </div>
                    <span className="text-sm text-green-600">Running</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Data Sync Pipeline</span>
                    </div>
                    <span className="text-sm text-green-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Email Automation</span>
                    </div>
                    <span className="text-sm text-blue-600">Scheduled</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm font-medium">Report Generation</span>
                    </div>
                    <span className="text-sm text-gray-600">Completed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Today's Performance</span>
                    <BarChart3 className="h-4 w-4 text-primary-600" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary-600">1,247</div>
                      <div className="text-xs text-gray-600">Tasks</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary-600">8.3h</div>
                      <div className="text-xs text-gray-600">Saved</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary-600">$420</div>
                      <div className="text-xs text-gray-600">Value</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Power of Intelligent Process Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Albuquerque's tech corridor to Las Cruces' agricultural industry, we're automating New Mexico's future
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-secondary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Can Automate For You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rick Jefferson's expertise spans every aspect of business automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <GitBranch className="h-5 w-5 text-secondary-600 mr-2" />
                  {area.category}
                </h3>
                <ul className="space-y-2">
                  {area.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{task}</span>
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
                Enterprise-Grade Automation Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just connect apps—we engineer intelligent systems that think, learn, and scale. 
                Rick Jefferson's deep expertise in Python, Go, and cloud infrastructure ensures your 
                automation is bulletproof and future-ready.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-start">
                    <Settings className="h-5 w-5 text-secondary-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Automation Process</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Process Discovery</h4>
                    <p className="text-sm text-gray-600">We analyze your workflows to identify automation opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Development</h4>
                    <p className="text-sm text-gray-600">Rick engineers tailored automation solutions using best-in-class tools</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Testing & Deployment</h4>
                    <p className="text-sm text-gray-600">Rigorous testing ensures 99.9% reliability before go-live</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-secondary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitoring & Optimization</h4>
                    <p className="text-sm text-gray-600">Continuous monitoring and AI-driven improvements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              New Mexico Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses across the Land of Enchantment
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Solution:</strong> {study.solution}
                  </p>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Results:</p>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-600 to-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stop Wasting Time on Repetitive Tasks
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let Rick Jefferson build intelligent automation that runs your business while you focus on growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                Start Automating Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:8775618001" 
                className="bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                Call (877) 561-8001
              </a>
            </div>
            <p className="text-white/80 mt-6 text-sm">
              Free automation assessment • ROI guarantee • No setup fees for New Mexico businesses
            </p>
          </div>
        </div>
      </section>

      <CalendarWidget />
      <Footer />
    </main>
  )
}