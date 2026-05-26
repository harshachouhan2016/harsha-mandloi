const tags = [
  'React.js',
  'JavaScript',
  'SCSS',
  'BigCommerce Stencil',
  'Shopify',
  'Magento',
  'GraphQL',
  'WCAG',
];

export default function Marquee() {
  // Duplicate the tag list so the scroll wraps seamlessly.
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...tags, ...tags].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
