import Link from 'next/link'

interface Story {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  readTime: string
}

export default function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group">
      <Link href={`/${story.category}/${story.id}`}>
        <div className="aspect-[4/3] bg-sa-stone rounded-lg overflow-hidden mb-4">
          <img 
            src={story.image} 
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs font-medium text-sa-warm uppercase tracking-wide">
            {story.category}
          </span>
          <h3 className="text-xl font-semibold text-sa-charcoal group-hover:text-sa-warm transition-colors leading-tight">
            {story.title}
          </h3>
          <p className="text-sa-charcoal/60 text-sm leading-relaxed line-clamp-2">
            {story.excerpt}
          </p>
          <span className="text-xs text-sa-charcoal/40">
            {story.readTime} read
          </span>
        </div>
      </Link>
    </article>
  )
}