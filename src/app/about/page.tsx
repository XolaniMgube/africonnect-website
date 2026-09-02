import type { Metadata } from "next";
import Link from "next/link";
import AboutPageVisual from "@/components/AboutPageVisual";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import TeamSection from "@/components/TeamSection";
import { ABOUT, VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — AfriConnect",
  description:
    "Meet the connected team behind AfriConnect's brand, print, website and business-system work.",
};

const STORY_PILLARS = [
  {
    title: "Who we are",
    text: "A multidisciplinary team based in Vosloorus, bringing designers, developers, print specialists and business support together under one roof.",
  },
  {
    title: "What we do",
    text: "We help individuals and businesses turn ideas and everyday problems into clear brands, quality print, effective websites and practical systems.",
  },
  {
    title: "Why we do it",
    text: "Because capable people should not have to chase disconnected suppliers or settle for work that does not match their ambition.",
  },
];

const PURPOSE = [
  {
    number: "01",
    label: "Our mission",
    text: ABOUT.mission,
    dark: true,
  },
  {
    number: "02",
    label: "Our vision",
    text: ABOUT.vision,
    dark: false,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* introduction */}
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-20 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -left-32 -top-40 h-[560px] w-[560px] rounded-full bg-lime/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-32 bottom-[-180px] h-[520px] w-[520px] rounded-full bg-brand/12 blur-[140px]" />

        <div className="relative z-[2] mx-auto grid max-w-site items-center gap-14 px-[30px] py-[82px] lg:min-h-[690px] lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:py-[100px]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <span className="flex gap-[3px]" aria-hidden>
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
              About AfriConnect
            </span>
            <h1 className="max-w-[680px] font-display text-[clamp(44px,6vw,70px)] font-extrabold leading-[.98] tracking-[-2.5px] text-white">
              Rooted in Vosloorus. <span className="text-lime">Built to connect.</span>
            </h1>
            <p className="mt-7 max-w-[610px] text-[clamp(17px,1.8vw,19px)] leading-relaxed text-white/65">
              We are one multidisciplinary team bringing brand, print,
              websites and practical business systems together around the
              people we serve.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#team"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-lime px-[28px] py-[15px] font-display text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.28)]"
              >
                Meet the team
                <Arrow stroke="#1A1C1F" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#our-story"
                className="group inline-flex items-center gap-2.5 px-2 py-3 font-display text-[15px] font-semibold text-white"
              >
                Read our story
                <Arrow stroke="#fff" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:pl-3">
            <AboutPageVisual image={ABOUT.image} alt={ABOUT.imageAlt} />
          </Reveal>
        </div>

        <div className="relative z-[2] border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-site divide-y divide-white/10 px-[30px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["Since 2018", "Building from local experience"],
              ["Four disciplines", "Brand, print, web and systems"],
              ["One team", "Accountable for the whole result"],
            ].map(([value, label], index) => (
              <div key={value} className={`py-6 sm:px-7 ${index === 0 ? "sm:pl-0" : ""}`}>
                <p className="font-display text-[15px] font-bold text-white">{value}</p>
                <p className="mt-1 text-[12.5px] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* story */}
      <section id="our-story" className="relative bg-paper-2 py-[110px] md:py-[130px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal>
            <div className="grid overflow-hidden rounded-[28px] border border-char/10 bg-paper shadow-[0_30px_80px_rgba(26,28,31,.14)] lg:grid-cols-[.78fr_1.22fr]">
              <div className="relative overflow-hidden border-b border-char/10 p-8 md:p-11 lg:border-b-0 lg:border-r">
                <div className="pointer-events-none absolute -left-24 -top-28 h-[300px] w-[300px] rounded-full bg-lime/15 blur-[90px]" />
                <div className="relative z-[2] flex h-full min-h-[310px] flex-col">
                  <span className="inline-flex items-center gap-2.5 font-display text-[11.5px] font-semibold uppercase tracking-[1.35px] text-olive">
                    <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                    Our story
                  </span>
                  <h2 className="mt-7 max-w-[390px] font-display text-[clamp(30px,3.5vw,44px)] font-extrabold leading-[1.04] tracking-[-1.4px] text-ink">
                    Local roots. A connected way of working.
                  </h2>
                  <p className="mt-6 max-w-[410px] text-[15.5px] leading-relaxed text-muted">
                    AfriConnect began in 2018, shaped by young Black founders
                    from Vosloorus and a firsthand view of the market:
                    ambitious people and businesses were not short of
                    ideas—they needed dependable support to bring them to life.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-9">
                    {["Vosloorus born", "Since 2018"].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-char/10 bg-paper-2 px-3.5 py-2 font-display text-[10.5px] font-semibold uppercase tracking-[.7px] text-char/65"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {STORY_PILLARS.map((item, index) => (
                  <article
                    key={item.title}
                    className={`grid gap-4 p-8 md:grid-cols-[145px_1fr] md:gap-8 md:p-10 ${
                      index > 0 ? "border-t border-char/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 md:block">
                      <span className="font-display text-[10.5px] font-bold text-lime-2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-[16px] font-bold tracking-[-.3px] text-ink md:mt-3">
                        {item.title}
                      </h3>
                    </div>
                    <p className="max-w-[520px] text-[15px] leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TeamSection />

      {/* purpose and principles */}
      <section id="purpose" className="relative overflow-hidden bg-paper-2 py-[110px] md:py-[130px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-32 bottom-[-180px] h-[520px] w-[520px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 max-w-[700px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              Why we exist
            </span>
            <h2 className="font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-ink">
              Clear purpose. Practical work.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {PURPOSE.map((item) => (
              <Reveal key={item.label}>
                <article
                  className={`relative h-full overflow-hidden rounded-[22px] border p-8 md:p-10 ${
                    item.dark
                      ? "border-char bg-char text-white"
                      : "border-char/10 bg-paper text-ink"
                  }`}
                >
                  {item.dark && (
                    <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-50" />
                  )}
                  <div className="relative z-[2] flex h-full min-h-[245px] flex-col">
                    <div className="flex items-start justify-between">
                      <span
                        className={`font-display text-[12px] font-semibold uppercase tracking-[1.2px] ${
                          item.dark ? "text-lime" : "text-olive"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`font-display text-[12px] font-bold ${
                          item.dark ? "text-white/30" : "text-char/35"
                        }`}
                      >
                        {item.number}
                      </span>
                    </div>
                    <p
                      className={`mt-auto max-w-[520px] pt-12 font-display text-[21px] font-semibold leading-[1.45] tracking-[-.45px] ${
                        item.dark ? "text-white" : "text-ink"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mb-8 mt-20">
            <h3 className="font-display text-[13px] font-semibold uppercase tracking-[1.2px] text-olive">
              How we show up
            </h3>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.slice(0, 4).map((value, index) => (
              <Reveal key={value.title}>
                <article className="h-full rounded-2xl border border-char/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(52,55,59,.08)]">
                  <span className="font-display text-[11px] font-bold text-lime-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-6 font-display text-[18px] font-bold tracking-[-.35px] text-ink">
                    {value.title}
                  </h4>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want to work with a team that gets the whole picture?"
        text="Tell us about your business. We'll show you exactly how we can help — brand, web, print and IT, under one roof."
        buttonLabel="Start a conversation"
      />
    </main>
  );
}
