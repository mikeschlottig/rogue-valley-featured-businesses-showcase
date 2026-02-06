import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '@/lib/api-client';
import type { Business } from '@shared/types';
import { FeatureCard } from '@/components/ui/feature-card';
import { Skeleton } from '@/components/ui/skeleton';
export function FeaturedPage() {
  const [featured, setFeatured] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api<Business[]>('/api/businesses')
      .then(data => setFeatured(data.filter(b => b.isFeatured)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-24 md:py-32">
        <div className="text-center mb-20 space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-hand text-3xl text-rogue-accent"
          >
            The Gold Standard
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-rogue-green">
            Featured <span className="italic">Spots</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-serif">
            A permanent gallery of the businesses that represent the pinnacle of Rogue Valley excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-96 w-full rounded-2xl" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            ))
          ) : (
            featured.map((biz, idx) => (
              <motion.div
                key={biz.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <FeatureCard
                  title={biz.title}
                  category={biz.categorySlug.replace('-', ' ')}
                  image={biz.heroImage}
                  description={biz.description}
                  slug={biz.slug}
                  featured={true}
                />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}