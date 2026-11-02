import Section from '../components/Section';
import SiteHeader from '../components/SiteHeader';
import ScrollPill from '../components/ScrollPill';
import { at, crop, rotated } from '../lib/layout';
import logoNarcoticos from '../assets/experiencia/logo-narcoticos.svg';
import logoPaprica from '../assets/experiencia/paprica-logo.png';
import fotoNarcoticos from '../assets/experiencia/foto-narcoticos.png';
import fotoPaprica from '../assets/experiencia/foto-paprica.png';
import fotoCharneira from '../assets/experiencia/foto-charneira.png';
import starYellow from '../assets/experiencia/star-yellow.svg';
import starGreen from '../assets/experiencia/star-green.svg';
import pill from '../assets/experiencia/scroll-pill.svg';
import './Experiencia.css';

/** Frame "PROJETOS" 6:1424 do Figma (conteúdo: EXPERIÊNCIA) */
export default function Experiencia() {
  return (
    <Section id="experiencia" className="experiencia" label="Experiência">
      <SiteHeader theme="experiencia" current="experiencia" />

      <h2 className="abs exp__title f-display fs-90 upper" style={at(459, 234, 523)}>
        EXPERIÊNCIA
      </h2>

      <article className="group exp-card">
        <p className="abs exp__year f-ui fs-20 upper t-center" style={at(196, 370, 147)}>
          2025 - 2026
        </p>
        <h3 className="abs exp__logo-svg" style={at(149, 417, 241, 63)}>
          <img src={logoNarcoticos} alt="Bateria Narcoticos" />
        </h3>
        <p className="abs exp__desc f-body fs-20 t-center" style={at(86, 515, 366)}>
          Desenvolvimento de campanhas visuais, comunicação de eventos e produtos personalizados.
        </p>
        <div className="abs crop exp__photo" style={crop(142, 631, 255, 300, -5, -73, 297, 446)}>
          <img src={fotoNarcoticos} alt="Mascote da Bateria Narcoticos" />
        </div>
      </article>

      <article className="group exp-card">
        <p className="abs exp__year f-ui fs-20 upper t-center" style={at(623, 370, 196)}>
          2026 - Atualmente
        </p>
        <h3 className="abs exp__logo-mask" style={{ ...at(613, 417, 231.111, 52), '--mask': `url(${logoPaprica})` }}>
          <span className="sr-only">páprica.ag</span>
        </h3>
        <p className="abs exp__desc f-body fs-20 t-center" style={at(560, 504, 338)}>
          Criação de peças gráficas para redes sociais, e captação.
        </p>
        <div className="abs crop exp__photo" style={crop(593, 631, 255, 300, -17, -62, 288, 385)}>
          <img src={fotoPaprica} alt="Cauan Porto segurando um cartão da páprica.ag" />
        </div>
      </article>

      <article className="group exp-card">
        <p className="abs exp__year f-ui fs-20 upper t-center" style={at(1099, 370, 147)}>
          2025 - 2026
        </p>
        <h3 className="group exp__charneira f-ui t-center">
          <span className="abs fs-48" style={at(1034, 417, 287, 45)}>
            Charneira
          </span>
          <span className="abs fs-20" style={at(1072, 462, 211, 19)}>
            (Semana acadêmica)
          </span>
        </h3>
        <p className="abs exp__desc f-body fs-20 t-center" style={at(1049, 513, 257)}>
          Participação na organização e na captação da Semana Acadêmica de Design da PUCPR.
        </p>
        <div className="abs crop exp__photo" style={crop(1050, 631, 255, 300, -150, -36, 517, 345)}>
          <img src={fotoCharneira} alt="Cauan Porto fotografando na Semana Acadêmica" />
        </div>
      </article>

      <img className="abs rot exp__star desktop-only" src={starYellow} alt="" style={rotated(390.24, 638.24, 91, 91, 17.82)} />
      <img className="abs rot exp__star desktop-only" src={starGreen} alt="" style={rotated(593.24, 846.24, 91, 91, 17.82)} />

      <ScrollPill src={pill} x={1274} y={836} to="habilidades" label="Ir para Habilidades" />
    </Section>
  );
}
