import Link from "next/link";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { CONTACT, SOCIAL_LINKS } from "@/lib/content";

const COMPANY = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our work" },
  { href: "/about", label: "About us" },
  // { href: "/portal", label: "Client login" }, // disabled for now
];
const SERVICES_LINKS = [
  { href: "/services#brand", label: "Brand & design" },
  { href: "/services#print", label: "Print & signage" },
  { href: "/services#websites", label: "Websites & e-commerce" },
  { href: "/services#business", label: "Business & systems" },
];

export default function Footer() {
  return (
    <footer className="bg-char-2 pb-[30px] pt-14 text-white sm:pt-[76px]">
      <div className="mx-auto max-w-site px-5 sm:px-[30px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-white/10 pb-10 md:grid-cols-2 md:gap-11 md:pb-12 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr]">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <Logo className="text-white/70" />
            </div>
            <p className="max-w-[290px] text-[14.5px] text-white/60">
              Helping small and big businesses adapt to the new way of doing
              business — since 2018.
            </p>
          </div>

          <div>
            <h5 className="mb-5 font-display text-[15px] font-semibold">
              Company
            </h5>
            {COMPANY.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="mb-3 block text-[14.5px] text-white/60 transition-colors hover:text-lime"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="mb-5 font-display text-[15px] font-semibold">
              Services
            </h5>
            {SERVICES_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="mb-3 block text-[14.5px] text-white/60 transition-colors hover:text-lime"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="col-span-2 md:col-span-1">
            <h5 className="mb-5 font-display text-[15px] font-semibold">
              Get in touch
            </h5>
            <p className="mb-2.5 text-[14.5px] text-white/60">
              {CONTACT.address}
            </p>
            <p className="mb-2.5 text-[14.5px]">
              <strong className="font-semibold text-white">
                {CONTACT.phone}
              </strong>
            </p>
            <p className="mb-2.5 text-[14.5px] text-white/60">
              {CONTACT.email}
            </p>
            <p className="text-[14.5px] text-white/60">{CONTACT.hours}</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 pt-7 sm:flex-row sm:items-center">
          <p className="text-[13.5px] text-white/50">
            © {new Date().getFullYear()} AfriConnect (Pty) Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ platform, href }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow AfriConnect on ${platform}`}
                title={platform}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
