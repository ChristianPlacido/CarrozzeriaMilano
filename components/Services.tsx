'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCar, FaPaintRoller, FaTools, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'

const services = [
  {
    id: 1,
    icon: FaCar,
    title: 'Carrozzeria & Riparazioni',
    description: 'Riparazioni professionali della carrozzeria per danni da sinistri, ammaccature e graffi. Interventi completi su tutte le marche e modelli con massima precisione.',
    features: ['Riparazioni post-sinistro', 'Sostituzione parti', 'Lavorazione metallo'],
    image: '/CarrozzeriaMilano/images/service-1.jpg'
  },
  {
    id: 2,
    icon: FaPaintRoller,
    title: 'Verniciatura & Finiture',
    description: 'Verniciatura professionale con abbinamento perfetto dei colori. Finiture di alta qualità e duratura nel tempo.',
    features: ['Abbinamento colori preciso', 'Finiture uniformi', 'Verniciatura completa'],
    image: '/CarrozzeriaMilano/images/service-2.jpg'
  },
  {
    id: 3,
    icon: FaTools,
    title: 'Cristalli & Componenti',
    description: 'Sostituzione e riparazione di cristalli anteriori, posteriori e laterali. Fornitura e montaggio di componenti di qualità originale.',
    features: ['Sostituzione cristalli', 'Componenti originali', 'Montaggio professionale'],
    image: '/CarrozzeriaMilano/images/service-3.jpg'
  },
  {
    id: 4,
    icon: FaShieldAlt,
    title: 'Assistenza e Gestione Sinistri',
    description: 'Supporto completo nella gestione di sinistri assicurativi. Coordinamento con le compagnie e supporto peritale per pratiche rapide.',
    features: ['Pratiche assicurative', 'Supporto peritale', 'Coordinamento compagnie'],
    image: '/CarrozzeriaMilano/images/service-4.jpg'
  },
  {
    id: 5,
    icon: FaCheckCircle,
    title: 'Servizi di Cortesia Cliente',
    description: 'Servizi aggiuntivi per il comfort del cliente: autonoleggio sostitutivo, assistenza amministrativa e consulenza personalizzata.',
    features: ['Autonoleggio sostitutivo', 'Assistenza amministrativa', 'Consulenza personalizzata'],
    image: '/CarrozzeriaMilano/images/service-5.jpg'
  },
]

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            I Nostri <span className="text-primary">Servizi</span>
          </h2>
          <p className="section-subtitle">
            Soluzioni complete per ogni esigenza della tua auto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-96"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundColor: '#DC143C' }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                {/* Gradient Overlay - Light at top, Dark at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20 group-hover:from-primary/95 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                {/* Top - Icon and Title */}
                <div>
                  <div className="bg-white/20 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all">
                    <service.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{service.title}</h3>
                </div>

                {/* Bottom - Description, Features and CTA */}
                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm text-white/90 leading-snug">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-1 text-xs text-white/80">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <WhatsAppButton 
                    phoneNumber="+393331234567"
                    message={`Ciao, vorrei informazioni su: ${service.title}`}
                    variant="secondary"
                    className="w-full justify-center !bg-white/90 !text-primary !border-white text-sm py-2 px-3 hover:!bg-white"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Hai bisogno di un preventivo?</h3>
          <p className="text-gray-600 mb-8 text-lg">Contattaci oggi per una consulenza gratuita</p>
          <WhatsAppButton 
            phoneNumber="+393331234567"
            message="Ciao, vorrei richiedere un preventivo gratuito"
            className="inline-flex"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Services
