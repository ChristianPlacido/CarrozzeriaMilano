'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import getConfig from 'next/config'
import { FaAward, FaUsers, FaHandshake, FaClock } from 'react-icons/fa'

const stats = [
  { icon: FaClock, number: '40+', label: 'Anni di Esperienza' },
  { icon: FaUsers, number: '5000+', label: 'Clienti Soddisfatti' },
  { icon: FaHandshake, number: '100%', label: 'Garanzia Qualità' },
  { icon: FaAward, number: '20+', label: 'Premi e Riconoscimenti' },
]

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
            <p className="text-xl text-gray-600 mb-6">
              Carrozzeria Milano di Marin Stefano – Seregno (MB)
            </p>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong className="text-primary">Carrozzeria Milano di Marin Stefano</strong> è un punto di riferimento a Seregno e in Brianza
                per riparazioni di carrozzeria eseguite con precisione, competenza e attenzione al dettaglio.
              </p>
              <p>
                Ogni intervento nasce da un approccio professionale e trasparente: analisi accurata del danno, soluzioni
                tecniche efficaci e risultati impeccabili, nel pieno rispetto degli standard qualitativi del settore automotive.
              </p>
              <p>
                Qui la carrozzeria non è solo riparazione, ma cura del veicolo e rispetto del cliente. Offriamo un servizio
                <strong> completo e senza pensieri</strong>: gestione pratiche assicurative, supporto peritale, coordinamento con la compagnia
                e, quando necessario, auto sostitutiva.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                <h4 className="font-bold text-gray-900 mb-2">La Nostra Missione</h4>
                <p className="text-sm text-gray-600">Lavorare bene, sempre: qualità, trasparenza, rispetto dei tempi</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                <h4 className="font-bold text-gray-900 mb-2">I Nostri Valori</h4>
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
            {/* Immagine reale con didascalia in riquadro */}
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
                {/* Riquadro moderno future-tech trasparente con il brand di Carrozzeria Milano */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative px-8 py-4 text-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.15) 0%, rgba(220, 20, 60, 0.08) 100%)',
                      backdropFilter: 'blur(12px)',
                      border: '2px solid rgba(220, 20, 60, 0.35)',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(220, 20, 60, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {/* Effetto glow border animato */}
                    <div 
                      className="absolute -inset-0.5 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity blur"
                      style={{
                        background: 'linear-gradient(135deg, #DC143C, rgba(220, 20, 60, 0.5))',
                      }}
                    />
                    {/* Contenuto */}
                    <div className="relative z-10">
                      <p className="text-xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 drop-shadow-lg"
                        style={{ textShadow: '0 2px 8px rgba(220, 20, 60, 0.6)' }}>
                        La Tua Auto
                      </p>
                      <p className="text-lg leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80 drop-shadow-lg"
                        style={{ textShadow: '0 2px 8px rgba(220, 20, 60, 0.8)' }}>
                        Nelle Mani Giuste
                      </p>
                    </div>
                    {/* Particelle luminose corner */}
                    <div className="absolute top-0 right-0 w-1 h-1 bg-primary rounded-full opacity-40"></div>
                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-primary rounded-full opacity-40"></div>
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
