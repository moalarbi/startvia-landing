'use client';
import { ArrowUpRight, Check, HelpCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import { addOns, companyTypes, copy, faqs, Lang, packages, steps, why } from '@/data/content';
import { packageMessage, whatsappLink } from '@/lib/whatsapp';

export function TrustStrip({lang}:{lang:Lang}){
  return (
    <section className="border-y border-hairline-dark bg-surface-card/10 py-md">
      <div className="mx-auto max-w-content px-md">
        <div className="flex flex-wrap items-center justify-center gap-lg md:justify-between opacity-50">
          {copy[lang].trust.map((t, i)=>(
            <div key={t} className="flex items-center gap-xs text-[11px] font-bold tracking-wider text-muted uppercase hover:text-primary transition-colors cursor-default">
              <span className="text-primary">/</span>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompanyTypes({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section id="types" className="mx-auto max-w-content px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="flex flex-col items-center text-center mb-xl">
        <h2 className="text-display-sm font-bold text-white">{c.companyTitle}</h2>
        <p className="mt-sm max-w-xl text-body-sm text-muted">{c.companyText}</p>
      </div>
      <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
        {companyTypes.map(t=>(
          <div key={t.key} className="card-official group hover:-translate-y-1 transition-all duration-300">
            <div className="grid h-10 w-10 place-items-center rounded bg-canvas-dark border border-hairline-dark text-primary font-bold text-title-sm shadow-inner group-hover:bg-primary group-hover:text-ink transition-all">
              {t.key[0]}
            </div>
            <h3 className="mt-md text-title-sm font-bold text-white">{t.key}</h3>
            <p className="mt-sm min-h-[60px] text-body-sm leading-relaxed text-muted">
              {lang==='en'?t.en:t.ar}
            </p>
            <a href={whatsappLink(packageMessage(undefined,t.key))} className="mt-md inline-flex items-center gap-xs font-bold text-primary text-xs hover:gap-sm transition-all">
              {c.cta}<ArrowUpRight size={14}/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks({lang}:{lang:Lang}){
  return (
    <section id="how" className="bg-surface-card/20 py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold text-white mb-xl">{copy[lang].howTitle}</h2>
        <div className="grid gap-lg md:grid-cols-4">
          {steps.map((s,i)=>(
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-hairline-dark bg-canvas-dark text-primary text-title-sm font-bold shadow-sm group-hover:border-primary/50 transition-colors">
                {i+1}
              </div>
              <p className="mt-md text-body-sm font-bold text-white group-hover:text-primary transition-colors">
                {lang==='en'?s.en:s.ar}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section id="pricing" className="mx-auto max-w-content px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="flex flex-col items-center text-center mb-xl">
        <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-xs">Pricing Plans</span>
        <h2 className="text-display-sm font-bold text-white">{c.pricingTitle}</h2>
        <p className="mt-sm max-w-xl text-body-sm text-muted">{c.pricingText}</p>
      </div>
      <div className="grid gap-md lg:grid-cols-3">
        {packages.map(p=>(
          <div key={p.name} className={`flex flex-col rounded-xl p-lg border transition-all duration-300 hover:shadow-soft-lg ${p.popular?'bg-surface-elevated border-primary/50 shadow-soft-lg scale-[1.02]':'bg-surface-card border-hairline-dark hover:border-muted/30'}`}>
            <div className="mb-md">
              <div className="flex items-center justify-between">
                <h3 className="text-title-sm font-bold text-white">{p.name}</h3>
                {p.popular && <span className="text-[9px] font-bold bg-primary/10 text-primary px-xs py-0.5 rounded border border-primary/20">POPULAR</span>}
              </div>
              <p className="mt-xs text-xs text-muted min-h-[32px]">
                {lang==='en'?p.en:p.ar}
              </p>
            </div>
            <div className="mb-md flex items-baseline gap-xs">
              <span className="text-display-sm font-bold text-primary">{p.price}</span>
              <span className="text-[10px] text-muted uppercase font-medium">/ one-time</span>
            </div>
            <ul className="mb-lg flex-grow space-y-xs">
              {(lang==='en'?p.featuresEn:p.featuresAr).map(f=>(
                <li key={f} className="flex items-start gap-xs text-xs text-body">
                  <Check size={12} className="mt-0.5 text-trading-up shrink-0"/>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href={whatsappLink(packageMessage(p.name))} className={`flex w-full items-center justify-center gap-xs rounded py-xs text-xs font-bold transition-all ${p.popular?'bg-primary text-ink hover:bg-primary-active':'bg-canvas-dark text-white border border-hairline-dark hover:bg-surface-elevated'}`}>
              {c.cta}
              <ArrowUpRight size={14}/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AddOns({lang}:{lang:Lang}){
  return (
    <section id="services" className="bg-surface-card/10 py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold text-white mb-xl">{copy[lang].addTitle}</h2>
        <div className="grid gap-sm sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((a,i)=>(
            <div key={i} className="flex items-center gap-sm rounded-lg border border-hairline-dark bg-surface-card p-md hover:border-primary/40 hover:bg-surface-elevated transition-all cursor-default group">
              <Zap size={14} className="text-primary shrink-0 group-hover:scale-110 transition-transform"/>
              <span className="text-xs font-bold text-body">{lang==='en'?a[0]:a[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs({lang}:{lang:Lang}){
  const icons = [<Shield key="1" size={24}/>, <Clock key="2" size={24}/>, <Star key="3" size={24}/>];
  return (
    <section className="mx-auto max-w-content px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <h2 className="text-center text-display-sm font-bold text-white mb-xl">{copy[lang].whyTitle}</h2>
      <div className="grid gap-md md:grid-cols-3">
        {why.map((w,i)=>(
          <div key={i} className="card-official group">
            <div className="mb-md text-primary group-hover:scale-110 transition-transform">
              {icons[i]}
            </div>
            <h3 className="text-title-sm font-bold text-white">{w[0]}</h3>
            <p className="mt-sm text-body-sm leading-relaxed text-muted">{w[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQ({lang}:{lang:Lang}){
  return (
    <section id="faq" className="bg-canvas-dark py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-2xl px-md">
        <h2 className="text-center text-display-sm font-bold text-white mb-xl">{copy[lang].faqTitle}</h2>
        <div className="space-y-sm">
          {faqs.map((f,i)=>(
            <details key={i} className="group rounded-lg border border-hairline-dark bg-surface-card transition-all hover:border-muted/20">
              <summary className="flex cursor-pointer items-center justify-between p-md text-body-sm font-bold text-white hover:text-primary">
                <div className="flex items-center gap-xs">
                  <HelpCircle size={16} className="text-muted group-open:text-primary"/>
                  {lang==='en'?f[0]:f[2]}
                </div>
                <span className="text-[10px] text-muted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-md pb-md text-xs leading-relaxed text-muted border-t border-hairline-dark/30 pt-sm animate-in fade-in duration-300">
                {lang==='en'?f[1]:f[3]}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section className="px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-4xl rounded-2xl bg-primary p-lg text-center text-ink shadow-soft-lg md:p-xl group">
        <h2 className="text-display-sm font-bold text-ink leading-tight">{c.finalTitle}</h2>
        <p className="mx-auto mt-md max-w-lg text-body-sm font-medium text-ink/70">{c.finalText}</p>
        <a href={whatsappLink(packageMessage())} className="mt-lg inline-flex items-center gap-xs rounded bg-ink px-xl py-md text-body-sm font-bold text-white hover:bg-ink/90 transition-all active:scale-95 shadow-lg">
          {c.cta}
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
        </a>
      </div>
    </section>
  );
}
