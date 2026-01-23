"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { CAROUSEL_LINKS, type CarouselSlide } from '@/data/carousel/links'
import { motion, AnimatePresence } from 'framer-motion'

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

const BackgroundCarousel = ({ intervalMs = 3500, maxWidth = 1920 }: BackgroundCarouselProps) => {
  const slides = useMemo(() => CAROUSEL_LINKS.filter(Boolean), [])
  const [index, setIndex] = useState(0)
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map())
  const timerRef = useRef<number | null>(null)

  // Helper per capire se slide corrente è video
  const currentSlide = slides[index]
  const isVideo = typeof currentSlide === 'object' && currentSlide.type === 'video'
  
  // Durata dinamica: video usa durationMs, immagini usano intervalMs
  const getCurrentDuration = () => {
    if (isVideo && typeof currentSlide === 'object') {
      return currentSlide.durationMs || 6000
    }
    return intervalMs
  }

  // Pausa tutti i video tranne quello attivo
  const pauseAllVideos = () => {
    videoRefs.current.forEach((video, idx) => {
      if (idx !== index) {
        try {
          video.pause()
          video.currentTime = 0
        } catch {}
      }
    })
  }

  // Play del video attivo (se presente)
  const playActiveVideo = async () => {
    if (!isVideo) return
    const video = videoRefs.current.get(index)
    if (!video) return
    try {
      video.muted = true
      video.volume = 0
      await video.play()
    } catch {}
  }

  // Effect per gestire il timer e i video
  useEffect(() => {
    if (!slides.length) return

    pauseAllVideos()
    playActiveVideo()

    if (timerRef.current) clearTimeout(timerRef.current)
    
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, getCurrentDuration())

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [index, slides.length])

  // Preload immagini successive
  useEffect(() => {
    if (!slides.length) return
    const nextIdx = (index + 1) % slides.length
    const nextSlide = slides[nextIdx]
    
    if (typeof nextSlide === 'string') {
      const preImg = new window.Image()
      preImg.src = getSizedUrl(nextSlide, maxWidth)
    }
  }, [index, slides, maxWidth])

  if (!slides.length) return null

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <AnimatePresence mode="popLayout" initial={false}>
        {typeof currentSlide === 'string' ? (
          // IMMAGINE
          <motion.img
            key={`img-${index}`}
            src={getSizedUrl(currentSlide, maxWidth)}
            alt="Carrozzeria Milano"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: 'easeInOut',
              opacity: { duration: 0.8, ease: 'linear' }
            }}
          />
        ) : (
          // VIDEO
          <motion.video
            key={`vid-${index}`}
            ref={(el) => {
              if (el) {
                videoRefs.current.set(index, el)
                el.muted = true
                el.play().catch(() => {})
              }
            }}
            src={currentSlide.src}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: 'easeInOut',
              opacity: { duration: 0.8, ease: 'linear' }
            }}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>

      {/* Velo/gradiente per leggibilità testo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50 pointer-events-none" />
    </div>
  )
}

export default BackgroundCarousel
