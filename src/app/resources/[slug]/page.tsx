import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { ARTICLES } from "@/lib/content";
import { fmtDate } from "@/lib/format";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) return { title: "Article — AfriConnect" };
  return { title: `${article.title} — AfriConnect`, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) notFound();
  const articleNumber = ARTICLES.findIndex((item) => item.slug === slug) + 1;

  const related = ARTICLES.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2);

  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-24 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-28 -top-36 h-[620px] w-[620px] rounded-full bg-brand/12 blur-[140px]" />

        <div className="relative z-[3] border-y border-white/10 bg-black/10">
          <nav aria-label="Breadcrumb" className="mx-auto flex h-14 max-w-site items-center gap-2.5 overflow-hidden px-[30px] font-display text-[11px] font-semibold">
            <Link href="/" className="shrink-0 text-white/35 transition-colors hover:text-lime">Home</Link>
            <span className="text-white/18">/</span>
            <Link href="/resources" className="shrink-0 text-white/55 transition-colors hover:text-lime">Resources</Link>
            <span className="text-white/18">/</span>
            <span className="truncate text-lime">Article</span>
          </nav>
        </div>

        <div className="relative z-[2] mx-auto grid max-w-site items-center gap-12 px-[30px] py-[72px] lg:min-h-[600px] lg:grid-cols-[1fr_.82fr] lg:gap-16 lg:py-[82px]">
          <Reveal>
            <span className="block font-display text-[11px] font-semibold uppercase tracking-[1.4px] text-lime">Article {String(articleNumber).padStart(2, "0")} · {article.category}</span>
            <h1 className="mt-5 max-w-[780px] font-display text-[clamp(40px,5.2vw,64px)] font-extrabold leading-[1] tracking-[-2.2px] text-white">{article.title}</h1>
            <p className="mt-7 max-w-[690px] text-[17px] leading-relaxed text-white/60">{article.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12.5px] text-white/42">
              {article.author && (
                <>
                  <span className="font-semibold text-white/75">{article.author}</span>
                  {article.authorTitle && <><span>·</span><span>{article.authorTitle}</span></>}
                  <span>·</span>
                </>
              )}
              <span>{fmtDate(article.date)}</span>
            </div>
          </Reveal>

          <Reveal>
            <div className={`relative aspect-[4/3] overflow-hidden rounded-[24px] border border-white/15 bg-gradient-to-br ${article.grad} shadow-[0_35px_90px_rgba(0,0,0,.34)]`}>
              {article.image && article.imageAlt ? (
                <Image src={article.image} alt={article.imageAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-[center_36%]" />
              ) : (
                <>
                  <div className="dot-tex-light absolute inset-0 opacity-45" />
                  <div className="absolute inset-5 flex flex-col overflow-hidden rounded-[19px] border border-white/12 bg-black/10 sm:inset-7">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                      <span className="flex gap-1.5" aria-hidden>
                        <i className="h-2 w-2 rounded-full bg-[#ff776b]" />
                        <i className="h-2 w-2 rounded-full bg-[#f0b44d]" />
                        <i className="h-2 w-2 rounded-full bg-lime" />
                      </span>
                      <span className="font-display text-[9px] font-semibold uppercase tracking-[1px] text-white/35">resources.africonnect</span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                      <span className="font-display text-[10px] font-semibold uppercase tracking-[1.1px] text-lime">{article.category} perspective</span>
                      <p className="mt-4 max-w-[360px] font-display text-[clamp(24px,3vw,36px)] font-extrabold leading-[1.08] tracking-[-1px] text-white">Useful context before the next decision.</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 font-display text-[9px] font-semibold uppercase tracking-[.8px] text-white/35">
                      <span>{article.readTime}</span>
                      <span>{String(articleNumber).padStart(2, "0")} / {String(ARTICLES.length).padStart(2, "0")}</span>
                    </div>
                  </div>
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              {article.image && (
                <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-char/75 px-4 py-2 font-display text-[10px] font-semibold uppercase tracking-[1px] text-white backdrop-blur-md">Article detail · {String(articleNumber).padStart(2, "0")}</span>
              )}
            </div>
          </Reveal>
        </div>

        <div className="relative z-[2] border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-site divide-y divide-white/10 px-[30px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[["Published", fmtDate(article.date)], ["Reading time", article.readTime], ["Topic", article.category]].map(([label, value], index) => (
              <div key={label} className={`py-6 sm:px-7 ${index === 0 ? "sm:pl-0" : ""}`}>
                <p className="font-display text-[10px] font-semibold uppercase tracking-[1px] text-white/35">{label}</p>
                <p className="mt-1.5 font-display text-[15px] font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article className="relative overflow-hidden bg-paper-2 py-[105px] md:py-[125px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative z-[2] mx-auto max-w-[830px] px-[30px]">
          <Reveal>
            <div className="rounded-[22px] border border-char/10 bg-white px-7 py-9 shadow-[0_18px_48px_rgba(52,55,59,.06)] sm:px-11 sm:py-12 md:px-16 md:py-16">
              <p className="mb-11 border-b border-char/10 pb-10 text-[20px] font-medium leading-[1.65] text-char">{article.excerpt}</p>
              <div className="space-y-7">
                {article.body.map((block, index) => {
                  if (block.t === "h") {
                    return <h2 key={index} className="pt-5 font-display text-[clamp(27px,3.4vw,35px)] font-extrabold leading-[1.1] tracking-[-.9px] text-ink">{block.text}</h2>;
                  }
                  if (block.t === "ul") {
                    return (
                      <ul key={index} className="space-y-4">
                        {block.items.map((item) => (
                          <li key={item} className="grid grid-cols-[18px_1fr] gap-3 text-[17px] leading-[1.7] text-char">
                            <span className="mt-[11px] h-1.5 w-1.5 rounded-full bg-lime-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={index} className="text-[17px] leading-[1.8] text-char">{block.text}</p>;
                })}
              </div>
              <div className="mt-12 border-t border-char/10 pt-8">
                <Link href="/resources" className="group inline-flex items-center gap-2 font-display text-[14px] font-semibold text-olive">
                  <Arrow className="rotate-180 transition-transform group-hover:-translate-x-1" /> Back to the resource library
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {related.length > 0 && (
        <section className="relative overflow-hidden bg-char-2 py-[100px] text-white md:py-[115px]">
          <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
          <div className="relative z-[2] mx-auto max-w-site px-[30px]">
            <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-lime">Keep reading</span>
                <h2 className="mt-4 font-display text-[clamp(32px,4vw,46px)] font-extrabold tracking-[-1.4px] text-white">More on {article.category.toLowerCase()}.</h2>
              </div>
              <Link href="/resources" className="group inline-flex items-center gap-2 font-display text-[14px] font-semibold text-white/75 hover:text-lime">View all resources <Arrow stroke="currentColor" className="transition-transform group-hover:translate-x-1" /></Link>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/resources/${item.slug}`} className="group grid min-h-[190px] grid-cols-[8px_1fr] overflow-hidden rounded-[20px] border border-white/10 bg-white/[.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[.065]">
                  <span className={`bg-gradient-to-b ${item.grad}`} />
                  <div className="flex flex-col p-7 md:p-8">
                    <span className="font-display text-[10px] font-semibold uppercase tracking-[1px] text-lime">{item.category} · {item.readTime}</span>
                    <h3 className="mt-4 max-w-[520px] font-display text-[21px] font-bold leading-[1.2] tracking-[-.5px] text-white">{item.title}</h3>
                    <span className="mt-auto pt-6 font-display text-[13px] font-semibold text-white/55 transition-colors group-hover:text-lime">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </main>
  );
}
