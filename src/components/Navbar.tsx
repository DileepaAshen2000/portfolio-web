"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const goTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`portfolio-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="portfolio-container nav-inner">
          <a className="portfolio-brand" href="#hero" onClick={(event) => { event.preventDefault(); goTo("#hero"); }}>
            <span className="brand-mark" aria-hidden="true"><i /><i /></span>
            <span>Ashen</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => goTo(link.href)}>{link.label}</button>
            ))}
          </nav>

          <a className="portfolio-button portfolio-button-dark nav-resume" href="/Ashen_Resume.pdf" target="_blank" rel="noreferrer">
            Download CV <span aria-hidden="true">↓</span>
          </a>

          <button className="menu-toggle" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label="Toggle navigation">
            <span /><span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => goTo(link.href)}>{link.label}</button>
            ))}
            <a href="/Ashen_Resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
