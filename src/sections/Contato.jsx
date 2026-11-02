import Section from '../components/Section';
import SiteHeader from '../components/SiteHeader';
import ScrollPill from '../components/ScrollPill';
import Media from '../components/Media';
import { CONTACT } from '../data/site';
import { at } from '../lib/layout';
import faces from '../assets/contato/faces.svg';
import video from '../assets/contato/video-contato.mp4';
import pill from '../assets/contato/scroll-pill.svg';
import './Contato.css';

/* Posições dos botões sociais no Figma (187 x 63 cada). */
const SOCIAL_X = [123, 356, 589];

/** Frame "CONTATO" (Figma 6:1708) */
export default function Contato() {
  return (
    <Section id="contato" className="contato" label="Contato">
      <SiteHeader theme="contato" current="contato" />

      <h2 className="abs contato__title f-display fs-128" style={at(133, 243.9, 692)}>
        <span className="contato__title-light">
          VAMOS
          <br />
          CRIAR ALGO
        </span>
        <br />
        JUNTOS?
      </h2>

      <p className="abs contato__lead f-body fs-20 t-right" style={at(558.6, 278.8, 256)}>
        Tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia?
        <br />
        <br />
        <strong>Vamos conversar!</strong>
      </p>

      <div className="abs contato__video" style={at(958, 295, 308, 546)}>
        <Media item={{ type: 'video', src: video, alt: 'Vídeo de Cauan Porto' }} ambient />
      </div>

      <img className="abs contato__faces" src={faces} alt="" style={at(700.682, 557.684, 301.317, 94.354)} />

      <a className="abs contato__email f-body fs-24 nowrap" href={`mailto:${CONTACT.email}`} style={at(130, 711, 366)}>
        {CONTACT.email}
      </a>

      <ul className="group contato__social">
        {CONTACT.links.map((link, i) => (
          <li key={link.label} className="abs" style={at(SOCIAL_X[i], 824, 187, 63)}>
            <a className="btn contato__btn f-ui fs-32" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <ScrollPill src={pill} x={1241} y={780} to="home" label="Voltar ao início" />
    </Section>
  );
}
