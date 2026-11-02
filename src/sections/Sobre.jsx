import Section from '../components/Section';
import SiteHeader from '../components/SiteHeader';
import ScrollPill from '../components/ScrollPill';
import FaceBlond from '../components/FaceBlond';
import { at, crop, rotated } from '../lib/layout';
import foto1 from '../assets/sobre/foto-1.png';
import foto2 from '../assets/sobre/foto-2.png';
import starYellowSm from '../assets/sobre/star-yellow-sm.svg';
import starNavySm from '../assets/sobre/star-navy-sm.svg';
import starYellowLg from '../assets/sobre/star-yellow-lg.svg';
import faceMain from '../assets/sobre/face-main.svg';
import faceLeopard from '../assets/sobre/face-leopard.svg';
import pill from '../assets/sobre/scroll-pill.svg';
import './Sobre.css';

/** Frame "SOBRE" (Figma 3:209) */
export default function Sobre() {
  return (
    <Section id="sobre" className="sobre" label="Sobre mim">
      <SiteHeader theme="sobre" current="sobre" />

      <h2 className="group sobre__title">
        <span className="abs sobre__hello f-display fs-90" style={at(96, 230, 681)}>
          MUITO PRAZER!
        </span>
        <span className="abs sobre__iam f-display fs-90 upper" style={at(96, 316, 849)}>
          Sou Cauan Porto
        </span>
      </h2>

      <div className="group sobre__stars">
        <img className="abs" src={starYellowSm} alt="" style={at(745, 243, 64, 64)} />
        <img className="abs" src={starNavySm} alt="" style={at(816, 243, 64, 64)} />
      </div>

      <div className="abs sobre__text f-body fs-24" style={at(99, 492, 385)}>
        <p>
          20 anos, um designer gráfico <strong>curioso por natureza e criativo por escolha.</strong>
        </p>
        <p>
          Entre cores, tipografias e muitas referências, encontro no design uma maneira de{' '}
          <strong>expressar ideias e explorar possibilidades.</strong> Gosto de experimentar, questionar o óbvio e
          criar soluções visuais que tenham <strong>personalidade</strong>. Afinal, acredito que um
          <strong> bom design não precisa apenas ser visto, mas também sentido e lembrado.</strong>
        </p>
      </div>

      <img className="abs rot sobre__face-main" src={faceMain} alt="" style={rotated(688.54, 628.17, 287, 310.285, -7.05)} />

      <div className="group sobre__photos">
        <div className="abs crop sobre__foto2" style={crop(940, 477, 392, 392, -121, -76, 654, 490)}>
          <img src={foto2} alt="Cauan Porto usando fones de ouvido" />
        </div>
        <div className="abs crop sobre__foto1" style={crop(940, 238, 392, 227, 0, -3, 396, 264)}>
          <img src={foto1} alt="Cauan Porto fotografando com uma câmera analógica" />
        </div>
        <img className="abs sobre__star-lg" src={starYellowLg} alt="" style={at(1260, 170, 136, 136)} />
        <FaceBlond className="abs sobre__face-blond" style={at(859.97, 379, 172.8)} />
        <img className="abs rot sobre__face-leopard" src={faceLeopard} alt="" style={rotated(927.36, 833.08, 138, 149.218, 8.59)} />
      </div>

      <ScrollPill src={pill} x={1296} y={835} to="projetos" label="Ir para Projetos" />
    </Section>
  );
}
