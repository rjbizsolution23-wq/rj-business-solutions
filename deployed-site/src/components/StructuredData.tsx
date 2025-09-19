export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rjbusinesssolutions.org/#organization",
  "name": "RJ Business Solutions",
  "alternateName": "Rick Jefferson Business Solutions",
  "url": "https://rjbusinesssolutions.org",
  "logo": "https://rjbusinesssolutions.org/logo.png",
  "image": "https://rjbusinesssolutions.org/rick-jefferson.jpg",
  "telephone": "+18775618001",
  "email": "info@rjbusinesssolutions.org",
  "description": "Leading AI automation, digital transformation, and business growth solutions provider in New Mexico. Expert in AI chatbots, voice bots, SEO, and business consulting.",
  "founder": {
    "@type": "Person",
    "name": "Rick Jefferson",
    "jobTitle": "Founder & CEO",
    "image": "https://rjbusinesssolutions.org/rick-jefferson.jpg"
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "New Mexico",
      "@id": "https://en.wikipedia.org/wiki/New_Mexico"
    },
    {
      "@type": "City",
      "name": "Albuquerque",
      "containedInPlace": "New Mexico"
    },
    {
      "@type": "City",
      "name": "Santa Fe",
      "containedInPlace": "New Mexico"
    },
    {
      "@type": "City",
      "name": "Las Cruces",
      "containedInPlace": "New Mexico"
    },
    {
      "@type": "City",
      "name": "Rio Rancho",
      "containedInPlace": "New Mexico"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NM",
    "addressCountry": "US",
    "addressLocality": "Albuquerque"
  },
  "sameAs": [
    "https://www.linkedin.com/company/rj-business-solutions",
    "https://www.facebook.com/rjbusinesssolutions",
    "https://twitter.com/rjbizsolutions"
  ],
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Business Automation",
    "Digital Transformation",
    "SEO",
    "Social Media Marketing",
    "Sales Funnels",
    "Lead Generation",
    "Business Consulting"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Business Solutions Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Voice Bot",
          "description": "24/7 automated lead calling and qualification"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom AI Chatbots",
          "description": "Intelligent chatbots for customer service and lead generation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search engine optimization to rank #1 on Google"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management",
          "description": "Professional social media marketing and management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Website Development",
          "description": "High-converting websites and sales funnels"
        }
      }
    ]
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://rjbusinesssolutions.org/#localbusiness",
  "name": "RJ Business Solutions",
  "image": "https://rjbusinesssolutions.org/logo.png",
  "priceRange": "$$",
  "telephone": "+18775618001",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NM",
    "addressCountry": "US",
    "addressLocality": "Albuquerque"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.0844,
    "longitude": -106.6504
  },
  "url": "https://rjbusinesssolutions.org",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
}

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const serviceSchema = (service: {
  name: string,
  description: string,
  provider?: string,
  areaServed?: string[],
  hasOfferCatalog?: any
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": service.provider || "RJ Business Solutions",
    "url": "https://rjbusinesssolutions.org"
  },
  "areaServed": service.areaServed || [
    "Albuquerque, NM",
    "Santa Fe, NM",
    "Las Cruces, NM",
    "Rio Rancho, NM",
    "New Mexico"
  ],
  "hasOfferCatalog": service.hasOfferCatalog
})

export const faqSchema = (questions: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer
    }
  }))
})

export default function StructuredData({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}