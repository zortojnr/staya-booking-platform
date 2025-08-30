import { Hero } from '@/components/home/hero'
import { SearchSection } from '@/components/home/search-section'
import { FeaturedHotels } from '@/components/home/featured-hotels'
import { PopularDestinations } from '@/components/home/popular-destinations'
import { Features } from '@/components/home/features'
import { Testimonials } from '@/components/home/testimonials'
import { Newsletter } from '@/components/home/newsletter'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <SearchSection />
      <FeaturedHotels />
      <PopularDestinations />
      <Features />
      <Testimonials />
      <Newsletter />
    </div>
  )
}