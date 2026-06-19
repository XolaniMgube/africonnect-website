export const SERVICES = [
  {
    num: "01",
    name: "Build",
    blurb: "Websites and digital products that work as hard as you do.",
    tags: [
      "Business websites",
      "E-commerce stores",
      "Portfolio sites",
      "Web apps & systems",
    ],
  },
  {
    num: "02",
    name: "Brand",
    blurb: "A consistent look, everywhere people see you — on screen and in print.",
    tags: [
      "Logo & identity",
      "Social media design",
      "Flyers & banners",
      "T-shirts & branding",
    ],
  },
  {
    num: "03",
    name: "Run",
    blurb: "The behind-the-scenes work that keeps your business trading.",
    tags: [
      "Domains & hosting",
      "Business email",
      "Company reg & SARS",
      "IT support",
    ],
  },
];

export const PROCESS = [
  {
    n: "01 — BRIEF",
    title: "Brief & discover",
    body: "We understand the business and the goal, and agree what success looks like before anything starts.",
  },
  {
    n: "02 — DESIGN",
    title: "Research & design",
    body: "We plan and design properly, reviewed with you at every step — no surprises down the line.",
  },
  {
    n: "03 — DELIVER",
    title: "Execute & support",
    body: "We build, test and hand over — then stay on to support so the work keeps delivering.",
  },
];

export const WORK = [
  { name: "ToolsIT Digital", cat: "Website", label: "ToolsIT", bg: "from-[#3A3A3A] to-[#23262A]" },
  { name: "Zimazisa Construction", cat: "Website", label: "ZIMAZISA", bg: "from-[#5E7327] to-[#8FC93A]" },
  { name: "Zulu Security Force", cat: "Brand · Design", label: "ZULU", bg: "from-[#1A1C1F] to-[#34373B]" },
  { name: "Okuhle Khaya Projects", cat: "Brand · Web", label: "OKUHLE", bg: "from-[#8FC93A] to-[#A3D955]" },
  { name: "CubeNotes Saturday School", cat: "Print · Design", label: "CUBENOTES", bg: "from-[#2c3e2a] to-[#5E7327]" },
  { name: "Tablets SA", cat: "Website", label: "TABLETS", bg: "from-[#34373B] to-[#4a4e54]" },
];

/* -------------------------------------------------------------------------- */
/*  CLIENT PORTAL (demo data)                                                  */
/*  This powers a front-end demo of the portal. To make it real, replace this  */
/*  with data from your backend + auth (see note in components/Portal.tsx).     */
/* -------------------------------------------------------------------------- */

export type Milestone = {
  title: string;
  state: "done" | "active" | "todo";
  date: string;
};
export type PortalProject = {
  id: string;
  name: string;
  type: string;
  status: "In progress" | "In review" | "Complete";
  progress: number;
  due: string;
  milestones: Milestone[];
  files: { name: string; format: string; size: string }[];
  invoices: {
    no: string;
    desc: string;
    amount: string;
    status: "Paid" | "Due" | "Overdue";
    date: string;
  }[];
  messages: { from: "team" | "you"; name: string; text: string; time: string }[];
};

