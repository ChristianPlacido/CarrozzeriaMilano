'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 shadow-2xl shadow-primary/30 inline-flex">
                <div className="w-40 md:w-48">
                  <Image src="/images/logo.svg" alt="Carrozzeria Milano" width={200} height={100} priority className="w-full h-auto" />
                </div>
              </div>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              CARROZZERIA
              <span className="block text-primary-light">MILANO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Eccellenza artigianale, affidabilità moderna a Seregno
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Da oltre 40 anni offriamo servizi professionali di carrozzeria, verniciatura e ripristino per la tua auto. Qualità garantita e attenzione ai dettagli.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <WhatsAppButton 
              phoneNumber="+393331234567"
              message="Ciao, vorrei richiedere un preventivo gratuito"
            />
            <a href="#servizi" className="btn-secondary text-lg">
              Scopri i Servizi
            </a>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <FaPhone className="text-4xl text-primary-light mb-3 mx-auto" />
              <h3 className="text-white font-bold mb-2">Chiamaci</h3>
              <p className="text-gray-300">0362 238 800</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <FaMapMarkerAlt className="text-4xl text-primary-light mb-3 mx-auto" />
              <h3 className="text-white font-bold mb-2">Dove Siamo</h3>
              <p className="text-gray-300">Seregno, Monza e Brianza</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <FaClock className="text-4xl text-primary-light mb-3 mx-auto" />
              <h3 className="text-white font-bold mb-2">Orari</h3>
              <p className="text-gray-300">Lun-Ven: 8:00-18:00</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
