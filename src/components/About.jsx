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
              My work centers on customer-facing storefronts at scale: SK-II, regional travel
              brands, multi-channel sellers on Shopify and Magento. I move easily between Figma and
              code, write SCSS that other engineers can actually read, and treat performance
              budgets, semantic HTML, and WCAG compliance as table stakes.
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
                <dd>React, e-commerce, HTML, CSS, Javascript</dd>
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
