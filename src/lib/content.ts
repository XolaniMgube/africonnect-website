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
    n: "01 — DISCOVER",
    title: "Understand the problem",
    body: "We learn how the business works, where it is getting stuck and what a successful result needs to change.",
  },
  {
    n: "02 — DESIGN",
    title: "Plan the right solution",
    body: "We map the experience, technical approach and delivery plan before committing time to the full build.",
  },
  {
    n: "03 — BUILD",
    title: "Build, test & launch",
    body: "We deliver in clear stages, test across real devices and launch only when the important journeys work properly.",
  },
  {
    n: "04 — SUPPORT",
    title: "Support & improve",
    body: "After launch, we stay available for maintenance, support and the improvements that come with real-world use.",
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
      type: "Websites & E-commerce",
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
  author?: string;
  authorTitle?: string;
  image?: string;
  imageAlt?: string;
  readTime: string;
  date: string;
  grad: string;
  body: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: "artificial-intelligence-in-printing",
    title: "Artificial intelligence is changing print — not replacing it",
    excerpt:
      "AI is making print workflows faster, more personal and easier to manage. The real opportunity is knowing where automation ends and human judgement begins.",
    category: "Print",
    author: "Mitchel Shabangu",
    authorTitle: "Director at AfriConnect",
    image: "/articles/ai-and-print.png",
    imageAlt:
      "Mitchel Shabangu working at a laptop with AI and print-production graphics",
    readTime: "6 min read",
    date: "2026-08-31",
    grad: "from-[#D97B3F] via-[#A3D955] to-[#3B9FE0]",
    body: [
      {
        t: "p",
        text: "Artificial intelligence is often discussed as if it belongs only to software companies. In reality, it is already finding a practical place in one of the world's oldest communication industries: print. From the first concept to the final quality check, AI can remove repetitive work and give print teams more time to focus on craft, accuracy and the customer.",
      },
      { t: "h", text: "Where AI already fits into print" },
      {
        t: "p",
        text: "The useful applications are not about asking a machine to run the whole job. They are about improving the steps around production: developing ideas, preparing artwork, spotting common file problems, creating campaign variations and organising information before it reaches the press.",
      },
      {
        t: "ul",
        items: [
          "Faster concept development and campaign variations",
          "Image cleanup, resizing and artwork preparation",
          "Smarter preflight checks before a file reaches production",
          "More relevant variable-data and personalised print campaigns",
        ],
      },
      { t: "h", text: "The decisions that still need people" },
      {
        t: "p",
        text: "A technically correct file is not automatically good communication. Brand context, language, colour, paper choice, finishing and cultural relevance still depend on experienced people asking the right questions. AI can accelerate a decision, but it cannot take responsibility for what that decision says about a business.",
      },
      { t: "h", text: "A practical opportunity for South African printers" },
      {
        t: "p",
        text: "For local print businesses, the strongest opportunity is operational. Used carefully, AI can help smaller teams respond to briefs faster, reduce avoidable corrections and offer customers more tailored work without adding unnecessary complexity. The goal should not be to follow every new tool. It should be to build a better workflow.",
      },
      {
        t: "ul",
        items: [
          "Start with one repetitive task that regularly slows the team down",
          "Keep a human approval step wherever quality or brand reputation is involved",
          "Measure whether the tool saves time, reduces waste or improves the customer experience",
        ],
      },
      {
        t: "p",
        text: "The future of print is not artificial intelligence on one side and skilled people on the other. It is a more connected process in which technology handles the repetition and people remain responsible for the thinking, the craft and the final result.",
      },
    ],
  },
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
  slug: string;
  filter: "Web" | "Branding" | "Print" | "Consulting";
  cat: string;
  label: string;
  bg: string;
  image?: string;
  imageAlt?: string;
  year: string;
  blurb: string;
  // Live site — only set when the project is a website we can link out to.
  // Swap the placeholder URLs below for the real client domains as they go live.
  url?: string;
  // Longer story + deliverables shown on the /portfolio/[slug] detail page.
  summary: string;
  scope: string[];
};

