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

      {/* Hero: scritta centrale in sovraimpressione clean senza riquadro */}
      <div className="absolute z-20 inset-0 flex items-center justify-center w-full h-full text-center px-4">
        <div className="space-y-0">
          {/* CARROZZERIA - Grigio con bordo nero */}
          <motion.h1 
            className={`${displayFont.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight font-bold`}
            style={{ 
              color: '#C0C0C0',
              textShadow: '0 0 30px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.9)',
              WebkitTextStroke: '3px #000000',
              paintOrder: 'stroke fill'
            }}
            initial={{ opacity: 0, y: -60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            CARROZZERIA
          </motion.h1>
          
          {/* MILANO - Rosso brillante con bordo nero */}
          <motion.h2 
            className={`${displayFont.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-bold`}
            style={{ 
              color: '#DC143C',
              textShadow: '0 0 30px rgba(220,20,60,0.8), 2px 2px 4px rgba(0,0,0,0.9)',
              WebkitTextStroke: '3px #000000',
              paintOrder: 'stroke fill'
            }}
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
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
