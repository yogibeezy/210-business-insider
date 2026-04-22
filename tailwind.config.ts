module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sa-cream': '#FAF8F5',
        'sa-stone': '#E8E4DF',
        'sa-charcoal': '#1A1A1A',
        'sa-warm': '#8B7355',
        'sa-terracotta': '#C4A484',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}