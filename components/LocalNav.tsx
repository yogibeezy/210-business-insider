'use client'

import Link from 'next/link'

export default function LocalNav() {
  return (
    <nav className="px-6 py-6 border-b border-sa-stone/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-sa-charcoal">
          210<span className="text-sa-warm">Business</span>Insider
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sa-charcoal/70 hover:text-sa-charcoal transition-colors">
            Stories
          </Link>
          <Link href="/about" className="text-sa-charcoal/70 hover:text-sa-charcoal transition-colors">
            About
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-sa-charcoal">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}