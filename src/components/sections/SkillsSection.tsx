"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SiCanva, SiDavinciresolve, SiExpress, SiFlutter, SiHostinger, SiNextdotjs, SiSpringboot, SiVite } from "react-icons/si";

interface Skill { name: string; icon: string | ReactNode }
interface SkillGroup { category: string; description: string; icon: string; skills: Skill[] }

const skillGroups: SkillGroup[] = [
  {
    category: "Languages", description: "Core programming languages", icon: "fa-solid fa-code",
    skills: [
      { name: "JavaScript", icon: "fa-brands fa-js" }, { name: "Python", icon: "fa-brands fa-python" },
      { name: "Java", icon: "fa-brands fa-java" }, { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
    ],
  },
  {
    category: "Frontend", description: "Building interactive interfaces", icon: "fa-brands fa-react",
    skills: [
      { name: "React", icon: "fa-brands fa-react" }, { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue", icon: "fa-brands fa-vuejs" }, { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    category: "Backend", description: "Server-side development", icon: "fa-solid fa-cube",
    skills: [
      { name: "Node.js", icon: "fa-brands fa-node-js" }, { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],
  },
  {
    category: "Database", description: "Data storage solutions", icon: "fa-solid fa-database",
    skills: [
      { name: "MongoDB", icon: "fa-solid fa-leaf" }, { name: "Firebase", icon: "fa-solid fa-fire" },
      { name: "MySQL", icon: "fa-solid fa-database" }, { name: "MSSQL", icon: "fa-solid fa-database" },
    ],
  },
  {
    category: "Mobile", description: "Cross-platform development", icon: "fa-solid fa-mobile-screen-button",
    skills: [{ name: "Flutter", icon: <SiFlutter /> }, { name: "Firebase", icon: "fa-solid fa-fire" }],
  },
  {
    category: "Cloud & DevOps", description: "Deploy and scale with confidence", icon: "fa-solid fa-cloud",
    skills: [
      { name: "AWS", icon: "fa-brands fa-aws" }, { name: "Docker", icon: "fa-brands fa-docker" },
      { name: "Hostinger", icon: <SiHostinger /> },
    ],
  },
  {
    category: "Design", description: "Visual design and prototyping", icon: "fa-solid fa-pen-ruler",
    skills: [
      { name: "Figma", icon: "fa-brands fa-figma" }, { name: "Photoshop", icon: "Ps" },
      { name: "Illustrator", icon: "Ai" }, { name: "Adobe XD", icon: "Xd" }, { name: "Canva", icon: <SiCanva /> },
    ],
  },
  {
    category: "Media Tools", description: "Creative production tools", icon: "fa-solid fa-photo-film",
    skills: [
      { name: "Premiere Pro", icon: "Pr" }, { name: "DaVinci Resolve", icon: <SiDavinciresolve /> },
    ],
  },
];

function SkillIcon({ icon }: { icon: Skill["icon"] }) {
  if (typeof icon !== "string") return <span className="skill-brand-icon">{icon}</span>;
  if (icon.startsWith("fa-")) return <i className={icon} />;
  return <span className="skill-letter-icon">{icon}</span>;
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="skills-section skills-section-light"
      style={{ backgroundColor: "#f3eee8", color: "#111111" }}
    >
      <div className="skills-background" aria-hidden="true">
        <div className="skills-asterisk"><i /><i /><i /></div>
        <div className="skills-dots" />
      </div>
      <div className="portfolio-container skills-content">
        <motion.header className="skills-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="portfolio-eyebrow">Skills</span>
          <h2>Technologies<br />I work with</h2>
          <p>I use modern technologies and tools to build scalable, high-performance, and user-friendly applications.</p>
          <i className="about-rule" aria-hidden="true" />
        </motion.header>

        <div className="skill-grid-band">
          <div className="skill-card-grid">
            {skillGroups.map((group, groupIndex) => (
              <motion.article
                className="skill-card"
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: (groupIndex % 4) * 0.06 }}
              >
                <header>
                  <span className="skill-group-icon"><i className={group.icon} /></span>
                  <div><h3>{group.category}</h3><p>{group.description}</p></div>
                </header>
                <div className="skill-list">
                  {group.skills.map((skill) => <div className="skill-chip" key={skill.name}><SkillIcon icon={skill.icon} /><span>{skill.name}</span></div>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
