# DOERs website

Astro, TypeScript and plain CSS. Content is maintained in Git and generated into static HTML for Cloudflare Pages. No backend or accounts.

## Local development

Use Node 22.22.0 (`nvm use`), then:

```sh
npm ci
npm run dev
```

`npm run validate` runs Astro's type/content checks, builds the site, and checks generated pages for broken internal links, missing images, basic metadata and unexpected client scripts. `npm run preview` serves the production build. No separate lint tool was present in the original project or added to this increment.

## Content editing

The founders' content schema and local Keystatic editor are prepared. Run `npm run dev:cms` to edit the local YAML content at `/keystatic`; see [content maintenance](docs/content-maintenance.md) for the managed fields. The public site remains static until a Keystatic Cloud project is created. [Keystatic Cloud setup](docs/keystatic.md) records the connection work that follows.

## Cloudflare Pages

- Framework preset: Astro (static)
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22.22.0` (also set `NODE_VERSION` if required by the build environment)
- Set `SITE_URL` to the actual public origin, such as the assigned Pages URL or custom domain. The fallback is the existing `https://doers-web.vercel.app`, because the repository does not identify the future hostname.
- No Cloudflare adapter, Functions, Workers, database bindings or runtime secrets are needed for the current public static site. When Keystatic Cloud is connected, add the narrowly scoped adapter/API routes described in [Keystatic Cloud setup](docs/keystatic.md); public pages remain prerendered. Do not deploy `.env` or `migration/`.
- `_redirects` and `_headers` are copied from `public/`. Validate redirects on a Pages preview deployment; Astro's local preview does not emulate Cloudflare redirect rules.
- If the site changes domains, configure redirects on the old deployment/domain as well; a new Pages project's redirect file cannot redirect requests still reaching Vercel.

See [the audit](docs/redesign-audit.md), [Phase 1 implementation notes](docs/redesign-phase-1.md), and [content maintenance](docs/content-maintenance.md). Phases 2–7 of the authoritative spec follow this foundation increment.
