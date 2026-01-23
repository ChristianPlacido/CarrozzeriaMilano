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
    description: 'Riparazioni professionali della carrozzeria per danni da sinistri, ammaccature e graffi. Interventi completi su tutte le marche e modelli con massima precisione.',
    features: ['Riparazioni post-sinistro', 'Sostituzione parti', 'Lavorazione metallo'],
    image: 'https://tse1.mm.bing.net/th/id/OIP.BYi5UDhgv9DijZZlru0RsgHaE8?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
  {
    id: 2,
    icon: FaPaintRoller,
    title: 'Verniciatura & Finiture',
    description: 'Verniciatura professionale con abbinamento perfetto dei colori. Finiture di alta qualità e duratura nel tempo.',
    features: ['Abbinamento colori preciso', 'Finiture uniformi', 'Verniciatura completa'],
    image: 'https://tse1.mm.bing.net/th/id/OIP.AJ1soM7raEW_162DC1K7GwHaE7?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
  {
    id: 3,
    icon: FaTools,
    title: 'Cristalli & Componenti',
    description: 'Sostituzione e riparazione di cristalli anteriori, posteriori e laterali. Fornitura e montaggio di componenti di qualità originale.',
    features: ['Sostituzione cristalli', 'Componenti originali', 'Montaggio professionale'],
    image: 'https://tse3.mm.bing.net/th/id/OIP.1ro3Q_gSyhWsw46ewHh5pgHaFh?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
  {
    id: 4,
    icon: FaShieldAlt,
    title: 'Assistenza e Gestione Sinistri',
    description: 'Supporto completo nella gestione di sinistri assicurativi. Coordinamento con le compagnie e supporto peritale per pratiche rapide.',
    features: ['Pratiche assicurative', 'Supporto peritale', 'Coordinamento compagnie'],
    image: 'https://tse1.mm.bing.net/th/id/OIP.-n9-ASy7T7fv82ZObLzafQHaEO?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
  {
    id: 5,
    icon: FaCheckCircle,
    title: 'Servizi di Cortesia Cliente',
    description: 'Servizi aggiuntivi per il comfort del cliente: autonoleggio sostitutivo, assistenza amministrativa e consulenza personalizzata.',
    features: ['Autonoleggio sostitutivo', 'Assistenza amministrativa', 'Consulenza personalizzata'],
    image: 'https://tse2.mm.bing.net/th/id/OIP.uu_Ee8MAYmjD0hEdV6nCqgHaE6?cb=ucfimg2&ucfimg=1&w=474&h=379&c=7&p=0'
  },
]

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="h-64 relative">
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ scale: isSelected ? 1.1 : 1 }}
        onClick={() => setIsSelected(!isSelected)}
        className="absolute inset-0 group relative rounded-2xl overflow-hidden shadow-md border-4 border-primary cursor-pointer"
        transition={{ duration: 0.3, type: 'spring', stiffness: 400, damping: 40 }}
        style={{
          transformOrigin: 'center',
          zIndex: isSelected ? 50 : 0
        }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute top-3 left-3 z-10">
          <span className="text-xs font-bold tracking-widest text-white/70 uppercase">Servizio</span>
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="p-4 text-white w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div 
                className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
              >
                <service.icon className="text-white text-lg" />
              </motion.div>
              <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:+390362328901"
                aria-label="Chiama la carrozzeria"
                className="bg-white/80 text-primary rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaPhone className="text-base" />
              </a>
              <a
                href="https://wa.me/393331234567"
                aria-label="Scrivi su WhatsApp"
                className="bg-white/80 text-green-600 rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FaWhatsapp className="text-base" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Services = () => {
  const [keywordIndex, setKeywordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setKeywordIndex((i) => (i + 1) % KEYWORDS.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Loop parole chiave in dissolvenza sopra il titolo */}
        <div className="text-center mb-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={KEYWORDS[keywordIndex]}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-gray-900"
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              {KEYWORDS[keywordIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mb-16">
          <h2 className="section-title">I nostri <span className="text-primary">Servizi</span></h2>
          <p className="text-gray-600 text-sm mt-3">Clicca su un servizio per zoommare e scopri di più</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-6xl lg:mx-auto">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:max-w-4xl lg:mx-auto">
          {services.slice(3, 5).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
