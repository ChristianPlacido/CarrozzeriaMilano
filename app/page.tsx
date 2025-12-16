import Hero from '@/components/Hero'
import ReviewsBar from '@/components/ReviewsBar'
import ImageCarousel from '@/components/ImageCarousel'
import Services from '@/components/Services'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <ImageCarousel />
      <ReviewsBar />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </>
  )
}
