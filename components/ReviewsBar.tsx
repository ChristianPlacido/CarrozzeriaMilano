"use client"

import { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

type Review = {
  text: string
  author: string
}

const REVIEWS: Review[] = [
  { text: 'Lavoro impeccabile e tempi rispettati. Consigliatissimi!', author: 'Francesco R.' },
  { text: 'Gentili, chiari e molto rapidi. Auto perfetta.', author: 'Laura M.' },
  { text: 'Gestione sinistro senza stress: hanno fatto tutto loro.', author: 'Davide S.' },
  { text: 'Qualità altissima, trasparenza e consegna puntuale.', author: 'Marta C.' },
  { text: 'Professionalità e cura al dettaglio: auto come nuova.', author: 'Giorgio P.' },
  { text: 'Comunicazione chiara e tempi certi, top!', author: 'Elena F.' },
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
        controls.start({ x: [0, -1000] })
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

  // Start infinite scrolling animation
  controls.start({
    x: [0, -1000],
    transition: { repeat: Infinity, ease: 'linear', duration: 20 },
  })

  return (
    <div className="bg-gradient-to-r from-primary-dark to-primary text-white select-none">
      <div className="container mx-auto px-4 py-2 overflow-hidden">
        <div className="flex items-center gap-3 mb-2">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold underline underline-offset-4 decoration-white/60 hover:decoration-white"
          >
            Recensioni Google • 5.0 ★★★★★
          </a>
        </div>
        <div className="relative overflow-hidden">
          {track}
        </div>
      </div>
    </div>
  )
}

export default ReviewsBar
