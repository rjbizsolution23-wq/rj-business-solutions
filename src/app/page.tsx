import AnimatedHero from '@/components/AnimatedHero'
import AnimatedServices from '@/components/AnimatedServices'
import BookingButton from '@/components/BookingButton'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Features from '@/components/Features'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnimatedHero />
      <AnimatedServices />
      <About />
      <Features />
      <BookingButton />
      <CTA />
      <Footer />
    </main>
  )
}