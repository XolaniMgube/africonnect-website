import Link from "next/link";

type Crumb = { href: string; label: string };
export type Tone =
  | "about"
  | "services"
  | "portfolio"
  | "resources"
  | "contact";

// Each page gets a distinct backdrop — different accent hue, glow positions and
// base tint — so navigating between pages feels like a change of place.
const TONES: Record<
  Tone,
  { base: string; glows: { className: string; color: string }[] }
> = {
  about: {
    base:
      "radial-gradient(120% 120% at 85% 0%, rgba(94,115,39,.30), transparent 55%), #23262A",
    glows: [
      { className: "-right-10 -top-24 h-[440px] w-[440px]", color: "rgba(163,217,85,.34)" },
      { className: "-bottom-32 -left-24 h-[360px] w-[360px]", color: "rgba(59,159,224,.18)" },
    ],
  },
  services: {
    base:
      "radial-gradient(120% 120% at 85% 0%, rgba(44,111,160,.32), transparent 55%), #23262A",
    glows: [
      { className: "-right-10 -top-24 h-[440px] w-[440px]", color: "rgba(59,159,224,.34)" },
      { className: "-bottom-32 -left-24 h-[360px] w-[360px]", color: "rgba(163,217,85,.16)" },
    ],
  },
  portfolio: {
    base:
      "radial-gradient(120% 120% at 12% 0%, rgba(94,115,39,.28), transparent 55%), #23262A",
    glows: [
      { className: "-left-12 -top-24 h-[440px] w-[440px]", color: "rgba(163,217,85,.32)" },
      { className: "-bottom-28 -right-20 h-[380px] w-[380px]", color: "rgba(59,159,224,.22)" },
    ],
  },
  resources: {
    base:
      "radial-gradient(120% 120% at 12% 0%, rgba(44,111,160,.32), transparent 55%), #23262A",
    glows: [
      { className: "-left-12 -top-24 h-[440px] w-[440px]", color: "rgba(59,159,224,.34)" },
      { className: "-bottom-28 -right-20 h-[360px] w-[360px]", color: "rgba(163,217,85,.16)" },
    ],
  },
  contact: {
    base:
      "radial-gradient(110% 130% at 50% 130%, rgba(94,115,39,.28), transparent 55%), #23262A",
    glows: [
      { className: "-left-16 bottom-[-110px] h-[400px] w-[400px]", color: "rgba(163,217,85,.30)" },
      { className: "-right-16 bottom-[-110px] h-[400px] w-[400px]", color: "rgba(59,159,224,.28)" },
    ],
  },
};

export default function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs = [],
  tone = "about",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  crumbs?: Crumb[];
  tone?: Tone;
}) {
  const t = TONES[tone];
  return (
    <section
      className="relative overflow-hidden pb-16 pt-36 text-white md:pb-20 md:pt-44"
      style={{ background: t.base }}
    >
      {/* dot texture */}
      <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-60" />
      {/* per-tone glows */}
      {t.glows.map((g, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute rounded-full blur-[100px] ${g.className}`}
          style={{
            background: `radial-gradient(circle, ${g.color}, transparent 70%)`,
          }}
        />
      ))}

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
