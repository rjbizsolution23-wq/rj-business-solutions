import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import Features from '@/components/Features'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Features />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  )
}