'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import logoSrc from '@/public/images/logo.svg'

interface DynamicLogoProps {
  className?: string
}

const DynamicLogo = ({ className = '' }: DynamicLogoProps) => {
  const logoRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return

      const rect = logoRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)

      x.set(deltaX)
      y.set(deltaY)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    const logo = logoRef.current
    if (logo) {
      logo.addEventListener('mousemove', handleMouseMove)
      logo.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        logo.removeEventListener('mousemove', handleMouseMove)
        logo.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [x, y])

  return (
    <motion.div
      ref={logoRef}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative cursor-pointer ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Image
          src={logoSrc}
          alt="Carrozzeria Milano"
          width={200}
          height={80}
          className="w-full h-auto"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

export default DynamicLogo
