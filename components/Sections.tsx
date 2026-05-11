'use client';
import { ArrowUpRight, Check, HelpCircle, Star, Zap, Shield, Clock, BarChart3, Globe2, Scale } from 'lucide-react';
import { addOns, companyTypes, copy, faqs, Lang, packages, steps, why } from '@/data/content';
import { packageMessage, whatsappLink } from '@/lib/whatsapp';

export function TrustStrip({lang}:{lang:Lang}){
  return (
    <section className="border-y border-hairline-dark bg-surface-card/5 py-md overflow-hidden">
      <div className="mx-auto max-w-content px-md">
        <div className="flex flex-nowrap md:flex-wrap items-center justify-center gap-lg md:justify-between opacity-40">
          {copy[lang].trust.map((t, i)=>(
            <div key={t} className="flex items-center gap-xs text-[10px] font-bold tracking-[0.2em] text-muted uppercase whitespace-nowrap">
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
        <h2 className="text-display-sm font-bold text-white md:text-display-md">{c.companyTitle}</h2>
        <p className="mt-sm max-w-2xl text-body-sm text-muted md:text-body-md">{c.companyText}</p>
      </div>
      <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-4">
        {companyTypes.map(t=>(
          <div key={t.key} className="card-official group hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="grid h-10 w-10 place-items-center rounded bg-canvas-dark border border-hairline-dark text-primary font-bold text-title-sm shadow-inner group-hover:bg-primary group-hover:text-ink transition-all">
              {t.key[0]}
            </div>
            <h3 className="mt-md text-title-sm font-bold text-white">{t.key}</h3>
            <p className="mt-sm flex-grow text-body-sm leading-relaxed text-muted">
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
    <section id="how" className="bg-surface-card/10 py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <h2 className="text-center text-display-sm font-bold text-white mb-xl">{copy[lang].howTitle}</h2>
        <div className="grid gap-md md:grid-cols-4">
          {steps.map((s,i)=>(
            <div key={i} className="relative flex flex-col items-center text-center group p-md rounded-xl hover:bg-surface-card/50 transition-all">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-hairline-dark bg-canvas-dark text-primary text-body-sm font-bold shadow-sm group-hover:border-primary/30 transition-colors">
                0{i+1}
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
        <span className="text-[9px] font-black tracking-[0.4em] text-primary uppercase mb-xs">Investment Tiers</span>
        <h2 className="text-display-sm font-bold text-white md:text-display-md">{c.pricingTitle}</h2>
        <p className="mt-sm max-w-2xl text-body-sm text-muted md:text-body-md">{c.pricingText}</p>
      </div>
      <div className="grid gap-md lg:grid-cols-3">
        {packages.map(p=>(
          <div key={p.name} className={`flex flex-col rounded-xl p-lg border transition-all duration-500 hover:shadow-soft-lg ${p.popular?'bg-surface-elevated border-primary/40 shadow-soft-lg scale-[1.02] z-10':'bg-surface-card border-hairline-dark hover:border-muted/20'}`}>
            <div className="mb-md">
              <div className="flex items-center justify-between mb-xs">
                <h3 className="text-title-sm font-bold text-white">{p.name}</h3>
                {p.popular && <span className="text-[8px] font-black bg-primary/10 text-primary px-xs py-0.5 rounded border border-primary/20 tracking-tighter">RECOMMENDED</span>}
              </div>
              <p className="text-xs text-muted min-h-[32px] leading-relaxed">
                {lang==='en'?p.en:p.ar}
              </p>
            </div>
            <div className="mb-md flex items-baseline gap-xs">
              <span className="text-display-sm font-bold text-primary">{p.price}</span>
              <span className="text-[9px] text-muted uppercase font-black tracking-widest">/ One-Time</span>
            </div>
            <ul className="mb-lg flex-grow space-y-xs">
              {(lang==='en'?p.featuresEn:p.featuresAr).map(f=>(
                <li key={f} className="flex items-start gap-xs text-xs text-body">
                  <Check size={12} className="mt-0.5 text-trading-up shrink-0"/>
                  <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>
            <a href={whatsappLink(packageMessage(p.name))} className={`flex w-full items-center justify-center gap-xs rounded py-2 text-xs font-bold transition-all ${p.popular?'bg-primary text-ink hover:bg-primary-active':'bg-canvas-dark text-white border border-hairline-dark hover:bg-surface-elevated'}`}>
              {c.cta}
              <ArrowUpRight size={14}/>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BentoFeatures({lang}:{lang:Lang}){
  const c = copy[lang];
  return (
    <section id="services" className="bg-canvas-dark py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <div className="mx-auto max-w-content px-md">
        <div className="flex flex-col items-center text-center mb-xl">
          <h2 className="text-display-sm font-bold text-white">{c.addTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {/* Bento Grid Layout */}
          <div className="md:col-span-2 card-official flex flex-col md:flex-row gap-md items-center">
            <div className="p-md bg-primary/5 rounded-lg border border-primary/10">
              <BarChart3 size={32} className="text-primary"/>
            </div>
            <div>
              <h3 className="text-title-sm font-bold text-white mb-xs">{lang==='en'?'EIN & Tax Compliance':'الرقم الضريبي والامتثال'}</h3>
              <p className="text-xs text-muted leading-relaxed">{lang==='en'?'Strategic acquisition of Federal Tax IDs and annual regulatory filings.':'استخراج استراتيجي للأرقام الضريبية الفيدرالية وإيداع التقارير التنظيمية السنوية.'}</p>
            </div>
          </div>
          <div className="card-official flex flex-col justify-center items-center text-center">
            <Globe2 size={24} className="text-primary mb-md"/>
            <h3 className="text-title-sm font-bold text-white mb-xs">{lang==='en'?'Global Nexus':'الربط العالمي'}</h3>
            <p className="text-xs text-muted">{lang==='en'?'U.S. business address and operational presence.':'عنوان تجاري أمريكي وتواجد تشغيلي رسمي.'}</p>
          </div>
          <div className="card-official flex flex-col justify-center items-center text-center">
            <Scale size={24} className="text-primary mb-md"/>
            <h3 className="text-title-sm font-bold text-white mb-xs">{lang==='en'?'Legal Governance':'الحوكمة القانونية'}</h3>
            <p className="text-xs text-muted">{lang==='en'?'Operating agreements and corporate bylaws.':'اتفاقيات التشغيل واللوائح الداخلية للشركات.'}</p>
          </div>
          <div className="md:col-span-2 card-official flex flex-col md:flex-row gap-md items-center">
            <div className="p-md bg-trading-up/5 rounded-lg border border-trading-up/10">
              <Zap size={32} className="text-trading-up"/>
            </div>
            <div>
              <h3 className="text-title-sm font-bold text-white mb-xs">{lang==='en'?'Banking Readiness':'الجاهزية البنكية'}</h3>
              <p className="text-xs text-muted leading-relaxed">{lang==='en'?'Preparation of banking resolutions and institutional documentation for U.S. accounts.':'تجهيز قرارات فتح الحسابات والمستندات المؤسسية للحسابات الأمريكية.'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs({lang}:{lang:Lang}){
  const icons = [<Shield key="1" size={20}/>, <Clock key="2" size={20}/>, <Star key="3" size={20}/>];
  return (
    <section className="mx-auto max-w-content px-md py-section" dir={lang==='ar'?'rtl':'ltr'}>
      <h2 className="text-center text-display-sm font-bold text-white mb-xl">{copy[lang].whyTitle}</h2>
      <div className="grid gap-md md:grid-cols-3">
        {why.map((w,i)=>(
          <div key={i} className="card-official group border-l-2 border-l-primary/20 hover:border-l-primary transition-all">
            <div className="mb-md text-primary">
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
        <div className="space-y-xs">
          {faqs.map((f,i)=>(
            <details key={i} className="group rounded-lg border border-hairline-dark bg-surface-card/50 transition-all hover:bg-surface-card">
              <summary className="flex cursor-pointer items-center justify-between p-md text-body-sm font-bold text-white hover:text-primary">
                <div className="flex items-center gap-xs">
                  <HelpCircle size={16} className="text-muted group-open:text-primary"/>
                  {lang==='en'?f[0]:f[2]}
                </div>
                <span className="text-[9px] text-muted group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-md pb-md text-xs leading-relaxed text-muted border-t border-hairline-dark/20 pt-sm animate-in fade-in duration-300">
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
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-primary p-lg text-center text-ink shadow-soft-lg md:p-xl group">
        {/* Subtle Background Pattern for CTA */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
        
        <div className="relative z-10">
          <h2 className="text-display-sm font-bold text-ink leading-tight md:text-display-md">{c.finalTitle}</h2>
          <p className="mx-auto mt-md max-w-lg text-body-sm font-medium text-ink/70">{c.finalText}</p>
          <a href={whatsappLink(packageMessage())} className="mt-lg inline-flex items-center gap-xs rounded bg-ink px-xl py-2 text-xs font-bold text-white hover:bg-ink/90 transition-all active:scale-95 shadow-lg">
            {c.cta}
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
          </a>
        </div>
      </div>
    </section>
  );
}
