import { WORK } from "@/lib/content";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section id="work" className="pb-[120px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal className="mx-auto mb-16 max-w-[660px] text-center">
          <span className="mb-[18px] inline-flex items-center justify-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
            <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
            Selected work
          </span>
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.6px] text-ink">
            Real projects. Real businesses.
          </h2>
          <p className="mt-5 text-[17.5px] text-muted">
            A snapshot of the brands we&apos;ve built, designed and printed for
            across Gauteng.
          </p>
        </Reveal>

        <div className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((w) => (
            <Reveal key={w.name}>
              <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl border border-[var(--line)]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${w.bg} transition-transform duration-500 group-hover:scale-105`}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                </div>
                <div className="absolute inset-0 z-[1] grid place-items-center font-display text-[24px] font-extrabold tracking-[1px] text-white/20">
                  {w.label}
                </div>
                <div className="absolute inset-0 z-[2] flex flex-col justify-end bg-gradient-to-t from-[rgba(26,28,31,.88)] to-transparent to-60% p-[26px]">
                  <span className="font-display text-[11.5px] font-semibold uppercase tracking-[1px] text-lime">
                    {w.cat}
                  </span>
                  <h4 className="mt-1.5 font-display text-[21px] font-semibold text-white">
                    {w.name}
                  </h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
