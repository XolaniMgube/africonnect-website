import Link from "next/link";
import Arrow from "./Arrow";
import Reveal from "./Reveal";
import TechnologyVisual from "./TechnologyVisual";

const POINTS = [
  "Bring orders, projects and support into one workflow",
  "Give the team one reliable source of information",
  "Design the system around the way the business operates",
];

export default function OperationsShowcase() {
  return (
    <section className="relative overflow-hidden bg-char-2 py-[110px] text-white md:py-[130px]">
      <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,159,224,.19), transparent 70%)",
        }}
      />

      <div className="relative z-[2] mx-auto grid max-w-site items-center gap-16 px-[30px] lg:grid-cols-[.78fr_1.22fr]">
        <Reveal>
          <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
            <i className="h-1.5 w-1.5 rounded-full bg-lime" />
            Connected operations
          </span>
          <h2 className="font-display text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-white">
            One view of the work that keeps business moving.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/60">
            A useful system does more than look good. It connects information,
            removes repetitive work and makes the next action obvious to the
            people using it.
          </p>

          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[14.5px] text-white/68">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime/15 text-[11px] font-bold text-lime">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Link
            href="/services#build"
            className="group mt-9 inline-flex items-center gap-2.5 font-display text-[15px] font-semibold text-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          >
            Explore web & systems
            <Arrow className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal className="pb-6 pt-2 lg:pl-4">
          <TechnologyVisual />
          <p className="mt-9 text-center text-[11.5px] text-white/35">
            Illustrative interface — every system is shaped around its workflow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
