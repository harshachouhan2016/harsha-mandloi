import Reveal from './Reveal';
import SectionHead from './SectionHead';

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: 10.5,
  color: 'var(--color-muted)',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};

const valueStyle = {
  margin: '4px 0 0',
  fontFamily: 'var(--font-serif)',
  fontSize: 22,
  letterSpacing: '-0.01em',
};

export default function Resume() {
  const resumeHref = `${import.meta.env.BASE_URL}CV-Harsha-Mandloi.pdf`;

  return (
    <section
      id="resume"
      style={{ background: 'var(--color-bg-2)' }}
      data-screen-label="08 Resume"
    >
      <Reveal className="wrap">
        <SectionHead
          eyebrow="07 — Résumé"
          title={
            <>
              The <span className="ital">long</span> version.
            </>
          }
        />
        <div
          className="resume-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          <div>
            <p className="lead" style={{ margin: '0 0 24px' }}>
              A printable summary of everything above — 3 pages, with role-level detail and contact
              info ready to drop into an ATS.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 15,
                color: 'var(--color-ink-2)',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 540,
              }}
            >
              Open to senior frontend, frontend engineer and design-engineer roles — full-time or
              contract — in the NJ / NY / remote market.
            </p>
            <div className="resume-cta">
              <a className="btn" href={resumeHref} download="CV-Harsha-Mandloi.pdf">
                Download resume (PDF) <span>↓</span>
              </a>
              <a className="btn ghost" href="mailto:harshachouhan2016@gmail.com">
                Email me directly <span>→</span>
              </a>
            </div>
          </div>
          <div
            style={{
              border: '1px solid var(--color-line)',
              borderRadius: 6,
              padding: 24,
              background: 'var(--color-bg)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 10.5,
                letterSpacing: '0.12em',
                color: 'var(--color-muted)',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              / At a glance
            </div>
            <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: '1fr', gap: 14 }}>
              <div>
                <dt style={labelStyle}>Experience</dt>
                <dd style={valueStyle}>10+ years frontend</dd>
              </div>
              <div>
                <dt style={labelStyle}>Most recent</dt>
                <dd style={valueStyle}>LTIMindtree · SK-II</dd>
              </div>
              <div>
                <dt style={labelStyle}>Specialty</dt>
                <dd style={valueStyle}>E-commerce frontend</dd>
              </div>
              <div>
                <dt style={labelStyle}>Education</dt>
                <dd style={valueStyle}>MCA, RGTU (2011)</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
