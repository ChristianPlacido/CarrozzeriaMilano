"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { CAROUSEL_LINKS } from '@/data/carousel/links'
import { motion } from 'framer-motion'

// Sostituisce i parametri di dimensione dei link googleusercontent per avere risoluzioni più alte
const getSizedUrl = (url: string, size: number) => {
  return url
    .replace(/s\d+-w\d+-h\d+-rw/g, `s${size}`)
    .replace(/s\d+(?!-)/g, `s${size}`)
}

type BackgroundCarouselProps = {
  intervalMs?: number
  maxWidth?: number
}

const BackgroundCarousel = ({ intervalMs = 3000, maxWidth = 1920 }: BackgroundCarouselProps) => {
  const images = useMemo(() => (CAROUSEL_LINKS.length ? CAROUSEL_LINKS.filter(Boolean) : []), [])
  const [index, setIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const timerRef = useRef<number | null>(null)

  // Preload dell'immagine successiva per ridurre flash
  useEffect(() => {
    if (!images.length || images.length < 2) return
    const preloadIdx = (nextIndex + 1) % images.length
    if (typeof window !== 'undefined') {
      const preImg = new window.Image()
      preImg.src = getSizedUrl(images[preloadIdx], maxWidth)
    }
  }, [nextIndex, images, maxWidth])

  useEffect(() => {
    if (!images.length || images.length < 2) return
    timerRef.current && window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => {
      setNextIndex((i) => (i + 1) % images.length)
      setTimeout(() => {
        setIndex((i) => (i + 1) % images.length)
      }, 1000) // Sincronizza con durata transizione
    }, intervalMs)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [images.length, intervalMs])

  if (!images.length) return null

  const currentImg = getSizedUrl(images[index], maxWidth)
  const nextImg = images.length > 1 ? getSizedUrl(images[nextIndex % images.length], maxWidth) : currentImg

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Layer base: sempre visibile */}
      <img
        key={`base-${index}`}
        src={currentImg}
        alt="Carrozzeria Milano - sfondo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Layer top: crossfade continuo per loop senza pause */}
      {images.length > 1 && (
        <motion.img
          key={`top-${nextIndex}`}
          src={nextImg}
          alt=""
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Velo/gradiente intensificato per massima leggibilità della scritta */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50" />
    </div>
  )
}

export default BackgroundCarousel
