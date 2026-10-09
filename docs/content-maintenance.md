# Content maintenance

All editable website content now lives under `src/content/` as schema-validated YAML. Page templates only decide how that content is presented. Use Node 22.22.0 and run `npm run validate` before committing an edit.

## Keystatic editor

Run `npm run dev:cms`, then open `/keystatic` on the local Astro address. Until a Keystatic Cloud project is connected, this uses Keystatic's local storage mode and writes directly to the YAML and image files in this repository. The normal `npm run dev` and production static build intentionally do not expose the editor.

The Cloud connection steps and the required Cloudflare configuration are in [Keystatic setup](keystatic.md).

## What founders can edit

- **Site settings**: organization name, contacts, social profiles, Google Forms, Facebook, maps and default search description.
- **Homepage**: the hero's eleven fields, introductory copy and the program-card list. Each program has its own title, image and description.
- **About, Volunteer, Partner, Activities, Contact and Impact pages**: page headings, body copy, labels and page images.
- **Chapters, activities, partners, recognition and volunteers**: one YAML entry per item. The entry filename is its stable site ID; changing it can change a chapter URL or a reference, so keep existing filenames unless a deliberate URL migration is planned.

Navigation, site structure, redirects and shared page components remain developer-maintained.

## Images

Editorial photos live in `src/assets/images/` and are optimized by Astro at build time. Keystatic stores their content values as `@assets/images/...`; the `Photo` component resolves this format while preserving the existing responsive image pipeline. Partner logos remain in `public/images/partners/` because they have stable public URLs and are shown as circular marks.

Provide an accurate alt description whenever a page-level image is changed. Do not use the website as a copy of the day-to-day Facebook photo feed.

## Editorial safeguards

- Facebook remains the primary source for routine activity posts and photos. Link to a relevant Facebook announcement instead of recreating a feed.
- Keep historical partners marked `historical` and inactive unless their current relationship is confirmed.
- Only publish approved chapter information, people, activity details and verified impact figures. Missing impact values should stay empty, rather than be shown as zero.
- Activities and volunteer recognition are intentionally empty. Their current collection schemas are ready for real entries, but their fuller display work remains in later redesign phases.
- For activity dates, use Philippine calendar dates in `YYYY-MM-DD` and 24-hour `HH:mm` times. Confirm location, first-timer guidance, external links and cancellation status before publishing.
- Recognition dates may be `YYYY`, `YYYY-MM` or `YYYY-MM-DD`; do not invent a day when only a month or year is known.
