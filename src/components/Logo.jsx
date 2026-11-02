import { LOGOS } from '../data/site';
import './Logo.css';

/**
 * Logo Porto Graph (3 partes vetoriais do Figma: rosto, "Porto", "Graph").
 * O tamanho vem do container (proporção 164 x 74,92).
 */
export default function Logo({ variant = 'yellow', className = '', style }) {
  const parts = LOGOS[variant];
  return (
    <span className={`logo ${className}`} style={style}>
      <img className="logo__face" src={parts.face} alt="" />
      <img className="logo__porto" src={parts.porto} alt="" />
      <img className="logo__graph" src={parts.graph} alt="" />
      <span className="sr-only">Porto Graph</span>
    </span>
  );
}
