import { useEffect, useRef, useState } from 'react';

/**
 * Wraps content with an IntersectionObserver-driven fade-up entrance.
 * Adds the `.reveal` and `.in` classes that match the index.css transitions.
 */
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
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