export const PORTAL = {
  client: { name: "Lerato Dube", company: "Dube Holdings (Pty) Ltd" },
  projects: [
    {
      id: "web-2026",
      name: "Company Website",
      type: "Web & Systems",
      status: "In progress",
      progress: 65,
      due: "2026-07-10",
      milestones: [
        { title: "Brief & discovery", state: "done", date: "12 May" },
        { title: "Design & approval", state: "done", date: "26 May" },
        { title: "Build & content", state: "active", date: "In progress" },
        { title: "Testing & review", state: "todo", date: "Due 4 Jul" },
        { title: "Launch & handover", state: "todo", date: "Due 10 Jul" },
      ],
      files: [
        { name: "Homepage design v2", format: "PDF", size: "2.4 MB" },
        { name: "Sitemap & content plan", format: "DOCX", size: "180 KB" },
        { name: "Brand assets pack", format: "ZIP", size: "14 MB" },
      ],
      invoices: [
        { no: "INV-1042", desc: "Deposit (50%)", amount: "R4 500", status: "Paid", date: "12 May" },
        { no: "INV-1058", desc: "Balance on launch", amount: "R4 500", status: "Due", date: "10 Jul" },
      ],
      messages: [
        { from: "team", name: "Thabo", text: "Hi Lerato — the homepage build is underway. Could you send through the team photos when you have a moment?", time: "Mon 09:14" },
        { from: "you", name: "You", text: "Great progress! I'll get the photos to you by Wednesday.", time: "Mon 11:02" },
        { from: "team", name: "Thabo", text: "Perfect, thank you. We're on track for the 10 July launch.", time: "Mon 11:20" },
      ],
    },
    {
      id: "brand-2026",
      name: "Brand Identity Kit",
      type: "Brand & Design",
      status: "Complete",
      progress: 100,
      due: "2026-04-18",
      milestones: [
        { title: "Brief & discovery", state: "done", date: "20 Mar" },
        { title: "Concepts presented", state: "done", date: "29 Mar" },
        { title: "Revisions", state: "done", date: "8 Apr" },
        { title: "Final delivery", state: "done", date: "18 Apr" },
      ],
      files: [
        { name: "Logo suite (all formats)", format: "ZIP", size: "9 MB" },
        { name: "Brand guidelines", format: "PDF", size: "3.1 MB" },
        { name: "Social media templates", format: "ZIP", size: "22 MB" },
      ],
      invoices: [
        { no: "INV-0997", desc: "Brand identity kit", amount: "R3 500", status: "Paid", date: "20 Mar" },
      ],
      messages: [
        { from: "team", name: "Naledi", text: "Your final brand kit is delivered and in your files. It's been a pleasure!", time: "18 Apr 14:30" },
        { from: "you", name: "You", text: "Absolutely love it. Thank you so much, team!", time: "18 Apr 15:05" },
      ],
    },
  ] as PortalProject[],
};

/* -------------------------------------------------------------------------- */
/*  RESOURCE HUB / BLOG                                                        */
/*  Placeholder articles & downloads. Bodies are plain blocks so you can edit  */
/*  copy without touching markup. Point `downloads[].href` at real files.      */
/* -------------------------------------------------------------------------- */

