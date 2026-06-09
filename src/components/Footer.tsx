"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 flex items-center justify-center">
              <span
                className="text-[10px] font-bold gradient-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                DA
              </span>
            </div>
            <p
              className="text-xs text-text-muted"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © {currentYear} Dileepa Ashen. Engineered with precision.
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: "fa-brands fa-github",
                href: "https://github.com/DileepaAshen2000",
              },
              {
                icon: "fa-brands fa-linkedin-in",
                href: "https://linkedin.com/in/dileepa-ashen",
              },
              {
                icon: "fa-brands fa-medium",
                href: "https://medium.com/@ashen",
              },
              {
                icon: "fa-solid fa-envelope",
                href: "mailto:dileepaashen81@gmail.com",
              },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all border border-transparent hover:border-accent-cyan/15"
              >
                <i className={`${s.icon} text-xs`} />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs text-text-muted hover:text-accent-cyan transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <i className="fa-solid fa-arrow-up text-[10px]" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
