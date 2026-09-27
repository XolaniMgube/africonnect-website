import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { PORTFOLIO, SERVICE_GROUPS, deliverablesOf } from "@/lib/content";

const DOTS = {
  lime: "bg-lime-2",
  orange: "bg-[#f0a35b]",
  brand: "bg-brand",
  char: "bg-[#9d8cff]",
} as const;

export function generateStaticParams() {
  return PORTFOLIO.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO.find((item) => item.slug === slug);
  if (!project) return { title: "Project — AfriConnect" };
  return { title: `${project.name} — AfriConnect`, description: project.blurb };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO.find((item) => item.slug === slug);
  if (!project) notFound();
  const deliverables = deliverablesOf(project);

  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-24 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-28 -top-32 h-[600px] w-[600px] rounded-full bg-lime/10 blur-[135px]" />

        <div className="relative z-[3] border-y border-white/10 bg-black/10">
          <nav aria-label="Breadcrumb" className="mx-auto flex h-14 max-w-site items-center gap-2.5 overflow-hidden px-[30px] font-display text-[11px] font-semibold">
            <Link href="/" className="shrink-0 text-white/35 transition-colors hover:text-lime">Home</Link>
            <span className="text-white/18">/</span>
            <Link href="/portfolio" className="shrink-0 text-white/55 transition-colors hover:text-lime">Portfolio</Link>
            <span className="text-white/18">/</span>
            <span className="truncate text-lime">{project.name}</span>
          </nav>
        </div>

        <div className="relative z-[2] mx-auto grid max-w-site items-center gap-10 px-[30px] py-12 sm:py-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:py-20">
          <Reveal>
            <h1 className="max-w-[590px] font-display text-[clamp(40px,10.8vw,64px)] font-extrabold leading-[.98] tracking-[-2px] text-white sm:tracking-[-2.5px]">{project.name}</h1>
            <p className="mt-5 max-w-[480px] text-[clamp(16px,1.6vw,18px)] leading-relaxed text-white/62">{project.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[...deliverables.map((item) => item.cat), project.year].map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/[.04] px-3.5 py-2 font-display text-[10px] font-semibold uppercase tracking-[.8px] text-white/55">{item}</span>
              ))}
            </div>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-2.5 rounded-lg bg-lime px-[26px] py-[14px] font-display text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.28)]">
                Visit website <span aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
              </a>
            )}
          </Reveal>

          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/15 bg-char shadow-[0_35px_90px_rgba(0,0,0,.34)]">
              {project.image && project.imageAlt && (
                <Image src={project.image} alt={project.imageAlt} fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-center" />
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-2 py-16 md:py-24">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:gap-16">
            <div>
              <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-olive">Overview</span>
              <p className="mt-4 max-w-[560px] font-display text-[clamp(20px,2.2vw,26px)] font-semibold leading-snug tracking-[-.5px] text-ink">{project.summary}</p>
            </div>
            <div>
              <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-olive">What we did</span>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.scope.map((item) => (
                  <li key={item} className="rounded-full border border-char/10 bg-white px-4 py-2 text-[13.5px] font-medium text-char">{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          {deliverables.length > 1 && (
            <Reveal className="mt-14 grid gap-7 md:mt-16 md:grid-cols-2 lg:gap-8">
              {deliverables.map((item) => {
                const group = SERVICE_GROUPS.find((entry) => entry.id === item.service);
                return (
                  <figure key={item.image} className="rounded-[22px] border border-char/10 bg-white p-2 shadow-[0_10px_28px_rgba(52,55,59,.05)]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-char">
                      <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-center" />
                    </div>
                    <figcaption className="flex items-center gap-2 px-4 pb-3 pt-4 font-display text-[10.5px] font-semibold uppercase tracking-[.9px] text-muted">
                      <i className={`h-1.5 w-1.5 rounded-full ${DOTS[group?.accent ?? "lime"]}`} />
                      {item.cat}
                    </figcaption>
                  </figure>
                );
              })}
            </Reveal>
          )}

          <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-char/10 pt-8">
            <Link href="/portfolio" className="group inline-flex items-center gap-2 font-display text-[14px] font-semibold text-char transition-colors hover:text-olive">
              <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" /> All projects
            </Link>
            <Link href="/contact#project-brief" className="group inline-flex items-center gap-2 font-display text-[14px] font-semibold text-olive">
              Start a similar project <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA title="Have something like this in mind?" text="Tell us what you need and we'll take it from there." buttonLabel="Start your project" />
    </main>
  );
}
