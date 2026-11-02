import { useEffect, useState } from 'react';

function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(() => window.matchMedia?.(query).matches ?? false);
  useEffect(() => {
    const mq = window.matchMedia?.(query);
    if (!mq) return undefined;
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/**
 * Imagem ou vídeo de um projeto.
 * item: { type: 'image' | 'video', src, alt, poster? }
 * `ambient` = vídeo em loop silencioso (capa); senão mostra controles.
 */
export default function Media({ item, className = '', ambient = false }) {
  const reduced = usePrefersReducedMotion();
  if (item.type === 'video') {
    const autoplay = ambient && !reduced;
    return (
      <video
        className={className}
        src={item.src}
        poster={item.poster}
        aria-label={item.alt}
        muted={ambient}
        loop={ambient}
        playsInline
        autoPlay={autoplay}
        controls={!ambient}
        preload="metadata"
      />
    );
  }
  return <img className={className} src={item.src} alt={item.alt ?? ''} loading="lazy" decoding="async" />;
}
