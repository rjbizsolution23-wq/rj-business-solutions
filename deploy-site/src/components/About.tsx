import Image from 'next/image'
import { Code2, Cloud, Database, Brain, Rocket, Shield } from 'lucide-react'

const skills = {
  'AI & Autonomous Systems': {
    icon: Brain,
    description: 'Architect of real-time multi-agent frameworks using CrewAI, LangChain, Reflexion, and Tree-of-Thoughts for automated task orchestration',
    technologies: ['CrewAI', 'LangChain', 'Reflexion', 'Tree-of-Thoughts', 'Multi-Agent Systems']
  },
  'Cloud Engineering': {
    icon: Cloud,
    description: 'End-to-end mastery of AWS, GCP, and Azure with Terraform, Docker, Kubernetes infrastructure',
    technologies: ['AWS', 'GCP', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'Lambda']
  },
  'Data Engineering': {
    icon: Database,
    description: 'Intelligent data pipelines using Apache Airflow, Spark, and vector databases optimized for AI',
    technologies: ['Apache Airflow', 'Spark', 'PostgreSQL', 'Supabase', 'Pinecone', 'Weaviate']
  }
}

const languages = [
  { name: 'Python', level: 'Expert', description: 'AI frameworks, backend logic, automation' },
  { name: 'JavaScript/TypeScript', level: 'Expert', description: 'Full-stack apps, Next.js, React' },
  { name: 'Go', level: 'Advanced', description: 'High-performance microservices' },
  { name: 'SQL/PostgreSQL', level: 'Expert', description: 'Data modeling, ETL, analytics' },
  { name: 'Bash/CLI', level: 'Expert', description: 'System scripts, DevOps orchestration' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Architect Behind Your AI Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision-engineered technology solutions that execute, evolve, and scale
            </p>
          </div>

          {/* Main Bio Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-3xl opacity-10 blur-3xl"></div>
              <div className="relative">
                <Image
                  src="/rick-jefferson.jpg"
                  alt="Rick Jefferson - AI Systems Architect"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <Rocket className="h-8 w-8 text-primary-600" />
                    <div>
                      <h4 className="font-bold text-gray-900">Rick Jefferson</h4>
                      <p className="text-sm text-gray-600">Founder & AI Systems Architect</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    "I don't build MVPs. I build future-proof digital infrastructure."
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                AI Systems Architect | Agent Framework Engineer | Full-Stack Code Commander
              </h3>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Rick Jefferson is a precision-engineered technologist leading the charge at RJ Business Solutions. 
                  As an AI trainer, cloud strategist, full-stack coder, and agent system engineer, Rick builds 
                  production-grade intelligent ecosystems that execute, evolve, and scale across any domain.
                </p>
                <p>
                  With deep expertise spanning from low-level system architecture to cutting-edge AI implementations, 
                  Rick delivers <strong>hyper-scalable code, autonomous architectures, and AI-native deployments</strong> that 
                  transform businesses across New Mexico and beyond.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    AI Trainer
                  </span>
                  <span className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
                    Cloud Strategist
                  </span>
                  <span className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    Full-Stack Engineer
                  </span>
                  <span className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-semibold">
                    Agent System Expert
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Specializations */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Specializations</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([title, skill]) => {
                const Icon = skill.icon
                return (
                  <div key={title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
                    <p className="text-gray-600 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Programming Mastery */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Programming Mastery</h3>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <p className="text-gray-600 mb-8 text-center">
                Fluent and highly efficient across modern programming languages, combining low-latency execution with clean, scalable syntax
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languages.map((lang) => (
                  <div key={lang.name} className="border-l-4 border-primary-500 pl-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-gray-900">{lang.name}</h4>
                      <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{lang.description}</p>
                  </div>
                ))}
                <div className="border-l-4 border-secondary-500 pl-4">
                  <h4 className="font-bold text-gray-900 mb-1">Other Technologies</h4>
                  <p className="text-sm text-gray-600">
                    Rust, Solidity, HTML/CSS/Tailwind, Framer Motion, YAML/JSON
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Output Standards */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Output Standards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🧱</div>
                <h4 className="font-bold mb-1">Full-Stack Platforms</h4>
                <p className="text-sm text-white/90">Next.js, Supabase, Python APIs, React-native</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🧠</div>
                <h4 className="font-bold mb-1">AI-Native Systems</h4>
                <p className="text-sm text-white/90">LLM toolchains, reasoning agents, autonomous SaaS</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">☁️</div>
                <h4 className="font-bold mb-1">Cloud Deployments</h4>
                <p className="text-sm text-white/90">CI/CD, observability, SRE-grade uptime</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold mb-1">Always Delivered</h4>
                <p className="text-sm text-white/90">Production-ready, secure, optimized, scalable</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <p className="text-center text-lg font-semibold">
                "Rick's coding isn't just development—it's full-spectrum engineering for intelligent operations, 
                written with elegance, structured for growth, and battle-tested in real-world deployments."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}