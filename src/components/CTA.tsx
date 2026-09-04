import Link from "next/link";
import Reveal from "./Reveal";
import Arrow from "./Arrow";

export default function CTA({
  title = "Let's connect the dots.",
  text = "Tell us what you need. We'll come back with a plan and a price — no jargon, no pressure.",
  buttonLabel = "Get a free quote",
  href = "/contact#project-brief",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="border-t border-char/5 bg-paper py-16 md:py-[104px]">
      <div className="mx-auto max-w-site px-[30px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[22px] border border-char/10 bg-paper-2 px-6 py-8 shadow-[0_18px_50px_rgba(52,55,59,.06)] md:px-12 md:py-12">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border-[42px] border-lime/10" />
            <div className="pointer-events-none absolute bottom-0 right-[22%] h-px w-32 bg-gradient-to-r from-transparent via-lime-2/40 to-transparent" />

            <div className="relative z-[2] grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
              <div>
                <span className="mb-4 inline-flex items-center gap-2.5 font-display text-[11.5px] font-semibold uppercase tracking-[1.35px] text-olive">
                  <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                  Start a conversation
                </span>
                <h2 className="max-w-[760px] font-display text-[clamp(27px,3vw,38px)] font-extrabold leading-[1.08] tracking-[-1.15px] text-ink">
                  {title}
                </h2>
                <p className="mt-3.5 max-w-[620px] text-[16px] leading-relaxed text-muted">
                  {text}
                </p>
              </div>

              <Link
                href={href}
                className="group inline-flex w-full shrink-0 items-center justify-center gap-2.5 rounded-lg bg-char px-6 py-3.5 font-display text-[14px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_12px_26px_rgba(52,55,59,.20)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-char sm:w-fit"
              >
                {buttonLabel}
                <Arrow
                  stroke="#fff"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
