import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        {/* Hero Section */}
        <section className="mb-32 mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="font-hand text-2xl text-rogue-accent">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-rogue-green mt-4 leading-tight">
              Curating the <br />
              <span className="italic">Soul of the Valley.</span>
            </h1>
            <p className="text-2xl text-muted-foreground font-serif italic mt-8 leading-relaxed">
              LEVERAGEAI LLC was born from a simple observation: Southern Oregon's finest
              businesses weren't being seen for the gems they truly are.
            </p>
          </motion.div>
        </section>
        {/* Vision & Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center py-8 md:py-10 lg:py-12">
          <div className="relative">
            <div className="sketchy-border bg-white p-4 rotate-2">
              <img
                src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200"
                alt="Rogue Valley Forest"
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-rogue-accent text-white p-8 sketchy-border -rotate-3 hidden md:block">
              <span className="font-hand text-3xl">Est. 2024</span>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rogue-green">The Vision</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We believe that local business is the heartbeat of community culture. In a world of
                algorithmic clutter, Rogue Valley Showcase provides a curated sanctuary for
                quality over quantity.
              </p>
              <p>
                By combining high-end editorial design with robust technology, we give local
                artisans, vintners, and professional services the digital presence they deserve.
              </p>
            </div>
            <div className="pt-4 flex flex-col gap-4">
              {["Community First", "Design Excellence", "Radical Transparency"].map((val, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-rogue-accent w-6 h-6" />
                  <span className="font-serif text-xl font-bold text-rogue-green">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Values Grid */}
        <section className="py-24 border-t border-dashed border-rogue-green/20">
          <h2 className="text-4xl font-serif font-bold text-center text-rogue-green mb-16">The Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Craftsmanship",
                desc: "We treat our code and design with the same reverence a local woodworker treats a slab of Oregon Oak."
              },
              {
                title: "Local Advocacy",
                desc: "Our primary mission is to boost the economic and cultural visibility of Southern Oregon."
              },
              {
                title: "Editorial Integrity",
                desc: "We don't just list businesses; we tell their story with intent and professional photography standards."
              }
            ].map((v, i) => (
              <div key={i} className="bg-white sketchy-border p-8 hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-serif font-bold text-rogue-green mb-4">{v.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Contact CTA */}
        <section className="bg-rogue-green text-paper-cream rounded-3xl p-12 md:p-24 text-center space-y-8 mt-24">
          <h2 className="text-4xl md:text-6xl font-serif font-bold">Have a Story to Tell?</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            We are always looking for the next business to spotlight. If you believe your brand
            embodies the excellence of the valley, we want to hear from you.
          </p>
          <div className="pt-8">
            <Link to="/submit">
              <button className="bg-rogue-accent hover:bg-rogue-accent/90 text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all flex items-center gap-3 mx-auto">
                Get in Touch <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}