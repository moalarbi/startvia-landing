"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Lang, companyTypes, copy } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';

const accordionImages = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
];

const AccordionItem = ({ item, isActive, onMouseEnter, lang }: { item: any, isActive: boolean, onMouseEnter: () => void, lang: Lang }) => {
  return (
    <div
      className={cn(
        "relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer border border-hairline-dark transition-all duration-700 ease-in-out",
        isActive ? "w-[280px] md:w-[400px] border-primary/30" : "w-[50px] md:w-[70px]"
      )}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
      />
      <div className={cn(
        "absolute inset-0 bg-canvas-dark/60 transition-opacity duration-500",
        isActive ? "opacity-40" : "opacity-80"
      )}></div>

      <div className={cn(
        "absolute text-white font-bold whitespace-nowrap transition-all duration-500 ease-in-out",
        isActive 
          ? "bottom-8 left-8 rotate-0 opacity-100 scale-100" 
          : "bottom-24 left-1/2 -translate-x-1/2 rotate-90 opacity-40 scale-90"
      )}>
        <span className={cn(
          "text-sm md:text-lg tracking-tight",
          isActive && "text-primary"
        )}>
          {item.title}
        </span>
      </div>
    </div>
  );
};

export function LandingAccordionItem({ lang }: { lang: Lang }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const c = copy[lang];

  const items = companyTypes.map((t, i) => ({
    id: i,
    title: t.key,
    description: lang === 'en' ? t.en : t.ar,
    imageUrl: accordionImages[i] || accordionImages[0]
  }));

  return (
    <section id="types" className="mx-auto max-w-content px-md py-section" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-xs rounded-full border border-hairline-dark bg-surface-card/30 px-sm py-1 text-[10px] font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
            {lang === 'en' ? 'Entity Architecture' : 'هندسة الكيانات'}
          </div>
          <h2 className="text-display-sm md:text-display-md font-bold text-white leading-tight tracking-tight">
            {c.companyTitle}
          </h2>
          <p className="mt-6 text-body-md text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {c.companyText}
          </p>
          
          <div className="mt-8 p-6 rounded-xl border border-hairline-dark bg-surface-card/20 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-title-sm font-bold text-primary mb-2">{items[activeIndex].title}</h3>
            <p className="text-body-sm text-muted leading-relaxed">{items[activeIndex].description}</p>
            <a 
              href={whatsappLink(packageMessage(undefined, items[activeIndex].title))}
              className="mt-6 inline-flex items-center gap-2 bg-primary text-ink font-bold px-8 py-3 rounded-full shadow-lg hover:bg-primary-active transition-all active:scale-95 text-sm"
            >
              {c.cta}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Side: Image Accordion */}
        <div className="w-full lg:w-1/2 overflow-hidden">
          <div className="flex flex-row items-center justify-center gap-3 md:gap-4 p-4">
            {items.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
