'use client';
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Globe } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-canvas-dark pt-[140px] pb-xl" dir={lang==='ar'?'rtl':'ltr'}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
      
      <div className={`relative z-10 mx-auto max-w-content px-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center text-center">
          <h1 className="max-w-3xl text-display-md font-bold tracking-tight text-white md:text-hero leading-[1.15]">
            {c.heroTitle.split(' ').map((word, i) => 
              word.toLowerCase().includes('startvia') || i > 2 ? <span key={i} className="text-primary"> {word}</span> : <span key={i}> {word}</span>
            )}
          </h1>
          
          <p className="mt-md max-w-xl text-body-md text-muted leading-relaxed">
            {c.heroText}
          </p>

          <div className="mt-lg flex flex-col items-center justify-center gap-sm sm:flex-row">
            <a href={whatsappLink(packageMessage())} className="btn-primary px-xl group">
              <MessageCircle size={16} className="group-hover:scale-110 transition-transform"/>
              {c.cta}
            </a>
            <a href="#pricing" className="btn-secondary px-xl group">
              {c.viewPackages}
              <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${lang==='ar'?'rotate-180 group-hover:-translate-x-1':''}`}/>
            </a>
          </div>

          {/* Minimalist Trust Indicators */}
          <div className="mt-xl flex flex-wrap justify-center gap-lg opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-xs text-xs font-medium text-body">
              <ShieldCheck size={14} className="text-primary"/>
              <span>SECURE FORMATION</span>
            </div>
            <div className="flex items-center gap-xs text-xs font-medium text-body">
              <Zap size={14} className="text-primary"/>
              <span>FAST PROCESSING</span>
            </div>
            <div className="flex items-center gap-xs text-xs font-medium text-body">
              <Globe size={14} className="text-primary"/>
              <span>GLOBAL SUPPORT</span>
            </div>
          </div>
        </div>

        {/* Professional Dashboard Mockup - Smaller & More Refined */}
        <div className={`mt-xxl relative mx-auto max-w-3xl rounded-xl border border-hairline-dark bg-surface-card/20 p-xs shadow-soft-lg backdrop-blur-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="overflow-hidden rounded-lg border border-hairline-dark bg-canvas-dark shadow-inner">
            <div className="flex items-center gap-xs border-b border-hairline-dark bg-surface-card px-md py-xs">
              <div className="flex gap-xs">
                <div className="h-2 w-2 rounded-full bg-trading-down/30"></div>
                <div className="h-2 w-2 rounded-full bg-primary/30"></div>
                <div className="h-2 w-2 rounded-full bg-trading-up/30"></div>
              </div>
              <div className="mx-auto rounded bg-canvas-dark px-lg py-0.5 text-[9px] text-muted/50 font-mono">startvia.app/console</div>
            </div>
            <div className="grid grid-cols-12 gap-sm p-md">
              <div className="col-span-3 space-y-sm">
                <div className="h-16 rounded bg-surface-card/50 animate-pulse"></div>
                <div className="h-32 rounded bg-surface-card/30"></div>
              </div>
              <div className="col-span-9 space-y-sm">
                <div className="h-8 rounded bg-primary/5 border border-primary/10"></div>
                <div className="grid grid-cols-3 gap-sm">
                  <div className="h-20 rounded bg-surface-card/40"></div>
                  <div className="h-20 rounded bg-surface-card/40"></div>
                  <div className="h-20 rounded bg-surface-card/40"></div>
                </div>
                <div className="h-24 rounded bg-surface-card/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
