'use client';
import { ArrowUpRight, Check, HelpCircle } from 'lucide-react';
import { addOns, companyTypes, copy, faqs, Lang, packages, steps, why } from '@/data/content';
import { packageMessage, whatsappLink } from '@/lib/whatsapp';

export function TrustStrip({lang}:{lang:Lang}){
  return (
    <section className="mx-auto max-w-content px-md py-lg">
      <div className="grid gap-sm rounded-xl bg-white p-md shadow-soft md:grid-cols-4">
        {copy[lang].trust.map(t=>(
          <div key={t} className="rounded-lg bg-lavender/60 p-md text-center text-body-sm font-bold text-ink/75">
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
        <h2 className="text-display-sm font-bold md:text-display-md">{c.companyTitle}</h2>
        <p className="mt-md text-body-md text-ink/60">{c.companyText}</p>
      </div>
      <div className="mt-xl grid gap-lg md:grid-cols-4">
        {companyTypes.map(t=>(
          <div key={t.key} className="card-hover rounded-xl border border-violet-100 bg-white p-lg">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-violet text-white font-bold text-title-md">
              {t.key[0]}
            </div>
            <h3 className="mt-lg text-title-lg font-bold">{t.key}</h3>
            <p className="mt-md min-h-20 text-body-md leading-6 text-ink/60">
              {lang==='en'?t.en:t.ar}
            </p>
            <a href={whatsappLink(packageMessage(undefined,t.key))} className="mt-lg inline-flex items-center gap-xs font-bold text-violet text-body-md">
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
    <section id="how" className="bg-white py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md">{copy[lang].howTitle}</h2>
        <div className="mt-xl grid gap-lg md:grid-cols-4">
          {steps.map((s,i)=>(
            <div key={i} className="rounded-xl bg-gradient-to-br from-lavender to-white p-lg shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-violet text-white font-bold text-title-md">
                {i+1}
              </div>
              <p className="mt-lg text-title-md font-bold">
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
        <h2 className="text-display-sm font-bold md:text-display-md">{c.pricingTitle}</h2>
        <p className="mx-auto mt-md max-w-2xl text-body-md text-ink/60">{c.pricingText}</p>
      </div>
      <div className="mt-xl grid gap-lg md:grid-cols-3">
        {packages.map(p=>(
          <div key={p.name} className={`card-hover relative rounded-xl p-lg ${p.popular?'bg-violet text-white shadow-soft':'bg-white text-ink border border-violet-100'}`}>
            {p.popular && (
              <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-body-sm font-bold text-violet">
                Most Popular
              </span>
            )}
            <h3 className="text-title-lg font-bold">{p.name}</h3>
            <p className={`mt-md min-h-12 text-body-sm ${p.popular?'text-white/75':'text-ink/60'}`}>
              {lang==='en'?p.en:p.ar}
            </p>
            <div className="mt-lg text-display-md font-bold">{p.price}</div>
            <ul className="mt-lg space-y-sm">
              {(lang==='en'?p.featuresEn:p.featuresAr).map(f=>(
                <li key={f} className="flex gap-sm text-body-sm">
                  <Check size={18}/>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href={whatsappLink(packageMessage(p.name))} className={`mt-xl flex justify-center rounded-md px-lg py-md text-body-md font-bold ${p.popular?'bg-white text-violet':'bg-violet text-white'}`}>
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
    <section id="services" className="bg-white py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md">{copy[lang].addTitle}</h2>
        <div className="mt-xl grid gap-md md:grid-cols-3">
          {addOns.map((a,i)=>(
            <div key={i} className="rounded-lg border border-violet-100 bg-lavender/30 p-lg text-body-md font-bold">
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
      <h2 className="text-center text-display-sm font-bold md:text-display-md">{copy[lang].whyTitle}</h2>
      <div className="mt-xl grid gap-lg md:grid-cols-3">
        {why.map((w,i)=>(
          <div key={i} className="rounded-xl bg-white p-xl shadow-soft">
            <h3 className="text-title-lg font-bold">{w[0]}</h3>
            <p className="mt-md text-body-md text-ink/60">{w[1]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQ({lang}:{lang:Lang}){
  return (
    <section id="faq" className="bg-white py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-4xl px-md">
        <h2 className="text-center text-display-sm font-bold md:text-display-md">{copy[lang].faqTitle}</h2>
        <div className="mt-xl space-y-md">
          {faqs.map((f,i)=>(
            <details key={i} className="rounded-xl border border-violet-100 p-lg">
              <summary className="flex cursor-pointer items-center gap-sm text-title-sm font-bold">
                <HelpCircle size={18}/>
                {lang==='en'?f[0]:f[2]}
              </summary>
              <p className="mt-md text-body-md text-ink/60">
                {lang==='en'?f[1]:f[3]}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-xl rounded-lg bg-lavender/70 p-lg text-center text-body-sm text-ink/70">
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
      <div className="mx-auto max-w-5xl rounded-xl bg-violet p-xl text-center text-white shadow-soft md:p-xxl">
        <h2 className="text-display-sm font-bold md:text-display-md">{c.finalTitle}</h2>
        <p className="mx-auto mt-md max-w-xl text-body-md text-white/75">{c.finalText}</p>
        <a href={whatsappLink(packageMessage())} className="mt-xl inline-flex rounded-md bg-white px-xl py-md text-body-md font-bold text-violet">
          {c.cta}
        </a>
      </div>
    </section>
  );
}
