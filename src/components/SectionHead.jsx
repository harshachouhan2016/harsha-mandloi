export default function SectionHead({ eyebrow, title }) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="display">{title}</h2>
    </div>
  );
}
