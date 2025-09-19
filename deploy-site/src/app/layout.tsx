import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RJ Business Solutions - AI Automation by Rick Jefferson | New Mexico',
  description: 'Transform your business with cutting-edge AI automation solutions by Rick Jefferson. AI Systems Architect & Full-Stack Engineer serving Albuquerque, Santa Fe, Las Cruces, and all of New Mexico.',
  keywords: 'Rick Jefferson, AI automation, business solutions, New Mexico, Albuquerque, Santa Fe, Las Cruces, AI systems architect, agent framework engineer, full-stack development, CrewAI, LangChain, cloud engineering',
  authors: [{ name: 'Rick Jefferson' }, { name: 'RJ Business Solutions' }],
  creator: 'Rick Jefferson',
  openGraph: {
    title: 'RJ Business Solutions - AI Automation by Rick Jefferson',
    description: 'Hyper-scalable code, autonomous architectures, and AI-native deployments by Rick Jefferson. Transform your New Mexico business with production-grade intelligent ecosystems.',
    url: 'https://rjbusinesssolutions.org',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://rjbusinesssolutions.org/rick-jefferson.jpg',
        width: 1200,
        height: 630,
        alt: 'Rick Jefferson - AI Systems Architect at RJ Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RJ Business Solutions - AI Automation by Rick Jefferson',
    description: 'Transform your business with cutting-edge AI automation solutions',
    creator: '@rickjefferson',
    images: ['https://rjbusinesssolutions.org/rick-jefferson.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}