"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const details = [
  { icon: "fa-solid fa-location-dot", label: "Based in", value: "Kalutara, Sri Lanka" },
  { icon: "fa-regular fa-envelope", label: "Email", value: "dileepaashen81@gmail.com", href: "mailto:dileepaashen81@gmail.com" },
  { icon: "fa-regular fa-calendar", label: "Availability", value: "Open to opportunities" },
  { icon: "fa-brands fa-linkedin-in", label: "Let’s connect", value: "LinkedIn / GitHub", href: "https://www.linkedin.com/in/dileepa-ashen-179534270/" },
];

const strengths = [
  "Full-stack engineering across web and mobile",
  "Scalable architecture and system design thinking",
  "Product-focused, user-centered solution design",
  "Cloud deployment and DevOps operations",
  "Clean, maintainable software engineering",
  "Turning complex challenges into working systems",
];

const interests = [
  { title: "Mathematics", icon: "fa-solid fa-square-root-variable", description: "From discrete mathematics to algorithmic analysis, mathematics shapes how I understand complex logic and optimize code.", topics: ["Linear Algebra", "Calculus", "Number Theory", "Graph Theory"] },
  { title: "Software Architecture", icon: "fa-solid fa-sitemap", description: "Designing robust, scalable systems that manage complexity while maintaining clean-code principles.", topics: ["System Design", "Scalability", "Clean Code"] },
  { title: "Scientific Thinking", icon: "fa-solid fa-flask-vial", description: "A hypothesis-driven approach where features are experiments and decisions are grounded in evidence.", topics: ["First Principles", "Systems Thinking", "Data-Driven Decisions", "Research Methods"] },
  { title: "Books & Research", icon: "fa-solid fa-book-open-reader", description: "Continuous learning across technology, science, philosophy, and innovation strengthens my engineering perspective.", topics: ["AI/ML Research", "System Design", "Science Literature", "Tech Innovation"] },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-top-dark">
        <div className="portfolio-container about-top-inner">
          <motion.div className="about-top-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }}>
            <span>Hello</span>
            <h2>I&apos;m Ashen Edussuriya</h2>
            <p>A passionate software engineer focused on crafting clean, maintainable, and scalable solutions. I love turning ideas into real-world products through code.</p>
            <div className="about-focus-list">
              <div><i className="fa-solid fa-code" /><strong>Full-stack</strong><span>Web & mobile engineering</span></div>
              <div><i className="fa-regular fa-folder" /><strong>Architecture</strong><span>Scalable system design</span></div>
              <div><i className="fa-solid fa-users" /><strong>Product</strong><span>User-centered thinking</span></div>
            </div>
          </motion.div>
          <motion.div className="about-top-art" aria-hidden="true" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="about-checker" />
            <div className="about-top-photo"><Image src="/profile2.png" alt="" fill priority sizes="(max-width: 680px) 78vw, 560px" className="about-top-photo-image" /></div>
            <div className="about-orange-lines"><i /><i /><i /><i /><i /></div>
            <div className="about-accent-strokes about-accent-strokes-top"><i /><i /><i /></div>
            <div className="about-accent-strokes about-accent-strokes-bottom"><i /><i /><i /></div>
          </motion.div>
        </div>
      </div>

      <div className="about-intro">
        <div className="portfolio-container about-intro-inner">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <span className="portfolio-eyebrow">About me</span>
            <h2>The engineer<br />behind the code</h2>
            <p>
              I&apos;m Ashen Edussuriya, a Software Engineering undergraduate and
              Full-Stack Developer who loves turning ideas into scalable,
              impactful software solutions.
            </p>
            <i className="about-rule" aria-hidden="true" />

            <div className="about-details">
              {details.map((detail) => {
                const content = (
                  <>
                    <span className="about-detail-icon"><i className={detail.icon} /></span>
                    <span><small>{detail.label}</small><strong>{detail.value}</strong></span>
                  </>
                );
                return detail.href ? (
                  <a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a>
                ) : <div key={detail.label}>{content}</div>;
              })}
            </div>
          </motion.div>

          <motion.div
            className="about-visual about-visual-graphic"
            aria-hidden="true"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="about-asterisk" aria-hidden="true"><i /><i /><i /></div>
            <div className="about-dot-grid" aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      <div className="about-information">
        <div className="portfolio-container about-panels">
          <motion.article className="about-card education-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <header><span><i className="fa-solid fa-graduation-cap" /></span><h3>Education</h3></header>
            <div className="education-entry">
              <h4>B.Sc. (Hons) Information Technology</h4>
              <p>University of Moratuwa, Sri Lanka</p>
              <small>Software Engineering Undergraduate</small>
            </div>
          </motion.article>

          <motion.article className="about-card overview-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <header><span><i className="fa-solid fa-briefcase" /></span><h3>Professional overview</h3></header>
            <p>
              Skilled in building impactful digital systems that solve real-world
              problems. My work spans React and Node.js through Flutter,
              Firebase, cloud deployment, solution architecture, and DevOps.
            </p>
            <div className="strength-grid">
              {strengths.map((strength) => <div key={strength}><i className="fa-solid fa-check" /><span>{strength}</span></div>)}
            </div>
          </motion.article>

          <motion.blockquote className="about-philosophy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span>Engineering philosophy</span>
            <p>Great software isn&apos;t just functional. It&apos;s thoughtful, scalable, maintainable, and designed with the end user at its core.</p>
          </motion.blockquote>

          <div className="about-curiosity-section">
            <motion.div className="about-curiosity-heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="portfolio-eyebrow">Curiosity & perspective</span>
              {/* <h3>What shapes my engineering</h3> */}
              <h3>Beyond the Code</h3>
              <p>The intellectual pursuits that fuel how I solve problems, design systems, and continue learning.</p>
            </motion.div>

            <div className="about-interest-grid">
              {interests.map((interest, index) => (
                <motion.article className="about-interest-card" key={interest.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }}>
                  <header><span><i className={interest.icon} /></span><h4>{interest.title}</h4></header>
                  <p>{interest.description}</p>
                  <div>{interest.topics.map((topic) => <small key={topic}>{topic}</small>)}</div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
