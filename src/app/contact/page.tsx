import type { Metadata } from "next";
import Link from "next/link";
import Arrow from "@/components/Arrow";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SocialIcon from "@/components/SocialIcon";
import { CONTACT, SOCIAL_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — AfriConnect",
  description:
    "Contact AfriConnect in Vosloorus about brand, print, website, e-commerce or business-system work.",
};

const waNumber = CONTACT.phone.replace(/[^\d]/g, "");
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
  "Hi AfriConnect, I'd like to chat about a project.",
)}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT.address,
)}&output=embed`;

const NEXT_STEPS = [
  {
    number: "01",
    title: "We read the brief",
    text: "The relevant person reviews what you need—not an automated sales queue.",
  },
  {
    number: "02",
    title: "We clarify the scope",
    text: "If anything is unclear, we ask the useful questions before recommending a solution.",
  },
  {
    number: "03",
    title: "You get a clear next step",
    text: "We come back with the proposed approach, timing and a quote you can understand.",
  },
];

function ContactRoute({
  label,
  value,
  href,
  accent,
}: {
  label: string;
  value: string;
  href: string;
  accent: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[.065]"
    >
      <span className={`h-10 w-1 shrink-0 rounded-full ${accent}`} />
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[10px] font-semibold uppercase tracking-[1px] text-white/35">
          {label}
        </span>
        <span className="mt-1 block truncate text-[14px] font-medium text-white">
          {value}
        </span>
      </span>
      <span className="text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-lime">
        →
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-char-2 pb-0 pt-24 text-white">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-24 -top-32 h-[620px] w-[620px] rounded-full bg-brand/15 blur-[135px]" />
        <div className="pointer-events-none absolute -bottom-44 -left-28 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[125px]" />

        <div className="relative z-[2] mx-auto grid max-w-site items-center gap-10 px-[30px] py-14 sm:gap-16 sm:py-[86px] lg:min-h-[660px] lg:grid-cols-[.95fr_1.05fr] lg:py-[105px]">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-lime">
              <span className="flex gap-[3px]" aria-hidden>
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
                <i className="h-[5px] w-[5px] rounded-full bg-lime" />
              </span>
              Start a conversation
            </span>
            <h1 className="max-w-[650px] font-display text-[clamp(40px,10.8vw,70px)] font-extrabold leading-[.98] tracking-[-2px] text-white sm:tracking-[-2.5px]">
              Connect with us <span className="text-lime">.</span>
            </h1>
            <p className="mt-7 max-w-[590px] text-[clamp(17px,1.8vw,19px)] leading-relaxed text-white/65">
              A new identity, a print job, a website or a business problem that
              needs a practical system—start wherever you are.
            </p>
            <Link
              href="#project-brief"
              className="group mt-9 inline-flex items-center gap-2.5 rounded-lg bg-lime px-[28px] py-[15px] font-display text-[15px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(163,217,85,.28)]"
            >
              Send a project brief
              <Arrow stroke="#1A1C1F" className="transition-transform group-hover:translate-x-1" />
            </Link>
            {/* <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-white/45">
                Follow us
              </span>
              <div className="flex gap-2.5">
                {SOCIAL_LINKS.map(({ platform, href }) => (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow AfriConnect on ${platform}`}
                    title={platform}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/[.06] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div> */}
          </Reveal>

          <Reveal className="lg:pl-5">
            <div className="relative mx-auto max-w-[530px] rounded-[24px] border border-white/15 bg-[#181b1e]/90 p-6 shadow-[0_35px_90px_rgba(0,0,0,.38)] md:p-7">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="font-display text-[10px] font-semibold uppercase tracking-[1.2px] text-lime">
                    Contact AfriConnect
                  </p>
                  <p className="mt-1 font-display text-[20px] font-bold text-white">
                    Choose the easiest route.
                  </p>
                </div>
                <span className="flex items-center gap-2 rounded-full border border-lime/20 bg-lime/10 px-3 py-1.5 text-[10px] font-semibold text-lime">
                  <i className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Available
                </span>
              </div>
              <div className="space-y-3">
                <ContactRoute label="WhatsApp" value="Fastest for a quick conversation" href={waLink} accent="bg-[#25D366]" />
                <ContactRoute label="Call" value={CONTACT.phone} href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} accent="bg-lime" />
                <ContactRoute label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} accent="bg-brand" />
              </div>
              {/* <div className="mt-5 rounded-2xl border border-white/10 bg-black/15 p-4">
                <p className="text-[11px] leading-relaxed text-white/45">
                  Prefer a considered response? The project brief below gives
                  us enough context to come back with a useful next step.
                </p>
              </div> */}
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-display text-[11px] font-semibold uppercase tracking-[1.2px] text-white/45">
                Follow us
              </span>
              <div className="flex gap-2.5">
                {SOCIAL_LINKS.map(({ platform, href }) => (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow AfriConnect on ${platform}`}
                    title={platform}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/[.06] text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                  >
                    <SocialIcon platform={platform} />
                  </a>
                ))}
              </div>
            </div>
            </div>
          </Reveal>
        </div>

        {/* <div className="relative z-[2] border-t border-white/10 bg-black/10">
          <div className="mx-auto grid max-w-site divide-y divide-white/10 px-[30px] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["One working day", "Typical response time"],
              ["One point of contact", "Clear responsibility"],
              ["Vosloorus", "Based in Gauteng"],
            ].map(([value, label], index) => (
              <div key={value} className={`py-6 sm:px-7 ${index === 0 ? "sm:pl-0" : ""}`}>
                <p className="font-display text-[15px] font-bold text-white">{value}</p>
                <p className="mt-1 text-[12.5px] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      <section id="project-brief" className="relative scroll-mt-20 overflow-hidden bg-paper-2 py-20 md:py-[130px]">
        <div className="dot-tex pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative z-[2] mx-auto max-w-site px-[30px]">
          <Reveal className="mb-10 grid gap-7 md:mb-14 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <span className="mb-[18px] inline-flex items-center gap-2.5 font-display text-[12.5px] font-semibold uppercase tracking-[1.5px] text-olive">
                <i className="h-1.5 w-1.5 rounded-full bg-lime-2" />
                Project brief
              </span>
              <h2 className="max-w-[700px] font-display text-[clamp(36px,4.8vw,56px)] font-extrabold leading-[1.02] tracking-[-1.8px] text-ink">
                Send an enquiry.
              </h2>
            </div>
            {/* <p className="max-w-[480px] text-[16px] leading-relaxed text-muted lg:justify-self-end">
              You do not need a perfect brief. Tell us what the business needs,
              where the work is stuck and what a good result looks like.
            </p> */}
          </Reveal>

          <div className="grid gap-7 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
            <Reveal>
              <ContactForm />
            </Reveal>
            <Reveal className="hidden lg:block">
              <aside className="overflow-hidden rounded-[22px] border border-char/10 bg-white shadow-[0_16px_42px_rgba(52,55,59,.07)]">
                <div className="border-b border-char/10 p-7 md:p-8">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[1.1px] text-olive">
                    After you press send
                  </span>
                  <h3 className="mt-3 font-display text-[25px] font-bold tracking-[-.7px] text-ink">
                    What happens next.
                  </h3>
                </div>
                <div>
                  {NEXT_STEPS.map((step, index) => (
                    <article key={step.title} className={`grid grid-cols-[42px_1fr] gap-4 p-7 md:p-8 ${index > 0 ? "border-t border-char/10" : ""}`}>
                      <span className="font-display text-[10px] font-bold text-lime-2">{step.number}</span>
                      <div>
                        <h4 className="font-display text-[15.5px] font-bold text-ink">{step.title}</h4>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{step.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-char-2 py-14 text-white md:py-[120px]">
        <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative z-[2] mx-auto grid max-w-site gap-8 px-[30px] lg:grid-cols-[1.2fr_.8fr] lg:items-stretch">
          <Reveal className="hidden md:block">
            <div className="h-full min-h-[420px] overflow-hidden rounded-[22px] border border-white/10 bg-char">
              <iframe
                title="AfriConnect office location"
                src={mapSrc}
                className="h-full min-h-[420px] w-full grayscale-[.25]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="flex h-full flex-col rounded-[22px] border border-white/10 bg-char p-7 md:min-h-[420px] md:p-10">
              <span className="font-display text-[10px] font-semibold uppercase tracking-[1.1px] text-lime">
                Find us
              </span>
              <h2 className="mt-5 font-display text-[clamp(30px,3.8vw,44px)] font-extrabold leading-[1.05] tracking-[-1.3px] text-white">
                Based in Vosloorus. Working beyond it.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-white/50">
                Visit the office, arrange a meeting or work with us remotely.
                The process stays clear either way.
              </p>
              <div className="mt-auto border-t border-white/10 pt-7">
                <p className="font-display text-[10px] font-semibold uppercase tracking-[1px] text-white/30">Office</p>
                <p className="mt-2 max-w-[360px] text-[14px] leading-relaxed text-white/75">{CONTACT.address}</p>
                <p className="mt-5 font-display text-[10px] font-semibold uppercase tracking-[1px] text-white/30">Hours</p>
                <p className="mt-2 text-[14px] text-white/75">{CONTACT.hours}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
