'use client';

import { useEffect } from 'react';

export default function GoHighLevelCalendarWidget() {
  useEffect(() => {
    // Create and append the GoHighLevel calendar script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://link.msgsndr.com/widget/booking/qQnxRHDtyx0uydPd5sRl';
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXX');
    `;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Primary Calendar Embed Method */}
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/qQnxRHDtyx0uydPd5sRl"
        style={{
          width: '100%',
          minHeight: '650px',
          height: '100%',
          border: 'none',
          borderRadius: '12px'
        }}
        scrolling="no"
        id="msgsndr-calendar"
        title="Book Your Free AI Consultation"
        loading="lazy"
      />

      {/* Alternative Calendar Embed - Inline Widget */}
      <div
        className="msgsndr-calendar-inline-embed"
        data-url="https://api.leadconnectorhq.com/widget/booking/qQnxRHDtyx0uydPd5sRl"
        style={{ minHeight: '650px', width: '100%' }}
      />
    </div>
  );
}