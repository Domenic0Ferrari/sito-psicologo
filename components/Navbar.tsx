"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/contattami", label: "Contattami" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b border-azzurro/30 bg-white px-4 shadow-sm md:px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground hover:text-arancione transition-colors"
        >
          Maria Rossi
        </Link>

        {/* Desktop: horizontal links */}
        <nav className="hidden md:flex md:items-center md:gap-6" aria-label="Menu principale">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-foreground hover:text-azzurro transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile: hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded text-foreground hover:text-arancione transition-colors md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{open ? "Chiudi menu" : "Apri menu"}</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Backdrop: semi-trasparente quando menu aperto */}
      <div
        aria-hidden
        className={`fixed inset-0 top-14 z-30 bg-foreground/10 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu overlay: fixed, below navbar, animazione apertura + trasparenza */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Menu di navigazione"
        aria-hidden={!open}
        className={`fixed left-0 right-0 top-14 z-40 border-b border-azzurro/30 bg-white/95 shadow-lg backdrop-blur-md transition-all duration-200 ease-out md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4" aria-label="Menu principale">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-foreground hover:text-azzurro transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
