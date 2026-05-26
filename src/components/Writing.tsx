import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { writing } from '../data/writing';

export default function Writing() {
  return (
    <section id="writing" data-screen-label="07 Writing">
      <Reveal className="wrap">
        <SectionHead
          eyebrow="06 — Writing & notes"
          title={
            <>
              Things I&apos;ve been <span className="ital">thinking</span> about.
            </>
          }
        />
        <div className="writing">
          {writing.map((p) => (
            <a className="post" href="#" key={p.title}>
              <div className="date">{p.date}</div>
              <h4>{p.title}</h4>
              <div className="topic">{p.topic}</div>
              <div className="arr">→</div>
            </a>
          ))}
        </div>
        <p
          style={{
            marginTop: 32,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--color-muted)',
            letterSpacing: '0.08em',
          }}
        >
          * Drafts in progress — placeholder titles for now.
        </p>
      </Reveal>
    </section>
  );
}
