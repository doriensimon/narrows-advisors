// There is no Contact page — every "Contact"/"Support"/"Schedule a call"
// entry point links straight out to the booking calendar in a new tab.
export const BOOKING_URL = 'https://calendar.app.google/3ZoPGad9VZhgNCCh8';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Practices', href: '/practices/' },
  { label: 'Vendors', href: '/vendors/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: BOOKING_URL },
] as const;

export interface RailItem {
  id: string;
  label: string;
  icon: string;
  href?: string;
  disabled?: boolean;
}

export const RAIL_ITEMS: RailItem[] = [
  { id: 'home', label: 'Home', icon: 'lucide:layout-grid', href: '/' },
  { id: 'practices', label: 'Practices', icon: 'lucide:stethoscope', href: '/practices/' },
  { id: 'vendors', label: 'Vendors', icon: 'lucide:cpu', href: '/vendors/' },
  { id: 'claims', label: 'Claims', icon: 'lucide:file-text', disabled: true },
  { id: 'denials', label: 'Denials', icon: 'lucide:alert-triangle', disabled: true },
  { id: 'reports', label: 'Reports', icon: 'lucide:bar-chart-3', disabled: true },
  { id: 'about', label: 'Profile', icon: 'lucide:user', href: '/about/' },
  { id: 'support', label: 'Support', icon: 'lucide:life-buoy', href: BOOKING_URL },
];

export const MOBILE_NAV_ROWS = [
  { id: 'home', label: 'Home', icon: 'lucide:layout-grid', meta: 'Overview & key metrics', href: '/' },
  { id: 'practices', label: 'For Practices', icon: 'lucide:stethoscope', meta: 'Billing & operations audits', href: '/practices/' },
  { id: 'vendors', label: 'For AI Companies', icon: 'lucide:cpu', meta: 'Selling into revenue cycle', href: '/vendors/' },
  { id: 'about', label: 'About', icon: 'lucide:user', meta: 'Background & experience', href: '/about/' },
  { id: 'contact', label: 'Contact', icon: 'lucide:mail', meta: 'Book time directly', href: BOOKING_URL },
] as const;

export const TAGLINE = 'Fractional RCM AI strategy for practices and AI vendors selling into revenue cycle.';
export const CONTACT_EMAIL = 'contact@narrowsadvisors.com';
export const LOCATION = 'Seattle, WA';

// ---------------------------------------------------------------- Home

export const HOME_HERO = {
  eyebrow: 'Fractional AI RCM Strategy',
  headline: "You want AI for your revenue cycle. I make sure you get the labor savings you're promised.",
  body: "I find where the time and money are actually going, get your workflows into a shape where automation can take real volume, and help you pick the vendor that can deliver the savings we calculated.",
};

export const HOME_STAGE_ITEMS = [
  'Human Time Savings',
  'Automation Expectation',
  'Process Re-Engineering',
  'Vendor Procurement',
] as const;

export const HOME_STAGE_COPY: Record<(typeof HOME_STAGE_ITEMS)[number], string> = {
  'Human Time Savings': "I get granular on exactly where your team's hours go today, task by task, so your labor-savings targets are grounded in real workflow data.",
  'Automation Expectation': "An honest, experience based read on what's automatable in your workflow today, what still needs a human, and how much of the work automation can realistically absorb.",
  'Process Re-Engineering': 'Messy workflows produce messy automation. I re-engineer yours to be AI-ready so your vendor can automate more of it, more accurately, kick less cases back to your team, and reach go-live sooner.',
  'Vendor Procurement': "I search, vet, and select the automation vendor built to hit your specific goals. Having sat on the vendor side, I know how the technology works, their AI deployment patterns, and what's an oversell.",
};

export const HOME_VITALS = [
  { value: '$21M+', label: 'RCM AI deals scoped, sold & delivered' },
  { value: '15+', label: 'Implementations delivered' },
  { value: '50+', label: 'Vendor demos delivered' },
];

export const PRACTICE_AREAS = [
  { label: 'Patient Intake', detail: 'Registration accuracy and insurance capture, where downstream errors usually start.' },
  { label: 'VOB/COB & Discovery', detail: 'Eligibility and coordination of benefits, checked before the visit, not after the denial.' },
  { label: 'Prior Auth', detail: 'Which services require it, how it is tracked, and where approvals get lost.' },
  { label: 'Coding & Notes Review', detail: 'Documentation-to-code alignment and where undercoding or overcoding creeps in.' },
  { label: 'Claim Scrub & Submission', detail: 'Rule sets and payer edits, and what is kicking claims back before they reach the payer.' },
  { label: 'Claim Statusing', detail: 'How a claim gets tracked after submission and how fast a stall gets caught.' },
  { label: 'Payment Posting', detail: 'Auto-posting accuracy and where manual review is still actually required.' },
  { label: 'Denials Management', detail: 'Root-cause tracking, appeal turnaround, and whether denials get worked before they age out.' },
];

