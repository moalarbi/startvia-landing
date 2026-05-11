'use client';
import { ArrowUpRight, Check, HelpCircle } from 'lucide-react';
import { addOns, companyTypes, copy, faqs, Lang, packages, steps, why } from '@/data/content';
import { packageMessage, whatsappLink } from '@/lib/whatsapp';

export function TrustStrip({lang}:{lang:Lang}){
  return (
    <section className="mx-auto max-w-content px-md py-lg">
      <div className="grid gap-sm rounded-xl bg-surface-card p-md shadow-soft md:grid-cols-4 border border-hairline-dark">
        {copy[lang].trust.map(t=>(
          <div key={t} className="rounded-lg bg-canvas-dark p-md text-center text-body-sm font-bold text-body/75 border border-hairline-dark">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

export function CompanyTypes({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section id="types" className="mx-auto max-w-content px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-display-sm font-bold md:text-display-md text-white">{c.companyTitle}</h2>
        <p className="mt-md text-body-md text-muted">{c.companyText}</p>
      </div>
      <div className="mt-xl grid gap-lg md:grid-cols-4">
        {companyTypes.map(t=>(
          <div key={t.key} className="card-hover rounded-xl border border-hairline-dark bg-surface-card p-lg">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-ink font-bold text-title-md">
              {t.key[0]}
            </div>
            <h3 className="mt-lg text-title-lg font-bold text-white">{t.key}</h3>
            <p className="mt-md min-h-20 text-body-md leading-6 text-muted">
              {lang==='en'?t.en:t.ar}
            </p>
            <a href={whatsappLink(packageMessage(undefined,t.key))} className="mt-lg inline-flex items-center gap-xs font-bold text-primary text-body-md hover:text-primary-active transition-colors">
              {c.cta}<ArrowUpRight size={16}/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks({lang}:{lang:Lang}){
  return (
    <section id="how" className="bg-canvas-dark py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md text-white">{copy[lang].howTitle}</h2>
        <div className="mt-xl grid gap-lg md:grid-cols-4">
          {steps.map((s,i)=>(
            <div key={i} className="rounded-xl bg-surface-card p-lg shadow-sm border border-hairline-dark">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-ink font-bold text-title-md">
                {i+1}
              </div>
              <p className="mt-lg text-title-md font-bold text-white">
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
      <div className="text-center">
        <h2 className="text-display-sm font-bold md:text-display-md text-white">{c.pricingTitle}</h2>
        <p className="mx-auto mt-md max-w-2xl text-body-md text-muted">{c.pricingText}</p>
      </div>
      <div className="mt-xl grid gap-lg md:grid-cols-3">
        {packages.map(p=>(
          <div key={p.name} className={`card-hover relative rounded-xl p-lg border ${p.popular?'bg-surface-elevated border-primary shadow-soft':'bg-surface-card border-hairline-dark'}`}>
            {p.popular && (
              <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-body-sm font-bold text-ink">
                Most Popular
              </span>
            )}
            <h3 className="text-title-lg font-bold text-white">{p.name}</h3>
            <p className={`mt-md min-h-12 text-body-sm ${p.popular?'text-body':'text-muted'}`}>
              {lang==='en'?p.en:p.ar}
            </p>
            <div className="mt-lg text-display-md font-bold text-primary">{p.price}</div>
            <ul className="mt-lg space-y-sm">
              {(lang==='en'?p.featuresEn:p.featuresAr).map(f=>(
                <li key={f} className="flex gap-sm text-body-sm text-body">
                  <Check size={18} className="text-trading-up"/>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href={whatsappLink(packageMessage(p.name))} className={`mt-xl flex justify-center rounded-md px-lg py-md text-body-md font-bold transition-colors ${p.popular?'bg-primary text-ink hover:bg-primary-active':'bg-surface-elevated text-white border border-hairline-dark hover:bg-surface-card'}`}>
              {c.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AddOns({lang}:{lang:Lang}){
  return (
    <section id="services" className="bg-canvas-dark py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md text-white">{copy[lang].addTitle}</h2>
        <div className="mt-xl grid gap-md md:grid-cols-3">
          {addOns.map((a,i)=>(
            <div key={i} className="rounded-lg border border-hairline-dark bg-surface-card p-lg text-body-md font-bold text-body hover:border-primary/50 transition-colors">
              {lang==='en'?a[0]:a[1]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs({lang}:{lang:Lang}){
  return (
    <section className="mx-auto max-w-content px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <h2 className="text-center text-display-sm font-bold md:text-display-md text-white">{copy[lang].whyTitle}</h2>
      <div className="mt-xl grid gap-lg md:grid-cols-3">
        {why.map((w,i)=>(
          <div key={i} className="rounded-xl bg-surface-card p-xl shadow-soft border border-hairline-dark">
            <h3 className="text-title-lg font-bold text-primary">{w[0]}</h3>
            <p className="mt-md text-body-md text-muted">{w[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQ({lang}:{lang:Lang}){
  return (
    <section id="faq" className="bg-canvas-dark py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-4xl px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md text-white">{copy[lang].faqTitle}</h2>
        <div className="mt-xl space-y-md">
          {faqs.map((f,i)=>(
            <details key={i} className="rounded-xl border border-hairline-dark bg-surface-card p-lg group">
              <summary className="flex cursor-pointer items-center gap-sm text-title-sm font-bold text-white group-open:text-primary transition-colors">
                <HelpCircle size={18}/>
                {lang==='en'?f[0]:f[2]}
              </summary>
              <p className="mt-md text-body-md text-muted">
                {lang==='en'?f[1]:f[3]}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-xl rounded-lg bg-surface-elevated p-lg text-center text-body-sm text-muted border border-hairline-dark">
          {copy[lang].disclaimer}
        </p>
      </div>
    </section>
  );
}

export function FinalCTA({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section className="px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-5xl rounded-xl bg-primary p-xl text-center text-ink shadow-soft md:p-xxl">
        <h2 className="text-display-sm font-bold md:text-display-md text-ink">{c.finalTitle}</h2>
        <p className="mx-auto mt-md max-w-xl text-ink/75 text-body-md">{c.finalText}</p>
        <a href={whatsappLink(packageMessage())} className="mt-xl inline-flex rounded-md bg-ink px-xl py-md text-body-md font-bold text-white hover:bg-ink/90 transition-colors">
          {c.cta}
        </a>
      </div>
    </section>
  );
}
