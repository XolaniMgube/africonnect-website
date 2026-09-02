import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import { PORTFOLIO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio — AfriConnect",
  description:
    "Selected brand, website and print work delivered for real South African businesses.",
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Clear before clever",
    text: "Every decision starts with what the customer must understand, trust or do next.",
  },
  {
    number: "02",
    title: "Built for the real world",
    text: "The work is designed for the places it must perform—from a phone screen to a printed banner.",
  },
  {
    number: "03",
    title: "Consistent end to end",
    text: "Brand, production and technology remain connected so the final result feels like one business.",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-20 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-28 -top-36 h-[620px] w-[620px] rounded-full bg-lime/10 blur-[135px]" />
        <div className="pointer-events-none absolute -bottom-44 -left-24 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[125px]" />

        <div className="relative z-[2] mx-auto grid max-w-site items-center gap-16 px-[30px] py-[86px] lg:min-h-[700px] lg:grid-cols-[.92fr_1.08fr] lg:py-[105px]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <span className="flex gap-[3px]" aria-hidden>
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
              Selected work
            </span>
            <h1 className="max-w-[650px] font-display text-[clamp(44px,6vw,70px)] font-extrabold leading-[.98] tracking-[-2.5px] text-white">
              Built for real businesses. <span className="text-lime">Made to work.</span>
            </h1>
            <p className="mt-7 max-w-[590px] text-[clamp(17px,1.8vw,19px)] leading-relaxed text-white/65">
              A focused selection of identity, website and print work—each
              shaped around a real brief and a practical business outcome.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#selected-work"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-lime px-[28px] py-[15px] font-display text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.28)]"
              >
                View the work
                <Arrow stroke="#1A1C1F" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-2 py-3 font-display text-[15px] font-semibold text-white"
              >
                Start a project
                <Arrow stroke="#fff" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="hidden lg:block lg:pl-4">
            <div className="relative mx-auto grid h-[440px] max-w-[560px] grid-cols-[1.18fr_.82fr] grid-rows-2 gap-3 rounded-[26px] border border-white/12 bg-white/[.035] p-3 shadow-[0_35px_90px_rgba(0,0,0,.34)]">
              {PORTFOLIO.map((project, index) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className={`group relative overflow-hidden rounded-[18px] ${
                    index === 0 ? "row-span-2" : ""
                  }`}
                >
                  {project.image && project.imageAlt && (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-[9px] font-semibold uppercase tracking-[.9px] text-lime">
                      {project.cat}
                    </p>
                    <p className="mt-1 font-display text-[13px] font-bold text-white">
                      {project.name}
                    </p>
                  </div>
                </Link>
              ))}
              <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/15 bg-char px-4 py-3 shadow-xl">
                <p className="text-[10px] text-white/40">Selected</p>
                <p className="mt-0.5 font-display text-[12px] font-semibold text-white">
                  Three real project stories
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative z-[2] border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-site divide-y divide-white/10 px-[30px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["3 projects", "A deliberately focused selection"],
              ["3 disciplines", "Brand, web and print"],
              ["Real briefs", "Work created for active businesses"],
            ].map(([value, label], index) => (
              <div key={value} className={`py-6 sm:px-7 ${index === 0 ? "sm:pl-0" : ""}`}>
                <p className="font-display text-[15px] font-bold text-white">{value}</p>
                <p className="mt-1 text-[12.5px] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="relative overflow-hidden bg-paper-2 py-[110px] md:py-[130px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 grid gap-7 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
                <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                The project stories
              </span>
              <h2 className="max-w-[720px] font-display text-[clamp(36px,4.8vw,56px)] font-extrabold leading-[1.02] tracking-[-1.8px] text-ink">
                Three briefs. Three different outcomes.
              </h2>
            </div>
            <p className="max-w-[480px] text-[16px] leading-relaxed text-muted lg:justify-self-end">
              See the thinking, craft and practical scope behind each piece of
              work—not just the finished image.
            </p>
          </Reveal>
          <PortfolioGrid />
        </div>
      </section>

      <section className="relative overflow-hidden bg-char-2 py-[105px] text-white md:py-[120px]">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-12 max-w-[720px]">
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <i className="h-1.5 w-1.5 rounded-full bg-lime" />
              What connects the work
            </span>
            <h2 className="font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-white">
              Different outputs. The same standard.
            </h2>
          </Reveal>
          <div className="grid border-y border-white/10 md:grid-cols-3">
            {PRINCIPLES.map((item, index) => (
              <Reveal key={item.title}>
                <article className={`py-8 md:min-h-[220px] md:px-8 ${index > 0 ? "border-t border-white/10 md:border-l md:border-t-0" : "md:pl-0"}`}>
                  <span className="font-display text-[10px] font-bold text-lime">{item.number}</span>
                  <h3 className="mt-5 font-display text-[19px] font-bold text-white">{item.title}</h3>
                  <p className="mt-3 max-w-[340px] text-[14.5px] leading-relaxed text-white/50">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Your business could be next."
        text="Whether it's a logo, a full website or a printed campaign — let's build something that earns its place here."
        buttonLabel="Start your project"
      />
    </main>
  );
}
