// astro.config.mjs
import { defineConfig } from 'astro/config';

// Use BASE_PATH env var; default to '/'
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: 'https://desaideep89.github.io',
  base,
});