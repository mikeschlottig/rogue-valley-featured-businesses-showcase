import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
interface FeatureCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  slug: string;
  featured?: boolean;
}
export function FeatureCard({ title, category, image, description, slug, featured }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white p-4 sketchy-border flex flex-col h-full hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/business/${slug}`} className="flex-grow flex flex-col">
        <div className="relative mb-6 overflow-hidden rounded-lg">
          <AspectRatio ratio={4/3}>
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </AspectRatio>
          {featured && (
            <Badge className="absolute top-3 right-3 bg-rogue-accent text-white border-none shadow-sm">
              Featured
            </Badge>
          )}
        </div>
        <div className="flex-grow space-y-3">
          <span className="font-hand text-rogue-accent text-lg">{category}</span>
          <h3 className="text-2xl font-serif font-bold text-rogue-green">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-dashed border-border flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-rogue-green/40">Read Profile</span>
          <div className="w-8 h-8 rounded-full border border-rogue-green flex items-center justify-center group-hover:bg-rogue-green group-hover:text-white transition-colors">
            →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}