export type Block =
  | { t: "p"; text: string }
  | { t: "h"; text: string }
  | { t: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Web" | "Branding" | "Print" | "Consulting";
  readTime: string;
  date: string;
  grad: string;
  body: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: "what-a-website-costs-in-south-africa",
    title: "How much should a website actually cost in South Africa?",
    excerpt:
      "From R0 DIY builders to six-figure platforms — here's an honest breakdown of what you're really paying for.",
    category: "Web",
    readTime: "6 min read",
    date: "2026-05-28",
    grad: "from-[#34373B] to-[#23262A]",
    body: [
      { t: "p", text: "Ask three agencies what a website costs and you'll get three wildly different answers. That's because \"a website\" can mean a one-page brochure or a full booking platform. Here's how to think about it." },
      { t: "h", text: "What actually drives the price" },
      { t: "p", text: "Most of the cost isn't the pages — it's the thinking, the design and the functionality behind them. A simple informational site is quick. A store that takes payments, manages stock and emails customers is a different animal." },
      { t: "ul", items: ["Number of pages and how custom the design is", "Whether you're selling online (payments, delivery, stock)", "Custom features like bookings, logins or dashboards", "Who writes the words and supplies the photos"] },
      { t: "h", text: "Rough guide for SA businesses" },
      { t: "p", text: "A professional small-business website typically starts around R4 500. A basic online store starts around R9 000. Custom systems climb from there depending on scope. Anything advertised as 'R500 for everything' usually isn't yours to keep." },
      { t: "p", text: "The real question isn't 'what's the cheapest' — it's 'what will bring in enough business to pay for itself'. A good site does." },
    ],
  },
  {
    slug: "5-signs-your-business-needs-a-rebrand",
    title: "5 signs your business needs a rebrand",
    excerpt:
      "Your logo isn't just decoration — it's the first impression you make. Here's when it's time for a refresh.",
    category: "Branding",
    readTime: "4 min read",
    date: "2026-05-14",
    grad: "from-[#5E7327] to-[#8FC93A]",
    body: [
      { t: "p", text: "A brand isn't vanity — it's how customers decide whether to trust you before they've spoken to you. If any of these sound familiar, it might be time." },
      { t: "h", text: "1. You're embarrassed to hand out your card" },
      { t: "p", text: "If you hesitate before sharing your logo or website, your customers feel that hesitation too." },
      { t: "h", text: "2. You've outgrown your name or look" },
      { t: "p", text: "The business that started fixing phones now builds networks. If your brand still says 'phone repair', it's holding you back." },
      { t: "h", text: "3. You look different everywhere" },
      { t: "p", text: "Different logos on Facebook, your van and your invoices make you look like three companies. Consistency builds recognition." },
      { t: "ul", items: ["4. Competitors simply look more professional than you", "5. You're chasing bigger clients or tenders that expect polish"] },
      { t: "p", text: "A rebrand doesn't have to mean starting over — often it's tightening what you already have so it works everywhere." },
    ],
  },
  {
    slug: "registering-a-company-on-cipc",
    title: "Registering a company on CIPC: the plain-English guide",
    excerpt:
      "What a (Pty) Ltd actually gives you, what it costs, and the documents you need to get started.",
    category: "Consulting",
    readTime: "5 min read",
    date: "2026-04-30",
    grad: "from-[#3B9FE0] to-[#2c6fa0]",
    body: [
      { t: "p", text: "Registering a company feels intimidating, but the process is more straightforward than most people think. Here's the short version." },
      { t: "h", text: "Do you even need a (Pty) Ltd?" },
      { t: "p", text: "If you're trading under your own name and dealing with small clients, you may not. But the moment you want to open a business bank account, sign contracts, or supply bigger companies, a registered company makes you look — and operate — like a serious business." },
      { t: "h", text: "What you'll need" },
      { t: "ul", items: ["Certified ID copies of all directors", "Up to four proposed company names", "Your registered business address", "Director and shareholding details"] },
      { t: "h", text: "What it costs" },
      { t: "p", text: "CIPC's own fees are modest. Most of what people pay goes towards someone handling the paperwork correctly so it isn't rejected. Budget from around R850 to have it done properly and quickly." },
      { t: "p", text: "Once registered you'll get your registration number and certificate — then it's on to tax registration and a business bank account." },
    ],
  },
  {
    slug: "print-that-pays",
    title: "Print that pays: getting the most from flyers and banners",
    excerpt:
      "Print isn't dead — bad print is. A few simple rules to make every rand of print spend work harder.",
    category: "Print",
    readTime: "4 min read",
    date: "2026-04-12",
    grad: "from-[#2c3e2a] to-[#5E7327]",
    body: [
      { t: "p", text: "In a world of online ads, a well-placed flyer or banner still works — especially for local businesses. The trick is doing it well." },
      { t: "h", text: "One message, not ten" },
      { t: "p", text: "The biggest mistake is cramming everything onto one flyer. People glance for two seconds. Lead with one offer, one call to action, one way to reach you." },
      { t: "h", text: "Make the next step obvious" },
      { t: "ul", items: ["A clear offer ('20% off this week')", "One phone number or WhatsApp", "A reason to act now", "Your logo so people remember who"] },
      { t: "p", text: "And invest in the print quality — a faded, pixelated banner says more about your business than the words on it ever will." },
    ],
  },
  {
    slug: "business-email-vs-gmail",
    title: "Business email vs Gmail: why your address matters",
    excerpt:
      "you@yourbusiness.co.za quietly builds trust. yourbusiness@gmail.com quietly costs you deals.",
    category: "Web",
    readTime: "3 min read",
    date: "2026-03-22",
    grad: "from-[#1A1C1F] to-[#34373B]",
    body: [
      { t: "p", text: "It's a small thing that customers notice more than you'd expect. Your email address is part of your brand." },
      { t: "h", text: "What a professional address signals" },
      { t: "p", text: "When a quote arrives from info@yourbusiness.co.za, it reads as an established business. The same quote from a free Gmail address makes a buyer wonder if you'll still be around next year." },
      { t: "ul", items: ["You look established and permanent", "Your domain reinforces your brand in every email", "It's harder to impersonate you", "It usually comes with your website hosting anyway"] },
      { t: "p", text: "Setting it up takes an afternoon and costs less than a tank of petrol per year. There's very little reason not to." },
    ],
  },
  {
    slug: "business-plan-that-gets-funded",
    title: "Writing a business plan that actually gets funded",
    excerpt:
      "Funders skim. Here's how to write a plan that survives the first 60 seconds and gets to the money conversation.",
    category: "Consulting",
    readTime: "6 min read",
    date: "2026-03-05",
    grad: "from-[#34373B] to-[#1A1C1F]",
    body: [
      { t: "p", text: "Most business plans are read for about a minute before a decision is made to keep reading — or not. Write for that minute." },
      { t: "h", text: "Lead with the numbers that matter" },
      { t: "p", text: "How much do you need, what will you do with it, and how will it come back? If a funder can't find that in the first page, they move on." },
      { t: "h", text: "Be honest about the risks" },
      { t: "p", text: "Plans that pretend nothing can go wrong read as naive. Naming the risks — and how you'll handle them — builds confidence." },
      { t: "ul", items: ["A clear, realistic funding ask", "Believable financial projections", "Evidence there's a real market", "A team (even of one) that can deliver"] },
      { t: "p", text: "A good plan isn't a 60-page novel. It's a tight, honest case that makes saying yes easy." },
    ],
  },
];

