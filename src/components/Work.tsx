import Link from "next/link";
import { PORTFOLIO } from "@/lib/content";
import Arrow from "./Arrow";
import Reveal from "./Reveal";

const SELECTED_SLUGS = [
  "lavido-auto-parts",
  "zimazisa-construction",
  "zulu-security-force",
];

const selected = SELECTED_SLUGS.map((slug) =>
  PORTFOLIO.find((project) => project.slug === slug),
).filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function Work() {
  return (
    <section id="work" className="pb-[110px] md:pb-[130px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[700px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              Selected work
            </span>
            <h2 className="font-display text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-ink">
              Built for real businesses, not imaginary briefs.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex shrink-0 items-center gap-2 font-display text-[14.5px] font-semibold text-char focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-char"
          >
            View all projects
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid gap-[22px] md:grid-cols-3">
          {selected.map((project, index) => (
            <Reveal key={project.slug}>
              <Link
                href={`/portfolio/${project.slug}`}
                className={`group relative block overflow-hidden rounded-[22px] border border-[var(--line)] ${
                  index === 0 ? "aspect-[.9] md:aspect-[.78]" : "aspect-[.9] md:mt-12 md:aspect-[.78]"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.bg} transition-transform duration-500 group-hover:scale-105`}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                </div>

                <div className="absolute inset-x-7 top-7 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/15 px-3 py-1.5 font-display text-[10.5px] font-semibold uppercase tracking-[1px] text-white/70 backdrop-blur-sm">
                    {project.cat}
                  </span>
                  <span className="font-display text-[11px] font-semibold text-white/50">
                    {project.year}
                  </span>
                </div>

                <div className="absolute inset-0 grid place-items-center font-display text-[24px] font-extrabold tracking-[1px] text-white/20">
                  {project.label}
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(20,22,24,.96)] via-[rgba(20,22,24,.8)] to-transparent px-7 pb-7 pt-24">
                  <h3 className="font-display text-[22px] font-bold tracking-[-.5px] text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-white/60">
                    {project.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-[13.5px] font-semibold text-lime">
                    View project
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
