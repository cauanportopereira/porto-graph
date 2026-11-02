import p1 from '../assets/sobre/blond-1.svg';
import p2 from '../assets/sobre/blond-2.svg';
import p3 from '../assets/sobre/blond-3.svg';
import p4 from '../assets/sobre/blond-4.svg';
import p5 from '../assets/sobre/blond-5.svg';
import p6 from '../assets/sobre/blond-6.svg';
import p7 from '../assets/sobre/blond-7.svg';
import p8 from '../assets/sobre/blond-8.svg';
import p9 from '../assets/sobre/blond-9.svg';
import p10 from '../assets/sobre/blond-10.svg';
import './FaceBlond.css';

/*
 * Rosto loiro ("Camada 1" do frame SOBRE) montado com as 10 camadas vetoriais
 * originais do Figma. [svg, centroX, centroY, largura, altura] relativos ao
 * grupo de 172,8 x 181,1; todas giradas 13,53°.
 */
const PIECES = [
  [p1, 86.4, 90.56, 140.968, 152.417],
  [p2, 31.89, 58.2, 0.498651, 0.975949],
  [p3, 96.84, 14.93, 0.713425, 0.292964],
  [p4, 95.61, 51.69, 119.454, 69.8166],
  [p5, 109.73, 129.93, 33.2144, 78.3405],
  [p6, 47.73, 115.28, 33.1195, 77.9377],
  [p7, 38.45, 72.07, 3.72628, 4.09618],
  [p8, 141.26, 114.21, 20.4908, 45.2679],
  [p9, 26.78, 86.66, 20.5023, 45.2553],
  [p10, 82.94, 104.53, 94.3725, 108.703],
];

export default function FaceBlond({ className = '', style }) {
  return (
    <div className={`face-blond ${className}`} style={style} aria-hidden="true">
      {PIECES.map(([src, cx, cy, w, h], i) => (
        <img
          key={i}
          src={src}
          alt=""
          style={{ '--px': cx - w / 2, '--py': cy - h / 2, '--pw': w, '--ph': h }}
        />
      ))}
    </div>
  );
}
