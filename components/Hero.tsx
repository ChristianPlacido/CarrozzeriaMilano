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

      {/* Hero: scritta centrale con bordo marcato senza riquadro - meno visibile dietro il logo */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center px-4">
        <div className="space-y-2 opacity-60">
          <motion.h1 
            className={`${displayFont.className} text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight`}
            style={{ 
              textShadow: '0 0 30px rgba(0,0,0,0.95), 0 0 15px rgba(0,0,0,0.9), 3px 3px 6px rgba(0,0,0,1)',
              WebkitTextStroke: '2px rgba(0,0,0,0.8)',
              paintOrder: 'stroke fill'
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
              textShadow: '0 0 30px rgba(0,0,0,0.95), 0 0 15px rgba(0,0,0,0.9), 3px 3px 6px rgba(0,0,0,1)',
              WebkitTextStroke: '2px rgba(0,0,0,0.8)',
              paintOrder: 'stroke fill'
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
