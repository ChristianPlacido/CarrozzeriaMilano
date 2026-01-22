'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const galleryImages = [
  { id: 1, title: 'Riparazione Paraurti', category: 'riparazione' },
  { id: 2, title: 'Verniciatura Completa', category: 'verniciatura' },
  { id: 3, title: 'Restauro Auto d\'Epoca', category: 'restauro' },
  { id: 4, title: 'Detailing Professionale', category: 'detailing' },
  { id: 5, title: 'Riparazione Fiancata', category: 'riparazione' },
  { id: 6, title: 'Lucidatura', category: 'detailing' },
  { id: 7, title: 'Verniciatura Sportiva', category: 'verniciatura' },
  { id: 8, title: 'Restauro Classica', category: 'restauro' },
]

const Gallery = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (direction: 'left' | 'right') => {
    const node = carouselRef.current
    if (!node) return

    const scrollAmount = node.clientWidth * 0.8
    node.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

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

        {/* Carousel */}
        <div className="relative">
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg aspect-square min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] snap-center"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-4xl mb-2">🚗</div>
                    <p className="text-sm font-medium">{image.title}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="hidden md:flex items-center gap-3 absolute inset-y-0 left-2">
            <button
              aria-label="Scorri indietro"
              onClick={() => scrollCarousel('left')}
              className="h-12 w-12 rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center"
            >
              <
            </button>
          </div>
          <div className="hidden md:flex items-center gap-3 absolute inset-y-0 right-2">
            <button
              aria-label="Scorri avanti"
              onClick={() => scrollCarousel('right')}
              className="h-12 w-12 rounded-full bg-white shadow-lg border border-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center"
            >
              >
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Vuoi vedere più esempi del nostro lavoro? Visita il nostro showroom!
          </p>
          <a href="#contatti" className="btn-primary">
            Prenota una Visita
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
