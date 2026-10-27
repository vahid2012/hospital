import type { Locale } from './site';

export type Dict = {
  nav: {
    treatments: string;
    cities: string;
    blog: string;
    faq: string;
    contact: string;
    home: string;
    switchTo: string;
    menu: string;
    close: string;
  };
  treatments: {
    fertility: string;
    cosmetic: string;
    dental: string;
    fertilityTr: string;
    cosmeticTr: string;
  };
  citiesNames: {
    urmia: string;
    tabriz: string;
    tehran: string;
    shiraz: string;
  };
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    heroCtaSecondary: string;
    servicesTitle: string;
    servicesSubtitle: string;
    citiesTitle: string;
    citiesSubtitle: string;
    whyTitle: string;
    whySubtitle: string;
    why1Title: string;
    why1Body: string;
    why2Title: string;
    why2Body: string;
    why3Title: string;
    why3Body: string;
    why4Title: string;
    why4Body: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaWhatsapp: string;
  };
  service: {
    coordination: string;
    coordinationBody: string;
    cosmetic: string;
    cosmeticBody: string;
    fertility: string;
    fertilityBody: string;
    visa: string;
    visaBody: string;
    hotel: string;
    hotelBody: string;
    transfer: string;
    transferBody: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    relatedTitle: string;
    publishedOn: string;
    faqHeading: string;
    stickyCta: string;
    stickyWhatsapp: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    instagramLabel: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    formNote: string;
    hotelNote: string;
    hotelAnchor: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    contact: string;
    rights: string;
    tagline: string;
  };
  breadcrumb: {
    home: string;
    blog: string;
    faq: string;
    contact: string;
    treatments: string;
    cities: string;
  };
  treatmentPage: {
    overview: string;
    cost: string;
    included: string;
    notIncluded: string;
    recovery: string;
    process: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  cityPage: {
    overview: string;
    whyHere: string;
    hospitals: string;
    travel: string;
    externalGuideLabel: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
};

export const DICT: Record<Locale, Dict> = {
  en: {
    nav: {
      treatments: 'Treatments',
      cities: 'Cities',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      home: 'Home',
      switchTo: 'TR',
      menu: 'Open menu',
      close: 'Close menu',
    },
    treatments: {
      fertility: 'Fertility & IVF',
      cosmetic: 'Cosmetic Surgery',
      dental: 'Dental Treatment',
      fertilityTr: 'Fertility & IVF in Urmia',
      cosmeticTr: 'Cosmetic Surgery in Urmia',
    },
    citiesNames: {
      urmia: 'Urmia',
      tabriz: 'Tabriz',
      tehran: 'Tehran',
      shiraz: 'Shiraz',
    },
    home: {
      heroEyebrow: 'Medical Tourism in Iran',
      heroTitle: 'Premium Healthcare in Iran, Coordinated End-to-End',
      heroSubtitle:
        'Akay Travel connects international patients with leading clinics in Urmia, Tabriz, Tehran and Shiraz — treatment, visa, hotel and transfer, all handled.',
      heroCta: 'Explore Treatments',
      heroCtaSecondary: 'Contact Us',
      servicesTitle: 'What We Coordinate',
      servicesSubtitle:
        'From first consultation to safe return home, we manage every step of your medical journey in Iran.',
      citiesTitle: 'Cities We Serve',
      citiesSubtitle:
        'Four destinations, each with accredited hospitals and English-speaking care teams.',
      whyTitle: 'Why Patients Choose Akay Travel',
      whySubtitle:
        'A partner agency built around safety, transparency and genuine patient support.',
      why1Title: 'Vetted Clinics',
      why1Body:
        'We work only with accredited hospitals and experienced, board-certified surgeons.',
      why2Title: 'Transparent Pricing',
      why2Body:
        'You receive a written cost estimate before you travel — no hidden fees, no surprises.',
      why3Title: 'Full Coordination',
      why3Body:
        'Visa, flights, hotel, airport transfer and clinic appointments arranged as one package.',
      why4Title: 'Bilingual Support',
      why4Body:
        'English and Turkish-speaking coordinators accompany you throughout your stay.',
      ctaTitle: 'Ready to Start Your Treatment Journey?',
      ctaBody:
        'Send us your questions on WhatsApp or contact us for a free, no-obligation consultation.',
      ctaButton: 'Contact Us',
      ctaWhatsapp: 'WhatsApp Us',
    },
    service: {
      coordination: 'Treatment Coordination',
      coordinationBody:
        'We match you with the right specialist, schedule consultations and stay with you through every appointment.',
      cosmetic: 'Cosmetic Surgery',
      cosmeticBody:
        'Rhinoplasty, facelift, breast procedures and body contouring with experienced surgeons in Urmia.',
      fertility: 'Fertility & IVF',
      fertilityBody:
        'IVF, ICSI and fertility diagnostics at modern clinics with competitive success rates.',
      visa: 'Visa Support',
      visaBody:
        'Medical visa invitation letters and application guidance for patients travelling to Iran.',
      hotel: 'Hotel Booking',
      hotelBody:
        'Comfortable, hospital-near accommodation booked within your budget and length of stay.',
      transfer: 'Airport Transfer',
      transferBody:
        'Private ground transport between airport, hotel and clinic for every appointment.',
    },
    blog: {
      title: 'Blog & Patient Guides',
      subtitle:
        'Practical, up-to-date information on treatments, costs and travel to Iran for medical care.',
      readMore: 'Read article',
      relatedTitle: 'Related articles',
      publishedOn: 'Published on',
      faqHeading: 'Frequently Asked Questions',
      stickyCta: 'Questions about your treatment?',
      stickyWhatsapp: 'WhatsApp Akay Travel',
    },
    contact: {
      title: 'Contact Akay Travel',
      subtitle:
        'Reach our medical coordination team by phone, WhatsApp or the form below. We respond within one business day.',
      phoneLabel: 'Office phone',
      whatsappLabel: 'WhatsApp',
      instagramLabel: 'Instagram',
      formTitle: 'Send a message',
      formName: 'Your name',
      formEmail: 'Email address',
      formPhone: 'Phone (with country code)',
      formMessage: 'How can we help?',
      formSubmit: 'Send message',
      formNote:
        'This form opens WhatsApp with your message pre-filled — no data is stored on our server.',
      hotelNote:
        'Travelling to Urmia? We recommend staying at Jahangardi Hotel Urmia for medical travelers — a budget-friendly option close to the city clinics.',
      hotelAnchor: 'Jahangardi Hotel Urmia for medical travelers',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle:
        'Answers to the most common questions from patients considering medical treatment in Iran with Akay Travel.',
    },
    footer: {
      about:
        'Akay Travel is a medical tourism partner agency coordinating treatment, travel and accommodation for international patients in Iran.',
      quickLinks: 'Quick links',
      contact: 'Contact',
      rights: 'All rights reserved.',
      tagline: 'Medical tourism in Iran, coordinated with care.',
    },
    breadcrumb: {
      home: 'Home',
      blog: 'Blog',
      faq: 'FAQ',
      contact: 'Contact',
      treatments: 'Treatments',
      cities: 'Cities',
    },
    treatmentPage: {
      overview: 'Overview',
      cost: 'Cost & Pricing',
      included: 'What is included',
      notIncluded: 'Not included',
      recovery: 'Recovery & aftercare',
      process: 'How it works',
      ctaTitle: 'Want a personalised quote?',
      ctaBody:
        'Send us your questions and we will prepare a written estimate with no obligation.',
      ctaButton: 'Contact Us',
    },
    cityPage: {
      overview: 'Overview',
      whyHere: 'Why this city',
      hospitals: 'Hospitals & clinics',
      travel: 'Travel & accommodation',
      externalGuideLabel: 'Urmia medical tourism guide',
      ctaTitle: 'Planning treatment in this city?',
      ctaBody:
        'Tell us what you need and we will build a full treatment-and-travel package for you.',
      ctaButton: 'Contact Us',
    },
  },
  tr: {
    nav: {
      treatments: 'Tedaviler',
      cities: 'Şehirler',
      blog: 'Blog',
      faq: 'SSS',
      contact: 'İletişim',
      home: 'Ana Sayfa',
      switchTo: 'EN',
      menu: 'Menüyü aç',
      close: 'Menüyü kapat',
    },
    treatments: {
      fertility: 'Tüp Bebek & Üreme',
      cosmetic: 'Estetik Cerrahi',
      dental: 'Diş Tedavisi',
      fertilityTr: 'Urmia Tüp Bebek Tedavisi',
      cosmeticTr: 'Urmia Estetik Cerrahi',
    },
    citiesNames: {
      urmia: 'Urmia',
      tabriz: 'Tebriz',
      tehran: 'Tahran',
      shiraz: 'Şiraz',
    },
    home: {
      heroEyebrow: "İran'da Sağlık Turizmi",
      heroTitle: "İran'da Premium Sağlık Hizmeti, Uçtan Uca Koordine",
      heroSubtitle:
        'Akay Travel, Urmia, Tebriz, Tahran ve Şiraz’daki önde gelen kliniklerle uluslararası hastaları buluşturur — tedavi, vize, otel ve transferin tamamı tek elden.',
      heroCta: 'Tedavileri İncele',
      heroCtaSecondary: 'İletişime Geç',
      servicesTitle: 'Koordine Ettiğimiz Hizmetler',
      servicesSubtitle:
        'İlk konsültasyondan güvenli eve dönüşe kadar, İran’daki tibbi yolculuğunuzun her adımını yönetiyoruz.',
      citiesTitle: 'Hizmet Verdiğimiz Şehirler',
      citiesSubtitle:
        'Dört destinasyon, her biri akredite hastaneler ve İngilizce konuşan bakım ekipleriyle.',
      whyTitle: 'Hastalar Neden Akay Travel’ı Seçer',
      whySubtitle:
        'Güvenlik, şeffaflık ve gerçek hasta desteği etrafında kurulmuş bir partner acente.',
      why1Title: 'Seçkin Klinikler',
      why1Body:
        'Yalnızca akredite hastaneler ve deneyimli, sertifikalı cerrahlarla çalışıyoruz.',
      why2Title: 'Şeffaf Fiyatlandırma',
      why2Body:
        'Yolculuğunuzdan önce yazılı maliyet tahmini alırsınız — gizli ücret yok, sürpriz yok.',
      why3Title: 'Tam Koordinasyon',
      why3Body:
        'Vize, uçuş, otel, havalimanı transferi ve klinik randevuları tek paket olarak ayarlanır.',
      why4Title: 'İki Dilli Destek',
      why4Body:
        'İngilizce ve Türkçe konuşan koordinatörler kalışınız boyunca yanınızdadır.',
      ctaTitle: 'Tedavi Yolculuğunuza Başlamaya Hazır mısınız?',
      ctaBody:
        "Sorularınızı WhatsApp'tan gönderin veya ücretsiz, bağlayıcı olmayan bir konsültasyon için bizimle iletişime geçin.",
      ctaButton: 'İletişime Geç',
      ctaWhatsapp: "WhatsApp'tan Yazın",
    },
    service: {
      coordination: 'Tedavi Koordinasyonu',
      coordinationBody:
        'Sizi doğru uzmanla eşleştirir, konsültasyonları planlar ve her randevuda yanınızda oluruz.',
      cosmetic: 'Estetik Cerrahi',
      cosmeticBody:
        'Urmia’da deneyimli cerrahlarla rinoplasti, yüz gerdirme, göğüs ve vücut şekillendirme.',
      fertility: 'Tüp Bebek & Üreme',
      fertilityBody:
        'Rekabetçi başarı oranlarına sahip modern kliniklerde IVF, ICSI ve üreme tanısı.',
      visa: 'Vize Desteği',
      visaBody:
        "İran'a seyahat eden hastalar için tıbbi vize davet mektubu ve başvuru rehberliği.",
      hotel: 'Otel Rezervasyonu',
      hotelBody:
        'Bütçenize ve kalış sürenize uygun, hastaneye yakın konaklama rezervasyonu.',
      transfer: 'Havalimanı Transferi',
      transferBody:
        'Her randevu için havalimanı, otel ve klinik arasında özel kara ulaşımı.',
    },
    blog: {
      title: 'Blog ve Hasta Rehberleri',
      subtitle:
        "İran'da tedavi, maliyetler ve seyahat hakkında pratik, güncel bilgiler.",
      readMore: 'Yazıyı oku',
      relatedTitle: 'İlgili yazılar',
      publishedOn: 'Yayın tarihi',
      faqHeading: 'Sıkça Sorulan Sorular',
      stickyCta: 'Tedavinizle ilgili sorularınız mı var?',
      stickyWhatsapp: "Akay Travel'e WhatsApp'tan Yazın",
    },
    contact: {
      title: 'Akay Travel ile İletişim',
      subtitle:
        'Tıbbi koordinasyon ekibimize telefon, WhatsApp veya aşağıdaki form ile ulaşın. Bir iş günü içinde yanıt veriyoruz.',
      phoneLabel: 'Ofis telefonu',
      whatsappLabel: 'WhatsApp',
      instagramLabel: 'Instagram',
      formTitle: 'Mesaj gönderin',
      formName: 'Adınız',
      formEmail: 'E-posta adresi',
      formPhone: 'Telefon (ülke koduyla)',
      formMessage: 'Nasıl yardımcı olabiliriz?',
      formSubmit: 'Mesaj gönder',
      formNote:
        'Bu form mesajınızı önceden doldurarak WhatsApp’ı açar — sunucumuzda veri saklanmaz.',
      hotelNote:
        "Urmia'ya seyahat mi ediyorsunuz? Tıbbi seyahat edenler için Jahangardi Hotel Urmia otelini öneriyoruz — şehir kliniklerine yakın, bütçe dostu bir seçenek.",
      hotelAnchor: 'Jahangardi Hotel Urmia for medical travelers',
    },
    faq: {
      title: 'Sıkça Sorulan Sorular',
      subtitle:
        "İran'da Akay Travel ile tıbbi tedavi düşünen hastaların en sık sorduğu soruların yanıtları.",
    },
    footer: {
      about:
        "Akay Travel, İran'daki uluslararası hastalar için tedavi, seyahat ve konaklamayı koordine eden bir sağlık turizmi partner acentesidir.",
      quickLinks: 'Hızlı bağlantılar',
      contact: 'İletişim',
      rights: 'Tüm hakları saklıdır.',
      tagline: 'İran’da sağlık turizmi, özenle koordine.',
    },
    breadcrumb: {
      home: 'Ana Sayfa',
      blog: 'Blog',
      faq: 'SSS',
      contact: 'İletişim',
      treatments: 'Tedaviler',
      cities: 'Şehirler',
    },
    treatmentPage: {
      overview: 'Genel Bakış',
      cost: 'Maliyet & Fiyatlandırma',
      included: 'Dahil olanlar',
      notIncluded: 'Dahil olmayanlar',
      recovery: 'İyileşme & son bakım',
      process: 'Nasıl çalışır',
      ctaTitle: 'Kişiselleştirilmiş teklif ister misiniz?',
      ctaBody:
        'Sorularınızı gönderin, bağlayıcı olmayan bir yazılı tahmin hazırlayalım.',
      ctaButton: 'İletişime Geç',
    },
    cityPage: {
      overview: 'Genel Bakış',
      whyHere: 'Neden bu şehir',
      hospitals: 'Hastaneler & klinikler',
      travel: 'Seyahat & konaklama',
      externalGuideLabel: 'Urmia sağlık turizmi rehberi',
      ctaTitle: 'Bu şehirde tedavi mi planlıyorsunuz?',
      ctaBody:
        'İhtiyacınızı söyleyin, size tam bir tedavi-ve-seyahat paketi oluşturalım.',
      ctaButton: 'İletişime Geç',
    },
  },
};
