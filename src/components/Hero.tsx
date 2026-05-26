export default function Hero() {
  return (
    <header className="hero" id="top" data-screen-label="01 Hero">
      <div className="wrap">
        <div className="hero-meta">
          <span className="dot" />
          <span className="eyebrow">Frontend Developer &nbsp;·&nbsp; Edison, NJ</span>
        </div>
        <div className="hero-head">
          <h1 className="display">
            <span className="line">
              <span className="line-inner">
                Building <span className="ital">responsive</span> <span className="amp">&amp;</span>
              </span>
            </span>
            <span className="line">
              <span className="line-inner">accessible e-commerce.</span>
            </span>
          </h1>
        </div>
        <div className="hero-foot">
          <div className="hero-bio lead">
            <p>
              I&apos;m Harsha — a frontend developer with{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>10+ years</em>{' '}
              shipping responsive e-commerce storefronts and customer-facing web apps.
            </p>
            <p
              style={{
                fontSize: 15,
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-muted)',
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              Most recently at LTIMindtree, where I led the BigCommerce Blueprint → Stencil rebuild
              for the global SK-II storefront. Specialized in performance, accessibility and
              design-system work across Shopify, BigCommerce, Magento and WordPress.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
