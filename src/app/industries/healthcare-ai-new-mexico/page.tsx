import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Heart, Shield, Users, Clock, TrendingUp, CheckCircle, Phone, FileText, Bot, Stethoscope, Calendar, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare AI Automation New Mexico | Medical Practice Solutions | RJ Business Solutions',
  description: 'Leading healthcare AI automation solutions in New Mexico. HIPAA-compliant chatbots, patient scheduling automation, and medical practice management AI for hospitals, clinics, and healthcare providers.',
  keywords: 'healthcare AI New Mexico, medical practice automation, HIPAA compliant chatbots, patient scheduling automation, healthcare chatbots Albuquerque, medical AI solutions Santa Fe',
  openGraph: {
    title: 'Healthcare AI Automation New Mexico | RJ Business Solutions',
    description: 'Transform your New Mexico healthcare practice with HIPAA-compliant AI automation. Reduce administrative burden and improve patient care.',
    url: 'https://rjbusinesssolutions.org/industries/healthcare-ai-new-mexico',
    siteName: 'RJ Business Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare AI Automation New Mexico | RJ Business Solutions',
    description: 'HIPAA-compliant AI solutions for New Mexico healthcare providers. Automate scheduling, patient intake, and administrative tasks.',
  },
  alternates: {
    canonical: 'https://rjbusinesssolutions.org/industries/healthcare-ai-new-mexico'
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "RJ Business Solutions - Healthcare AI Automation New Mexico",
  "description": "HIPAA-compliant AI automation solutions for healthcare providers across New Mexico",
  "url": "https://rjbusinesssolutions.org/industries/healthcare-ai-new-mexico",
  "logo": "https://rjbusinesssolutions.org/logo.png",
  "telephone": "+18775618001",
  "email": "rick@rjbusinesssolutions.org",
  "areaServed": {
    "@type": "State",
    "name": "New Mexico"
  },
  "serviceType": "Healthcare AI Automation",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Healthcare AI Services New Mexico",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HIPAA-Compliant Medical Chatbots",
          "description": "AI chatbots for patient intake, appointment scheduling, and basic medical inquiries"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Patient Scheduling Automation",
          "description": "Automated appointment booking, rescheduling, and reminder systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Medical Records Management AI",
          "description": "AI-powered organization and retrieval of patient medical records"
        }
      }
    ]
  }
};

const newMexicoHealthcareFacts = {
  hospitals: "37",
  clinics: "450+", 
  healthcareWorkers: "85,000+",
  majorHospitalSystems: [
    "Presbyterian Healthcare Services",
    "University of New Mexico Hospital",
    "Lovelace Health System", 
    "Christus St. Joseph",
    "Memorial Medical Center"
  ],
  specialties: [
    "Cardiology",
    "Oncology", 
    "Emergency Medicine",
    "Family Medicine",
    "Internal Medicine",
    "Pediatrics",
    "Orthopedics",
    "Radiology"
  ]
};

