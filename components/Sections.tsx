'use client';
import { ArrowUpRight, Check, HelpCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import { addOns, companyTypes, copy, faqs, Lang, packages, steps, why } from '@/data/content';
import { packageMessage, whatsappLink } from '@/lib/whatsapp';

export function TrustStrip({lang}:{lang:Lang}){
  return (
    <section className="border-y border-hairline-dark bg-surface-card/30 py-lg">
      <div className="mx-auto max-w-content px-md">
        <div className="flex flex-wrap items-center justify-center gap-xl md:justify-between">
          {copy[lang].trust.map((t, i)=>(
            <div key={t} className="flex items-center gap-sm text-body-sm font-bold text-muted hover:text-body transition-colors">
              <span className="text-primary">0{i+1}.</span>
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
      <div className="flex flex-col items-center text-center">
        <h2 className="text-display-sm font-bold md:text-display-md text-white">{c.companyTitle}</h2>
        <p className="mt-md max-w-2xl text-body-md text-muted">{c.companyText}</p>
      </div>
      <div className="mt-xl grid gap-lg sm:grid-cols-2 lg:grid-cols-4">
        {companyTypes.map(t=>(
          <div key={t.key} className="group relative overflow-hidden rounded-2xl border border-hairline-dark bg-surface-card p-lg transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10"></div>
            <div className="relative z-10">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-canvas-dark border border-hairline-dark text-primary font-bold text-title-lg shadow-inner group-hover:scale-110 transition-transform">
                {t.key[0]}
              </div>
              <h3 className="mt-lg text-title-lg font-bold text-white">{t.key}</h3>
              <p className="mt-md min-h-[80px] text-body-md leading-relaxed text-muted">
                {lang==='en'?t.en:t.ar}
              </p>
              <a href={whatsappLink(packageMessage(undefined,t.key))} className="mt-lg inline-flex items-center gap-xs font-bold text-primary text-body-md hover:gap-sm transition-all">
                {c.cta}<ArrowUpRight size={18}/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks({lang}:{lang:Lang}){
  return (
    <section id="how" className="relative overflow-hidden bg-canvas-dark py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="absolute left-0 top-0 h-full w-full opacity-5" style={{backgroundImage: 'linear-gradient(to right, #2b3139 1px, transparent 1px), linear-gradient(to bottom, #2b3139 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
      <div className="relative z-10 mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md text-white">{copy[lang].howTitle}</h2>
        <div className="mt-xl grid gap-lg md:grid-cols-4">
          {steps.map((s,i)=>(
            <div key={i} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className={`absolute top-10 hidden h-px w-full bg-gradient-to-r from-primary/50 to-transparent md:block ${lang==='ar'?'right-1/2': 'left-1/2'}`}></div>
              )}
              <div className="relative z-10 grid h-20 w-20 place-items-center rounded-full border-4 border-canvas-dark bg-surface-card text-primary shadow-xl">
                <span className="text-title-lg font-black">{i+1}</span>
              </div>
              <p className="mt-lg text-title-sm font-bold text-white md:text-title-md">
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
      <div className="flex flex-col items-center text-center">
        <span className="rounded-full bg-primary/10 px-md py-xs text-body-sm font-bold text-primary border border-primary/20">Transparent Pricing</span>
        <h2 className="mt-md text-display-sm font-bold md:text-display-md text-white">{c.pricingTitle}</h2>
        <p className="mt-md max-w-2xl text-body-md text-muted">{c.pricingText}</p>
      </div>
      <div className="mt-xl grid gap-lg lg:grid-cols-3">
        {packages.map(p=>(
          <div key={p.name} className={`group relative flex flex-col rounded-2xl p-xl transition-all duration-300 border ${p.popular?'bg-surface-elevated border-primary shadow-2xl shadow-primary/10 scale-105 z-10':'bg-surface-card border-hairline-dark hover:border-muted'}`}>
            {p.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-lg py-xs text-body-sm font-bold text-ink shadow-lg">
                Most Popular
              </div>
            )}
            <div className="mb-lg">
              <h3 className="text-title-lg font-bold text-white">{p.name}</h3>
              <p className="mt-sm text-body-sm text-muted min-h-[40px]">
                {lang==='en'?p.en:p.ar}
              </p>
            </div>
            <div className="mb-lg flex items-baseline gap-xs">
              <span className="text-display-md font-black text-primary">{p.price}</span>
              <span className="text-body-sm text-muted">/ one-time</span>
            </div>
            <ul className="mb-xl flex-grow space-y-md">
              {(lang==='en'?p.featuresEn:p.featuresAr).map(f=>(
                <li key={f} className="flex items-start gap-sm text-body-sm text-body">
                  <div className="mt-1 rounded-full bg-trading-up/10 p-0.5">
                    <Check size={14} className="text-trading-up"/>
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href={whatsappLink(packageMessage(p.name))} className={`flex w-full items-center justify-center gap-sm rounded-lg py-md text-body-md font-bold transition-all ${p.popular?'bg-primary text-ink hover:bg-primary-active':'bg-canvas-dark text-white border border-hairline-dark hover:bg-surface-elevated'}`}>
              {c.cta}
              <ArrowUpRight size={18}/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AddOns({lang}:{lang:Lang}){
  return (
    <section id="services" className="bg-surface-card/30 py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md text-white">{copy[lang].addTitle}</h2>
        <div className="mt-xl grid gap-md sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((a,i)=>(
            <div key={i} className="flex items-center gap-md rounded-xl border border-hairline-dark bg-surface-card p-lg transition-all hover:border-primary/30 hover:bg-surface-elevated">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-canvas-dark text-primary">
                <Zap size={20}/>
              </div>
              <span className="text-body-md font-bold text-body">{lang==='en'?a[0]:a[1]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs({lang}:{lang:Lang}){
  const icons = [<Shield key="1" size={32}/>, <Clock key="2" size={32}/>, <Star key="3" size={32}/>];
  return (
    <section className="mx-auto max-w-content px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <h2 className="text-center text-display-sm font-bold md:text-display-md text-white">{copy[lang].whyTitle}</h2>
      <div className="mt-xl grid gap-lg md:grid-cols-3">
        {why.map((w,i)=>(
          <div key={i} className="group rounded-2xl bg-surface-card p-xl border border-hairline-dark transition-all hover:bg-surface-elevated">
            <div className="mb-lg text-primary group-hover:scale-110 transition-transform">
              {icons[i]}
            </div>
            <h3 className="text-title-lg font-bold text-white">{w[0]}</h3>
            <p className="mt-md text-body-md leading-relaxed text-muted">{w[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQ({lang}:{lang:Lang}){
  return (
    <section id="faq" className="bg-canvas-dark py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-3xl px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md text-white">{copy[lang].faqTitle}</h2>
        <div className="mt-xl space-y-md">
          {faqs.map((f,i)=>(
            <details key={i} className="group rounded-xl border border-hairline-dark bg-surface-card transition-all open:border-primary/30">
              <summary className="flex cursor-pointer items-center justify-between p-lg text-title-sm font-bold text-white transition-colors hover:text-primary">
                <div className="flex items-center gap-sm">
                  <HelpCircle size={20} className="text-muted group-open:text-primary"/>
                  {lang==='en'?f[0]:f[2]}
                </div>
                <span className="text-muted transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="px-lg pb-lg text-body-md leading-relaxed text-muted border-t border-hairline-dark/50 pt-md">
                {lang==='en'?f[1]:f[3]}
              </div>
            </details>
          ))}
        </div>
        <div className="mt-xl rounded-xl bg-surface-elevated/50 p-lg text-center border border-hairline-dark backdrop-blur-sm">
          <p className="text-body-sm text-muted italic">
            {copy[lang].disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section className="px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary p-xl text-center text-ink shadow-2xl md:p-xxl">
        {/* Decorative elements for CTA */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-ink/10 blur-3xl"></div>
        
        <div className="relative z-10">
          <h2 className="text-display-sm font-black md:text-display-md text-ink leading-tight">{c.finalTitle}</h2>
          <p className="mx-auto mt-lg max-w-xl text-title-sm font-medium text-ink/80">{c.finalText}</p>
          <a href={whatsappLink(packageMessage())} className="group mt-xl inline-flex items-center gap-sm rounded-full bg-ink px-xl py-md text-title-sm font-bold text-white transition-all hover:scale-105 hover:shadow-xl active:scale-95">
            {c.cta}
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
          </a>
        </div>
      </div>
    </section>
  );
}
