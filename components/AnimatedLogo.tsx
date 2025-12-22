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
        {/* SVG mask to remove white background and keep only red oval */}
        <svg
          width={width}
          height={height}
          viewBox="0 0 400 160"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
          }}
        >
          <defs>
            <mask id="ovalMask">
              {/* White ellipse shape to isolate the red oval area */}
              <rect width="400" height="160" fill="white" />
              <ellipse cx="200" cy="80" rx="140" ry="65" fill="black" />
            </mask>
          </defs>
        </svg>
        
        <div 
          className="relative overflow-hidden" 
          style={{ 
            width, 
            height,
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            src={carrozzeriaLogo}
            alt="Carrozzeria Milano"
            width={width}
            height={height}
            className="object-contain"
            priority
            style={{
              filter: 'brightness(1.1) contrast(1.2)',
              mixBlendMode: 'screen'
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default AnimatedLogo
