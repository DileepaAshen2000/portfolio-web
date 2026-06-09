"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../SectionWrapper";

const interests = [
  {
    title: "Mathematics",
    description:
      "From linear algebra to number theory — mathematics is the language I use to understand patterns in code and the universe.",
    icon: "fa-solid fa-square-root-variable",
    color: "#00D9FF",
    topics: ["Linear Algebra", "Calculus", "Number Theory", "Graph Theory"],
  },
  {
    title: "Astrophysics",
    description:
      "The cosmos inspires my engineering philosophy — building systems that are scalable, elegant, and capable of handling immense complexity.",
    icon: "fa-solid fa-meteor",
    color: "#6C63FF",
    topics: ["Cosmology", "Orbital Mechanics", "Stellar Evolution", "Space-Time"],
  },
  {
    title: "Scientific Thinking",
    description:
      "Hypothesis-driven development. Every feature is an experiment, every deployment a controlled test in the pursuit of impact.",
    icon: "fa-solid fa-flask-vial",
    color: "#8B5CF6",
    topics: ["First Principles", "Systems Thinking", "Data-Driven Decisions", "Research Methods"],
  },
  {
    title: "Books & Research",
    description:
      "Continuous learning through reading across technology, science, philosophy, and innovation. Knowledge is the compound interest of the mind.",
    icon: "fa-solid fa-book-open-reader",
    color: "#F59E0B",
    topics: ["AI/ML Research", "System Design", "Science Literature", "Tech Innovation"],
  },
];

export default function CuriositySection() {
  return (
    <SectionWrapper id="curiosity" className="py-24 md:py-32">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
        <SectionHeader
          label="Curiosity Lab"
          title="Beyond the Code"
          subtitle="The intellectual pursuits that fuel my engineering perspective."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${interest.color}40, transparent)`,
                }}
              />
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${interest.color}12`,
                      border: `1px solid ${interest.color}25`,
                    }}
                  >
                    <i
                      className={`${interest.icon} text-lg`}
                      style={{ color: interest.color }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold text-text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {interest.title}
                    </h3>
                  </div>
                </div>

                <p
                  className="text-sm text-text-secondary leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {interest.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {interest.topics.map((topic) => (
                    <span
                      key={topic}
                      className="tech-badge"
                      style={{
                        borderColor: `${interest.color}20`,
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
