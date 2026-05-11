'use client';
import { useState } from 'react';
import { Lang } from '@/data/content';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { AddOns, CompanyTypes, FAQ, FinalCTA, HowItWorks, Pricing, TrustStrip, WhyUs } from '@/components/Sections';
export default function Page(){const [lang,setLang]=useState<Lang>('en');return <main className="gradient-page min-h-screen"><Header lang={lang} setLang={setLang}/><Hero lang={lang}/><TrustStrip lang={lang}/><CompanyTypes lang={lang}/><HowItWorks lang={lang}/><Pricing lang={lang}/><AddOns lang={lang}/><WhyUs lang={lang}/><FAQ lang={lang}/><FinalCTA lang={lang}/><footer className="px-4 pb-10 text-center text-sm text-ink/50">© 2026 Startvia. All rights reserved.</footer></main>}