export const DOWNLOADS = [
  {
    title: "Business plan template",
    desc: "A fill-in-the-blanks plan with the sections funders expect, plus a simple financials tab.",
    format: "DOCX",
    href: "#",
  },
  {
    title: "Logo brief checklist",
    desc: "Answer these questions before any designer starts and you'll get a logo you actually love.",
    format: "PDF",
    href: "#",
  },
  {
    title: "Brand guidelines starter",
    desc: "A one-page template to lock down your colours, fonts and logo rules.",
    format: "PDF",
    href: "#",
  },
  {
    title: "Website launch checklist",
    desc: "Everything to tick off before you put your new site live — so nothing embarrassing slips through.",
    format: "PDF",
    href: "#",
  },
];

/* -------------------------------------------------------------------------- */
/*  PORTFOLIO PAGE                                                             */
/*  `filter` drives the category chips; `cat` is the descriptive label shown   */
/*  on the card. Swap in real client names, years and outcomes as you go.      */
/* -------------------------------------------------------------------------- */

export type Project = {
  name: string;
  filter: "Web" | "Branding" | "Print" | "Consulting";
  cat: string;
  label: string;
  bg: string;
  year: string;
  blurb: string;
};

export const PORTFOLIO: Project[] = [
  {
    name: "ToolsIT Digital",
    filter: "Web",
    cat: "Website",
    label: "ToolsIT",
    bg: "from-[#3A3A3A] to-[#23262A]",
    year: "2024",
    blurb: "Corporate website and booking flow for an IT services provider.",
  },
  {
    name: "Zimazisa Construction",
    filter: "Web",
    cat: "Website · Brand",
    label: "ZIMAZISA",
    bg: "from-[#5E7327] to-[#8FC93A]",
    year: "2023",
    blurb: "Brand refresh and project-portfolio site for a growing contractor.",
  },
  {
    name: "Zulu Security Force",
    filter: "Branding",
    cat: "Brand identity",
    label: "ZULU",
    bg: "from-[#1A1C1F] to-[#34373B]",
    year: "2023",
    blurb: "Full identity — logo, uniforms and vehicle branding for a security firm.",
  },
  {
    name: "Okuhle Khaya Projects",
    filter: "Web",
    cat: "Brand · Web",
    label: "OKUHLE",
    bg: "from-[#8FC93A] to-[#A3D955]",
    year: "2024",
    blurb: "Identity and lead-generating website for a property development company.",
  },
  {
    name: "CubeNotes Saturday School",
    filter: "Print",
    cat: "Print · Design",
    label: "CUBENOTES",
    bg: "from-[#2c3e2a] to-[#5E7327]",
    year: "2022",
    blurb: "Workbooks, posters and enrolment material for a weekend tutoring school.",
  },
  {
    name: "Tablets SA",
    filter: "Web",
    cat: "E-commerce",
    label: "TABLETS",
    bg: "from-[#34373B] to-[#4a4e54]",
    year: "2024",
    blurb: "Online store with payments and delivery for an electronics retailer.",
  },
  {
    name: "Mokoena Catering Co.",
    filter: "Branding",
    cat: "Brand identity",
    label: "MOKOENA",
    bg: "from-[#3B9FE0] to-[#2c6fa0]",
    year: "2023",
    blurb: "Logo, menu design and packaging for a Vosloorus catering business.",
  },
  {
    name: "Vosloorus Spaza Network",
    filter: "Consulting",
    cat: "Registration · Profile",
    label: "VSN",
    bg: "from-[#23262A] to-[#34373B]",
    year: "2024",
    blurb: "Company registration and supplier profile to access wholesale accounts.",
  },
  {
    name: "Phakama Cleaning",
    filter: "Print",
    cat: "Vehicle branding",
    label: "PHAKAMA",
    bg: "from-[#5E7327] to-[#3B9FE0]",
    year: "2023",
    blurb: "Full bakkie wrap, uniforms and pull-up banners for a cleaning company.",
  },
  {
    name: "Thuto Bursary Fund",
    filter: "Web",
    cat: "Web app",
    label: "THUTO",
    bg: "from-[#2c3e2a] to-[#34373B]",
    year: "2024",
    blurb: "Custom application portal that manages bursary intakes and reviews.",
  },
  {
    name: "Khanyisa Events",
    filter: "Branding",
    cat: "Brand · Social",
    label: "KHANYISA",
    bg: "from-[#A3D955] to-[#5E7327]",
    year: "2022",
    blurb: "Identity and social media template system for an events company.",
  },
  {
    name: "Sizwe Trading Enterprise",
    filter: "Consulting",
    cat: "Business plan",
    label: "SIZWE",
    bg: "from-[#34373B] to-[#1A1C1F]",
    year: "2023",
    blurb: "Funding-ready business plan and financials for a wholesale trader.",
  },
];

