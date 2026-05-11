'use client';
import { Building2 } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { copy, Lang } from '@/data/content';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';

export default function Header({lang,setLang}:{lang:Lang;setLang:(l:Lang)=>void}){
  const c = copy[lang];
  return (
    <header className="sticky top-4 z-50 mx-auto max-w-content px-md">
      <div className="glass flex items-center justify-between rounded-xl px-lg py-md shadow-soft">
        <a href="#" className="flex items-center gap-xs font-bold text-white text-title-md">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-ink">
            <Building2 size={18}/>
          </span>
          Startvia
        </a>
        <nav className="hidden gap-lg text-body-sm font-medium text-body/70 md:flex">
          {c.nav.map((n,i)=>(
            <a key={n} href={['#services','#types','#pricing','#how','#faq'][i]} className="hover:text-primary transition-colors">
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-sm">
          <LanguageToggle lang={lang} setLang={setLang}/>
          <a className="hidden rounded-md bg-primary px-lg py-md text-body-sm font-bold text-ink hover:bg-primary-active transition-colors sm:block" href={whatsappLink(packageMessage())}>
            {c.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
