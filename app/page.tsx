import Hero from '@/components/Hero'
import ReviewsBar from '@/components/ReviewsBar'
import Services from '@/components/Services'
import ServicesBar from '@/components/ServicesBar'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesBar />
      <ReviewsBar />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </>
  )
}
