'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logoPng from '@/public/images/carrozzeriamilano.png'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#servizi', label: 'Servizi' },
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contatti', label: 'Contatti' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="hidden lg:block bg-white/80 backdrop-blur border-b border-white/40 text-sm text-gray-700">
        <div className="container mx-auto px-4 py-3 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <a href="tel:+390362328901" className="flex items-center gap-2 font-semibold text-primary hover:opacity-80">
              <FaPhone /> 0362 328901
            </a>
            <a href="https://wa.me/393331234567" className="flex items-center gap-2 text-green-600 hover:opacity-80">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className={`container mx-auto px-4 ${scrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex justify-between items-center">
          {/* Logo PNG più grande */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <div className="relative w-44 md:w-56 lg:w-64 h-14 md:h-16">
              <Image src={logoPng} alt="Carrozzeria Milano" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-primary ${
                  scrolled ? 'text-gray-700' : 'text-white hover:text-gray-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-2">
              <a
                href="tel:+390362328901"
                className="btn-primary flex items-center space-x-2"
              >
                <FaPhone />
                <span>Chiamaci</span>
              </a>
              <WhatsAppButton 
                phoneNumber="+393331234567" 
                variant="icon"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl z-50"
          >
            {isOpen ? (
              <FaTimes className="text-primary" />
            ) : (
              <FaBars className={scrolled ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white lg:hidden pt-20"
          >
            <div className="flex flex-col items-center space-y-6 p-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col items-center space-y-4 mt-8">
                <a
                  href="tel:+390362328901"
                  className="btn-primary flex items-center space-x-2"
                >
                  <FaPhone />
                  <span>Chiamaci</span>
                </a>
                <WhatsAppButton 
                  phoneNumber="+393331234567"
                  message="Ciao, vorrei informazioni"
                />
              </div>
              <div className="flex items-center space-x-2 text-gray-600 mt-4">
                <FaMapMarkerAlt className="text-primary" />
                <span>Via Copenhagen 22/24, Seregno (MB)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
