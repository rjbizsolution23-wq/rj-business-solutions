import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { Cloud, Server, Shield, Zap, Globe, Lock, CheckCircle, ArrowRight, Cpu, Container } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud Engineering & Infrastructure | RJ Business Solutions - New Mexico',
  description: 'Enterprise cloud solutions with AWS, GCP, and Azure. Serverless architectures, Kubernetes deployments, and DevOps automation by Rick Jefferson for New Mexico businesses.',
  keywords: 'cloud engineering, AWS, Google Cloud, Azure, cloud migration, DevOps, Kubernetes, Docker, serverless, infrastructure as code, New Mexico, Albuquerque, Santa Fe, Rick Jefferson, Terraform',
  openGraph: {
    title: 'Cloud Engineering Services - RJ Business Solutions',
    description: 'Build scalable, secure cloud infrastructure with expert engineering by Rick Jefferson. AWS, GCP, Azure certified.',
    url: 'https://rjbusinesssolutions.org/services/cloud-engineering',
    type: 'website',
    images: [{
      url: 'https://rjbusinesssolutions.org/cloud-engineering-og.jpg',
      width: 1200,
      height: 630,
      alt: 'Cloud Engineering Services by RJ Business Solutions'
    }]
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/services/cloud-engineering'
  }
}

const cloudServices = [
  {
    icon: Server,
    title: 'Infrastructure Design',
    description: 'Architect scalable, resilient cloud infrastructure that grows with your business'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with SOC2, HIPAA, and PCI compliance'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Reduce latency and costs with intelligent resource optimization'
  },
  {
    icon: Globe,
    title: 'Global Deployment',
    description: 'Deploy worldwide with multi-region architectures and CDN integration'
  }
]

const cloudSolutions = [
  {
    category: 'Migration & Modernization',
    services: [
      'Lift-and-shift cloud migration',
      'Application containerization with Docker/Kubernetes',
      'Microservices architecture transformation',
      'Database migration and optimization',
      'Legacy system modernization'
    ]
  },
  {
    category: 'DevOps & Automation',
    services: [
      'CI/CD pipeline implementation',
      'Infrastructure as Code (Terraform/CloudFormation)',
      'GitOps workflows',
      'Automated testing and deployment',
      'Monitoring and observability (Datadog/New Relic)'
    ]
  },
  {
    category: 'Serverless Architecture',
    services: [
      'AWS Lambda/Google Cloud Functions',
      'API Gateway implementation',
      'Event-driven architectures',
      'Serverless databases (DynamoDB/Firestore)',
      'Cost optimization strategies'
    ]
  },
  {
    category: 'Container Orchestration',
    services: [
      'Kubernetes cluster management',
      'Docker containerization',
      'Service mesh implementation',
      'Auto-scaling and load balancing',
      'Container security and scanning'
    ]
  }
]

const platforms = [
  { name: 'AWS', services: ['EC2', 'Lambda', 'S3', 'RDS', 'EKS', 'CloudFormation'] },
  { name: 'Google Cloud', services: ['Compute Engine', 'Cloud Functions', 'BigQuery', 'GKE', 'Cloud Run'] },
  { name: 'Azure', services: ['Virtual Machines', 'Functions', 'Cosmos DB', 'AKS', 'DevOps'] }
]

const metrics = [
  { value: '99.99%', label: 'Uptime SLA', description: 'Guaranteed availability' },
  { value: '65%', label: 'Cost Reduction', description: 'Average cloud spend savings' },
  { value: '10x', label: 'Faster Deployment', description: 'Compared to traditional infrastructure' },
  { value: '24/7', label: 'Monitoring', description: 'Real-time system observability' }
]

