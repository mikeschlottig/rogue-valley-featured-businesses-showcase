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
export interface User {
  id: string;
  name: string;
}