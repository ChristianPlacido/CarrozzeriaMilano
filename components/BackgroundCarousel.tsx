"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import { CAROUSEL_LINKS } from '@/data/carousel/links'

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
  const timerRef = useRef<number | null>(null)

  // Preload dell'immagine successiva per ridurre flash
  useEffect(() => {
    if (!images.length) return
    const next = (index + 1) % images.length
    const img = new Image()
    img.src = getSizedUrl(images[next], maxWidth)
  }, [index, images, maxWidth])

  useEffect(() => {
    if (!images.length) return
    timerRef.current && window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [images.length, intervalMs])

  if (!images.length) return null

  const current = getSizedUrl(images[index], maxWidth)

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Immagine di sfondo con fade minimalista */}
      <img
        key={`bg-${index}`}
        src={current}
        alt="Carrozzeria Milano - sfondo"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
      />

      {/* Velo/gradiente per leggibilità e brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-[#DC143C]/40" />

      {/* Logo semitrasparente in primo piano */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <img
          src="/images/carrozzeriamilano.png"
          alt="Carrozzeria Milano - Logo"
          className="w-48 sm:w-64 md:w-80 h-auto opacity-40 drop-shadow-2xl"
        />
      </div>
    </div>
  )
}

export default BackgroundCarousel
