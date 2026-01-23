import type { Metadata } from 'next'
import { Inter, Montserrat, Agdasima } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/NavbarClean'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const agdasima = Agdasima({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-agdasima',
})

export const metadata: Metadata = {
  title: 'Carrozzeria Milano | Seregno - Riparazioni Auto Professionali',
  description: 'Carrozzeria Milano a Seregno: riparazioni auto, verniciatura, ripristino carrozzeria, assistenza professionale. Qualità e affidabilità dal 1980.',
  keywords: 'carrozzeria, Seregno, riparazione auto, verniciatura, carrozzeria Milano',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${montserrat.variable} ${agdasima.variable}`}>
      <body className={agdasima.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
