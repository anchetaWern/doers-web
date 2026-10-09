import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.string().trim().min(1);
const optionalText = z.string().trim();
const httpsUrl = z.url({ protocol: /^https$/ });
const dateOnly = text.regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
  const date = new Date(`${value}T00:00:00+08:00`);
  return Number.isFinite(date.valueOf()) && new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Manila', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(date) === value;
}, 'Use a real calendar date, YYYY-MM-DD');
const time = text.regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Use 24-hour time, HH:mm');

const chapters = defineCollection({
  loader: glob({ base: './src/content/chapters', pattern: '*.yaml' }),
  schema: z.object({
    name: text, province: text, type: z.enum(['main', 'chapter']),
    description: text.optional(), facebookUrl: httpsUrl.optional(),
    contactUrl: httpsUrl.optional(), image: text.optional(), active: z.boolean(),
  }),
});

const partners = defineCollection({
  loader: glob({ base: './src/content/partners', pattern: '*.yaml' }),
  schema: z.object({
    name: text, logo: text.optional(),
    type: z.enum(['historical', 'sponsor', 'community', 'volunteer-reward-partner']),
    description: text.optional(), websiteUrl: httpsUrl.optional(),
    active: z.boolean(), reward: z.object({
      offer: text, notes: text.optional(), validUntil: dateOnly,
    }).optional(),
  }).refine(p => !p.reward || p.active, 'A reward requires an active partner'),
});

const activities = defineCollection({
  loader: glob({ base: './src/content/activities', pattern: '*.yaml' }),
  schema: z.object({
    title: text, date: dateOnly, startTime: time.optional(), endTime: time.optional(),
    chapter: reference('chapters'), activityType: text, locationName: text,
    locationDetails: text.optional(), firstTimerFriendly: z.boolean(),
    summary: text.optional(), whatToBring: z.array(text).optional(),
    facebookUrl: httpsUrl.optional(), featured: z.boolean().default(false),
    cancelled: z.boolean().default(false), draft: z.boolean().default(false),
    partnerReward: z.object({ partnerId: reference('partners'), offer: text, notes: text.optional() }).optional(),
  }).refine(a => !a.endTime || !a.startTime || a.endTime > a.startTime,
    'End time must follow start time on the activity date'),
});

const timeline = defineCollection({
  loader: glob({ base: './src/content/timeline', pattern: '*.yaml' }),
  schema: z.object({
    date: text.regex(/^\d{4}(?:-(?:0[1-9]|1[0-2])(?:-(?:0[1-9]|[12]\d|3[01]))?)?$/,
      'Use YYYY, YYYY-MM, or YYYY-MM-DD').refine(value => value.length !== 10 || dateOnly.safeParse(value).success,
        'Use a real calendar date'),
    title: text, description: text, type: text.optional(),
    images: z.array(text).default([]), facebookUrl: httpsUrl.optional(),
    featured: z.boolean().default(false),
  }),
});

const volunteers = defineCollection({
  loader: glob({ base: './src/content/volunteers', pattern: '*.yaml' }),
  schema: z.object({
    name: text, chapter: reference('chapters').optional(), photo: text.optional(),
    role: text.optional(), recognition: text.optional(), order: z.number().int().min(1).max(6),
  }),
});

const pageHeading = z.object({ eyebrow: text, title: text, description: text });
const image = text;

const settings = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'index.yaml' }),
  schema: z.object({
    name: text, fullName: text, description: text, email: text, phone: text, phoneHref: text, address: text,
    facebook: httpsUrl, facebookEvents: httpsUrl, mapUrl: httpsUrl, collaborationForm: httpsUrl, supportForm: httpsUrl,
    membershipForm: httpsUrl.nullable(), socials: z.array(z.object({ label: text, href: httpsUrl })),
  }),
});

const homepage = defineCollection({
  loader: glob({ base: './src/content/homepage', pattern: 'index.yaml' }),
  schema: z.object({
    hero: z.object({ eyebrow: text, headingStart: text, headingEnd: text, description: text, primaryLabel: text,
      primaryHref: text, secondaryLabel: text, secondaryHref: text, note: text, image, imageAlt: text, caption: text }),
    introduction: z.object({ eyebrow: text, title: text, description: text, chapterNote: text, linkLabel: text, linkHref: text }),
    programs: z.array(z.object({ title: text, image, description: text })).min(1),
  }),
});

const aboutPage = defineCollection({
  loader: glob({ base: './src/content/about', pattern: 'index.yaml' }),
  schema: z.object({
    heading: pageHeading, organizationEyebrow: text, organizationTitle: text, organizationImage: image, organizationImageAlt: text,
    principles: z.array(z.object({ letter: text, text })).min(1), visionMissionEyebrow: text, visionMissionTitle: text,
    vision: text, mission: text, valuesEyebrow: text, valuesTitle: text, values: z.array(z.object({ letter: text, text })).min(1),
    foundingEyebrow: text, foundingTitle: text, foundingLead: text, founders: z.array(z.object({ name: text, role: text })).min(1),
    chaptersLinkLabel: text, recognitionEyebrow: text, recognitionTitle: text, recognitionIntro: text,
  }),
});

const volunteerPage = defineCollection({
  loader: glob({ base: './src/content/volunteer', pattern: 'index.yaml' }),
  schema: z.object({
    heading: pageHeading, startTitle: text, startBody: z.array(text).min(1), activityButtonLabel: text, activityButtonHref: text,
    preparationTitle: text, preparationBody: text, facebookButtonLabel: text, inquiryLabel: text, membershipLabel: text,
    image, imageAlt: text,
  }),
});

const partnerPage = defineCollection({
  loader: glob({ base: './src/content/partner-page', pattern: 'index.yaml' }),
  schema: z.object({
    heading: pageHeading, collaborationTitle: text, collaborationBody: text, formButtonLabel: text, contactLead: text,
    image, imageAlt: text, partnersEyebrow: text, partnersTitle: text, partnersIntro: text,
  }),
});

const activitiesPage = defineCollection({
  loader: glob({ base: './src/content/activities-page', pattern: 'index.yaml' }),
  schema: z.object({ heading: pageHeading, emptyTitle: text, emptyBody: text, facebookButtonLabel: text, volunteerButtonLabel: text }),
});

const contactPage = defineCollection({
  loader: glob({ base: './src/content/contact', pattern: 'index.yaml' }),
  schema: z.object({
    heading: pageHeading, contactTitle: text, facebookButtonLabel: text, inquiryButtonLabel: text, socialTitle: text,
    locationTitle: text, visitNote: text, mapButtonLabel: text,
  }),
});

const impactPage = defineCollection({
  loader: glob({ base: './src/content/impact', pattern: 'index.yaml' }),
  schema: z.object({
    heading: pageHeading, programsEyebrow: optionalText.optional(), programsTitle: text, recordTitle: text, noMetricsMessage: text,
    lastUpdated: dateOnly.nullable(), metrics: z.array(z.object({ label: text, value: z.number().int().min(0), period: text, source: text })),
  }),
});

export const collections = {
  activities, activitiesPage, aboutPage, chapters, contactPage, homepage, impactPage, partnerPage, partners, settings, timeline, volunteerPage, volunteers,
};
