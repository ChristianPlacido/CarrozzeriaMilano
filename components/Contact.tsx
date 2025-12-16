'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'
import WhatsAppButton from './WhatsAppButton'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-primary">Contattaci</span>
          </h2>
          <p className="section-subtitle">
            Siamo qui per rispondere a tutte le tue domande
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8">Informazioni di Contatto</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Indirizzo</h4>
                  <p className="text-gray-600">Zona Centro</p>
                  <p className="text-gray-600">20831 Seregno (MB)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <FaPhone className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Telefono</h4>
                  <p className="text-gray-600">0362 238 800</p>
                  <p className="text-gray-600">+39 333 123 4567 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <FaEnvelope className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-600">info@carrozzeriamilano.it</p>
                  <p className="text-gray-600">preventivi@carrozzeriamilano.it</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <FaClock className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Orari di Apertura</h4>
                  <p className="text-gray-600">Lunedì - Venerdì: 8:00 - 18:00</p>
                  <p className="text-gray-600">Sabato: 8:00 - 12:30</p>
                  <p className="text-gray-600">Domenica: Chiuso</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <FaMapMarkerAlt className="text-6xl mx-auto mb-4" />
                  <p className="text-xl font-bold">Carrozzeria Milano</p>
                  <p>Seregno, MB</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="mt-6 bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 rounded-xl p-6 border border-[#25D366]/20">
              <h4 className="font-bold text-lg mb-3 text-gray-900">Contatto Rapido</h4>
              <p className="text-gray-600 mb-4">Scrivici direttamente su WhatsApp per una risposta immediata!</p>
              <WhatsAppButton 
                phoneNumber="+393331234567"
                message="Ciao, ho bisogno di informazioni"
                className="w-full justify-center"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold mb-6">Richiedi un Preventivo</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPaperPlane className="text-4xl text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Messaggio Inviato!</h4>
                  <p className="text-gray-600">Ti risponderemo al più presto.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="mario.rossi@email.it"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefono *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+39 333 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servizio Richiesto *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="riparazione">Riparazione Carrozzeria</option>
                      <option value="verniciatura">Verniciatura</option>
                      <option value="meccanica">Meccanica</option>
                      <option value="sinistri">Gestione Sinistri</option>
                      <option value="restauro">Restauro Auto d'Epoca</option>
                      <option value="detailing">Detailing</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Descrivi la tua richiesta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        <span>Invio in corso...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Invia Richiesta</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
