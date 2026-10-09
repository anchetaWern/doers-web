import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://doers-web.vercel.app';
const url = new URL(site);
if (!['https:', 'http:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash) {
  throw new Error('SITE_URL must be an absolute public origin, without a path, query or fragment.');
}

export default defineConfig({
  site: url.origin,
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  image: { responsiveStyles: true },
});
