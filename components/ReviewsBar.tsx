"use client"

import { useEffect, useState } from 'react'
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
  { text: 'Gestione sinistro dall inizio alla fine con cortesia e competenza; lavori a regola d arte.', author: 'Cliente Google', ago: '1 mese fa' },
  { text: 'Grazie mille Stefano: lavoro perfetto sulla Mini, gentilezza e professionalita.', author: 'Giovanni Carlo Burgio', ago: '1 mese fa' },
  { text: 'Pulizia e cura artigianale, trasparenza totale e consegna in anticipo.', author: 'Cliente Google', ago: '2 mesi fa' },
  { text: 'Accoglienza top, comunicazione chiara e tempi rispettati: carrozzeria di fiducia.', author: 'Cliente Google', ago: '3 mesi fa' },
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
  <motion.div
    className="flex w-[260px] md:w-[300px] flex-col justify-between rounded-2xl bg-white shadow-lg shadow-primary/10 border border-white/70 p-5 hover:shadow-xl hover:shadow-primary/20 transition-all"
    whileHover={{ scale: 1.06 }}
  >
    <div className="flex items-start justify-between gap-2 mb-2">
      <div>
        <p className="text-sm font-semibold text-slate-900">{author}</p>
        {ago && <p className="text-xs text-slate-500">{ago}</p>}
      </div>
      <span className="text-xs font-semibold text-primary">Google</span>
    </div>
    <Stars />
    <p className="mt-3 text-sm text-slate-700 leading-relaxed line-clamp-3">{text}</p>
  </motion.div>
)

const ReviewsBar = () => {
  const controls = useAnimationControls()
  const [highlighted, setHighlighted] = useState<Review | null>(null)

  const startScroll = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: { repeat: Infinity, ease: 'linear', duration: 28 },
    })
  }

  useEffect(() => {
    startScroll()
    return () => controls.stop()
  }, [controls])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 text-slate-900 select-none">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.1em] text-primary font-semibold">Recensioni Google</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-1">Cosa dicono chi si e fidato di noi</h2>
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

        <div className="mt-6 relative overflow-hidden">
          <motion.div
            className="flex gap-5 pr-5"
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => startScroll()}
          >
            {[...REVIEWS, ...REVIEWS].map((review, idx) => (
              <motion.button
                key={`${review.author}-${idx}`}
                type="button"
                onClick={() => setHighlighted(review)}
                className="focus:outline-none"
                whileHover={{ scale: 1.04 }}
              >
                <ReviewCard {...review} />
              </motion.button>
            ))}
          </motion.div>
          {highlighted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="pointer-events-auto mt-6 rounded-2xl bg-white shadow-2xl shadow-primary/20 border border-primary/20 p-5 md:p-6 relative"
            >
              <div className="absolute -top-3 left-10 h-6 w-6 rotate-45 bg-white border-l border-t border-primary/20" aria-hidden="true" />
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-slate-900">{highlighted.author}</p>
                  {highlighted.ago && <p className="text-xs text-slate-500">{highlighted.ago}</p>}
                </div>
                <button
                  onClick={() => setHighlighted(null)}
                  className="text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Chiudi
                </button>
              </div>
              <div className="mt-2"><Stars /></div>
              <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed">{highlighted.text}</p>
              <div className="mt-3">
                <a
                  href={GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary underline underline-offset-4 decoration-primary/60 hover:decoration-primary"
                >
                  Leggi su Google
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ReviewsBar
