"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading-wrap">
        {/* <div className="projects-bg-mark" aria-hidden="true"><i /><i /><i /></div> */}
        <div className="projects-dots" aria-hidden="true" />
        <motion.header className="portfolio-container projects-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="portfolio-eyebrow">Projects</span>
          <h2>Projects that<br />solve real problems</h2>
          <p>A collection of projects where I applied clean architecture, modern technologies, and best practices to deliver value and impact.</p>
          <i className="about-rule" aria-hidden="true" />
        </motion.header>
      </div>

      <div className="projects-showcase">
        <div className="portfolio-container">
          <div className="project-grid project-list-grid">
            {projects.map((project, index) => (
              <motion.article className="project-card project-row-card" key={project.slug} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: .5 }}>
                <div className={`project-visual project-portrait-visual${project.image ? " project-cover-visual" : ""}`}>
                  <span className="project-number">0{index + 1}</span>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="project-logo project-cover-image"
                      sizes="(max-width: 720px) 100vw, 36vw"
                    />
                  ) : <i className={project.icon} aria-hidden="true" />}
                  <span className="project-visual-label">{project.subtitle}</span>
                </div>
                <div className="project-body">
                  <div className="project-meta"><span>{project.subtitle}</span><small>{project.period}</small></div>
                  <h3>{project.title}</h3>
                  <div className="project-story">
                    <div><strong>Challenge</strong><p>{project.challenge}</p></div>
                    <div><strong>Solution</strong><p>{project.solution}</p></div>
                  </div>
                  <div className="project-impact"><strong>Impact</strong><p>{project.impact}</p></div>
                  <div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <div className="project-card-actions">
                    <div className="project-icon-links">
                      {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} website`} title="Website"><i className="fa-solid fa-globe" /></a>}
                      {project.playStore && <a href={project.playStore} target="_blank" rel="noreferrer" aria-label={`${project.title} on Google Play`} title="Google Play"><i className="fa-brands fa-google-play" /></a>}
                      {project.appStore && <a href={project.appStore} target="_blank" rel="noreferrer" aria-label={`${project.title} on the Apple App Store`} title="Apple App Store"><i className="fa-brands fa-apple" /></a>}
                      {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`} title="GitHub repository"><i className="fa-brands fa-github" /></a>}
                    </div>
                    <Link className="project-view-more" href={`/projects/${project.slug}`}>View more <span>→</span></Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
