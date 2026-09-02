import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import LankaEVCaseStudy from "@/components/projects/LankaEVCaseStudy";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} | Ashen Edussuriya`, description: project.impact };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  if (project.slug === "lanka-ev-plus") return <LankaEVCaseStudy project={project} />;

  return (
    <main className="project-detail-page">
      <nav className="project-detail-nav"><Link href="/#projects">← Back to projects</Link><a href="/Ashen_Resume.pdf" target="_blank" rel="noreferrer">Download CV</a></nav>
      <header className="project-detail-hero">
        <div className="project-detail-copy">
          <span>{project.subtitle}</span><small>{project.period}</small>
          <h1>{project.title}</h1><p>{project.impact}</p>
          <div className="project-detail-links">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer"><i className="fa-solid fa-globe" /> Website</a>}
            {project.playStore && <a href={project.playStore} target="_blank" rel="noreferrer"><i className="fa-brands fa-google-play" /> Play Store</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /> Repository</a>}
          </div>
        </div>
        <div className="project-detail-visual">
          {project.image ? <Image src={project.image} alt={`${project.title} logo`} /> : <i className={project.icon} aria-hidden="true" />}
        </div>
      </header>
      <section className="project-detail-content">
        <article><span>01 / Challenge</span><h2>The problem</h2><p>{project.challenge}</p></article>
        <article><span>02 / Solution</span><h2>The approach</h2><p>{project.solution}</p></article>
        <article><span>03 / Impact</span><h2>The outcome</h2><p>{project.impact}</p></article>
        <aside><span>Technology stack</span><div>{project.technologies.map((technology) => <small key={technology}>{technology}</small>)}</div></aside>
      </section>
      <footer className="project-detail-footer"><Link href="/#projects">Explore other projects <span>→</span></Link></footer>
    </main>
  );
}
