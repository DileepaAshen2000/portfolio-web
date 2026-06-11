"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
  {
    icon: "fa-brands fa-github",
    href: "https://github.com/DileepaAshen2000",
    label: "GitHub",
  },
  {
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/in/dileepa-ashen-179534270/",
    label: "LinkedIn",
  },
  {
    icon: "fa-brands fa-medium",
    href: "https://medium.com/@dileepaashen81",
    label: "Medium",
  },
  {
    icon: "fa-solid fa-envelope",
    href: "mailto:dileepaashen81@gmail.com",
    label: "Email",
  },
];

const stats = [
  { value: "5+", label: "Projects" },
  { value: "1+", label: "Year Exp" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-16"
    >
      {/* Nebula ambient glows */}
      <div
        className="nebula-glow"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(0,217,255,0.08), transparent 70%)",
        }}
      />
      <div
        className="nebula-glow"
        style={{
          width: 500,
          height: 500,
          bottom: "5%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(108,99,255,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="flex-1 flex flex-col items-start text-left gap-6 w-full"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Status badge */}
            <motion.div
              className="section-label"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-text-primary">Dileepa</span>
              <br />
              <span className="gradient-text">Ashen</span>
            </h1>

            {/* Title */}
            <p
              className="text-lg md:text-xl text-text-secondary font-light tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Software Engineer{" "}
              <span className="text-accent-cyan/60 mx-2">|</span> Full-Stack
              Developer
            </p>

            {/* Description */}
            <p
              className="text-sm md:text-base text-text-muted max-w-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Engineering impactful digital systems inspired by mathematics, 
              astrophysics, and the complexity of the universe.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a href="#projects" className="btn-primary">
                <i className="fa-solid fa-rocket text-xs" />
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                <i className="fa-solid fa-paper-plane text-xs" />
                Get In Touch
              </a>
              <a
                href="/Ashen_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <i className="fa-solid fa-file-arrow-down text-xs" />
                Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-3 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/8 text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300"
                >
                  <i className={`${s.icon} text-sm`} />
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-8 mt-6 pt-6 border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div
                    className="text-2xl font-bold gradient-text-cyan"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-text-muted mt-1 uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo Card */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Orbital ring decoration */}
              <div className="absolute -inset-8 md:-inset-12">
                <svg
                  className="w-full h-full animate-spin"
                  style={{ animationDuration: "30s" }}
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="190"
                    stroke="url(#orbital-grad)"
                    strokeWidth="0.5"
                    strokeDasharray="8 12"
                    opacity="0.3"
                  />
                  <defs>
                    <linearGradient
                      id="orbital-grad"
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="400"
                    >
                      <stop offset="0%" stopColor="#00D9FF" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Glow behind card */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,217,255,0.1), transparent 60%)",
                  filter: "blur(40px)",
                  transform: "scale(1.3)",
                }}
              />

              {/* Glass Card */}
              <div className="relative glass-card rounded-3xl p-3 glow-cyan">
                <div className="relative w-64 h-80 md:w-72 md:h-88 lg:w-80 lg:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/me.png"
                    alt="Dileepa Ashen - Software Engineer"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-900/80 via-transparent to-transparent" />

                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className="text-xs text-accent-cyan/70 uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                    >
                      Full Stack Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent dots */}
              <motion.div
                className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-accent-cyan/40"
                animate={{ y: [-5, 5, -5], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-2 h-2 rounded-full bg-accent-indigo/40"
                animate={{ y: [5, -5, 5], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span
          className="text-text-muted text-[10px] uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll to explore
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-accent-cyan/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
