export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RJ Business Solutions',
    url: 'https://rjbusinesssolutions.org',
    logo: 'https://rjbizsolution.com/logo.png',
    telephone: '+18775618001',
    email: 'rick@rjbusinesssolutions.org',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Albuquerque',
      addressRegion: 'NM',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.facebook.com/rjbizsolutions',
      'https://www.linkedin.com/company/rj-business-solutions',
      'https://twitter.com/rjbizsolutions',
    ],
    areaServed: [
      {
        '@type': 'State',
        name: 'New Mexico',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 35.0844,
        longitude: -106.6504,
      },
      geoRadius: '300',
    },
  },
  
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RJ Business Solutions',
    image: 'https://rjbusinesssolutions.org/office.jpg',
    '@id': 'https://rjbusinesssolutions.org',
    url: 'https://rjbusinesssolutions.org',
    telephone: '+18775618001',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Serving All Areas',
      addressLocality: 'Albuquerque',
      addressRegion: 'NM',
      postalCode: '87101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.0844,
      longitude: -106.6504,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
  },

  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Automation Services',
    provider: {
      '@type': 'Organization',
      name: 'RJ Business Solutions',
    },
    areaServed: {
      '@type': 'State',
      name: 'New Mexico',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Chatbot Development',
            description: 'Custom AI chatbots for customer service automation',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Automation',
            description: 'Workflow automation using AI and machine learning',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Intelligence',
            description: 'AI-powered analytics and reporting solutions',
          },
        },
      ],
    },
  },
}