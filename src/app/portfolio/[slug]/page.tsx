import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Arrow from "@/components/Arrow";
import { PORTFOLIO } from "@/lib/content";

export function generateStaticParams() {
  return PORTFOLIO.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO.find((p) => p.slug === slug);
  if (!project) return { title: "Project — AfriConnect" };
  return {
    title: `${project.name} — AfriConnect`,
    description: project.blurb,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PORTFOLIO.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <PageHeader
        tone="portfolio"
        eyebrow={project.cat}
        title={project.name}
        intro={project.blurb}
        crumbs={[
          { href: "/portfolio", label: "Portfolio" },
          { href: `/portfolio/${project.slug}`, label: project.name },
        ]}
      />

      <section className="py-[100px]">
        <div className="mx-auto max-w-site px-[30px]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
            {/* summary + what we did */}
            <Reveal>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
                <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                The brief
              </span>
              <h2 className="mb-6 font-display text-[clamp(26px,3.4vw,38px)] font-extrabold leading-[1.06] tracking-[-1.2px] text-ink">
                What we did for {project.name}.
              </h2>
              <p className="text-[17px] leading-relaxed text-muted">
                {project.summary}
              </p>

              <h3 className="mb-4 mt-10 font-display text-[15px] font-semibold uppercase tracking-[1px] text-ink">
                Scope of work
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15.5px] text-char"
                  >
                    <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-lime">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="#1A1C1F"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2.5 rounded-lg bg-char px-[26px] py-[14px] font-display text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(52,55,59,.25)]"
                >
                  Open live website
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </Reveal>

            {/* facts panel */}
            <Reveal>
              <div className="rounded-2xl border border-[var(--line)] bg-paper-2 p-8">
                <dl className="space-y-5">
                  <div>
                    <dt className="font-display text-[12.5px] font-semibold uppercase tracking-[1px] text-muted">
                      Client
                    </dt>
                    <dd className="mt-1 text-[16px] font-medium text-ink">
                      {project.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[12.5px] font-semibold uppercase tracking-[1px] text-muted">
                      Division
                    </dt>
                    <dd className="mt-1 text-[16px] font-medium text-ink">
                      {project.cat}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-display text-[12.5px] font-semibold uppercase tracking-[1px] text-muted">
                      Year
                    </dt>
                    <dd className="mt-1 text-[16px] font-medium text-ink">
                      {project.year}
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          {/* screenshots — styled placeholders until real images are added */}
          <Reveal className="mt-20">
            <h3 className="mb-6 font-display text-[15px] font-semibold uppercase tracking-[1px] text-ink">
              A look at the work
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`relative ${
                    i === 0 ? "sm:col-span-2 sm:aspect-[2/1]" : "aspect-[4/3]"
                  } overflow-hidden rounded-2xl border border-[var(--line)] bg-gradient-to-br ${project.bg}`}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="absolute inset-0 grid place-items-center font-display text-[20px] font-extrabold tracking-[1px] text-white/20">
                    {project.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-16 border-t border-[var(--line)] pt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-display text-[15px] font-semibold text-char transition-colors hover:text-olive"
            >
              <Arrow className="rotate-180" />
              Back to all projects
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Want results like this for your business?"
        text="Tell us what you need — brand, website, print or IT — and we'll put together a plan and a price."
        buttonLabel="Start your project"
      />
    </main>
  );
}
