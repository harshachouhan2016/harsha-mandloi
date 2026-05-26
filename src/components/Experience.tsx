import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="work" data-screen-label="04 Experience">
      <Reveal className="wrap">
        <SectionHead
          eyebrow="03 — Experience"
          title={
            <>
              A decade in the <span className="ital">front-end</span>.
            </>
          }
        />
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={job.range + job.title}>
              <div className="date">
                {job.range}
                <strong>{job.duration}</strong>
              </div>
              <div className="role">
                <h4>{job.title}</h4>
                <div className="co">{job.company}</div>
                <ul>
                  {job.bullets.map((b, i) =>
                    typeof b === 'string' ? (
                      <li key={i}>{b}</li>
                    ) : (
                      <li key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
                    )
                  )}
                </ul>

                {job.link && (
                  <div className="link">
                    ↗{' '}
                    <a href={job.link.href} target="_blank" rel="noreferrer">
                      {job.link.label}
                    </a>
                  </div>
                )}
                {job.links && (
                  <div className="link">
                    ↗{' '}
                    {job.links.map((l, i) => (
                      <span key={l.href}>
                        <a href={l.href} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                        {i < job.links!.length - 1 && <> &nbsp;·&nbsp; </>}
                      </span>
                    ))}
                  </div>
                )}

                <div className="stack">
                  {job.stack.map((c) => (
                    <span
                      key={c.label}
                      className={`chip${c.variant ? ' ' + c.variant : ''}`}
                    >
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
