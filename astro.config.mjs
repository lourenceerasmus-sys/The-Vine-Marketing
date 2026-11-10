import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thevinemarketing.co.za',
  // The legacy static prototype (index.html, services.html) stays at the repo
  // root for reference; Astro only builds from src/ and public/.
  build: { inlineStylesheets: 'always' },
});
