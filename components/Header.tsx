'use client';
import { Building2 } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { copy, Lang } from '@/data/content';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';
export default function Header({lang,setLang}:{lang:Lang;setLang:(l:Lang)=>void}){const c=copy[lang];return <header className="sticky top-4 z-50 mx-auto max-w-7xl px-4"><div className="glass flex items-center justify-between rounded-[28px] px-5 py-4 shadow-soft"><a href="#" className="flex items-center gap-2 font-black text-ink"><span className="grid h-9 w-9 place-items-center rounded-2xl bg-violet text-white"><Building2 size={18}/></span>Startvia</a><nav className="hidden gap-7 text-sm font-medium text-ink/70 md:flex">{c.nav.map((n,i)=><a key={n} href={['#services','#types','#pricing','#how','#faq'][i]} className="hover:text-violet">{n}</a>)}</nav><div className="flex items-center gap-3"><LanguageToggle lang={lang} setLang={setLang}/><a className="hidden rounded-full bg-violet px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-300/50 sm:block" href={whatsappLink(packageMessage())}>{c.cta}</a></div></div></header>}