export const CONTACT = {
  address: "20978 Mercury Street, Vosloorus, Boksburg, 1475",
  phone: "+27 68 251 5478",
  email: "info@africonnectsolutions.co.za",
  hours: "Weekdays: 7:30 – 18:00",
};

/* -------------------------------------------------------------------------- */
/*  ABOUT PAGE                                                                 */
/*  Placeholder copy — swap the real details (names, reg numbers, etc.) here.  */
/* -------------------------------------------------------------------------- */

export const ABOUT = {
  // short narrative shown in the "who we are" block
  story: [
    "AfriConnect started in 2018 in Vosloorus with a simple frustration: small businesses were being sent from supplier to supplier — one for the logo, another for the website, a third for the printing, and someone else entirely for the IT. Nobody owned the whole picture.",
    "So we built the team we wished existed. Designers, developers, print specialists and business advisors working under one roof, talking to each other, pulling in the same direction. One brief, one team, one point of contact.",
    "Seven years on we've helped more than a hundred businesses — from spaza shops to construction firms — look professional, get online and run smoother. We're still local, still hands-on, and still answering our own phone.",
  ],
  mission:
    "To give every South African business — big or small — affordable access to the design, technology and systems they need to compete, look professional and grow.",
  vision:
    "To be the most trusted one-stop business partner for SMEs across South Africa, connecting brand, technology and people under one roof.",
};

export const STATS = [
  { n: "7 yrs", l: "In business" }, // duration — known (since 2018)
  { n: "20+", l: "Specialist services" }, // offering — countable from your service list
  { n: "4", l: "Divisions, one roof" }, // breadth — known
  { n: "100%", l: "Black-owned · Level 1" }, // ownership — confirm your real B-BBEE level
];

