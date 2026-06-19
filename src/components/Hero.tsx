import Globe from "./Globe";
import Arrow from "./Arrow";

const STATS = [
  { n: "7 yrs", l: "In business" },
  { n: "20+", l: "Specialist services" },
  { n: "4", l: "Divisions, one roof" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-hero-dark pb-12 pt-24 text-white lg:pb-0 lg:pt-20">
      {/* dot texture */}
      <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-60" />
      {/* glows */}
      <div
        className="pointer-events-none absolute -right-10 -top-24 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(163,217,85,.4), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-36 -left-20 h-[420px] w-[420px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,159,224,.28), transparent 70%)",
        }}
      />

      {/* mobile: globe sits behind the text as a faint backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] grid scale-125 place-items-center opacity-[0.22] lg:hidden"
        aria-hidden
      >
        <Globe bare />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-site px-[30px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <span className="flex gap-[3px]">
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
              Your Best Solution · Est. 2018
            </span>

            <h1 className="font-display text-[clamp(44px,6.5vw,76px)] font-extrabold leading-[.98] tracking-[-2.5px] text-white">
              Everything your business needs,{" "}
              <span className="relative whitespace-nowrap text-lime">
                connected.
                <span
                  className="absolute inset-x-0 bottom-1.5 -z-10 h-3.5 rounded-sm bg-lime opacity-20"
                  aria-hidden
                />
              </span>
            </h1>

            <p className="my-9 max-w-[470px] text-[18.5px] text-white/70">
              Design, web, print and IT — built by one team in Vosloorus. We
              connect the dots between your brand, your website and the systems
              that keep you trading.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-lg bg-lime px-[30px] py-[15px] font-display text-[15px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.4)]"
              >
                Start a project
                <Arrow stroke="#1A1C1F" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 font-display text-[15px] font-semibold text-white"
              >
                See our work
                <Arrow
                  stroke="#fff"
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* desktop: globe in its own column */}
          <div className="hidden place-items-center lg:grid">
            <Globe />
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div className="relative z-[2] mt-12 lg:absolute lg:inset-x-0 lg:bottom-8 lg:mt-0">
        <div className="mx-auto flex max-w-site flex-wrap items-center gap-x-10 gap-y-4 border-t border-[var(--line-dk)] px-[30px] pt-6">
          {STATS.map((s) => (
            <div key={s.l} className="flex items-baseline gap-2.5">
              <span className="font-display text-[26px] font-bold text-white">
                {s.n}
              </span>
              <span className="text-[13.5px] text-white/55">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
