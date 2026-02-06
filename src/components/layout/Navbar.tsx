import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { SearchDialog } from '@/components/ui/search-dialog';
import { JoinDialog } from '@/components/ui/join-dialog';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export function Navbar() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const navLinks = [
    { name: 'Categories', path: '/categories' },
    { name: 'Events', path: '/events' },
    { name: 'The Journal', path: '/blog' },
    { name: 'The Valley', path: '/about' },
  ];
  if (!mounted) return null;
  return (
    <>
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
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative py-1 hover:text-rogue-accent transition-colors",
                    location.pathname === link.path ? "text-rogue-accent font-bold" : "text-rogue-green"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rogue-accent rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex rounded-full"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="w-4 h-4" />
              </Button>
              <Button
                className="bg-rogue-green hover:bg-rogue-green/90 text-white rounded-full px-6"
                onClick={() => setJoinOpen(true)}
              >
                Join
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-paper-cream border-l border-rogue-green/10">
                  <SheetHeader className="text-left mb-12">
                    <SheetTitle className="font-serif text-3xl font-bold text-rogue-green">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={cn(
                          "text-2xl font-serif font-bold",
                          location.pathname === link.path ? "text-rogue-accent" : "text-rogue-green"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                    <div className="pt-8 border-t border-dashed border-rogue-green/20">
                      <Button
                        variant="outline"
                        className="w-full sketchy-border py-6 text-lg justify-start gap-4"
                        onClick={() => setSearchOpen(true)}
                      >
                        <Search className="w-5 h-5" /> Search
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      {/* Dialogs outside of nav structure to avoid portal nesting issues */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <JoinDialog open={joinOpen} onOpenChange={setJoinOpen} />
    </>
  );
}