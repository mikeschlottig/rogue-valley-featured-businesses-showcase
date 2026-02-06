import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '@/lib/api-client';
import type { Business } from '@shared/types';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
export function BusinessSpotlight() {
  const { slug } = useParams<{ slug: string }>();
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  useEffect(() => {
    if (slug) {
      api<Business>(`/api/businesses/${slug}`)
        .then(setBusiness)
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [slug]);
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate API call
    setTimeout(() => {
      setSending(false);
      toast.success('Inquiry sent! A Valley representative will contact you shortly.', {
        description: `Your message to ${business?.title} was delivered successfully.`,
      });
    }, 1000);
  };
  if (loading) return <div className="py-40 text-center font-hand text-2xl">Loading the spotlight...</div>;
  if (!business) return <div className="py-40 text-center">Business not found</div>;
  return (
    <div className="bg-paper-cream">
      {/* Hero Section - Full width break out */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={business.heroImage}
          alt={business.title}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rogue-green/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="font-hand text-2xl text-rogue-accent bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 inline-block">
                {business.categorySlug.replace('-', ' ')}
              </span>
              <h1 className="text-5xl md:text-8xl font-serif font-bold">{business.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Content Section - Strict root wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-rogue-green">The Story</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-serif italic">
                "{business.description}"
              </p>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                {business.longDescription}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {business.galleryImages.map((img, i) => (
                <div key={i} className="sketchy-border overflow-hidden h-80">
                  <img src={img} alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-serif font-bold text-rogue-green">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {business.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white sketchy-border">
                    <CheckCircle2 className="text-rogue-accent w-5 h-5" />
                    <span className="font-medium text-rogue-green">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Sidebar / Contact */}
          <aside className="space-y-8">
            <div className="bg-rogue-green text-paper-cream p-8 sketchy-border space-y-8 sticky top-32">
              <h3 className="text-3xl font-serif font-bold">Connect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-rogue-accent shrink-0 mt-1" />
                  <span className="text-sm opacity-80">{business.contactDetails.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-rogue-accent shrink-0" />
                  <span className="text-sm opacity-80">{business.contactDetails.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-rogue-accent shrink-0" />
                  <span className="text-sm opacity-80">{business.contactDetails.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-5 h-5 text-rogue-accent shrink-0" />
                  <a href={business.contactDetails.website} target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:text-rogue-accent transition-colors underline underline-offset-4">Visit Website</a>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 space-y-4">
                <p className="font-hand text-lg">Send a direct inquiry:</p>
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <input required className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-rogue-accent" placeholder="Your Name" />
                  <input required type="email" className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-rogue-accent" placeholder="Your Email" />
                  <textarea required className="w-full bg-white/5 border border-white/20 rounded-lg p-3 text-sm h-32 focus:outline-none focus:ring-1 focus:ring-rogue-accent" placeholder="How can we help?" />
                  <Button disabled={sending} type="submit" className="w-full bg-rogue-accent hover:bg-rogue-accent/90 text-white rounded-xl py-6 text-lg">
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}