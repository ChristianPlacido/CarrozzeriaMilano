import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DynamicLogo from '@/components/DynamicLogo'

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
        <Link
          href="/"
          className="fixed top-4 right-4 z-[60] hidden sm:block"
          aria-label="Torna alla home"
        >
          <div className="rounded-full bg-white shadow-lg shadow-primary/20 border border-primary/20 p-3 hover:shadow-primary/40 transition-transform hover:scale-105">
            <DynamicLogo className="w-20" />
          </div>
        </Link>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
