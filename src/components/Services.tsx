import { SERVICES } from "@/lib/content";
import Reveal from "./Reveal";
import Arrow from "./Arrow";

export default function Services() {
  return (
    <section id="services" className="py-[120px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal className="mb-16 max-w-[660px]">
          <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
            <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
            What we do
          </span>
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.6px] text-ink">
            One team. Three ways we move you forward.
          </h2>
          <p className="mt-5 text-[17.5px] text-muted">
            You don&apos;t need five different suppliers. Everything we do falls
            into three simple areas — so you always know exactly who to call.
          </p>
        </Reveal>

        <div>
          {SERVICES.map((s, i) => {
            const even = i % 2 === 1;
            return (
              <Reveal key={s.name}>
                <div className="group grid grid-cols-1 items-start gap-9 border-t border-[var(--line)] py-[42px] transition-all duration-300 last:border-b hover:pl-3 md:grid-cols-[90px_1fr_1.1fr]">
                  <div
                    className={`pt-1.5 font-display text-[15px] font-bold ${
                      even ? "text-brand" : "text-lime-2"
                    }`}
                  >
                    {s.num}
                  </div>
                  <div>
                    <h3 className="mb-2.5 flex items-center gap-3.5 font-display text-[30px] font-bold tracking-[-0.8px]">
                      {s.name}
                      <span className="opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                        <Arrow
                          size={22}
                          stroke={even ? "#3B9FE0" : "#8FC93A"}
                        />
                      </span>
                    </h3>
                    <p className="max-w-[300px] text-[16px] text-muted">
                      {s.blurb}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-[7px] border border-[var(--line)] bg-paper-2 px-[15px] py-[9px] text-[14px] font-medium text-char transition-colors ${
                          even
                            ? "hover:border-brand hover:bg-brand hover:text-white"
                            : "hover:border-lime hover:bg-lime hover:text-ink"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
