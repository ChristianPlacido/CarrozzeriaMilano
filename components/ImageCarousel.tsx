"use client"

import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import logoSrc from '@/public/images/logo.svg'
import slide1 from '@/public/images/carousel-1.svg'
import slide2 from '@/public/images/carousel-2.svg'
import slide3 from '@/public/images/carousel-3.svg'
import { CAROUSEL_LINKS } from '@/data/carousel/links'

const slides = [
  { src: slide1, alt: 'Carrozzeria Milano - lavoro 1' },
  { src: slide2, alt: 'Carrozzeria Milano - lavoro 2' },
  { src: slide3, alt: 'Carrozzeria Milano - lavoro 3' },
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

  const externalSlides = CAROUSEL_LINKS.filter(Boolean)

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
            {(
              externalSlides.length
                ? [...externalSlides, ...externalSlides]
                : [...slides, ...slides]
            ).map((item: any, idx: number) => (
              <div key={`slide-${idx}`} className="relative h-64 sm:h-72 md:h-80 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0 overflow-hidden rounded-2xl">
                {externalSlides.length ? (
                  <img
                    src={item}
                    alt={`Carrozzeria Milano - lavoro ${idx+1}`}
                    className="w-full h-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                ) : (
                  <Image
                    src={(item as {src:any}).src || item}
                    alt={(item as {alt?:string}).alt || `Carrozzeria Milano - lavoro ${idx+1}`}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 30vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Logo overlay in primo piano */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative w-40 sm:w-52 md:w-64 lg:w-72 opacity-70 drop-shadow-lg">
              <Image
                src={logoSrc}
                alt="Carrozzeria Milano"
                fill
                sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-3">Per usare foto esterne, incolla i link in [data/carousel/links.ts](data/carousel/links.ts). In assenza di link, vengono mostrati i placeholder locali.</p>
      </div>
    </section>
  )
}

export default ImageCarousel
