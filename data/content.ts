export type Lang = 'en' | 'ar';

export const copy = {
  en: {
    nav: ['Services','Company Types','Pricing','How it Works','FAQ'],
    cta: 'Start on WhatsApp',
    heroBadge: 'U.S. company formation made simple',
    heroTitle: 'Start your U.S. company with a simple guided process.',
    heroText: 'Choose your company type, select a package, and continue on WhatsApp. We guide you step by step from formation basics to launch preparation.',
    viewPackages: 'View Packages',
    trust: ['WhatsApp-based onboarding','Clear package options','Multi-company type support','Arabic support available'],
    companyTitle: 'Choose the company structure that fits your plan',
    companyText: 'Startvia helps founders understand the main options before continuing the onboarding conversation on WhatsApp.',
    howTitle: 'How it works',
    pricingTitle: 'Simple packages for every founder stage',
    pricingText: 'State fees are not included. Final requirements and documents are handled through WhatsApp.',
    addTitle: 'Add-on services',
    whyTitle: 'Why Startvia?',
    faqTitle: 'Common questions',
    finalTitle: 'Ready to start your U.S. company?',
    finalText: 'Send us a WhatsApp message and we will guide you through the next step.',
    disclaimer: 'Startvia provides formation guidance and coordination support. This website does not provide legal, tax, or financial advice.'
  },
  ar: {
    nav: ['الخدمات','أنواع الشركات','الباقات','طريقة العمل','الأسئلة'],
    cta: 'ابدأ عبر واتساب',
    heroBadge: 'تأسيس شركة أمريكية بطريقة أسهل',
    heroTitle: 'ابدأ شركتك في أمريكا بخطوات واضحة ومبسطة.',
    heroText: 'اختر نوع الشركة، حدد الباقة المناسبة، ثم أكمل معنا عبر واتساب. نرشدك خطوة بخطوة من الأساسيات إلى التجهيز للانطلاق.',
    viewPackages: 'عرض الباقات',
    trust: ['استقبال الطلب عبر واتساب','باقات واضحة','دعم عدة أنواع شركات','دعم عربي متوفر'],
    companyTitle: 'اختر نوع الشركة المناسب لخطة مشروعك',
    companyText: 'تساعدك Startvia على فهم الخيارات الرئيسية قبل إكمال المحادثة والمتطلبات عبر واتساب.',
    howTitle: 'طريقة العمل',
    pricingTitle: 'باقات واضحة حسب مرحلة مشروعك',
    pricingText: 'رسوم الولاية غير مشمولة. يتم استكمال المتطلبات والمستندات عبر واتساب.',
    addTitle: 'خدمات إضافية',
    whyTitle: 'ليش Startvia؟',
    faqTitle: 'أسئلة شائعة',
    finalTitle: 'جاهز تبدأ شركتك في أمريكا؟',
    finalText: 'راسلنا على واتساب ونرشدك للخطوة التالية.',
    disclaimer: 'تقدم Startvia إرشادًا وتنسيقًا للتأسيس، ولا يقدم هذا الموقع استشارات قانونية أو ضريبية أو مالية.'
  }
};

export const companyTypes = [
  { key:'LLC', en:'Flexible option for founders, ecommerce sellers, and small business owners.', ar:'خيار مرن للمؤسسين وأصحاب المتاجر والمشاريع الصغيرة.' },
  { key:'C-Corp', en:'Common for startups that plan to raise investment or issue shares.', ar:'مناسب للشركات الناشئة التي تخطط للاستثمار أو إصدار أسهم.' },
  { key:'S-Corp', en:'A tax election path for eligible U.S. businesses and shareholders.', ar:'مسار ضريبي خاص للشركات المؤهلة داخل أمريكا.' },
  { key:'Nonprofit', en:'For mission-driven organizations, associations, and charitable initiatives.', ar:'للمنظمات والمبادرات غير الربحية والجمعيات.' },
];

export const packages = [
  { name:'Starter Formation', price:'$199', popular:false, en:'For solo founders who want to start simple.', ar:'للمؤسس الفردي الذي يريد بداية بسيطة.', featuresEn:['Company formation guidance','State selection support','WhatsApp onboarding','Basic document checklist','Filing preparation guidance'], featuresAr:['إرشاد تأسيس الشركة','مساعدة اختيار الولاية','استقبال عبر واتساب','قائمة مستندات أساسية','توجيه تجهيز ملف التأسيس'] },
  { name:'Growth Formation', price:'$399', popular:true, en:'For founders who need a more complete setup.', ar:'للمؤسسين الذين يحتاجون تجهيزًا أشمل.', featuresEn:['Everything in Starter','EIN assistance guidance','Operating Agreement guidance','Compliance checklist','Priority WhatsApp support'], featuresAr:['كل ما في Starter','إرشاد بخصوص EIN','إرشاد Operating Agreement','قائمة امتثال أساسية','أولوية دعم واتساب'] },
  { name:'Premium Launch', price:'$699', popular:false, en:'For serious founders who want guided launch support.', ar:'للمؤسسين الجادين الذين يريدون دعم انطلاق موجه.', featuresEn:['Everything in Growth','Registered Agent guidance','Business address guidance','Bank account preparation guidance','Post-formation launch checklist','Dedicated onboarding flow'], featuresAr:['كل ما في Growth','إرشاد Registered Agent','إرشاد عنوان تجاري','تجهيز متطلبات الحساب البنكي','قائمة انطلاق بعد التأسيس','مسار استقبال مخصص'] },
];

export const steps = [
  { en:'Choose your company type', ar:'اختر نوع الشركة' },
  { en:'Select your package', ar:'حدد الباقة المناسبة' },
  { en:'Message us on WhatsApp', ar:'راسلنا على واتساب' },
  { en:'Complete your setup with guidance', ar:'أكمل التجهيز معنا خطوة بخطوة' },
];

export const addOns = [
  ['EIN Assistance','إرشاد استخراج EIN'],['Operating Agreement Guidance','إرشاد اتفاقية التشغيل'],['Registered Agent Guidance','إرشاد الوكيل المسجل'],['Business Address Guidance','إرشاد العنوان التجاري'],['Bank Account Preparation','تجهيز متطلبات الحساب البنكي'],['Annual Compliance Reminder','تنبيهات الامتثال السنوي']
];

export const why = [
  ['Simple process','No confusing forms'],['Human WhatsApp support','Clear next steps'],['English-first','Arabic support available']
];

export const faqs = [
  ['Do you form LLCs only?','No. We support LLC, C-Corp, S-Corp, and Nonprofit guidance.','هل تدعمون LLC فقط؟','لا. ندعم إرشاد LLC و C-Corp و S-Corp و Nonprofit.'],
  ['Are state fees included?','No. State fees are separate and depend on the selected state.','هل رسوم الولاية مشمولة؟','لا. رسوم الولاية منفصلة وتختلف حسب الولاية.'],
  ['Do I upload documents on the website?','No. Documents are handled manually through WhatsApp after you contact us.','هل أرفع المستندات في الموقع؟','لا. يتم إرسال المستندات يدويًا عبر واتساب بعد التواصل معنا.'],
  ['Can I pay in USD?','Yes. The service packages are displayed in USD.','هل الدفع بالدولار؟','نعم. الباقات معروضة بالدولار.'],
  ['Is this legal or tax advice?','No. Startvia provides formation guidance and coordination support only.','هل هذه استشارة قانونية أو ضريبية؟','لا. Startvia تقدم إرشادًا وتنسيقًا فقط.']
];
