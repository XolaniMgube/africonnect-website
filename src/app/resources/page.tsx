import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import NewsletterForm from "@/components/NewsletterForm";
import ResourceList from "@/components/ResourceList";
import Reveal from "@/components/Reveal";
import { fmtDate } from "@/lib/format";
import { ARTICLES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resources — AfriConnect",
  description:
    "Practical articles and ideas for South African businesses working across brand, print, websites and systems.",
};

const TOPICS = [
  {
    name: "Branding",
    text: "Identity, consistency and the decisions that make a business easier to recognise.",
    color: "bg-lime",
    textColor: "text-lime",
  },
  {
    name: "Print",
    text: "Production, campaigns and how physical communication can work harder.",
    color: "bg-[#f0a35b]",
    textColor: "text-[#f0a35b]",
  },
  {
    name: "Web",
    text: "Websites, online selling and the practical choices behind a useful digital presence.",
    color: "bg-brand",
    textColor: "text-brand",
  },
  {
    name: "Consulting",
    text: "Registration, planning and clear guidance for running a more capable business.",
    color: "bg-[#9d8cff]",
    textColor: "text-[#b9adff]",
  },
];

export default function ResourcesPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-24 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-24 -top-32 h-[620px] w-[620px] rounded-full bg-brand/15 blur-[135px]" />
        <div className="pointer-events-none absolute -bottom-44 -left-28 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[125px]" />

        <div className="relative z-[2] mx-auto grid min-h-[700px] max-w-site items-center gap-16 px-[30px] py-[86px] lg:grid-cols-[.9fr_1.1fr] lg:py-[105px]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <span className="flex gap-[3px]" aria-hidden>
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
              Ideas · Guides · Perspective
            </span>
            <h1 className="max-w-[650px] font-display text-[clamp(44px,6vw,70px)] font-extrabold leading-[.98] tracking-[-2.5px] text-white">
              Useful thinking for <span className="text-lime">better business.</span>
            </h1>
            <p className="mt-7 max-w-[580px] text-[clamp(17px,1.8vw,19px)] leading-relaxed text-white/65">
              Practical ideas drawn from the work—written to help business
              owners make clearer decisions across brand, print, web and systems.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#resource-library"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-lime px-[28px] py-[15px] font-display text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.28)]"
              >
                Browse resources
                <Arrow stroke="#1A1C1F" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:pl-4">
            <Link
              href={`/resources/${featured.slug}`}
              className="group block overflow-hidden rounded-[24px] border border-white/15 bg-[#181b1e]/90 shadow-[0_35px_90px_rgba(0,0,0,.38)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {featured.image && featured.imageAlt && (
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-char/70 px-3.5 py-2 font-display text-[10px] font-semibold uppercase tracking-[.9px] text-lime backdrop-blur-md">
                  Featured article
                </span>
              </div>
              <div className="p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-2 text-[11.5px] text-white/40">
                  <span>{featured.category}</span>
                  <span>·</span>
                  <span>{fmtDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-4 max-w-[580px] font-display text-[clamp(22px,2.6vw,31px)] font-bold leading-[1.12] tracking-[-.8px] text-white">
                  {featured.title}
                </h2>
                <p className="mt-3 line-clamp-2 text-[14px] leading-relaxed text-white/55">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-5 border-t border-white/10 pt-5">
                  <div>
                    <p className="font-display text-[11px] font-semibold text-lime">
                      {featured.author}
                    </p>
                    <p className="mt-0.5 text-[10.5px] text-white/35">
                      {featured.authorTitle}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 font-display text-[12.5px] font-semibold text-white">
                    Read article
                    <Arrow stroke="#fff" className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>

        <div className="relative z-[2] border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-site divide-y divide-white/10 px-[30px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["Practical", "Ideas you can apply"],
              ["Local context", "Written for South African business"],
              ["No jargon", "Clear enough to act on"],
            ].map(([value, label], index) => (
              <div key={value} className={`py-6 sm:px-7 ${index === 0 ? "sm:pl-0" : ""}`}>
                <p className="font-display text-[15px] font-bold text-white">{value}</p>
                <p className="mt-1 text-[12.5px] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resource-library" className="relative overflow-hidden bg-paper-2 py-[110px] md:py-[130px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 grid gap-7 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
                <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                Resource library
              </span>
              <h2 className="max-w-[700px] font-display text-[clamp(36px,4.8vw,56px)] font-extrabold leading-[1.02] tracking-[-1.8px] text-ink">
                Browse practical thinking.
              </h2>
            </div>
            <p className="max-w-[480px] text-[16px] leading-relaxed text-muted lg:justify-self-end">
              Short, useful reads across the same four disciplines our team
              works in every day.
            </p>
          </Reveal>
          <ResourceList slugs={rest.map((article) => article.slug)} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-char-2 py-[105px] text-white md:py-[120px]">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-12 grid gap-7 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
                <i className="h-1.5 w-1.5 rounded-full bg-lime" />
                The subjects
              </span>
              <h2 className="font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-white">
                What we write about.
              </h2>
            </div>
            <p className="max-w-[480px] text-[16px] leading-relaxed text-white/50 lg:justify-self-end">
              The decisions behind how a business looks, communicates, sells
              and operates.
            </p>
          </Reveal>

          <div className="grid border-y border-white/10 md:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((topic, index) => (
              <Reveal key={topic.name}>
                <article className={`py-8 md:min-h-[220px] md:px-7 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : "md:pl-0"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-[10px] font-bold ${topic.textColor}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <i className={`h-px w-7 ${topic.color}`} />
                  </div>
                  <h3 className="mt-6 font-display text-[18px] font-bold text-white">{topic.name}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/45">{topic.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="grid gap-7 rounded-[22px] border border-white/10 bg-char p-7 md:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="font-display text-[25px] font-bold tracking-[-.7px] text-white">
                  One useful idea in your inbox, now and then.
                </h3>
                <p className="mt-2 max-w-[600px] text-[14px] text-white/45">
                  No daily noise—just the occasional guide worth opening.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  );
}
