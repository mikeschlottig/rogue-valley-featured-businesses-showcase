import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div className="glass-nav rounded-2xl px-6 py-3 flex items-center justify-between shadow-soft">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-bold text-rogue-green group-hover:text-rogue-accent transition-colors">
              Rogue<span className="italic font-normal">Valley</span>
            </span>
            <span className="font-hand text-sm text-rogue-accent mt-1 transform -rotate-12">Showcase</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/categories" className="hover:text-rogue-accent transition-colors">Categories</Link>
            <Link to="/about" className="hover:text-rogue-accent transition-colors">The Valley</Link>
            <Link to="/best-of" className="hover:text-rogue-accent transition-colors">Best of 2024</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full">
              <Search className="w-4 h-4" />
            </Button>
            <Button className="bg-rogue-green hover:bg-rogue-green/90 text-white rounded-full px-6">
              Join Directory
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}