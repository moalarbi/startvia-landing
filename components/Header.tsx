'use client';
import { Building2, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LanguageToggle from './LanguageToggle';
import { copy, Lang } from '@/data/content';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';

export default function Header({lang,setLang}:{lang:Lang;setLang:(l:Lang)=>void}){
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const c = copy[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-xs' : 'py-sm'}`}>
      <div className="mx-auto max-w-content px-md">
        <div className={`flex items-center justify-between rounded-lg px-md py-xs transition-all duration-300 ${isScrolled ? 'glass shadow-soft' : 'bg-transparent'}`}>
          <a href="#" className="flex items-center gap-xs font-bold text-white text-title-sm tracking-tight">
            <div className="grid h-8 w-8 place-items-center rounded bg-primary text-ink">
              <Building2 size={16}/>
            </div>
            <span>Startvia</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden gap-md text-xs font-medium text-muted hover:text-body md:flex">
            {c.nav.map((n,i)=>(
              <a key={n} href={['#services','#types','#pricing','#how','#faq'][i]} className="hover:text-primary transition-colors py-md">
                {n}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-sm">
            <LanguageToggle lang={lang} setLang={setLang}/>
            <a className="hidden rounded bg-primary px-md py-xs text-xs font-bold text-ink hover:bg-primary-active transition-all sm:block" href={whatsappLink(packageMessage())}>
              {c.cta}
            </a>
            <button className="md:hidden text-white p-xs" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-xs rounded-lg glass p-md md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-sm">
              {c.nav.map((n,i)=>(
                <a key={n} href={['#services','#types','#pricing','#how','#faq'][i]} 
                   className="text-body-sm font-medium text-white hover:text-primary transition-colors py-xs"
                   onClick={() => setIsMobileMenuOpen(false)}>
                  {n}
                </a>
              ))}
              <a className="mt-sm flex justify-center rounded bg-primary py-xs text-body-sm font-bold text-ink" href={whatsappLink(packageMessage())}>
                {c.cta}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