export default function CloudEngineeringPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="h-6 w-6 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Cloud Engineering</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Cloud Infrastructure
                <span className="text-cyan-400"> That Scales</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Build bulletproof cloud architecture with AWS, GCP, and Azure. From serverless to Kubernetes, we engineer infrastructure that's secure, scalable, and cost-optimized.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Rick Jefferson's expertise in Terraform, Docker, and cloud-native technologies ensures your New Mexico business runs on world-class infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors">
                  Start Cloud Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="#architecture" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors">
                  View Architecture
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">SOC2 Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Cpu className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">Auto-Scaling</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Container className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm">Containerized</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-3xl opacity-20 blur-3xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700 p-6">
                <div className="font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400">terraform apply</span>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="text-green-400"># Deploying cloud infrastructure...</div>
                    <div>
                      <span className="text-cyan-400">module</span>.<span className="text-yellow-400">vpc</span>: Creating...
                    </div>
                    <div>
                      <span className="text-cyan-400">module</span>.<span className="text-yellow-400">eks_cluster</span>: Creating...
                    </div>
                    <div>
                      <span className="text-cyan-400">module</span>.<span className="text-yellow-400">rds_database</span>: Creating...
                    </div>
                    <div>
                      <span className="text-cyan-400">module</span>.<span className="text-yellow-400">load_balancer</span>: Creating...
                    </div>
                    <div className="text-green-400">✓ Infrastructure deployed successfully</div>
                    <div className="mt-4 p-3 bg-slate-900/50 rounded">
                      <div className="text-xs text-gray-400 mb-2">Resources Created:</div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div><span className="text-cyan-400">VPC:</span> 3 AZs</div>
                        <div><span className="text-cyan-400">EKS:</span> 5 nodes</div>
                        <div><span className="text-cyan-400">RDS:</span> Multi-AZ</div>
                        <div><span className="text-cyan-400">S3:</span> 3 buckets</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Cloud Engineering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From migration to optimization, we handle every aspect of your cloud journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="architecture" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Solutions Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rick Jefferson engineers cloud solutions using industry best practices and cutting-edge technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Server className="h-5 w-5 text-cyan-600 mr-2" />
                  {solution.category}
                </h3>
                <ul className="space-y-2">
                  {solution.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multi-Cloud Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified expertise across all major cloud platforms
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {platform.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white rounded-lg px-3 py-2 text-sm font-medium text-gray-700 text-center">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cloud Cost Optimization
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Most businesses overspend on cloud by 35-65%. Rick Jefferson's expertise in cloud economics 
                and resource optimization ensures you only pay for what you need while maintaining peak performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Analysis</h4>
                    <p className="text-sm text-gray-600">Comprehensive audit of current cloud spending</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Right-Sizing</h4>
                    <p className="text-sm text-gray-600">Optimize instance types and resource allocation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automation</h4>
                    <p className="text-sm text-gray-600">Implement auto-scaling and scheduled resources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitoring</h4>
                    <p className="text-sm text-gray-600">Continuous cost tracking and optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Savings Example</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Previous Monthly Cost</span>
                    <span className="text-lg font-bold text-red-600">$48,750</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Optimized Cost</span>
                    <span className="text-lg font-bold text-green-600">$17,063</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-medium text-gray-900">Monthly Savings</span>
                    <span className="text-xl font-bold text-cyan-600">$31,687</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Optimization Breakdown</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reserved Instances</span>
                      <span className="font-medium text-gray-900">-42%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Right-Sizing</span>
                      <span className="font-medium text-gray-900">-28%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spot Instances</span>
                      <span className="font-medium text-gray-900">-18%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Storage Optimization</span>
                      <span className="font-medium text-gray-900">-12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security & Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your data protected with military-grade encryption and compliance frameworks
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Lock className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Security Standards</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">End-to-end encryption</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">Zero-trust architecture</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">WAF & DDoS protection</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">Automated security scanning</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Shield className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Compliance</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">SOC 2 Type II</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">HIPAA compliant</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">PCI DSS ready</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">GDPR compliant</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <Globe className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Monitoring</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">24/7 threat detection</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">Real-time alerting</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">Incident response team</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-sm">Automated remediation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Cloud-Scale Success?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let Rick Jefferson build your bulletproof cloud infrastructure with AWS, GCP, or Azure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact" 
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Start Cloud Migration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:8775618001" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Call (877) 561-8001
              </a>
            </div>
            <p className="text-white/80 mt-6 text-sm">
              Free cloud assessment • Architecture review • Cost optimization audit
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  )
}