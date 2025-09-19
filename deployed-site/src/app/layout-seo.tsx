import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://rjbusinesssolutions.org'),
  title: {
    default: 'RJ Business Solutions | AI Automation & Business Growth | New Mexico',
    template: '%s | RJ Business Solutions'
  },
  description: 'Leading AI automation and business growth solutions in New Mexico. Expert in AI chatbots, voice bots, SEO, social media, and digital transformation. Serving Albuquerque, Santa Fe, Las Cruces, and all of New Mexico.',
  keywords: [
    'AI automation New Mexico',
    'business solutions Albuquerque',
    'digital transformation Santa Fe',
    'AI chatbots Las Cruces',
    'SEO services New Mexico',
    'Rick Jefferson',
    'RJ Business Solutions',
    'business growth consultant NM',
    'AI voice bot',
    'lead generation New Mexico',
    'website development Albuquerque',
    'social media management Santa Fe',
    'process automation',
    'machine learning solutions',
    'business intelligence NM'
  ].join(', '),
  authors: [{ name: 'Rick Jefferson', url: 'https://rjbusinesssolutions.org' }],
  creator: 'Rick Jefferson',
  publisher: 'RJ Business Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rjbusinesssolutions.org',
    siteName: 'RJ Business Solutions',
    title: 'RJ Business Solutions | AI Automation & Business Growth | New Mexico',
    description: 'Transform your business with AI automation, digital marketing, and growth strategies. Serving all of New Mexico.',
    images: [
      {
        url: 'https://rjbusinesssolutions.org/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RJ Business Solutions - AI Automation & Business Growth',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RJ Business Solutions | AI Automation & Business Growth',
    description: 'Transform your business with AI automation and growth strategies in New Mexico',
    images: ['https://rjbusinesssolutions.org/twitter-image.jpg'],
    creator: '@rjbizsolutions',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org',
    languages: {
      'en-US': 'https://rjbusinesssolutions.org',
      'es-US': 'https://rjbusinesssolutions.org/es',
    },
  },
  category: 'Technology',
  classification: 'Business Services',
  referrer: 'origin-when-cross-origin',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e3a8a' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' }
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#1e3a8a'
      }
    ]
  },
  appLinks: {
    web: {
      url: 'https://rjbusinesssolutions.org',
      should_fallback: true,
    },
  },
  archives: ['https://rjbusinesssolutions.org/archive'],
  assets: ['https://rjbusinesssolutions.org/assets'],
  bookmarks: ['https://rjbusinesssolutions.org/services'],
  other: {
    'geo.region': 'US-NM',
    'geo.placename': 'Albuquerque',
    'geo.position': '35.0844;-106.6504',
    'ICBM': '35.0844, -106.6504',
    'fb:app_id': 'facebook-app-id',
    'og:phone_number': '+1-877-561-8001',
    'og:email': 'info@rjbusinesssolutions.org',
    'og:locality': 'Albuquerque',
    'og:region': 'NM',
    'og:postal-code': '87101',
    'og:country-name': 'USA',
  }
}