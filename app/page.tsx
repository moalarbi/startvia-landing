'use client';
import { useState } from 'react';
import { Lang } from '@/data/content';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { BentoFeatures, CompanyTypes, FAQ, FinalCTA, HowItWorks, Pricing, TrustStrip, WhyUs } from '@/components/Sections';

export default function Page() {
  const [lang, setLang] = useState<Lang>('en');
  
  return (
    <main className="min-h-screen bg-canvas-dark">
      <Header lang={lang} setLang={setLang}/>
      <Hero lang={lang}/>
      <TrustStrip lang={lang}/>
      <CompanyTypes lang={lang}/>
      <HowItWorks lang={lang}/>
      <Pricing lang={lang}/>
      <BentoFeatures lang={lang}/>
      <WhyUs lang={lang}/>
      <FAQ lang={lang}/>
      <FinalCTA lang={lang}/>
      <footer className="px-md pb-xl text-center text-[10px] font-bold tracking-widest text-muted uppercase">
        © 2026 Startvia Infrastructure. All rights reserved.
      </footer>
    </main>
  );
}
