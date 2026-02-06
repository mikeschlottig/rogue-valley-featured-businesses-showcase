import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { api } from "@/lib/api-client";
import type { Business } from "@shared/types";
import { Search } from "lucide-react";
interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (open) {
      api<Business[]>('/api/businesses')
        .then(setBusinesses)
        .catch(err => console.error("Search fetch failed", err));
    }
  }, [open]);
  const handleSelect = (slug: string) => {
    onOpenChange(false);
    navigate(`/business/${slug}`);
  };
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <div className="bg-paper-cream p-1">
        <CommandInput placeholder="Search businesses, artisans, or stays..." />
        <CommandList className="max-h-[300px] md:max-h-[400px]">
          <CommandEmpty>No results found for your search.</CommandEmpty>
          <CommandGroup heading="Rogue Valley Businesses">
            {businesses.map((biz) => (
              <CommandItem
                key={biz.id}
                onSelect={() => handleSelect(biz.slug)}
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-accent"
              >
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-rogue-green">{biz.title}</span>
                  <span className="text-xs text-muted-foreground line-clamp-1">{biz.description}</span>
                </div>
                <Badge variant="outline" className="ml-2 bg-white text-[10px] uppercase tracking-tighter">
                  {biz.categorySlug.replace('-', ' ')}
                </Badge>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </div>
    </CommandDialog>
  );
}