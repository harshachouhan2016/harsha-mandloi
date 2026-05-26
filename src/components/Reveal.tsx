import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps content with an IntersectionObserver-driven fade-up entrance.
 * Adds the `.reveal` and `.in` classes that match the index.css transitions.
 */
export default function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.06 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
