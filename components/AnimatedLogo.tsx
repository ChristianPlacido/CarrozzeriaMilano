'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import carrozzeriaLogo from '@/public/images/carrozzeriamilano.png'

interface AnimatedLogoProps {
  width: number
  height: number
  className?: string
}

const AnimatedLogo = ({ width, height, className = '' }: AnimatedLogoProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.5
      }}
      style={{
        filter: 'drop-shadow(0 0 8px rgba(220, 20, 60, 0.3))'
      }}
    >
      <motion.div
        whileHover={{
          filter: 'drop-shadow(0 0 20px rgba(220, 20, 60, 0.6))'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative" style={{ width, height }}>
          <Image
            src={carrozzeriaLogo}
            alt="Carrozzeria Milano"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AnimatedLogo
