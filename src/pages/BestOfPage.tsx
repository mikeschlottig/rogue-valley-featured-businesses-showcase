import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import { MOCK_BUSINESSES } from '@shared/mock-data';
export function BestOfPage() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const bestOfList = MOCK_BUSINESSES.filter(b => b.awardTitle);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="mb-20 space-y-4">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="font-hand text-2xl text-rogue-accent"
        >
          Editor's Choice
        </motion.span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-rogue-green tracking-tight">
          Best of the <br />
          <span className="italic">Valley 2024</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-xl font-serif italic">
          A definitive, curated list of the businesses that defined excellence in Southern Oregon this year.
        </p>
      </div>
      <div className="relative border-t border-rogue-green/20">
        {bestOfList.map((biz, idx) => (
          <Link
            key={biz.id}
            to={`/business/${biz.slug}`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group block relative py-12 md:py-20 border-b border-rogue-green/20"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
              <div className="flex items-start gap-8">
                <span className="font-serif text-4xl md:text-6xl text-rogue-green/20 group-hover:text-rogue-accent transition-colors duration-500">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="space-y-2">
                  <h3 className="text-4xl md:text-6xl font-serif font-bold text-rogue-green group-hover:italic transition-all">
                    {biz.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-rogue-accent fill-rogue-accent" />
                    <span className="font-bold text-sm uppercase tracking-widest text-rogue-accent">
                      {biz.awardTitle}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:max-w-xs">
                <p className="text-muted-foreground leading-relaxed">
                  {biz.awardReason}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-rogue-green font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                  Full Profile <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            {/* Hover Reveal Image */}
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="hidden lg:block absolute right-1/3 top-1/2 -translate-y-1/2 pointer-events-none z-0"
                >
                  <div className="w-64 h-80 sketchy-border overflow-hidden bg-white p-2">
                    <img
                      src={biz.heroImage}
                      alt={biz.title}
                      className="w-full h-full object-cover grayscale brightness-75"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        ))}
      </div>
    </div>
  );
}