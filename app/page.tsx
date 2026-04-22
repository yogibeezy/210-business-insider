export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/sa-skyline-night.jpg" 
            alt="San Antonio skyline"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/60 mb-6 md:mb-8">
            San Antonio & South Texas
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
            <span className="block">210</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Business
            </span>
            <span className="block">Network</span>
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl text-white/80 font-light max-w-3xl leading-relaxed mb-12">
            Where South Texas business happens.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mb-12" />

          <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
            A network of business owners, operators, and builders 
            across San Antonio and South Texas.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      {/* THE NETWORK */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400 mb-4">The Network</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Every business. Every trade.</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mb-16">
            If you serve South Texas, you belong here. No exceptions. No exclusions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { icon: '❄️', name: 'HVAC' },
              { icon: '🚿', name: 'Plumbing' },
              { icon: '🚗', name: 'Auto' },
              { icon: '🏠', name: 'Roofing' },
              { icon: '⚡', name: 'Electrical' },
              { icon: '🌳', name: 'Landscape' },
              { icon: '🏗️', name: 'Concrete' },
              { icon: '🎨', name: 'Painting' },
              { icon: '🚪', name: 'Fencing' },
              { icon: '🏊', name: 'Pools' },
              { icon: '🐜', name: 'Pest Control' },
              { icon: '📦', name: 'Moving' },
              { icon: '💧', name: 'Restoration' },
              { icon: '🪟', name: 'Glass' },
              { icon: '🛻', name: 'Towing' },
              { icon: '🏪', name: 'Retail' },
              { icon: '🍔', name: 'Restaurants' },
              { icon: '💇', name: 'Salons' },
            ].map((trade) => (
              <div key={trade.name} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors">
                <div className="text-2xl mb-2">{trade.icon}</div>
                <p className="text-sm font-medium text-white/80">{trade.name}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-white/40 mt-8 text-sm">
            And every other business that keeps South Texas running.
          </p>
        </div>
      </section>

      {/* THE MISSION */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-amber-400 mb-4">The Mission</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              South Texas businesses deserve a spotlight.
            </h2>
          </div>
          <div className="space-y-6 text-white/60 text-lg leading-relaxed">
            <p>
              Too many local businesses get buried under big-box competitors and faceless chains. 
              We're changing that.
            </p>
            <p>
              210 Business Network exists to put the spotlight on the owners, operators, and builders 
              who keep South Texas running — the 2 AM emergency calls, the hail season repairs, 
              the family businesses spanning generations.
            </p>
            <p className="text-white font-medium">
              Your story matters. Your business matters.
            </p>
          </div>
        </div>
      </section>

      {/* THE REGION */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400 mb-4">The Region</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Border to coast.</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mb-16">
            Eagle Pass to Corpus Christi. Laredo to Lockhart. If you're in South Texas, you're home.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'San Antonio',
              'Eagle Pass',
              'Corpus Christi',
              'Laredo',
              'New Braunfels',
              'Schertz',
              'Seguin',
              'Cibolo',
              'Universal City',
              'Converse',
              'Live Oak',
              'Helotes',
              'Boerne',
              'Kyle',
              'San Marcos',
              'Lockhart',
              'Pleasanton',
              'Jourdanton',
              'Devine',
              'Hondo',
              'Bandera',
              'Kerrville',
              'Uvalde',
              'Carrizo Springs',
            ].map((city) => (
              <div key={city} className="py-3 px-4 bg-white/5 rounded-lg text-center">
                <p className="text-white/70 text-sm font-medium">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN THE WAIT */}
      <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-gradient-to-t from-amber-950/30 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400 mb-4">Coming Soon</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Be first in line.</h2>
          <p className="text-white/60 text-lg mb-12">
            Join the waitlist. Get early access when we launch.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-amber-400 transition-colors"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-lg hover:from-amber-300 hover:to-orange-400 transition-colors"
            >
              Join
            </button>
          </form>

          <p className="text-white/30 text-sm mt-6">
            No spam. Just launch updates.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 210 Business Network. San Antonio, Texas.
          </p>
          <p className="text-white/30 text-sm">
            Where South Texas business happens.
          </p>
        </div>
      </footer>
    </main>
  )
}