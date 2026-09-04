import Link from "next/link";
import { PORTFOLIO } from "@/lib/content";
import Arrow from "./Arrow";
import Reveal from "./Reveal";
import WorkVisual from "./WorkVisual";

const SELECTED_SLUGS = [
  "sekgabe-turnkey",
  "mokaleng",
  "slogan-studio",
];

const selected = SELECTED_SLUGS.map((slug) =>
  PORTFOLIO.find((project) => project.slug === slug),
).filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-[130px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-7">
          <div className="max-w-[700px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              Selected work
            </span>
            <h2 className="font-display text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-ink">
              What we've done . . .
            </h2>
          </div>
          <Link
            href="/portfolio#selected-work"
            className="group inline-flex shrink-0 items-center gap-2 font-display text-[14.5px] font-semibold text-char focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-char"
          >
            View all projects
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="font-display text-[11px] font-semibold uppercase tracking-[1px] text-muted md:hidden">
            Swipe through selected work →
          </p>
        </Reveal>

        <div className="-mx-[30px] flex snap-x snap-mandatory scroll-px-[30px] gap-4 overflow-x-auto px-[30px] pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:gap-[22px] md:overflow-visible md:px-0 md:pb-0">
          {selected.map((project) => {
            const light = project.slug === "mokaleng";
            const darkVisual = Boolean(project.image) || !light;

            return (
              <Reveal key={project.slug} className="w-[84vw] max-w-[330px] shrink-0 snap-start md:w-auto md:max-w-none">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="work-card group flex flex-col overflow-hidden rounded-[22px] border border-[var(--line)] shadow-[0_14px_35px_rgba(52,55,59,.07)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_55px_rgba(52,55,59,.14)]"
                >
                  <div className="work-card-visual relative shrink-0 overflow-hidden">
                    <WorkVisual project={project} />
                    <div className="absolute inset-x-5 top-5 z-[3] flex items-center justify-between">
                      <span
                        className={`rounded-full border px-3 py-1.5 font-display text-[10.5px] font-semibold uppercase tracking-[1px] backdrop-blur-sm ${
                          darkVisual
                            ? "border-white/20 bg-black/25 text-white/80"
                            : "border-char/15 bg-paper/70 text-char"
                        }`}
                      >
                        {project.cat}
                      </span>
                      <span
                        className={`font-display text-[11px] font-semibold ${
                          darkVisual ? "text-white/65" : "text-char/60"
                        }`}
                      >
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`flex flex-1 flex-col p-6 sm:p-7 ${
                      light ? "bg-[#f0f2e9]" : "bg-char-2"
                    }`}
                  >
                    <h3
                      className={`font-display text-[22px] font-bold tracking-[-.5px] ${
                        light ? "text-ink" : "text-white"
                      }`}
                    >
                      {project.name}
                    </h3>
                    <p
                      className={`mt-2 text-[14px] leading-relaxed ${
                        light ? "text-muted" : "text-white/60"
                      }`}
                    >
                      {project.blurb}
                    </p>
                    <span
                      className={`mt-auto inline-flex items-center gap-2 pt-6 font-display text-[13.5px] font-semibold ${
                        light ? "text-olive" : "text-lime"
                      }`}
                    >
                      View project
                      <Arrow className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
