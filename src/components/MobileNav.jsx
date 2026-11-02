import { useEffect, useState } from 'react';
import { NAV_ITEMS, THEMES } from '../data/site';
import Logo from './Logo';
import SectionLink from './SectionLink';
import './MobileNav.css';

/**
 * Barra fixa para telas pequenas (o Figma só tem desktop).
 * Usa as cores da seção visível no momento.
 */
export default function MobileNav({ theme }) {
  const [open, setOpen] = useState(false);
  const t = THEMES[theme] ?? THEMES.home;
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className={`mnav mobile-only${open ? ' is-open' : ''}`} style={{ '--bar-bg': t.bg, '--bar-fg': t.link }}>
      <div className="mnav__bar">
        <SectionLink to="home" className="mnav__logo" onClick={close} aria-label="Porto Graph, voltar ao início">
          <Logo variant={t.logo} />
        </SectionLink>
        <button type="button" className="mnav__toggle" aria-expanded={open} aria-controls="mnav-panel" onClick={() => setOpen((v) => !v)}>
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          <span className="mnav__bars" aria-hidden="true" />
        </button>
      </div>
      <nav id="mnav-panel" className="mnav__panel" aria-label="Navegação principal" hidden={!open}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <SectionLink to={item.id} onClick={close}>
                {item.label}
              </SectionLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
