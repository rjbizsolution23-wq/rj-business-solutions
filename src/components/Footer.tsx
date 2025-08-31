import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">RJ Business Solutions</h3>
            <p className="text-gray-400">
              Transforming New Mexico businesses with cutting-edge AI automation solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">AI Chatbots</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Process Automation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Machine Learning</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Business Intelligence</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Albuquerque</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Santa Fe</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Las Cruces</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Rio Rancho</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:8775618001" className="text-gray-400 hover:text-white">
                  (877) 561-8001
                </a>
              </li>
              <li>
                <a href="mailto:rick@rjbusinesssolutions.org" className="text-gray-400 hover:text-white">
                  rick@rjbusinesssolutions.org
                </a>
              </li>
              <li className="text-gray-400">
                Serving all of New Mexico
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RJ Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}