import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — AfriConnect",
  description:
    "Get in touch with AfriConnect in Vosloorus. Tell us what you need and we'll come back with a plan and a price.",
};

const waNumber = CONTACT.phone.replace(/[^\d]/g, "");
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
  "Hi AfriConnect, I'd like to chat about a project."
)}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT.address
)}&output=embed`;

function Detail({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <>
      <div className="font-display text-[12.5px] font-semibold uppercase tracking-[1px] text-muted">
        {label}
      </div>
      <div className="mt-1.5 text-[16.5px] font-medium text-ink transition-colors group-hover:text-olive">
        {value}
      </div>
    </>
  );
  return href ? (
    <a href={href} className="group block rounded-xl border border-[var(--line)] bg-paper p-6 transition-colors hover:border-char">
      {body}
    </a>
  ) : (
    <div className="rounded-xl border border-[var(--line)] bg-paper p-6">{body}</div>
  );
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's connect the dots."
        intro="Tell us what you need. We'll come back with a plan and a price — no jargon, no pressure."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />

      <section className="py-[120px]">
        <div className="mx-auto grid max-w-site gap-12 px-[30px] lg:grid-cols-[1.15fr_.85fr]">
          {/* form */}
          <div>
            <h2 className="mb-2 font-display text-[clamp(26px,3.2vw,36px)] font-extrabold tracking-[-1px] text-ink">
              Start a conversation
            </h2>
            <p className="mb-8 text-[16.5px] text-muted">
              Fill in the form and we&apos;ll be in touch within one working day.
            </p>
            <ContactForm />
          </div>

          {/* details */}
          <div className="space-y-4">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl bg-[#25D366] p-6 text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#1A1C1F">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.519 5.26l-.999 3.648 3.97-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <div>
                <div className="font-display text-[16px] font-bold">
                  Chat on WhatsApp
                </div>
                <div className="text-[14px] text-ink/70">
                  Usually the fastest way to reach us
                </div>
              </div>
            </a>

            <Detail
              label="Call us"
              value={CONTACT.phone}
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            />
            <Detail
              label="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <Detail label="Visit us" value={CONTACT.address} />
            <Detail label="Office hours" value={CONTACT.hours} />
          </div>
        </div>
      </section>

      {/* map */}
      <section className="pb-[120px]">
        <div className="mx-auto max-w-site px-[30px]">
          <div className="overflow-hidden rounded-2xl border border-[var(--line)]">
            <iframe
              title="AfriConnect office location"
              src={mapSrc}
              className="h-[420px] w-full grayscale-[.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
