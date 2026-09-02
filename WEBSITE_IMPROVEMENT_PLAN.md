# AfriConnect Website Improvement Plan

This is the working checklist for improving the website one task at a time.
Tasks are ordered by business impact and dependency: protect leads and remove
credibility risks first, then clarify the positioning, strengthen the design,
and finish with discoverability, accessibility, engineering, and launch QA.

## Status key

- [ ] Not started
- [x] Complete
- `BLOCKED` Waiting for confirmed business information or an asset

## Definition of done for every task

A task is complete when:

1. The implementation works at desktop and mobile widths.
2. Keyboard and basic screen-reader behavior has been considered.
3. Relevant links, forms, and states have been manually tested.
4. `npm run build` passes.
5. No unrelated user changes were overwritten.

---

## Phase 0 — Confirm the source of truth

These decisions prevent us from polishing information that may be incorrect.

- [ ] **0.1 Confirm the core positioning:** AfriConnect is a technology company first, with brand, print, and business support as complementary services.
- [ ] **0.2 Confirm the official company name, registration number, director details, B-BBEE status, address, phone number, email address, and office hours.**
- [ ] **0.3 Confirm the real team members, roles, biographies, and whether team photographs can be supplied.**
- [ ] **0.4 Confirm which services are currently sold and remove services that are no longer offered.**
- [ ] **0.5 Confirm real prices, whether prices include or exclude VAT, and whether public pricing should remain on the site.**
- [ ] **0.6 Confirm every portfolio client, project year, scope, live URL, and permission to display the work.**
- [ ] **0.7 Collect available project assets:** desktop screenshots, mobile screenshots, logos, print photographs, signage, uniforms, vehicles, packaging, and project results.
- [ ] **0.8 Collect real testimonials, client names, company names, and permission to publish them.**
- [ ] **0.9 Confirm the preferred lead destination:** email, CRM, WhatsApp, or another system.
- [ ] **0.10 Confirm whether the newsletter and downloadable resources are genuine active offerings.**

---

## Phase 1 — Launch blockers and credibility risks

### Forms and lead handling

- [ ] **1.1 Connect the contact form to a real server-side submission handler.**
- [ ] **1.2 Deliver contact submissions to the confirmed inbox or CRM.**
- [ ] **1.3 Add server-side validation, useful failure messages, loading state, and retry behavior.**
- [ ] **1.4 Add basic spam protection and submission rate limiting.**
- [ ] **1.5 Test contact submissions end to end in production.**
- [ ] **1.6 Connect the newsletter form to a real mailing-list provider, or remove the newsletter section.**
- [ ] **1.7 Replace fake success states so success is shown only after the external service confirms receipt.**

### Incorrect and placeholder content

- [ ] **1.8 Replace all placeholder company-profile facts with verified information.**
- [ ] **1.9 Correct “7 yrs” and “Seven years on,” preferably deriving the age from 2018 or using “Since 2018.”**
- [ ] **1.10 Remove unverified numerical claims such as “100+ businesses” until evidence is confirmed.**
- [ ] **1.11 Fix the truncated Lavido project summary.**
- [ ] **1.12 Resolve the duplicate `lavido-auto-parts` portfolio slug and duplicate project entry.**
- [ ] **1.13 Replace every `example.com` project URL with a real URL or remove the live-site button.**
- [ ] **1.14 Replace `#` footer social links with real profile URLs or remove the icons.**
- [ ] **1.15 Fix the footer `/services#run` link so it targets a real service section.**
- [ ] **1.16 Connect every download to a real file or remove the download card until it is ready.**
- [ ] **1.17 Audit every internal and external link for correct destination and status.**

### Broken or misleading interactions

- [x] **1.18 Make every homepage project card link to the correct case study.**
- [ ] **1.19 Make the entire portfolio card open its case study.**
- [ ] **1.20 Keep a visible “View project” action on touch/mobile devices instead of relying on hover.**
- [ ] **1.21 Ensure external website buttons appear only when a verified live URL exists.**
- [ ] **1.22 Change reveal animations so content is visible by default when JavaScript or Intersection Observer fails.**

---

