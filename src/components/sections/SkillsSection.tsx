"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../SectionWrapper";
import { SiNextdotjs, SiFlutter, SiVite, SiCanva, SiDavinciresolve, SiExpress, SiSpringboot, SiHostinger } from "react-icons/si";

interface Skill {
  name: string;
  icon: string | React.ReactNode;
}

interface SkillGroup {
  category: string;
  description: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend & Mobile",
    description: "Building immersive user experiences",
    icon: "fa-solid fa-code",
    color: "#8B5CF6", // Purple accent
    skills: [
      { name: "React", icon: "fa-brands fa-react" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Vue", icon: "fa-brands fa-vuejs" },
    ],
  },
  {
    category: "UI/UX Design",
    description: "Crafting visual perfection",
    icon: "fa-solid fa-paintbrush",
    color: "#6C63FF", // Indigo accent
    skills: [
      { name: "Photoshop", icon: "Ps" },
      { name: "Illustrator", icon: "Ai" },
      { name: "Adobe XD", icon: "Xd" },
      { name: "Premiere Pro", icon: "Pr" },
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "Canva", icon: <SiCanva /> },
      { name: "DaVinci Resolve", icon: <SiDavinciresolve /> },
    ],
  },
  {
    category: "Backend & Core",
    description: "Robust and scalable architecture",
    icon: "fa-solid fa-server",
    color: "#F59E0B", // Amber accent
    skills: [
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "Java", icon: "fa-brands fa-java" },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    category: "Cloud & DevOps",
    description: "Deploying at global scale",
    icon: "fa-solid fa-cloud",
    color: "#3B82F6", // Blue accent
    skills: [
      { name: "AWS", icon: "fa-brands fa-aws" },
      { name: "Docker", icon: "fa-brands fa-docker" },
      { name: "MongoDB", icon: "fa-solid fa-leaf" },
      { name: "MySQL", icon: "fa-solid fa-database" },
      { name: "MSSQL", icon: "fa-solid fa-database" },
      { name: "Firebase", icon: "fa-solid fa-fire" },
      { name: "Hostinger", icon: <SiHostinger /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="py-24 md:py-32">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
        <SectionHeader
          label="Skills"
          title="Tech Stack"
          subtitle="Technologies and tools that power my digital solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card glass-card-hover rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-start gap-4 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${group.color}15`,
                    border: `1px solid ${group.color}30`,
                  }}
                >
                  <i
                    className={`${group.icon} text-lg`}
                    style={{ color: group.color }}
                  />
                </div>
                <div>
                  <h3
                    className="text-lg md:text-xl font-bold text-text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {group.category}
                  </h3>
                  <p 
                    className="text-sm text-text-muted mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05 + 0.3 }}
                  >
                    {typeof skill.icon === "string" ? (
                      skill.icon.startsWith("fa-") ? (
                        <i
                          className={`${skill.icon} text-sm`}
                          style={{ color: "#94A3B8" }}
                        />
                      ) : (
                        <span className="text-[10px] font-bold bg-white/10 px-1.5 py-0.5 rounded text-text-muted" style={{ fontFamily: "var(--font-heading)" }}>
                          {skill.icon}
                        </span>
                      )
                    ) : (
                      <span className="text-sm flex items-center justify-center" style={{ color: "#94A3B8" }}>
                        {skill.icon}
                      </span>
                    )}
                    <span
                      className="text-sm font-medium text-text-secondary"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
