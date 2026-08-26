import Link from "next/link";
import Arrow from "./Arrow";
import Reveal from "./Reveal";

const SOLUTIONS = [
  {
    num: "01",
    name: "Digital products",
    blurb:
      "Customer-facing platforms and internal tools designed around how your business actually works.",
    tags: ["Business websites", "Online stores", "Portals", "Custom systems"],
    accent: "lime",
  },
  {
    num: "02",
    name: "Managed technology",
    blurb:
      "The dependable infrastructure and ongoing support that keep your team connected and trading.",
    tags: ["Hosting & domains", "Business email", "Maintenance", "IT support"],
    accent: "blue",
  },
  {
    num: "03",
    name: "Brand & production",
    blurb:
      "One identity carried consistently from the screen into the real world, produced by the same team.",
    tags: ["Brand identity", "Print", "Signage", "Apparel & vehicles"],
    accent: "lime",
  },
] as const;

function SolutionIcon({ index }: { index: number }) {
  const props = {
    width: 27,
    height: 27,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (index === 0) {
    return (
      <svg {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M8.5 8 6.5 10l2 2M15.5 8l2 2-2 2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...props}>
        <path d="M4 15a4 4 0 0 1 .9-7.9A7 7 0 0 1 18.7 9 3 3 0 0 1 19 15H4Z" />
        <path d="M8 19h8M10 15v4M14 15v4" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z" />
      <path d="M5 3v3M3.5 4.5h3M19 18v3M17.5 19.5h3" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-[110px] md:py-[130px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal className="mb-14 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
              <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
              Connected capability
            </span>
            <h2 className="max-w-[720px] font-display text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.02] tracking-[-1.8px] text-ink">
              Technology first. Everything else connected.
            </h2>
          </div>
          <p className="max-w-[440px] text-[17px] leading-relaxed text-muted lg:justify-self-end">
            Start with the business problem. We bring together the digital,
            operational and physical pieces needed to solve it properly.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {SOLUTIONS.map((solution, index) => {
            const blue = solution.accent === "blue";
            return (
              <Reveal key={solution.name}>
                <Link
                  href="/services"
                  className={`group flex h-full min-h-[390px] flex-col overflow-hidden rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1 md:p-8 ${
                    blue
                      ? "border-brand/20 bg-[#eaf4fb] hover:border-brand"
                      : index === 0
                        ? "border-char bg-char text-white hover:border-lime"
                        : "border-black/[.08] bg-white hover:border-lime-2"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl ${
                        blue
                          ? "bg-brand text-white"
                          : index === 0
                            ? "bg-lime text-ink"
                            : "bg-lime/25 text-olive"
                      }`}
                    >
                      <SolutionIcon index={index} />
                    </div>
                    <span
                      className={`font-display text-[13px] font-bold ${
                        index === 0 ? "text-white/35" : "text-muted"
                      }`}
                    >
                      {solution.num}
                    </span>
                  </div>

                  <div className="mt-10">
                    <h3
                      className={`font-display text-[27px] font-bold tracking-[-.7px] ${
                        index === 0 ? "text-white" : "text-ink"
                      }`}
                    >
                      {solution.name}
                    </h3>
                    <p
                      className={`mt-3 text-[15.5px] leading-relaxed ${
                        index === 0 ? "text-white/60" : "text-muted"
                      }`}
                    >
                      {solution.blurb}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1.5 text-[12.5px] font-medium ${
                          index === 0
                            ? "border-white/10 bg-white/5 text-white/65"
                            : "border-black/[.08] bg-white/60 text-char"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    className={`mt-auto inline-flex items-center gap-2 pt-8 font-display text-[14px] font-semibold ${
                      blue ? "text-brand" : index === 0 ? "text-lime" : "text-olive"
                    }`}
                  >
                    Explore services
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
