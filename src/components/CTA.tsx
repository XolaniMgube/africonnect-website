import Link from "next/link";
import Reveal from "./Reveal";
import Arrow from "./Arrow";

export default function CTA({
  title = "Let's connect the dots.",
  text = "Tell us what you need. We'll come back with a plan and a price — no jargon, no pressure.",
  buttonLabel = "Get a free quote",
  href = "/contact",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="pb-[120px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-lime px-7 py-[72px] text-center md:px-14">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(26,28,31,.10) 1.4px, transparent 1.4px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative z-[2]">
              <h2 className="font-display text-[clamp(30px,4.5vw,48px)] font-extrabold tracking-[-1.4px] text-ink">
                {title}
              </h2>
              <p className="mx-auto mb-9 mt-[18px] max-w-[520px] text-[18px] font-medium text-ink/70">
                {text}
              </p>
              <Link
                href={href}
                className="inline-flex items-center gap-2.5 rounded-lg bg-char px-[30px] py-[15px] font-display text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(52,55,59,.3)]"
              >
                {buttonLabel}
                <Arrow stroke="#fff" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
