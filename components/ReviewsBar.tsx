"use client"

import { useEffect, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

type Review = {
  text: string
  author: string
}

const REVIEWS: Review[] = [
  { text: 'Dopo un tamponamento mi hanno seguito tutto, auto sostitutiva e risultato eccellente. Consigliatissima!', author: 'Roberta Senigliesi' },
  { text: 'Riparazione precisa, puntualita e grande attenzione ai dettagli. Team cordiale e professionale.', author: 'MM1979' },
  { text: 'Gestione sinistro dall inizio alla fine con cortesia e competenza; lavori a regola d arte.', author: 'Cliente Google' },
  { text: 'Grazie mille Stefano: lavoro perfetto sulla Mini, gentilezza e professionalita.', author: 'Giovanni Carlo Burgio' },
  { text: 'Pulizia e cura artigianale, trasparenza totale e consegna in anticipo.', author: 'Cliente Google' },
  { text: 'Accoglienza top, comunicazione chiara e tempi rispettati: carrozzeria di fiducia.', author: 'Cliente Google' },
]

const GOOGLE_URL = 'https://www.google.com/search?q=Carrozzeria+Milano+Seregno+recensioni'

const ReviewChip = ({ text, author }: Review) => (
  <a
    href={GOOGLE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full px-4 py-2 shrink-0"
  >
    <div className="flex items-center text-yellow-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className="mr-0.5" />
      ))}
    </div>
    <span className="whitespace-nowrap">“{text}” — {author}</span>
  </a>
)

const ReviewsBar = () => {
  const controls = useAnimationControls()
  const [isPaused, setPaused] = useState(false)

  const startScroll = () => {
    controls.start({
      x: [0, -1000],
      transition: { repeat: Infinity, ease: 'linear', duration: 22 },
    })
  }

  useEffect(() => {
    startScroll()
    return () => controls.stop()
  }, [controls])

  const track = (
    <motion.div
      className="flex items-center gap-4 pr-4"
      animate={controls}
      onHoverStart={() => {
        setPaused(true)
        controls.stop()
      }}
      onHoverEnd={async () => {
        setPaused(false)
        startScroll()
      }}
    >
      {REVIEWS.map((r, idx) => (
        <ReviewChip key={`a-${idx}`} {...r} />
      ))}
      {REVIEWS.map((r, idx) => (
        <ReviewChip key={`b-${idx}`} {...r} />
      ))}
    </motion.div>
  )

  return (
    <section className="bg-gradient-to-r from-primary-dark to-primary text-white select-none">
      <div className="container mx-auto px-4 py-5 overflow-hidden">
        <div className="flex flex-col gap-1 mb-3">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold underline underline-offset-4 decoration-white/60 hover:decoration-white"
          >
            Recensioni Google • 5.0 ★★★★★
          </a>
          <p className="text-xs md:text-sm text-white/80">
            Scorri le recensioni reali dei clienti e <a href={GOOGLE_URL} className="underline decoration-white/60 hover:decoration-white" target="_blank" rel="noopener noreferrer">leggi tutte su Google</a>.
          </p>
        </div>
        <div className="relative overflow-hidden">
          {track}
        </div>
      </div>
    </section>
  )
}

export default ReviewsBar
