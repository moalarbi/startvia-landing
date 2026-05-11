export type Lang = 'en' | 'ar';

export const copy = {
  en: {
    nav: ['Services','Company Types','Pricing','Process','FAQ'],
    cta: 'Start on WhatsApp',
    heroBadge: 'Professional U.S. Formation',
    heroTitle: 'Launch your U.S. business with expert guidance.',
    heroText: 'From EIN acquisition to annual compliance, we provide the specialized support founders need to establish a legitimate U.S. presence.',
    viewPackages: 'View Packages',
    trust: ['Direct WhatsApp Support','EIN & Tax ID Guidance','Registered Agent Coordination','Annual Compliance Tracking'],
    companyTitle: 'Strategic Company Structures',
    companyText: 'Selecting the right entity is critical for tax efficiency and liability protection. We guide you through the best options for your business model.',
    howTitle: 'Our Streamlined Process',
    pricingTitle: 'Transparent Formation Packages',
    pricingText: 'Professional service fees. State filing fees are handled separately based on your chosen jurisdiction.',
    addTitle: 'Specialized Services',
    whyTitle: 'Why Founders Choose Startvia',
    faqTitle: 'Expert Insights',
    finalTitle: 'Ready to establish your U.S. entity?',
    finalText: 'Connect with our specialists on WhatsApp for a personalized formation strategy.',
    disclaimer: 'Startvia provides administrative formation support and coordination. We are not a law firm and do not provide legal, tax, or financial advice.'
  },
  ar: {
    nav: ['الخدمات','أنواع الشركات','الباقات','طريقة العمل','الأسئلة'],
    cta: 'ابدأ عبر واتساب',
    heroBadge: 'تأسيس احترافي في أمريكا',
    heroTitle: 'أطلق مشروعك في أمريكا بإرشاد الخبراء.',
    heroText: 'من استخراج الرقم الضريبي (EIN) إلى الامتثال السنوي، نقدم الدعم المتخصص الذي يحتاجه المؤسسون لبناء كيان قانوني قوي في الولايات المتحدة.',
    viewPackages: 'عرض الباقات',
    trust: ['دعم مباشر عبر واتساب','إرشاد الرقم الضريبي EIN','تنسيق الوكيل المسجل','متابعة الامتثال السنوي'],
    companyTitle: 'هياكل شركات استراتيجية',
    companyText: 'اختيار الكيان الصحيح أمر بالغ الأهمية للكفاءة الضريبية وحماية المسؤولية. نرشدك عبر أفضل الخيارات لنماذج الأعمال المختلفة.',
    howTitle: 'مسار العمل المعتمد',
    pricingTitle: 'باقات تأسيس شفافة',
    pricingText: 'رسوم الخدمة المهنية. يتم سداد رسوم الولاية بشكل منفصل بناءً على الولاية المختارة.',
    addTitle: 'خدمات متخصصة',
    whyTitle: 'لماذا يختارنا المؤسسون؟',
    faqTitle: 'إجابات الخبراء',
    finalTitle: 'جاهز لتأسيس كيانك في أمريكا؟',
    finalText: 'تواصل مع مختصينا عبر واتساب للحصول على استراتيجية تأسيس مخصصة.',
    disclaimer: 'تقدم Startvia الدعم الإداري والتنسيق للتأسيس. نحن لسنا مكتب محاماة ولا نقدم استشارات قانونية أو ضريبية أو مالية.'
  }
};

export const companyTypes = [
  { key:'LLC', en:'Ideal for digital nomads and ecommerce. Offers pass-through taxation and flexible management.', ar:'مثالية للتجارة الإلكترونية. توفر مرونة ضريبية وإدارية عالية للمؤسسين.' },
  { key:'C-Corp', en:'The gold standard for VC-backed startups. Required for issuing stock and raising institutional capital.', ar:'المعيار الذهبي للشركات الناشئة. ضرورية لإصدار الأسهم وجذب الاستثمارات الجريئة.' },
  { key:'S-Corp', en:'A tax designation for corporations that meet specific IRS requirements to avoid double taxation.', ar:'تصنيف ضريبي للشركات التي تستوفي شروط IRS لتجنب الازدواج الضريبي.' },
  { key:'Nonprofit', en:'Structured for 501(c)(3) status. Designed for charitable, educational, or religious purposes.', ar:'مصممة للحصول على إعفاء ضريبي 501(c)(3) للأغراض الخيرية والتعليمية.' },
];

