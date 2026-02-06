import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { api } from '@/lib/api-client';
export function SubmitPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    email: '',
    story: '',
    website: ''
  });
  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => s - 1);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api('/api/submissions', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      next();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16 text-center space-y-4">
            <span className="font-hand text-3xl text-rogue-accent">The Next Chapter</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-rogue-green">Join the Showcase</h1>
            <div className="flex justify-center gap-4 pt-4">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 w-16 rounded-full transition-colors ${step >= i ? 'bg-rogue-accent' : 'bg-rogue-green/10'}`} />
              ))}
            </div>
          </header>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 md:p-12 sketchy-border space-y-8"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-xl font-serif font-bold text-rogue-green">What is your business called?</Label>
                    <Input 
                      placeholder="e.g. Rogue River Pottery"
                      className="bg-paper-cream border-rogue-green/20 h-16 text-lg" 
                      value={formData.businessName}
                      onChange={e => setFormData({...formData, businessName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xl font-serif font-bold text-rogue-green">How can we contact you?</Label>
                    <Input 
                      type="email"
                      placeholder="you@example.com"
                      className="bg-paper-cream border-rogue-green/20 h-16 text-lg"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <Button onClick={next} className="w-full bg-rogue-green py-8 text-xl rounded-2xl">Continue to Story</Button>
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 md:p-12 sketchy-border space-y-8"
              >
                <div className="space-y-2">
                  <Label className="text-xl font-serif font-bold text-rogue-green">Tell us your story</Label>
                  <p className="text-sm text-muted-foreground mb-4">What makes your business a "gem" of the Rogue Valley?</p>
                  <Textarea 
                    placeholder="Founded in 1982 by..."
                    className="bg-paper-cream border-rogue-green/20 min-h-[250px] text-lg leading-relaxed"
                    value={formData.story}
                    onChange={e => setFormData({...formData, story: e.target.value})}
                  />
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" onClick={prev} className="flex-1 py-8 text-xl rounded-2xl"><ArrowLeft className="mr-2" /> Back</Button>
                  <Button onClick={handleSubmit} disabled={loading} className="flex-[2] bg-rogue-accent py-8 text-xl rounded-2xl">
                    {loading ? "Processing..." : "Submit Application"}
                  </Button>
                </div>
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-8"
              >
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-200">
                  <CheckCircle2 className="w-16 h-16 text-green-600" />
                </div>
                <h2 className="text-5xl font-serif font-bold text-rogue-green">Application Sent!</h2>
                <p className="text-xl text-muted-foreground max-w-md mx-auto">
                  Our curators are already reviewing your story. We'll be in touch within 48 hours to discuss the next steps.
                </p>
                <Button asChild className="bg-rogue-green py-6 px-12 rounded-xl text-lg mt-8">
                  <a href="/">Back to Home</a>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}