import LocalNav from '@/components/LocalNav'
import Footer from '@/components/Footer'
import StoryCard from '@/components/StoryCard'
import { featuredStories } from '@/lib/content'

export default function Home() {
  return (
    <main className="min-h-screen bg-sa-cream">
      <LocalNav />
      
      {/* Hero with SA Skyline */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sa-skyline-night.jpg" 
            alt="San Antonio skyline at night"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sa-cream/80 via-sa-cream/60 to-sa-cream" />
        </div>
        <div className="relative z-10 px-6 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <p className="text-sa-warm text-sm font-medium tracking-wide uppercase mb-4">
              San Antonio & South Texas
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sa-charcoal leading-tight mb-6">
              The stories behind<br />
              <span className="text-sa-warm">local business</span>
            </h1>
            <p className="text-lg md:text-xl text-sa-charcoal/70 max-w-2xl leading-relaxed">
              Real businesses. Real people. Real impact. Discover what&apos;s happening 
              in the San Antonio business community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-sa-charcoal">
              Featured Stories
            </h2>
            <span className="text-sa-warm text-sm">
              {featuredStories.length} stories
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}