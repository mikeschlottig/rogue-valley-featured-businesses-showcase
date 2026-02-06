import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Scale, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const LegalLayout = ({ children, title, icon: Icon, description }: { children: React.ReactNode, title: string, icon: any, description: string }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20 text-center space-y-6">
          <div className="w-16 h-16 bg-rogue-accent/10 rounded-full flex items-center justify-center mx-auto">
            <Icon className="w-8 h-8 text-rogue-accent" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-rogue-green">{title}</h1>
          <p className="text-xl text-muted-foreground italic font-serif">{description}</p>
        </header>
        <div className="bg-white p-8 md:p-16 sketchy-border shadow-soft">
          <div className="prose prose-lg text-muted-foreground max-w-none prose-headings:font-serif prose-headings:text-rogue-green">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);
export function AdvertisingPage() {
  return (
    <LegalLayout
      title="Partner with Us"
      icon={Star}
      description="Elevate your brand with high-end editorial coverage in Southern Oregon's premier directory."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 not-prose mb-16">
        {[
          {
            tier: "The Spotlight",
            price: "$299/mo",
            features: ["Full Editorial Profile", "Professional Photography", "Social Media Takeover", "Category Top-Tier Placement"]
          },
          {
            tier: "The Feature",
            price: "$99/mo",
            features: ["Enhanced Business Profile", "Photo Gallery Inclusion", "Community Newsletter Mention", "Standard SEO Optimization"]
          }
        ].map((pkg, i) => (
          <div key={i} className="p-8 bg-paper-cream sketchy-border border-2 border-rogue-green/10 hover:border-rogue-accent transition-all group">
            <h3 className="text-3xl font-serif font-bold text-rogue-green mb-2">{pkg.tier}</h3>
            <span className="text-2xl font-hand text-rogue-accent block mb-6">{pkg.price}</span>
            <ul className="space-y-4 mb-8">
              {pkg.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium text-rogue-green">
                  <Star className="w-4 h-4 text-rogue-accent fill-rogue-accent" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/submit">
              <Button className="w-full bg-rogue-green group-hover:bg-rogue-accent transition-colors py-6 rounded-xl">Inquire Now</Button>
            </Link>
          </div>
        ))}
      </div>
      <h2>Why Partner with Rogue Valley Showcase?</h2>
      <p>We don't just list your business. We craft an experience. Our platform is designed for users who value quality, craftsmanship, and local authenticity. By partnering with us, you align your brand with the very best Southern Oregon has to offer.</p>
    </LegalLayout>
  );
}
export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" icon={Shield} description="Our commitment to your digital privacy and data security.">
      <h2>Information We Collect</h2>
      <p>We collect information you provide directly to us, such as when you submit a business, sign up for our newsletter, or contact us. This may include your name, email address, and business details.</p>
      <h2>How We Use It</h2>
      <p>Your data is used solely to provide and improve the Rogue Valley Showcase experience. We never sell your personal information to third parties.</p>
      <h2>Your Choices</h2>
      <p>You can request to see, change, or delete your personal data at any time by contacting us at privacy@roguevalleyshowcase.com.</p>
    </LegalLayout>
  );
}
export function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" icon={Scale} description="The fine print regarding the use of our showcase platform.">
      <h2>Platform Use</h2>
      <p>The Rogue Valley Showcase is provided for informational purposes only. While we strive for accuracy, we are not responsible for errors in business listings or event details.</p>
      <h2>Intellectual Property</h2>
      <p>All editorial content and photography on this site is the property of LEVERAGEAI LLC or our featured partners and may not be used without express written permission.</p>
      <h2>Contact Us</h2>
      <p>If you have questions about these terms, please reach out to legal@roguevalleyshowcase.com.</p>
    </LegalLayout>
  );
}