## Phase 2 — Reposition AfriConnect as a technology company

### Messaging and offer architecture

- [x] **2.1 Write a one-sentence positioning statement focused on technology and business outcomes.**
- [x] **2.2 Replace “Everything your business needs” with a more specific, defensible homepage headline.**
- [x] **2.3 Rewrite the hero supporting copy to lead with websites, platforms, systems, and managed IT.**
- [x] **2.4 Choose a primary CTA, such as “Book a discovery call” or “Discuss your project.”**
- [x] **2.5 Define three primary service pillars: Digital Products, Managed Technology, and Brand & Production.**
- [ ] **2.6 Move registration, tax, business plans, and compliance into a secondary Business Support category—or remove them if they weaken the positioning.**
- [ ] **2.7 Use one service taxonomy consistently across the homepage, services page, navigation, footer, portfolio filters, and contact form.**
- [ ] **2.8 Replace inconsistent “three ways,” “four divisions,” Build/Brand/Run, and Brand/Web/Print/Consulting language.**
- [x] **2.9 Write outcome-focused descriptions for every service pillar.**
- [x] **2.10 Add specific technical capabilities: e-commerce, portals, dashboards, payments, integrations, hosting, business email, maintenance, analytics, backups, and security where genuinely offered.**
- [ ] **2.11 Explain AfriConnect’s ongoing support model, response expectations, ownership, handover, and maintenance options.**
- [ ] **2.12 Define the primary customer groups and tailor examples to their problems.**

### Navigation and information architecture

- [x] **2.13 Review navigation labels around the new positioning.**
- [ ] **2.14 Decide whether “Resources” should remain a primary navigation item or move to the footer.**
- [ ] **2.15 Make technology solutions easier to reach than print and administrative services.**
- [ ] **2.16 Ensure every major service has a stable anchor or dedicated landing page.**

---

## Phase 3 — Rebuild the homepage story

- [x] **3.1 Redesign the hero around the approved positioning and CTA.**
- [x] **3.2 Replace or improve the decorative globe with a visual showing connected business technology.**
- [x] **3.3 Add a trust strip containing real client logos or verified proof points.**
- [x] **3.4 Replace vague statistics with verified, commercially meaningful measures.**
- [x] **3.5 Rebuild the services preview around the three approved primary pillars.**
- [x] **3.6 Add one strong featured technology case study near the top of the homepage.**
- [x] **3.7 Add a technology-capabilities section showing systems, integrations, infrastructure, and support.**
- [ ] **3.8 Explain visually how digital products, managed technology, and brand/production connect around one client.**
- [ ] **3.9 Replace the homepage portfolio placeholders with real project imagery.**
- [ ] **3.10 Add real testimonials or remove testimonial-style claims until proof is available.**
- [x] **3.11 Update the process section to cover discovery, prototype/design, build, launch, and ongoing support.**
- [ ] **3.12 Add clear expectations around project timelines and what happens after launch.**
- [x] **3.13 Review the final homepage CTA for clarity and conversion intent.**

Recommended homepage order:

1. Technology-led hero
2. Client/proof strip
3. Core solutions
4. Featured case study
5. Technical capabilities
6. Connected-service advantage
7. Selected work
8. Process and support
9. Testimonials
10. Final CTA

---

## Phase 4 — Build a stronger visual system

### Brand assets

- [ ] **4.1 Obtain or create an official reversed white/lime logo for dark backgrounds.**
- [ ] **4.2 Replace the 2000×2000 navigation/fav icon with correctly sized SVG or PNG variants.**
- [ ] **4.3 Create favicon, Apple touch icon, and 512×512 application icon variants.**
- [ ] **4.4 Define documented rules for logo size, clear space, and dark/light usage.**

### Photography and project presentation

- [ ] **4.5 Add real team photography.**
- [ ] **4.6 Add real office, production, printing, installation, and client-work photography.**
- [ ] **4.7 Create consistent desktop/mobile device mockups for digital projects.**
- [ ] **4.8 Create consistent image treatments for print, signage, vehicle, apparel, and identity projects.**
- [ ] **4.9 Add useful captions and accessible alternative text to project media.**
- [ ] **4.10 Optimize all images with appropriate dimensions, formats, responsive sizes, and loading behavior.**

