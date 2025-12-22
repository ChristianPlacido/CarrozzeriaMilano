'use client'

import { motion } from 'framer-motion'
import { FaCar, FaPaintRoller, FaTools, FaShieldAlt, FaCheckCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'

const servicesBar = [
  { icon: FaCar, title: 'Carrozzeria & Riparazioni' },
  { icon: FaPaintRoller, title: 'Verniciatura & Finiture' },
  { icon: FaTools, title: 'Cristalli & Componenti' },
  { icon: FaShieldAlt, title: 'Assistenza Sinistri' },
  { icon: FaCheckCircle, title: 'Cortesia Cliente' },
]

const ServicesBar = () => {
  return (
    <section className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {servicesBar.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center gap-3 text-white group cursor-pointer hover:opacity-80 transition-all"
            >
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-white/30 transition-all">
                <service.icon className="text-2xl text-white" />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">{service.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-6">
          <a
            href="tel:+390362328901"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <FaPhone className="text-xl" />
            <span>0362 328901</span>
          </a>
          <a
            href="https://wa.me/393331234567"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            <FaWhatsapp className="text-xl" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesBar
