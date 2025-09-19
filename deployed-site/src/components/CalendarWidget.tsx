'use client';

import { useEffect } from 'react';

export default function CalendarWidget() {
  useEffect(() => {
    // Load GHL calendar script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
          See Your Custom Chatbot in Action
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-600">
          Book a free demo to see how an AI chatbot can transform your customer experience and boost your bottom line.
        </p>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/xwqTKzHNtV9woLqtrqo6"
            style={{ width: '100%', minHeight: '750px', border: 'none' }}
            scrolling="no"
            id="msgsndr-calendar"
            title="Book Your Consultation - RJ Business Solutions"
          />
        </div>
        <p className="text-center text-sm mt-6 text-gray-500">
          Free demo • See results in real-time • No obligation
        </p>
      </div>
    </section>
  );
}