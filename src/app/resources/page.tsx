import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import ResourceList from "@/components/ResourceList";
import NewsletterForm from "@/components/NewsletterForm";
import { fmtDate } from "@/lib/format";
import { ARTICLES, DOWNLOADS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources — AfriConnect",
  description:
    "Guides, templates and articles to help South African businesses brand, build and grow.",
};

export default function ResourcesPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <main>
      <PageHeader
        tone="resources"
        eyebrow="Resource hub"
        title="Guides, templates and ideas to help you grow."
        intro="Practical articles and free downloads for South African business owners — from branding to bookkeeping."
        crumbs={[{ href: "/resources", label: "Resources" }]}
      />

      {/* featured article */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <Reveal>
            <Link
              href={`/resources/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-[var(--line)] bg-paper lg:grid-cols-2"
            >
              <div className={`relative min-h-[260px] bg-gradient-to-br ${featured.grad}`}>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <span className="absolute left-6 top-6 rounded-full bg-black/25 px-3.5 py-1.5 font-display text-[12px] font-semibold uppercase tracking-[1px] text-lime backdrop-blur-sm">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="flex flex-col justify-center p-9 md:p-12">
                <div className="mb-4 flex items-center gap-2 text-[13.5px] text-muted">
                  <span>{fmtDate(featured.date)}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="font-display text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.1] tracking-[-1px] text-ink transition-colors group-hover:text-olive">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-muted">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-display text-[15px] font-semibold text-olive">
                  Read the guide
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* article list */}
      <section className="pb-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <Reveal className="mb-12">
            <h2 className="font-display text-[clamp(28px,3.6vw,40px)] font-extrabold tracking-[-1.2px] text-ink">
              More from the blog
            </h2>
          </Reveal>
          <ResourceList slugs={rest.map((a) => a.slug)} />
        </div>
      </section>

      {/* free downloads */}
      <section className="bg-paper-2 py-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 max-w-[660px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              Free downloads
            </span>
            <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.6px] text-ink">
              Tools you can use today.
            </h2>
            <p className="mt-5 text-[17.5px] text-muted">
              Templates and checklists we use with our own clients — yours to
              download, free.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {DOWNLOADS.map((d) => (
              <Reveal key={d.title}>
                <a
                  href={d.href}
                  className="group flex items-center gap-5 rounded-2xl border border-[var(--line)] bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-char"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-char font-display text-[12px] font-bold text-lime">
                    {d.format}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-[18px] font-bold tracking-[-0.3px] text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">
                      {d.desc}
                    </p>
                  </div>
                  <span className="shrink-0 text-olive transition-transform duration-200 group-hover:translate-y-0.5">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
                    </svg>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* newsletter */}
      <section className="pb-[120px] pt-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <div className="relative overflow-hidden rounded-3xl bg-char px-7 py-16 md:px-14">
            <div className="dot-tex-light absolute inset-0 opacity-70" />
            <div className="relative z-[2] grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-[clamp(26px,3.4vw,38px)] font-extrabold tracking-[-1px] text-white">
                  One useful idea in your inbox, now and then.
                </h2>
                <p className="mt-3 max-w-[460px] text-[16.5px] text-white/65">
                  No spam, no daily mail — just the occasional guide to help your
                  business grow. Unsubscribe any time.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
