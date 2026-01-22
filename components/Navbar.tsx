'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'
import AnimatedLogo from './AnimatedLogo'
import InsuranceFlow from './InsuranceFlow'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState('#home')
  const [insuranceFlowOpen, setInsuranceFlowOpen] = useState(false)

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#servizi', label: 'Servizi' },
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contatti', label: 'Contatti' },
  ]

  return (
    <>
      <nav className="fixed inset-x-0 top-0 w-full z-[120] transition-all duration-300 bg-black/80 backdrop-blur shadow-lg">
        <div className="container mx-auto px-4 py-3 relative z-[130]">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center z-10">
              <AnimatedLogo width={200} height={80} />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveMenu(item.href)}
                  className={`font-medium transition-all duration-300 relative group ${
                    activeMenu === item.href ? 'text-primary' : 'text-white hover:text-gray-200'
                  }`}
                >
                  <motion.span
                    initial={{ scale: 0.95 }}
                    animate={activeMenu === item.href ? { scale: 1, color: '#DC143C' } : { scale: 1, color: '#ffffff' }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {item.label}
                  </motion.span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      activeMenu === item.href ? 'w-full bg-primary' : 'w-0 bg-primary group-hover:w-full'
                    }`}
                  />
                </a>
              ))}
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={() => setInsuranceFlowOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  HAI UN SINISTRO?
                </motion.button>
                <a
                  href="tel:+390362328901"
                  className="w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-100 text-primary rounded-full transition-all shadow-md hover:shadow-lg"
                  aria-label="Chiama la carrozzeria"
                >
                  <FaPhone className="text-lg" />
                </a>
                <a
                  href="https://wa.me/393331234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full transition-all shadow-md hover:shadow-lg"
                  aria-label="Contattaci su WhatsApp"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl relative z-[140] text-white">
              {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[140] bg-black/90 lg:hidden pt-20 text-white backdrop-blur"
            >
              <div className="flex flex-col items-center space-y-6 p-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-medium text-white hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col items-center space-y-4 mt-8">
                  <motion.button
                    onClick={() => {
                      setInsuranceFlowOpen(true)
                      setIsOpen(false)
                    }}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    HAI UN SINISTRO?
                  </motion.button>
                  <a href="tel:+390362328901" className="btn-primary flex items-center space-x-2">
                    <FaPhone />
                    <span>Chiamaci</span>
                  </a>
                  <WhatsAppButton phoneNumber="+393331234567" message="Ciao, vorrei informazioni" />
                </div>
                <div className="flex items-center space-x-2 text-white/80 mt-4">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>Via Copenhagen 22/24, Seregno (MB)</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <InsuranceFlow isOpen={insuranceFlowOpen} onClose={() => setInsuranceFlowOpen(false)} />
    </>
  )
}

export default Navbar
