import Link from "next/link";
import { SERVICES } from "@/lib/content";
import Reveal from "./Reveal";
import Arrow from "./Arrow";

const ACCENT = [
  {
    eyebrow: "text-olive",
    tile: "from-lime-2 to-olive",
    iconStroke: "#5E7327",
    glow: "rgba(163,217,85,.22)",
    bar: "bg-lime-2",
    cardHover:
      "hover:border-lime-2 hover:shadow-[0_20px_44px_rgba(143,201,58,.18)]",
    tag: "hover:border-lime hover:bg-lime hover:text-ink",
  },
  {
    eyebrow: "text-brand",
    tile: "from-brand to-[#2c6fa0]",
    iconStroke: "#2c6fa0",
    glow: "rgba(59,159,224,.20)",
    bar: "bg-brand",
    cardHover:
      "hover:border-brand hover:shadow-[0_20px_44px_rgba(59,159,224,.18)]",
    tag: "hover:border-brand hover:bg-brand hover:text-white",
  },
];

function GroupIcon({ i, stroke }: { i: number; stroke: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (i === 0)
    // Build — monitor / code
    return (
      <svg {...common}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M8.5 8L6.5 10l2 2M15.5 8l2 2-2 2" />
      </svg>
    );
  if (i === 1)
    // Brand — sparkles
    return (
      <svg {...common}>
        <path d="M13 3l2.2 5.8L21 11l-5.8 2.2L13 19l-2.2-5.8L5 11l5.8-2.2L13 3z" />
        <path d="M5 3v3M3.5 4.5h3M6 18v2.5M4.75 19.25h2.5" />
      </svg>
    );
  // Run — gear
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-[120px]">
      <div className="dot-tex pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -left-24 top-20 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(163,217,85,.14), transparent 70%)",
        }}
      />
      <div className="relative z-[2] mx-auto max-w-site px-[30px]">
        <Reveal className="mb-14 max-w-[660px]">
          <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
            <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
            What we do
          </span>
          <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-extrabold leading-[1.02] tracking-[-1.6px] text-ink">
            One team.{" "}
            <span className="relative whitespace-nowrap text-olive">
              Three ways
              <span
                className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-lime opacity-25"
                aria-hidden
              />
            </span>{" "}
            we move you forward.
          </h2>
          <p className="mt-5 text-[17.5px] text-muted">
            You don&apos;t need five different suppliers. Everything we do falls
            into three simple areas — so you always know exactly who to call.
          </p>
        </Reveal>

        <div className="grid gap-6">
          {SERVICES.map((s, i) => {
            const a = ACCENT[i % ACCENT.length];
            return (
              <Reveal key={s.name}>
                <Link
                  href="/services"
                  className={`group relative grid grid-cols-1 items-center gap-7 overflow-hidden rounded-2xl border border-black/[.07] bg-white p-7 shadow-[0_2px_12px_rgba(26,28,31,.05)] transition-all duration-300 hover:-translate-y-1 md:grid-cols-[auto_1fr_1.05fr] md:p-9 ${a.cardHover}`}
                >
                  {/* accent corner glow */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: a.glow }}
                  />
                  {/* accent left bar */}
                  <span
                    className={`absolute left-0 top-9 h-0 w-1 rounded-r ${a.bar} transition-all duration-300 group-hover:h-[calc(100%-4.5rem)]`}
                  />

                  {/* icon tile + number */}
                  <div className="relative z-[2] flex items-center gap-4 md:flex-col md:items-start">
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${a.tile} shadow-lg transition-transform duration-300 group-hover:scale-105`}
                    >
                      <GroupIcon i={i} stroke="#fff" />
                    </div>
                    <span
                      className={`font-display text-[15px] font-bold ${a.eyebrow}`}
                    >
                      {s.num}
                    </span>
                  </div>

                  {/* name + blurb */}
                  <div className="relative z-[2]">
                    <h3 className="mb-2 flex items-center gap-3 font-display text-[28px] font-bold tracking-[-0.6px] text-ink">
                      {s.name}
                      <span className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <Arrow size={22} stroke={a.iconStroke} />
                      </span>
                    </h3>
                    <p className="max-w-[300px] text-[15.5px] leading-relaxed text-muted">
                      {s.blurb}
                    </p>
                  </div>

                  {/* tags */}
                  <div className="relative z-[2] flex flex-wrap gap-2.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-[8px] border border-black/10 bg-paper-2 px-[15px] py-[9px] text-[14px] font-medium text-char transition-colors ${a.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
