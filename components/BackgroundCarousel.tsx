"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { CAROUSEL_LINKS } from '@/data/carousel/links'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import logoPng from '@/public/images/carrozzeriamilano.png'

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
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const timerRef = useRef<number | null>(null)

  // Preload dell'immagine successiva per ridurre flash
  useEffect(() => {
    if (!images.length) return
    const next = (index + 1) % images.length
    if (typeof window !== 'undefined') {
      const preImg = new window.Image()
      preImg.src = getSizedUrl(images[next], maxWidth)
    }
  }, [index, images, maxWidth])

  useEffect(() => {
    if (!images.length) return
    timerRef.current && window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => {
      setPrevIndex((curr) => (curr === null ? index : index))
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [images.length, intervalMs])

  if (!images.length) return null

  const current = getSizedUrl(images[index], maxWidth)
  const previous = prevIndex !== null ? getSizedUrl(images[prevIndex], maxWidth) : null

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Crossfade: immagine precedente e corrente */}
      {previous && (
        <motion.img
          key={`bg-prev-${prevIndex}`}
          src={previous}
          alt=""
          initial={{ opacity: 1, scale: 1.0 }}
          animate={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <motion.img
        key={`bg-current-${index}`}
        src={current}
        alt="Carrozzeria Milano - sfondo"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Velo/gradiente per leggibilità e brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-[#DC143C]/40" />

      {/* Logo semitrasparente in primo piano */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div
          className="relative w-52 sm:w-64 md:w-80 h-28 sm:h-36 md:h-44 opacity-45 drop-shadow-2xl"
          style={{ clipPath: 'ellipse(60% 45% at 50% 50%)' }}
        >
          <NextImage src={logoPng} alt="Carrozzeria Milano - Logo" fill className="object-cover" priority />
        </div>
      </div>
    </div>
  )
}

export default BackgroundCarousel
