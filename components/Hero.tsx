'use client';
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Globe } from 'lucide-react';
import { copy, Lang } from '@/data/content';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';

export default function Hero({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section className="relative overflow-hidden bg-canvas-dark pt-[160px] pb-section" dir={lang==='ar'?'rtl':'ltr'}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{backgroundImage: 'radial-gradient(#2b3139 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
      
      {/* Glow Effect */}
      <div className="absolute -top-24 left-1/2 z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"></div>

      <div className="relative z-10 mx-auto max-w-content px-md">
        <div className="flex flex-col items-center text-center">

          
          <h1 className="mt-lg max-w-4xl text-display-md font-bold tracking-tight text-white md:text-hero leading-[1.1]">
            {c.heroTitle.split(' ').map((word, i) => 
              word.toLowerCase().includes('startvia') || i > 2 ? <span key={i} className="text-primary"> {word}</span> : <span key={i}> {word}</span>
            )}
          </h1>
          
          <p className="mt-lg max-w-2xl text-title-sm text-muted leading-relaxed md:text-title-md">
            {c.heroText}
          </p>

          <div className="mt-xl flex flex-col items-center justify-center gap-md sm:flex-row">
            <a href={whatsappLink(packageMessage())} className="group relative inline-flex items-center justify-center gap-xs overflow-hidden rounded-md bg-primary px-xl py-md text-body-md font-bold text-ink transition-all hover:bg-primary-active shadow-lg shadow-primary/20">
              <MessageCircle size={20}/>
              {c.cta}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center gap-xs rounded-md border border-hairline-dark bg-surface-card px-xl py-md text-body-md font-bold text-white transition-all hover:bg-surface-elevated">
              {c.viewPackages}
              <ArrowRight size={20} className={lang==='ar'?'rotate-180':''}/>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-xxl grid grid-cols-2 gap-lg opacity-50 md:grid-cols-3 lg:gap-xxl">
            <div className="flex items-center gap-sm text-body-sm font-medium text-body">
              <ShieldCheck size={20} className="text-primary"/>
              <span>Secure Formation</span>
            </div>
            <div className="flex items-center gap-sm text-body-sm font-medium text-body">
              <Zap size={20} className="text-primary"/>
              <span>Fast Processing</span>
            </div>
            <div className="flex items-center gap-sm text-body-sm font-medium text-body md:col-span-1 col-span-2 justify-center">
              <Globe size={20} className="text-primary"/>
              <span>Global Support</span>
            </div>
          </div>
        </div>

        {/* Floating Elements / Mockup Area */}
        <div className="mt-xxl relative mx-auto max-w-4xl rounded-2xl border border-hairline-dark bg-surface-card/30 p-sm shadow-2xl backdrop-blur-sm">
          <div className="overflow-hidden rounded-xl border border-hairline-dark bg-canvas-dark shadow-inner">
            <div className="flex items-center gap-xs border-b border-hairline-dark bg-surface-card px-md py-sm">
              <div className="flex gap-xs">
                <div className="h-3 w-3 rounded-full bg-trading-down/50"></div>
                <div className="h-3 w-3 rounded-full bg-primary/50"></div>
                <div className="h-3 w-3 rounded-full bg-trading-up/50"></div>
              </div>
              <div className="mx-auto rounded bg-canvas-dark px-xl py-xs text-[10px] text-muted">startvia.app/dashboard</div>
            </div>
            <div className="grid grid-cols-12 gap-md p-lg">
              <div className="col-span-4 space-y-md">
                <div className="h-24 rounded-lg bg-surface-card animate-pulse"></div>
                <div className="h-48 rounded-lg bg-surface-card/50"></div>
              </div>
              <div className="col-span-8 space-y-md">
                <div className="h-12 rounded-lg bg-primary/10 border border-primary/20"></div>
                <div className="grid grid-cols-2 gap-md">
                  <div className="h-32 rounded-lg bg-surface-card"></div>
                  <div className="h-32 rounded-lg bg-surface-card"></div>
                </div>
                <div className="h-24 rounded-lg bg-surface-card/30"></div>
              </div>
            </div>
          </div>
          {/* Decorative Orbs */}
          <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/20 blur-2xl"></div>
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-trading-up/10 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
