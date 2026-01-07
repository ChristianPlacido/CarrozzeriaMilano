"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

type Review = {
  text: string
  author: string
  ago?: string
}

const REVIEWS: Review[] = [
  { text: 'Dopo un tamponamento mi hanno seguito tutto, auto sostitutiva e risultato eccellente. Consigliatissima!', author: 'Roberta Senigliesi', ago: '1 mese fa' },
  { text: 'Riparazione precisa, puntualita e grande attenzione ai dettagli. Team cordiale e professionale.', author: 'MM1979', ago: '9 mesi fa' },
  { text: 'Gestione sinistro dall inizio alla fine con cortesia e competenza; lavori a regola d arte.', author: 'Marco Ferretti', ago: '1 mese fa' },
  { text: 'Grazie mille Stefano: lavoro perfetto sulla Mini, gentilezza e professionalita.', author: 'Giovanni Carlo Burgio', ago: '1 mese fa' },
  { text: 'Pulizia e cura artigianale, trasparenza totale e consegna in anticipo.', author: 'Lucia Bianchi', ago: '2 mesi fa' },
  { text: 'Accoglienza top, comunicazione chiara e tempi rispettati: carrozzeria di fiducia.', author: 'Andrea Colombo', ago: '3 mesi fa' },
]

const GOOGLE_URL = 'https://www.google.com/search?q=Carrozzeria+Milano+Seregno+recensioni'

const Stars = () => (
  <div className="flex text-yellow-400" aria-label="Valutazione 5 stelle su 5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className="mr-1" />
    ))}
  </div>
)

const ReviewCard = ({ text, author, ago }: Review) => (
  <div className="flex w-[280px] md:w-[320px] h-[220px] flex-col rounded-2xl bg-white shadow-lg shadow-primary/10 border border-white/70 p-6 relative flex-shrink-0">
    <div className="flex items-start justify-between gap-2 mb-2 flex-shrink-0">
      <div>
        <p className="text-sm font-semibold text-slate-900">{author}</p>
        {ago && <p className="text-xs text-slate-500">{ago}</p>}
      </div>
      <span className="text-xs font-semibold text-primary">Google</span>
    </div>
    <div className="mb-2 flex-shrink-0"><Stars /></div>
    <div className="flex-1 overflow-hidden">
      <p className="text-sm text-slate-700 leading-relaxed line-clamp-4">
        {text}
      </p>
    </div>
  </div>
)

const ReviewsBar = () => {
  const controls = useAnimationControls()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const innerContainerRef = useRef<HTMLDivElement>(null)

  const startScroll = () => {
    controls.start({
      x: ['0%', '-100%'],
      transition: { repeat: Infinity, ease: 'linear', duration: 30 },
    })
  }

  useEffect(() => {
    startScroll()
    return () => controls.stop()
  }, [controls])

  const handleMouseEnter = (idx: number) => {
    setHoveredIndex(idx)
    controls.stop()
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    startScroll()
  }

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 text-slate-900 select-none py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-primary font-semibold">Recensioni Google</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">Cosa dicono chi si è fidato di noi</h2>
            <p className="text-sm text-slate-600 mt-1">Valutazione 4.9/5 basata su recensioni reali.</p>
          </div>
          <div className="flex items-center gap-3">
            <Stars />
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
            >
              Leggi tutte le recensioni
            </a>
          </div>
        </div>

        <div ref={containerRef} className="mt-8 relative overflow-hidden py-12">
          {/* Gradiente sinistro */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          
          {/* Gradiente destro */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

          <motion.div
            ref={innerContainerRef}
            className="flex gap-6"
            animate={controls}
            onMouseEnter={() => {
              controls.stop()
              setHoveredIndex(null)
            }}
            onMouseLeave={() => {
              if (hoveredIndex === null) {
                startScroll()
              }
            }}
          >
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={`first-${idx}`}
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
                animate={{ 
                  scale: hoveredIndex === idx ? 1.15 : 1,
                  y: hoveredIndex === idx ? -20 : 0,
                  zIndex: hoveredIndex === idx ? 50 : 1,
                  boxShadow: hoveredIndex === idx ? "0 30px 60px -15px rgba(0, 0, 0, 0.35)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
                className="flex-shrink-0"
              >
                <ReviewCard {...review} />
              </motion.div>
            ))}
            
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={`second-${idx}`}
                onMouseEnter={() => handleMouseEnter(REVIEWS.length + idx)}
                onMouseLeave={handleMouseLeave}
                animate={{ 
                  scale: hoveredIndex === (REVIEWS.length + idx) ? 1.15 : 1,
                  y: hoveredIndex === (REVIEWS.length + idx) ? -20 : 0,
                  zIndex: hoveredIndex === (REVIEWS.length + idx) ? 50 : 1,
                  boxShadow: hoveredIndex === (REVIEWS.length + idx) ? "0 30px 60px -15px rgba(0, 0, 0, 0.35)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
                className="flex-shrink-0"
              >
                <ReviewCard {...review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsBar
