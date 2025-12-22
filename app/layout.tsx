import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
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
    <html lang="it" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
