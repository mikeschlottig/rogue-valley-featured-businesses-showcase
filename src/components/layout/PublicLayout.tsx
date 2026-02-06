import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
interface PublicLayoutProps {
  children: React.ReactNode;
}
export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-rogue-accent selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}