const PORTFOLIO_ARCHIVE: Project[] = [
  {
    name: "Sekgabe Turnkey",
    slug: "sekgabe-turnkey",
    filter: "Branding",
    cat: "Logo Design",
    label: "SEKGABE",
    bg: "from-[#20231f] to-[#101210]",
    image: "/portfolio/sekgabe-turnkey.png",
    imageAlt: "Sekgabe Turnkey logo presented on a cream interior wall",
    year: "2026",
    blurb:
      "Identity design and brand presentation for a turnkey solutions business.",
    summary:
      "Sekgabe Turnkey needed an identity that could communicate structure, reliability and a premium standard of delivery. We developed a distinctive logo system and presentation direction that gives the business a confident, professional presence across customer-facing material.",
    scope: [
      "Logo identity design",
      "Visual direction",
      "Brand presentation mock-ups",
      "Production-ready brand assets",
    ],
  },
  {
    name: "Mokaleng",
    slug: "mokaleng",
    filter: "Web",
    cat: "Business Website",
    label: "MOKALENG",
    bg: "from-[#EFF1E8] to-[#DCE2CB]",
    image: "/portfolio/mokaleng-website.png",
    imageAlt:
      "Mokaleng engineering website displayed responsively on a laptop and mobile phone",
    year: "2026",
    blurb:
      "Responsive business website designed to communicate services and build trust online.",
    summary:
      "Mokaleng needed a clear digital presence that could explain its services and give prospective clients confidence in the business. We structured and designed a responsive website that is focused, professional and easy to navigate on every screen.",
    scope: [
      "Website strategy and structure",
      "Responsive interface design",
      "Service-page development",
      "Enquiry journey and contact experience",
    ],
  },
  {
    name: "Slogan Studio",
    slug: "slogan-studio",
    filter: "Print",
    cat: "Banner print",
    label: "SLOGAN STUDIO",
    bg: "from-[#232623] to-[#0E100F]",
    image: "/portfolio/slogan-studio-banner.png",
    imageAlt:
      "Slogan Studio promotional pull-up banner displayed in a print workshop",
    year: "2026",
    blurb:
      "Large-format branded banner design created for strong visual presence and promotion.",
    summary:
      "Slogan Studio needed a large-format banner that would remain clear, recognisable and impactful at a distance. We translated the brand into a focused outdoor composition and prepared the artwork for dependable large-format production.",
    scope: [
      "Large-format banner design",
      "Brand-led campaign layout",
      "Print-ready artwork preparation",
      "Large-format production support",
    ],
  },
  {
    name: "Lavido Auto Parts",
    slug: "lavido-auto-parts",
    filter: "Web",
    cat: "eCommerce Store",
    label: "Lavido",
    bg: "from-[#3A3A3A] to-[#23262A]",
    year: "2026",
    blurb: "Online store with payments and delivery for a car-parts retailer.",
    url: "https://lavidoautoparts.co.za",
    summary:
      "Lavido Auto ",
    scope: [
      "Corporate website design and build",
      "Online service-booking flow",
      "Mobile-first responsive layout",
      "Basic SEO and analytics setup",
    ],
  },
  {
    name: "Zimazisa Construction",
    slug: "zimazisa-construction",
    filter: "Web",
    cat: "Website · Brand",
    label: "ZIMAZISA",
    bg: "from-[#5E7327] to-[#8FC93A]",
    year: "2023",
    blurb: "Brand refresh and project-portfolio site for a growing contractor.",
    url: "https://example.com",
    summary:
      "As Zimazisa grew from small jobs to larger tenders, their brand and website no longer matched the quality of their work. We refreshed the identity and built a project-portfolio website that showcases completed builds, helping them win bigger contracts with confidence.",
    scope: [
      "Brand identity refresh",
      "Project-portfolio website",
      "Photography direction for completed builds",
      "Tender-ready company collateral",
    ],
  },
  {
    name: "Zulu Security Force",
    slug: "zulu-security-force",
    filter: "Branding",
    cat: "Brand identity",
    label: "ZULU",
    bg: "from-[#1A1C1F] to-[#34373B]",
    year: "2023",
    blurb: "Full identity — logo, uniforms and vehicle branding for a security firm.",
    summary:
      "Zulu Security Force wanted a presence that signalled authority and trust on every site they guard. We developed a complete visual identity and rolled it out across uniforms, vehicles and signage so the brand looks consistent and professional wherever it shows up.",
    scope: [
      "Logo and full brand identity",
      "Uniform and patch design",
      "Vehicle branding and signage",
      "Brand guideline document",
    ],
  },
  {
    name: "Okuhle Khaya Projects",
    slug: "okuhle-khaya-projects",
    filter: "Web",
    cat: "Brand · Web",
    label: "OKUHLE",
    bg: "from-[#8FC93A] to-[#A3D955]",
    year: "2024",
    blurb: "Identity and lead-generating website for a property development company.",
    url: "https://example.com",
    summary:
      "Okuhle Khaya Projects needed to attract serious property enquiries online. We created a clean brand identity and a lead-generating website with clear calls to action, making it easy for prospective buyers and partners to get in touch.",
    scope: [
      "Brand identity design",
      "Lead-generating website",
      "Enquiry and contact forms",
      "Content and copy support",
    ],
  },
  {
    name: "CubeNotes Saturday School",
    slug: "cubenotes-saturday-school",
    filter: "Print",
    cat: "Print · Design",
    label: "CUBENOTES",
    bg: "from-[#2c3e2a] to-[#5E7327]",
    year: "2022",
    blurb: "Workbooks, posters and enrolment material for a weekend tutoring school.",
    summary:
      "CubeNotes runs weekend classes and needed printed material that looked as professional as their teaching. We designed a consistent set of workbooks, posters and enrolment forms that made the school feel established and helped boost enrolment.",
    scope: [
      "Workbook layout and design",
      "Promotional posters",
      "Enrolment and registration forms",
      "Print production and delivery",
    ],
  },
  {
    name: "Lavido Auto Parts",
    slug: "lavido-auto-parts",
    filter: "Web",
    cat: "E-commerce · Web app",
    label: "LAVIDO",
    bg: "from-[#D4581A] to-[#8A3410]",
    year: "2026",
    blurb: "Premium online auto-parts store with part finder, checkout and admin dashboard.",
    url: "https://example.com",
    summary:
      "Lavido Auto Parts, based in Vosloorus, needed to take their counter business online without losing the premium feel of the brand. We designed and built a complete e-commerce platform — a part finder and filterable catalogue help customers find the right fit fast, a multi-step checkout handles payment and delivery, and a custom admin dashboard lets the team manage orders and stock from one place.",
    scope: [
      "Premium e-commerce store design and build",
      "Part finder and filterable product catalogue",
      "Product compatibility and specs pages",
      "Multi-step checkout with card payments",
      "Customer accounts and order tracking",
      "Workshop booking and admin order dashboard",
    ],
  },
  {
    name: "Mokoena Catering Co.",
    slug: "mokoena-catering",
    filter: "Branding",
    cat: "Brand identity",
    label: "MOKOENA",
    bg: "from-[#3B9FE0] to-[#2c6fa0]",
    year: "2023",
    blurb: "Logo, menu design and packaging for a Vosloorus catering business.",
    summary:
      "Mokoena Catering needed a brand that looked appetising and trustworthy for events and corporate clients. We designed a warm identity and applied it across menus and packaging so every plate and parcel reinforces the brand.",
    scope: [
      "Logo and brand identity",
      "Menu design",
      "Packaging and labels",
      "Social media profile assets",
    ],
  },
  {
    name: "Vosloorus Spaza Network",
    slug: "vosloorus-spaza-network",
    filter: "Consulting",
    cat: "Registration · Profile",
    label: "VSN",
    bg: "from-[#23262A] to-[#34373B]",
    year: "2024",
    blurb: "Company registration and supplier profile to access wholesale accounts.",
    summary:
      "The Vosloorus Spaza Network wanted to buy stock at better rates through formal wholesale accounts. We handled the company registration and built a professional supplier profile, unlocking access to accounts that were previously out of reach.",
    scope: [
      "Company registration (CIPC)",
      "Supplier and company profile",
      "Tax and compliance setup",
      "Wholesale account onboarding support",
    ],
  },
  {
    name: "Phakama Cleaning",
    slug: "phakama-cleaning",
    filter: "Print",
    cat: "Vehicle branding",
    label: "PHAKAMA",
    bg: "from-[#5E7327] to-[#3B9FE0]",
    year: "2023",
    blurb: "Full bakkie wrap, uniforms and pull-up banners for a cleaning company.",
    summary:
      "Phakama Cleaning wanted their team to look the part and turn every job into advertising. We designed and produced a full bakkie wrap, branded uniforms and pull-up banners that make the business instantly recognisable on the road and on site.",
    scope: [
      "Full vehicle wrap design and fitting",
      "Branded uniform design",
      "Pull-up banners",
      "Flyers and business cards",
    ],
  },
  {
    name: "Thuto Bursary Fund",
    slug: "thuto-bursary-fund",
    filter: "Web",
    cat: "Web app",
    label: "THUTO",
    bg: "from-[#2c3e2a] to-[#34373B]",
    year: "2024",
    blurb: "Custom application portal that manages bursary intakes and reviews.",
    url: "https://example.com",
    summary:
      "Thuto was drowning in paper bursary applications every intake. We built a custom web portal that lets students apply online and lets the team review and shortlist applicants in one place, turning a manual process into a smooth digital workflow.",
    scope: [
      "Custom application portal",
      "Online application forms",
      "Review and shortlisting dashboard",
      "Applicant notifications",
    ],
  },
  {
    name: "Khanyisa Events",
    slug: "khanyisa-events",
    filter: "Branding",
    cat: "Brand · Social",
    label: "KHANYISA",
    bg: "from-[#A3D955] to-[#5E7327]",
    year: "2022",
    blurb: "Identity and social media template system for an events company.",
    summary:
      "Khanyisa Events needed to look polished and consistent across a busy social media calendar. We built a vibrant identity and a reusable template system so they can post professional, on-brand content quickly without a designer for every post.",
    scope: [
      "Brand identity design",
      "Social media template system",
      "Event flyer templates",
      "Brand usage guidelines",
    ],
  },
  {
    name: "Sizwe Trading Enterprise",
    slug: "sizwe-trading-enterprise",
    filter: "Consulting",
    cat: "Business plan",
    label: "SIZWE",
    bg: "from-[#34373B] to-[#1A1C1F]",
    year: "2023",
    blurb: "Funding-ready business plan and financials for a wholesale trader.",
    summary:
      "Sizwe needed funding to grow but lacked the documentation lenders expect. We produced a funding-ready business plan with financial projections that told a clear, credible growth story — the kind of pack a financier can actually act on.",
    scope: [
      "Business plan writing",
      "Financial projections and modelling",
      "Market and competitor analysis",
      "Funding-application support",
    ],
  },
];

