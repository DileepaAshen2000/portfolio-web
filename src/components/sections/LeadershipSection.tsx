"use client";

import { motion } from "framer-motion";

const roles = [
  {
    number: "01", title: "Co-Founder & Software Engineer", company: "ApeakStrategy", period: "Mar 2025 — Present",
    description: "Co-founded a digital solutions and marketing startup delivering web, mobile, and branding solutions for multiple clients across diverse industries.",
    responsibilities: ["Solution Architecture & System Design", "Full-Stack Product Development", "DevOps, Hosting & Cloud Deployment", "EV Charging Platform with OCPP Integration", "Payment Gateway Integration & API Development", "Team Leadership & Client Relations"],
    icon: "fa-solid fa-rocket",
  },
  {
    number: "02", title: "Software Engineering Intern", company: "Hasthiya IT", period: "Feb 2025 — Feb 2026",
    description: "Full-stack development with React.js, Node.js, Express.js, Firebase, and MySQL in agile production environments.",
    responsibilities: ["Full-Stack Web Application Development", "Backend API Creation & Server Logic", "Responsive UI/UX Implementation", "Agile/SCRUM Team Collaboration", "Deployment, Debugging & API Testing", "Git/GitHub-Based Development Workflows"],
    icon: "fa-solid fa-briefcase",
  },
];

export default function LeadershipSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-heading-wrap">
        <div className="experience-bg-mark" aria-hidden="true"><i /><i /><i /></div>
        <div className="experience-dots" aria-hidden="true" />
        <motion.header className="portfolio-container experience-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="portfolio-eyebrow">Experience</span>
          <h2>Engineering,<br />leadership & impact</h2>
          <p>Building production systems, shaping technical solutions, and collaborating across the complete product lifecycle.</p>
          <i className="about-rule" aria-hidden="true" />
        </motion.header>
      </div>

      <div className="experience-dark">
        <div className="portfolio-container">
          <div className="experience-summary">
            <span><i className="fa-solid fa-user-tie" /></span>
            <div><small>Professional journey</small><strong>From full-stack delivery to technical leadership</strong></div>
          </div>
          <div className="experience-timeline" aria-hidden="true"><i /><i /></div>
          <div className="experience-grid">
            {roles.map((role, index) => (
              <motion.article className="experience-card" key={role.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5, delay: index * .1 }}>
                <div className="experience-card-top"><span className="experience-number">{role.number}</span><span className="experience-icon"><i className={role.icon} /></span></div>
                <span className="experience-period">{role.period}</span>
                <h3>{role.title}</h3>
                <h4>{role.company}</h4>
                <p>{role.description}</p>
                <div className="experience-responsibilities">
                  {role.responsibilities.map((item) => <div key={item}><i className="fa-solid fa-check" /><span>{item}</span></div>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
