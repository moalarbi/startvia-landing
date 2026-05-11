'use client';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { copy, Lang } from '@/data/content';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';

export default function Hero({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section className="mx-auto grid max-w-content items-center gap-lg px-md pb-xxl pt-xl md:grid-cols-2 md:pt-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="text-center md:text-start">
        <span className="inline-flex rounded-full bg-white/80 px-md py-xs text-body-sm font-bold text-violet shadow-sm">✦ {c.heroBadge}</span>
        <h1 className="mt-md text-display-sm font-bold tracking-tight text-ink md:text-hero">{c.heroTitle}</h1>
        <p className="mx-auto mt-md max-w-2xl text-body-md text-ink/65 md:mx-0">{c.heroText}</p>
        <div className="mt-xl flex flex-col justify-center gap-sm sm:flex-row md:justify-start">
          <a href={whatsappLink(packageMessage())} className="inline-flex items-center justify-center gap-xs rounded-md bg-violet px-lg py-md text-body-md font-bold text-white shadow-lg shadow-violet-300/60">
            <MessageCircle size={18}/>{c.cta}
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center gap-xs rounded-md bg-white px-lg py-md text-body-md font-bold text-ink shadow-sm border border-violet-100">
            {c.viewPackages}<ArrowRight size={18}/>
          </a>
        </div>
      </div>
      <div className="relative min-h-[520px]">
        <div className="absolute left-2 top-6 w-72 rounded-xl bg-white p-lg shadow-soft">
          <p className="text-title-sm font-bold">Company Type</p>
          {['LLC','C-Corp','S-Corp'].map((x,i)=>(
            <div key={x} className="mt-md flex items-center gap-sm rounded-lg border border-violet-100 p-md">
              <span className={`h-3 w-3 rounded-full ${i===0?'bg-violet':'bg-violet-200'}`}/>
              <span className="text-body-md font-semibold">{x}</span>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 w-72 rounded-xl bg-[#2B1688] p-lg text-white shadow-soft">
          <p className="text-body-sm opacity-80">Timeline</p>
          <h3 className="mt-xs text-title-lg font-bold">Formation Journey</h3>
          {['Choose Package','WhatsApp Onboarding','Document Checklist','Launch Ready'].map((x)=>(
            <div key={x} className="mt-md flex items-center gap-sm">
              <CheckCircle2 size={18}/>
              <span className="text-body-md">{x}</span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-10 w-[330px] rounded-xl bg-white p-xl shadow-soft">
          <p className="text-title-sm font-bold">Growth Formation</p>
          <div className="mt-xs text-display-md font-bold">$399</div>
          <p className="mt-md text-body-sm text-ink/60">Most popular setup for founders.</p>
          <div className="mt-lg h-3 rounded-full bg-lavender">
            <div className="h-3 w-2/3 rounded-full bg-violet"/>
          </div>
        </div>
        <div className="absolute bottom-0 right-8 w-64 rounded-lg bg-white/80 p-md shadow-soft backdrop-blur">
          <div className="flex items-center gap-sm">
            <MessageCircle className="text-violet"/>
            <div>
              <p className="text-body-md font-bold">WhatsApp Support</p>
              <p className="text-body-sm text-ink/60">Manual onboarding after CTA.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
