"use client";

import Link from "next/link";
import { useState } from "react";
import Arrow from "./Arrow";
import Reveal from "./Reveal";

const SOLUTIONS = [
  {
    num: "01",
    name: "Brand & design",
    href: "/services#brand",
    blurb:
      "Distinctive identities and everyday creative that make your business clear, recognisable and consistent.",
    tags: ["Logo & identity", "Graphic design", "Brand strategy"],
    icon: "bg-lime text-ink",
    action: "text-lime",
    activeAction: "text-lime",
    line: "bg-lime",
  },
  {
    num: "02",
    name: "Print & signage",
    href: "/services#print",
    blurb:
      "Well-made print and physical branding, from everyday business materials to large-format visibility.",
    tags: ["Business stationery", "Marketing print", "Signage & banners"],
    icon: "bg-[#f0a35b] text-ink",
    action: "text-[#9a5a22]",
    activeAction: "text-[#f0a35b]",
    line: "bg-[#f0a35b]",
  },
  {
    num: "03",
    name: "Websites & Dashboards",
    href: "/services#websites",
    blurb:
      "Professional digital experiences that build trust, generate enquiries and make it easier to buy.",
    tags: ["Business websites", "Online stores", "Dashboards & portals"],
    icon: "bg-brand text-white",
    action: "text-brand",
    activeAction: "text-brand",
    line: "bg-brand",
  },
  {
    num: "04",
    name: "Business systems",
    href: "/services#business",
    blurb:
      "Practical systems, registrations and business support that simplify operations and keep you moving.",
    tags: ["Business registration", "Business profile", "CIPC & compliance"],
    icon: "bg-[#ece8ff] text-[#6555a3]",
    action: "text-[#6555a3]",
    activeAction: "text-[#b9adff]",
    line: "bg-[#9d8cff]",
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
        <path d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z" />
        <path d="M5 3v3M3.5 4.5h3M19 18v3M17.5 19.5h3" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...props}>
        <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="7" rx="1" />
        <path d="M18 12h.01" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M8.5 8 6.5 10l2 2M15.5 8l2 2-2 2" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <rect x="3" y="3" width="7" height="6" rx="1.5" />
      <rect x="14" y="3" width="7" height="6" rx="1.5" />
      <rect x="8.5" y="15" width="7" height="6" rx="1.5" />
      <path d="M6.5 9v2.5H12V15M17.5 9v2.5H12" />
    </svg>
  );
}

export default function Services() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? selected;

  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-[130px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal className="mb-10 md:mb-14">
          <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
            <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
            Brand · Print · Web · Systems
          </span>
          <h2 className="max-w-[650px] font-display text-[clamp(34px,4.8vw,54px)] font-extrabold leading-[1.02] tracking-[-1.7px] text-ink">
            What we do . . .
          </h2>
          <p className="mt-4 font-display text-[11px] font-semibold uppercase tracking-[1px] text-muted md:hidden">
            Swipe to explore services →
          </p>
        </Reveal>

        <div className="-mx-[30px] flex snap-x snap-mandatory scroll-px-[30px] gap-4 overflow-x-auto px-[30px] pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
          {SOLUTIONS.map((solution, index) => {
            const isActive = active === index;
            return (
              <Reveal key={solution.name} className="w-[82vw] max-w-[320px] shrink-0 snap-start md:w-auto md:max-w-none">
                <article
                  tabIndex={0}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setSelected(index)}
                  onClick={() => setSelected(index)}
                  onTouchStart={() => setSelected(index)}
                  aria-label={`${solution.name} service category`}
                  className={`group flex h-full cursor-pointer flex-col overflow-hidden rounded-[18px] border p-6 outline-none transition-[background-color,border-color,color,box-shadow,transform] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-4 sm:min-h-[315px] sm:p-7 ${
                    isActive
                      ? "border-char bg-char shadow-[0_20px_48px_rgba(26,28,31,.22)]"
                      : "border-black/[.08] bg-white shadow-[0_8px_24px_rgba(26,28,31,.055)] hover:border-black/15"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`grid h-14 w-14 place-items-center rounded-2xl ${solution.icon}`}
                    >
                      <SolutionIcon index={index} />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`font-display text-[13px] font-bold ${isActive ? solution.activeAction : solution.action}`}
                      >
                        {solution.num}
                      </span>
                      <i className={`h-px w-4 ${solution.line}`} />
                    </div>
                  </div>

                  <div className="mt-7">
                    <h3
                      className={`font-display text-[22px] font-bold tracking-[-.5px] transition-colors duration-500 ${isActive ? "text-white" : "text-ink"}`}
                    >
                      {solution.name}
                    </h3>
                    <p
                      className={`mt-2.5 max-w-[470px] text-[14.5px] leading-relaxed transition-colors duration-500 ${isActive ? "text-white/[.72]" : "text-muted"}`}
                    >
                      {solution.blurb}
                    </p>
                  </div>

                  <div className="mt-5 hidden flex-wrap gap-2 sm:flex">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors duration-500 ${
                          isActive
                            ? "border-white/15 bg-white/[.07] text-white/[.78]"
                            : "border-black/[.08] bg-white/65 text-char"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={solution.href}
                    className={`mt-6 inline-flex items-center gap-2 font-display text-[14px] font-semibold sm:mt-auto sm:pt-6 ${isActive ? solution.activeAction : solution.action}`}
                  >
                    Explore services
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
