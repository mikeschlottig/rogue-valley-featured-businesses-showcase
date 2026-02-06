import React, { useState, useEffect } from 'react';
import { HeroSection } from '@/components/ui/hero-section';
import { FeatureCard } from '@/components/ui/feature-card';
import { motion } from 'framer-motion';
import { api } from '@/lib/api-client';
import type { Business } from '@shared/types';
import { Skeleton } from '@/components/ui/skeleton';
export function HomePage() {
  const [featured, setFeatured] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api<Business[]>('/api/businesses')
      .then(data => {
        setFeatured(data.filter(b => b.isFeatured));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <HeroSection />
        {/* Featured Grid */}
        <section className="py-24 space-y-16">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-rogue-green">Featured Spotlights</h2>
              <p className="text-muted-foreground text-lg">
                Each week we highlight businesses making a significant impact on our local culture and economy.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-hand text-xl text-rogue-accent underline underline-offset-8"
            >
              Discover all businesses
            </motion.button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-xl" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))
            ) : (
              featured.map((biz, idx) => (
                <motion.div
                  key={biz.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <FeatureCard 
                    title={biz.title}
                    category={biz.categorySlug.replace('-', ' ')}
                    image={biz.heroImage}
                    description={biz.description}
                    slug={biz.slug}
                    featured={biz.isFeatured}
                  />
                </motion.div>
              ))
            )}
          </div>
        </section>
        {/* Why Section */}
        <section className="py-24 bg-white sketchy-border p-8 md:p-16 my-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 select-none pointer-events-none font-hand text-8xl text-rogue-green">
            Why us?
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-rogue-green">The High-End Way to Connect.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Standard directories are cluttered and noisy. We take an editorial approach, treat every business
                like a feature story, and ensure the quality of your brand is reflected in how you are discovered.
              </p>
              <ul className="space-y-4">
                {[
                  "Curated, high-quality photography standards.",
                  "Deep SEO optimization for local discovery.",
                  "Direct contact forms with zero middlemen.",
                  "Community-driven feedback and verification."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-rogue-green font-medium">
                    <div className="w-2 h-2 rounded-full bg-rogue-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="aspect-square bg-paper-cream sketchy-border overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
                 <img
                   src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=800"
                   alt="The Valley Landscape"
                   className="w-full h-full object-cover grayscale opacity-80"
                 />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-rogue-accent text-white p-6 sketchy-border -rotate-6 hidden md:block">
                  <span className="font-hand text-2xl">Serving Medford, Ashland, & beyond</span>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}