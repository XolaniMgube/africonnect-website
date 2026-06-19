import Link from "next/link";

type Crumb = { href: string; label: string };

export default function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-hero-dark pb-16 pt-36 text-white md:pb-20 md:pt-44">
      {/* dot texture */}
      <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-60" />
      {/* glows */}
      <div
        className="pointer-events-none absolute -right-10 -top-24 h-[440px] w-[440px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(163,217,85,.32), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-[380px] w-[380px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,159,224,.22), transparent 70%)",
        }}
      />

      <div className="relative z-[2] mx-auto max-w-site px-[30px]">
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-[13px] font-medium text-white/45">
          <Link href="/" className="transition-colors hover:text-lime">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.href} className="flex items-center gap-2">
              <span className="text-white/25">/</span>
              <Link href={c.href} className="transition-colors hover:text-lime">
                {c.label}
              </Link>
            </span>
          ))}
        </nav>

        <span className="mb-5 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
          <span className="flex gap-[3px]">
            <i className="h-[5px] w-[5px] rounded-full bg-lime" />
            <i className="h-[5px] w-[5px] rounded-full bg-lime" />
            <i className="h-[5px] w-[5px] rounded-full bg-lime" />
          </span>
          {eyebrow}
        </span>

        <h1 className="max-w-[800px] font-display text-[clamp(38px,5.5vw,64px)] font-extrabold leading-[1.02] tracking-[-2px] text-white">
          {title}
        </h1>

        {intro && (
          <p className="mt-6 max-w-[560px] text-[18px] leading-relaxed text-white/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
