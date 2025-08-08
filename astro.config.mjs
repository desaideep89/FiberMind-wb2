import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://desaideep89.github.io',
  base: '/FiberMind-wb2',
  build: { inlineStylesheets: 'auto' },
});
