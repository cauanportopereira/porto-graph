import Section from '../components/Section';
import SiteHeader from '../components/SiteHeader';
import ScrollPill from '../components/ScrollPill';
import SectionLink from '../components/SectionLink';
import { at } from '../lib/layout';
import star from '../assets/home/star.svg';
import face from '../assets/home/face.svg';
import pill from '../assets/home/scroll-pill.svg';
import './Home.css';

/** Frame "HOMEPAGE" (Figma 3:2) */
export default function Home() {
  return (
    <Section id="home" className="home" label="Início">
      <SiteHeader theme="home" />

      <div className="group home__art">
        <img className="abs home__star" src={star} alt="" style={at(502, 301, 174, 174)} />
        <img className="abs home__face" src={face} alt="" style={at(543.99, 356.99, 288.384, 310.483)} />
      </div>

      <p className="abs home__portfolio f-display fs-128 nowrap" style={at(141, 361, 344)}>
        <span className="is-yellow">PORT</span>
        <br />
        FÓLIO
      </p>

      <h1 className="abs home__name f-display fs-128 t-right nowrap" style={at(886, 367, 408)}>
        CAUAN
        <br />
        <span className="is-yellow">PORTO</span>
      </h1>

      <p className="abs home__role f-ui fs-40 t-right nowrap" style={at(985, 628, 309)}>
        Designer Gráfico
      </p>

      <SectionLink to="projetos" className="abs btn btn--green home__cta f-ui" style={at(146, 632, 254, 46)}>
        Explore os Projetos →
      </SectionLink>

      <p className="abs home__tagline f-ui fs-32" style={at(154, 850, 761)}>
        Design gráfico, <span className="home__highlight">criatividade</span> e comunicação visual.
      </p>

      <ScrollPill src={pill} x={1231} y={809} to="sobre" label="Ir para Sobre mim" />
    </Section>
  );
}
