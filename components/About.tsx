'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
                <Image
                  src="/images/mani-giuste.jpg"
                  alt="Consegna chiavi in officina - Carrozzeria Milano"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Gradient per leggibilità */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Riquadro con la frase sopra l'immagine */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-white/90 border border-gray-200 rounded-lg px-4 py-2 shadow-md text-gray-900 text-center backdrop-blur-sm">
                    <p className="text-2xl font-bold leading-tight">La Tua Auto</p>
                    <p className="text-xl leading-tight">Nelle Mani Giuste</p>
                  </div>
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
