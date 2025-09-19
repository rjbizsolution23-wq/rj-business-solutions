'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bot, Brain, Workflow, BarChart3, Shield, Users, Zap, Globe, Rocket, Code, Cloud, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Deploy intelligent chatbots that handle customer inquiries 24/7, reducing response time by 90%.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.1,
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows, saving your team 20+ hours per week.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0.2,
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Leverage predictive analytics to make data-driven decisions and forecast trends.',
    color: 'from-green-500 to-emerald-500',
    delay: 0.3,
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with custom dashboards and reports.',
    color: 'from-orange-500 to-red-500',
    delay: 0.4,
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Protect your business with AI-powered threat detection and fraud prevention.',
    color: 'from-indigo-500 to-purple-500',
    delay: 0.5,
  },
  {
    icon: Users,
    title: 'Customer Analytics',
    description: 'Understand customer behavior and preferences to improve retention and sales.',
    color: 'from-pink-500 to-rose-500',
    delay: 0.6,
  },
];

const additionalServices = [
  { icon: Zap, name: 'Real-time Processing' },
  { icon: Globe, name: 'Global Scalability' },
  { icon: Rocket, name: 'Rapid Deployment' },
  { icon: Code, name: 'Custom Solutions' },
  { icon: Cloud, name: 'Cloud Native' },
  { icon: Sparkles, name: 'AI Innovation' },
];

export default function AnimatedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 tech-grid"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Solutions</span>
            <br />
            <span className="text-gray-900">for Every Business Need</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Albuquerque to nationwide coverage in 400+ cities, we're revolutionizing businesses
            with cutting-edge AI automation solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: service.delay, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Learn More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={hoveredIndex === index ? { opacity: 1, x: 0 } : {}}
                    className="flex items-center text-purple-600 font-semibold"
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Services Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 rounded-3xl p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Plus Many More Advanced Capabilities
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:8775618001"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <span>Start Your AI Journey Today</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}