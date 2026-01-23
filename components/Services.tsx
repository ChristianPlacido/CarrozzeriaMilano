'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaCar, FaPaintRoller, FaTools, FaShieldAlt, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'

const KEYWORDS = ['PROFESSIONALITÀ', 'PRECISIONE', 'CURA NEI DETTAGLI', 'CARROZZERIA MILANO']

const services = [
  {
    id: 1,
    icon: FaCar,
    title: 'Carrozzeria & Riparazioni',
    image: 'https://tse1.mm.bing.net/th/id/OIP.BYi5UDhgv9DijZZlru0RsgHaE8?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
  {
    id: 2,
    icon: FaPaintRoller,
    title: 'Verniciatura & Finiture',
    image: 'https://tse1.mm.bing.net/th/id/OIP.AJ1soM7raEW_162DC1K7GwHaE7?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
  {
    id: 3,
    icon: FaTools,
    title: 'Cristalli & Componenti',
    image: 'https://tse3.mm.bing.net/th/id/OIP.1ro3Q_gSyhWsw46ewHh5pgHaFh?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
  {
    id: 4,
    icon: FaShieldAlt,
    title: 'Assistenza e Gestione Sinistri',
    image: 'https://tse1.mm.bing.net/th/id/OIP.-n9-ASy7T7fv82ZObLzafQHaEO?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
  {
    id: 5,
    icon: FaCheckCircle,
    title: 'Servizi di Cortesia Cliente',
    image: 'https://tse2.mm.bing.net/th/id/OIP.uu_Ee8MAYmjD0hEdV6nCqgHaE6?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
]

interface ServiceCardProps {
  service: (typeof services)[0]
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [isSelected, setIsSelected] = useState(false)
  const Icon = service.icon

  return (
    <div className="h-64 relative cursor-pointer" onClick={() => setIsSelected(!isSelected)}>
      <motion.div
        animate={{ scale: isSelected ? 1.1 : 1 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 400, damping: 40 }}
        className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border-4 border-primary"
        style={{ transformOrigin: 'center', zIndex: isSelected ? 50 : 0 }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-end p-4">
          <div className="w-full flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                <Icon className="text-white text-lg" />
              </div>
              <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:+390362328901"
                onClick={(e) => e.stopPropagation()}
                className="bg-white/80 text-primary rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Chiama"
              >
                <FaPhone className="text-sm" />
              </a>
              <a
                href="https://wa.me/393331234567"
                onClick={(e) => e.stopPropagation()}
                className="bg-white/80 text-green-500 rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Services() {
  const [keywordIndex, setKeywordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % KEYWORDS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Keywords loop */}
        <div className="text-center mb-12">
          <AnimatePresence mode="wait">
            <motion.h3
              key={KEYWORDS[keywordIndex]}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-gray-900"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {KEYWORDS[keywordIndex]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">I nostri <span className="text-primary">Servizi</span></h2>
          <p className="text-gray-600 text-sm mt-3">Clicca su un servizio per zoommare e scopri di più</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:max-w-6xl lg:mx-auto mb-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-4xl lg:mx-auto">
          {services.slice(3, 5).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