export default function HealthcareAINewMexico() {
  return (
    <>
      <Script
        id="structured-data-healthcare-nm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-teal-800 to-green-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Heart className="text-red-400 mr-3" size={40} />
              <span className="text-xl text-blue-200">New Mexico Healthcare AI Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Healthcare AI Automation
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              HIPAA-Compliant AI Solutions for New Mexico Healthcare Providers
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Serving {newMexicoHealthcareFacts.hospitals} hospitals, {newMexicoHealthcareFacts.clinics} clinics, 
              and {newMexicoHealthcareFacts.healthcareWorkers} healthcare professionals across the Land of Enchantment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8775618001"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                <Phone className="mr-2" size={20} />
                Free Healthcare AI Consultation
              </a>
              <Link
                href="#solutions"
                className="inline-block bg-white hover:bg-gray-100 text-teal-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
              >
                View AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Stats */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">{newMexicoHealthcareFacts.hospitals}</div>
              <div className="text-gray-600">Hospitals in NM</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">{newMexicoHealthcareFacts.clinics}</div>
              <div className="text-gray-600">Clinics & Practices</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
              <div className="text-gray-600">Admin Time Saved</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Patient Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Challenges in New Mexico */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Healthcare Challenges in New Mexico
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              How AI automation addresses the unique needs of New Mexico healthcare providers
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-red-500 mt-1">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Staff Shortages</h3>
                    <p className="text-gray-600">
                      New Mexico faces critical healthcare staff shortages with many rural areas underserved. 
                      AI automation helps existing staff handle more patients efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-red-500 mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Administrative Burden</h3>
                    <p className="text-gray-600">
                      Healthcare providers spend 60%+ time on paperwork instead of patient care. 
                      Our AI solutions automate routine tasks and documentation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-red-500 mt-1">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Patient Access Issues</h3>
                    <p className="text-gray-600">
                      Long wait times and limited office hours create barriers to care. 
                      24/7 AI support improves patient access and satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-green-500 mt-1">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Solution: Smart Automation</h3>
                    <p className="text-gray-600">
                      Our HIPAA-compliant AI systems handle appointment scheduling, patient intake, 
                      insurance verification, and follow-up care automatically.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 mt-1">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Solution: 24/7 Patient Support</h3>
                    <p className="text-gray-600">
                      Intelligent chatbots provide round-the-clock patient support, triage symptoms, 
                      schedule appointments, and answer common medical questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-green-500 mt-1">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">AI Solution: Bilingual Support</h3>
                    <p className="text-gray-600">
                      English and Spanish AI support serves New Mexico's 47% Hispanic population 
                      with culturally appropriate healthcare communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare AI Solutions */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Healthcare AI Solutions for New Mexico
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              HIPAA-compliant automation tailored for healthcare providers
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600">
                    <Stethoscope size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">HIPAA-Compliant Medical Chatbots</h3>
                    <p className="text-gray-600 mb-4">
                      Intelligent chatbots that handle patient intake, symptom assessment, 
                      and basic medical inquiries while maintaining strict HIPAA compliance.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        HIPAA-compliant patient communication
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Symptom triage and assessment
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Pre-visit patient intake automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Medication reminder systems
                      </li>
                    </ul>
                    <div className="text-2xl font-bold text-blue-600 mb-2">Starting at $1,497/month</div>
                    <Link 
                      href="/landing/custom-chatbots"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Medical Chatbots
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-green-600">
                    <Calendar size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Patient Scheduling Automation</h3>
                    <p className="text-gray-600 mb-4">
                      Automated appointment booking, rescheduling, cancellations, and reminder systems 
                      that work 24/7 to optimize your practice schedule.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        24/7 appointment scheduling
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Automated appointment reminders
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Waitlist management automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        EHR system integration
                      </li>
                    </ul>
                    <div className="text-2xl font-bold text-green-600 mb-2">Starting at $997/month</div>
                    <Link 
                      href="/services/process-automation"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Scheduling AI
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-600">
                    <FileText size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Medical Records Management AI</h3>
                    <p className="text-gray-600 mb-4">
                      AI-powered organization, retrieval, and analysis of patient medical records 
                      with advanced search capabilities and automated documentation.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Intelligent document organization
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Automated data entry and coding
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Voice-to-text medical notes
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Compliance monitoring and alerts
                      </li>
                    </ul>
                    <div className="text-2xl font-bold text-purple-600 mb-2">Starting at $2,497/month</div>
                    <Link 
                      href="/services/business-intelligence"
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Records AI
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-600">
                    <Shield size={48} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Insurance & Billing Automation</h3>
                    <p className="text-gray-600 mb-4">
                      Automated insurance verification, prior authorization requests, 
                      claims processing, and patient billing to reduce administrative overhead.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Real-time insurance verification
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Automated prior authorization
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Claims processing automation
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Patient billing and collections
                      </li>
                    </ul>
                    <div className="text-2xl font-bold text-orange-600 mb-2">Starting at $1,997/month</div>
                    <Link 
                      href="/services/process-automation"
                      className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Learn More About Billing AI
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Healthcare Systems */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Serving New Mexico's Leading Healthcare Systems
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12">
              Trusted by hospitals, clinics, and healthcare providers across the state
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newMexicoHealthcareFacts.majorHospitalSystems.map((system, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{system}</h3>
                  <p className="text-gray-600 text-sm">
                    Custom AI solutions for improved patient care and operational efficiency
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Medical Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              AI Solutions by Medical Specialty
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {newMexicoHealthcareFacts.specialties.map((specialty, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="font-semibold text-gray-800">{specialty}</div>
                  <div className="text-sm text-gray-600">Specialized AI Tools</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Success Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">
                New Mexico Healthcare Success Story
              </h2>
              <div className="text-center">
                <blockquote className="text-xl italic mb-4">
                  "RJ Business Solutions' AI chatbot has revolutionized our patient intake process. 
                  We're now able to handle 250% more patient inquiries with the same staff, 
                  and our patients love the 24/7 availability. The HIPAA compliance gave us peace of mind."
                </blockquote>
                <cite className="font-semibold">
                  — Dr. Sandra Martinez, MD, Santa Fe Family Medicine Clinic
                </cite>
                <div className="mt-4 text-teal-200">
                  <strong>Results:</strong> 94% reduction in phone calls • 78% faster patient intake • 40% increase in appointment bookings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIPAA Compliance Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-4">HIPAA Compliance Guaranteed</h2>
              <p className="text-xl text-gray-600">
                Our healthcare AI solutions meet the highest security and privacy standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">End-to-End Encryption</h3>
                <p className="text-gray-600">All patient data is encrypted in transit and at rest using military-grade encryption protocols.</p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Audit Trails</h3>
                <p className="text-gray-600">Complete audit logging and monitoring of all system access and patient data interactions.</p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Access Controls</h3>
                <p className="text-gray-600">Role-based access controls ensure only authorized personnel can access sensitive patient information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Transform Your Healthcare Practice with AI
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join New Mexico healthcare providers who have reduced administrative burden by 94% with our HIPAA-compliant AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="tel:8775618001"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Call (877) 561-8001
            </a>
            <Link
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Schedule Free Healthcare AI Demo
            </Link>
          </div>
          <div className="flex items-center justify-center text-green-200">
            <Shield className="mr-2" size={16} />
            <span>HIPAA-Compliant • Secure • Trusted</span>
          </div>
        </div>
      </section>

      {/* Local SEO Footer */}
      <section className="py-8 bg-gray-100 text-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <p className="mb-2">
              <strong>RJ Business Solutions Healthcare AI</strong> - Serving New Mexico healthcare providers since 2020
            </p>
            <p>
              Trusted by hospitals, clinics, and healthcare providers in Albuquerque, Santa Fe, Las Cruces, 
              Roswell, Farmington, and throughout New Mexico with HIPAA-compliant AI automation solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}