'use client'

import { motion } from 'framer-motion'
import { Bebas_Neue } from 'next/font/google'
import BackgroundCarousel from './BackgroundCarousel'

const displayFont = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Carosello a tutta larghezza come sfondo */}
      <BackgroundCarousel />
      {/* Hero minimale: solo scritta centrale con effetto dinamico e massimo rilievo */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center px-4">
        <div className="space-y-2 backdrop-blur-sm bg-black/20 px-8 py-6 rounded-3xl">
          <motion.h1 
            className={`${displayFont.className} text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight`}
            style={{ 
              textShadow: '0 0 40px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.9), -2px -2px 4px rgba(0,0,0,0.5)',
              WebkitTextStroke: '1px rgba(0,0,0,0.3)'
            }}
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            CARROZZERIA
          </motion.h1>
          <motion.h2 
            className={`${displayFont.className} text-primary-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight`}
            style={{ 
              textShadow: '0 0 40px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8), 4px 4px 8px rgba(0,0,0,0.9), -2px -2px 4px rgba(0,0,0,0.5)',
              WebkitTextStroke: '1px rgba(0,0,0,0.3)'
            }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            MILANO
          </motion.h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Indicator nascosto per estetica minimale */}
    </section>
  )
}

export default Hero
