"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="portfolio-hero">
      <div className="portfolio-container hero-stage">
        <motion.div
          className="hero-availability"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span aria-hidden="true" />
          Available for opportunities
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          <span>Engineering</span>
          <span>Digital Solutions</span>
        </motion.h1>

        <motion.div
          className="hero-orange-mark"
          aria-hidden="true"
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <i />
          <i />
          <i />
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/me2.png"
            alt="Dileepa Ashen, software engineer"
            fill
            priority
            sizes="(max-width: 700px) 72vw, 490px"
            className="hero-portrait-image"
          />
        </motion.div>

        <motion.div
          className="hero-intro"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.75 }}
        >
          <p>
            Engineering scalable, high-performance digital systems with a
            strong focus on clean architecture and seamless user experiences.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="portfolio-button portfolio-button-dark">
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="portfolio-text-link">
              Get in touch
            </a>
          </div>
        </motion.div>

        <a className="hero-scroll" href="#about" aria-label="Scroll to about section">
          <span>Scroll down</span>
          <svg viewBox="0 0 32 66" aria-hidden="true">
            <path d="M9 2c16 18 16 40 5 57M6 51l8 8 8-9" />
          </svg>
        </a>
      </div>
    </section>
  );
}
