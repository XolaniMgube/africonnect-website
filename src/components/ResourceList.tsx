"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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
      <div className="mb-10 flex flex-wrap gap-2.5 border-b border-char/10 pb-6">
        {FILTERS.map((f) => {
          const on = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-[17px] py-2 font-display text-[12.5px] font-semibold transition-all duration-200 ${
                on
                  ? "border-char bg-char text-white shadow-[0_8px_18px_rgba(52,55,59,.14)]"
                  : "border-char/10 bg-white text-char hover:border-char/25"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((a, index) => (
          <Link
            key={a.slug}
            href={`/resources/${a.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-char/10 bg-white shadow-[0_10px_28px_rgba(52,55,59,.055)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(52,55,59,.11)]"
          >
            <div className={`relative aspect-[16/9] bg-gradient-to-br ${a.grad}`}>
              {a.image && a.imageAlt && (
                <Image
                  src={a.image}
                  alt={a.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[center_38%]"
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              {a.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              )}
              <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 font-display text-[11.5px] font-semibold uppercase tracking-[1px] text-lime backdrop-blur-sm">
                {a.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <span className="mb-5 font-display text-[10px] font-bold text-lime-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-3 flex items-center gap-2 text-[13px] text-muted">
                <span>{fmtDate(a.date)}</span>
                <span className="text-[var(--line)]">•</span>
                <span>{a.readTime}</span>
              </div>
              {a.author && (
                <div className="mb-2">
                  <p className="font-display text-[11.5px] font-semibold uppercase tracking-[.8px] text-olive">
                    By {a.author}
                  </p>
                  {a.authorTitle && (
                    <p className="mt-0.5 text-[11.5px] text-muted">
                      {a.authorTitle}
                    </p>
                  )}
                </div>
              )}
              <h3 className="font-display text-[19px] font-bold leading-[1.2] tracking-[-0.4px] text-ink transition-colors group-hover:text-olive">
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
