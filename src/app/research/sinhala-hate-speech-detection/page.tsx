import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import researchImage from "@/logos/Research.png";

export const metadata: Metadata = {
  title: "Sinhala Hate Speech Detection Research | Dileepa Ashen",
  description: "Automated detection and trend analysis of Sinhala hate speech, including Module 02 hybrid-fusion detection contribution.",
};

const modules = [
  {
    number: "01", title: "Input Normalization", owner: "Team module",
    description: "A confidence-guided framework identifies Romanized Sinhala, genuine English, and uncertain tokens before selectively transliterating, verifying, or preserving them. Unknown tokens are queued for human-reviewed lexicon enrichment.",
    outputs: ["Selective transliteration", "English preservation", "Human-gated lexicon growth"],
  },
  {
    number: "02", title: "Hate Speech Detection", owner: "My contribution",
    description: "An explainable hybrid-fusion detector combines local, sequential, and contextual evidence to classify Sinhala comments as hateful or not hateful with confidence and word-level explanations.",
    outputs: ["Binary classification", "Confidence estimates", "Word-level explanations"],
  },
  {
    number: "03", title: "Trend Analysis", owner: "Team module",
    description: "A longitudinal pipeline analyzes hate volume and meaning through decomposition, consensus spike detection, forecasting, topic analysis, and semantic-drift testing.",
    outputs: ["Spike detection", "Forecasting", "Topic and drift analysis"],
  },
];

const fusionStrategies = [
  ["Early fusion", "Combines branch feature representations before classification."],
  ["Late fusion", "Combines branch decisions, including a learned stacking meta-learner."],
  ["Attention fusion", "Uses a learned per-comment gate for intermediate representations."],
  ["Optimized fusion", "Selects weights through Bayesian optimization and the Grey Wolf Optimizer."],
];

const validationMethods = ["McNemar’s test", "Paired bootstrap", "5-fold stratified CV", "Paired t-test", "Wilcoxon signed-rank", "Cohen’s d"];

