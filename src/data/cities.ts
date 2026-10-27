import type { Locale } from './site';

export type CitySlug =
  | 'urmia-medical-tourism'
  | 'tabriz-medical-tourism'
  | 'tehran-medical-tourism'
  | 'shiraz-medical-tourism'
  | 'urmia-saglik-turizmi';

export type City = {
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
    whyHere: { title: string; body: string }[];
    hospitals: string[];
    travel: string[];
  };
  externalLink?: {
    url: string;
    anchor: string;
    context: string;
  };
  faq: { q: string; a: string }[];
};

export const cities: City[] = [
  {
    slug: 'urmia-medical-tourism',
    locale: 'en',
    hreflangPair: 'tr/sehirler/urmia-saglik-turizmi',
    title: 'Urmia Medical Tourism',
    metaTitle: 'Urmia Medical Tourism Guide | Akay Travel +98 44 3346 5524',
    metaDescription:
      'Medical tourism in Urmia, Iran — clinics, travel and accommodation with Akay Travel. IVF, cosmetic surgery and dental. Call +98 44 3346 5524.',
    h1: 'Medical Tourism in Urmia',
    heroImage: '/images/hero-urmia.svg',
    heroImageAlt: 'View of Urmia, Iran with Lake Urmia in the background',
    breadcrumbName: 'Urmia Medical Tourism',
    relatedPostSlug: 'ivf-treatment-in-iran-cost',
    externalLink: {
      url: 'https://tourviza.ir/گردشگری-پزشکی-ارومیه/',
      anchor: 'Urmia medical tourism guide',
      context:
        'For a broader overview of the city’s healthcare infrastructure and attractions, see this Urmia medical tourism guide on Tourviza.',
    },
    sections: {
      overview: [
        'Urmia, the capital of West Azerbaijan province in northwestern Iran, has grown into one of the country’s busiest medical tourism hubs. Its proximity to the Turkish and Iraqi borders, modern private hospitals and significantly lower costs make it a practical choice for patients travelling from Turkey, the Gulf and Europe.',
        'Akay Travel is based in Urmia and coordinates the full patient journey here — from fertility treatment and cosmetic surgery to dental work — with bilingual support and ground handling built around your clinic schedule.',
      ],
      whyHere: [
        {
          title: 'Close to the border',
          body: 'Urmia is reachable by land from the Turkish and Iraqi borders, making it convenient for patients who prefer not to fly or who combine treatment with a short road trip.',
        },
        {
          title: 'Cost advantage',
          body: 'Treatment prices in Urmia are typically 40–60% lower than in Istanbul for comparable procedures, with no compromise on clinic standards.',
        },
        {
          title: 'Bilingual environment',
          body: 'A large Azerbaijani-Turkish-speaking population means Turkish-speaking patients feel at home, and our coordinators add English support throughout.',
        },
      ],
      hospitals: [
        'We partner with accredited private hospitals and specialist clinics in Urmia, each vetted for hygiene, equipment and surgeon credentials.',
        'Our partner facilities cover fertility and IVF, plastic surgery, dental and general medicine, with modern operating theatres and English-speaking nursing staff.',
      ],
      travel: [
        'Most patients fly into Urmia International Airport (OMH) or arrive overland via the Gürbulaz–Bazargan border crossing from Turkey. Akay Travel arranges private airport or border pickup.',
        'We book hotel accommodation close to your clinic, suited to your recovery needs and length of stay, and provide private transfer for every appointment.',
      ],
    },
    faq: [
      {
        q: 'How do I reach Urmia from Turkey?',
        a: 'You can fly to Urmia International Airport (OMH) via Tehran, or cross the land border at Gürbulaz–Bazargan and continue by private transfer — about 4–5 hours by road.',
      },
      {
        q: 'Is Urmia safe for medical tourists?',
        a: 'Yes. Urmia is a calm, well-developed city with a long history of receiving cross-border patients. Our coordinators accompany you and remain reachable throughout your stay.',
      },
      {
        q: 'Do I need a visa for Iran?',
        a: 'Most nationalities need a visa. Akay Travel arranges the medical invitation letter and guides you through the application process.',
      },
    ],
  },
  {
    slug: 'tabriz-medical-tourism',
    locale: 'en',
    hreflangPair: '',
    title: 'Tabriz Medical Tourism',
    metaTitle: 'Tabriz Medical Tourism Guide | Akay Travel +98 44 3346 5524',
    metaDescription:
      'Medical tourism in Tabriz, Iran — advanced hospitals and fertility care with Akay Travel. Full coordination. Call +98 44 3346 5524.',
    h1: 'Medical Tourism in Tabriz',
    heroImage: '/images/hero-tabriz.svg',
    heroImageAlt: 'Tabriz, Iran cityscape with the Blue Mosque',
    breadcrumbName: 'Tabriz Medical Tourism',
    relatedPostSlug: 'ivf-treatment-in-iran-cost',
    sections: {
      overview: [
        'Tabriz, the largest city in northwestern Iran, is a major medical referral centre with some of the country’s most established teaching hospitals and fertility clinics. Its location roughly 150 km from Urmia makes it a natural alternative or complement for patients already travelling to the region.',
        'Akay Travel coordinates treatment in Tabriz with the same end-to-end service we offer in Urmia — clinic matching, visa, hotel, transfer and bilingual support.',
      ],
      whyHere: [
        {
          title: 'Teaching-hospital expertise',
          body: 'Tabriz University of Medical Sciences anchors a network of advanced hospitals with sub-specialists in fertility, cardiology, oncology and orthopaedics.',
        },
        {
          title: 'Fertility centre of reference',
          body: 'Tabriz is a regional referral hub for IVF and reproductive medicine, often chosen by patients with complex or previously failed cycles.',
        },
        {
          title: 'Historic and calm',
          body: 'A historic city with a relaxed pace, Tabriz is comfortable for longer recovery stays and offers light cultural tourism for accompanying family.',
        },
      ],
      hospitals: [
        'We refer patients to accredited teaching and private hospitals in Tabriz, selected for the relevant sub-specialty and English-speaking capacity.',
        'Fertility patients are typically matched with the city’s reference IVF centre, which handles both standard and complex reproductive cases.',
      ],
      travel: [
        'Tabriz International Airport (TBZ) has direct flights from Istanbul and connections via Tehran. We arrange airport pickup and intercity transfer if you combine Tabriz with Urmia.',
        'Hotel options range from central business hotels to quieter suburban properties suited to longer fertility stays.',
      ],
    },
    faq: [
      {
        q: 'Why choose Tabriz over Urmia?',
        a: 'Tabriz is often chosen for sub-specialty care or complex fertility cases that benefit from a teaching-hospital setting. We help you compare both cities based on your treatment.',
      },
      {
        q: 'Can I combine treatment in Tabriz and Urmia?',
        a: 'Yes. The two cities are about 150 km apart and we arrange private intercity transfer so you can split consultations or recovery between them.',
      },
      {
        q: 'How long do fertility patients stay in Tabriz?',
        a: 'A full IVF cycle in Tabriz typically requires 18–25 days, including stimulation, retrieval, transfer and a short rest period before travel.',
      },
    ],
  },
  {
    slug: 'tehran-medical-tourism',
    locale: 'en',
    hreflangPair: '',
    title: 'Tehran Medical Tourism',
    metaTitle: 'Tehran Medical Tourism Guide | Akay Travel +98 44 3346 5524',
    metaDescription:
      'Medical tourism in Tehran, Iran — advanced oncology, cardiology and surgery with Akay Travel. Full coordination. Call +98 44 3346 5524.',
    h1: 'Medical Tourism in Tehran',
    heroImage: '/images/hero-tehran.svg',
    heroImageAlt: 'Tehran, Iran skyline with the Alborz mountains',
    breadcrumbName: 'Tehran Medical Tourism',
    relatedPostSlug: '',
    sections: {
      overview: [
        'Tehran, Iran’s capital, is the country’s most advanced medical hub, home to internationally trained specialists, cutting-edge imaging and a wide range of sub-specialties not always available in the regional cities.',
        'Akay Travel coordinates complex and tertiary care in Tehran — including oncology, cardiology, neurosurgery and advanced fertility — with the same bilingual, end-to-end support.',
      ],
      whyHere: [
        {
          title: 'Sub-specialty depth',
          body: 'Tehran offers access to sub-specialists and advanced technology for complex cases, including robotic surgery, advanced imaging and specialised cancer care.',
        },
        {
          title: 'International connectivity',
          body: 'Imam Khomeini International Airport (IKA) has direct flights from major European, Turkish and Gulf cities, simplifying long-haul travel.',
        },
        {
          title: 'Research hospitals',
          body: 'Several Tehran hospitals are affiliated with Iran’s top medical universities, giving patients access to the latest treatment protocols and clinical research.',
        },
      ],
      hospitals: [
        'We partner with leading private and university hospitals in Tehran, selected for the relevant specialty, international patient experience and safety record.',
        'Tehran is particularly suited to oncology, cardiology, neurosurgery, complex orthopaedics and advanced fertility treatment.',
      ],
      travel: [
        'Most international patients arrive at Imam Khomeini International Airport (IKA). Akay Travel arranges private pickup and a hotel in a district convenient to your hospital.',
        'Tehran is large and traffic-heavy; we plan transfers carefully and recommend accommodation close to the treating hospital.',
      ],
    },
    faq: [
      {
        q: 'When should I choose Tehran over Urmia or Tabriz?',
        a: 'Tehran is recommended for complex or sub-specialty care — advanced oncology, cardiac surgery, neurosurgery — that may not be available in the regional cities.',
      },
      {
        q: 'Are English-speaking doctors available in Tehran?',
        a: 'Yes. Many Tehran specialists have trained or practised abroad and speak English fluently, and our coordinators cover any language gap.',
      },
      {
        q: 'Is Tehran safe for medical tourists?',
        a: 'Tehran is a large, functioning capital with established international patient services. We manage transfers and accommodation so you can focus on treatment.',
      },
    ],
  },
  {
    slug: 'shiraz-medical-tourism',
    locale: 'en',
    hreflangPair: '',
    title: 'Shiraz Medical Tourism',
    metaTitle: 'Shiraz Medical Tourism Guide | Akay Travel +98 44 3346 5524',
    metaDescription:
      'Medical tourism in Shiraz, Iran — ophthalmology, cosmetic surgery and fertility with Akay Travel. Full coordination. Call +98 44 3346 5524.',
    h1: 'Medical Tourism in Shiraz',
    heroImage: '/images/hero-shiraz.svg',
    heroImageAlt: 'Shiraz, Iran with the Nasir al-Mulk Mosque',
    breadcrumbName: 'Shiraz Medical Tourism',
    relatedPostSlug: 'rhinoplasty-in-iran-cost',
    sections: {
      overview: [
        'Shiraz, in southern Iran, is known as the cultural capital of the country and has built a strong reputation in ophthalmology, cosmetic surgery and fertility treatment. Its relaxed atmosphere and proximity to Persepolis make it a comfortable choice for patients who want to combine treatment with light tourism.',
        'Akay Travel coordinates treatment in Shiraz with full bilingual support, including flights via Tehran, hotel booking and transfers.',
      ],
      whyHere: [
        {
          title: 'Ophthalmology centre of excellence',
          body: 'Shiraz is home to one of Iran’s leading eye hospitals, making it a destination for corneal, retinal and refractive surgery.',
        },
        {
          title: 'Cosmetic surgery hub',
          body: 'Shiraz has a high concentration of experienced plastic surgeons, particularly for rhinoplasty and facial procedures.',
        },
        {
          title: 'Cultural recovery',
          body: 'The city’s gardens, mild climate and nearby historic sites offer a calm, pleasant environment for recovery.',
        },
      ],
      hospitals: [
        'We refer patients to accredited private hospitals and specialist centres in Shiraz, with particular strength in ophthalmology, plastic surgery and fertility.',
        'Each facility is vetted for international patient experience and English-speaking staff.',
      ],
      travel: [
        'Shiraz International Airport (SYZ) has regional flights and connections via Tehran. We arrange airport pickup and hotel accommodation suited to your recovery.',
        'For patients well enough to sightsee, we can coordinate light cultural visits to Persepolis and the city’s gardens between appointments.',
      ],
    },
    faq: [
      {
        q: 'What is Shiraz best known for medically?',
        a: 'Shiraz is particularly strong in ophthalmology, cosmetic surgery and fertility treatment, and is a common choice for rhinoplasty patients.',
      },
      {
        q: 'Can I combine treatment with sightseeing in Shiraz?',
        a: 'Yes, for lighter procedures. We can arrange supervised cultural visits to Persepolis and the city’s gardens once your surgeon clears you for activity.',
      },
      {
        q: 'How do I reach Shiraz?',
        a: 'Shiraz International Airport (SYZ) has regional flights; most international patients connect via Tehran. We arrange both legs and the ground transfer.',
      },
    ],
  },
  {
    slug: 'urmia-saglik-turizmi',
    locale: 'tr',
    hreflangPair: 'en/cities/urmia-medical-tourism',
    title: 'Urmia Sağlık Turizmi',
    metaTitle: 'Urmia Sağlık Turizmi Rehberi | Akay Travel +98 44 3346 5524',
    metaDescription:
      "Urmia, İran'da sağlık turizmi — klinikler, seyahat ve konaklama. Akay Travel ile tüp bebek, estetik ve diş. WhatsApp +98 914 340 3431.",
    h1: 'Urmia Sağlık Turizmi',
    heroImage: '/images/hero-urmia.svg',
    heroImageAlt: 'Arka planda Urmia Gölü ile Urmia, İran manzarası',
    breadcrumbName: 'Urmia Sağlık Turizmi',
    relatedPostSlug: 'iranda-tup-bebek-fiyatlari',
    sections: {
      overview: [
        'Urmia, İran’ın kuzeybatısındaki Batı Azerbaycan eyaletinin merkezidir ve ülkenin en yoğun sağlık turizmi merkezlerinden birine dönüşmüştür. Türk ve Irak sınırlarına yakınlığı, modern özel hastaneleri ve önemli maliyet avantajı, Türkiye, Körfez ve Avrupa’dan gelen hastalar için pratik bir seçenek yapar.',
        'Akay Travel Urmia merkezlidir ve buradaki tüm hasta yolculuğunu koordine eder — tüp bebek, estetik cerrahi ve diş tedavisinden genel sağlığa — iki dilli destek ve klinik programınıza göre tasarlanmış ulaşım ile.',
      ],
      whyHere: [
        {
          title: 'Sınıra yakın',
          body: 'Urmia, Türk ve Irak sınırlarından karayoluyla ulaşılabilir; uçmayı tercih etmeyen veya tedaviyi kısa bir yolculuğa birleştiren hastalar için ideal.',
        },
        {
          title: 'Maliyet avantajı',
          body: 'Urmia’da tedavi fiyatları, karşılaştırılabilir işlemlerde İstanbul’dan tipik olarak %40–60 daha düşüktür; klinik standartlardan ödün vermeden.',
        },
        {
          title: 'İki dilli ortam',
          body: 'Geniş bir Azerbaycan-Türkçe konuşan nüfus, Türkçe konuşan hastaların kendini evinde hissetmesini sağlar; koordinatörlerimiz boyunca İngilizce destek ekler.',
        },
      ],
      hospitals: [
        'Urmia’da akredite özel hastaneler ve uzman kliniklerle çalışıyoruz; her biri hijyen, ekipman ve cerrah sertifikaları açısından değerlendirilmiştir.',
        'Partner tesislerimiz tüp bebek, plastik cerrahi, diş ve genel dahiliye alanlarını kapsar; modern ameliyat odaları ve İngilizce konuşan hemşire kadrosuyla.',
      ],
      travel: [
        'Çoğu hasta Urmia Uluslararası Havalimanı’na (OMH) uçar veya Türkiye’den Gürbulaz–Bazargan sınır kapısından karayoluyla gelir. Akay Travel özel havalimanı veya sınır karşılaması ayarlar.',
        'Kliniğinize yakın, iyileşme ihtiyaçlarınıza ve kalış sürenize uygun otel rezervasyonu yapar ve her randevu için özel transfer sağlarız.',
      ],
    },
    faq: [
      {
        q: 'Türkiye’den Urmia’ya nasıl ulaşırım?',
        a: 'Tahran üzerinden Urmia Uluslararası Havalimanı’na (OMH) uçabilir veya Gürbulaz–Bazargan sınır kapısından geçerek özel transferle devam edebilirsiniz — yaklaşık 4–5 saat yol.',
      },
      {
        q: 'Urmia sağlık turistleri için güvenli mi?',
        a: 'Evet. Urmia, sınır ötesi hastaları ağırlamakta uzun geçmişi olan sakin, gelişmiş bir şehirdir. Koordinatörlerimiz size eşlik eder ve kalışınız boyunca ulaşılabilir kalır.',
      },
      {
        q: 'İran için vize gerekir mi?',
        a: 'Çoğu uyruk için vize gerekir. Akay Travel tıbbi davet mektubunu ayarlar ve başvuru sürecinde size rehberlik eder.',
      },
    ],
  },
];

export function getCity(slug: string, locale: Locale): City | undefined {
  return cities.find((c) => c.slug === slug && c.locale === locale);
}
