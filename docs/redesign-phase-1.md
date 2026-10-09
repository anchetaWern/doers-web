# Phase 1 — Foundation and design system

Scope: complete the audit and foundation increment requested on 9 October 2026. Subsequent product phases remain ordered as in the spec.

## Implemented

- Migrated Nuxt/Vuetify to pinned Astro 7.3.8, static output, strict TypeScript, supported Node 22.22.0 and a smaller lockfile. Removed the database API and framework-specific runtime/plugins/dependencies.
- Established validated activities, partners, chapters, timeline and volunteers collections, plus shared site/organization/program/impact data. Migrated all nine sourced recognitions and fourteen historical partner identities/logos. LINK is labelled only by its readable logo; two military unit names were checked against their logo text.
- Added global layout, mobile native disclosure navigation, desktop navigation, footer, CTAs, cards, section/page headings, statistic pattern and responsive optimized photography. No client hydration or third-party scripts. Bright brand accents retained; darker functional colors meet normal-text contrast requirements.
- Added SEO titles/descriptions, canonical/OG/Twitter metadata, Organization JSON-LD, robots, sitemap, favicon, static 404, Cloudflare redirects and response headers.
- Migrated useful copy into working destinations for the new main navigation. These are foundation pages, not a claim that later homepage/activity/reward/timeline/recognition features are complete. Existing About recognitions stay accessible until the Phase 5 history redesign.
- Preserved source photographs in Astro assets and share images/partner logos in public assets. Untracked Nuxt experiments are retained outside the executable app under `migration/`; `.env` and unrelated work were untouched.

## Decisions and deviations

- The spec assumed an Astro starting point. Because the existing application was Nuxt and all styling was Vuetify-dependent, framework replacement and plain CSS are necessary to meet its lightweight/static intent.
- Obsolete Vue components were retired now because retaining an unused Vue implementation would undermine the foundation migration. Phase 7 still owns final QA/cleanup across the completed product.
- The same existing form has conflicting labels. It remains an inquiry/collaboration link; no invented membership URL. Impact totals are withheld because reporting periods conflict. Empty activities/recognition datasets use honest public fallbacks; no fabricated dates, perks or people.
- `SITE_URL` retains the existing Vercel origin as fallback. The owner must supply the final production origin in Cloudflare's build environment. No actual Cloudflare project/hostname or deployment credentials were supplied; nothing is published by this increment.
- The activity schema supports local calendar dates and validates chapter/partner references. The partner reward schema requires expiry, a small safeguard for future maintainability. Filtering and display are intentionally left to their designated phases.

## Validation

- Clean `npm ci` from a regenerated Astro-only lockfile succeeds. An initial build exposed an inherited/nested dependency resolution problem; regenerating the lock in an isolated directory and reinstalling fixed it without application workarounds or extra runtime dependencies.
- `npm run validate` passes: Astro check reports **0 errors, 0 warnings, 0 hints**; production build generates **13 static HTML pages** plus robots/sitemap and optimized images; generated-link/anchor/image/metadata/JSON-LD checks pass. There are no client scripts beyond JSON-LD and no server/Worker output. Empty activities/volunteers produce expected informational loader warnings, not invented content.
- `git diff --check` passes. No dedicated lint configuration existed; no lint result is claimed.
- Production preview reviewed in desktop Chrome and Safari responsive mode at 320px, 375px and 768px widths. Mobile menu opens with Space, displays all navigation destinations and follows the Volunteer link correctly; focus is visible, narrow CTAs wrap within the header, and content remains readable. Chrome's native automation lost accessibility/screenshot access after entering developer tools, so Safari completed the responsive review.
- Cloudflare redirect syntax and destinations checked locally; live Pages redirect behavior is still a deployment validation step. No production deployment performed.
- Existing Google Form URL retained exactly. Automated web fetch could not access either form, and the direct collaboration form opened a Google sign-in page in a signed-out browser. Its fields/scope and public accessibility therefore remain unverified; no form was submitted. The owner should confirm the maintained inquiry form before launch.

## Next increment

Phase 2: complete the homepage conversion sections and fuller first-activity guide, using the new foundation. Do not infer membership rules, registration policies, activity timing or new impact totals from the migration snapshot. Phase 3 will connect future activity entries to the UI and expiry filtering; Phase 4 will complete partner pathways/reward display; Phases 5–6 complete institutional history and curated recognition; Phase 7 validates the complete site for launch.
