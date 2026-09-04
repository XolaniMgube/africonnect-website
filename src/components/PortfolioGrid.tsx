import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO } from "@/lib/content";
import Arrow from "./Arrow";
import Reveal from "./Reveal";

const ACCENTS = [
  { text: "text-lime-2", line: "bg-lime-2", soft: "bg-[#eef6dd]" },
  { text: "text-brand", line: "bg-brand", soft: "bg-[#e6f1fb]" },
  { text: "text-[#d77c31]", line: "bg-[#f0a35b]", soft: "bg-[#fff1df]" },
];

export default function PortfolioGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {PORTFOLIO.map((project, index) => {
        const accent = ACCENTS[index];
        return (
          <Reveal key={project.slug}>
            <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-char/10 bg-white shadow-[0_12px_32px_rgba(52,55,59,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_52px_rgba(52,55,59,.12)]">
              <Link
                href={`/portfolio/${project.slug}`}
                className="relative block aspect-[4/3] overflow-hidden bg-char"
                aria-label={`View ${project.name} project`}
              >
                {project.image && project.imageAlt && (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-char/70 px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[.9px] text-white backdrop-blur-md">
                  <i className={`h-1.5 w-1.5 rounded-full ${accent.line}`} />
                  {project.cat}
                </div>
                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-char/70 px-3 py-1.5 font-display text-[10px] font-semibold text-white/75 backdrop-blur-md">
                  {project.year}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between gap-5">
                  <span className={`font-display text-[10px] font-bold ${accent.text}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <i className={`h-px w-8 ${accent.line}`} />
                </div>
                <h3 className="mt-6 font-display text-[23px] font-bold tracking-[-.6px] text-ink">
                  {project.name}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
                  {project.blurb}
                </p>
                <div className="mt-6 hidden flex-wrap gap-2 sm:flex">
                  {project.scope.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className={`rounded-full px-3 py-1.5 text-[11px] font-medium text-char/70 ${accent.soft}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className={`group/link mt-auto inline-flex items-center gap-2 pt-8 font-display text-[13.5px] font-semibold ${accent.text}`}
                >
                  View project
                  <Arrow className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
