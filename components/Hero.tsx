'use client';
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Globe, ChevronRight } from 'lucide-react';
import { copy, Lang } from '@/data/content';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';
import { useEffect, useState } from 'react';

export default function Hero({lang}:{lang:Lang}){
  const c = copy[lang];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-canvas-dark pt-[120px] pb-xl md:pt-[160px]" dir={lang==='ar'?'rtl':'ltr'}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" 
           style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
      
      <div className={`relative z-10 mx-auto max-w-content px-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center text-center">
          {/* Institutional Badge */}
          <div className="mb-md inline-flex items-center gap-xs rounded-full border border-hairline-dark bg-surface-card/30 px-sm py-1 text-[10px] font-bold tracking-widest text-primary uppercase backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
            </span>
            {c.heroBadge}
          </div>

          <h1 className="max-w-4xl text-display-md font-bold tracking-tight text-white md:text-hero leading-[1.1] mb-md">
            {c.heroTitle.split(' ').map((word, i) => 
              word.toLowerCase().includes('startvia') || i > 3 ? <span key={i} className="text-primary"> {word}</span> : <span key={i}> {word}</span>
            )}
          </h1>
          
          <p className="max-w-2xl text-body-md text-muted leading-relaxed md:text-title-sm mb-lg">
            {c.heroText}
          </p>

          <div className="flex flex-col w-full sm:w-auto items-center justify-center gap-sm sm:flex-row mb-xl">
            <a href={whatsappLink(packageMessage())} className="btn-primary w-full sm:w-auto px-xl group">
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform"/>
              {c.cta}
            </a>
            <a href="#pricing" className="btn-secondary w-full sm:w-auto px-xl group">
              {c.viewPackages}
              <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1 ${lang==='ar'?'rotate-180 group-hover:-translate-x-1':''}`}/>
            </a>
          </div>

          {/* Institutional Trust Bar */}
          <div className="flex flex-wrap justify-center gap-md md:gap-xl opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {['DELAWARE','WYOMING','FLORIDA','TEXAS'].map(state => (
              <span key={state} className="text-[10px] font-black tracking-[0.3em] text-white">{state}</span>
            ))}
          </div>
        </div>

        {/* Refined Dashboard Mockup - Mobile Optimized */}
        <div className={`mt-xl md:mt-xxl relative mx-auto max-w-4xl rounded-xl border border-hairline-dark bg-surface-card/10 p-1 md:p-xs shadow-soft-lg backdrop-blur-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="overflow-hidden rounded-lg border border-hairline-dark bg-canvas-dark shadow-inner">
            <div className="flex items-center gap-xs border-b border-hairline-dark bg-surface-card px-md py-2">
              <div className="flex gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-trading-down/40"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-primary/40"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-trading-up/40"></div>
              </div>
              <div className="mx-auto rounded bg-canvas-dark px-lg py-0.5 text-[8px] text-muted/40 font-mono tracking-tighter">infrastructure.startvia.app</div>
            </div>
            <div className="p-md md:p-lg">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
                <div className="md:col-span-4 space-y-md">
                  <div className="h-20 rounded bg-surface-card/40 border border-hairline-dark/50"></div>
                  <div className="hidden md:block h-40 rounded bg-surface-card/20"></div>
                </div>
                <div className="md:col-span-8 space-y-md">
                  <div className="h-10 rounded bg-primary/5 border border-primary/10 flex items-center px-md">
                    <div className="h-1.5 w-1/3 rounded bg-primary/20"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-md">
                    <div className="h-24 rounded bg-surface-card/30"></div>
                    <div className="h-24 rounded bg-surface-card/30"></div>
                  </div>
                  <div className="h-20 rounded bg-surface-card/10"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-trading-up/5 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
