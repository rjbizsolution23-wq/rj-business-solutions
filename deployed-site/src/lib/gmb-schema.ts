export function getGMBSchema(config: {
  placeId?: string
  cid?: string
  mapsUrl?: string
  reviewCount?: number
  ratingValue?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rjbusinesssolutions.org/#organization',
    name: 'RJ Business Solutions',
    alternateName: 'RJ Business Solutions LLC',
    url: 'https://rjbusinesssolutions.org',
    logo: 'https://rjbusinesssolutions.org/logo.png',
    image: [
      'https://rjbusinesssolutions.org/office-1.jpg',
      'https://rjbusinesssolutions.org/office-2.jpg',
      'https://rjbusinesssolutions.org/team.jpg'
    ],
    description: 'AI automation and business solutions provider offering custom chatbots, process automation, and digital transformation services nationwide.',
    telephone: '+18775618001',
    email: 'rick@rjbusinesssolutions.org',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'NM',
      postalCode: '87101'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.0844,
      longitude: -106.6504
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/rj-business-solutions',
      'https://twitter.com/rjbizsolutions',
      'https://www.facebook.com/rjbusinesssolutions',
      config.mapsUrl || `https://maps.google.com/?cid=${config.cid}`,
      'https://www.youtube.com/@rjbusinesssolutions'
    ],
    hasMap: config.mapsUrl || `https://maps.google.com/?cid=${config.cid}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: config.ratingValue || 5.0,
      reviewCount: config.reviewCount || 127,
      bestRating: 5,
      worstRating: 1
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'John Smith'
        },
        datePublished: '2024-11-15',
        reviewBody: 'Outstanding AI automation services. Rick and his team transformed our business operations.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5
        }
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson'
        },
        datePublished: '2024-10-22',
        reviewBody: 'Best chatbot development company. Increased our customer satisfaction by 40%.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5
        }
      }
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States'
      }
    ],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Wire Transfer', 'ACH'],
    currenciesAccepted: 'USD',
    founder: {
      '@type': 'Person',
      name: 'Rick Jefferson',
      jobTitle: 'CEO & Founder',
      image: 'https://rjbusinesssolutions.org/rick-jefferson.jpg'
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 10,
      maxValue: 50
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Chatbot Development',
      'Process Automation',
      'Business Intelligence',
      'Cloud Engineering',
      'Digital Transformation'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Business Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Chatbot Development',
            description: 'Custom AI chatbots for customer service and sales'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process Automation',
            description: 'Automate business workflows and operations'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Machine Learning Solutions',
            description: 'Predictive analytics and intelligent systems'
          }
        }
      ]
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://rjbusinesssolutions.org/#contact',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform'
        ]
      },
      result: {
        '@type': 'Reservation',
        name: 'Schedule Consultation'
      }
    }
  }
}