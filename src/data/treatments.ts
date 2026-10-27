import type { Locale } from './site';

export type TreatmentSlug = 'fertility-ivf-urmia' | 'cosmetic-surgery-urmia' | 'dental-treatment-urmia';
export type TreatmentSlugTr = 'urmia-tup-bebek' | 'urmia-estetik-cerrahi';

export type Treatment = {
  slug: string;
  locale: Locale;
  hreflangPair: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroImage: string;
  heroImageAlt: string;
  breadcrumbName: string;
  relatedPostSlug: string;
  sections: {
    overview: string[];
    cost: { intro: string; rows: { label: string; value: string }[]; note: string };
    included: string[];
    notIncluded: string[];
    recovery: string[];
    process: string[];
  };
  faq: { q: string; a: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: 'fertility-ivf-urmia',
    locale: 'en',
    hreflangPair: 'tr/tedaviler/urmia-tup-bebek',
    title: 'Fertility & IVF in Urmia',
    metaTitle: 'Fertility & IVF in Urmia | Akay Travel +98 44 3346 5524',
    metaDescription:
      'Fertility and IVF treatment in Urmia, Iran with Akay Travel. Cost, success rates and full coordination. Call +98 44 3346 5524.',
    h1: 'Fertility & IVF Treatment in Urmia',
    heroImage: '/images/hero-fertility.svg',
    heroImageAlt: 'Fertility and IVF clinic in Urmia, Iran',
    breadcrumbName: 'Fertility & IVF in Urmia',
    relatedPostSlug: 'ivf-treatment-in-iran-cost',
    sections: {
      overview: [
        'Urmia has become a recognised destination for fertility treatment in Iran, offering modern IVF laboratories, experienced reproductive endocrinologists and costs significantly lower than in Turkey or the Gulf region.',
        'Akay Travel coordinates the full pathway: initial consultation, ovarian stimulation protocol, egg retrieval, embryo transfer and the required rest period — with bilingual support at every step.',
      ],
      cost: {
        intro:
          'The figures below are indicative starting prices for self-pay patients in Urmia. A binding quote is issued after your consultation and protocol are confirmed.',
        rows: [
          { label: 'IVF cycle (standard)', value: 'USD 2,200 – 3,000' },
          { label: 'ICSI (intracytoplasmic sperm injection)', value: '+ USD 400 – 600' },
          { label: 'Frozen embryo transfer', value: 'USD 700 – 1,000' },
          { label: 'Medication (stimulation)', value: 'USD 600 – 1,200' },
          { label: 'Pre-implantation genetic testing (PGT-A)', value: 'USD 900 – 1,400' },
        ],
        note: 'Prices include clinic fees and standard lab work. Medication cost varies by protocol and ovarian response.',
      },
      included: [
        'Consultation with a reproductive endocrinologist',
        'IVF or ICSI cycle with follicle monitoring',
        'Embryo culture and transfer',
        'Bilingual coordinator at every appointment',
        'Written cost estimate before treatment begins',
      ],
      notIncluded: [
        'Flights to Urmia',
        'Hotel accommodation (bookable separately through Akay Travel)',
        'Donor eggs or sperm, if required',
        'Long-stay support services for complications',
      ],
      recovery: [
        'After embryo transfer you are advised to rest in Urmia for 7–10 days before travelling home. A pregnancy test is scheduled 12–14 days after transfer.',
        'Akay Travel arranges a comfortable hotel near the clinic and a coordinator remains reachable throughout the wait.',
      ],
      process: [
        'Send your medical summary and recent hormone tests via WhatsApp.',
        'We match you with a suitable clinic and provide a written estimate.',
        'On approval, we schedule the consultation and book visa, hotel and transfer.',
        'You arrive in Urmia and begin the stimulation protocol under your physician.',
      ],
    },
    faq: [
      {
        q: 'How long do I need to stay in Urmia for IVF?',
        a: 'A full IVF cycle typically requires 14–21 days in Urmia, including stimulation, retrieval and transfer, plus 7–10 days of rest before travel.',
      },
      {
        q: 'Are the fertility clinics in Urmia accredited?',
        a: 'Yes. We partner only with clinics that hold national accreditation and operate modern embryology laboratories with trained embryologists.',
      },
      {
        q: 'Do I need a medical visa for Iran?',
        a: 'Most international patients require a medical visa. Akay Travel arranges the invitation letter and guides you through the application.',
      },
    ],
  },
  {
    slug: 'cosmetic-surgery-urmia',
    locale: 'en',
    hreflangPair: 'tr/tedaviler/urmia-estetik-cerrahi',
    title: 'Cosmetic Surgery in Urmia',
    metaTitle: 'Cosmetic Surgery in Urmia | Akay Travel +98 44 3346 5524',
    metaDescription:
      'Cosmetic surgery in Urmia, Iran — rhinoplasty, facelift and body contouring with Akay Travel. Full coordination. Call +98 44 3346 5524.',
    h1: 'Cosmetic Surgery in Urmia',
    heroImage: '/images/hero-cosmetic.svg',
    heroImageAlt: 'Cosmetic surgery clinic in Urmia, Iran',
    breadcrumbName: 'Cosmetic Surgery in Urmia',
    relatedPostSlug: 'rhinoplasty-in-iran-cost',
    sections: {
      overview: [
        'Urmia is one of Iran’s leading centres for cosmetic surgery, with board-certified plastic surgeons performing rhinoplasty, facelift, breast augmentation and body contouring at a fraction of European or Turkish prices.',
        'Akay Travel connects you with experienced surgeons, arranges your consultation and operation, and manages your hotel and transfer so you can focus on recovery.',
      ],
      cost: {
        intro:
          'Indicative starting prices for the most requested cosmetic procedures in Urmia. A fixed quote is provided after surgeon review of your photos and goals.',
        rows: [
          { label: 'Rhinoplasty (nose surgery)', value: 'USD 1,000 – 1,800' },
          { label: 'Facelift', value: 'USD 2,200 – 3,500' },
          { label: 'Breast augmentation', value: 'USD 2,500 – 3,800' },
          { label: 'Liposuction (one area)', value: 'USD 800 – 1,500' },
          { label: 'Tummy tuck (abdominoplasty)', value: 'USD 2,000 – 3,200' },
        ],
        note: 'Prices include surgeon, anaesthesia and operating room fees. Implants and specialised materials are quoted separately.',
      },
      included: [
        'Pre-operative consultation with the surgeon',
        'Surgery in an accredited operating theatre',
        'Anaesthesia and recovery room care',
        'Post-operative follow-up before departure',
        'Bilingual coordinator during your stay',
      ],
      notIncluded: [
        'Flights to Urmia',
        'Hotel accommodation (bookable separately)',
        'Compression garments and prescribed medication',
        'Revision surgery, if needed in the future',
      ],
      recovery: [
        'Most cosmetic procedures require 7–14 days in Urmia before you are cleared to fly. Rhinoplasty patients typically stay 8–10 days for splint removal and a follow-up review.',
        'We arrange a quiet hotel near the clinic and a coordinator checks in on you during recovery.',
      ],
      process: [
        'Send clear photos and your goals via WhatsApp.',
        'We share them with a matching surgeon and return a written estimate.',
        'On approval, we schedule surgery and arrange visa, hotel and transfer.',
        'You arrive, attend the pre-op consultation and proceed to surgery.',
      ],
    },
    faq: [
      {
        q: 'How do I choose a surgeon in Urmia?',
        a: 'Akay Travel shares your photos and goals with a surgeon whose specialism matches your procedure, and provides their credentials and before-and-after examples before you commit.',
      },
      {
        q: 'Is it safe to fly after cosmetic surgery?',
        a: 'For most procedures, flying is permitted 7–14 days after surgery once the surgeon confirms healing is on track. We schedule your return only after this clearance.',
      },
      {
        q: 'What if I need a revision later?',
        a: 'Revision policies vary by surgeon and procedure. We clarify the revision terms in writing before you travel, so there are no surprises.',
      },
    ],
  },
  {
    slug: 'dental-treatment-urmia',
    locale: 'en',
    hreflangPair: '',
    title: 'Dental Treatment in Urmia',
    metaTitle: 'Dental Treatment in Urmia | Akay Travel +98 44 3346 5524',
    metaDescription:
      'Dental treatment in Urmia, Iran — implants, crowns and veneers with Akay Travel. Full coordination. Call +98 44 3346 5524.',
    h1: 'Dental Treatment in Urmia',
    heroImage: '/images/hero-dental.svg',
    heroImageAlt: 'Dental clinic in Urmia, Iran',
    breadcrumbName: 'Dental Treatment in Urmia',
    relatedPostSlug: '',
    sections: {
      overview: [
        'Dental treatment in Urmia combines modern clinics with internationally trained dentists and prices that make full-mouth restoration affordable for patients from abroad.',
        'Akay Travel coordinates consultations, treatment planning and the often short recovery period, with hotel and transfer arranged around your appointment schedule.',
      ],
      cost: {
        intro:
          'Indicative starting prices for common dental procedures in Urmia. A fixed treatment plan and quote are issued after a panoramic X-ray or consultation.',
        rows: [
          { label: 'Dental implant (single, abutment and crown)', value: 'USD 500 – 800' },
          { label: 'Porcelain crown', value: 'USD 120 – 220' },
          { label: 'Zirconia crown', value: 'USD 180 – 300' },
          { label: 'Veneer (porcelain)', value: 'USD 120 – 200' },
          { label: 'Root canal treatment', value: 'USD 80 – 150' },
        ],
        note: 'Prices include the laboratory work for crowns and veneers. Bone grafting and sinus lift are quoted separately when required.',
      },
      included: [
        'Consultation and treatment planning',
        'Procedure in a modern dental clinic',
        'Laboratory work for crowns, veneers and bridges',
        'Post-treatment review before departure',
        'Bilingual coordinator at every appointment',
      ],
      notIncluded: [
        'Flights to Urmia',
        'Hotel accommodation (bookable separately)',
        'CT imaging when bone grafting is considered',
        'Future maintenance and replacement',
      ],
      recovery: [
        'Most dental treatments require only 2–5 days in Urmia. Implant placement may require a second visit 3–4 months later for the crown, or we can coordinate with your home dentist.',
        'We arrange a central hotel and short transfers so you can combine treatment with light tourism.',
      ],
      process: [
        'Send a recent panoramic X-ray or photos via WhatsApp.',
        'We return a treatment plan and written estimate from a partner clinic.',
        'On approval, we schedule appointments and arrange visa, hotel and transfer.',
        'You arrive, complete treatment and return with a post-treatment report.',
      ],
    },
    faq: [
      {
        q: 'How long does a full dental implant take?',
        a: 'A single implant is placed in one visit, but the crown is fitted 3–4 months later after osseointegration. We can coordinate the crown fitting on a return visit or with your home dentist.',
      },
      {
        q: 'Are the dental materials safe and certified?',
        a: 'Our partner clinics use CE-certified implants and materials from recognised global brands. The specific brand is confirmed in your treatment plan.',
      },
      {
        q: 'Can I combine dental work with a holiday?',
        a: 'Yes. Dental treatment usually leaves you comfortable the same day, so we can arrange light sightseeing in and around Urmia between appointments.',
      },
    ],
  },
  {
    slug: 'urmia-tup-bebek',
    locale: 'tr',
    hreflangPair: 'en/treatments/fertility-ivf-urmia',
    title: 'Urmia Tüp Bebek Tedavisi',
    metaTitle: 'Urmia Tüp Bebek Tedavisi | Akay Travel +98 44 3346 5524',
    metaDescription:
      "Urmia, İran'da tüp bebek tedavisi. Akay Travel ile fiyat, başarı oranları ve tam koordinasyon. WhatsApp +98 914 340 3431.",
    h1: 'Urmia Tüp Bebek Tedavisi',
    heroImage: '/images/hero-fertility.svg',
    heroImageAlt: "Urmia, İran'da tüp bebek kliniği",
    breadcrumbName: 'Urmia Tüp Bebek',
    relatedPostSlug: 'iranda-tup-bebek-fiyatlari',
    sections: {
      overview: [
        'Urmia, İran’da tüp bebek tedavisi için öne çıkan bir merkezdir; modern embriyoloji laboratuvarları, deneyimli üreme endokrinologları ve Türkiye veya Körfez ülkelerinden çok daha uygun maliyetler sunar.',
        'Akay Travel tüm süreci koordine eder: ilk konsültasyon, yumurtalık uyarılama protokolü, yumurta toplama, embriyo transferi ve gerekli dinlenme dönemi — her adımda iki dilli destekle.',
      ],
      cost: {
        intro:
          'Aşağıdaki rakamlar Urmia’daki kendi ödeme yapan hastalar için gösterge niteliğindedir. Bağlayıcı teklif, konsültasyon ve protokolünüz onaylandıktan sonra verilir.',
        rows: [
          { label: 'IVF döngüsü (standart)', value: '2.200 – 3.000 USD' },
          { label: 'ICSI (mikroenjeksiyon)', value: '+ 400 – 600 USD' },
          { label: 'Dondurulmuş embriyo transferi', value: '700 – 1.000 USD' },
          { label: 'İlaçlar (uyarılama)', value: '600 – 1.200 USD' },
          { label: 'PGT-A (genetik test)', value: '900 – 1.400 USD' },
        ],
        note: 'Fiyatlar klinik ücretlerini ve standart laboratuvar işlemlerini içerir. İlaç maliyeti protokole ve yumurtalık yanıtına göre değişir.',
      },
      included: [
        'Üreme endokrinoloğu ile konsültasyon',
        'Folikül takibiyle IVF veya ICSI döngüsü',
        'Embriyo kültürü ve transfer',
        'Her randevuda iki dilli koordinatör',
        'Tedavi öncesi yazılı maliyet tahmini',
      ],
      notIncluded: [
        'Urmia uçuşları',
        'Otel konaklaması (Akay Travel ile ayrı ayarlanabilir)',
        'Gerektiğinde donör yumurta veya sperm',
        'Komplikasyonlar için uzun kalış destek hizmetleri',
      ],
      recovery: [
        'Embriyo transferinden sonra eve dönmeden önce 7–10 gün Urmia’da dinlenmeniz önerilir. Gebelik testi transferden 12–14 gün sonra planlanır.',
        'Akay Travel, kliniğe yakın konforlu bir otel ayarlar ve koordinatör bekleme süresi boyunca ulaşılabilir kalır.',
      ],
      process: [
        'Tıbbi özetinizi ve son hormon testlerinizi WhatsApp’tan gönderin.',
        'Sizi uygun bir klinikle eşleştirir ve yazılı tahmin veririz.',
        'Onay sonrası konsültasyonu planlar, vize, otel ve transferi ayarlarız.',
        'Urmia’ya gelirsiniz ve hekiminiz gözetiminde uyarılama protokolüne başlarsınız.',
      ],
    },
    faq: [
      {
        q: 'Tüp bebek için Urmia’da ne kadar kalmam gerek?',
        a: 'Tam bir IVF döngüsü genellikle uyarılama, toplama ve transfer dahil 14–21 gün, ayrıca seyahatten önce 7–10 gün dinlenme gerektirir.',
      },
      {
        q: 'Urmia’daki tüp bebek klinikleri akredite mi?',
        a: 'Evet. Yalnızca ulusal akreditasyona sahip ve eğitimli embriyologların çalıştığı modern embriyoloji laboratuvarlı kliniklerle çalışıyoruz.',
      },
      {
        q: 'İran için tıbbi vize gerekir mi?',
        a: 'Çoğu uluslararası hasta için tıbbi vize gerekir. Akay Travel davet mektubunu ayarlar ve başvuru sürecinde size rehberlik eder.',
      },
    ],
  },
  {
    slug: 'urmia-estetik-cerrahi',
    locale: 'tr',
    hreflangPair: 'en/treatments/cosmetic-surgery-urmia',
    title: 'Urmia Estetik Cerrahi',
    metaTitle: 'Urmia Estetik Cerrahi | Akay Travel +98 44 3346 5524',
    metaDescription:
      "Urmia, İran'da estetik cerrahi — rinoplasti, yüz gerdirme ve vücut şekillendirme. Akay Travel ile tam koordinasyon. +98 44 3346 5524.",
    h1: 'Urmia Estetik Cerrahi',
    heroImage: '/images/hero-cosmetic.svg',
    heroImageAlt: "Urmia, İran'da estetik cerrahi kliniği",
    breadcrumbName: 'Urmia Estetik Cerrahi',
    relatedPostSlug: 'iranda-burun-estetigi-fiyatlari',
    sections: {
      overview: [
        'Urmia, İran’da estetik cerrahi için önde gelen merkezlerden biridir; sertifikalı plastik cerrahlar rinoplasti, yüz gerdirme, göğüs büyütme ve vücut şekillendirmeyi Avrupa veya Türkiye fiyatlarının çok altına yapar.',
        'Akay Travel sizi deneyimli cerrahlarla buluşturur, konsültasyon ve ameliyatı ayarlar, otel ve transferinizi yönetir; böylece iyileşmeye odaklanabilirsiniz.',
      ],
      cost: {
        intro:
          'Urmia’da en çok talep edilen estetik işlemler için gösterge niteliğinde başlangıç fiyatları. Sabit teklif, cerrahın fotoğraflarınızı ve hedeflerinizi incelemesinden sonra verilir.',
        rows: [
          { label: 'Rinoplasti (burun estetiği)', value: '1.000 – 1.800 USD' },
          { label: 'Yüz gerdirme', value: '2.200 – 3.500 USD' },
          { label: 'Göğüs büyütme', value: '2.500 – 3.800 USD' },
          { label: 'Liposuction (tek bölge)', value: '800 – 1.500 USD' },
          { label: 'Karın germe (abdominoplasti)', value: '2.000 – 3.200 USD' },
        ],
        note: 'Fiyatlar cerrah, anestezi ve ameliyathane ücretlerini içerir. İmplantlar ve özel malzemeler ayrı fiyatlandırılır.',
      },
      included: [
        'Cerrah ile ameliyat öncesi konsültasyon',
        'Akredite ameliyathanede cerrahi',
        'Anestezi ve derlenme odası bakımı',
        'Ayrılmadan önce ameliyat sonrası kontrol',
        'Kalışınız boyunca iki dilli koordinatör',
      ],
      notIncluded: [
        'Urmia uçuşları',
        'Otel konaklaması (ayrı ayarlanabilir)',
        'Korse ve reçeteli ilaçlar',
        'Gelecekte gerekirse revizyon ameliyatı',
      ],
      recovery: [
        'Çoğu estetik işlemden sonra uçma izni verilmeden önce 7–14 gün Urmia’da kalmanız gerekir. Rinoplasti hastaları genellikle atıl alma ve kontrol için 8–10 gün kalır.',
        'Kliniğe yakın sakin bir otel ayarlarız ve koordinatör iyileşme sürecinde sizi kontrol eder.',
      ],
      process: [
        'Net fotoğraflarınızı ve hedeflerinizi WhatsApp’tan gönderin.',
        'Bunları uygun bir cerrahla paylaşır ve yazılı tahmin döneriz.',
        'Onay sonrası ameliyatı planlar, vize, otel ve transferi ayarlarız.',
        'Gelirsiniz, ameliyat öncesi konsültasyona katılır ve ameliyata ilerlersiniz.',
      ],
    },
    faq: [
      {
        q: 'Urmia’da cerrahımı nasıl seçerim?',
        a: 'Akay Travel fotoğraflarınızı ve hedeflerinizi, işleminize uygun uzmanlığı olan bir cerrahla paylaşır; taahhüt vermeden önce sertifikalarını ve öncesi-sonrası örneklerini sunar.',
      },
      {
        q: 'Estetik cerrahiden sonra uçmak güvenli mi?',
        a: 'Çoğu işlemden sonra, cerrah iyileşmenin yolunda olduğunu onayladığında 7–14 gün sonra uçulmasına izin verilir. Dönüş uçuğunuzu yalnızca bu onaydan sonra planlarız.',
      },
      {
        q: 'Daha sonra revizyon gerekirse?',
        a: 'Revizyon politikaları cerraha ve işleme göre değişir. Seyahatten önce revizyon koşullarını yazılı olarak netleştiririz, böylece sürpriz olmaz.',
      },
    ],
  },
];

export function getTreatment(slug: string, locale: Locale): Treatment | undefined {
  return treatments.find((t) => t.slug === slug && t.locale === locale);
}
