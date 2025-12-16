'use client'

import { motion } from 'framer-motion'
import { FaCar, FaPaintRoller, FaWrench, FaShieldAlt, FaTools, FaCheckCircle } from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'

const services = [
  {
    icon: FaCar,
    title: 'Carrozzeria & Ripristino Estetico',
    description: 'Interventi su auto di qualsiasi marca e modello per riparazioni post-sinistro, ammaccature, graffi e danni alla carrozzeria.',
    features: ['Riparazioni post-sinistro', 'Sostituzione/ripristino parti', 'Metallo e plastiche']
  },
  {
    icon: FaPaintRoller,
    title: 'Verniciatura Professionale',
    description: 'Colori perfettamente abbinati, finiture uniformi e risultati duraturi grazie a materiali e tecniche di qualità.',
    features: ['Abbinamento colori', 'Finiture uniformi', 'Durabilità nel tempo']
  },
  {
    icon: FaTools,
    title: 'Ripristino Cerchi & Dettagli',
    description: 'Riparazione e ripristino cerchi e lavorazioni di dettaglio per un’estetica curata in ogni particolare.',
    features: ['Riparazione cerchi', 'Dettagli estetici', 'Rimessa a nuovo mirata']
  },
  {
    icon: FaShieldAlt,
    title: 'Gestione Sinistri & Convenzioni',
    description: 'Unico interlocutore: pratiche assicurative, supporto peritale e coordinamento con la compagnia. Convenzioni con principali reti.',
    features: ['Pratiche assicurative', 'Supporto peritale', 'Coordinamento compagnia']
  },
  {
    icon: FaWrench,
    title: 'Interventi Rapidi',
    description: 'Processi ottimizzati per ridurre i tempi di fermo e riconsegna puntuale del veicolo.',
    features: ['Ottimizzazione tempi', 'Qualità costante', 'Riconsegna puntuale']
  },
  {
    icon: FaCheckCircle,
    title: 'Cura Finale del Veicolo',
    description: 'Pulizia e riconsegna dell’auto nelle migliori condizioni possibili, con attenzione ai dettagli.',
    features: ['Pulizia completa', 'Controlli finali', 'Customer care']
  },
]

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-gray-50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-primary"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-3xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <WhatsAppButton 
                  phoneNumber="+393331234567"
                  message={`Ciao, vorrei informazioni su: ${service.title}`}
                  variant="secondary"
                  className="w-full justify-center"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <WhatsAppButton 
            phoneNumber="+393331234567"
            message="Ciao, vorrei richiedere un preventivo gratuito"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Services