export const IN_NETWORK_INTRO = 'The clearinghouses, EHRs, and billing platforms your team uses every day.';
export const IN_NETWORK_OUTRO = 'and many more across the RCM stack';

// height values are the exact per-logo heights (px) from the design source —
// logos vary widely in native aspect ratio, so no uniform box.
export const IN_NETWORK_LOGOS = [
  { file: 'athenahealth.png', alt: 'athenahealth', height: 26 },
  { file: 'availity-icon.png', alt: 'Availity', height: 28, wordmark: 'Availity' },
  { file: 'candid-health-2.png', alt: 'Candid Health', height: 22 },
  { file: 'eclinicalworks.png', alt: 'eClinicalWorks', height: 20 },
  { file: 'epic.png', alt: 'Epic', height: 26 },
  { file: 'experian-health.png', alt: 'Experian Health', height: 26 },
  { file: 'imagine-software-icon.png', alt: 'Imagine', height: 44, wordmark: 'Imagine' },
  { file: 'modmed.png', alt: 'ModMed', height: 30 },
  { file: 'nextgen.png', alt: 'NextGen', height: 26 },
  { file: 'officeally.png', alt: 'Office Ally', height: 22 },
  { file: 'phreesia-icon.png', alt: 'Phreesia', height: 28, wordmark: 'Phreesia' },
  { file: 'pverify.png', alt: 'pVerify', height: 22 },
  { file: 'raintree.png', alt: 'Raintree', height: 24 },
  { file: 'stedi-icon.png', alt: 'Stedi', height: 28, wordmark: 'Stedi' },
  { file: 'waystar.png', alt: 'Waystar', height: 18 },
  { file: 'webpt.png', alt: 'WebPT', height: 22 },
  { file: 'zelis-new.png', alt: 'Zelis', height: 24 },
  { file: 'zoll-icon.png', alt: 'ZOLL', height: 28, wordmark: 'ZOLL' },
];

// ---------------------------------------------------------------- Practices / Vendors shared shape

export interface IssueItem {
  text: string;
  detail?: string;
}
export interface IssueGroup {
  label: string;
  count: number;
  items: IssueItem[];
}
export interface FixItem {
  problem: string;
  fix: string;
}

export const PRACTICE_PERSONA = {
  firstName: 'Jane',
  lastName: 'Doe',
  initials: 'JD',
  recordId: '54YO W',
  role: 'CFO',
  recordNumber: 'REC# 2018-0142',
  pcp: 'Meridian Community Health Partners',
  next: 'Board Update · Q3',
  provider: 'Dorien Simon',
  primary: 'Narrows Advisors',
};

export const PRACTICE_ISSUE_GROUPS: IssueGroup[] = [
  {
    label: 'Chronic',
    count: 4,
    items: [
      { text: 'Vendor Fatigue', detail: "Every vendor pitch sounds the same and promises the same results — it's hard to know who to trust or what will actually work for your practice." },
      { text: 'Unprepared Systems and Staff', detail: "You want AI, but aren't sure how to get your processes and people into a state that lets automation take on real volume and deliver the revenue return it's promising, instead of getting kicked back to your team." },
      { text: 'No Clear Starting Point', detail: "You know practices are using AI in revenue cycle to scale faster, improve collections, process more claims without more hires, and cut labor costs — but you don't know where to start, or what would actually move the needle for your practice." },
      { text: 'Unclear Savings Math', detail: "Vendor cost estimates are a black box, and vendors are incentivized to close the deal fast, not give you an accurate number for your stack, payer mix, staffing, and workflows. Without understanding the tech, you can't judge how much automation potential your billing team actually has." },
    ],
  },
  {
    label: 'Care Episodes',
    count: 2,
    items: [
      { text: 'No ROI Attribution', detail: "You're running AI in your RCM but can't attribute the ROI to it. Scope often shrinks at deployment, and the vendor's dashboard tells one story while your accounting tells another. The labor savings aren't there because there was no AI strategy going into the deal." },
      { text: 'Failed AI Deployment', detail: "You've tried AI or a vendor before, but it didn't live up to what was promised at signing — and you ultimately tore it out, eroding internal trust and leaving you skeptical of AI's value in RCM." },
    ],
  },
];

