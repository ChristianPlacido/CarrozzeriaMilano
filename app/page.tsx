import Hero from '@/components/Hero'
import ReviewsBar from '@/components/ReviewsBar'
import Services from '@/components/Services'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <>
      <Hero />
      <ReviewsBar />
      <Services />
      <About />
      <Reviews />
      <Gallery />
      <Contact />
    </>
  )
}
