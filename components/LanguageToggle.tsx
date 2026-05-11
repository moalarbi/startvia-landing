'use client';
import { Lang } from '@/data/content';
export default function LanguageToggle({lang,setLang}:{lang:Lang;setLang:(l:Lang)=>void}){
 return <div className="flex rounded-full bg-white/80 p-1 text-xs font-bold shadow-sm border border-violet-100"><button onClick={()=>setLang('en')} className={`px-3 py-1 rounded-full ${lang==='en'?'bg-violet text-white':'text-ink/60'}`}>EN</button><button onClick={()=>setLang('ar')} className={`px-3 py-1 rounded-full ${lang==='ar'?'bg-violet text-white':'text-ink/60'}`}>AR</button></div>
}
