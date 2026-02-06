import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '@/lib/api-client';
import type { BlogPost } from '@shared/types';
import { X, Clock, User, ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api<BlogPost[]>('/api/blog')
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  const activePost = posts.find(p => p.id === selectedId);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-24 md:py-32">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="font-hand text-3xl text-rogue-accent">Valley Voice</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-rogue-green mt-4 mb-8">The Journal</h1>
          <p className="text-xl text-muted-foreground italic font-serif leading-relaxed">
            Thoughtful pieces on local commerce, craftsmanship, and the unfolding stories of Southern Oregon.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-[450px] w-full rounded-2xl" />
            ))
          ) : (
            posts.map((post) => (
              <motion.div
                key={post.id}
                layoutId={post.id}
                onClick={() => setSelectedId(post.id)}
                className="group cursor-pointer bg-white p-6 sketchy-border flex flex-col h-full hover:shadow-2xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-rogue-accent">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-rogue-green group-hover:italic transition-all">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-dashed border-border flex items-center justify-between text-rogue-green font-bold text-sm uppercase tracking-widest">
                  <span>Read Article</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))
          )}
        </div>
        <AnimatePresence>
          {selectedId && activePost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-rogue-green/90 backdrop-blur-md"
              />
              <motion.article
                layoutId={selectedId}
                className="relative bg-paper-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto sketchy-border shadow-2xl p-8 md:p-16"
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-8 right-8 p-3 bg-white/50 rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6 text-rogue-green" />
                </button>
                <div className="max-w-2xl mx-auto space-y-12">
                  <div className="space-y-6 text-center">
                    <span className="font-hand text-3xl text-rogue-accent">{activePost.date}</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-rogue-green leading-tight">
                      {activePost.title}
                    </h2>
                    <div className="flex justify-center items-center gap-2 font-serif italic text-lg text-muted-foreground">
                      <span>by</span>
                      <span className="font-bold text-rogue-green not-italic underline decoration-rogue-accent">{activePost.author}</span>
                    </div>
                  </div>
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                    <img src={activePost.image} className="w-full h-full object-cover" />
                  </div>
                  <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed font-serif text-lg">
                    {activePost.content.split('\n').map((para, i) => (
                      <p key={i} className="mb-6">{para}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}