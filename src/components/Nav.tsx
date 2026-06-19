"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { CONTACT } from "@/lib/content";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Resources" },
];

// mobile menu also lists Contact (desktop has the "Contact Us" button instead)
const MOBILE_LINKS = [...LINKS, { href: "/contact", label: "Contact" }];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Every page leads with a dark header band, so the bar starts
  // transparent with light text and turns solid once you scroll past it.
  const solid = scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile drawer whenever we navigate
  useEffect(() => setOpen(false), [pathname]);

  // lock body scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        solid ? "border-b border-[var(--line)] bg-paper/85 backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-site items-center justify-between px-[30px]">
        <Link href="/" aria-label="AfriConnect home">
          <Logo
            className={`transition-colors duration-300 ${
              solid ? "text-char" : "text-white"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group relative text-[15px] font-medium transition-colors duration-300 ${
                solid ? "text-char" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 bg-lime transition-all duration-200 ${
                  isActive(l.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* Client login — disabled for now
          <Link
            href="/portal"
            className={`text-[15px] font-medium transition-colors duration-300 ${
              solid ? "text-muted hover:text-char" : "text-white/70 hover:text-white"
            }`}
          >
            Client login
          </Link>
          */}

          <Link
            href="/contact"
            className={`rounded-lg px-6 py-3 text-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              solid ? "bg-char text-white" : "bg-lime text-ink"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-2 md:hidden"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-0.5 w-6 rounded transition-colors ${
                solid ? "bg-char" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* mobile full-screen menu */}
      {open && (
        <div className="menu-overlay fixed inset-0 z-[110] flex flex-col overflow-hidden bg-hero-dark text-white md:hidden">
          <div className="dot-tex-light pointer-events-none absolute inset-0 opacity-50" />
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(163,217,85,.28), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(59,159,224,.22), transparent 70%)",
            }}
          />

          {/* top bar */}
          <div className="relative z-[2] flex h-20 items-center justify-between px-[30px]">
            <Link
              href="/"
              aria-label="AfriConnect home"
              onClick={() => setOpen(false)}
            >
              <Logo className="text-white" />
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-lime hover:bg-white/5 hover:text-lime"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          {/* links */}
          <nav className="relative z-[2] flex flex-1 flex-col justify-center px-[30px]">
            {MOBILE_LINKS.map((l, i) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${0.06 * (i + 1)}s` }}
                  className="menu-item group flex items-baseline gap-4 border-b border-white/10 py-5"
                >
                  <span className="font-display text-[14px] font-bold text-lime/60">
                    0{i + 1}
                  </span>
                  <span
                    className={`font-display text-[clamp(34px,9vw,46px)] font-extrabold tracking-[-1px] transition-colors ${
                      active ? "text-lime" : "text-white group-hover:text-lime"
                    }`}
                  >
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* bottom: CTA + contact */}
          <div
            className="menu-item relative z-[2] px-[30px] pb-10"
            style={{ animationDelay: `${0.06 * (MOBILE_LINKS.length + 1)}s` }}
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-xl bg-lime px-6 py-4 font-display text-[16px] font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
            <div className="mt-6 flex flex-col gap-1.5 text-[14.5px] text-white/55">
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-lime"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-lime"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
