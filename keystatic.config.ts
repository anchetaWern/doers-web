import { collection, config, fields, singleton } from '@keystatic/core';

// This configuration is loaded by the Keystatic browser client as well as
// Astro. Cloud project identifiers are safe to expose, unlike credentials.
const cloudProject = import.meta.env.PUBLIC_KEYSTATIC_CLOUD_PROJECT;

const requiredText = (label: string, options: { description?: string; multiline?: boolean } = {}) => fields.text({
  label,
  ...options,
  validation: { isRequired: true },
});

const image = (label: string, required = false) => required
  ? fields.image({ label, directory: 'src/assets/images', publicPath: '@assets/images/', validation: { isRequired: true } })
  : fields.image({ label, directory: 'src/assets/images', publicPath: '@assets/images/' });

const pageHeading = () => fields.object({
  eyebrow: requiredText('Eyebrow'),
  title: requiredText('Page title'),
  description: requiredText('Introductory text', { multiline: true }),
});

const shared = {
  ui: {
    brand: { name: 'DOERs content' },
  },
  singletons: {
    settings: singleton({
      label: 'Site settings',
      path: 'src/content/settings/index',
      schema: {
        name: requiredText('Short organization name'),
        fullName: requiredText('Full organization name'),
        description: requiredText('Default SEO description', { multiline: true }),
        email: requiredText('Email address'),
        phone: requiredText('Phone number'),
        phoneHref: requiredText('Phone link'),
        address: requiredText('Postal address', { multiline: true }),
        facebook: fields.url({ label: 'Facebook page', validation: { isRequired: true } }),
        facebookEvents: fields.url({ label: 'Facebook events page', validation: { isRequired: true } }),
        mapUrl: fields.url({ label: 'Google Maps link', validation: { isRequired: true } }),
        collaborationForm: fields.url({ label: 'Partner inquiry Google Form', validation: { isRequired: true } }),
        supportForm: fields.url({ label: 'Support Google Form', validation: { isRequired: true } }),
        membershipForm: fields.url({ label: 'Membership Google Form', description: 'Leave blank until a form is available.' }),
        socials: fields.array(fields.object({
          label: requiredText('Network name'),
          href: fields.url({ label: 'Profile URL', validation: { isRequired: true } }),
        }), { label: 'Social profiles', itemLabel: props => props.fields.label.value }),
      },
    }),
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage/index',
      schema: {
        hero: fields.object({
          eyebrow: requiredText('Eyebrow'),
          headingStart: requiredText('Heading, first line'),
          headingEnd: requiredText('Heading, second line'),
          description: requiredText('Description', { multiline: true }),
          primaryLabel: requiredText('Primary button label'),
          primaryHref: requiredText('Primary button link'),
          secondaryLabel: requiredText('Secondary button label'),
          secondaryHref: requiredText('Secondary button link'),
          note: requiredText('Helper text'),
          image: image('Hero image', true),
          imageAlt: requiredText('Hero image description'),
          caption: requiredText('Hero image caption'),
        }),
        introduction: fields.object({
          eyebrow: requiredText('Eyebrow'),
          title: requiredText('Section title'),
          description: requiredText('Organization description', { multiline: true }),
          chapterNote: requiredText('Chapter note', { multiline: true }),
          linkLabel: requiredText('Link label'),
          linkHref: requiredText('Link destination'),
        }),
        programs: fields.array(fields.object({
          title: requiredText('Title'),
          image: image('Image', true),
          description: requiredText('Description', { multiline: true }),
        }), { label: 'Program cards', itemLabel: props => props.fields.title.value }),
      },
    }),
    aboutPage: singleton({
      label: 'About page',
      path: 'src/content/about/index',
      schema: {
        heading: pageHeading(),
        organizationEyebrow: requiredText('Organization section eyebrow'),
        organizationTitle: requiredText('Organization section title'),
        organizationImage: image('Organization image', true),
        organizationImageAlt: requiredText('Organization image description'),
        principles: fields.array(fields.object({
          letter: requiredText('Letter'),
          text: requiredText('Description', { multiline: true }),
        }), { label: 'DOERS principles', itemLabel: props => `${props.fields.letter.value} — ${props.fields.text.value}` }),
        visionMissionEyebrow: requiredText('Vision and mission eyebrow'),
        visionMissionTitle: requiredText('Vision and mission title'),
        vision: requiredText('Vision', { multiline: true }),
        mission: requiredText('Mission', { multiline: true }),
        valuesEyebrow: requiredText('Core values eyebrow'),
        valuesTitle: requiredText('Core values title'),
        values: fields.array(fields.object({
          letter: requiredText('Letter'),
          text: requiredText('Value', { multiline: true }),
        }), { label: 'EARTH values', itemLabel: props => `${props.fields.letter.value} — ${props.fields.text.value}` }),
        foundingEyebrow: requiredText('Founding section eyebrow'),
        foundingTitle: requiredText('Founding section title'),
        foundingLead: requiredText('Founding introduction', { multiline: true }),
        founders: fields.array(fields.object({
          name: requiredText('Name'),
          role: requiredText('Role'),
        }), { label: 'Founders', itemLabel: props => props.fields.name.value }),
        chaptersLinkLabel: requiredText('Chapter link label'),
        recognitionEyebrow: requiredText('Recognition section eyebrow'),
        recognitionTitle: requiredText('Recognition section title'),
        recognitionIntro: requiredText('Recognition introduction', { multiline: true }),
      },
    }),
    volunteerPage: singleton({
      label: 'Volunteer page',
      path: 'src/content/volunteer/index',
      schema: {
        heading: pageHeading(),
        startTitle: requiredText('Starting section title'),
        startBody: fields.array(requiredText('Paragraph', { multiline: true }), { label: 'Starting section paragraphs' }),
        activityButtonLabel: requiredText('Activity button label'),
        activityButtonHref: requiredText('Activity button link'),
        preparationTitle: requiredText('Preparation section title'),
        preparationBody: requiredText('Preparation guidance', { multiline: true }),
        facebookButtonLabel: requiredText('Facebook button label'),
        inquiryLabel: requiredText('Inquiry link label'),
        membershipLabel: requiredText('Membership link label'),
        image: image('Volunteer image', true),
        imageAlt: requiredText('Volunteer image description'),
      },
    }),
    partnerPage: singleton({
      label: 'Partner page',
      path: 'src/content/partner-page/index',
      schema: {
        heading: pageHeading(),
        collaborationTitle: requiredText('Collaboration section title'),
        collaborationBody: requiredText('Collaboration description', { multiline: true }),
        formButtonLabel: requiredText('Google Form button label'),
        contactLead: requiredText('Contact prompt', { multiline: true }),
        image: image('Collaboration image', true),
        imageAlt: requiredText('Collaboration image description'),
        partnersEyebrow: requiredText('Partners section eyebrow'),
        partnersTitle: requiredText('Partners section title'),
        partnersIntro: requiredText('Partners section introduction', { multiline: true }),
      },
    }),
    activitiesPage: singleton({
      label: 'Activities page',
      path: 'src/content/activities-page/index',
      schema: {
        heading: pageHeading(),
        emptyTitle: requiredText('No activities title'),
        emptyBody: requiredText('No activities message', { multiline: true }),
        facebookButtonLabel: requiredText('Facebook button label'),
        volunteerButtonLabel: requiredText('Volunteer button label'),
      },
    }),
    contactPage: singleton({
      label: 'Contact page',
      path: 'src/content/contact/index',
      schema: {
        heading: pageHeading(),
        contactTitle: requiredText('Contact section title'),
        facebookButtonLabel: requiredText('Facebook button label'),
        inquiryButtonLabel: requiredText('Inquiry button label'),
        socialTitle: requiredText('Social links title'),
        locationTitle: requiredText('Location section title'),
        visitNote: requiredText('Visit note', { multiline: true }),
        mapButtonLabel: requiredText('Map button label'),
      },
    }),
    impactPage: singleton({
      label: 'Impact page',
      path: 'src/content/impact/index',
      schema: {
        heading: pageHeading(),
        programsEyebrow: fields.text({ label: 'Programs section eyebrow' }),
        programsTitle: requiredText('Programs section title'),
        recordTitle: requiredText('Impact record title'),
        noMetricsMessage: requiredText('Message before verified metrics are published', { multiline: true }),
        lastUpdated: fields.date({ label: 'Metrics last updated' }),
        metrics: fields.array(fields.object({
          label: requiredText('Metric label'),
          value: fields.integer({ label: 'Metric value', validation: { isRequired: true, min: 0 } }),
          period: requiredText('Reporting period'),
          source: requiredText('Source'),
        }), { label: 'Verified impact metrics', itemLabel: props => props.fields.label.value }),
      },
    }),
  },
  collections: {
    chapters: collection({
      label: 'Chapters', path: 'src/content/chapters/*', slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Chapter name' } }),
        province: requiredText('Province'),
        type: fields.select({ label: 'Chapter type', options: [{ label: 'Main chapter', value: 'main' }, { label: 'Chapter', value: 'chapter' }], defaultValue: 'chapter' }),
        description: fields.text({ label: 'Description', multiline: true }),
        facebookUrl: fields.url({ label: 'Facebook URL' }),
        contactUrl: fields.url({ label: 'Contact URL' }),
        image: image('Image'),
        active: fields.checkbox({ label: 'Visible on the site', defaultValue: true }),
      },
    }),
    activities: collection({
      label: 'Activities', path: 'src/content/activities/*', slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Activity title' } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        startTime: fields.text({ label: 'Start time (24-hour HH:mm)' }),
        endTime: fields.text({ label: 'End time (24-hour HH:mm)' }),
        chapter: fields.relationship({ label: 'Chapter', collection: 'chapters', validation: { isRequired: true } }),
        activityType: requiredText('Activity type'),
        locationName: requiredText('Location name'),
        locationDetails: fields.text({ label: 'Location details', multiline: true }),
        firstTimerFriendly: fields.checkbox({ label: 'First-timers welcome', defaultValue: true }),
        summary: fields.text({ label: 'Summary', multiline: true }),
        whatToBring: fields.array(requiredText('Item'), { label: 'What to bring' }),
        facebookUrl: fields.url({ label: 'Facebook announcement URL' }),
        featured: fields.checkbox({ label: 'Feature on the site', defaultValue: false }),
        cancelled: fields.checkbox({ label: 'Cancelled', defaultValue: false }),
        draft: fields.checkbox({ label: 'Save as draft', defaultValue: true }),
        partnerReward: fields.object({
          partnerId: fields.relationship({ label: 'Partner', collection: 'partners', validation: { isRequired: true } }),
          offer: requiredText('Offer'),
          notes: fields.text({ label: 'Notes', multiline: true }),
        }, { label: 'Partner reward' }),
      },
    }),
    partners: collection({
      label: 'Partners', path: 'src/content/partners/*', slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Partner name' } }),
        logo: fields.image({ label: 'Logo', directory: 'public/images/partners', publicPath: '/images/partners/' }),
        type: fields.select({ label: 'Relationship type', options: [
          { label: 'Historical', value: 'historical' }, { label: 'Sponsor', value: 'sponsor' }, { label: 'Community', value: 'community' }, { label: 'Volunteer reward partner', value: 'volunteer-reward-partner' },
        ], defaultValue: 'historical' }),
        description: fields.text({ label: 'Description', multiline: true }),
        websiteUrl: fields.url({ label: 'Website URL' }),
        active: fields.checkbox({ label: 'Active relationship', defaultValue: false }),
        reward: fields.object({
          offer: requiredText('Offer'),
          notes: fields.text({ label: 'Notes', multiline: true }),
          validUntil: fields.date({ label: 'Valid until', validation: { isRequired: true } }),
        }, { label: 'Volunteer reward' }),
      },
    }),
    recognition: collection({
      label: 'Recognition', path: 'src/content/timeline/*', slugField: 'title',
      schema: {
        date: requiredText('Date (YYYY, YYYY-MM, or YYYY-MM-DD)'),
        title: fields.slug({ name: { label: 'Title' } }),
        description: requiredText('Description', { multiline: true }),
        type: fields.text({ label: 'Type' }),
        images: fields.array(image('Image', true), { label: 'Images' }),
        facebookUrl: fields.url({ label: 'Facebook post URL' }),
        featured: fields.checkbox({ label: 'Featured recognition', defaultValue: false }),
      },
    }),
    volunteers: collection({
      label: 'Volunteers', path: 'src/content/volunteers/*', slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        chapter: fields.relationship({ label: 'Chapter', collection: 'chapters' }),
        photo: image('Photo'),
        role: fields.text({ label: 'Role' }),
        recognition: fields.text({ label: 'Recognition', multiline: true }),
        order: fields.integer({ label: 'Display order', validation: { isRequired: true, min: 1, max: 6 } }),
      },
    }),
  },
};

export default cloudProject
  ? config({ storage: { kind: 'cloud' }, cloud: { project: cloudProject }, ...shared })
  : config({ storage: { kind: 'local' }, ...shared });
