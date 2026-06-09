"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          background: scrolled
            ? "rgba(2, 6, 23, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.04)"
            : "1px solid transparent",
        }}
      >
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 group-hover:from-accent-cyan/30 group-hover:to-accent-indigo/30 transition-all" />
                <div className="absolute inset-[2px] rounded-[6px] bg-space-900 flex items-center justify-center">
                  <span
                    className="text-sm font-bold gradient-text"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    DA
                  </span>
                </div>
              </div>
              <span
                className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors hidden sm:block"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Dileepa Ashen
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="relative px-4 py-2 text-sm transition-colors"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: isActive ? "#00D9FF" : "#94A3B8",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.target as HTMLElement).style.color = "#F8FAFC";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.target as HTMLElement).style.color = "#94A3B8";
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-cyan"
                        style={{
                          boxShadow: "0 0 8px rgba(0,217,255,0.6)",
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#contact");
                }}
                className="btn-primary hidden md:inline-flex text-xs"
              >
                <i className="fa-solid fa-paper-plane text-[10px]" />
                Let&apos;s Connect
              </a>

              <button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-text-secondary"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
              >
                <i
                  className={`fa-solid ${
                    mobileOpen ? "fa-xmark" : "fa-bars"
                  } text-lg`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-space-900/95 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 glass-card p-6 flex flex-col gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left py-3 px-4 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-4 border-t border-white/5">
                <button
                  onClick={() => handleClick("#contact")}
                  className="btn-primary w-full justify-center"
                >
                  <i className="fa-solid fa-paper-plane text-xs" />
                  Let&apos;s Connect
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
