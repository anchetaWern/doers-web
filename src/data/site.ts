// Contact channels migrated from the original layout. No secrets belong here.
export const site = {
  name: 'DOERs',
  fullName: 'Dalumpinas Oeste Eco Rangers',
  description: 'Volunteer with DOERs to care for our coasts, environment and communities. Explore activities, chapters and ways to support our volunteers.',
  email: 'doerslaunion2023@gmail.com',
  phone: '+63 920 659 9877',
  phoneHref: 'tel:+639206599877',
  address: 'Brgy. Dalumpinas Oeste, San Fernando City, La Union, Philippines 2500',
  facebook: 'https://www.facebook.com/DOERsInAction',
  facebookEvents: 'https://www.facebook.com/DOERsInAction/events',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=16.6516505%2C120.3156267',
  // Header: Collaborate. Get Involved: Volunteer. Confirm before labelling membership-only.
  collaborationForm: 'https://docs.google.com/forms/d/e/1FAIpQLSeuu7zi5QiPs7Cytt5fEeO9xAHnpNsQMvcT-qlgfPl3-OK1cg/viewform',
  supportForm: 'https://forms.gle/jh4Es4TMAhEV2YB59',
  membershipForm: null as string | null,
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/DOERsInAction' },
    { label: 'Instagram', href: 'https://www.instagram.com/doerslaunion/' },
    { label: 'Threads', href: 'https://www.threads.com/@doerslaunion' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@doerslaunion' },
  ],
} as const;

export const navigation = [
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Upcoming Activities', href: '/activities' },
  { label: 'Our Impact', href: '/impact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Chapters', href: '/chapters' },
  { label: 'About', href: '/about' },
] as const;
