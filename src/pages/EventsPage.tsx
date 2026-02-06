import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { api } from '@/lib/api-client';
import type { LocalEvent } from '@shared/types';
import { Calendar, MapPin, Ticket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
export function EventsPage() {
  const [events, setEvents] = useState<LocalEvent[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api<LocalEvent[]>('/api/events')
      .then(setEvents)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-24 md:py-32">
        <header className="mb-16">
          <span className="font-hand text-2xl text-rogue-accent block mb-2">Community Calendar</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-rogue-green mb-6">Local Happenings</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            From seasonal vineyard festivals to downtown maker markets, stay connected with the valley's vibrant social scene.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-12">
          {loading ? (
            Array.from({ length: 2 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-2xl" />
            ))
          ) : (
            events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row bg-white sketchy-border overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-rogue-accent text-white border-none">{event.category}</Badge>
                      <span className="font-bold text-rogue-green flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> {event.date}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-rogue-green">{event.title}</h3>
                    <div className="flex items-center gap-6 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-rogue-accent" />
                        <span className="text-sm font-medium">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ticket className="w-4 h-4 text-rogue-accent" />
                        <span className="text-sm font-medium">{event.price}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">{event.description}</p>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <Button className="bg-rogue-green hover:bg-rogue-green/90 text-white px-8 rounded-xl h-12">RSVP & Tickets</Button>
                    <Button variant="outline" className="rounded-xl h-12 border-rogue-green/20">Save to Calendar</Button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}