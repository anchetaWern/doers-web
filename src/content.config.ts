import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.string().trim().min(1);
const httpsUrl = z.url({ protocol: /^https$/ });
const dateOnly = text.regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => {
  const date = new Date(`${value}T00:00:00+08:00`);
  return Number.isFinite(date.valueOf()) && new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Manila', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(date) === value;
}, 'Use a real calendar date, YYYY-MM-DD');
const time = text.regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Use 24-hour time, HH:mm');

const chapters = defineCollection({
  loader: file('src/content/chapters.json'),
  schema: z.object({
    name: text, province: text, type: z.enum(['main', 'chapter']),
    description: text.optional(), facebookUrl: httpsUrl.optional(),
    contactUrl: httpsUrl.optional(), image: text.optional(), active: z.boolean(),
  }),
});

const partners = defineCollection({
  loader: file('src/content/partners.json'),
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
  loader: file('src/content/activities.json'),
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
  loader: glob({ base: './src/content/timeline', pattern: '*.json' }),
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
  loader: file('src/content/volunteers.json'),
  schema: z.object({
    name: text, chapter: reference('chapters').optional(), photo: text.optional(),
    role: text.optional(), recognition: text.optional(), order: z.number().int().min(1).max(6),
  }),
});

export const collections = { activities, chapters, partners, timeline, volunteers };
