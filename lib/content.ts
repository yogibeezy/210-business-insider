export interface Story {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  readTime: string
  content?: string
}

// Using Unsplash images for story cards - free to use with attribution
export const featuredStories: Story[] = [
  {
    id: 'family-hvac-legacy',
    title: 'Three Generations of Keeping San Antonio Cool',
    excerpt: 'How one family business has been serving South Texas for over 50 years, adapting to new technology while keeping their old-school customer service.',
    category: 'hvac',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    readTime: '5 min',
  },
  {
    id: 'plumbing-emergency-response',
    title: 'The 2 AM Call: Inside Emergency Plumbing',
    excerpt: 'What happens when a pipe bursts at midnight? We shadowed a local plumbing crew to see how they handle the calls nobody wants to make.',
    category: 'plumbing',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80',
    readTime: '4 min',
  },
  {
    id: 'auto-shop-transformation',
    title: 'From Two Bays to Six: A Shop&apos;s Growth Story',
    excerpt: 'Starting with a rented garage and a toolbox, this local mechanic built one of the most trusted auto shops on the South Side.',
    category: 'automotive',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80',
    readTime: '6 min',
  },
  {
    id: 'roofer-weather-challenge',
    title: 'Hail Season: How Roofers Keep Up When the Sky Falls',
    excerpt: 'San Antonio&apos;s spring storms keep roofers busy. We talked to crews about the chaos, the scams to watch for, and what honest work looks like.',
    category: 'roofing',
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80',
    readTime: '5 min',
  },
  {
    id: 'electrician-apprentice',
    title: 'Becoming a Spark: One Apprentice&apos;s Journey',
    excerpt: 'Trade careers are making a comeback. We followed a first-year electrical apprentice through their training and first solo calls.',
    category: 'electrical',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    readTime: '7 min',
  },
  {
    id: 'landscaping-family-business',
    title: 'Mowing Lawns to Building a Legacy',
    excerpt: 'Started with a push mower at 16. Now runs a 20-person landscaping crew. The story of turning sweat equity into real equity.',
    category: 'landscaping',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '5 min',
  },
]