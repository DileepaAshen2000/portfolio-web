"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../SectionWrapper";

interface Project {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  github?: string;
  live?: string;
  color: string;
  icon: string;
  period: string;
}

const projects: Project[] = [
  {
    title: "Lanka EV Plus",
    subtitle: "EV Charging & Mobility Platform",
    challenge:
      "Sri Lanka lacked a unified EV charging infrastructure with real-time availability and seamless payment integration.",
    solution:
      "Built a full-stack EV charging ecosystem with mobile app, admin panel, and web platform integrating 60kW chargers, OCPP protocol, real-time availability, payment gateway, and comprehensive API backend.",
    impact:
      "Pioneered digital EV infrastructure management for Sri Lanka's emerging electric vehicle market.",
    technologies: ["React", "Node.js", "Firebase", "Flutter", "OCPP", "REST API"],
    github: "https://github.com/DileepaAshen2000",
    color: "#00D9FF",
    icon: "fa-solid fa-charging-station",
    period: "Oct 2025 - Apr 2026",
  },
  {
    title: "Sinhala Hate Speech Detection",
    subtitle: "Final Year Research Project",
    challenge:
      "Detecting hate speech in Sinhala text is extremely challenging due to limited NLP resources and contextual complexity of the language.",
    solution:
      "Developed a machine learning-based system leveraging contextual understanding with transformer models and trend analysis for improved classification accuracy.",
    impact:
      "Advanced the state of Sinhala NLP research with a novel approach to contextual hate speech detection.",
    technologies: ["Python", "ML/NLP", "Transformers", "Data Analysis"],
    github: "https://github.com/DileepaAshen2000",
    color: "#6C63FF",
    icon: "fa-solid fa-brain",
    period: "Final Year Research",
  },
  {
    title: "Mensa Web Application",
    subtitle: "Official Platform & Admin Panel",
    challenge:
      "Needed a comprehensive web platform with content management, user administration, and secure authentication.",
    solution:
      "Contributed to developing the official website and admin panel with content management, user admin, secure authentication, and optimized system performance.",
    impact:
      "Enhanced organizational digital presence with streamlined content and user management.",
    technologies: ["React", "Node.js", "Firebase", "JWT"],
    github: "https://github.com/DileepaAshen2000",
    color: "#8B5CF6",
    icon: "fa-solid fa-globe",
    period: "Team Project - 2025",
  },
  {
    title: "Inventory Management System",
    subtitle: "Level 2 Project — Rootcode Collaboration",
    challenge:
      "Manual inventory processes led to inaccuracies, security vulnerabilities, and poor operational visibility.",
    solution:
      "Developed core inventory features including stock-in/out, adjustments, dashboard analytics, password recovery, and efficient data handling workflows.",
    impact:
      "Streamlined inventory operations with real-time tracking, secure access, and actionable analytics.",
    technologies: ["React", "Node.js", "MySQL", "Express.js"],
    github: "https://github.com/DileepaAshen2000",
    color: "#3B82F6",
    icon: "fa-solid fa-boxes-stacked",
    period: "Level 2 - Rootcode 2024",
  },
  {
    title: "Green-Light Solar Lanka",
    subtitle: "Solar Product Management Platform",
    challenge:
      "Solar product businesses needed a digital platform for managing listings, payments, and administrative operations.",
    solution:
      "Built a full web application to manage solar product listings, payment processing, and administrative operations with a user-friendly interface.",
    impact:
      "Improved product visibility, transaction handling, and overall business efficiency for solar energy providers.",
    technologies: ["React", "Node.js", "Firebase", "REST API"],
    github: "https://github.com/DileepaAshen2000",
    color: "#10B981",
    icon: "fa-solid fa-solar-panel",
    period: "Team Project (Ongoing)",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="py-24 md:py-32">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
        <SectionHeader
          label="Projects"
          title="Featured Missions"
          subtitle="Impactful systems designed and deployed across diverse problem domains."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top accent line */}
              <div
                className="h-px w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}40, transparent)`,
                }}
              />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      <i
                        className={`${project.icon}`}
                        style={{ color: project.color }}
                      />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold text-text-primary"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-xs text-text-muted"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-[10px] text-text-muted whitespace-nowrap"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {project.period}
                  </span>
                </div>

                {/* Challenge & Solution */}
                <div className="flex flex-col gap-3 mb-5">
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-wider text-text-muted mb-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Challenge
                    </p>
                    <p
                      className="text-sm text-text-secondary leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-wider text-text-muted mb-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Solution
                    </p>
                    <p
                      className="text-sm text-text-secondary leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div
                  className="p-3 rounded-lg mb-5"
                  style={{
                    background: `${project.color}08`,
                    border: `1px solid ${project.color}15`,
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-wider mb-1"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: project.color,
                    }}
                  >
                    Impact
                  </p>
                  <p
                    className="text-sm text-text-secondary leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {project.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-cyan transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <i className="fa-brands fa-github text-xs" />
                      Source Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-cyan transition-colors"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
