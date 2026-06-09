"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../SectionWrapper";

const timeline = [
  {
    year: "2022",
    title: "Mission Launch",
    subtitle: "University of Moratuwa",
    description:
      "Began B.Sc (Hons) in Information Technology. Immediately immersed in full-stack development, algorithms, and system design fundamentals.",
    icon: "fa-solid fa-rocket",
    color: "#00D9FF",
    status: "Completed",
  },
  {
    year: "2023",
    title: "First Contact",
    subtitle: "Competitions & Community",
    description:
      "Participated in CODE RUSH (10th place), MAD HACK, Mora UXplore, and Tech-Triathlon. Joined the Embedded Systems Laboratory and became Department Facilitator at EXMO Exhibition.",
    icon: "fa-solid fa-trophy",
    color: "#6C63FF",
    status: "Completed",
  },
  {
    year: "2024",
    title: "Systems Online",
    subtitle: "Level 2 Projects & Rootcode",
    description:
      "Built the Inventory Management System with Rootcode collaboration. Developed core features including stock management, dashboard analytics, and secure authentication flows.",
    icon: "fa-solid fa-server",
    color: "#8B5CF6",
    status: "Completed",
  },
  {
    year: "2025",
    title: "Deep Space Operations",
    subtitle: "Internship at Hasthiya",
    description:
      "Full-stack engineering with React, Node.js, Express, Firebase, and MySQL. Worked in Agile/SCRUM teams on production projects, API development, and responsive UI/UX.",
    icon: "fa-solid fa-briefcase",
    color: "#3B82F6",
    status: "Completed",
  },
  {
    year: "2025",
    title: "Station Founded",
    subtitle: "Co-Founded ApeakStrategy",
    description:
      "Launched a digital solutions startup. Led solution architecture, DevOps, cloud deployment, and built full-stack platforms across multiple industries including EV charging with OCPP integration.",
    icon: "fa-solid fa-building",
    color: "#00D9FF",
    status: "Active",
  },
  {
    year: "2026",
    title: "Current Orbit",
    subtitle: "Research & Growth",
    description:
      "Final year research on Sinhala Hate Speech Detection using ML/NLP. Continuing to build Lanka EV Plus, Green-Light Solar Lanka, and expanding ApeakStrategy's client portfolio.",
    icon: "fa-solid fa-satellite",
    color: "#6C63FF",
    status: "In Progress",
  },
];

export default function JourneySection() {
  return (
    <SectionWrapper id="journey" className="py-24 md:py-32">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
        <SectionHeader
          label="Journey"
          title="Mission Timeline"
          subtitle="Every milestone is a step through the cosmos of growth."
        />

        <div className="relative">
          {/* Center timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 timeline-line" />

          <div className="flex flex-col gap-12 md:gap-16">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ml-16 md:ml-0 ${
                      isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                    }`}
                  >
                    <div className="glass-card glass-card-hover rounded-2xl p-6 inline-block text-left w-full">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs px-2.5 py-1 rounded-md"
                          style={{
                            background: `${item.color}12`,
                            color: item.color,
                            fontFamily: "var(--font-mono)",
                            border: `1px solid ${item.color}25`,
                          }}
                        >
                          {item.year}
                        </span>
                        <span
                          className="text-[10px] uppercase tracking-wider"
                          style={{
                            color:
                              item.status === "Active"
                                ? "#10B981"
                                : item.status === "In Progress"
                                ? "#F59E0B"
                                : "#64748B",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                      <h3
                        className="text-lg font-semibold text-text-primary mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm text-accent-cyan/70 mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.subtitle}
                      </p>
                      <p
                        className="text-sm text-text-muted leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        boxShadow: `0 0 20px ${item.color}15`,
                      }}
                    >
                      <i
                        className={`${item.icon} text-sm`}
                        style={{ color: item.color }}
                      />
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
