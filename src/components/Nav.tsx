"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Resources" },
];

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
                solid || open ? "bg-char" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="border-t border-[var(--line)] bg-paper px-[30px] py-4 md:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`block py-3 text-[15px] font-medium ${
                isActive(l.href) ? "text-lime-2" : "text-char"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {/* Client login — disabled for now
          <Link
            href="/portal"
            className="block py-3 text-[15px] font-medium text-muted"
          >
            Client login
          </Link>
          */}
          <Link
            href="/contact"
            className="mt-2 block rounded-lg bg-char px-6 py-3 text-center text-[14px] font-semibold text-white"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
