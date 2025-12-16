'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

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

const categories = [
  { id: 'all', label: 'Tutti' },
  { id: 'riparazione', label: 'Riparazione' },
  { id: 'verniciatura', label: 'Verniciatura' },
  { id: 'restauro', label: 'Restauro' },
  { id: 'detailing', label: 'Detailing' },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg aspect-square"
            >
              {/* Placeholder Image with Red Gradient */}
              <div className="w-full h-full bg-gradient-to-br from-primary-dark via-primary to-primary-light flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <div className="text-4xl mb-2">🚗</div>
                  <p className="text-sm font-medium">{image.title}</p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
