import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output. Deploys to Vercel as plain static files, no adapter needed.
export default defineConfig({
  output: 'static',
  site: 'https://www.fluxyai.codes',
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
