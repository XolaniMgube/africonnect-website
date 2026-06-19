"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ARTICLES } from "@/lib/content";
import { fmtDate } from "@/lib/format";

const FILTERS = ["All", "Web", "Branding", "Print", "Consulting"] as const;
type Filter = (typeof FILTERS)[number];

export default function ResourceList({ slugs }: { slugs?: string[] }) {
  const pool = useMemo(
    () => (slugs ? ARTICLES.filter((a) => slugs.includes(a.slug)) : ARTICLES),
    [slugs]
  );
  const [active, setActive] = useState<Filter>("All");

  const items = useMemo(
    () => (active === "All" ? pool : pool.filter((a) => a.category === active)),
    [active, pool]
  );

  return (
    <div>
      <div className="mb-12 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => {
          const on = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-lg border px-[18px] py-2.5 font-display text-[14.5px] font-semibold transition-all duration-200 ${
                on
                  ? "border-char bg-char text-white"
                  : "border-[var(--line)] bg-paper text-char hover:border-char"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <Link
            key={a.slug}
            href={`/resources/${a.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(52,55,59,.10)]"
          >
            <div className={`relative aspect-[16/9] bg-gradient-to-br ${a.grad}`}>
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 font-display text-[11.5px] font-semibold uppercase tracking-[1px] text-lime backdrop-blur-sm">
                {a.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="mb-3 flex items-center gap-2 text-[13px] text-muted">
                <span>{fmtDate(a.date)}</span>
                <span className="text-[var(--line)]">•</span>
                <span>{a.readTime}</span>
              </div>
              <h3 className="font-display text-[20px] font-bold leading-[1.2] tracking-[-0.4px] text-ink transition-colors group-hover:text-olive">
                {a.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {a.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[14.5px] font-semibold text-olive">
                Read article
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
