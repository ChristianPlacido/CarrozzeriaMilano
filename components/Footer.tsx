'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaClock } from 'react-icons/fa'
import DynamicLogo from './DynamicLogo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <DynamicLogo className="w-40" />
            </Link>
            <p className="text-gray-400 mb-6">
              Da oltre 40 anni al servizio della tua auto. Qualità, professionalità e attenzione ai dettagli sono la nostra firma.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6">Link Rapidi</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#servizi" className="text-gray-400 hover:text-primary transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-gray-400 hover:text-primary transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-gray-400 hover:text-primary transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6">Servizi</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Riparazione Carrozzeria</li>
              <li className="text-gray-400">Verniciatura</li>
              <li className="text-gray-400">Meccanica</li>
              <li className="text-gray-400">Gestione Sinistri</li>
              <li className="text-gray-400">Restauro Auto d'Epoca</li>
              <li className="text-gray-400">Detailing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Via Copenhagen, 22/24<br />
                  20831 Seregno (MB)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaPhone className="text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>0362 328 901</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@carrozzeriamilano.it</span>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Lun-Ven: 8:00-18:00</div>
                  <div>Sab: 8:00-12:30</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Carrozzeria Milano. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Termini e Condizioni
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
