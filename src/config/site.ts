// Site-wide settings. Change the main call to action, contact routes and form
// endpoints here; every page reads from this file.

export const primaryCta = {
  label: 'Request My Free 5-Point Test',
  href: 'https://go.thevinemarketing.co.za/lead-response-test',
};

export const contact = {
  whatsappDisplay: '+27 82 533 0040',
  whatsappHref: 'https://wa.me/27825330040',
  email: 'info@thevinemarketing.co.za',
  location: 'Rustenburg',
};

export const social = [
  { label: 'Instagram', handle: '@thevinemarketingsa', href: 'https://www.instagram.com/thevinemarketingsa' },
  { label: 'TikTok', handle: '@the.vine.marketing', href: 'https://www.tiktok.com/@the.vine.marketing' },
  { label: 'Facebook', handle: 'thevinemarketingsa', href: 'https://www.facebook.com/thevinemarketingsa' },
];

// No calendar yet: "Request a call" opens WhatsApp with a ready-typed message.
// Swap for a calendar link here when one exists.
export const callRequestHref =
  'https://wa.me/27825330040?text=' +
  encodeURIComponent('Hi, I would like a call about my business. My name is ');

// VanX form "Vine | Website Enquiry v1" (inline embed). Never put keys here.
export const enquiryEmbed = {
  src: 'https://links.thevinemarketing.co.za/widget/form/okE6c9mo7b2LyHqPfakM',
  script: 'https://links.thevinemarketing.co.za/js/form_embed.js',
  id: 'inline-okE6c9mo7b2LyHqPfakM',
};

export const nav = [
  { label: 'Websites', href: '/websites' },
  { label: 'Follow-up & AI', href: '/follow-up-ai-automation' },
  { label: 'Marketing', href: '/marketing' },
  { label: 'Platforms', href: '/platforms' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
