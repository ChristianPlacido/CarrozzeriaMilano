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
      {/* Hero minimale: solo scritta centrale */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className={`${displayFont.className} text-white text-6xl sm:text-7xl md:text-8xl tracking-tight drop-shadow-xl`}>CARROZZERIA</h1>
          <h2 className={`${displayFont.className} text-primary-light text-5xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-xl`}>MILANO</h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto drop-shadow-md">
            Eccellenza artigianale e affidabilità moderna a Seregno.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* Indicator nascosto per estetica minimale */}
    </section>
  )
}

export default Hero
