'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import WhatsAppButton from './WhatsAppButton'
import AnimatedLogo from './AnimatedLogo'
import InsuranceFlow from './InsuranceFlow'

const MENU_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#servizi', label: 'Servizi' },
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contatti', label: 'Contatti' },
]

const NavbarClean = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState('#home')
  const [insuranceFlowOpen, setInsuranceFlowOpen] = useState(false)
  const menuItems = MENU_ITEMS

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 280, damping: 22 } },
  }

  useEffect(() => {
    const sectionSelector = menuItems.map((item) => item.href.replace('#', '')).join(', ')
    const sections = document.querySelectorAll<HTMLElement>(`section#${sectionSelector.split(', ').join(', section#')}`)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveMenu(`#${visibleEntry.target.id}`)
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-20% 0px -30% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const body = document.body
    if (isOpen) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
    return () => body.classList.remove('overflow-hidden')
  }, [isOpen])

  return (
    <>
      <nav className="fixed inset-x-0 top-0 w-full z-[160] transition-all duration-300 bg-black/80 backdrop-blur shadow-lg">
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

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl relative z-[200] text-white h-11 w-11 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center hover:border-white/40 transition"
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[190] bg-black/70 backdrop-blur lg:hidden"
            >
              <motion.div
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-4 top-4 bottom-4 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-black/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-primary font-semibold">Menu</p>
                    <p className="text-sm text-white/70">Naviga rapidamente</p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="h-11 w-11 rounded-full bg-white/10 border border-white/15 text-white flex items-center justify-center hover:bg-white/15 transition"
                    aria-label="Chiudi menu"
                  >
                    <FaTimes />
                  </button>
                </div>

                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex-1 flex flex-col items-center text-center gap-4 px-6 py-8 overflow-y-auto w-full"
                >
                  {menuItems.map((item) => (
                    <motion.li key={item.href} variants={itemVariants} className="w-full">
                      <a
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false)
                          setActiveMenu(item.href)
                        }}
                        className={`block w-full rounded-xl px-4 py-3 text-xl font-semibold transition-all duration-200 ${
                          activeMenu === item.href
                            ? 'bg-white text-slate-900 shadow-lg'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="px-6 pb-6 space-y-4">
                  <motion.button
                    onClick={() => {
                      setInsuranceFlowOpen(true)
                      setIsOpen(false)
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    HAI UN SINISTRO?
                  </motion.button>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="tel:+390362328901" className="flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 font-semibold py-3 shadow-md hover:shadow-lg transition">
                      <FaPhone />
                      <span>Chiamaci</span>
                    </a>
                    <WhatsAppButton phoneNumber="+393331234567" message="Ciao, vorrei informazioni" />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>Via Copenhagen 22/24, Seregno (MB)</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <InsuranceFlow isOpen={insuranceFlowOpen} onClose={() => setInsuranceFlowOpen(false)} />
    </>
  )
}

export default NavbarClean
