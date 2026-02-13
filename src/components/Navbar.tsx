"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Rain%20Forest%20Ex/rain-forest-exp-logo-trans.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Tours", href: "#tours" },
  { label: "La Fortuna", href: "#fortuna" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo - más grande */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src={LOGO_URL}
            alt="Rain Forest Experiences CR"
            width={260}
            height={80}
            className="h-16 sm:h-20 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-forest-400 transition-colors text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/50688888888"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest-600 hover:bg-forest-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-forest-600/30"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-dark-900/98 backdrop-blur-lg px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/90 hover:text-forest-400 transition-colors text-base font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/50688888888"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-forest-600 hover:bg-forest-500 text-white px-6 py-3 rounded-full text-center font-semibold transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}
