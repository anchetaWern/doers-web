import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const site = process.env.SITE_URL || 'https://doers-web.vercel.app';
const keystaticEnabled = process.env.KEYSTATIC_ENABLED === 'true';
const url = new URL(site);
if (!['https:', 'http:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash) {
  throw new Error('SITE_URL must be an absolute public origin, without a path, query or fragment.');
}

export default defineConfig({
  site: url.origin,
  output: 'static',
  trailingSlash: 'never',
  // Keystatic injects non-prerendered admin/API routes. Keep it opt-in until
  // the Cloud project and Cloudflare adapter are connected.
  integrations: [
    sitemap(),
    ...(keystaticEnabled ? [react(), markdoc(), keystatic()] : []),
  ],
  image: { responsiveStyles: true },
});
