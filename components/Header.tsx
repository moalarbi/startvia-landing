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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-sm' : 'py-md'}`}>
      <div className="mx-auto max-w-content px-md">
        <div className={`flex items-center justify-between rounded-2xl px-lg py-md transition-all duration-300 ${isScrolled ? 'glass shadow-2xl' : 'bg-transparent'}`}>
          <a href="#" className="flex items-center gap-xs font-black text-white text-title-md tracking-tighter">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-ink shadow-lg shadow-primary/20">
              <Building2 size={22}/>
            </div>
            <span className="hidden sm:block">Startvia</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden gap-lg text-body-sm font-bold text-body/70 md:flex">
            {c.nav.map((n,i)=>(
              <a key={n} href={['#services','#types','#pricing','#how','#faq'][i]} className="hover:text-primary transition-colors relative group">
                {n}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-sm">
            <LanguageToggle lang={lang} setLang={setLang}/>
            <a className="hidden rounded-lg bg-primary px-lg py-md text-body-sm font-black text-ink hover:bg-primary-active transition-all hover:scale-105 active:scale-95 sm:block" href={whatsappLink(packageMessage())}>
              {c.cta}
            </a>
            <button className="md:hidden text-white p-xs" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-sm rounded-2xl glass p-lg md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-md">
              {c.nav.map((n,i)=>(
                <a key={n} href={['#services','#types','#pricing','#how','#faq'][i]} 
                   className="text-title-sm font-bold text-white hover:text-primary transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}>
                  {n}
                </a>
              ))}
              <a className="mt-md flex justify-center rounded-xl bg-primary py-md text-body-md font-black text-ink" href={whatsappLink(packageMessage())}>
                {c.cta}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
