import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ background: 'var(--color-bg-2)' }}
      data-screen-label="03 Skills"
    >
      <Reveal className="wrap">
        <SectionHead
          eyebrow="02 — Capabilities"
          title={
            <>
              Tools of the <span className="ital">trade</span>.
            </>
          }
        />
        <div className="skills-grid">
          {skills.map((cat) => (
            <div className="skill-cat" key={cat.title}>
              <div className="num">{cat.num}</div>
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((s) => (
                  <li key={s.name}>
                    {s.name}
                    <span className="lvl">{s.lvl}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
