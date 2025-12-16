"use client"

import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const slides = [
  { src: '/images/carousel-1.svg', alt: 'Carrozzeria Milano - lavoro 1' },
  { src: '/images/carousel-2.svg', alt: 'Carrozzeria Milano - lavoro 2' },
  { src: '/images/carousel-3.svg', alt: 'Carrozzeria Milano - lavoro 3' },
]

const ImageCarousel = () => {
  const controls = useAnimationControls()

  const startScroll = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: { repeat: Infinity, ease: 'linear', duration: 24 },
    })
  }

  useEffect(() => {
    startScroll()
    return () => controls.stop()
  }, [controls])

  return (
    <section className="bg-white py-14" id="carousel">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-primary font-semibold">I nostri lavori</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Carosello immagini</h2>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-100">
          <motion.div
            className="flex gap-4"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => startScroll()}
          >
            {[...slides, ...slides].map((slide, idx) => (
              <div key={`${slide.src}-${idx}`} className="relative h-64 sm:h-72 md:h-80 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0 overflow-hidden rounded-2xl">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            ))}
          </motion.div>
        </div>
        <p className="text-xs text-slate-500 mt-3">Sostituisci i file in /public/images/carousel-*.svg con le foto reali.</p>
      </div>
    </section>
  )
}

export default ImageCarousel
