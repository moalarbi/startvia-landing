'use client';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { copy, Lang } from '@/data/content';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';

export default function Hero({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section className="mx-auto grid max-w-content items-center gap-lg px-md pb-xxl pt-xl md:grid-cols-2 md:pt-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="text-center md:text-start">
        <span className="inline-flex rounded-full bg-surface-elevated px-md py-xs text-body-sm font-bold text-primary shadow-sm">✦ {c.heroBadge}</span>
        <h1 className="mt-md text-display-sm font-bold tracking-tight text-white md:text-hero leading-tight">
          {c.heroTitle.split(' ').map((word, i) => 
            word.toLowerCase().includes('startvia') || i > 2 ? <span key={i} className="text-primary"> {word}</span> : <span key={i}> {word}</span>
          )}
        </h1>
        <p className="mx-auto mt-md max-w-2xl text-body-md text-body/65 md:mx-0">{c.heroText}</p>
        <div className="mt-xl flex flex-col justify-center gap-sm sm:flex-row md:justify-start">
          <a href={whatsappLink(packageMessage())} className="inline-flex items-center justify-center gap-xs rounded-md bg-primary px-lg py-md text-body-md font-bold text-ink hover:bg-primary-active transition-colors shadow-lg shadow-primary/10">
            <MessageCircle size={18}/>{c.cta}
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center gap-xs rounded-md bg-surface-card px-lg py-md text-body-md font-bold text-white shadow-sm border border-hairline-dark hover:bg-surface-elevated transition-colors">
            {c.viewPackages}<ArrowRight size={18}/>
          </a>
        </div>
      </div>
      <div className="relative min-h-[520px] hidden md:block">
        <div className="absolute left-2 top-6 w-72 rounded-xl bg-surface-card p-lg shadow-soft border border-hairline-dark">
          <p className="text-title-sm font-bold text-white">Company Type</p>
          {['LLC','C-Corp','S-Corp'].map((x,i)=>(
            <div key={x} className="mt-md flex items-center gap-sm rounded-lg border border-hairline-dark p-md bg-canvas-dark">
              <span className={`h-3 w-3 rounded-full ${i===0?'bg-primary':'bg-surface-elevated'}`}/>
              <span className="text-body-md font-semibold text-body">{x}</span>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 w-72 rounded-xl bg-surface-elevated p-lg text-white shadow-soft border border-primary/20">
          <p className="text-body-sm text-muted">Timeline</p>
          <h3 className="mt-xs text-title-lg font-bold text-primary">Formation Journey</h3>
          {['Choose Package','WhatsApp Onboarding','Document Checklist','Launch Ready'].map((x)=>(
            <div key={x} className="mt-md flex items-center gap-sm">
              <CheckCircle2 size={18} className="text-trading-up"/>
              <span className="text-body-md text-body">{x}</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-10 w-[330px] rounded-xl bg-surface-card p-xl shadow-soft border border-hairline-dark">
          <p className="text-title-sm font-bold text-white">Growth Formation</p>
          <div className="mt-xs text-display-md font-bold text-primary">$399</div>
          <p className="mt-md text-body-sm text-muted">Most popular setup for founders.</p>
          <div className="mt-lg h-3 rounded-full bg-canvas-dark">
            <div className="h-3 w-2/3 rounded-full bg-primary"/>
          </div>
        </div>
        <div className="absolute bottom-0 right-8 w-64 rounded-lg bg-surface-elevated/80 p-md shadow-soft backdrop-blur border border-hairline-dark">
          <div className="flex items-center gap-sm">
            <MessageCircle className="text-primary"/>
            <div>
              <p className="text-body-md font-bold text-white">WhatsApp Support</p>
              <p className="text-body-sm text-muted">Manual onboarding after CTA.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
