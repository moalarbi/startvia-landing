'use client';
import { copy, Lang } from '@/data/content';
import { whatsappLink, packageMessage } from '@/lib/whatsapp';
import { ImageCarouselHero } from "@/components/ui/ai-image-generator-hero";

export default function Hero({lang}:{lang:Lang}){
  const c = copy[lang];

  const demoImages = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      alt: "Modern Office Building",
      rotation: -10,
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
      alt: "Business Professional",
      rotation: -5,
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2211&auto=format&fit=crop",
      alt: "Financial Documents",
      rotation: 5,
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
      alt: "Digital Banking",
      rotation: 10,
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      alt: "Legal Contract",
      rotation: -8,
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
      alt: "Corporate Headquarters",
      rotation: 8,
    },
  ];

  const features = [
    {
      title: lang === 'en' ? "Institutional Precision" : "دقة مؤسسية",
      description: lang === 'en' ? "Expertly crafted legal frameworks for global founders." : "أطر قانونية مصممة بخبرة للمؤسسين العالميين.",
    },
    {
      title: lang === 'en' ? "Rapid Deployment" : "نشر سريع",
      description: lang === 'en' ? "Accelerated U.S. formation and EIN processing." : "تأسيس أمريكي متسارع ومعالجة سريعة للرقم الضريبي.",
    },
    {
      title: lang === 'en' ? "Strategic Compliance" : "امتثال استراتيجي",
      description: lang === 'en' ? "Continuous governance to maintain your good standing." : "حوكمة مستمرة للحفاظ على وضعك القانوني السليم.",
    },
  ];

  return (
    <ImageCarouselHero
      title={c.heroTitle}
      subtitle={c.heroBadge}
      description={c.heroText}
      ctaText={c.cta}
      onCtaClick={() => window.location.href = whatsappLink(packageMessage())}
      images={demoImages}
      features={features}
    />
  );
}
