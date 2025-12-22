'use client'

import { motion } from 'framer-motion'
import { Bebas_Neue } from 'next/font/google'
import BackgroundCarousel from './BackgroundCarousel'

const displayFont = Bebas_Neue({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Carosello a tutta larghezza come sfondo */}
      <BackgroundCarousel />
      
      {/* Logo animato SVG con effetto disegno - posizionato sopra il testo */}
      <motion.div
        className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 400"
          className="w-full h-auto drop-shadow-2xl hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.8)]"
          style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.3))' }}
        >
          <defs>
            <style>{`
              @keyframes drawStroke {
                from {
                  stroke-dashoffset: 1000;
                }
                to {
                  stroke-dashoffset: 0;
                }
              }
              
              @keyframes glow {
                0%, 100% {
                  filter: drop-shadow(0 0 15px rgba(255,255,255,0.5));
                }
                50% {
                  filter: drop-shadow(0 0 30px rgba(255,255,255,0.8)) drop-shadow(0 0 40px rgba(220,20,60,0.3));
                }
              }
              
              .car-line {
                stroke: white;
                stroke-width: 3;
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
                animation: drawStroke 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                opacity: 0.95;
              }
              
              .text-line {
                stroke: white;
                stroke-width: 2.5;
                fill: none;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-dasharray: 800;
                stroke-dashoffset: 800;
                animation: drawStroke 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                animation-delay: 1s;
                opacity: 0.95;
              }
              
              .logo-group {
                animation: glow 3s ease-in-out infinite;
              }
              
              .logo-group:hover .car-line,
              .logo-group:hover .text-line {
                animation: drawStroke 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
              }
              
              .logo-group:hover {
                animation: glow 1.2s ease-in-out infinite;
              }
            `}</style>
          </defs>

          <g className="logo-group">
            {/* Silhouette Auto Stilizzata */}
            <g className="car-body">
              {/* Cofano */}
              <path className="car-line" d="M 150 220 Q 200 180 280 170 L 300 180 Q 310 190 310 210" strokeDasharray="500" strokeDashoffset="500" style={{ animation: 'drawStroke 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards' }}/>
              
              {/* Tetto */}
              <path className="car-line" d="M 310 210 L 350 190 Q 420 160 520 160 Q 600 160 650 190 L 680 210" strokeDasharray="600" strokeDashoffset="600" style={{ animation: 'drawStroke 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '0.2s' }}/>
              
              {/* Cofano posteriore */}
              <path className="car-line" d="M 680 210 L 700 180 L 750 170 Q 850 180 920 220" strokeDasharray="500" strokeDashoffset="500" style={{ animation: 'drawStroke 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '0.4s' }}/>
              
              {/* Linea bassa auto */}
              <path className="car-line" d="M 150 220 L 200 260 L 920 260 L 950 230" strokeDasharray="800" strokeDashoffset="800" style={{ animation: 'drawStroke 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '0.3s' }}/>
              
              {/* Ruota anteriore */}
              <circle className="car-line" cx="280" cy="270" r="35" strokeDasharray="220" strokeDashoffset="220" style={{ animation: 'drawStroke 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '1.5s' }}/>
              
              {/* Ruota posteriore */}
              <circle className="car-line" cx="800" cy="270" r="35" strokeDasharray="220" strokeDashoffset="220" style={{ animation: 'drawStroke 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '1.7s' }}/>
              
              {/* Cerchio interno ruota anteriore */}
              <circle className="car-line" cx="280" cy="270" r="20" strokeDasharray="125" strokeDashoffset="125" style={{ animation: 'drawStroke 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '2.2s' }}/>
              
              {/* Cerchio interno ruota posteriore */}
              <circle className="car-line" cx="800" cy="270" r="20" strokeDasharray="125" strokeDashoffset="125" style={{ animation: 'drawStroke 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '2.4s' }}/>
              
              {/* Finestrino anteriore */}
              <path className="car-line" d="M 320 210 L 340 175 Q 360 165 400 165" strokeDasharray="150" strokeDashoffset="150" style={{ animation: 'drawStroke 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '0.8s' }}/>
              
              {/* Finestrino posteriore */}
              <path className="car-line" d="M 640 165 Q 680 165 700 210 L 680 210" strokeDasharray="150" strokeDashoffset="150" style={{ animation: 'drawStroke 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '1s' }}/>
            </g>

            {/* Testo CARROZZERIA */}
            <g className="text-group">
              <text x="100" y="330" fontFamily="'Arial Black', Arial, sans-serif" fontSize="72" fontWeight="900" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" letterSpacing="2">
                <tspan className="text-line" style={{ strokeDasharray: '900', strokeDashoffset: '900', animation: 'drawStroke 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '2.8s' }}>CARROZZERIA</tspan>
              </text>
              
              {/* Testo MILANO */}
              <text x="950" y="360" fontFamily="'Arial Black', Arial, sans-serif" fontSize="44" fontWeight="900" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" letterSpacing="3" textAnchor="end">
                <tspan className="text-line" style={{ strokeDasharray: '450', strokeDashoffset: '450', animation: 'drawStroke 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards', animationDelay: '4s' }}>MILANO</tspan>
              </text>
            </g>
          </g>
        </svg>
      </motion.div>

      {/* Hero: scritta centrale con bordo marcato senza riquadro - meno visibile dietro il logo */}
      <div className="relative z-10 flex items-center justify-center w-full h-full text-center px-4">
        <div className="space-y-2 opacity-60">
          <motion.h1 
            className={`${displayFont.className} text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight`}
            style={{ 
              textShadow: '0 0 30px rgba(0,0,0,0.95), 0 0 15px rgba(0,0,0,0.9), 3px 3px 6px rgba(0,0,0,1)',
              WebkitTextStroke: '2px rgba(0,0,0,0.8)',
              paintOrder: 'stroke fill'
            }}
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            CARROZZERIA
          </motion.h1>
          <motion.h2 
            className={`${displayFont.className} text-primary-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight`}
            style={{ 
              textShadow: '0 0 30px rgba(0,0,0,0.95), 0 0 15px rgba(0,0,0,0.9), 3px 3px 6px rgba(0,0,0,1)',
              WebkitTextStroke: '2px rgba(0,0,0,0.8)',
              paintOrder: 'stroke fill'
            }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            MILANO
          </motion.h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Indicator nascosto per estetica minimale */}
    </section>
  )
}

export default Hero
