export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-amber-500/30">
      
      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-24 md:pb-32">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="/images/sa-skyline-night.jpg" 
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl">
            <p className="text-xs tracking-[0.4em] uppercase text-neutral-500 mb-8">
              South Texas
            </p>
            
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-light tracking-tight leading-[0.85] mb-8">
              <span className="block font-extralight">210</span>
              <span className="block">Business</span>
              <span className="block text-amber-500">Network</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 font-light max-w-lg leading-relaxed">
              Where South Texas business happens.
            </p>
          </div>
        </div>
      </section>

      {/* THE NETWORK */}
      <section className="px-8 md:px-16 lg:px-24 py-32 md:py-40 border-t border-neutral-900">
        <div className="max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-amber-500 mb-6">Membership</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                A private network for business owners who build things.
              </h2>
            </div>
            <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
              <p>
                HVAC. Plumbing. Automotive. Roofing. Electrical. Landscaping. 
                Concrete. Painting. Pools. Restaurants. Retail. Professional services. 
                If you operate a business in South Texas, you belong here.
              </p>
              <p className="text-neutral-300">
                This is not a directory. This is a network of operators who 
                understand what it takes to build something real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE TERRITORY */}
      <section className="px-8 md:px-16 lg:px-24 py-32 md:py-40 bg-neutral-900/30">
        <div className="max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-500 mb-6">Territory</p>
          <h2 className="text-3xl md:text-5xl font-light mb-8">Border to coast.</h2>
          <p className="text-neutral-400 font-light text-lg max-w-2xl mb-16">
            Eagle Pass to Corpus Christi. Laredo to Lockhart. 
            The full sweep of South Texas.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-neutral-800">
            {[
              'San Antonio', 'Eagle Pass', 'Corpus Christi', 'Laredo',
              'New Braunfels', 'Schertz', 'Seguin', 'Cibolo',
              'Universal City', 'Converse', 'Helotes', 'Boerne',
              'Kyle', 'San Marcos', 'Lockhart', 'Pleasanton',
              'Jourdanton', 'Devine', 'Hondo', 'Bandera',
              'Kerrville', 'Uvalde', 'Carrizo Springs', 'Crystal City'
            ].map((city) => (
              <div key={city} className="bg-neutral-950 py-4 px-2 text-center">
                <p className="text-neutral-500 text-sm font-light">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section className="px-8 md:px-16 lg:px-24 py-32 md:py-40 border-t border-neutral-900">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-amber-500 mb-6">Inquiry</p>
          <h2 className="text-3xl md:text-4xl font-light mb-6">Request an introduction.</h2>
          <p className="text-neutral-400 font-light mb-12">
            Membership is curated. Tell us about your business and we'll be in touch.
          </p>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name"
                className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/50 transition-colors font-light"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/50 transition-colors font-light"
              />
            </div>
            <input 
              type="text" 
              placeholder="Business name"
              className="w-full px-6 py-4 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/50 transition-colors font-light"
            />
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-white text-neutral-950 font-medium hover:bg-amber-500 transition-colors"
            >
              Submit inquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 lg:px-24 py-12 border-t border-neutral-900">
        <div className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-sm font-light">
            210 Business Network
          </p>
          <p className="text-neutral-700 text-sm font-light">
            South Texas
          </p>
        </div>
      </footer>
    </main>
  )
}