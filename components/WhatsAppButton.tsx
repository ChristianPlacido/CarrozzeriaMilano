import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
  variant?: 'primary' | 'secondary' | 'icon'
  className?: string
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = 'Ciao, vorrei informazioni sui vostri servizi', 
  variant = 'primary',
  className = ''
}: WhatsAppButtonProps) => {
  const formattedNumber = phoneNumber.replace(/\s/g, '').replace(/^\+/, '')
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`

  if (variant === 'icon') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl ${className}`}
        aria-label="Contattaci su WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    )
  }

  if (variant === 'secondary') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#25D366] border-2 border-[#25D366] font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${className}`}
      >
        <FaWhatsapp className="text-xl" />
        <span>WhatsApp</span>
      </a>
    )
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      <FaWhatsapp className="text-xl" />
      <span>Scrivici su WhatsApp</span>
    </a>
  )
}

export default WhatsAppButton
