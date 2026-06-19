import { PROCESS } from "@/lib/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="pb-[120px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-char px-7 py-16 text-white md:px-14">
            <div className="dot-tex-light absolute inset-0 opacity-80" />
            <div className="relative z-[2]">
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
                <i className="h-1.5 w-1.5 rounded-full bg-lime" />
                How we work
              </span>
              <h2 className="max-w-[540px] font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.6px] text-white">
                A structured process, every single time.
              </h2>

              <div className="mt-11 grid gap-8 md:grid-cols-3">
                {PROCESS.map((p, i) => (
                  <div
                    key={p.title}
                    className={`border-t-2 pt-6 ${
                      i === 0 ? "border-lime" : "border-white/15"
                    }`}
                  >
                    <div className="font-display text-[13px] font-semibold tracking-[1px] text-lime">
                      {p.n}
                    </div>
                    <h4 className="my-2.5 font-display text-[20px] font-semibold">
                      {p.title}
                    </h4>
                    <p className="text-[14.5px] text-white/70">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
