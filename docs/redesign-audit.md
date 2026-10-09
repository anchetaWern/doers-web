# DOERs redesign audit and migration map

Audited 9 October 2026 against the complete `doers-website-redesign-implementation-spec.md`. This document records the original implementation before migration. The requested first increment is Phases 0–1; the richer page experiences in Phases 2–7 remain subsequent increments.

## Existing architecture

- No Astro installation. `package.json` declares Nuxt `^3.17.3`, Vue `^3.5.13`, Vuetify `^3.8.5`; npm lockfile, Node 20.19.6 locally. Node 22.22.0 and 24.15.0 are also available.
- Nuxt uses `src/`, SSR, Nitro `vercel-static`, crawling prerender, and Vercel-specific analytics and speed insights. No Cloudflare deployment configuration or CI checks. TypeScript extends generated Nuxt configuration. No lint/test scripts.
- Vuetify supplies layout, typography, navigation, cards, menus, and icons. No intentional custom font loading or standalone design system; default Vuetify/system sans-serif. Google Maps loads through a client plugin and API key.
- `src/server/api/volunteers.get.js` queries Neon using `DATABASE_URL`; its only frontend call is commented out. This is unnecessary backend infrastructure, explicitly incompatible with the spec.
- Untracked Nuxt Content configuration, placeholder Markdown, unfinished blog pages using the older `queryContent` API, an unused contact form without submission, and an unused Facebook video embed exist. Preserve this user work in a non-executable migration snapshot rather than silently deleting it.
- SEO repeats Vercel URLs, page descriptions, and sharing metadata per page. Organization JSON-LD is useful. Sitemap/robots are Nuxt modules; tracked `public/robots.txt` was already deleted in the working tree.

## Retain, modify, replace

| Existing item | Decision / destination |
| --- | --- |
| DOERs full logo, favicon | Retain; give logo a meaningful accessible name and intrinsic size. |
| Blue `#26A9E0`, yellow `#FDBD13` / `#FDBF12`, green `#71A374`, charcoal `#181818` | Retain as brand accents; use darker blue/green for accessible text and buttons. |
| Mission, vision, EARTH values, DOERs acronym | Retain in structured organization data; refine grammar without changing meaning. |
| Existing cleanup, tree planting, turtle patrol, community photos | Retain originals; Astro-generated responsive WebP for rendered editorial images. |
| Home/about program cards | Migrate to a single local dataset and semantic Astro cards. |
| About awards (9 entries, March 2023–September 2024) and feature photos/links | Preserve all in structured historical data; accessible disclosure UI during migration, timeline in Phase 5. Do not infer a founding date. |
| About partner logos (14) | Preserve as historical associations, with no claim that rewards or sponsorships are currently active. Ambiguous `link.jpg` identity requires verification. |
| Founder Miguel Vargas / co-founder Angelyka Siggaoat | Preserve sourced founding information. Current officer roles require verification before presenting them as current. |
| Header/footer/contact data and social links | Centralize in `src/data/site.ts`. Keep email, phone, address, Facebook/Instagram/Threads/TikTok. Replace Google Maps JS with a plain map link. Do not republish unverified HQ opening hours. |
| Header Collaborate Google Form | Preserve exact URL as existing collaboration channel; the same URL is labelled Volunteer in Get Involved. Its actual scope is ambiguous. Record this instead of inventing a new form or asserting it is a membership application. |
| Home Support Us short Google Form URL | Preserve as support channel in configuration; purpose beyond support is unverified. |
| ContactForm, VideoEmbed, blog experiments | Not part of the new runtime; retain untracked originals under `migration/` for owner review. |
| Calendar, EventList | Replace; event says August 2025 but contains 13 September 2025. Never import as upcoming. |
| Daily cleanup locations | Preserve map coordinates in the audit snapshot; no verified current times/meeting instructions. Direct visitors to Facebook to confirm. |
| Leaderboard | Remove from rendering. Seven names, generic animal avatars and hard-coded counts have no source or tracking evidence. Phase 6 requires maintainer selection of six people; do not automatically infer a curated list. |
| OurImpact and 2024 accomplishments | Preserve source values privately in migration data. Home labels them “Since 2024”, About labels them “Achievements in 2024”: reporting period is unresolved. Do not publish as cumulative/current totals. |
| Merchandise | Existing contact-only page, no checkout. Retain `/merch` as a small Facebook inquiry page; retain product assets. Correct `doers-seabon.jpg` typo if images are rendered. |
| Vuetify/Vue, Maps client, icons, unused FullCalendar/webfontloader, Neon, Nuxt Content, Vercel dependencies | Remove from active dependencies after Astro replacement. Plain CSS is appropriate because original styling is tied to a hydrated Vue UI library. |

## Content inventory and factual risks

