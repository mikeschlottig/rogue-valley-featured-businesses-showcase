import type { Category, Business, User } from './types';
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
    longDescription: 'The Vineyard Loft offers an unparalleled experience of Southern Oregon’s wine country. Perched atop a rolling hill overlooking 40 acres of Pinot Noir vines, our loft combines modern architectural elegance with the rustic charm of the valley. Guests enjoy private tastings, sunset balcony views, and hand-delivered artisanal breakfasts.',
    heroImage: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Private Wine Tasting', 'Chef-prepared Breakfast', 'Panoramic Views', 'Luxury Linens'],
    contactDetails: {
      address: '123 Applegate Rd, Jacksonville, OR',
      phone: '(541) 555-0123',
      website: 'https://example.com/vineyard-loft',
      email: 'stay@vineyardloft.com'
    },
    isFeatured: true,
    awardTitle: 'Best Boutique Stay 2024',
    awardReason: 'The Vineyard Loft offers an unmatched blend of architectural modernism and the organic beauty of the Applegate Valley. Their private harvest dinners are a revelation in local culinary craft.'
  },
  {
    id: 'biz2',
    slug: 'sarah-miller-real-estate',
    title: 'Sarah Miller Real Estate',
    categorySlug: 'professional-services',
    description: 'Helping families find their perfect home in Southern Oregon for over 15 years.',
    longDescription: 'Sarah Miller is more than a real estate agent; she is a community guide. With a deep focus on historic properties in Ashland and luxury estates in Medford, Sarah utilizes a high-touch, editorial approach to property marketing. She believes every home has a story, and every buyer deserves a perfect chapter in the Rogue Valley.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Luxury Market Expert', 'Historic Home Specialist', 'Concierge Service', 'Relocation Guide'],
    contactDetails: {
      address: '456 Main St, Ashland, OR',
      phone: '(541) 555-0456',
      website: 'https://example.com/sarah-miller',
      email: 'sarah@roguehomes.com'
    },
    isFeatured: true,
    awardTitle: 'Real Estate Leader 2024',
    awardReason: 'Sarah Miller set a new standard for property presentation in Southern Oregon this year, combining tech-forward marketing with an old-school dedication to historic preservation.'
  },
  {
    id: 'biz3',
    slug: 'valley-woodworks',
    title: 'Valley Woodworks',
    categorySlug: 'artisans',
    description: 'Custom handcrafted furniture made from local Oregon oak and reclaimed materials.',
    longDescription: 'Founded by master woodworker Elias Thorne, Valley Woodworks specializes in live-edge dining tables and bespoke cabinetry. Every piece is sourced from fallen trees within a 50-mile radius of Medford. We celebrate the natural imperfections of the wood, creating legacy pieces that last generations.',
    heroImage: 'https://images.unsplash.com/photo-1622398905321-4235e128b9a1?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540633169354-e3954421df74?auto=format&fit=crop&q=80&w=800'
    ],
    features: ['Locally Sourced Wood', 'Hand-rubbed Finishes', 'Custom Commissions', 'Sustainable Practices'],
    contactDetails: {
      address: '789 Industry Way, Medford, OR',
      phone: '(541) 555-0789',
      website: 'https://example.com/valley-woodworks',
      email: 'elias@valleywoodworks.com'
    },
    isFeatured: false,
    awardTitle: 'Heritage Artisan of the Year',
    awardReason: 'Valley Woodworks preserves the legacy of Rogue Valley craftsmanship. Their commitment to using 100% locally salvaged timber sets them apart as a leader in sustainable artisan luxury.'
  }
];