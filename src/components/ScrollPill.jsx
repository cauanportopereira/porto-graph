import { at } from '../lib/layout';
import SectionLink from './SectionLink';
import './ScrollPill.css';

/** "Pílula" com seta (63 x 122) que leva à próxima seção. */
export default function ScrollPill({ src, x, y, to, label }) {
  return (
    <SectionLink to={to} className="abs pill desktop-only" style={at(x, y, 63, 122)} aria-label={label}>
      <img src={src} alt="" />
    </SectionLink>
  );
}
