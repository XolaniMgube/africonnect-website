import Link from "next/link";
import Arrow from "./Arrow";
import AboutPageVisual from "./AboutPageVisual";
import Reveal from "./Reveal";
import { ABOUT } from "@/lib/content";

const STORY_POINTS = [
  "Founded in Vosloorus in 2018",
  "Designers, print specialists, developers and advisors",
  "One brief, one team and one point of contact",
];

export default function AboutShowcase() {
  return (
    <section
      id="about-preview"
      className="relative overflow-hidden bg-char-2 py-20 text-white md:py-[130px]"
    >
      <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(163,217,85,.16), transparent 70%)",
        }}
      />

      <div className="relative z-[2] mx-auto grid max-w-site items-center gap-10 px-[30px] lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
            <i className="h-1.5 w-1.5 rounded-full bg-lime" />
            About AfriConnect
          </span>
          <h2 className="font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-white">
            Who we are . . .
          </h2>
          <p className="mt-6 max-w-[560px] text-[15.5px] leading-relaxed text-white/65 sm:text-[17px]">
            AfriConnect began in 2018, shaped by young Black founders from Vosloorus and a firsthand view of the market: ambitious people and businesses were not short of ideas—they needed dependable support to bring them to life.
          </p>

          <ul className="mt-8 space-y-4">
            {STORY_POINTS.map((point, index) => (
              <li
                key={point}
                className={`items-start gap-3 text-[14.5px] text-white/75 ${index === 2 ? "hidden sm:flex" : "flex"}`}
              >
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime/15 text-[11px] font-bold text-lime">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-2.5 font-display text-[15px] font-semibold text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            Meet AfriConnect
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal className="pt-2 sm:pb-6 lg:pl-4">
          <AboutPageVisual image={ABOUT.image} alt={ABOUT.imageAlt} />
        </Reveal>
      </div>
    </section>
  );
}
