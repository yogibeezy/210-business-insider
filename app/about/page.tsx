export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sa-cream">
      {/* Hero with Tower of the Americas */}
      <div className="relative h-64 md:h-96">
        <img 
          src="/images/sa-tower-night.jpg" 
          alt="Tower of the Americas at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sa-cream via-transparent to-transparent" />
      </div>
      
      <div className="px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-sa-charcoal mb-8">
            About 210 Business Insider
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-sa-charcoal/70 text-lg leading-relaxed mb-6">
              We tell the stories of San Antonio&apos;s local businesses — the HVAC crews 
              working through August heat, the plumbers answering 2 AM emergency calls, 
              the auto shops keeping South Texas moving.
            </p>
            
            <p className="text-sa-charcoal/70 text-lg leading-relaxed mb-6">
              No corporate press releases. No paid placements. Just real stories about 
              the people building businesses in our community.
            </p>
            
            <h2 className="text-2xl font-bold text-sa-charcoal mt-12 mb-4">
              Why We Do This
            </h2>
            <p className="text-sa-charcoal/70 leading-relaxed mb-6">
              Local businesses are the backbone of San Antonio. They employ our neighbors, 
              sponsor Little League teams, and show up when the community needs help. 
              We believe their stories deserve to be told.
            </p>
            
            <h2 className="text-2xl font-bold text-sa-charcoal mt-12 mb-4">
              Get In Touch
            </h2>
            <p className="text-sa-charcoal/70 leading-relaxed">
              Got a story tip? Want to suggest a business to feature? 
              Reach out — we&apos;re always looking for the next great local story.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}