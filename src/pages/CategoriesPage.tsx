import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '@/lib/api-client';
import type { Category, Business } from '@shared/types';
import { X, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
export function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  useEffect(() => {
    api<Category[]>('/api/categories').then(setCategories);
    api<Business[]>('/api/businesses').then(setBusinesses);
  }, []);
  const selectedCategory = categories.find(c => c.id === selectedId);
  const categoryBusinesses = businesses.filter(b => b.categorySlug === selectedCategory?.slug);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-rogue-green">Browse the Valley</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the industries that define Southern Oregon, from world-class wineries to heritage artisans.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <motion.div
            layoutId={cat.id}
            key={cat.id}
            onClick={() => setSelectedId(cat.id)}
            className="cursor-pointer group relative bg-white p-8 sketchy-border hover:shadow-xl transition-all h-64 flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-4">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: cat.color }}
              >
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-rogue-green">{cat.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="text-rogue-accent w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedId}
              className="relative bg-paper-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto sketchy-border p-8 md:p-12 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 hover:bg-rogue-green/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-rogue-green" />
              </button>
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="font-hand text-2xl text-rogue-accent">Inside the Sector</span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-rogue-green">{selectedCategory.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedCategory.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                  {categoryBusinesses.map((biz) => (
                    <Link 
                      key={biz.id} 
                      to={`/business/${biz.slug}`}
                      className="group p-6 bg-white border border-border rounded-xl hover:border-rogue-accent transition-all"
                    >
                      <h4 className="text-xl font-serif font-bold text-rogue-green group-hover:text-rogue-accent transition-colors">
                        {biz.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{biz.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rogue-accent opacity-0 group-hover:opacity-100 transition-all">
                        View Spotlight <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}