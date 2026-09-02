import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import ServicesExplorer from "@/components/ServicesExplorer";
import ServicesHeroVisual from "@/components/ServicesHeroVisual";

export const metadata: Metadata = {
  title: "Services — AfriConnect",
  description:
    "Brand and design, print and signage, websites and e-commerce, and business systems — delivered by one connected team.",
};

const PROOF = [
  { value: "One brief", label: "A clear starting point" },
  { value: "Four disciplines", label: "Connected when the work needs it" },
  { value: "One team", label: "Accountable from start to finish" },
];

const OUTCOMES = [
  {
    number: "01",
    title: "Launch something new",
    text: "Build a credible business presence from the ground up, without coordinating separate suppliers.",
    services: ["Brand identity", "Company registration", "Print essentials", "Website & email"],
    accent: "text-lime",
    line: "bg-lime",
  },
  {
    number: "02",
    title: "Grow visibility and sales",
    text: "Connect the campaign, physical presence and digital journey so customers see one clear business.",
    services: ["Campaign creative", "Marketing print", "Signage", "E-commerce & landing pages"],
    accent: "text-[#f0a35b]",
    line: "bg-[#f0a35b]",
  },
  {
    number: "03",
    title: "Make the work run better",
    text: "Replace repetitive admin and disconnected information with tools shaped around your operation.",
    services: ["Custom systems", "Portals & dashboards", "Workflow tools", "Ongoing support"],
    accent: "text-brand",
    line: "bg-brand",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Understand",
    text: "We begin with the business need, the audience and the result the work must create.",
  },
  {
    number: "02",
    title: "Shape",
    text: "We recommend the right mix of services, scope and priorities—nothing added for show.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "The relevant specialists work from one brief, with clear ownership and communication.",
  },
  {
    number: "04",
    title: "Support",
    text: "We remain available after delivery for updates, maintenance and the next stage of growth.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-20 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-24 -top-32 h-[620px] w-[620px] rounded-full bg-brand/15 blur-[135px]" />
        <div className="pointer-events-none absolute -bottom-44 -left-28 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[125px]" />

        <div className="relative z-[2] mx-auto grid min-h-[700px] max-w-site items-center gap-16 px-[30px] py-[86px] lg:grid-cols-[.98fr_1.02fr] lg:py-[105px]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <span className="flex gap-[3px]" aria-hidden>
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
              Brand · Print · Web · Systems
            </span>

            <h1 className="max-w-[680px] font-display text-[clamp(44px,6vw,70px)] font-extrabold leading-[.98] tracking-[-2.5px] text-white">
              The right service. <span className="text-lime">Connected</span>{" "}
              to the bigger picture.
            </h1>

            <p className="mt-7 max-w-[610px] text-[clamp(17px,1.8vw,19px)] leading-relaxed text-white/65">
              From a first logo or print run to an online store or internal
              system, we shape the right mix around what you are trying to
              achieve.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#service-explorer"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-lime px-[28px] py-[15px] font-display text-[15px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.28)]"
              >
                Explore services
                <Arrow stroke="#1A1C1F" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-2 py-3 font-display text-[15px] font-semibold text-white"
              >
                Discuss a project
                <Arrow stroke="#fff" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="hidden pb-6 lg:block lg:pl-5">
            <ServicesHeroVisual />
          </Reveal>
        </div>

        <div className="relative z-[2] border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-site divide-y divide-white/10 px-[30px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {PROOF.map((item, index) => (
              <div
                key={item.value}
                className={`py-6 sm:px-7 ${index === 0 ? "sm:pl-0" : ""}`}
              >
                <p className="font-display text-[15px] font-bold text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-[12.5px] text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="service-explorer"
        className="relative overflow-hidden bg-paper-2 py-[110px] md:py-[130px]"
      >
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="pointer-events-none absolute -right-32 top-20 h-[460px] w-[460px] rounded-full bg-lime/10 blur-[120px]" />

        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 grid gap-7 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
                <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                Explore the disciplines
              </span>
              <h2 className="max-w-[690px] font-display text-[clamp(36px,4.8vw,56px)] font-extrabold leading-[1.02] tracking-[-1.8px] text-ink">
                Start with what you need.
              </h2>
            </div>
            <p className="max-w-[500px] text-[16px] leading-relaxed text-muted lg:justify-self-end">
              Choose a service area to see what it can include. If your project
              crosses disciplines, we connect the right people around one brief.
            </p>
          </Reveal>

          <Reveal>
            <ServicesExplorer />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-char-2 py-[110px] text-white md:py-[130px]">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
        <div className="pointer-events-none absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[135px]" />

        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 grid gap-7 lg:grid-cols-[1fr_.78fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
                <i className="h-1.5 w-1.5 rounded-full bg-lime" />
                Built around outcomes
              </span>
              <h2 className="max-w-[760px] font-display text-[clamp(35px,4.8vw,54px)] font-extrabold leading-[1.02] tracking-[-1.75px] text-white">
                Most business problems cross more than one discipline.
              </h2>
            </div>
            <p className="max-w-[480px] text-[16px] leading-relaxed text-white/55 lg:justify-self-end">
              You can engage us for one service or bring us the whole problem.
              We recommend only the pieces that move the result forward.
            </p>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {OUTCOMES.map((outcome) => (
              <Reveal key={outcome.title}>
                <article className="group flex h-full min-h-[390px] flex-col rounded-[20px] border border-white/10 bg-char p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_22px_50px_rgba(0,0,0,.22)] md:p-8">
                  <div className="flex items-center justify-between">
                    <span className={`font-display text-[11px] font-bold ${outcome.accent}`}>
                      {outcome.number}
                    </span>
                    <i className={`h-px w-8 ${outcome.line}`} />
                  </div>
                  <h3 className="mt-9 font-display text-[24px] font-bold tracking-[-.65px] text-white">
                    {outcome.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/55">
                    {outcome.text}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {outcome.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 bg-white/[.045] px-3 py-1.5 text-[11.5px] text-white/65"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 border-t border-white/10 pt-9">
            <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr] md:items-start">
              <div>
                <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-lime">
                  How the work moves
                </span>
                <h3 className="mt-3 font-display text-[27px] font-extrabold tracking-[-.8px] text-white">
                  Clear from brief to delivery.
                </h3>
              </div>
              <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
                {PROCESS.map((step, index) => (
                  <article
                    key={step.title}
                    className={`py-5 sm:px-5 sm:py-0 ${
                      index > 0 ? "border-t border-white/10 sm:border-l sm:border-t-0" : "sm:pl-0"
                    }`}
                  >
                    <span className="font-display text-[10px] font-bold text-lime">
                      {step.number}
                    </span>
                    <h4 className="mt-3 font-display text-[15px] font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-white/45">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Tell us what you need."
        text="One clear quote across every division — no surprises."
        buttonLabel="Request a quote"
      />
    </main>
  );
}
