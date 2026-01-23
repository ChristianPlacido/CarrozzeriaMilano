'use client'

import { motion, useAnimationControls, animate, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const galleryImages = [
  { id: 1, title: 'Riparazione Paraurti', category: 'riparazione', image: '/CarrozzeriaMilano/images/riparazioneparaurti.webp' },
  { id: 2, title: 'Verniciatura Completa', category: 'verniciatura', image: '/CarrozzeriaMilano/images/verniciaturacompleta.webp' },
  { id: 3, title: 'Restauro Auto d\'Epoca', category: 'restauro', image: '/CarrozzeriaMilano/images/restauroautoepoca.png' },
  { id: 4, title: 'Detailing Professionale', category: 'detailing', image: '/CarrozzeriaMilano/images/detailingprofessionale.png' },
  { id: 5, title: 'Riparazione Fiancata', category: 'riparazione', image: '/CarrozzeriaMilano/images/riparazionefiancata.webp' },
  { id: 6, title: 'Lucidatura', category: 'detailing', image: 'https://images.unsplash.com/photo-1609432373949-53583b1b9da3?w=600&h=600&fit=crop' },
  { id: 7, title: 'Verniciatura Sportiva', category: 'verniciatura', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600&h=600&fit=crop' },
  { id: 8, title: 'Restauro Classica', category: 'restauro', image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=600&fit=crop' },
]

const GOOGLE_REVIEWS = 187
const GOOGLE_SCORE = 4.9
const CLIENTI_SODDISFATTI = 5200
const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place/Carrozzeria+Milano+Seregno'
const KEYWORDS = ['PROFESSIONALITÀ', 'PRECISIONE', 'CURA NEI DETTAGLI', 'CARROZZERIA MILANO']

type CountUpProps = {
  target: number
  suffix?: string
  decimals?: number
  duration?: number
}

const CountUp = ({ target, suffix = '', decimals = 0, duration = 1.8 }: CountUpProps) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Number(latest.toFixed(decimals)))

  useEffect(() => {
    const controls = animate(count, target, { duration, ease: 'easeOut' })
    return () => controls.stop()
  }, [count, target, duration])

  return (
    <span className="inline-flex items-baseline gap-1 text-3xl font-extrabold text-primary drop-shadow-sm">
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-lg text-gray-700">{suffix}</span>}
    </span>
  )
}

const Gallery = () => {
  const controls = useAnimationControls()
  const [keywordIndex, setKeywordIndex] = useState(0)

  const startMarquee = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: { repeat: Infinity, ease: 'linear', duration: 12 },
    })
  }

  useEffect(() => {
    startMarquee()
    return () => controls.stop()
  }, [controls])

  useEffect(() => {
    const id = setInterval(() => {
      setKeywordIndex((i) => (i + 1) % KEYWORDS.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            I Nostri <span className="text-primary">Lavori</span>
          </h2>
          <p className="section-subtitle">
            Alcuni esempi della qualità del nostro lavoro
          </p>
        </motion.div>

        {/* Loop parole chiave in dissolvenza - sostituisce il titolo statico */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={KEYWORDS[keywordIndex]}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.8 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-gray-900"
              style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
            >
              {KEYWORDS[keywordIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            animate={controls}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => startMarquee()}
            onTouchStart={() => controls.stop()}
            onTouchEnd={() => startMarquee()}
            className="flex gap-6 px-1"
          >
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index % galleryImages.length) * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg aspect-square min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] flex-shrink-0"
              >
                {image.image ? (
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 320px"
                    onError={(e) => {
                      // Fallback gradiente se l'immagine non carica
                      const img = e.currentTarget as HTMLImageElement
                      img.style.display = 'none'
                      const parent = img.parentElement
                      if (parent) {
                        parent.style.background = 'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)'
                        parent.style.display = 'flex'
                        parent.style.alignItems = 'center'
                        parent.style.justifyContent = 'center'
                        const div = document.createElement('div')
                        div.className = 'text-white text-center'
                        div.innerHTML = `<div class="text-4xl mb-2">🚗</div><p class="text-sm font-medium">${image.title}</p>`
                        parent.appendChild(div)
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <div className="text-4xl mb-2">🚗</div>
                      <p className="text-sm font-medium">{image.title}</p>
                    </div>
                  </div>
                )}

                {/* Overlay titolo permanente in basso con effetto shiny continuo */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent px-4 py-5 flex items-center justify-center">
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white font-bold text-lg text-center leading-tight uppercase tracking-wider relative"
                    style={{
                      textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 0 20px rgba(220,20,60,0.35)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {image.title}
                    {/* Effetto shiny animato continuo */}
                    <motion.span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent"
                      style={{
                        backgroundSize: '200% 100%',
                        maskImage: 'linear-gradient(90deg, transparent, white, transparent)',
                        WebkitMaskImage: 'linear-gradient(90deg, transparent, white, transparent)',
                      }}
                      animate={{
                        backgroundPosition: ['-200% 0', '200% 0'],
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Blocchi recensioni e numeri animati */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="space-y-4 w-full md:w-auto">
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400 text-4xl drop-shadow-lg" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} className="drop-shadow" />
                  ))}
                </div>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors"
                >
                  {GOOGLE_SCORE.toFixed(1)}/5 · Recensioni Google
                </a>
              </div>
              <p className="text-gray-700 max-w-xl">
                Feedback reali dei nostri clienti: punteggio eccellente e recensioni verificate. Guarda le opinioni su Google o contattaci per scoprire come possiamo aiutarti.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Vedi le recensioni Google
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-2">Recensioni Google</p>
                <CountUp target={GOOGLE_REVIEWS} suffix="+" />
                <p className="text-gray-600 mt-1">Clienti che hanno lasciato una recensione</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-2">Clienti soddisfatti</p>
                <CountUp target={CLIENTI_SODDISFATTI} suffix="+" />
                <p className="text-gray-600 mt-1">Auto riparate e riconsegnate con cura</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.15em] text-gray-500 mb-2">Punteggio medio</p>
                <CountUp target={GOOGLE_SCORE} decimals={1} suffix="/5" />
                <p className="text-gray-600 mt-1">Valutazione complessiva su Google</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
