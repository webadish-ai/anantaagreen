"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, contact, telHref } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Desktop dropdowns are click-to-close, not just hover-to-open — CSS
  // :hover alone can't do this, since a click doesn't clear it, so the
  // panel would sit open until the pointer physically moves away.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const closeDesktopMenus = () => {
    setOpenMenu(null);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      closeDesktopMenus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-forest-950/88 border-cream-50/8 border-b backdrop-blur-xl"
          : "border-b border-transparent"
      } ${menuOpen ? "bg-forest-950" : ""}`}
    >
      {/* Contact micro-bar — stays pinned above the nav at every scroll position.
          Phone and email both stay visible on mobile, at a tighter size so the
          pair fits a 360px screen without truncating. */}
      <div className="border-cream-50/8 relative z-50 border-b">
        <div className="shell flex h-9 items-center justify-between gap-3">
          <p className="eyebrow text-green-200/60 hidden lg:block">
            Ahmedabad · Gujarat · India
          </p>
          <div className="flex flex-1 items-center justify-between gap-3 font-mono text-[0.5625rem] tracking-[0.06em] uppercase sm:text-[0.625rem] sm:tracking-[0.14em] lg:flex-none lg:justify-end lg:gap-6 lg:text-[0.6875rem] lg:tracking-[0.22em]">
            <a
              href={telHref(contact.phones[0])}
              className="text-cream-50/60 hover:text-flame-400 whitespace-nowrap transition-colors"
            >
              {contact.phones[0]}
            </a>
            <span aria-hidden className="bg-flame-500 hidden h-3 w-px lg:block" />
            <a
              href={`mailto:${contact.email}`}
              className="text-cream-50/60 hover:text-flame-400 whitespace-nowrap transition-colors"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="relative z-50">
        <div className="shell flex h-18 items-center justify-between gap-8 lg:h-20">
          <Link
            href="/"
            aria-label="Anantaa Green Energy LLP — home"
            className="shrink-0"
          >
            <Image
              src="/brand/logo-on-dark.svg"
              alt="Anantaa Green Energy LLP"
              width={398}
              height={96}
              priority
              unoptimized
              className="h-9 w-auto lg:h-10"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {nav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.href)}
                onMouseLeave={closeDesktopMenus}
                onFocus={() => setOpenMenu(item.href)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    closeDesktopMenus();
                  }
                }}
              >
                <Link
                  href={item.href}
                  onClick={closeDesktopMenus}
                  className={`eyebrow relative block px-4 py-2 transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-flame-400"
                      : "text-cream-50/70 hover:text-cream-50"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      aria-hidden
                      className="bg-flame-500 absolute inset-x-4 -bottom-0.5 h-px"
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className={`absolute top-full left-1/2 w-80 -translate-x-1/2 pt-3 transition-all duration-300 ${
                      openMenu === item.href
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
                  >
                    {/* No overflow-hidden here — a nested flyout (e.g. CBG
                        Plant -> CBG Technology) must be able to escape this
                        box. Corner-rounding is applied per row below instead. */}
                    <div className="border-cream-50/10 bg-forest-900/95 rounded-xl border shadow-2xl backdrop-blur-xl">
                      {item.children.map((child, i, siblings) => (
                        <div
                          key={child.href}
                          className={`relative ${
                            i > 0 ? "border-cream-50/8 border-t" : ""
                          }`}
                          {...(child.children && {
                            onMouseEnter: () => setOpenSubmenu(child.href),
                            onMouseLeave: () => setOpenSubmenu(null),
                          })}
                        >
                          <Link
                            href={child.href}
                            onClick={closeDesktopMenus}
                            className={`hover:bg-forest-800 group/item flex items-center justify-between gap-3 overflow-hidden px-5 py-4 transition-colors ${
                              i === 0 ? "rounded-t-xl" : ""
                            } ${i === siblings.length - 1 ? "rounded-b-xl" : ""}`}
                          >
                            <span>
                              <span className="eyebrow text-cream-50 group-hover/item:text-flame-400 block transition-colors">
                                {child.label}
                              </span>
                              <span className="text-cream-50/50 mt-1 block text-sm leading-snug">
                                {child.blurb}
                              </span>
                            </span>
                            {child.children && (
                              <span
                                aria-hidden
                                className="text-cream-50/40 group-hover/item:text-flame-400 shrink-0 transition-colors"
                              >
                                →
                              </span>
                            )}
                          </Link>

                          {child.children && (
                            <div
                              className={`absolute top-0 left-full w-72 pl-2 transition-all duration-300 ${
                                openSubmenu === child.href
                                  ? "pointer-events-auto opacity-100"
                                  : "pointer-events-none opacity-0"
                              }`}
                            >
                              <div className="border-cream-50/10 bg-forest-900/95 overflow-hidden rounded-xl border shadow-2xl backdrop-blur-xl">
                                {child.children.map((grandchild, j) => (
                                  <Link
                                    key={grandchild.href}
                                    href={grandchild.href}
                                    onClick={closeDesktopMenus}
                                    className={`hover:bg-forest-800 group/item block px-5 py-4 transition-colors ${
                                      j > 0 ? "border-cream-50/8 border-t" : ""
                                    }`}
                                  >
                                    <span className="eyebrow text-cream-50 group-hover/item:text-flame-400 block transition-colors">
                                      {grandchild.label}
                                    </span>
                                    <span className="text-cream-50/50 mt-1 block text-sm leading-snug">
                                      {grandchild.blurb}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contact"
              className="eyebrow from-flame-500 to-flame-400 text-forest-950 ml-4 rounded-full bg-linear-to-r px-6 py-3 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a Project
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="border-cream-50/20 text-cream-50 relative z-50 flex h-11 w-11 items-center justify-center rounded-full border lg:hidden"
          >
            <span className="relative block h-3 w-4.5">
              <span
                className={`bg-cream-50 absolute left-0 block h-px w-full transition-all duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`bg-cream-50 absolute left-0 block h-px w-full transition-all duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!menuOpen}
        className="bg-forest-950 blueprint fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto pt-32 pb-12 lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex-1">
          {nav.map((item, i) => (
            <div key={item.href} className="border-cream-50/10 border-b">
              <Link
                href={item.href}
                onClick={closeMenu}
                className="flex items-baseline gap-4 py-5"
              >
                <span className="text-flame-400 font-mono text-[0.65rem] tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`display text-3xl ${
                    isActive(item.href) ? "text-flame-400" : "text-cream-50"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
              {item.children && (
                <div className="pb-5 pl-10">
                  {item.children.map((child) => (
                    <div key={child.href}>
                      <Link
                        href={child.href}
                        onClick={closeMenu}
                        className="eyebrow text-cream-50/55 hover:text-flame-400 block py-2"
                      >
                        {child.label}
                      </Link>
                      {child.children && (
                        <div className="pl-5">
                          {child.children.map((grandchild) => (
                            <Link
                              key={grandchild.href}
                              href={grandchild.href}
                              onClick={closeMenu}
                              className="eyebrow text-cream-50/40 hover:text-flame-400 block py-2"
                            >
                              {grandchild.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="shell mt-10 space-y-3">
          {contact.phones.map((p) => (
            <a
              key={p}
              href={telHref(p)}
              className="text-cream-50/70 hover:text-flame-400 block font-mono text-sm"
            >
              {p}
            </a>
          ))}
          <a
            href={`mailto:${contact.email}`}
            className="text-cream-50/70 hover:text-flame-400 block font-mono text-sm break-all"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </header>
  );
}
