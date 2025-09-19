'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GoHighLevelCalendarProps {
  title?: string;
  subtitle?: string;
  city?: string;
  state?: string;
}

export default function GoHighLevelCalendar({
  title = "Schedule Your Free AI Consultation",
  subtitle = "Pick a time that works best for you",
  city,
  state
}: GoHighLevelCalendarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Method 1: Direct HTML injection with the iframe
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <iframe
          src="https://app.rjbusinesssolutions.org/widget/booking/xwqTKzHNtV9woLqtrqo6"
          style="width: 100%; border: none; overflow: hidden; min-height: 680px;"
          scrolling="no"
          id="msgsndr-calendar">
        </iframe>
      `;
    }

    // Method 2: Load the embed script
    const script = document.createElement('script');
    script.src = 'https://app.rjbusinesssolutions.org/js/embed.js';
    script.type = 'text/javascript';
    script.async = true;

    // Add script to document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      const existingScript = document.querySelector('script[src="https://app.rjbusinesssolutions.org/js/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
            >
              Book Your Consultation
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {subtitle}
              {city && state && (
                <span className="block mt-2">
                  Serving {city}, {state} and surrounding areas
                </span>
              )}
            </p>
          </div>

          {/* Calendar Container - Using ref for direct HTML injection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-2 md:p-4 border border-gray-100"
          >
            <div
              ref={containerRef}
              className="w-full"
              style={{ minHeight: '680px' }}
            />
          </motion.div>

          {/* Alternative Booking Button */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Can't see the calendar? Book directly:
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://app.rjbusinesssolutions.org/widget/booking/xwqTKzHNtV9woLqtrqo6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <span>📅</span>
              <span>Book Your Free Consultation</span>
            </motion.a>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: '📅',
                title: 'Flexible Scheduling',
                description: 'Choose from available times that work for you'
              },
              {
                icon: '🎥',
                title: 'Virtual or In-Person',
                description: 'Meet via video call or at your location'
              },
              {
                icon: '🚀',
                title: 'Instant Confirmation',
                description: 'Get immediate booking confirmation'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center mt-12 p-8 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Prefer to Talk Now?
            </h3>
            <p className="text-white/80 mb-6">
              Our AI automation experts are standing by
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:8775618001"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-900 font-bold rounded-xl hover:shadow-2xl transition-all"
              >
                <span>📞</span>
                <span>Call (877) 561-8001</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:rick@rjbusinesssolutions.org"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <span>✉️</span>
                <span>Email Rick</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}