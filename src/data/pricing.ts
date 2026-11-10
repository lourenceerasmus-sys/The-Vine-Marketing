// The single source for every price on the site. Change a price here and it
// changes everywhere. Never show crossed-out prices.
// Every line below is copied from Business Basics v2.26 (Offers & Pricing).
// If a line is not in Business Basics, it does not belong here.

export type PriceGroup = 'free' | 'once-off' | 'monthly';

export interface PriceItem {
  id: string;
  name: string;
  group: PriceGroup;
  /** Amount in rand. null means quoted to scope. */
  amount: number | null;
  /** What the item is, stated plainly. */
  what: string;
  note?: string;
  /** Pages that may show this item; omitted means every price list. */
  onlyOn?: string[];
}

export const groups: { id: PriceGroup; label: string }[] = [
  { id: 'free', label: 'Free' },
  { id: 'once-off', label: 'Once-off' },
  { id: 'monthly', label: 'Monthly' },
];

export const foundingLine = 'Founding price available for our first five clients.';

export const prices: PriceItem[] = [
  { id: 'lead-response-test', name: 'Free 5-Point Lead Response Test', group: 'free', amount: 0, what: 'A check of what happens when someone enquires through your website form.' },
  { id: 'website-audit', name: 'Free Website Audit', group: 'free', amount: 0, what: 'A review of your website pages.', onlyOn: ['websites'] },
  { id: 'quick-fix', name: 'Quick Fix', group: 'once-off', amount: 399, what: 'One simple fix.' },
  { id: 'website-3', name: 'Three-page website', group: 'once-off', amount: 4499, what: 'A website with three pages.' },
  { id: 'website-5', name: 'Five-page website', group: 'once-off', amount: 6499, what: 'A website with five pages.' },
  { id: 'website-premium', name: 'Premium website', group: 'once-off', amount: null, what: 'Priced after we scope it.' },
  { id: 'care', name: 'Care', group: 'monthly', amount: 1249, what: 'Hosting, care and lead system.' },
  { id: 'care-plus', name: 'Care Plus', group: 'monthly', amount: 2999, what: 'Care, plus 12 single-image posts a month.' },
  { id: 'grow', name: 'Grow', group: 'monthly', amount: 5499, what: 'Care, plus CRM follow-up, 20 posts a month and a monthly report.' },
  { id: 'partner', name: 'Partner', group: 'monthly', amount: 8499, what: 'Grow, plus 4 Reels and Meta ads management.', note: 'Ad spend is separate and never marked up.' },
];

export function pricesFor(page: string) {
  return prices.filter((p) => !p.onlyOn || p.onlyOn.includes(page));
}

export function formatPrice(item: PriceItem) {
  if (item.amount === null) return 'Quoted to scope';
  if (item.amount === 0) return 'R0';
  const amount = `R${item.amount.toLocaleString('en-US')}`;
  return item.group === 'monthly' ? `${amount} a month` : amount;
}

/** Website inclusions and exclusions: Business Basics v2.26, "Websites (once-off)". */
export const websiteIncluded = [
  'You supply the copy; we edit and structure it',
  '2 revision rounds',
  '1 contact form connected to the lead system',
  'A call/WhatsApp button',
  'Basic on-page SEO',
  'A light/dark mode toggle',
  'Handover, plus 14 days of defect fixes after launch',
];
export const websiteExcluded = [
  'Extra pages',
  'E-commerce',
  'Bookings or payments',
  'Integrations',
  'Photography',
  'Full copywriting',
  'Logo',
  'The domain (registered in your name)',
];

/** Monthly packages: Business Basics v2.26, "Monthly packages". Hosting
 *  specification and support-response times are left out on purpose
 *  (hosting spec is TO CONFIRM; no uptime or service-level promises). */
export const packages = [
  {
    id: 'care',
    name: 'Care',
    price: 'R1,249 a month',
    lines: ['Hosting and care', 'Lead system (form, instant auto-reply, leads routed to you)', 'Monthly check of forms and automations', '1 hour of small website or automation changes'],
  },
  {
    id: 'care-plus',
    name: 'Care Plus',
    price: 'R2,999 a month',
    lines: ['Everything in Care', '12 single-image posts a month, each to Facebook and Instagram'],
  },
  {
    id: 'grow',
    name: 'Grow',
    price: 'R5,499 a month',
    lines: ['Everything in Care', 'CRM follow-up management (pipeline, up to 3 follow-up automations)', '20 posts a month: 14 single-image and 6 carousels', 'Monthly report and a 30-minute check-in', '2 hours of small changes'],
  },
  {
    id: 'partner',
    name: 'Partner',
    price: 'R8,499 a month',
    lines: ['Everything in Grow', '4 Reels a month, made from clips you supply', 'Meta ads management: 1 ad account, up to 2 campaigns, weekly check'],
    note: 'Ad spend is separate and never marked up.',
  },
];
