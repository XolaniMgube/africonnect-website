import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { fmtDate } from "@/lib/format";
import { ARTICLES } from "@/lib/content";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Article — AfriConnect" };
  return {
    title: `${article.title} — AfriConnect`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = ARTICLES.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  ).slice(0, 2);

  return (
    <main>
      <PageHeader
        tone="resources"
        eyebrow={`${article.category} · ${article.readTime}`}
        title={article.title}
        crumbs={[
          { href: "/resources", label: "Resources" },
          { href: `/resources/${article.slug}`, label: article.category },
        ]}
      />

      <article className="py-[100px]">
        <div className="mx-auto max-w-[760px] px-[30px]">
          <div className="mb-10 flex items-center gap-3 border-b border-[var(--line)] pb-6 text-[14px] text-muted">
            <span>Published {fmtDate(article.date)}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <p className="mb-10 text-[20px] font-medium leading-relaxed text-char">
            {article.excerpt}
          </p>

          <div className="space-y-6">
            {article.body.map((b, i) => {
              if (b.t === "h")
                return (
                  <h2
                    key={i}
                    className="pt-4 font-display text-[26px] font-bold tracking-[-0.6px] text-ink"
                  >
                    {b.text}
                  </h2>
                );
              if (b.t === "ul")
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[17.5px] leading-relaxed text-char">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-2" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="text-[17.5px] leading-[1.75] text-char">
                  {b.text}
                </p>
              );
            })}
          </div>

          <div className="mt-12 border-t border-[var(--line)] pt-8">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 font-display text-[15px] font-semibold text-olive"
            >
              <span>←</span> Back to all resources
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-paper-2 py-[100px]">
          <div className="mx-auto max-w-site px-[30px]">
            <h2 className="mb-10 font-display text-[28px] font-extrabold tracking-[-1px] text-ink">
              Keep reading
            </h2>
            <div className="grid gap-7 md:grid-cols-2">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/resources/${a.slug}`}
                  className="group flex gap-5 rounded-2xl border border-[var(--line)] bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(52,55,59,.08)]"
                >
                  <div className={`h-20 w-20 shrink-0 rounded-xl bg-gradient-to-br ${a.grad}`} />
                  <div>
                    <span className="font-display text-[12px] font-semibold uppercase tracking-[1px] text-olive">
                      {a.category}
                    </span>
                    <h3 className="mt-1 font-display text-[18px] font-bold leading-[1.25] tracking-[-0.3px] text-ink transition-colors group-hover:text-olive">
                      {a.title}
                    </h3>
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
