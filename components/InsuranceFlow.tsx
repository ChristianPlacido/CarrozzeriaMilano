'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { INSURANCE_COMPANIES } from '@/data/insurance-companies'

type InsuranceFlowProps = {
  isOpen: boolean
  onClose: () => void
}

const InsuranceFlow = ({ isOpen, onClose }: InsuranceFlowProps) => {
  const [step, setStep] = useState(1)
  const [selectedInsurance, setSelectedInsurance] = useState<typeof INSURANCE_COMPANIES[0] | null>(null)

  const handleInsuranceSelect = (insurance: typeof INSURANCE_COMPANIES[0]) => {
    setSelectedInsurance(insurance)
    setTimeout(() => setStep(3), 300)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep(1)
      setSelectedInsurance(null)
    }, 300)
  }

  const whatsappMessage = encodeURIComponent('Ciao, ti contatto per la gestione di un sinistro.')

  const handleBack = () => {
    if (step === 3) {
      setSelectedInsurance(null)
      setStep(2)
    } else if (step === 2) {
      setStep(1)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[220] flex items-start justify-center bg-black/60 backdrop-blur-sm px-4 pt-24 md:pt-28"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Back Button */}
            {step > 1 && (
              <button
                onClick={handleBack}
                className="absolute top-4 left-4 z-10 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-semibold text-sm transition-colors"
                aria-label="Torna indietro"
              >
                <FaArrowLeftLong className="text-base" />
                <span>Indietro</span>
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Chiudi"
            >
              <FaTimes className="text-gray-600 text-xl" />
            </button>

            {/* Step 1: Intro */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12 text-center"
                >
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-4xl">🚗</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Hai avuto un <span className="text-primary">sinistro</span>?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                      Verifica se la tua assicurazione è convenzionata con la nostra carrozzeria. 
                      Ti guideremo passo dopo passo nella gestione del sinistro.
                    </p>
                  </div>
                  <motion.button
                    onClick={() => setStep(2)}
                    className="btn-primary px-8 py-4 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Verifica ora
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Select Insurance */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      Con quale <span className="text-primary">assicurazione</span> sei?
                    </h2>
                    <p className="text-gray-600">
                      Seleziona la tua compagnia assicurativa dalla lista
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {INSURANCE_COMPANIES.map((insurance) => (
                      <motion.button
                        key={insurance.id}
                        onClick={() => handleInsuranceSelect(insurance)}
                        className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-primary rounded-2xl p-4 transition-all hover:shadow-lg flex flex-col items-center justify-center min-h-[120px]"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="w-16 h-16 mb-2 flex items-center justify-center bg-gray-100 rounded">
                          <img 
                            src={insurance.logo} 
                            alt={`Logo ${insurance.name}`}
                            className="max-w-full max-h-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              const img = e.target as HTMLImageElement;
                              img.style.display = 'none';
                              const parent = img.parentElement;
                              if (parent) {
                                parent.textContent = insurance.name.substring(0, 2).toUpperCase();
                                parent.className = 'w-16 h-16 mb-2 flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 rounded text-white font-bold text-lg';
                              }
                            }}
                          />
                        </div>
                        <p className="text-xs font-semibold text-gray-800 group-hover:text-primary transition-colors text-center">
                          {insurance.name}
                        </p>
                        {insurance.partnered && (
                          <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full" title="Convenzionati"></span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Info Banner SEO-Friendly */}
                  <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-center">
                      🤝 Convenzioni con le Principali Compagnie Assicurative Italiane
                    </h3>
                    <p className="text-sm text-gray-700 text-center">
                      <strong>Carrozzeria Milano</strong> è convenzionata con le maggiori compagnie di assicurazione auto in Italia 
                      tra cui <strong>Allianz, Generali, UnipolSai, Zurich, Reale Mutua, Poste Italiane</strong> e molte altre. 
                      Gestiamo sinistri stradali, riparazioni carrozzeria post-incidente e pratiche assicurative con 
                      supporto peritale completo per tutte le assicurazioni RC Auto.
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-600">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>Bollino verde = Convenzionati</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Result */}
              {step === 3 && selectedInsurance && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8 md:p-12"
                >
                  {selectedInsurance.partnered ? (
                    // Partnered Insurance
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', duration: 0.6 }}
                        className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6"
                      >
                        <FaCheckCircle className="text-5xl text-green-500" />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Ottima notizia!
                      </h2>
                      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
                        <div className="flex items-center justify-center gap-4 mb-3">
                          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded">
                            <img 
                              src={selectedInsurance.logo} 
                              alt={`Logo ${selectedInsurance.name}`}
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                                const parent = img.parentElement;
                                if (parent) {
                                  parent.textContent = selectedInsurance.name.substring(0, 2).toUpperCase();
                                  parent.className = 'w-16 h-16 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-50 rounded text-green-700 font-bold text-lg';
                                }
                              }}
                            />
                          </div>
                          <p className="text-xl font-bold text-gray-800">{selectedInsurance.name}</p>
                        </div>
                        <p className="text-lg text-gray-700">
                          Siamo <span className="font-bold text-primary">convenzionati</span> con la tua assicurazione!
                        </p>
                      </div>
                      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        La <strong>Carrozzeria Milano</strong> è partner ufficiale di {selectedInsurance.name}. 
                        Possiamo gestire tutto il processo del sinistro per te, dalla pratica amministrativa 
                        alla riparazione del veicolo. <strong>Contattaci subito per iniziare!</strong>
                      </p>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                          href={`https://wa.me/393331234567?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaWhatsapp className="text-2xl" />
                          <span>Contatta su WhatsApp</span>
                        </motion.a>
                        <motion.a
                          href="tel:+390362328901"
                          className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaPhone className="text-xl" />
                          <span>Chiama ora</span>
                        </motion.a>
                      </div>
                      
                      <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                        <p className="text-sm text-gray-600">
                          💡 <strong>Suggerimento:</strong> Porta con te la documentazione del sinistro 
                          quando vieni in carrozzeria o inviacela su WhatsApp.
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Not Partnered Insurance
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', duration: 0.6 }}
                        className="w-24 h-24 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6"
                      >
                          <span className="text-5xl">⚠️</span>
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Nessun problema!
                      </h2>
                      <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 mb-8">
                        <div className="flex items-center justify-center gap-4 mb-3">
                          <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded">
                            <img 
                              src={selectedInsurance.logo} 
                              alt={`Logo ${selectedInsurance.name}`}
                              className="max-w-full max-h-full object-contain"
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                                const parent = img.parentElement;
                                if (parent) {
                                  parent.textContent = selectedInsurance.name.substring(0, 2).toUpperCase();
                                  parent.className = 'w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 rounded text-orange-700 font-bold text-lg';
                                }
                              }}
                            />
                          </div>
                          <p className="text-xl font-bold text-gray-800">{selectedInsurance.name}</p>
                        </div>
                        <p className="text-lg text-gray-700">
                          Non siamo convenzionati direttamente con questa assicurazione
                        </p>
                      </div>
                      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Anche se non siamo convenzionati con {selectedInsurance.name}, possiamo comunque 
                        <strong> gestire il tuo sinistro</strong>! Abbiamo esperienza con tutte le compagnie 
                        assicurative e possiamo supportarti nelle pratiche. <strong>Contattaci per maggiori informazioni!</strong>
                      </p>
                      
                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                          href={`https://wa.me/393331234567?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaWhatsapp className="text-2xl" />
                          <span>Contatta su WhatsApp</span>
                        </motion.a>
                        <motion.a
                          href="tel:+390362328901"
                          className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaPhone className="text-xl" />
                          <span>Chiama ora</span>
                        </motion.a>
                      </div>
                      
                      <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                        <p className="text-sm text-gray-600">
                          💡 <strong>Nota:</strong> Possiamo comunque fornirti un preventivo dettagliato 
                          e assisterti nella gestione della pratica assicurativa.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InsuranceFlow
