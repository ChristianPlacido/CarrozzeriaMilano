'use client'

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

const galleryImages = [
  { id: 1, title: 'Riparazione Paraurti', category: 'riparazione', image: '/CarrozzeriaMilano/images/riparazioneparaurti.webp' },
  { id: 2, title: 'Verniciatura Completa', category: 'verniciatura', image: '/CarrozzeriaMilano/images/verniciaturacompleta.webp' },
  { id: 3, title: 'Restauro Auto d\'Epoca', category: 'restauro', image: '/CarrozzeriaMilano/images/restauroautoepoca.png' },
  { id: 4, title: 'Detailing Professionale', category: 'detailing', image: 'https://images.unsplash.com/photo-1551894416-1a1b5f2e4bc7?w=600&h=600&fit=crop' },
  { id: 5, title: 'Riparazione Fiancata', category: 'riparazione', image: 'https://images.unsplash.com/photo-1486262715619-f8ddc090c5e4?w=600&h=600&fit=crop' },
  { id: 6, title: 'Lucidatura', category: 'detailing', image: 'https://images.unsplash.com/photo-1609432373949-53583b1b9da3?w=600&h=600&fit=crop' },
  { id: 7, title: 'Verniciatura Sportiva', category: 'verniciatura', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=600&h=600&fit=crop' },
  { id: 8, title: 'Restauro Classica', category: 'restauro', image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=600&fit=crop' },
]

const Gallery = () => {
  const controls = useAnimationControls()

  const startMarquee = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: { repeat: Infinity, ease: 'linear', duration: 18 },
    })
  }

  useEffect(() => {
    startMarquee()
    return () => controls.stop()
  }, [controls])

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

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

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
