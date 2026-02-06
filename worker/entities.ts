import { IndexedEntity } from "./core-utils";
import type { Category, Business } from "@shared/types";
import { MOCK_CATEGORIES, MOCK_BUSINESSES } from "@shared/mock-data";
export class CategoryEntity extends IndexedEntity<Category> {
  static readonly entityName = "category";
  static readonly indexName = "categories";
  static readonly initialState: Category = { 
    id: "", 
    slug: "", 
    name: "", 
    description: "", 
    icon: "", 
    color: "" 
  };
  static seedData = MOCK_CATEGORIES;
}
export class BusinessEntity extends IndexedEntity<Business> {
  static readonly entityName = "business";
  static readonly indexName = "businesses";
  static readonly initialState: Business = {
    id: "",
    slug: "",
    title: "",
    categorySlug: "",
    description: "",
    longDescription: "",
    heroImage: "",
    galleryImages: [],
    features: [],
    contactDetails: {
      address: "",
      phone: "",
      website: "",
      email: ""
    },
    isFeatured: false
  };
  static seedData = MOCK_BUSINESSES;
  static async findBySlug(env: any, slug: string): Promise<Business | null> {
    const { items } = await this.list(env);
    return items.find(b => b.slug === slug) ?? null;
  }
}