export const VALUES = [
  {
    title: "One team, one roof",
    body: "Brand, web, print and IT in the same building — no finger-pointing, no gaps between suppliers.",
  },
  {
    title: "Honest pricing, no jargon",
    body: "We quote in plain language and stick to it. You always know what you're paying for and why.",
  },
  {
    title: "Partnership over projects",
    body: "We're not here for a once-off. We stay on after launch so the work keeps delivering for you.",
  },
  {
    title: "Local and proud",
    body: "Born in Vosloorus, serving Gauteng. We understand the businesses we work with because we are one.",
  },
  {
    title: "Quality, every time",
    body: "From a R200 flyer to a custom system, the same standard applies. If it carries your name, it has to be right.",
  },
  {
    title: "Built to last",
    body: "We build things properly so they hold up — sites that scale, brands that stay consistent, systems that don't break.",
  },
];

// Initials-based avatars with brand gradients — replace names/roles with the
// real team. Add a `photo` field later and swap the gradient block for an image.
export const TEAM = [
  {
    name: "Mitch",
    role: "Operations Director",
    bio: "Keeps projects, people and timelines aligned so the work ships on schedule.",
    grad: "from-[#5E7327] to-[#8FC93A]",
  },
  {
    name: "Sibusiso",
    role: "Creative Director",
    bio: "Leads the look and feel of every brand — from logo and identity to layout.",
    grad: "from-[#1A1C1F] to-[#34373B]",
  },
  {
    name: "Xolane",
    role: "Lead Developer",
    bio: "Builds the websites, stores, dashboards and custom systems clients run on.",
    grad: "from-[#34373B] to-[#4a4e54]",
  },
  {
    name: "Lindo",
    role: "Office Manager",
    bio: "Keeps the office and day-to-day operations running smoothly behind the scenes.",
    grad: "from-[#3B9FE0] to-[#2c6fa0]",
  },
  {
    name: "Inathi",
    role: "Administrator",
    bio: "Handles admin, scheduling and client paperwork so nothing slips through.",
    grad: "from-[#8FC93A] to-[#A3D955]",
  },
];

// Company profile — formal facts for the "corporate" panel. Swap the
// placeholder values (reg number, B-BBEE level, director) for the real ones.
export const COMPANY_PROFILE = [
  { k: "Registered name", v: "AfriConnect Solutions (Pty) Ltd" },
  { k: "Trading as", v: "AfriConnect" },
  { k: "Founded", v: "2018" },
  { k: "Registration no.", v: "2018/000000/07" },
  { k: "Director", v: "Sipho Khumalo" },
  { k: "Head office", v: "Vosloorus, Boksburg, Gauteng" },
  { k: "B-BBEE status", v: "Level 1 — 100% Black-owned" },
  { k: "Industries served", v: "Retail, construction, security, education, professional services" },
];

/* -------------------------------------------------------------------------- */
/*  SERVICES PAGE                                                              */
/*  Everything we offer, grouped into four divisions. Prices are indicative    */
/*  placeholders in ZAR — adjust `price` values to your real rate card.        */
/* -------------------------------------------------------------------------- */

