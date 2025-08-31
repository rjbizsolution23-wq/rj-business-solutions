import { Bot, Brain, Workflow, BarChart3, Shield, Users } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Deploy intelligent chatbots that handle customer inquiries 24/7, reducing response time by 90%.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows, saving your team 20+ hours per week.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Leverage predictive analytics to make data-driven decisions and forecast trends.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with custom dashboards and reports.',
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Protect your business with AI-powered threat detection and fraud prevention.',
  },
  {
    icon: Users,
    title: 'Customer Analytics',
    description: 'Understand customer behavior and preferences to improve retention and sales.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Solutions for Every Business Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Albuquerque to Las Cruces, we're helping New Mexico businesses thrive with tailored AI automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="card hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-4">
                  <Icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}