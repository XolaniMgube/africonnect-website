import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import PortfolioGrid from "@/components/PortfolioGrid";
import { PORTFOLIO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio — AfriConnect",
  description:
    "Selected branding, web, print and IT projects delivered for businesses across Gauteng.",
};

const HIGHLIGHTS = [
  { n: `${PORTFOLIO.length}`, l: "Projects featured" }, // real — counted from the list
  { n: "7 yrs", l: "In business" },
  { n: "4", l: "Service divisions" },
  { n: "Gauteng", l: "Based in Vosloorus" },
];

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader
        tone="portfolio"
        eyebrow="Selected work"
        title="Real projects. Real businesses."
        intro="A snapshot of the brands we've built, designed, printed and registered for across Gauteng."
        crumbs={[{ href: "/portfolio", label: "Portfolio" }]}
      />

      {/* highlight strip */}
      <section className="border-b border-[var(--line)] bg-paper-2">
        <div className="mx-auto grid max-w-site grid-cols-2 gap-px overflow-hidden px-[30px] py-2 md:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.l} className="px-2 py-6 text-center">
              <div className="font-display text-[30px] font-extrabold tracking-[-1px] text-ink">
                {h.n}
              </div>
              <div className="mt-1 text-[14px] text-muted">{h.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <Reveal className="mb-12 max-w-[640px]">
            <h2 className="font-display text-[clamp(28px,3.6vw,40px)] font-extrabold leading-[1.04] tracking-[-1.2px] text-ink">
              Browse by what we did.
            </h2>
            <p className="mt-4 text-[17px] text-muted">
              Filter by division to see the kind of work that matches what you
              need. Hover any project for the quick story.
            </p>
          </Reveal>

          <PortfolioGrid />
        </div>
      </section>

      <CTA
        title="Your business could be next."
        text="Whether it's a logo, a full website or a wrapped vehicle — let's add your project to this wall."
        buttonLabel="Start your project"
      />
    </main>
  );
}
