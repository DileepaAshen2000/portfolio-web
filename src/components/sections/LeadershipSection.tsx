"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../SectionWrapper";

const roles = [
  {
    title: "Co-Founder & Software Engineer",
    company: "ApeakStrategy",
    period: "Mar 2025 — Present",
    description:
      "Co-founded a digital solutions and marketing startup delivering web, mobile, and branding solutions for multiple clients across diverse industries.",
    responsibilities: [
      "Solution Architecture & System Design",
      "Full-Stack Product Development",
      "DevOps, Hosting & Cloud Deployment",
      "EV Charging Platform with OCPP Integration",
      "Payment Gateway Integration & API Development",
      "Team Leadership & Client Relations",
    ],
    icon: "fa-solid fa-rocket",
    color: "#00D9FF",
  },
  {
    title: "Software Engineering Intern",
    company: "Hasthiya Company",
    period: "Feb 2025 — Feb 2026",
    description:
      "Full-stack development with React.js, Node.js, Express.js, Firebase, and MySQL in agile production environments.",
    responsibilities: [
      "Full-Stack Web Application Development",
      "Backend API Creation & Server Logic",
      "Responsive UI/UX Implementation",
      "Agile/SCRUM Team Collaboration",
      "Deployment, Debugging & API Testing",
      "Git/GitHub-Based Development Workflows",
    ],
    icon: "fa-solid fa-briefcase",
    color: "#6C63FF",
  },
];

const softSkills = [
  { name: "Solution-Oriented Thinking", icon: "fa-solid fa-lightbulb" },
  { name: "System Design Thinking", icon: "fa-solid fa-diagram-project" },
  { name: "User-Centered Thinking", icon: "fa-solid fa-users" },
  { name: "Problem Solving", icon: "fa-solid fa-puzzle-piece" },
  { name: "Team Collaboration", icon: "fa-solid fa-people-group" },
  { name: "Communication", icon: "fa-solid fa-comments" },
  { name: "Leadership", icon: "fa-solid fa-compass" },
  { name: "Critical Thinking", icon: "fa-solid fa-brain" },
];

export default function LeadershipSection() {
  return (
    <SectionWrapper id="leadership" className="py-24 md:py-32">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
        <SectionHeader
          label="Leadership"
          title="Command Center"
          subtitle="Leading teams, architecting solutions, and shipping products."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              className="glass-card rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div
                className="h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${role.color}40, transparent)`,
                }}
              />
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${role.color}12`,
                      border: `1px solid ${role.color}25`,
                    }}
                  >
                    <i
                      className={`${role.icon} text-lg`}
                      style={{ color: role.color }}
                    />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold text-text-primary"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {role.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: role.color,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {role.company}
                    </p>
                    <p
                      className="text-xs text-text-muted mt-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {role.period}
                    </p>
                  </div>
                </div>

                <p
                  className="text-sm text-text-secondary leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {role.description}
                </p>

                <div className="flex flex-col gap-2.5">
                  {role.responsibilities.map((r, ri) => (
                    <motion.div
                      key={r}
                      className="flex items-center gap-3 text-sm text-text-muted"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + ri * 0.05 + 0.3 }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: role.color }}
                      />
                      <span style={{ fontFamily: "var(--font-body)" }}>
                        {r}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          className="glass-card rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3
            className="text-lg font-semibold text-text-primary mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-accent-cyan/15 hover:bg-accent-cyan/3 transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i + 0.4 }}
              >
                <i className={`${skill.icon} text-sm text-text-muted`} />
                <span
                  className="text-xs text-text-secondary"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
