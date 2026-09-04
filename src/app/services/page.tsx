import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import PricingExplorer from "@/components/PricingExplorer";
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

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-24 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-24 -top-32 h-[620px] w-[620px] rounded-full bg-brand/15 blur-[135px]" />
        <div className="pointer-events-none absolute -bottom-44 -left-28 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[125px]" />

        <div className="relative z-[2] mx-auto grid max-w-site items-center gap-12 px-[30px] py-14 sm:py-[86px] lg:min-h-[700px] lg:grid-cols-[.98fr_1.02fr] lg:gap-16 lg:py-[105px]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <span className="flex gap-[3px]" aria-hidden>
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
              Brand · Print · Web · Systems
            </span>

            <h1 className="max-w-[680px] font-display text-[clamp(40px,10.8vw,70px)] font-extrabold leading-[.98] tracking-[-2px] text-white sm:tracking-[-2.5px]">
              Services we are experts in <span className="text-lime">.</span>{" "}
            </h1>

            <p className="mt-7 max-w-[610px] text-[clamp(17px,1.8vw,19px)] leading-relaxed text-white/65">
              From a first logo or print run to an online store or internal
              system, we shape the right mix around what you are trying to
              achieve.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="#service-explorer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-lime px-[28px] py-[15px] font-display text-[15px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.28)]"
              >
                Explore services
                <Arrow stroke="#1A1C1F" className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact#project-brief"
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/15 bg-white/[.04] px-5 py-3.5 font-display text-[15px] font-semibold text-white sm:border-0 sm:bg-transparent sm:px-2 sm:py-3"
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

        {/* <div className="relative z-[2] border-t border-white/10 bg-black/10">
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
        </div> */}
      </section>

      <section
        id="service-explorer"
        className="relative overflow-hidden bg-paper-2 py-20 md:py-[130px]"
      >
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="pointer-events-none absolute -right-32 top-20 h-[460px] w-[460px] rounded-full bg-lime/10 blur-[120px]" />

        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-10 grid gap-7 md:mb-14 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
                <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                Explore the disciplines
              </span>
              <h2 className="max-w-[690px] font-display text-[clamp(36px,4.8vw,56px)] font-extrabold leading-[1.02] tracking-[-1.8px] text-ink">
                How can we be of service.
              </h2>
            </div>
            {/* <p className="max-w-[500px] text-[16px] leading-relaxed text-muted lg:justify-self-end">
              Choose a service area to see what it can include. If your project
              crosses disciplines, we connect the right people around one brief.
            </p> */}
          </Reveal>

          <Reveal>
            <ServicesExplorer />
          </Reveal>
        </div>
      </section>

      {/* <section id="pricing" className="relative overflow-hidden bg-char-2 py-[110px] text-white md:py-[130px]">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
        <div className="pointer-events-none absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[135px]" />
        <div className="pointer-events-none absolute -bottom-48 -right-36 h-[520px] w-[520px] rounded-full bg-brand/10 blur-[135px]" />

        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-14 grid gap-7 lg:grid-cols-[1fr_.78fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
                <i className="h-1.5 w-1.5 rounded-full bg-lime" />
                Indicative pricing
              </span>
              <h2 className="max-w-[760px] font-display text-[clamp(35px,4.8vw,54px)] font-extrabold leading-[1.02] tracking-[-1.75px] text-white">
                Clear starting points.
              </h2>
            </div>
            <p className="max-w-[480px] text-[16px] leading-relaxed text-white/55 lg:justify-self-end">
              Select a category to compare its services and expected price
              ranges. These placeholders will be replaced by our final rate card.
            </p>
          </Reveal>

          <Reveal>
            <PricingExplorer />
          </Reveal>
        </div>
      </section> */}

      <CTA
        title="Tell us what you need."
        text="One clear quote across every division — no surprises."
        buttonLabel="Request a quote"
      />
    </main>
  );
}
