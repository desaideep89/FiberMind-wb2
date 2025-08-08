// astro.config.mjs
import { defineConfig } from 'astro/config';

// IMPORTANT: update the "site" if you ever move repos or orgs
export default defineConfig({
  site: 'https://desaideep89.github.io',
  base: '/FiberMind-wb2',          // repo name (GitHub Pages subpath)
  trailingSlash: 'ignore',         // cleaner URLs
  scopedStyleStrategy: 'where',    // safer CSS scoping
});