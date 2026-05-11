export type Lang = 'en' | 'ar';

export const copy = {
  en: {
    nav: ['Solutions','Entity Types','Pricing','Methodology','Insights'],
    cta: 'Consult on WhatsApp',
    heroBadge: 'Institutional-Grade U.S. Formation',
    heroTitle: 'Build your U.S. business infrastructure with precision.',
    heroText: 'Startvia provides the legal and administrative framework required for international founders to scale. We handle the complexity of U.S. regulations so you can focus on global growth.',
    viewPackages: 'Explore Solutions',
    trust: ['Strategic Tax ID (EIN) Support','Registered Agent Infrastructure','Annual Compliance Governance','Banking Resolution Readiness'],
    companyTitle: 'Strategic Entity Architecture',
    companyText: 'Choosing the right legal structure is the foundation of your global expansion. We provide the technical clarity needed to select the optimal jurisdiction and entity type.',
    howTitle: 'Our Methodology',
    pricingTitle: 'Transparent Investment Tiers',
    pricingText: 'Professional engagement fees for comprehensive formation. State-specific filing fees are managed independently to ensure maximum transparency.',
    addTitle: 'Specialized Infrastructure',
    whyTitle: 'The Startvia Advantage',
    faqTitle: 'Strategic FAQ',
    finalTitle: 'Ready to architect your U.S. presence?',
    finalText: 'Engage with our formation specialists via WhatsApp for a tailored institutional setup.',
    disclaimer: 'Startvia is a professional formation service provider. We are not a law firm or a CPA firm, and do not provide legal, tax, or financial advice.'
  },
  ar: {
    nav: ['الحلول','أنواع الكيانات','الباقات','المنهجية','الأسئلة'],
    cta: 'استشارة عبر واتساب',
    heroBadge: 'تأسيس مؤسسي بمعايير عالمية',
    heroTitle: 'ابنِ البنية التحتية لأعمالك في أمريكا بدقة متناهية.',
    heroText: 'توفر Startvia الإطار القانوني والإداري اللازم للمؤسسين الدوليين للتوسع عالمياً. نحن نتولى تعقيدات الأنظمة الأمريكية لتتفرغ أنت لنمو مشروعك.',
    viewPackages: 'استكشف الحلول',
    trust: ['دعم استراتيجي للرقم الضريبي EIN','بنية تحتية للوكيل المسجل','حوكمة الامتثال السنوي','جاهزية قرارات فتح الحسابات'],
    companyTitle: 'هندسة الكيانات الاستراتيجية',
    companyText: 'اختيار الهيكل القانوني الصحيح هو حجر الأساس لتوسعك العالمي. نحن نوفر الوضوح التقني اللازم لاختيار الولاية ونوع الكيان الأمثل.',
    howTitle: 'منهجية العمل',
    pricingTitle: 'مستويات الاستثمار الشفافة',
    pricingText: 'رسوم التعاقد المهني للتأسيس الشامل. يتم إدارة رسوم إيداع الولايات بشكل مستقل لضمان أقصى درجات الشفافية.',
    addTitle: 'بنية تحتية متخصصة',
    whyTitle: 'ميزة Startvia',
    faqTitle: 'أسئلة استراتيجية',
    finalTitle: 'جاهز لهندسة تواجدك في أمريكا؟',
    finalText: 'تواصل مع أخصائيي التأسيس لدينا عبر واتساب للحصول على إعداد مؤسسي مخصص.',
    disclaimer: 'Startvia هي مزود خدمات تأسيس مهنية. نحن لسنا مكتب محاماة أو مكتب محاسبة قانوني، ولا نقدم استشارات قانونية أو ضريبية أو مالية.'
  }
};

export const companyTypes = [
  { key:'LLC', en:'Optimized for operational flexibility and pass-through tax efficiency. Ideal for digital-first enterprises.', ar:'محسنة للمرونة التشغيلية والكفاءة الضريبية. مثالية للمشاريع الرقمية والناشئة.' },
  { key:'C-Corp', en:'The institutional standard for venture scalability. Essential for equity issuance and global capital raising.', ar:'المعيار المؤسسي للتوسع الاستثماري. ضرورية لإصدار الأسهم وجذب رؤوس الأموال العالمية.' },
  { key:'S-Corp', en:'A specialized tax designation for eligible entities seeking to optimize corporate tax liabilities.', ar:'تصنيف ضريبي متخصص للكيانات المؤهلة التي تسعى لتحسين الالتزامات الضريبية للشركات.' },
  { key:'Nonprofit', en:'Structured for 501(c)(3) compliance. Designed for mission-driven global initiatives and associations.', ar:'مصممة للامتثال لمعايير 501(c)(3) للمبادرات والجمعيات العالمية ذات الأهداف السامية.' },
];

