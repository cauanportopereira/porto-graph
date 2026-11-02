import logoFaceYellow from '../assets/brand/logo-face-yellow.svg';
import logoPortoYellow from '../assets/brand/logo-porto-yellow.svg';
import logoGraphYellow from '../assets/brand/logo-graph-yellow.svg';
import logoFaceNavy from '../assets/brand/logo-face-navy.svg';
import logoPortoNavy from '../assets/brand/logo-porto-navy.svg';
import logoGraphNavy from '../assets/brand/logo-graph-navy.svg';
import logoFaceWhite from '../assets/brand/logo-face-white.svg';
import logoPortoWhite from '../assets/brand/logo-porto-white.svg';
import logoGraphWhite from '../assets/brand/logo-graph-white.svg';

/** Itens do menu, na ordem do Figma. */
export const NAV_ITEMS = [
  { id: 'sobre', label: 'SOBRE' },
  { id: 'projetos', label: 'PROJETOS' },
  { id: 'experiencia', label: 'EXPERIÊNCIA' },
  { id: 'habilidades', label: 'HABILIDADES' },
  { id: 'contato', label: 'CONTATO' },
];

/** Ordem das seções da página (usada pelas setas de rolagem). */
export const SECTION_ORDER = ['home', ...NAV_ITEMS.map((item) => item.id)];

export const LOGOS = {
  yellow: { face: logoFaceYellow, porto: logoPortoYellow, graph: logoGraphYellow },
  navy: { face: logoFaceNavy, porto: logoPortoNavy, graph: logoGraphNavy },
  white: { face: logoFaceWhite, porto: logoPortoWhite, graph: logoGraphWhite },
};

/** Cores do cabeçalho em cada seção, conforme os frames do Figma. */
export const THEMES = {
  home: { bg: '#222527', link: '#ffffff', logo: 'yellow' },
  sobre: { bg: '#00b290', link: '#0c1b2a', logo: 'navy' },
  projetos: { bg: '#ffff40', link: '#0c1b2a', logo: 'navy' },
  experiencia: { bg: '#0c1b2a', link: '#ffff40', logo: 'yellow' },
  habilidades: { bg: '#222527', link: '#f1f3f5', logo: 'white' },
  contato: { bg: '#00b290', link: '#0c1b2a', logo: 'navy' },
};

export const CONTACT = {
  email: 'cauanportopereira@gmail.com',
  links: [
    { label: 'Behance', href: 'https://www.behance.net/cauancauanp' },
    { label: 'Linkedin', href: 'https://www.linkedin.com/in/cauanporto/' },
    { label: 'Instagram', href: 'https://www.instagram.com/_cauanp/' },
  ],
};

/** Destino do botão "Ver mais projetos". */
export const MORE_PROJECTS_URL = 'https://cauanporto.myportfolio.com/work';
