'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import logoPng from '@/public/images/carrozzeriamilano.png'
import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'
import BackgroundCarousel from './BackgroundCarousel'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Carosello a tutta larghezza come sfondo */}
      <BackgroundCarousel />
      {/* Background Pattern sopra il gradiente, molto discreto */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero minimale: nessun contenuto testuale, solo sfondo/carousel e logo overlay */}
      <div className="relative z-10" aria-hidden="true" />

      {/* Scroll Indicator */}
      {/* Indicator nascosto per estetica minimale */}
    </section>
  )
}

export default Hero
