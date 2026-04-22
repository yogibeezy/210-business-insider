export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Top Label */}
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-white/60 mb-6 md:mb-8">
            San Antonio & South Texas
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8">
            <span className="block">210</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Business
            </span>
            <span className="block">Network</span>
          </h1>

          {/* Hook */}
          <p className="text-xl md:text-3xl lg:text-4xl text-white/80 font-light max-w-3xl leading-relaxed mb-12">
            Where South Texas business happens.
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mb-12" />

          {/* Subtext */}
          <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
            A network of business owners, operators, and builders 
            across San Antonio and South Texas.
          </p>

          {/* Coming Soon */}
          <div className="mt-16 md:mt-24">
            <p className="text-sm tracking-[0.2em] uppercase text-white/40">
              Coming Soon
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </main>
  )
}