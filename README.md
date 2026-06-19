# AfriConnect — Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS. Homepage rebuilt from the
approved design: dark charcoal hero with an animated dot-matrix globe (the logo,
brought to life), resolving into a light editorial body. Lime-led, charcoal base,
blue as a secondary accent.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build   # production build
npm start       # serve the build
```

> Fonts (Sora + DM Sans) load via `next/font/google` and are fetched at build
> time, so the first `npm run build` needs internet access. After that you're set.

## Structure

```
src/
  app/
    layout.tsx      # fonts (Sora + DM Sans), metadata
    page.tsx        # homepage — assembles the sections
    globals.css     # base styles, dot-matrix texture, reveal + reduced-motion
  components/
    Nav.tsx         # scroll-aware nav (light-on-dark → dark-on-light)
    Hero.tsx        # dark band, glows, stat strip
    Globe.tsx       # canvas dot-sphere + green node-link ("use client")
    Services.tsx    # editorial Build / Brand / Run rows
    Process.tsx     # dark process panel
    Work.tsx        # project grid
    CTA.tsx         # lime call-to-action band
    Footer.tsx
    Logo.tsx        # reusable mark + wordmark
    Reveal.tsx      # scroll-in wrapper
    Arrow.tsx
  lib/
    content.ts      # all copy/data: services, process, work, contact
```

## What's left to wire

- **Work grid** uses gradient placeholders. Drop real screenshots of the builds
  into `public/work/` and swap the placeholder blocks in `Work.tsx` for
  `next/image`. This is the single biggest visual upgrade remaining.
- **Contact form / "Get a quote"** buttons currently link to `#`. Point them at a
  real contact page or wire a form (Formspree, Resend, or a Next.js route handler).
- **Other pages** (Services, About, Portfolio, Contact) — not yet built. The
  components and design tokens here are the kit to build them from.

## Design tokens

Defined in `tailwind.config.ts`:
`char #34373B` · `char-2 #23262A` · `ink #1A1C1F` · `paper #FAFAF7` ·
`lime #A3D955` · `lime-2 #8FC93A` · `olive #5E7327` · `brand(blue) #3B9FE0`
# africonnect-website
