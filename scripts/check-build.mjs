// Static-deployment checks: real generated links/assets and metadata, no backend.
import { readdir, readFile, access } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';
import assert from 'node:assert/strict';

const root = new URL('../dist/', import.meta.url).pathname;
const walk = async dir => (await Promise.all((await readdir(dir, { withFileTypes: true })).map(
  entry => entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name),
))).flat();
const files = await walk(root);
const htmlFiles = files.filter(path => path.endsWith('.html'));
const exists = async path => { try { await access(path); return true; } catch { return false; } };
const resolve = async (path, current) => {
  const decoded = decodeURIComponent(path);
  const file = decoded.startsWith('/') ? join(root, decoded) : join(dirname(current), decoded);
  for (const candidate of [file, `${file}.html`, join(file, 'index.html')]) {
    if (files.includes(candidate)) return candidate;
  }
  return null;
};
const issues = [];
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const name = relative(root, file);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) issues.push(`${name}: needs exactly one H1`);
  for (const marker of ['name="description"', 'rel="canonical"', 'property="og:image"', 'name="viewport"', 'id="main-content"']) {
    if (!html.includes(marker)) issues.push(`${name}: missing ${marker}`);
  }
  for (const match of html.matchAll(/<(?:a|link|img)\b[^>]*?\b(?:href|src)="([^"]*)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|tel:|data:)/.test(url)) continue;
    if (!url || url === '#') { issues.push(`${name}: empty destination`); continue; }
    const [path, hash] = url.split('#');
    const target = path ? await resolve(path.split('?')[0], file) : file;
    if (!target) { issues.push(`${name}: missing ${url}`); continue; }
    if (hash && target.endsWith('.html')) {
      const body = target === file ? html : await readFile(target, 'utf8');
      if (!body.includes(`id="${decodeURIComponent(hash)}"`)) issues.push(`${name}: missing anchor ${url}`);
    }
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(match[0])) issues.push(`${name}: image lacks alt attribute`);
    if (!/\bwidth="/.test(match[0]) || !/\bheight="/.test(match[0])) issues.push(`${name}: image lacks intrinsic dimensions`);
  }
  for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (!script[1].includes('application/ld+json')) issues.push(`${name}: unexpected client script`);
    else { try { JSON.parse(script[2]); } catch { issues.push(`${name}: invalid JSON-LD`); } }
  }
}
for (const route of ['/', '/volunteer', '/activities', '/partners', '/impact', '/chapters', '/chapters/la-union', '/chapters/ilocos-norte', '/chapters/bataan', '/about', '/contact', '/merch']) {
  assert(await resolve(route, join(root, 'index.html')), `Missing route: ${route}`);
}
for (const asset of ['_redirects', '_headers', 'robots.txt', 'sitemap-index.xml', '404.html']) assert(await exists(join(root, asset)), `Missing ${asset}`);
assert(!await exists(join(root, '_worker.js')), 'Unexpected Cloudflare Worker');
assert(!await exists(join(root, 'server')), 'Unexpected server output');
assert.equal(issues.length, 0, issues.join('\n'));
console.log(`Validated ${htmlFiles.length} static pages: internal destinations, image attributes, metadata and no client runtime.`);
