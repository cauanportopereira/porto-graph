import { NAV_ITEMS, THEMES } from '../data/site';
import { at } from '../lib/layout';
import Logo from './Logo';
import SectionLink from './SectionLink';
import './SiteHeader.css';

/** Cabeçalho do desktop, repetido no topo de cada frame como no Figma. */
export default function SiteHeader({ theme, current }) {
  const t = THEMES[theme];
  return (
    <header className="group desktop-only site-header" style={{ '--link': t.link }}>
      <SectionLink to="home" className="abs site-header__logo" style={at(77, 76, 164, 74.918)} aria-label="Porto Graph, voltar ao início">
        <Logo variant={t.logo} />
      </SectionLink>
      <nav className="abs site-header__nav" style={at(619, 107)} aria-label="Navegação principal">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <SectionLink to={item.id} aria-current={current === item.id ? 'location' : undefined}>
                {item.label}
              </SectionLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
