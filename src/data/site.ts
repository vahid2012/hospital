export const SITE = {
  name: 'Hospital365',
  domain: 'hospital365.ir',
  url: 'https://hospital365.ir',
  agency: 'Akay Travel',
  phones: {
    whatsapp: '+989143403431',
    whatsappDisplay: '+98 914 340 3431',
    office: '+984433465524',
    officeDisplay: '+98 44 3346 5524',
  },
  whatsappLink:
    'https://wa.me/989143403431?text=Hello%20Akay%20Travel',
  instagram: 'https://instagram.com/akay.iran.travel',
  instagramHandle: 'akay.iran.travel',
  availableLanguages: ['en', 'tr'] as const,
};

export type Locale = 'en' | 'tr';

export const LOCALE_DIR: Record<Locale, string> = {
  en: 'en',
  tr: 'tr',
};

export const OTHER_LOCALE: Record<Locale, Locale> = {
  en: 'tr',
  tr: 'en',
};

export const LANG_NAME: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
};
