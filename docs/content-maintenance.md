# Content maintenance

The repository is the CMS. `src/content.config.ts` validates collection entries; `src/data/` contains singleton data. Run `npm run validate` with Node 22.22.0 before committing. The ID of an entry in a collection JSON array must be unique, lowercase and URL-safe. Chapter IDs become route segments.

## Phase 1 status

Chapters, historical partner logos, and existing awards are migrated. Activities and volunteer recognition are intentionally empty, and impact totals are withheld pending verification. The activity rendering/filtering system is Phase 3, active reward display is Phase 4, the full timeline/impact record is Phase 5, and the curated six-person recognition section is Phase 6. Adding records to those datasets now validates their structure but does **not** complete those future UIs.

Do not publish the specification's example café, example activity/date or fictional people. Empty arrays are valid and produce informational Astro loader warnings; these are expected until real entries are supplied.

## Activities

Add an object to `src/content/activities.json`. Structural example only (replace every placeholder; not an actual event):

```json
{
  "id": "replace-with-activity-slug",
  "title": "REPLACE: confirmed activity title",
  "date": "2099-01-01",
  "startTime": "06:00",
  "chapter": "la-union",
  "activityType": "REPLACE: activity type",
  "locationName": "REPLACE: confirmed meeting place",
  "firstTimerFriendly": true,
  "summary": "REPLACE: confirmed activity description",
  "draft": true
}
```

Dates are Philippine calendar dates (`YYYY-MM-DD`), times use 24-hour `HH:mm` in Asia/Manila. Optional: `endTime`, `locationDetails`, `whatToBring` (strings), `facebookUrl` (HTTPS), `featured`, `cancelled`, `partnerReward`. Chapter references must match an existing ID. End time must be after start time on the same date; overnight events are not currently modelled. Do not infer first-timer suitability or preparation instructions.

To cancel, set `cancelled: true` or remove the object. To hold an announcement, set `draft: true`. Phase 3 must filter both flags and expired activities; static dates require a rebuild after expiry. Arrange a maintained scheduled Pages rebuild when real activities are enabled, or rebuild manually when schedules change. Static HTML does not refresh itself at midnight.

## Partners and rewards

Edit `src/content/partners.json`. Required fields: `id`, `name`, `type` (`historical`, `sponsor`, `community`, `volunteer-reward-partner`), `active`. Optional: `logo` (`/images/partners/...`), `description`, `websiteUrl` (HTTPS).

Existing records are historical, `active: false`; do not turn them into active sponsors without confirmation. The LINK logo's label is retained without inventing a fuller organization identity.

For a confirmed current offer, add `reward: { "offer": "CONFIRMED OFFER", "notes": "CONFIRMED CONDITIONS", "validUntil": "YYYY-MM-DD" }` and set the partner active. The expiry is deliberately required so offers cannot be presented as open-ended by accident. To associate an offer with an activity, use `partnerReward: { "partnerId": "existing-partner-id", "offer": "CONFIRMED OFFER", "notes": "CONFIRMED CONDITIONS" }`. These are informational fields; there is no redemption or verification system. Phase 4 must check active status and expiry when displaying offers.

## Impact

Edit `src/data/impact.ts`. Add only verified metrics with an `id`, `label`, numerical `value`, explicit `period`, and `source`. Update `lastUpdated` to the confirmation date. Missing totals should remain absent, not zero. Prefer cleanups, participations, trees/mangroves, turtle conservation or blood donations; never add untracked trash weight. Original figures are an immutable reference in `migration/legacy-content.json`, **not** a live source for publication.

## Timeline

Add a JSON file in `src/content/timeline/` with `date`, `title`, `description`; optional `type`, `images` (paths relative to `src/assets/images/`), `facebookUrl`, `featured`. Dates may be `YYYY`, `YYYY-MM`, or `YYYY-MM-DD`; do not invent a day if only the month/year is known. Phase 1 About displays the migrated month-dated recognitions; broader date-precision presentation belongs to the Phase 5 timeline. Keep milestones selective, not a copy of every Facebook post.

## Our Most Active DOERs

Once six names have been selected by maintainers, add exactly six entries to `src/content/volunteers.json`. Fields: `id`, `name`, `order` (1–6); optional `chapter` (existing chapter ID), `photo`, `role`, `recognition`. Use six distinct orders. Do not reuse legacy leaderboard counts, animal avatars or infer selection from the seven old names. The six-entry count and unique-order assertion will be enforced in the Phase 6 renderer; Phase 1 accepts an empty dataset.

## Chapters

Edit `src/content/chapters.json`; required `id`, `name`, `province`, `type` (`main` or `chapter`), `active`. Optional `description`, `facebookUrl`, `contactUrl`, `image`. An active chapter automatically gets `/chapters/{id}`. Confirm a chapter before listing it, and publish only approved contacts and appropriate photos. Shared collection references allow more chapters later without editing a hard-coded enum.

## Images, links and global information

- Editorial originals live in `src/assets/images/`; use `Photo.astro` with a relative path and meaningful alt text. Astro generates WebP sizes at build time. Set `eager` only for the main above-the-fold image.
- Logo, favicon, share images and existing partner logos keep stable URLs in `public/`. New optimized partner treatment can follow in Phase 7. Raw editorial image paths changed from `/images/...` to Astro-generated assets; page URLs are covered by redirects.
- `src/data/programs.ts` and `src/data/organization.ts` are the shared source of program and organization copy.
- `src/data/site.ts` centralizes contacts, navigation and external forms. Confirm the existing Google Form's role before filling `membershipForm`. Keep Facebook as the activity/photo channel.
- Update `SITE_URL` in the build environment for canonical, sharing, structured data, robots and sitemap URLs. Never put private keys or form responses in content files.
- Unfinished user-authored Nuxt experiments were moved unchanged to `migration/nuxt-experiments/`. This directory is not served, checked or bundled. It is retained for owner review, not as an alternate website implementation.
