import React, { useState, useEffect } from "react";

const WA_URL = "https://wa.me/918956596585";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "Treatments", href: "#treatments" },
  { label: "About",      href: "#about" },
  { label: "Reviews",    href: "#reviews" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-emerald-900"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 no-underline">
            <span className="text-2xl">🌿</span>
            <div>
              <p
                className={`font-bold  text-2xl leading-tight font-serif ${
                  scrolled ? "text-emerald-800" : "text-white"
                }`}
              >
                Natural Cure  Clinic
              </p>
              <p
                className={`text-xs ${
                  scrolled ? "text-emerald-600" : "text-emerald-200"
                }`}
              >
                {/* Qudrati Ilaj • Bharosemand Mashwara */}
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                  scrolled ? "text-emerald-800" : "text-emerald-100"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              📱 WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-all ${
                  scrolled ? "bg-emerald-800" : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 ${
                  scrolled ? "bg-emerald-800" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all ${
                  scrolled ? "bg-emerald-800" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-emerald-900 px-4 pb-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="block py-2.5 text-emerald-100 text-sm font-medium border-b border-emerald-800 hover:text-yellow-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="mt-3 flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full"
            >
              📱 WhatsApp Consultation
            </a>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
