import Link from "next/link";
import { ARTICLES } from "@/lib/content";
import { fmtDate } from "@/lib/format";
import Arrow from "./Arrow";
import FeaturedResourceVisual from "./FeaturedResourceVisual";
import Reveal from "./Reveal";

const FEATURED_SLUG = "artificial-intelligence-in-printing";

export default function FeaturedResource() {
  const article = ARTICLES.find((item) => item.slug === FEATURED_SLUG);

  if (!article || !article.image || !article.imageAlt) return null;

  return (
    <section id="resources-preview" className="bg-paper-2 py-[110px] md:py-[130px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal>
          <article className="group grid overflow-hidden rounded-[28px] border border-char/10 bg-char shadow-[0_28px_80px_rgba(52,55,59,.14)] lg:grid-cols-[.95fr_1.05fr]">
            <Link
              href={`/resources/${article.slug}`}
              className="relative block overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
              aria-label={`Read ${article.title}`}
            >
              <div className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.025]">
                <FeaturedResourceVisual
                  src={article.image}
                  alt={article.imageAlt}
                />
              </div>
            </Link>

            <div className="relative flex flex-col justify-center overflow-hidden px-7 py-14 text-white md:px-12 md:py-16 lg:px-14">
              <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-45" />
              <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-lime/10 blur-[90px]" />

              <div className="relative z-[2]">
                <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
                  <i className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Featured resource
                </span>

                <div className="mb-5 flex flex-wrap items-center gap-2.5 text-[12.5px] text-white/50">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-display font-semibold uppercase tracking-[.8px] text-white/75">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                  <span aria-hidden>·</span>
                  <span>{fmtDate(article.date)}</span>
                </div>

                <h2 className="max-w-[590px] font-display text-[clamp(32px,4.1vw,49px)] font-extrabold leading-[1.04] tracking-[-1.6px] text-white">
                  {article.title}
                </h2>

                <p className="mt-6 max-w-[570px] text-[16.5px] leading-relaxed text-white/65">
                  {article.excerpt}
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-lime font-display text-[12px] font-bold text-char">
                    MS
                  </span>
                  <div>
                    <p className="text-[11px] text-white/40">Written by</p>
                    <p className="font-display text-[13.5px] font-semibold text-white">
                      {article.author}
                    </p>
                    {article.authorTitle && (
                      <p className="mt-0.5 text-[11px] text-white/45">
                        {article.authorTitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    href={`/resources/${article.slug}`}
                    className="inline-flex items-center gap-2.5 rounded-lg bg-lime px-5 py-3.5 font-display text-[14px] font-semibold text-char transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                  >
                    Read the article
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-flex items-center gap-2 font-display text-[14px] font-semibold text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                  >
                    Browse all resources
                    <Arrow />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
