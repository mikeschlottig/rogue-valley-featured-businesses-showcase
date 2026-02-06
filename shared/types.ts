export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
export interface Business {
  id: string;
  slug: string;
  title: string;
  categorySlug: string;
  description: string;
  longDescription: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  contactDetails: {
    address: string;
    phone: string;
    website: string;
    email: string;
  };
  isFeatured: boolean;
  awardTitle?: string;
  awardReason?: string;
}
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}
export interface LocalEvent {
  id: string;
  title: string;
  date: string;
  venue: string;
  category: string;
  description: string;
  price: string;
  image: string;
}
export interface BusinessSubmission {
  businessName: string;
  category: string;
  email: string;
  story: string;
  website?: string;
}
export interface User {
  id: string;
  name: string;
}