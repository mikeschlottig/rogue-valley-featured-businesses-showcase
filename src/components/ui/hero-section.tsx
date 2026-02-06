import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-paper-cream">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rogue-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rogue-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white sketchy-border text-sm font-medium text-rogue-green"
          >
            <Star className="w-4 h-4 text-rogue-accent fill-rogue-accent" />
            <span>Discovering the Best of Southern Oregon</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-rogue-green leading-[1.1]"
          >
            Where the <span className="italic">Valley’s</span> Best Are Found.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            A curated directory and showcase of the rogue valley's premier businesses, 
            local artisans, and hidden gems. Built for the community, by the community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Button size="lg" className="bg-rogue-accent hover:bg-rogue-accent/90 text-white px-8 py-6 rounded-2xl text-lg shadow-lg group">
              Explore Categories
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 rounded-2xl text-lg sketchy-border bg-transparent hover:bg-white transition-all">
              Join the Showcase
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Illustrative Decorations */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[url('https://www.transparenttextures.com/patterns/wave-cut.png')] opacity-10" />
    </section>
  );
}