'use client'

import { motion } from 'framer-motion'
import { FaCar, FaPaintRoller, FaTools, FaShieldAlt, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'

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

const Services = () => {
  return (
    <section id="servizi" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">I nostri <span className="text-primary">Servizi</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-6xl lg:mx-auto">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-4 border-primary"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 text-white w-full flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <service.icon className="text-white text-lg" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+390362328901"
                      aria-label="Chiama la carrozzeria"
                      className="bg-white/80 text-primary rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <FaPhone className="text-base" />
                    </a>
                    <a
                      href="https://wa.me/393331234567"
                      aria-label="Scrivi su WhatsApp"
                      className="bg-white/80 text-green-600 rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <FaWhatsapp className="text-base" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:max-w-4xl lg:mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index + 3) * 0.05 }}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-4 border-primary"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-end">
                <div className="p-4 text-white w-full flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                      <service.icon className="text-white text-lg" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+390362328901"
                      aria-label="Chiama la carrozzeria"
                      className="bg-white/80 text-primary rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <FaPhone className="text-base" />
                    </a>
                    <a
                      href="https://wa.me/393331234567"
                      aria-label="Scrivi su WhatsApp"
                      className="bg-white/80 text-green-600 rounded-full w-9 h-9 flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <FaWhatsapp className="text-base" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
