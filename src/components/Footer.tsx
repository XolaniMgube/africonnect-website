import Link from "next/link";
import Logo from "./Logo";
import { CONTACT } from "@/lib/content";

const COMPANY = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our work" },
  { href: "/about", label: "About us" },
  { href: "/resources", label: "Resources" },
  // { href: "/portal", label: "Client login" }, // disabled for now
];
const SERVICES_LINKS = [
  { href: "/services#build", label: "Web development" },
  { href: "/services#brand", label: "Graphic design" },
  { href: "/services#print", label: "Printing" },
  { href: "/services#run", label: "IT & hosting" },
];

function Social({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 transition-colors hover:border-lime hover:bg-lime [&:hover_svg]:stroke-ink"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-[120px] bg-char-2 pb-[34px] pt-[76px] text-white">
      <div className="mx-auto max-w-site px-[30px]">
        <div className="grid gap-11 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1.3fr]">
          <div>
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

          <div>
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

        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-7">
          <p className="text-[13.5px] text-white/50">
            © {new Date().getFullYear()} AfriConnect (Pty) Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-3">
            <Social>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
              </svg>
            </Social>
            <Social>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Social>
            <Social>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#9aa0a6" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#9aa0a6" stroke="none" />
              </svg>
            </Social>
          </div>
        </div>
      </div>
    </footer>
  );
}
