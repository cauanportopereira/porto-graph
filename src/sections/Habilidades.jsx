import Section from '../components/Section';
import SiteHeader from '../components/SiteHeader';
import ScrollPill from '../components/ScrollPill';
import { at, rotated } from '../lib/layout';
import iconPs from '../assets/habilidades/photoshop.png';
import iconAi from '../assets/habilidades/illustrator.png';
import iconCapcut from '../assets/habilidades/capcut.png';
import iconProcreate from '../assets/habilidades/procreate.png';
import iconFigma from '../assets/habilidades/figma.png';
import iconCanva from '../assets/habilidades/canva.png';
import starFull from '../assets/habilidades/star-full.svg';
import starFullNarrow from '../assets/habilidades/star-full-narrow.svg';
import starOutline from '../assets/habilidades/star-outline.svg';
import face from '../assets/habilidades/face.svg';
import pill from '../assets/habilidades/scroll-pill.svg';
import './Habilidades.css';

const STAR = {
  full: { src: starFull, w: 43 },
  narrow: { src: starFullNarrow, w: 42 },
  outline: { src: starOutline, w: 43 },
};

/* Posições e textos exatamente como no frame HABILIDADES do Figma. */
const SKILLS = [
  {
    name: 'Photoshop',
    icon: iconPs,
    iconAt: [137, 478, 107],
    stars: [[272, 510, 'full'], [320, 510, 'full'], [369, 510, 'full']],
    rating: 3,
    label: 'Photohop - AVANÇADO',
    labelAt: [137, 608],
    desc: 'Criação de peças gráficas.',
    descAt: [137, 641, 285],
  },
  {
    name: 'CapCut',
    icon: iconCapcut,
    iconAt: [576, 478, 107],
    stars: [[723, 511, 'narrow'], [771, 511, 'full'], [820, 511, 'outline']],
    rating: 2,
    label: 'CapCut - INTERMEDIÁRIO',
    labelAt: [576, 608],
    desc: 'Edição de vídeos.',
    descAt: [576, 641, 285],
  },
  {
    name: 'Figma',
    icon: iconFigma,
    iconAt: [1027, 478, 108],
    stars: [[1174, 511, 'full'], [1223, 511, 'full'], [1271, 511, 'outline']],
    rating: 2,
    label: 'Figma - INTERMEDIÁRIO',
    labelAt: [1030, 608],
    desc: 'Criação de peças gráficas.',
    descAt: [1029, 641, 285],
  },
  {
    name: 'Illustrator',
    icon: iconAi,
    iconAt: [140, 721, 107],
    stars: [[275, 753, 'full'], [323, 753, 'full'], [372, 753, 'full']],
    rating: 3,
    label: 'Illustrator - AVANÇADO',
    labelAt: [138, 851],
    desc: 'Criação de peças gráficas e vetorização.',
    descAt: [137, 884, 258],
  },
  {
    name: 'Procreate',
    icon: iconProcreate,
    iconAt: [579, 721, 107],
    stars: [[726, 753, 'narrow'], [774, 753, 'full'], [823, 753, 'full']],
    rating: 3,
    label: 'Procreate - AVANÇADO',
    labelAt: [576, 851],
    desc: 'Ilustração.',
    descAt: [579, 884, 258],
  },
  {
    name: 'Canva',
    icon: iconCanva,
    iconAt: [1030, 721, 107],
    stars: [[1177, 753, 'full'], [1226, 753, 'full'], [1274, 753, 'full']],
    rating: 3,
    label: 'Canva - AVANÇADO',
    labelAt: [1034, 846],
    desc: 'Criação de peças gráficas e apresentações.',
    descAt: [1034, 877, 256],
  },
];

/** Frame "HABILIDADES" (Figma 6:1536) */
export default function Habilidades() {
  return (
    <Section id="habilidades" className="habilidades" label="Habilidades">
      <SiteHeader theme="habilidades" current="habilidades" />

      <h2 className="abs hab__title f-display fs-128 upper t-center" style={at(128, 264, 776)}>
        HABILIDADES
      </h2>

      <img className="abs rot hab__face" src={face} alt="" style={rotated(1058.26, 325.63, 178.369, 191.854, 16.96)} />

      <ul className="group hab__list">
        {SKILLS.map((skill) => (
          <li key={skill.name} className="group skill">
            <img className="abs skill__icon" src={skill.icon} alt="" style={at(skill.iconAt[0], skill.iconAt[1], skill.iconAt[2], skill.iconAt[2])} />
            <span className="group skill__stars" role="img" aria-label={`Nível ${skill.rating} de 3`}>
              {skill.stars.map(([x, y, kind], i) => (
                <img key={i} className="abs" src={STAR[kind].src} alt="" style={at(x, y, STAR[kind].w, 43)} />
              ))}
            </span>
            <h3 className="abs skill__label f-ui fs-24 nowrap" style={at(skill.labelAt[0], skill.labelAt[1])}>
              {skill.label}
            </h3>
            <p className="abs skill__desc f-body fs-20" style={at(skill.descAt[0], skill.descAt[1], skill.descAt[2])}>
              {skill.desc}
            </p>
          </li>
        ))}
      </ul>

      <ScrollPill src={pill} x={1249} y={261} to="contato" label="Ir para Contato" />
    </Section>
  );
}