export type ServiceItem = { name: string; desc: string; price: string };
export type ServiceGroup = {
  id: string;
  num: string;
  name: string;
  tagline: string;
  accent: "lime" | "brand";
  items: ServiceItem[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "brand",
    num: "01",
    name: "Brand & Design",
    tagline:
      "A consistent, professional look — everywhere people see you, on screen and in print.",
    accent: "lime",
    items: [
      {
        name: "Logo & brand identity",
        desc: "A distinctive logo built around your business, with the files you need for every use.",
        price: "from R1 500",
      },
      {
        name: "Brand identity kit",
        desc: "Logo, colour palette, fonts and usage guide so everything stays consistent.",
        price: "from R3 500",
      },
      {
        name: "Business cards",
        desc: "Designed and print-ready — single or double-sided, premium finishes available.",
        price: "from R350",
      },
      {
        name: "Flyers & posters",
        desc: "Eye-catching promo material for campaigns, events and specials.",
        price: "from R450",
      },
      {
        name: "Brochures & company profiles",
        desc: "Multi-page documents that present your business and offer professionally.",
        price: "from R1 200",
      },
      {
        name: "Social media design",
        desc: "On-brand templates and monthly post packs that keep your feed sharp.",
        price: "from R1 800/mo",
      },
    ],
  },
  {
    id: "build",
    num: "02",
    name: "Web & Systems",
    tagline:
      "Websites, stores and custom systems that work as hard as you do.",
    accent: "brand",
    items: [
      {
        name: "Business website",
        desc: "A fast, mobile-friendly site that tells your story and brings in enquiries.",
        price: "from R4 500",
      },
      {
        name: "E-commerce store",
        desc: "Sell online with product management, payments and delivery built in.",
        price: "from R9 000",
      },
      {
        name: "Custom dashboards & systems",
        desc: "Internal tools, booking systems and dashboards tailored to how you work.",
        price: "from R15 000",
      },
      {
        name: "Web apps",
        desc: "Bespoke web applications for more complex, business-critical workflows.",
        price: "from R25 000",
      },
      {
        name: "Hosting & domains",
        desc: "Reliable hosting, your own .co.za domain and SSL — all set up for you.",
        price: "from R1 200/yr",
      },
      {
        name: "Business email",
        desc: "Professional you@yourbusiness.co.za inboxes that build trust.",
        price: "from R600/yr",
      },
    ],
  },
  {
    id: "print",
    num: "03",
    name: "Print & Signage",
    tagline:
      "From a single t-shirt to a fully wrapped bakkie — production handled end to end.",
    accent: "lime",
    items: [
      {
        name: "T-shirt & apparel printing",
        desc: "Branded staff uniforms, event tees and workwear in any quantity.",
        price: "from R120 each",
      },
      {
        name: "Car branding & wraps",
        desc: "Turn your vehicle into moving advertising — partial decals to full wraps.",
        price: "from R2 500",
      },
      {
        name: "Banners & pull-ups",
        desc: "Pull-up banners, PVC banners and backdrops for events and storefronts.",
        price: "from R650",
      },
      {
        name: "Mugs & promo gifts",
        desc: "Branded mugs, pens, caps and giveaways that keep you top of mind.",
        price: "from R85 each",
      },
      {
        name: "Signage & boards",
        desc: "Shopfront signs, directional boards and corporate signage.",
        price: "from R1 500",
      },
      {
        name: "Large-format printing",
        desc: "Posters, billboards and exhibition graphics printed at scale.",
        price: "from R250/m²",
      },
    ],
  },
  {
    id: "consult",
    num: "04",
    name: "Business Consulting",
    tagline:
      "The paperwork and planning that gets a business registered, compliant and fundable.",
    accent: "brand",
    items: [
      {
        name: "Company registration (CIPC)",
        desc: "Register your (Pty) Ltd, including name reservation and share certificates.",
        price: "from R850",
      },
      {
        name: "Business plans",
        desc: "Investor- and funding-ready business plans with financials and projections.",
        price: "from R2 500",
      },
      {
        name: "Tax & SARS registration",
        desc: "Income tax, VAT and PAYE registration so you trade compliantly.",
        price: "from R750",
      },
      {
        name: "Profiles & proposals",
        desc: "Polished company profiles and tender proposals that win work.",
        price: "from R1 200",
      },
      {
        name: "B-BBEE affidavits",
        desc: "Sworn affidavits for EME/QSE so you can supply bigger clients.",
        price: "from R350",
      },
      {
        name: "Compliance & advisory",
        desc: "Ongoing guidance on registrations, renewals and getting tender-ready.",
        price: "on request",
      },
    ],
  },
];

// Optional starter bundles shown below the catalogue. Prices are placeholders.
export const BUNDLES = [
  {
    name: "Startup Launch",
    price: "R4 999",
    blurb: "Everything you need to open your doors and look the part from day one.",
    includes: [
      "Logo & basic brand kit",
      "100 business cards",
      "One-page website",
      "Business email setup",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "R12 999",
    blurb: "Step up your presence with a full brand and a site built to convert.",
    includes: [
      "Full brand identity kit",
      "5-page business website",
      "Social media template pack",
      "Hosting & domain (1 year)",
    ],
    featured: true,
  },
  {
    name: "Online Store",
    price: "R18 999",
    blurb: "Start selling online with everything set up and ready to take orders.",
    includes: [
      "Brand identity kit",
      "E-commerce store (up to 50 products)",
      "Payment & delivery setup",
      "Hosting & domain (1 year)",
    ],
    featured: false,
  },
];
