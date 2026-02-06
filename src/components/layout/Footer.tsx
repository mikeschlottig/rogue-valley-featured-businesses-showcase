import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-rogue-green text-paper-cream py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Rogue Valley Showcase</h3>
            <p className="text-paper-cream/70 text-sm leading-relaxed">
              Curating the finest local talent, flavor, and industry from Oregon's beautiful Rogue Valley.
            </p>
            <div className="flex gap-4 pt-2">
              <Instagram className="w-5 h-5 cursor-pointer hover:text-rogue-accent transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-rogue-accent transition-colors" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-rogue-accent transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-rogue-accent">Explore</h4>
            <ul className="space-y-2 text-sm text-paper-cream/80">
              <li><Link to="/categories" className="hover:text-white">Directory</Link></li>
              <li><Link to="/featured" className="hover:text-white">Featured Spots</Link></li>
              <li><Link to="/events" className="hover:text-white">Local Events</Link></li>
              <li><Link to="/submit" className="hover:text-white">Submit a Business</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-rogue-accent">The Project</h4>
            <ul className="space-y-2 text-sm text-paper-cream/80">
              <li><Link to="/about" className="hover:text-white">Our Story</Link></li>
              <li><Link to="/advertising" className="hover:text-white">Advertising</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-rogue-accent">Newsletter</h4>
            <p className="text-sm text-paper-cream/70 mb-4">The best of the valley, delivered monthly.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-white/10 border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-1 focus:ring-rogue-accent"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-paper-cream/50">
          <p>© 2024 LEVERAGEAI LLC. All rights reserved.</p>
          <p>Hand-crafted in Oregon</p>
        </div>
      </div>
    </footer>
  );
}