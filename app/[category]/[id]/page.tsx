import { featuredStories } from '@/lib/content'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return featuredStories.map((story) => ({
    category: story.category,
    id: story.id,
  }))
}

export default function StoryPage({ 
  params 
}: { 
  params: { category: string; id: string } 
}) {
  const story = featuredStories.find(
    (s) => s.category === params.category && s.id === params.id
  )

  if (!story) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-sa-cream">
      <article className="px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-medium text-sa-warm uppercase tracking-wide">
            {story.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-sa-charcoal mt-4 mb-6 leading-tight">
            {story.title}
          </h1>
          <p className="text-lg text-sa-charcoal/60 mb-8">
            {story.excerpt}
          </p>
          
          {/* Featured image */}
          <div className="aspect-video bg-sa-stone rounded-lg mb-12 overflow-hidden">
            <img 
              src={story.image} 
              alt={story.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-sa-charcoal/80">
            <p className="text-xl leading-relaxed mb-8">
              [Story content goes here. Interview quotes, business details, 
              local context about San Antonio, and what makes this business unique.]
            </p>
            <p className="leading-relaxed mb-6">
              [More content about the business owner, their journey, challenges 
              they&apos;ve faced, and what keeps them going.]
            </p>
            <p className="leading-relaxed">
              [Closing thoughts, where to find them, and why the community supports them.]
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}