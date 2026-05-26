import type { ReactNode } from 'react';

interface SectionHeadProps {
  eyebrow: string;
  /** Headline; can include <span className="ital">…</span> for italic accents */
  title: ReactNode;
}

export default function SectionHead({ eyebrow, title }: SectionHeadProps) {
  return (
    <div className="section-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="display">{title}</h2>
    </div>
  );
}
