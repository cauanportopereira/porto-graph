import { useEffect, useState } from 'react';

/** Retorna o id da seção que está no meio da tela. */
export default function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids, enabled]);

  return active;
}
