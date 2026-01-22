"use client"

import Image from 'next/image'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
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

  // Normalizza i link di Google per richiedere risoluzioni maggiori
  const getSizedUrl = (url: string, size: number) => {
    // sostituisce pattern tipo s680-w680-h510-rw o s680 con s{size}
    return url
      .replace(/s\d+-w\d+-h\d+-rw/g, `s${size}`)
      .replace(/s\d+(?!-)/g, `s${size}`)
  }

  // Crea srcSet multiplo per schermi ad alta densità
  const buildSrcSet = (url: string) => {
    const sizes = [800, 1200, 1600]
    return sizes.map((s) => `${getSizedUrl(url, s)} ${s}w`).join(', ')
  }

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

  // Gestione logo centrale: prova PNG in /public/images, fallback a SVG
  const [pngLogoOk, setPngLogoOk] = useState(true)

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
            className="flex gap-4 px-[10vw] md:px-0"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => startScroll()}
          >
            {(
              externalSlides.length
                ? [...externalSlides, ...externalSlides]
                : [...slides, ...slides]
            ).map((item: any, idx: number) => (
              <div key={`slide-${idx}`} className="relative w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0 overflow-hidden rounded-2xl aspect-[4/3] snap-center">
                {externalSlides.length ? (
                  <img
                    src={getSizedUrl(item as string, 1200)}
                    alt={`Carrozzeria Milano - lavoro ${idx+1}`}
                    className="w-full h-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    srcSet={buildSrcSet(item as string)}
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 30vw"
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
            <div className="relative w-40 sm:w-52 md:w-64 lg:w-72 opacity-80 drop-shadow-lg">
              {/* Tenta PNG personalizzato se presente in /public/images/carrozzeriamilano.png */}
              {pngLogoOk ? (
                <img
                  src="/images/carrozzeriamilano.png"
                  alt="Carrozzeria Milano"
                  className="w-full h-full object-contain"
                  onError={() => setPngLogoOk(false)}
                />
              ) : (
                <Image
                  src={logoSrc}
                  alt="Carrozzeria Milano"
                  fill
                  sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-contain"
                  priority
                />
              )}
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-3">Per foto esterne, incolla i link in [data/carousel/links.ts](data/carousel/links.ts). I link Google vengono richiesti in alta risoluzione. Inserisci il logo personalizzato in public/images/carrozzeriamilano.png per mostrarlo al centro.</p>
      </div>
    </section>
  )
}

export default ImageCarousel