export const packages = [
  { name:'Core Formation', price:'$199', popular:false, en:'Essential legal architecture for solo founders.', ar:'الهيكلة القانونية الأساسية للمؤسسين الأفراد.', featuresEn:['Articles of Organization filing','Jurisdictional selection strategy','WhatsApp advisory access','Initial compliance roadmap','Post-formation guidance'], featuresAr:['إيداع مستندات التأسيس','استراتيجية اختيار الولاية','وصول استشاري عبر واتساب','خارطة طريق الامتثال الأولي','إرشاد ما بعد التأسيس'] },
  { name:'Professional Infrastructure', price:'$399', popular:true, en:'Comprehensive setup for scaling businesses.', ar:'إعداد شامل للشركات الطموحة للتوسع.', featuresEn:['Everything in Core','EIN (Tax ID) acquisition support','Operating Agreement architecture','Governance framework setup','Priority specialist access'], featuresAr:['كل ما في الباقة الأساسية','دعم استخراج الرقم الضريبي EIN','هندسة اتفاقية التشغيل','إعداد إطار الحوكمة','أولوية الوصول للمختصين'] },
  { name:'Institutional Launch', price:'$699', popular:false, en:'Full-service deployment for global entities.', ar:'نشر الخدمة الكاملة للكيانات العالمية.', featuresEn:['Everything in Professional','Registered Agent infrastructure','U.S. Nexus & Address setup','Banking resolution framework','Annual compliance governance','Dedicated relationship manager'], featuresAr:['كل ما في الباقة الاحترافية','بنية تحتية للوكيل المسجل','إعداد العنوان التجاري الأمريكي','إطار قرارات فتح الحسابات','حوكمة الامتثال السنوي','مدير علاقات مخصص'] },
];

export const steps = [
  { en:'Strategic Consultation', ar:'استشارة استراتيجية' },
  { en:'Architecture Design', ar:'تصميم الهيكل القانوني' },
  { en:'Regulatory Filing', ar:'الإيداع التنظيمي' },
  { en:'Operational Readiness', ar:'الجاهزية التشغيلية' },
];

export const addOns = [
  ['EIN Acquisition','استخراج الرقم الضريبي EIN'],['Operating Agreement','اتفاقية التشغيل'],['Registered Agent','الوكيل المسجل'],['Nexus & Address','العنوان التجاري والربط'],['Banking Framework','إطار العمل البنكي'],['Compliance Governance','حوكمة الامتثال']
];

export const why = [
  ['Technical Precision','Navigating complex U.S. regulations with institutional accuracy.'],['Strategic Access','Direct, real-time specialist support via WhatsApp.'],['Global Standard','Trusted by founders across 50+ jurisdictions for U.S. expansion.']
];

export const faqs = [
  ['What is the strategic importance of an EIN?','An EIN is your entity\'s primary identifier for U.S. tax, banking, and employment infrastructure.','ما هي الأهمية الاستراتيجية للـ EIN؟','هو المعرف الأساسي لكيانك في الأنظمة الضريبية والبنكية والتوظيف في أمريكا.'],
  ['How do you determine the optimal jurisdiction?','We analyze your business model against state-specific tax laws and legal protections (e.g., DE vs. WY).','كيف يتم تحديد الولاية المثلى؟','نحلل نموذج عملك مقابل قوانين الضرائب والحماية القانونية في كل ولاية (مثل ديلاوير مقابل وايومنج).'],
  ['What is the timeline for institutional readiness?','Formation timelines vary by state; we optimize for the fastest possible regulatory approval.','ما هو الجدول الزمني للجاهزية المؤسسية؟','تختلف جداول التأسيس حسب الولاية؛ نحن نعمل على تسريع الموافقات التنظيمية قدر الإمكان.'],
  ['Can international founders maintain 100% remote control?','Yes. Our infrastructure is designed for global founders to manage U.S. entities without physical presence.','هل يمكن للمؤسسين الدوليين الإدارة عن بُعد بنسبة 100%؟','نعم. بنيتنا التحتية مصممة لتمكين المؤسسين من إدارة كياناتهم الأمريكية دون تواجد فعلي.'],
  ['What are the ongoing compliance obligations?','Entities must maintain a Registered Agent and file Annual Reports to remain in "Good Standing" with the state.','ما هي التزامات الامتثال المستمرة؟','يجب على الكيانات الحفاظ على وكيل مسجل وإيداع التقارير السنوية للحفاظ على وضعها القانوني السليم.']
];