- Organization: Dalumpinas Oeste Eco Rangers; environmental and community work described in Home/About; founding people in OrgChart. No founding date found.
- Programs: coastal cleanups, Brigada Eskwela, ridge-to-reef/plogging, blood donations, tree planting/parenting, turtle patrol/releasing; four longer About descriptions. Health/community imagery also retained.
- About: mission/vision, five DOERs principles, five EARTH values, nine recognitions, thirteen accomplishment records, founders and officers, fourteen partner images.
- Legacy numbers: 742 cleanups, 26 tree planting activities / 97 monitoring days, 13 plogging activities, 7 turtle releases / 124 patrol days, 35 speaking engagements, 23 planning activities, 26 bloodletting activities, 48 acudetox/meditation sessions, 54 health activities, 15 runs/Zumba sessions, 12 gift/feeding sessions, 9 trainings, 16 awards. Require reporting-period/source confirmation. No trash weight will be published.
- Seven legacy leaderboard names/counts preserved in the source snapshot, not treated as validated recognition data.
- Chapters La Union (main), Ilocos Norte and Bataan come from the authoritative spec. No chapter-specific contacts/photos, launch dates or statistics in repository. Do not fabricate them.
- No actual future activities, active volunteer rewards, verified membership-only form, attendance/age/duration/registration policies in repository. Use honest empty states and direct people to the maintained Facebook channel.
- Generic blog Markdown contains only “My First Page” and “Hello World”; no durable editorial content to migrate.
- `src/public/images/` contains ~14 MB of authentic assets; preserve all originals (including currently unused media), not `.DS_Store` or stray `hey.txt` files. Previously deleted tree-planting/turtle-nesting assets must not be resurrected.

## Route map

| Old URL | New URL / handling |
| --- | --- |
| `/` | Preserve; migrate existing useful content, full conversion redesign in Phase 2. |
| `/about-us` | `/about`; Cloudflare 301 for both slash variants. |
| `/get-involved` | `/volunteer`; Cloudflare 301 for both slash variants. Partner pathway also reachable from navigation. |
| `/contact-us` | `/contact`; Cloudflare 301 for both slash variants. |
| `/merch` | Preserve as a simple contact CTA; de-emphasize in navigation. |
| `/blog`, `/blog/*` | Unfinished experiment; redirect to `/about`, never repurpose as an activity feed. |
| `/api/volunteers` | Retire; unused backend endpoint, no redirect to misleading HTML. |
| `/activities`, `/partners`, `/impact`, `/chapters` and chapter detail URLs | Introduce useful minimal migrated destinations for Phase 1 navigation. Build full experiences in their specified later phases. |
| `/about/timeline` | Phase 5; do not link until implemented. |

## Accessibility / performance findings

Original hero has a fixed 800px height and no page H1; About has multiple H1s. Logos/card images lack useful alt text; social links are icon-only without names. Mobile navigation depends on hydrated Vuetify display detection. Yellow/bright blue with white text risks poor contrast. Dense chart and fixed-size maps are problematic on narrow screens. Repeated metadata, remote animal avatars, icon font, heavy client UI and Google Maps are unnecessary costs.

Replacement foundation: semantic landmarks, one H1/page, skip link, visible focus, native keyboard-accessible mobile disclosure, readable contrast, 44px targets, reduced-motion support, fluid spacing/grids, intrinsic/responsive images, no framework hydration. No paid/new analytics; Vercel-specific scripts are removed because the deployment changes. Reconsider analytics separately with an actual maintained provider.

## Deployment and working-tree considerations

- Static Astro `dist/` on Cloudflare Pages; no adapter, SSR, functions, database or secrets required. Pin supported Node and check/build scripts. `_redirects` for migrated URLs, `_headers` for safe response defaults, generated sitemap and robots.
- Repository only establishes `https://doers-web.vercel.app` as the existing public origin. Keep it as the fallback, make `SITE_URL` configurable, and require the actual Pages/custom-domain URL at deployment. Never invent a Pages project hostname.
- Static upcoming-event filtering runs at build time. Later activity implementation must document rebuild scheduling when dates change; no request-time backend is justified.
- Before edits, working tree includes deleted robots/two photos and untracked `.vercel/`, content/blog/component experiments, sea-turtle image, spec, and `hey.txt`. Do not overwrite user work or expose `.env` contents. Retain untracked experiments outside active source discovery.

## Phase 1 decisions

Astro is a migration, not an upgrade. Replace Vue-only styling with lightweight CSS while preserving brand tokens. Introduce schemas for activities/partners/chapters/timeline/volunteers and typed singleton data; seed only sourced facts. Keep future activities and recognition empty pending real data. Migrate enough existing content to make every navigation destination usable without claiming completion of Phases 2–7. Retire the obsolete runtime as part of migration so there are no duplicate active implementations.

Follow-up during migration: logo inspection confirms the 580th Aircraft Control and Warning Wing and 585th Air Base Group names, and the LINK acronym. The full LINK identity is still not inferred. Editorial images now live under `src/assets/images/` for build-time optimization; logos and metadata images keep their public URLs. A signed-out check of the collaboration form reached Google sign-in, so the form's current fields and public access need maintainer confirmation before launch.
