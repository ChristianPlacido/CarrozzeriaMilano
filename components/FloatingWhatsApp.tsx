'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/393331234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      aria-label="Contattaci su WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </motion.a>
  )
}

export default FloatingWhatsApp
