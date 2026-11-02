import { useEffect, useRef, useState } from 'react';

/** Seção da página: fundo em largura total + "stage" de 1440x1024. */
export default function Section({ id, className = '', label, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`section ${className}`} aria-label={label}>
      <div className={`stage reveal${visible ? ' is-visible' : ''}`}>{children}</div>
    </section>
  );
}