export default function ResearchDetailPage() {
  return (
    <main className="research-detail-page">
      <nav className="research-detail-nav"><Link href="/#research">← Back to research</Link><a href="mailto:dileepaashen81@gmail.com?subject=Sinhala%20Hate%20Speech%20Research">Discuss this work</a></nav>

      <header className="research-detail-hero">
        <div className="research-detail-hero-copy">
          <span>Final year research · Team Telos · 2026</span>
          <h1>Automated detection & trend analysis of hate speech in Sinhala</h1>
          <p>A reproducible, explainable three-module framework for normalizing code-mixed input, detecting hate speech from meaning and context, and monitoring how hateful discourse changes over time.</p>
          <div className="research-detail-tags"><small>Natural Language Processing</small><small>Machine Learning</small><small>Explainable AI</small><small>Time-Series Analysis</small></div>
        </div>
        <div className="research-detail-hero-art" aria-hidden="true"><span>සිංහල</span><i className="fa-solid fa-brain" /><div><i /><i /><i /><i /></div></div>
        <div className="research-detail-hero-image"><Image src={researchImage} alt="Sinhala hate speech detection research dashboard" fill priority sizes="(max-width: 900px) 100vw, 46vw" /></div>
      </header>

      <section className="research-overview">
        <div className="research-detail-inner">
          <div className="research-detail-section-heading"><span>01 / Research context</span><h2>The problem and the system</h2></div>
          <div className="research-overview-copy">
            <p>Sinhala content moderation is constrained by scarce annotated resources, morphological complexity, informal spelling, and the widespread use of Romanized Sinhala mixed with English. Keyword systems miss contextual meaning, while indiscriminate transliteration can destroy genuine English words.</p>
            <p>The project serves content moderators, platform-safety analysts, and researchers. It accepts native Sinhala, Romanized Singlish, code-mixed comments, and timestamped corpora; its outputs range from normalized text and explainable per-comment decisions to spikes, forecasts, topics, and semantic-drift analyses.</p>
          </div>
          <div className="research-module-grid">
            {modules.map((module) => <article className={module.number === "02" ? "is-contribution" : ""} key={module.number}><span>{module.number}</span><small>{module.owner}</small><h3>{module.title}</h3><p>{module.description}</p><div>{module.outputs.map((output) => <em key={output}>{output}</em>)}</div></article>)}
          </div>
          <div className="research-system-flow">
            <span className="research-detail-label">End-to-end research flow</span>
            <div><article><strong>01</strong><h3>Receive mixed input</h3><p>Native Sinhala, Romanized Singlish, English code-switching, or timestamped social content enters the appropriate workflow.</p></article><article><strong>02</strong><h3>Normalize selectively</h3><p>Module 01 preserves genuine English while converting only tokens confidently identified as Romanized Sinhala.</p></article><article><strong>03</strong><h3>Detect and explain</h3><p>Module 02 fuses three complementary representations, returns a label and confidence, and explains influential words.</p></article><article><strong>04</strong><h3>Analyze over time</h3><p>Module 03 studies volume, anomalies, forecasts, topics, targets, and whether semantic meaning drifts.</p></article></div>
          </div>
        </div>
      </section>

      <section className="research-contribution">
        <div className="research-detail-inner">
          <div className="research-detail-section-heading"><span>02 / Individual contribution</span><h2>My work: complete ownership of Module 02</h2><p>I designed, implemented, and evaluated the hate speech detection module end to end.</p></div>
          <div className="research-contribution-intro">
            <article><i className="fa-solid fa-wave-square" /><h3>Local evidence</h3><p>A convolutional branch over sub-word representations captures local phrase patterns, morphological signals, and nearby word interactions.</p></article>
            <article><i className="fa-solid fa-arrow-right-arrow-left" /><h3>Sequential evidence</h3><p>A bidirectional recurrent branch reads context in both directions to model word order and longer dependencies.</p></article>
            <article><i className="fa-solid fa-circle-nodes" /><h3>Contextual evidence</h3><p>A fine-tuned multilingual transformer represents the full meaning of a comment and helps disambiguate context-sensitive language.</p></article>
          </div>
          <div className="research-detection-pipeline">
            <div><span>01</span><strong>Preprocess</strong><small>Prepare Sinhala comments and consistent labels.</small></div><i>→</i><div><span>02</span><strong>Encode</strong><small>Generate CNN, recurrent, and transformer evidence.</small></div><i>→</i><div><span>03</span><strong>Fuse</strong><small>Learn the best combination without hand-set weights.</small></div><i>→</i><div><span>04</span><strong>Predict</strong><small>Return hate label, confidence, and branch breakdown.</small></div><i>→</i><div><span>05</span><strong>Explain</strong><small>Attribute the decision to whole Sinhala words.</small></div>
          </div>
          <div className="research-fusion-layout">
            <div><span className="research-detail-label">Fusion strategy comparison</span><h3>No weights were set by hand</h3><p>Every fusion weight was learned through back-propagation, fitted as a meta-learner coefficient, or selected by an optimizer against a validation objective. This made the comparison reproducible and prevented intuition from silently determining the outcome.</p></div>
            <div className="research-fusion-grid">{fusionStrategies.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{description}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section className="research-results">
        <div className="research-detail-inner"><div className="research-detail-section-heading"><span>03 / Evidence</span><h2>Measured results</h2></div><div className="research-result-stats"><article><strong>0.903</strong><span>Test macro-F1</span></article><article><strong>0.8973</strong><span>5-fold CV macro-F1</span></article><article><strong>0.007</strong><span>Paired t-test p-value</span></article><article><strong>2.28</strong><span>Cohen’s d effect size</span></article></div><div className="research-results-copy"><p>The learned stacking fusion was the strongest approach. It outperformed the strongest single model on all five folds, and the cross-validated significance framework supported that the improvement was consistent rather than an artifact of one test split.</p><p>The gap between the best and worst fusion strategies was 0.048—nearly six times the gap between the best fusion and best single model. A well-tuned character n-gram linear baseline also came within 0.015 macro-F1 of the fine-tuned transformer, reinforcing the importance of strong baselines.</p></div><div className="research-validation"><span>Validation layer</span><div>{validationMethods.map((method) => <small key={method}>{method}</small>)}</div></div></div>
      </section>

      <section className="research-explainability">
        <div className="research-detail-inner"><div className="research-detail-section-heading"><span>04 / Transparency</span><h2>Explanations moderators can use</h2></div><div className="research-explainability-grid"><article><span>LIME</span><p>Local surrogate fitting produces per-word importance weights for an individual prediction.</p></article><article><span>SHAP</span><p>Game-theoretic attribution independently explains how words influence the fused decision.</p></article><article><span>Sinhala-aware output</span><p>Whitespace tokenization at explanation time prevents Sinhala words from fragmenting at combining marks, keeping explanations readable.</p></article></div></div>
      </section>

      <section className="research-engineering">
        <div className="research-detail-inner"><div className="research-detail-section-heading"><span>05 / Engineering reflection</span><h2>Challenges, decisions & limitations</h2></div><div className="research-engineering-grid">
          <article><h3>Computational constraint</h3><p>Fine-tuning the transformer for every fold and fusion strategy exceeded available resources. I cached branch probabilities and penultimate feature vectors, enabling fusion, significance, and explanation experiments on a standard processor.</p></article>
          <article><h3>Statistical confidence</h3><p>An initial single-split improvement was not enough evidence. I built the cross-validated significance framework that now underpins the performance claim.</p></article>
          <article><h3>Readable Sinhala explanations</h3><p>Combining-mark tokenization produced unintelligible fragments. Explanation-time whitespace tokenization restored whole-word attribution.</p></article>
          <article className="research-limitation"><h3>Open limitation</h3><p>The detection corpus is almost entirely Sinhala script. Performance on heavily code-mixed text, including preserved English tokens from Module 01, remains untested and is not claimed.</p></article>
        </div></div>
      </section>

      <footer className="research-detail-footer"><div><span>Research significance</span><p>The work demonstrates that rigorous, explainable, and statistically validated hate-speech analysis is achievable for a low-resource language.</p></div><Link href="/#research">Return to portfolio <span>→</span></Link></footer>
    </main>
  );
}