export const packages = [
  { name:'Essential Formation', price:'$199', popular:false, en:'Basic legal formation for solo founders.', ar:'التأسيس القانوني الأساسي للمؤسس الفردي.', featuresEn:['Articles of Organization filing','State selection strategy','WhatsApp advisory','Initial document review','Post-filing guidance'], featuresAr:['إيداع مستندات التأسيس','استراتيجية اختيار الولاية','استشارات عبر واتساب','مراجعة أولية للمستندات','إرشاد ما بعد التأسيس'] },
  { name:'Professional Setup', price:'$399', popular:true, en:'Complete setup with tax ID and compliance.', ar:'تجهيز كامل مع الرقم الضريبي والامتثال.', featuresEn:['Everything in Essential','EIN (Tax ID) acquisition support','Operating Agreement drafting','Initial compliance setup','Priority WhatsApp access'], featuresAr:['كل ما في الباقة الأساسية','دعم استخراج الرقم الضريبي EIN','صياغة اتفاقية التشغيل','إعداد الامتثال الأولي','أولوية التواصل عبر واتساب'] },
  { name:'Enterprise Launch', price:'$699', popular:false, en:'Full-service launch for global entities.', ar:'خدمة كاملة للانطلاق للكيانات العالمية.', featuresEn:['Everything in Professional','Registered Agent coordination','U.S. Business Address setup','Banking resolution documents','Annual report reminders','Dedicated account manager'], featuresAr:['كل ما في الباقة الاحترافية','تنسيق الوكيل المسجل','إعداد العنوان التجاري الأمريكي','مستندات فتح الحساب البنكي','تنبيهات التقارير السنوية','مدير حساب مخصص'] },
];

export const steps = [
  { en:'Strategic Consultation', ar:'استشارة استراتيجية' },
  { en:'Entity Selection', ar:'اختيار نوع الكيان' },
  { en:'Document Preparation', ar:'تجهيز المستندات' },
  { en:'Official Filing', ar:'الإيداع الرسمي' },
];

export const addOns = [
  ['EIN Acquisition','استخراج الرقم الضريبي EIN'],['Operating Agreement','اتفاقية التشغيل'],['Registered Agent','الوكيل المسجل'],['Business Address','العنوان التجاري الأمريكي'],['Banking Support','دعم فتح الحسابات البنكية'],['Compliance Filing','إيداع تقارير الامتثال']
];

export const why = [
  ['Expert Guidance','Navigating U.S. regulations with ease.'],['Direct Access','Real-time support via WhatsApp.'],['Global Reach','Supporting founders from 50+ countries.']
];

export const faqs = [
  ['What is an EIN and why do I need it?','An EIN is a Federal Tax ID required to open a U.S. bank account and hire employees.','ما هو الـ EIN ولماذا أحتاجه؟','هو الرقم الضريبي الفيدرالي، وضروري لفتح حساب بنكي أمريكي وتوظيف الموظفين.'],
  ['Which state is best for my business?','Delaware and Wyoming are popular for different reasons. We help you choose based on your goals.','أي ولاية هي الأفضل لعملي؟','ديلاوير ووايومنج هما الأكثر شهرة لأسباب مختلفة. نساعدك في الاختيار بناءً على أهدافك.'],
  ['How long does the process take?','Formation times vary by state, typically ranging from a few days to several weeks.','كم تستغرق عملية التأسيس؟','تختلف المدة حسب الولاية، وتتراوح عادة من بضعة أيام إلى عدة أسابيع.'],
  ['Do I need to be in the U.S. to start?','No. We specialize in helping international founders form companies remotely.','هل أحتاج للتواجد في أمريكا للبدء؟','لا. نحن متخصصون في مساعدة المؤسسين الدوليين على التأسيس عن بُعد.'],
  ['What are my annual requirements?','Most states require an Annual Report and a Registered Agent to remain in good standing.','ما هي المتطلبات السنوية؟','تطلب معظم الولايات تقريراً سنوياً ووكيلاً مسجلاً للحفاظ على وضع الشركة القانوني.']
];