### Design-system refinement

- [ ] **4.11 Reduce repetitive use of the dot matrix so it remains a signature rather than background noise.**
- [ ] **4.12 Introduce more untextured editorial space and stronger contrast between section types.**
- [x] **4.13 Use technical diagrams, interface fragments, data panels, and system flows where they communicate real capability.**
- [ ] **4.14 Reduce dependence on identical rounded cards for every content type.**
- [ ] **4.15 Review oversized vertical spacing on desktop and mobile.**
- [ ] **4.16 Standardize hover, focus, pressed, disabled, loading, success, and error states.**
- [ ] **4.17 Check the complete palette for text and UI contrast.**
- [x] **4.18 Add motion selectively and respect reduced-motion preferences.**

---

## Phase 5 — Strengthen individual pages

### Services

- [ ] **5.1 Reorder the services page so technology appears first.**
- [ ] **5.2 Update the quick navigation to match the final service taxonomy.**
- [ ] **5.3 Validate every service description and public price.**
- [ ] **5.4 Clarify inclusions, exclusions, recurring costs, VAT, and “from” pricing.**
- [ ] **5.5 Add relevant proof or project links under each service pillar.**
- [ ] **5.6 Review starter bundles against the new positioning and real margins.**

### Portfolio and case studies

- [ ] **5.7 Replace all portfolio gradient placeholders with real media.**
- [ ] **5.8 Reduce the portfolio to verified, display-ready projects.**
- [ ] **5.9 Give every project a unique slug and validated data.**
- [ ] **5.10 Rewrite case studies using Problem → Approach → Solution → Result.**
- [ ] **5.11 Add measurable outcomes where the client can verify them.**
- [ ] **5.12 Add relevant technologies, integrations, services, and deliverables to digital case studies.**
- [ ] **5.13 Add next/previous project navigation.**
- [ ] **5.14 Add a related service CTA to every case study.**

### About

- [ ] **5.15 Replace placeholder company and team information.**
- [ ] **5.16 Add real team and workspace photography.**
- [ ] **5.17 Tighten the company story around technical capability, accountability, and local roots.**
- [ ] **5.18 Add verified certifications, partnerships, ownership, and registration details where commercially useful.**

### Resources

- [ ] **5.19 Verify every article for accuracy, originality, date, and current pricing/legal claims.**
- [ ] **5.20 Replace decorative article artwork with useful, branded article imagery where possible.**
- [ ] **5.21 Finish or remove all promised downloadable resources.**
- [ ] **5.22 Add author, updated date, article navigation, and related-service CTA.**
- [ ] **5.23 Add newsletter privacy/consent language if subscriptions remain.**

### Contact

- [ ] **5.24 Review the form fields against the actual sales qualification process.**
- [ ] **5.25 Add expected response time and what happens after submission.**
- [ ] **5.26 Verify phone, WhatsApp, email, map location, and office hours.**
- [ ] **5.27 Track form, WhatsApp, phone, and email conversion events.**

---

## Phase 6 — Accessibility

- [ ] **6.1 Add a keyboard-visible skip-to-content link.**
- [ ] **6.2 Add consistent visible focus styles to every interactive element.**
- [ ] **6.3 Add `aria-expanded` and `aria-controls` to the mobile menu button.**
- [ ] **6.4 Manage focus correctly when the mobile menu opens and closes.**
- [ ] **6.5 Add accessible names to social links and icon-only controls.**
- [ ] **6.6 Mark current breadcrumb items with `aria-current="page"`.**
- [ ] **6.7 Add `aria-invalid`, field-level error text, and `aria-describedby` to invalid form controls.**
- [ ] **6.8 Announce form submission success and failure with an appropriate live region.**
- [ ] **6.9 Ensure all hover-revealed content is available by keyboard and touch.**
- [ ] **6.10 Ensure colour is not the only indication of active, error, or success state.**
- [ ] **6.11 Test zoom, text enlargement, reduced motion, and high-contrast behavior.**
- [ ] **6.12 Run automated accessibility checks and complete a manual keyboard audit.**

