"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/context";

const LOGO_URL =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/rain-forest-exp-logo-trans.png";

const navLinks = [
  { key: "home" as const, href: "/" },
  { key: "tours" as const, href: "/tours" },
  { key: "about" as const, href: "/about" },
  { key: "contact" as const, href: "/contact" },
  { key: "blog" as const, href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={LOGO_URL}
            alt="Rain Forest Experiences CR"
            width={260}
            height={80}
            className="h-12 sm:h-16 md:h-20 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-none object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-forest-400 transition-colors text-sm font-medium tracking-wide uppercase ${
                (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                  ? "text-forest-400"
                  : "text-white/90"
              }`}
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <LanguageSwitcher />
          <a
            href="https://wa.me/50685104507"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest-600 hover:bg-forest-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/30"
          >
            {t.nav.bookNow}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 flex-shrink-0"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-900/98 backdrop-blur-lg px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block transition-colors text-base font-medium py-2 ${
                (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                  ? "text-forest-400"
                  : "text-white/90 hover:text-forest-400"
              }`}
            >
              {t.nav[link.key]}
            </Link>
          ))}
          <div className="py-2">
            <LanguageSwitcher />
          </div>
          <a
            href="https://wa.me/50685104507"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-forest-600 hover:bg-forest-500 text-white px-6 py-3 rounded-full text-center font-semibold transition-all"
          >
            {t.nav.bookNow}
          </a>
        </div>
      )}
    </nav>
  );
}
