import type { Metadata } from "next";
import AboutPageVisual from "@/components/AboutPageVisual";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { ABOUT, STATS, TEAM, VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — AfriConnect",
  description:
    "Meet the connected team behind AfriConnect's brand, print, website and business-system work.",
};

const STORY_CHAPTERS = ["The problem", "The decision", "Where we are now"];

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
      <section className="relative overflow-hidden bg-char-2 py-[100px] text-white md:py-[120px]">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
        <div className="pointer-events-none absolute -left-32 -top-40 h-[560px] w-[560px] rounded-full bg-lime/10 blur-[130px]" />
        <div className="pointer-events-none absolute -right-32 bottom-[-180px] h-[520px] w-[520px] rounded-full bg-brand/10 blur-[140px]" />

        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <div className="grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
                <i className="h-1.5 w-1.5 rounded-full bg-lime" />
                About AfriConnect
              </span>
              <h1 className="about-page-title max-w-[650px] font-display font-extrabold text-white">
                The team behind the whole picture.
              </h1>
              <p className="mt-7 max-w-[590px] text-[18px] leading-relaxed text-white/65">
                Brand, print, websites and business systems—planned and
                delivered by one connected team in Vosloorus.
              </p>

              <div className="mt-9 flex flex-wrap gap-2.5">
                {["One brief", "One team", "One point of contact"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[12.5px] text-white/65"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </Reveal>

            <Reveal className="lg:pl-4">
              <AboutPageVisual image={ABOUT.image} alt={ABOUT.imageAlt} />
            </Reveal>
          </div>

          <Reveal className="mt-20 border-y border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <div
                  key={stat.l}
                  className={`py-7 pr-5 ${
                    index % 2 === 1 ? "pl-5" : ""
                  } ${index > 0 ? "lg:border-l lg:border-white/10 lg:pl-7" : ""}`}
                >
                  <div className="font-display text-[30px] font-extrabold tracking-[-1px] text-white">
                    {stat.n}
                  </div>
                  <div className="mt-1 text-[12.5px] text-white/40">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* origin story */}
      <section className="relative overflow-hidden bg-paper py-[110px] md:py-[130px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative z-[2] mx-auto grid max-w-site gap-14 px-[30px] lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              Our story
            </span>
            <h2 className="font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-ink">
              Built because the hand-offs weren&apos;t working.
            </h2>
            <p className="mt-6 max-w-[440px] text-[16.5px] leading-relaxed text-muted">
              Businesses deserve one partner who understands how every piece
              connects—and takes responsibility for the result.
            </p>
          </Reveal>

          <div>
            {ABOUT.story.map((paragraph, index) => (
              <Reveal key={STORY_CHAPTERS[index]}>
                <article className="grid gap-4 border-t border-char/12 py-8 sm:grid-cols-[115px_1fr] sm:gap-7">
                  <div>
                    <span className="font-display text-[11px] font-bold uppercase tracking-[1px] text-lime-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1.5 font-display text-[13px] font-semibold text-char">
                      {STORY_CHAPTERS[index]}
                    </h3>
                  </div>
                  <p className="text-[17px] leading-[1.75] text-muted">
                    {paragraph}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* purpose and principles */}
      <section className="bg-paper-2 py-[110px] md:py-[130px]">
        <div className="mx-auto max-w-site px-[30px]">
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

      {/* team */}
      <section className="bg-paper py-[110px] md:py-[130px]">
        <div className="mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 grid gap-7 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
                <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                The team
              </span>
              <h2 className="max-w-[650px] font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-ink">
                Different strengths. Shared responsibility.
              </h2>
            </div>
            <p className="max-w-[490px] text-[16.5px] leading-relaxed text-muted lg:justify-self-end">
              A compact team working across creative, production, technology
              and operations—with every discipline connected from the start.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, index) => {
              const initials = member.name
                .split(" ")
                .map((name) => name[0])
                .join("");

              return (
                <Reveal key={member.name}>
                  <article className="group h-full rounded-[20px] border border-char/10 bg-paper-2 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-paper hover:shadow-[0_18px_40px_rgba(52,55,59,.09)]">
                    <div className="flex items-start justify-between">
                      <span
                        className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${member.grad} font-display text-[13px] font-bold text-white shadow-sm`}
                      >
                        {initials}
                      </span>
                      <span className="font-display text-[11px] font-semibold text-char/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-[20px] font-bold tracking-[-.4px] text-ink">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 font-display text-[11.5px] font-semibold uppercase tracking-[.8px] text-olive">
                      {member.role}
                    </p>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                      {member.bio}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-14">
            <div className="flex flex-col gap-3 border-t border-char/10 pt-7 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
              <span>Working from Vosloorus, Gauteng</span>
              <span className="font-display font-semibold text-olive">
                Brand · Print · Web · Systems
              </span>
            </div>
          </Reveal>
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