export const PRACTICE_FIX: FixItem[] = [
  { problem: 'Audit', fix: 'I audit your denials, staffing, and workflows to identify the biggest upside opportunities for RCM.' },
  { problem: 'Process Re-engineering', fix: 'I help you get your processes and staff AI-ready so you can maximize your labor savings and speed up AI deployment.' },
  { problem: 'Vendor Procurement', fix: "I'll help you select the right vendor to meet your automation goals." },
  { problem: 'Monitoring & Support', fix: "I'll support you and your team through the integration effort, write SOPs, enable your team to leverage the software, and make sure you're seeing the transformation reflect in your AR and human time savings." },
];

export const VENDOR_PERSONA = {
  firstName: 'John',
  lastName: 'Doe',
  initials: 'JD',
  recordId: '35YO M',
  role: 'CEO',
  recordNumber: 'REC# 2022-0089',
  pcp: 'Stealth',
  next: 'Enterprise Prospect Demo',
  provider: 'Dorien Simon',
  primary: 'Narrows Advisors',
};

export const VENDOR_ISSUE_GROUPS: IssueGroup[] = [
  {
    label: 'Chronic',
    count: 3,
    items: [
      { text: 'Sales support is bolted on', detail: 'An engineer pulled off delivery for a call, or a founder fielding architecture questions between meetings, instead of one dedicated seat with full context on your product and pipeline.' },
      { text: "Bad-fit deals aren't disqualified early", detail: 'Technical feasibility and integration lift never get assessed before a contract goes out, so bad-fit deals make it through to delivery.' },
      { text: 'No ROI story to justify the spend', detail: "No denial-reduction or cost-savings narrative to help the buyer get budget and procurement approval, so the deal stalls on justification, not fit." },
    ],
  },
  {
    label: 'Care Episodes',
    count: 1,
    items: [
      { text: 'Delivery hand-off drops context', detail: "What's been promised, the champions, the deadlines, the risks — none of it makes it to the delivery team in writing." },
    ],
  },
];

export const VENDOR_FIX: FixItem[] = [
  { problem: 'Prospect Call Support', fix: 'I sit on technical calls before any contract goes out: assessing integration feasibility, building the ROI and denial-reduction narrative, and handing delivery a lightweight design doc to build from.' },
  { problem: 'Pricing Support', fix: 'I model delivery timelines, costs, and custom integration pricing so the quote holds up.' },
  { problem: 'Delivery / Sales Hand-Off', fix: "I document what's been promised, the champions, the deadlines, and the risks, so delivery isn't reconstructing the deal from memory." },
];

// ---------------------------------------------------------------- About

export const ABOUT_PERSONA = {
  firstName: 'Dorien',
  lastName: 'Simon',
  initials: 'DS',
  recordId: 'Principal',
  role: 'Founder',
  recordNumber: 'REC# 2026-0001',
  pcp: 'Narrows Advisors',
  next: 'Your Group',
  provider: 'Stanford University',
  primary: 'Self-Pay',
  photo: '/images/dorien-simon.jpg',
};

export const ABOUT_BACKGROUND = {
  headline: "I built the AI you're being sold. Now I work for you.",
  subhead: "I've spent my career helping teams use software to work faster.",
  paragraphs: [
    "I studied computer science at Stanford, then moved home to Seattle to work at Palantir, helping major airline and utility companies turn scattered operator knowledge into systems anyone could run. That same instinct carried me into revenue cycle, designing and deploying AI agents that automate entire billing workflows and departments. I've worked with enough different billing departments and EHR systems to know RCM workflows cold and know exactly where AI hits its limits with certain systems, workflows, and payers.",
    "Now I sit on your side of the table. I embed inside your practice to get your workflows AI-ready before deployment, so the labor savings are real, not a vendor's projection.",
  ],
};

// No date column — by design decision, this timeline ships without dates.
export const ABOUT_TIMELINE = [
  { title: 'Palantir Technologies', detail: 'Forward Deployed Engineer' },
  { title: 'Thoughtful AI', detail: 'Technical Product Manager' },
  { title: 'Smarter Technologies', detail: 'Senior Sales Engineer' },
  { title: 'Narrows Advisors', detail: 'Fractional RCM AI Strategy' },
];

