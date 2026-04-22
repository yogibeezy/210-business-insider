import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-sa-stone/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sa-charcoal/50 text-sm">
            © 2024 210 Business Insider. San Antonio, Texas.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sa-charcoal/50 hover:text-sa-charcoal text-sm transition-colors">
              About
            </Link>
            <a 
              href="#" 
              className="text-sa-charcoal/50 hover:text-sa-charcoal text-sm transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}