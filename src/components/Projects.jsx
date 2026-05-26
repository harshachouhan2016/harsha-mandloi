import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: 'var(--color-bg-2)' }}
      data-screen-label="05 Projects"
    >
      <Reveal className="wrap">
        <SectionHead
          eyebrow="04 — Selected work"
          title={
            <>
              Things I&apos;ve <span className="ital">shipped</span>.
            </>
          }
        />
        <div className="projects">
          {projects.map((p) => (
            <a
              key={p.title}
              className={`project${p.feature ? ' feature' : ''}`}
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <div className="project-img">
                <div className="num-tag">{p.num}</div>
                <div className="ph-label">{p.imageLabel}</div>
              </div>
              <div className="project-body">
                <div className="type">
                  <span>{p.type}</span>
                  <span>{p.team}</span>
                </div>
                <h3>
                  {p.title} <span className="arrow">↗</span>
                </h3>
                <p>{p.description}</p>
                <div className="stack">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
                {p.visit && (
                  <div className="project-link">
                    visit → <span>{p.visit}</span>
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
