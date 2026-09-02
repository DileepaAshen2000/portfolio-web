"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const methods = ["Python", "Machine Learning", "NLP", "Transformers", "Data Analysis", "Deep Learning"];

export default function ResearchSection() {
  return (
    <section id="research" className="research-section">
      <div className="research-heading-wrap">
        <div className="research-bg-mark" aria-hidden="true"><i /><i /><i /></div>
        <div className="research-heading-dots" aria-hidden="true" />
        <motion.header className="portfolio-container research-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="portfolio-eyebrow">Research</span>
          <h2>Research that<br />drives impact</h2>
          <p>Exploring emerging technologies and real-world problems through research that combines innovation, data, and engineering.</p>
          <i className="about-rule" aria-hidden="true" />
        </motion.header>
      </div>

      <div className="research-showcase">
        <div className="portfolio-container">
          <div className="research-filter"><span>University Final Year Research</span></div>
          <motion.article className="research-card" initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .6 }}>
            <div className="research-visual">
              <div className="research-language" aria-hidden="true">සිංහල</div>
              <i className="fa-solid fa-brain" aria-hidden="true" />
              <div className="research-nodes" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <div className="research-visual-title"><span>Primary research</span><strong>Sinhala Hate Speech Detection</strong></div>
            </div>
            <div className="research-content">
              <span className="research-index">01</span>
              <small>Natural language processing research</small>
              <h3>Sinhala Hate Speech <em>Detection</em></h3>
              <p>Detecting hate speech in Sinhala text is challenging because of limited NLP resources and the language&apos;s contextual complexity.</p>
              <p>The research develops a machine-learning system using contextual transformer models and trend analysis for improved classification.</p>
              <div className="research-facts">
                <div><i className="fa-regular fa-calendar" /><span><small>Duration</small><strong>Final year research</strong></span></div>
                <div><i className="fa-solid fa-flask" /><span><small>Focus</small><strong>Contextual classification</strong></span></div>
                <div><i className="fa-solid fa-chart-line" /><span><small>Research area</small><strong>Sinhala NLP</strong></span></div>
              </div>
              <div className="research-methods">{methods.map((method) => <span key={method}>{method}</span>)}</div>
              <Link className="research-cta" href="/research/sinhala-hate-speech-detection">Discuss the research <span>↗</span></Link>
              <span className="research-watermark" aria-hidden="true">01</span>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
