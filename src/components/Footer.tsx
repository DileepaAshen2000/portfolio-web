"use client";

import { motion } from "framer-motion";

const navigation = [["Home", "#hero"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Research", "#research"], ["Experience", "#experience"], ["Contact", "#contact"]];
const connections = [
  { label: "Email", value: "dileepaashen81@gmail.com", href: "mailto:dileepaashen81@gmail.com", icon: "fa-regular fa-envelope" },
  { label: "GitHub", value: "DileepaAshen2000", href: "https://github.com/DileepaAshen2000", icon: "fa-brands fa-github" },
  { label: "LinkedIn", value: "Dileepa Ashen", href: "https://www.linkedin.com/in/dileepa-ashen-179534270/", icon: "fa-brands fa-linkedin-in" },
  { label: "Medium", value: "@dileepaashen81", href: "https://medium.com/@dileepaashen81", icon: "fa-brands fa-medium" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="portfolio-footer compact-footer">
      <motion.div className="footer-frame compact-footer-frame" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}>
        <div className="compact-footer-main">
          <div className="compact-footer-profile">
            <div className="footer-brand"><span className="brand-mark" aria-hidden="true"><i /><i /></span><div><h2>Dileepa Ashen</h2><p>Software Engineer</p></div></div>
            <p>Building scalable, impactful software solutions and turning complex problems into clean, thoughtful digital systems.</p>
            <a href="/Ashen_Resume.pdf" target="_blank" rel="noreferrer" className="compact-resume-link">Download resume <span aria-hidden="true">↗</span></a>
          </div>
          <nav className="compact-footer-nav" aria-label="Footer navigation">
            <h3>Explore</h3>
            <div>{navigation.map(([label, href]) => <a href={href} key={label}>{label}<span aria-hidden="true">›</span></a>)}</div>
          </nav>
          <div className="compact-footer-connect">
            <h3>Connect</h3>
            <div>{connections.map((connection) => <a href={connection.href} target={connection.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={connection.label}><i className={connection.icon} /><span><strong>{connection.label}</strong><small>{connection.value}</small></span></a>)}</div>
          </div>
        </div>
        <div className="footer-bottom compact-footer-bottom">
          <p>© {currentYear} Dileepa Ashen. All rights reserved.</p>
          {/* <p><i className="fa-solid fa-heart" /> Built with passion and purpose</p> */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><i className="fa-solid fa-arrow-up" />Back to top</button>
        </div>
      </motion.div>
    </footer>
  );
}
