import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/content";

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

  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-20 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-28 -top-32 h-[600px] w-[600px] rounded-full bg-lime/10 blur-[135px]" />

        <div className="relative z-[2] mx-auto grid max-w-site items-center gap-12 px-[30px] py-[82px] lg:min-h-[650px] lg:grid-cols-[.86fr_1.14fr] lg:gap-16 lg:py-[100px]">
          <Reveal>
            <Link href="/portfolio" className="group mb-8 inline-flex items-center gap-2 font-display text-[12px] font-semibold text-white/45 transition-colors hover:text-lime">
              <Arrow stroke="currentColor" className="rotate-180 transition-transform group-hover:-translate-x-1" />
              All projects
            </Link>
            <span className="block font-display text-[11px] font-semibold uppercase tracking-[1.4px] text-lime">{project.cat} · {project.year}</span>
            <h1 className="mt-5 max-w-[590px] font-display text-[clamp(44px,6vw,70px)] font-extrabold leading-[.98] tracking-[-2.5px] text-white">{project.name}</h1>
            <p className="mt-7 max-w-[570px] text-[clamp(17px,1.8vw,19px)] leading-relaxed text-white/62">{project.blurb}</p>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/15 bg-char shadow-[0_35px_90px_rgba(0,0,0,.34)]">
              {project.image && project.imageAlt && (
                <Image src={project.image} alt={project.imageAlt} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover object-center" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-char/80 px-4 py-2 font-display text-[10px] font-semibold uppercase tracking-[1px] text-white backdrop-blur-md">AfriConnect selected work</span>
            </div>
          </Reveal>
        </div>

        <div className="relative z-[2] border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-site divide-y divide-white/10 px-[30px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[["Client", project.name], ["Discipline", project.cat], ["Delivered", project.year]].map(([label, value], index) => (
              <div key={label} className={`py-6 sm:px-7 ${index === 0 ? "sm:pl-0" : ""}`}>
                <p className="font-display text-[10px] font-semibold uppercase tracking-[1px] text-white/35">{label}</p>
                <p className="mt-1.5 font-display text-[15px] font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper-2 py-[110px] md:py-[130px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
            <Reveal>
              <div className="rounded-[22px] border border-char/10 bg-white p-8 shadow-[0_16px_42px_rgba(52,55,59,.065)] md:p-11">
                <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-olive">The brief</span>
                <h2 className="mt-5 max-w-[620px] font-display text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.03] tracking-[-1.5px] text-ink">Work shaped around the outcome.</h2>
                <p className="mt-7 text-[16.5px] leading-[1.75] text-muted">{project.summary}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="group mt-9 inline-flex items-center gap-2.5 rounded-lg bg-char px-[24px] py-[14px] font-display text-[14px] font-semibold text-white transition-all hover:-translate-y-0.5">
                    Open live website <span aria-hidden className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                )}
              </div>
            </Reveal>

            <Reveal>
              <aside className="overflow-hidden rounded-[22px] border border-char/10 bg-white shadow-[0_16px_42px_rgba(52,55,59,.065)]">
                <div className="border-b border-char/10 p-8 md:p-9">
                  <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-olive">Scope of work</span>
                  <h3 className="mt-4 font-display text-[25px] font-bold tracking-[-.7px] text-ink">What the project included.</h3>
                </div>
                <ol>
                  {project.scope.map((item, index) => (
                    <li key={item} className={`grid grid-cols-[42px_1fr] items-center gap-3 p-6 md:px-9 ${index > 0 ? "border-t border-char/10" : ""}`}>
                      <span className="font-display text-[10px] font-bold text-lime-2">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-[15px] font-medium text-char">{item}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            </Reveal>
          </div>

          <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-char/10 pt-8">
            <Link href="/portfolio" className="group inline-flex items-center gap-2 font-display text-[14px] font-semibold text-char transition-colors hover:text-olive">
              <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" /> Back to selected work
            </Link>
            <Link href="/contact" className="group inline-flex items-center gap-2 font-display text-[14px] font-semibold text-olive">
              Discuss a similar project <Arrow className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA title="Have something like this in mind?" text="Tell us the outcome you need. We'll connect the right creative, production and technical work around it." buttonLabel="Start your project" />
    </main>
  );
}
