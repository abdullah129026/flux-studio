import { defineConfig } from 'astro/config';

// Static output. Deploys to Vercel as plain static files, no adapter needed.
export default defineConfig({
  output: 'static',
  site: 'https://www.fluxyai.codes',
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
