import type { Locale } from './site';

export type FAQItem = { q: string; a: string };

export const faqData: Record<Locale, FAQItem[]> = {
  en: [
    {
      q: 'How do I start treatment with Akay Travel?',
      a: 'Send your medical summary and any recent test results via WhatsApp or the contact form. We match you with a suitable clinic, provide a written cost estimate and, on your approval, coordinate visa, hotel and transfer.',
    },
    {
      q: 'Which treatments do you coordinate?',
      a: 'Our main focus is fertility and IVF, cosmetic surgery and dental treatment, primarily in Urmia. We also coordinate sub-specialty care in Tabriz, Tehran and Shiraz on request.',
    },
    {
      q: 'How much does treatment cost in Iran?',
      a: 'Costs vary by procedure. IVF cycles start around USD 2,200, rhinoplasty around USD 1,000 and dental implants around USD 500. You receive a written estimate before you travel, with no hidden fees.',
    },
    {
      q: 'Do I need a visa to travel to Iran?',
      a: 'Most nationalities need a medical visa. Akay Travel arranges the invitation letter from your treating clinic and guides you through the application process.',
    },
    {
      q: 'How long do I need to stay in Iran?',
      a: 'It depends on the treatment. Dental work may require 2–5 days, cosmetic surgery 7–14 days and a full IVF cycle 18–21 days. We give you a clear timeline before you book.',
    },
    {
      q: 'Is it safe to travel to Iran for treatment?',
      a: 'We coordinate treatment in calm, well-developed cities with established international patient services. Our coordinators accompany you and remain reachable throughout your stay.',
    },
    {
      q: 'What languages do your coordinators speak?',
      a: 'Our coordinators speak English and Turkish, and the Urmia region has a large Azerbaijani-Turkish-speaking population, so Turkish-speaking patients feel at home.',
    },
    {
      q: 'What is included in your coordination package?',
      a: 'Clinic matching and appointment scheduling, a written cost estimate, visa invitation letter, hotel booking, airport transfers and bilingual support throughout your stay. Flights are booked separately unless you request otherwise.',
    },
  ],
  tr: [
    {
      q: 'Akay Travel ile tedaviye nasıl başlarım?',
      a: 'Tıbbi özetinizi ve varsa son test sonuçlarınızı WhatsApp veya iletişim formuyla gönderin. Sizi uygun bir klinikle eşleştirir, yazılı maliyet tahmini verir ve onayınız üzerine vize, otel ve transferi koordine ederiz.',
    },
    {
      q: 'Hangi tedavileri koordine ediyorsunuz?',
      a: 'Asıl odağımız Urmia’da tüp bebek, estetik cerrahi ve diş tedavisidir. Talep üzerine Tebriz, Tahran ve Şiraz’da alt uzmanlık alanlarında da koordinasyon sağlarız.',
    },
    {
      q: "İran'da tedavi maliyeti ne kadar?",
      a: 'Maliyet işleme göre değişir. IVF döngüleri 2.200 USD, rinoplasti 1.000 USD ve diş implantları 500 USD civarında başlar. Seyahatten önce yazılı tahmin alırsınız; gizli ücret yoktur.',
    },
    {
      q: 'İran’a seyahat için vize gerekir mi?',
      a: 'Çoğu uyruk için tıbbi vize gerekir. Akay Travel, tedavi göreceğiniz klinikten davet mektubunu ayarlar ve başvuru sürecinde size rehberlik eder.',
    },
    {
      q: 'İran’da ne kadar kalmam gerek?',
      a: 'Tedaviye bağlıdır. Diş tedavisi 2–5 gün, estetik cerrahi 7–14 gün ve tam bir IVF döngüsü 18–21 gün gerektirebilir. Rezervasyondan önce net bir takvim veririz.',
    },
    {
      q: 'Tedavi için İran’a seyahat güvenli mi?',
      a: 'Sakin, gelişmiş ve uluslararası hasta hizmetleri yerleşik şehirlerde koordinasyon sağlarız. Koordinatörlerimiz size eşlik eder ve kalışınız boyunca ulaşılabilir kalır.',
    },
    {
      q: 'Koordinatörleriniz hangi dilleri konuşur?',
      a: 'Koordinatörlerimiz İngilizce ve Türkçe konuşur; Urmia bölgesindeki geniş Azerbaycan-Türkçe konuşan nüfus sayesinde Türkçe konuşan hastalar kendini evinde hisseder.',
    },
    {
      q: 'Koordinasyon paketinizde neler var?',
      a: 'Klinik eşleştirme ve randevu planlama, yazılı maliyet tahmini, vize davet mektubu, otel rezervasyonu, havalimanı transferleri ve kalışınız boyunca iki dilli destek. Aksi istenmedikçe uçuşlar ayrı rezerve edilir.',
    },
  ],
};
