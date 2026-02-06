import type { Category, Business, User, BlogPost, LocalEvent } from './types';
export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Valley Curator' }
];
export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat1',
    slug: 'hospitality',
    name: 'Hospitality & Stay',
    description: 'Curated luxury estates, cozy vineyard lofts, and boutique hotels tucked in the Rogue Valley hills.',
    icon: 'Hotel',
    color: '#1a4d2e'
  },
  {
    id: 'cat2',
    slug: 'professional-services',
    name: 'Professional Services',
    description: 'Local experts in real estate, law, and consulting who understand the unique rhythm of Southern Oregon.',
    icon: 'Briefcase',
    color: '#e11d48'
  },
  {
    id: 'cat3',
    slug: 'artisans',
    name: 'Artisans & Crafts',
    description: 'Master woodworkers, potters, and creators keeping the tradition of hand-crafted quality alive.',
    icon: 'Hammer',
    color: '#d97706'
  }
];
export const MOCK_BUSINESSES: Business[] = [
  {
    id: 'biz1',
    slug: 'the-vineyard-loft',
    title: 'The Vineyard Loft',
    categorySlug: 'hospitality',
    description: 'A luxury estate escape tucked in the heart of the Applegate Valley.',
    longDescription: 'The Vineyard Loft offers an unparalleled experience of Southern Oregon’s wine country. Perched atop a rolling hill overlooking 40 acres of Pinot Noir vines, our loft combines modern architectural elegance with the rustic charm of the valley.',
    heroImage: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Private Wine Tasting', 'Chef-prepared Breakfast'],
    contactDetails: {
      address: '123 Applegate Rd, Jacksonville, OR',
      phone: '(541) 555-0123',
      website: 'https://example.com',
      email: 'stay@vineyardloft.com'
    },
    isFeatured: true,
    awardTitle: 'Best Boutique Stay 2024',
    awardReason: 'Unmatched blend of architectural modernism and organic beauty.'
  },
  {
    id: 'biz2',
    slug: 'sarah-miller-real-estate',
    title: 'Sarah Miller Real Estate',
    categorySlug: 'professional-services',
    description: 'Finding perfect homes in Southern Oregon for over 15 years.',
    longDescription: 'Sarah Miller is a community guide focusing on historic properties in Ashland and luxury estates in Medford.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [],
    features: ['Luxury Market Expert', 'Historic Home Specialist'],
    contactDetails: {
      address: '456 Main St, Ashland, OR',
      phone: '(541) 555-0456',
      website: 'https://example.com',
      email: 'sarah@roguehomes.com'
    },
    isFeatured: true,
    awardTitle: 'Real Estate Leader 2024',
    awardReason: 'Set a new standard for property presentation in Southern Oregon.'
  }
];
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'p1',
    slug: 'autumn-in-the-applegate',
    title: 'Autumn in the Applegate: A Harvest Story',
    excerpt: 'The colors are changing, and the harvest is in full swing. Discover the magic of fall in the valley.',
    content: 'Fall in the Rogue Valley is a sensory symphony. The air turns crisp, the maples turn gold, and the vineyards buzz with the energy of the harvest. Local vintners are reporting an exceptional year for Pinot Noir...',
    author: 'Elena Thorne',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    slug: 'artisans-of-ashland',
    title: 'The Hidden Artisans of Ashland',
    excerpt: 'Beyond the theaters, Ashland hides a thriving community of world-class makers.',
    content: 'Walk down any side street in Ashland and you might hear the hum of a lathe or the clinking of a pottery wheel. We spent a week visiting the studios of three local masters...',
    author: 'James Medford',
    date: 'Nov 02, 2024',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&q=80&w=800'
  }
];
export const MOCK_EVENTS: LocalEvent[] = [
  {
    id: 'e1',
    title: 'Winter Wine Pavilion',
    date: 'Dec 15, 2024',
    venue: 'Medford Commons',
    category: 'Festival',
    description: 'A celebration of local winter releases and artisanal cheeses.',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'e2',
    title: 'Ashland Maker Market',
    date: 'Dec 20, 2024',
    venue: 'Historic Downtown',
    category: 'Shopping',
    description: 'The premier holiday market for handcrafted Southern Oregon gifts.',
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800'
  }
];