---

## Phase 7 — SEO, sharing, and local discovery

- [ ] **7.1 Add `metadataBase` using the production domain.**
- [ ] **7.2 Add canonical URLs for indexable pages.**
- [ ] **7.3 Create a branded default Open Graph image.**
- [ ] **7.4 Create appropriate Open Graph images for major pages and case studies.**
- [ ] **7.5 Add Twitter/X card metadata.**
- [ ] **7.6 Add `robots.ts`.**
- [ ] **7.7 Add a generated `sitemap.ts` covering static pages, projects, and articles.**
- [ ] **7.8 Add verified `Organization` or `LocalBusiness` structured data.**
- [ ] **7.9 Add `Service`, `Article`, and `BreadcrumbList` structured data where appropriate.**
- [ ] **7.10 Review page titles and descriptions around actual search intent.**
- [ ] **7.11 Add descriptive image alternative text without keyword stuffing.**
- [ ] **7.12 Connect and verify Google Search Console.**
- [ ] **7.13 Align name, address, phone, hours, and website with the Google Business Profile.**
- [ ] **7.14 Add privacy-conscious analytics and conversion measurement.**

---

## Phase 8 — Engineering quality, performance, and security

- [ ] **8.1 Replace the obsolete `next lint` script with a working ESLint setup.**
- [ ] **8.2 Add a dedicated TypeScript type-check command.**
- [ ] **8.3 Add automated checks for duplicate project and article slugs.**
- [ ] **8.4 Add an automated internal-link and placeholder-link check.**
- [ ] **8.5 Add tests for contact validation and submission states.**
- [ ] **8.6 Add a basic end-to-end test for navigation, portfolio, services, and contact submission.**
- [ ] **8.7 Reduce unnecessary client-side rendering and hydration where possible.**
- [ ] **8.8 Review the reveal system and other animations for layout/performance cost.**
- [ ] **8.9 Add production security headers and a Content Security Policy.**
- [ ] **8.10 Review the embedded Google Map and third-party services for privacy impact.**
- [ ] **8.11 Add an appropriate privacy policy and terms/business information page.**
- [ ] **8.12 Run production Lighthouse tests for representative desktop and mobile pages.**
- [ ] **8.13 Measure real Core Web Vitals after deployment.**
- [ ] **8.14 Target LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1 at the 75th percentile.**
- [ ] **8.15 Resolve the Turbopack development panic or retain a documented webpack development fallback.**
- [ ] **8.16 Add CI checks for build, lint, type checking, tests, duplicate content IDs, and broken links.**

---

## Phase 9 — Final launch QA

- [ ] **9.1 Test every page at common mobile, tablet, laptop, and wide-desktop widths.**
- [ ] **9.2 Test Chrome, Firefox, Safari, and Edge where available.**
- [ ] **9.3 Test all forms using real delivery destinations.**
- [ ] **9.4 Test every internal link, external link, telephone link, email link, WhatsApp link, and download.**
- [ ] **9.5 Verify all business facts, prices, testimonials, and case-study claims one final time.**
- [ ] **9.6 Verify metadata and social-sharing previews.**
- [ ] **9.7 Validate structured data, sitemap, and robots behavior.**
- [ ] **9.8 Complete a final keyboard and screen-reader smoke test.**
- [ ] **9.9 Run a clean production build and production-mode smoke test.**
- [ ] **9.10 Establish a monthly content, dependency, form-delivery, and broken-link review.**

---

## Recommended first implementation sequence

After the Phase 0 confirmations, implement in this order:

1. Task 1.1–1.7: make lead capture real.
2. Task 1.8–1.17: remove incorrect and placeholder information.
3. Task 1.18–1.22: fix misleading and inaccessible interactions.
4. Task 2.1–2.12: approve the technology-led positioning and service model.
5. Phase 3: rebuild the homepage around that positioning.
6. Phase 4 and 5: add real visual evidence and strengthen the supporting pages.
7. Phase 6–8: accessibility, SEO, performance, security, and automation.
8. Phase 9: final release QA.
