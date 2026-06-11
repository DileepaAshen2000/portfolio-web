"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../SectionWrapper";

const highlights = [
  {
    icon: "fa-solid fa-graduation-cap",
    title: "University of Moratuwa",
    desc: "B.Sc (Hons) Information Technology",
    color: "#00D9FF",
  },
  {
    icon: "fa-solid fa-code",
    title: "Full-Stack Engineering",
    desc: "React, Node.js, Flutter, Firebase, Cloud",
    color: "#6C63FF",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "Product-Focused Mindset",
    desc: "Building solutions from a user-centered design perspective",
    color: "#8B5CF6",
  },
  {
    icon: "fa-solid fa-brain",
    title: "System Design Thinking",
    desc: "Approaching problems with architectural clarity",
    color: "#3B82F6",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 md:py-32">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
        <SectionHeader
          label="About"
          title="The Engineer Behind the Code"
          subtitle="Driven by curiosity, powered by logic, and inspired by the universe."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Story */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <p
                className="text-base leading-[1.85] text-text-secondary"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Skilled Software Engineering undergraduate at the{" "}
                <span className="text-text-primary font-medium">
                  University of Moratuwa
                </span>
                , passionate about building impactful digital systems that solve
                real-world problems. My journey in tech is deeply rooted in a
                fascination with{" "}
                <span className="text-accent-cyan/80">mathematics</span> and{" "}
                <span className="text-accent-indigo/80">astrophysics</span> —
                disciplines that teach us to think in systems, patterns, and
                first principles.
              </p>
              <p
                className="text-base leading-[1.85] text-text-secondary mt-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                With hands-on experience across the full stack — from React and
                Node.js to Flutter, Firebase, and cloud deployment — I approach
                every project with a{" "}
                <span className="text-text-primary font-medium">
                  solution design perspective
                </span>
                . I believe great software isn&apos;t just functional; it&apos;s
                thoughtful, scalable, and designed with the end user at its
                core.
              </p>
              <p
                className="text-base leading-[1.85] text-text-secondary mt-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                As a co-founder of{" "}
                <span className="text-text-primary font-medium">
                  ApeakStrategy
                </span>
                , I&apos;ve led solution architecture, DevOps operations, and
                delivered production systems across multiple industries. I
                thrive on collaborative innovation and turning complex
                challenges into elegant, working systems.
              </p>
            </div>

            {/* Quote card */}
            <div className="glass-card rounded-2xl p-6 border-l-2 border-accent-cyan/30">
              <p
                className="text-sm italic text-text-muted leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                &ldquo;The universe is under no obligation to make sense to you
                — but code should be.&rdquo;
              </p>
              <p
                className="text-xs text-accent-cyan/50 mt-2"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                — Engineering Philosophy
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${h.color}12`,
                    border: `1px solid ${h.color}25`,
                  }}
                >
                  <i className={`${h.icon} text-lg`} style={{ color: h.color }} />
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold text-text-primary mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {h.title}
                  </h3>
                  <p
                    className="text-xs text-text-muted leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {h.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Education detail card
            <motion.div
              className="sm:col-span-2 glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent-cyan/8 border border-accent-cyan/15 flex items-center justify-center">
                  <i className="fa-solid fa-award text-accent-cyan text-sm" />
                </div>
                <div>
                  <h4
                    className="text-sm font-semibold text-text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Education Highlights
                  </h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p
                    className="text-xs text-text-muted"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  >
                    CURRENT GPA
                  </p>
                  <p
                    className="text-xl font-bold gradient-text-cyan mt-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    3.62
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs text-text-muted"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  >
                    RECOGNITION
                  </p>
                  <p
                    className="text-sm text-text-primary mt-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Dean&apos;s List — L2S2
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs text-text-muted"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  >
                    A/L Z-SCORE
                  </p>
                  <p
                    className="text-sm text-text-primary mt-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    1.7565
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs text-text-muted"
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10 }}
                  >
                    STREAM
                  </p>
                  <p
                    className="text-sm text-text-primary mt-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Bio Science → IT
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