// Only publish completed projects with final, approved imagery.
export const PORTFOLIO: Project[] = PORTFOLIO_ARCHIVE.slice(0, 3);

export const CONTACT = {
  address: "20978 Mercury Street, Vosloorus, Boksburg, 1475",
  phone: "+27 69 796 1882",
  email: "info@africonnectsolutions.co.za",
  hours:
    "Weekdays: 07:30 – 17:30 · Saturday: 08:00 – 15:00 · Sunday: 09:00 – 14:00",
};

export const SOCIAL_LINKS = [
  {
    platform: "Facebook",
    href: "https://www.facebook.com/p/AfriConnect-100064153149967/",
  },
  { platform: "Instagram", href: "https://www.instagram.com/afri_connect/" },
  {
    platform: "TikTok",
    href: "https://www.tiktok.com/@africonnectsolutions",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  ABOUT PAGE                                                                 */
/*  Placeholder copy — swap the real details (names, reg numbers, etc.) here.  */
/* -------------------------------------------------------------------------- */

export const ABOUT = {
  image: "/new-about-image.png" as string | null,
  imageAlt:
    "Two AfriConnect team members working together in the Vosloorus office",
  // short narrative shown in the "who we are" block
  story: [
    "AfriConnect was founded in 2018 in Vosloorus to solve a problem too many small businesses face: being passed from one supplier to the next — one for the logo, another for the website, a third for printing, and someone else for IT. No single partner was accountable for the whole picture.",
    "So we built the team we felt was missing. Designers, developers, print specialists and business advisors working under one roof — aligned, communicating, and moving in the same direction. One brief, one team, one point of contact.",
    "Today, we support businesses across brand, print, web and day-to-day systems. We remain local, hands-on and personally invested in every client we serve.",
  ],
  mission:
    "To be a partner in your business growth and success by implementing our best expertise and creative solutions, using our smart digital tools, creating value for your brand.",
  vision:
    "To be everyone's one stop business solution centre, be recognized as one of the top creative and printing agency in South Africa by providing the best creative ideas for business and and individual brands.",
};

export const STATS = [
  { n: "2018", l: "Founded in Vosloorus" },
  { n: "4", l: "Connected disciplines" },
  { n: "20+", l: "Specialist services" },
  { n: "100%", l: "Black-owned business" },
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

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  grad: string;
  photo: string | null;
  photoAlt: string;
  photoLayout?: "cover" | "inset" | "portrait";
};

// Initials-based avatars with brand gradients — replace names/roles with the
// real team. Add a `photo` field later and swap the gradient block for an image.
export const TEAM: TeamMember[] = [
  {
    name: "Mitchel Shabangu",
    role: "Operations Director",
    bio: "Sets the direction of the business and keeps clients, people and delivery moving together.",
    grad: "from-[#5E7327] to-[#8FC93A]",
    photo: "/team/mitchel-2.png" as string | null,
    photoAlt: "Head-and-shoulders portrait of Mitchel Shabangu",
  },
  {
    name: "Sibusiso Thwayine",
    role: "Creative Director",
    bio: "Leads the look and feel of every brand — from logo and identity to layout.",
    grad: "from-[#1A1C1F] to-[#34373B]",
    photo: "/team/sibusiso-2.png" as string | null,
    photoAlt: "Head-and-shoulders portrait of Sibusiso",
    photoLayout: "inset",
  },
  {
    name: "Xolani Mgube",
    role: "Software Developer",
    bio: "Builds the websites, stores, dashboards and custom systems clients run on.",
    grad: "from-[#34373B] to-[#4a4e54]",
    photo: "/team/xolani-2.png" as string | null,
    photoAlt: "Head-and-shoulders portrait of Xolani",
  },
  {
    name: "Inathi Cekiso",
    role: "Administrator",
    bio: "Handles admin, scheduling and client paperwork so nothing slips through.",
    grad: "from-[#8FC93A] to-[#A3D955]",
    photo: "/team/Inathi.png" as string | null,
    photoAlt: "Head-and-shoulders portrait of Inathi Cekiso",
    photoLayout: "portrait",
  },
  {
    name: "Kgotso Mokoena",
    role: "Technical Support",
    bio: "Keeps the office systems running and helps clients with day-to-day IT issues.",
    grad: "from-[#3B9FE0] to-[#2c6fa0]",
    photo: "/team/Kgotso.png" as string | null,
    photoAlt: "Head-and-shoulders portrait of Kgotso Mokoena",
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
  accent: "lime" | "orange" | "brand" | "char";
  items: ServiceItem[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "brand",
    num: "01",
    name: "Brand & Design",
    tagline:
      "A clear, distinctive identity carried consistently across every customer touchpoint.",
    accent: "lime",
    items: [
      {
        name: "Logo & brand identity",
        desc: "A distinctive logo built around your business, with the files you need for every use.",
        price: "R1 500 – R5 000",
      },
      {
        name: "Brand identity kit",
        desc: "Logo, colour palette, fonts and usage guide so everything stays consistent.",
        price: "R3 500 – R8 500",
      },
      {
        name: "Graphic design",
        desc: "Professional creative for adverts, promotions, documents and everyday business communication.",
        price: "R450 – R2 500",
      },
      {
        name: "Social media design",
        desc: "On-brand templates and monthly post packs that keep your digital presence sharp.",
        price: "R1 800 – R6 000/mo",
      },
      {
        name: "Company profiles & presentations",
        desc: "Polished documents that explain your business, capabilities and offer professionally.",
        price: "R1 200 – R4 500",
      },
      {
        name: "Campaign creative",
        desc: "A connected visual direction for promotions, launches, events and seasonal campaigns.",
        price: "R850 – R5 000",
      },
    ],
  },
  {
    id: "print",
    num: "02",
    name: "Print & Signage",
    tagline:
      "Everyday print, branded products and large-format visibility — produced end to end.",
    accent: "orange",
    items: [
      {
        name: "Business cards & stationery",
        desc: "Business cards, letterheads, invoice books and other essentials designed and printed.",
        price: "R350 – R2 500",
      },
      {
        name: "Flyers, posters & brochures",
        desc: "Marketing material for campaigns, events, menus, promotions and company information.",
        price: "R450 – R4 500",
      },
      {
        name: "T-shirt & apparel printing",
        desc: "Branded staff uniforms, event clothing and workwear produced in the quantity you need.",
        price: "R120 – R450 each",
      },
      {
        name: "Vehicle branding & wraps",
        desc: "Partial decals, vehicle graphics and full wraps that turn every trip into advertising.",
        price: "R2 500 – R18 000",
      },
      {
        name: "Banners & pull-ups",
        desc: "Pull-up banners, PVC banners, flags and backdrops for events and storefronts.",
        price: "R650 – R4 500",
      },
      {
        name: "Signage & large-format printing",
        desc: "Shopfront signs, boards, window graphics, posters and exhibition graphics at scale.",
        price: "R1 500 – R25 000",
      },
    ],
  },
  {
    id: "websites",
    num: "03",
    name: "Websites & E-commerce",
    tagline:
      "Professional websites and online stores designed to build trust and generate business.",
    accent: "brand",
    items: [
      {
        name: "Landing pages",
        desc: "Focused pages for campaigns, promotions, lead generation and product launches.",
        price: "R2 500 – R8 000",
      },
      {
        name: "Business website",
        desc: "A fast, mobile-friendly website that explains your offer and brings in enquiries.",
        price: "R4 500 – R15 000",
      },
      {
        name: "E-commerce store",
        desc: "Sell online with product management, secure payments and delivery options built in.",
        price: "R9 000 – R35 000",
      },
      {
        name: "Dashboards",
        desc: "Custom dashboards that bring your business data together in one place.",
        price: "R4 500 – R20 000",
      },
      {
        name: "e-Portals",
        desc: "Central digital space where users can securely access documents, business tools anytime",
        price: "R1 200 – R4 500/yr",
      },
      {
        name: "Website care & maintenance",
        desc: "Content updates, security, backups and ongoing improvements after launch.",
        price: "R650 – R2 500/mo",
      },
    ],
  },
  {
    id: "business",
    num: "04",
    name: "Business & Systems",
    tagline:
      "Operational tools, registrations and business support that help your company run properly.",
    accent: "char",
    items: [
      {
        name: "Business Profiles",
        desc: "Professional company profiles and supplier documents that make your business look credible.",
        price: "R15 000 – R60 000",
      },
      // {
      //   name: "Portals & web applications",
      //   desc: "Secure customer portals and purpose-built applications for business-critical processes.",
      //   price: "R25 000 – R100 000",
      // },
      // {
      //   name: "Booking & workflow tools",
      //   desc: "Practical systems that reduce repetitive admin and keep work moving between people.",
      //   price: "R12 000 – R50 000",
      // },
      {
        name: "Company registration (CIPC)",
        desc: "Register your (Pty) Ltd, including name reservation and share certificates.",
        price: "R850 – R1 500",
      },
      {
        name: "Business plans & proposals",
        desc: "Funding-ready business plans, financial projections and professional tender proposals.",
        price: "R2 500 – R10 000",
      },
      {
        name: "Tax, SARS & B-BBEE compliance",
        desc: "Essential registrations, affidavits and guidance to help you trade compliantly.",
        price: "R750 – R3 500",
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
