import { useEffect, useState } from 'react';
import Reveal from './Reveal';

export default function Contact() {
  const [now, setNow] = useState('—');

  useEffect(() => {
    const tick = () => {
      const fmt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setNow(fmt.format(new Date()));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="contact" id="contact" data-screen-label="09 Contact">
      <Reveal className="wrap">
        <div
          className="eyebrow"
          style={{
            color: 'color-mix(in oklch, var(--color-bg) 50%, transparent)',
            marginBottom: 24,
          }}
        >
          08 — Get in touch
        </div>
        <h2>
          Let&apos;s build
          <br />
          something <span className="ital">good</span>.
        </h2>
        <p className="lead">
          Open to senior frontend roles, e-commerce builds, and design-engineer hybrids. Quick to
          reply, slow to over-engineer.
        </p>

        <a className="email-cta" href="mailto:harshachouhan2016@gmail.com">
          <span>harshachouhan2016@gmail.com</span>
          <span className="arr">→</span>
        </a>

        <dl className="contact-grid">
          <div>
            <dt>Email</dt>
            <dd>
              <a href="mailto:harshachouhan2016@gmail.com">harshachouhan2016@gmail.com</a>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+17325588255">(732) 558-8255</a>
            </dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a
                href="https://linkedin.com/in/harsha-mandloi050288/"
                target="_blank"
                rel="noreferrer"
              >
                /in/harsha-mandloi050288
              </a>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Edison, New Jersey · ET</dd>
          </div>
        </dl>

        <div className="footer-meta">
          <div>© {new Date().getFullYear()} Harsha Mandloi · Frontend Developer · Edison, NJ</div>
          <div className="clock">
            <span className="live-dot" />
            <span>ET · {now} local time</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
