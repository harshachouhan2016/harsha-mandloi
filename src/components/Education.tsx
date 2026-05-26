import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" data-screen-label="06 Education">
      <Reveal className="wrap">
        <SectionHead
          eyebrow="05 — Education"
          title={
            <>
              Where I <span className="ital">learned</span>.
            </>
          }
        />
        <div className="edu-grid">
          {education.map((e) => (
            <div className="edu" key={e.year + e.title}>
              <div className="year">{e.year}</div>
              <h4>{e.title}</h4>
              <div className="school">{e.school}</div>
              <div className="meta">{e.meta}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
