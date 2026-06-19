import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import ServiceCatalog from "@/components/ServiceCatalog";
import { SERVICE_GROUPS, BUNDLES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services — AfriConnect",
  description:
    "Design, web, print, IT and business consulting — grouped into clear service areas with transparent pricing.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        tone="services"
        eyebrow="What we do"
        title="Everything your business needs, grouped into four divisions."
        intro="Branding, websites, printing and business consulting — one team, one point of contact, one invoice."
        crumbs={[{ href: "/services", label: "Services" }]}
      />

      {/* division quick-nav */}
      <section className="border-b border-[var(--line)] bg-paper-2">
        <div className="mx-auto flex max-w-site flex-wrap items-center gap-3 px-[30px] py-6">
          <span className="mr-2 font-display text-[13px] font-semibold uppercase tracking-[1px] text-muted">
            Jump to
          </span>
          {SERVICE_GROUPS.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-lg border border-[var(--line)] bg-paper px-4 py-2 text-[14px] font-medium text-char transition-colors hover:border-char"
            >
              {g.name}
            </a>
          ))}
        </div>
      </section>

      {/* catalogue with show-pricing toggle */}
      <section className="relative overflow-hidden bg-paper-2 py-[120px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <ServiceCatalog />
        </div>
      </section>

      {/* starter bundles */}
      <section className="bg-char-2 py-[120px] text-white">
        <div className="mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 max-w-[660px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <i className="h-1.5 w-1.5 rounded-full bg-lime" />
              Popular bundles
            </span>
            <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.6px] text-white">
              Not sure where to start? Start here.
            </h2>
            <p className="mt-5 text-[17.5px] text-white/65">
              Ready-made packages that bundle the essentials at a better price.
              Need something different? We&apos;ll build a custom quote.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {BUNDLES.map((b) => (
              <Reveal key={b.name}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                    b.featured
                      ? "border-lime bg-lime text-ink"
                      : "border-white/10 bg-char text-white"
                  }`}
                >
                  {b.featured && (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-ink px-3 py-1 font-display text-[11.5px] font-bold uppercase tracking-[1px] text-lime">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-[22px] font-bold tracking-[-0.5px]">
                    {b.name}
                  </h3>
                  <p
                    className={`mt-2 text-[15px] leading-relaxed ${
                      b.featured ? "text-ink/70" : "text-white/60"
                    }`}
                  >
                    {b.blurb}
                  </p>
                  <div className="my-6 flex items-baseline gap-1.5">
                    <span className="font-display text-[15px] font-medium opacity-70">
                      from
                    </span>
                    <span className="font-display text-[38px] font-extrabold tracking-[-1.5px]">
                      {b.price}
                    </span>
                  </div>
                  <ul className="mb-8 space-y-3">
                    {b.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-[15px]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={b.featured ? "#1A1C1F" : "#A3D955"}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-0.5 shrink-0"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className={b.featured ? "text-ink/80" : "text-white/75"}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-auto inline-flex items-center justify-center rounded-lg px-6 py-3.5 font-display text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                      b.featured
                        ? "bg-ink text-white"
                        : "bg-lime text-ink"
                    }`}
                  >
                    Get this bundle
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-[640px] text-[14.5px] text-white/45">
            All prices are indicative starting points in South African Rand and
            exclude VAT. Every project is quoted individually once we understand
            the scope — you&apos;ll always get a firm figure before any work begins.
          </p>
        </div>
      </section>

      <CTA
        title="Tell us what you need."
        text="Mix and match across any division. We'll put together one clear quote — no five suppliers, no surprises."
        buttonLabel="Request a quote"
      />
    </main>
  );
}
