import Reveal from './Reveal';
import SectionHead from './SectionHead';

export default function About() {
  return (
    <section id="about" data-screen-label="02 About">
      <Reveal className="wrap">
        <SectionHead
          eyebrow="01 — About"
          title={
            <>
              Frontend as a <span className="ital">first-class</span> product.
            </>
          }
        />
        <div className="about-grid">
          <div className="about-photo">
            <img src={`${import.meta.env.BASE_URL}harsha-portrait.jpg`} alt="Harsha Mandloi" />
          </div>
          <div className="about-body">
            <p>
              I&apos;ve spent a decade making e-commerce sites <em>feel right</em> — fast,
              accessible, and aligned with the brand at every breakpoint.
            </p>
            <p className="body-prose">
              Frontend Developer with 10+ years of experience building responsive, high-performing e-commerce  websites and customer-facing web applications. Expertise in React.js, JavaScript, HTML5, CSS3, SCSS, Shopify, BigCommerce, and Adobe Commerce (Magento) with strong focus on frontend performance optimization, responsive design, accessibility, SEO, and cross-browser compatibility. Experienced in developing scalable UI components, managing production releases, integrating GraphQL-based solutions, and delivering customer-focused web experiences in Agile environments.
            </p>
            <p className="body-prose">
              Since 2023 I&apos;ve been on a planned career break in the US for family — and using
              the time to sharpen on modern React, GraphQL, and the accessibility/SEO patterns that
              good frontend work depends on.
            </p>
            <dl className="about-list">
              <div>
                <dt>Based in</dt>
                <dd>Edison, NJ · ET (UTC−5)</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Open to roles</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>E-Commerce, Accessibility, React, HTML, CSS, Javascript</dd>
              </div>
              <div>
                <dt>Originally from</dt>
                <dd>Bhopal, India</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
