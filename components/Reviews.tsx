"use client"

import { motion } from 'framer-motion'

const reviews = [
  {
    text: 'Lavoro impeccabile, massima professionalità e tempi rispettati. Consigliatissimi!',
    author: 'Francesco R.'
  },
  {
    text: 'Gentili, chiari e molto rapidi. Auto riconsegnata perfetta.',
    author: 'Laura M.'
  },
  {
    text: 'Gestione sinistro senza stress, si sono occupati di tutto.',
    author: 'Davide S.'
  }
]

const Reviews = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Recensioni <span className="text-primary">Google</span>
          </h2>
          <p className="section-subtitle">Fiducia reale, testimonianze reali</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="text-5xl font-extrabold text-primary leading-none">4,9<span className="text-2xl align-top">/5</span></div>
              <div className="text-gray-600">Valutazione media Google</div>
              <div className="text-gray-500 text-sm">Decine di recensioni verificate</div>
            </div>
            <a
              href="https://www.google.com/search?q=Carrozzeria+Milano+Seregno+recensioni"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Leggi tutte le recensioni
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <p className="text-gray-700 mb-4">“{r.text}”</p>
              <div className="text-sm text-gray-500">— {r.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
