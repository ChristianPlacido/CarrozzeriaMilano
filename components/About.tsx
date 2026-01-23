'use client'

import { motion, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import getConfig from 'next/config'
import { FaAward, FaUsers, FaHandshake, FaClock, FaStar } from 'react-icons/fa'

const stats = [
  { icon: FaClock, number: '40+', label: 'Anni di Esperienza' },
  { icon: FaUsers, number: '5000+', label: 'Clienti Soddisfatti' },
  { icon: FaHandshake, number: '100%', label: 'Garanzia Qualità' },
  { icon: FaAward, number: '20+', label: 'Premi e Riconoscimenti' },
]

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Carrozzeria+Milano+Seregno+recensioni'
const GOOGLE_SCORE = 4.9
const GOOGLE_REVIEWS_COUNT = 241
const CLIENTS_COUNT = 5000

const AnimatedNumber = ({ value, decimals = 0 }: { value: number; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (!ref.current) return
        const formatted = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString('it-IT')
        ref.current.textContent = formatted
      },
    })

    return () => controls.stop()
  }, [value, decimals])

  return <span ref={ref}>0</span>
}

const About = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Chi <span className="text-primary">Siamo</span>
            </h2>
            <p className="text-3xl text-gray-700 mb-6 font-semibold">
              Carrozzeria Milano di Marin Stefano – Seregno (MB)
            </p>
            <div className="space-y-6 text-gray-800 leading-relaxed max-w-3xl">
              <p className="text-xl">
                <strong className="text-primary">Carrozzeria Milano di Marin Stefano</strong> è un punto di riferimento a Seregno e in Brianza
                per riparazioni di carrozzeria eseguite con precisione, competenza e attenzione al dettaglio.
              </p>
              <p className="text-xl">
                Ogni intervento nasce da un approccio professionale e trasparente: analisi accurata del danno, soluzioni
                tecniche efficaci e risultati impeccabili, nel pieno rispetto degli standard qualitativi del settore automotive.
              </p>
              <p className="text-xl">
                Qui la carrozzeria non è solo riparazione, ma cura del veicolo e rispetto del cliente. Offriamo un servizio
                <strong> completo e senza pensieri</strong>: gestione pratiche assicurative, supporto peritale, coordinamento con la compagnia
                e, quando necessario, auto sostitutiva.
              </p>
            </div>

            {/* Barra social proof Google con numeri animati e stelle riempite */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-8 rounded-2xl bg-gradient-to-r from-gray-900 via-black to-primary p-6 text-white shadow-2xl border border-white/10"
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">Recensioni Google</p>
                  <div className="flex items-baseline gap-2 leading-none">
                    <span className="text-5xl font-black"><AnimatedNumber value={GOOGLE_SCORE} decimals={1} /></span>
                    <span className="text-2xl font-semibold">/5</span>
                  </div>
                  <p className="text-sm text-white/80">
                    <AnimatedNumber value={GOOGLE_REVIEWS_COUNT} /> recensioni verificate
                  </p>
                </div>

                {/* Stelle che compaiono una a una */}
                <div className="relative h-10 flex items-center" aria-label="Valutazione 5 stelle su 5">
                  <div className="flex text-white/25 text-3xl gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={`bg-${i}`} />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex text-yellow-400 text-3xl gap-1 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span
                        key={`fg-${i}`}
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.15 * i, ease: 'easeOut' }}
                        className="inline-flex"
                      >
                        <FaStar />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold leading-none"><AnimatedNumber value={CLIENTS_COUNT} /></span>
                  <span className="text-white/80">clienti soddisfatti</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-white/20" aria-hidden />
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary-50 underline underline-offset-4 decoration-white/50 hover:decoration-white"
                >
                  Vedi le recensioni Google →
                </a>
              </div>
            </motion.div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                <div className="relative inline-block overflow-hidden mb-2">
                  <h4 className="font-bold text-gray-900 text-base relative">
                    La Nostra Missione
                    <motion.span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      style={{
                        backgroundSize: '200% 100%',
                        maskImage: 'linear-gradient(90deg, transparent, white, transparent)',
                        WebkitMaskImage: 'linear-gradient(90deg, transparent, white, transparent)',
                      }}
                      animate={{
                        backgroundPosition: ['-200% 0', '200% 0'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatDelay: 1.5,
                      }}
                    />
                  </h4>
                </div>
                <p className="text-sm text-gray-600">Lavorare bene, sempre: qualità, trasparenza, rispetto dei tempi</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                <div className="relative inline-block overflow-hidden mb-2">
                  <h4 className="font-bold text-gray-900 text-base relative">
                    I Nostri Valori
                    <motion.span
                      className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      style={{
                        backgroundSize: '200% 100%',
                        maskImage: 'linear-gradient(90deg, transparent, white, transparent)',
                        WebkitMaskImage: 'linear-gradient(90deg, transparent, white, transparent)',
                      }}
                      animate={{
                        backgroundPosition: ['-200% 0', '200% 0'],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatDelay: 1.5,
                      }}
                    />
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  Professionalità, affidabilità moderna, attenzione autentica al risultato finale
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Titolo esterno in maiuscolo con animazione a wipe da sinistra */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mb-4 text-left"
            >
              <p className="text-[13px] font-semibold tracking-[0.35em] text-primary uppercase">Carrozzeria Milano</p>
              <div className="relative inline-block overflow-hidden">
                <motion.span
                  initial={{ x: '-120%', opacity: 0 }}
                  whileInView={{ x: '0%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="block text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight uppercase tracking-tight"
                >
                  LA TUA AUTO NELLE MANI GIUSTE
                </motion.span>
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '120%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.1 }}
                />
              </div>
            </motion.div>

            {/* Immagine reale con didascalia minimal in basso */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
              <div className="relative aspect-[4/3]">
                {(() => {
                  const { publicRuntimeConfig } = getConfig() || {}
                  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) ? publicRuntimeConfig.basePath : ''
                  const src = `${basePath}/images/La tua auto nelle mani giuste.webp`
                  const fallbackSrc = `${basePath}/images/carrozzeriamilano.png`
                  return (
                    <Image
                      src={src}
                      alt="La tua auto nelle mani giuste - Carrozzeria Milano"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      onError={(e) => {
                        // Fallback al logo se l'immagine specificata non esiste
                        // Funziona perché immagini sono servite non ottimizzate (static export)
                        // e il componente Image rende un <img>
                        // @ts-ignore
                        if (e.currentTarget && fallbackSrc) e.currentTarget.src = fallbackSrc
                      }}
                    />
                  )
                })()}
                {/* Gradient per leggibilità */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Riquadro spostato in basso per non coprire l'auto */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="relative px-6 py-4 text-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      borderRadius: '16px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div className="relative z-10 space-y-2">
                      <p className="text-xs font-light tracking-widest text-white/70 uppercase">
                        Professionalità & Affidabilità
                      </p>
                      <p className="text-sm font-light text-white/90">
                        Marin Stefano - Seregno (MB)
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white text-center shadow-lg"
                >
                  <stat.icon className="text-4xl mx-auto mb-3 opacity-80" />
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
