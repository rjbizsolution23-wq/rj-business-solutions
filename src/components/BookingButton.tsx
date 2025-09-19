'use client';

import { motion } from 'framer-motion';

interface BookingButtonProps {
  city?: string;
  state?: string;
}

export default function BookingButton({ city, state }: BookingButtonProps) {
  const calendarUrl = "https://app.rjbusinesssolutions.org/widget/booking/xwqTKzHNtV9woLqtrqo6";

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6"
          >
            Ready to Transform Your Business?
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Schedule Your Free</span>
            <br />
            <span className="text-gray-900">AI Consultation Today</span>
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover how AI automation can reduce costs by 40%, handle 10x more customers,
            and transform your operations
            {city && state && ` in ${city}, ${state}`}.
          </p>

          {/* Main Booking Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-8"
          >
            <a
              href={calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <span className="text-2xl">📅</span>
                <span>Book Your Free Consultation Now</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-2xl"
                >
                  →
                </motion.span>
              </motion.span>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500">✓</span>
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500">✓</span>
              <span>30-Minute Strategy Session</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-green-500">✓</span>
              <span>Custom AI Roadmap</span>
            </div>
          </motion.div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-10"
          >
            <h3 className="text-2xl font-bold mb-6">What You'll Get in Your Free Consultation:</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-3">
                <div className="text-2xl">🔍</div>
                <div>
                  <h4 className="font-semibold mb-1">Business Analysis</h4>
                  <p className="text-gray-600">We'll identify your biggest automation opportunities</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1">Custom AI Strategy</h4>
                  <p className="text-gray-600">Personalized roadmap for your industry</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold mb-1">ROI Projection</h4>
                  <p className="text-gray-600">See potential cost savings and efficiency gains</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <h4 className="font-semibold mb-1">Implementation Plan</h4>
                  <p className="text-gray-600">Clear next steps to start your AI journey</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <p className="text-gray-600 mb-4">Prefer to talk now?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all hover:shadow-lg"
              >
                <span>📞</span>
                <span>Call (877) 561-8001</span>
              </a>
              <a
                href="mailto:rick@rjbusinesssolutions.org"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl transition-all hover:shadow-lg"
              >
                <span>✉️</span>
                <span>Email Rick</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}