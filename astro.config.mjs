// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://hospital365.ir';

export default defineConfig({
  site: SITE,
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', tr: 'tr' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
