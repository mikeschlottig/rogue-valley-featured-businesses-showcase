import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Star, CheckCircle2 } from "lucide-react";
interface JoinDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function JoinDialog({ open, onOpenChange }: JoinDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };
  return (
    <Dialog open={open} onOpenChange={(val) => {
      onOpenChange(val);
      if (!val) setTimeout(() => setIsSubmitted(false), 300);
    }}>
      <DialogContent className="sm:max-w-[425px] bg-paper-cream sketchy-border p-8">
        {!isSubmitted ? (
          <>
            <DialogHeader className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-rogue-accent/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-rogue-accent" />
              </div>
              <DialogTitle className="text-3xl font-serif font-bold text-rogue-green">Join the Showcase</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Apply to have your business featured in our editorial directory. Our curators will review your submission within 48 hours.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="biz-name" className="text-rogue-green font-bold">Business Name</Label>
                <Input id="biz-name" required placeholder="e.g. Applegate Vineyard" className="bg-white/50 border-rogue-green/20 focus:ring-rogue-accent" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category" className="text-rogue-green font-bold">Industry Sector</Label>
                <Select required>
                  <SelectTrigger className="bg-white/50 border-rogue-green/20">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hospitality">Hospitality & Stay</SelectItem>
                    <SelectItem value="professional">Professional Services</SelectItem>
                    <SelectItem value="artisans">Artisans & Crafts</SelectItem>
                    <SelectItem value="dining">Fine Dining</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-rogue-green font-bold">Contact Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="bg-white/50 border-rogue-green/20" />
              </div>
              <Button type="submit" disabled={loading} className="w-full bg-rogue-accent hover:bg-rogue-accent/90 text-white rounded-xl py-6 text-lg font-bold transition-all">
                {loading ? "Sending..." : "Submit Application"}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-rogue-green">Application Received!</h2>
            <p className="text-muted-foreground">
              Thank you for reaching out. A Valley Curator will be in touch shortly to discuss your spotlight.
            </p>
            <Button onClick={() => onOpenChange(false)} variant="outline" className="w-full rounded-xl py-6">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}