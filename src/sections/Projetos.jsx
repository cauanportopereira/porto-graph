import { useEffect, useState } from 'react';
import Section from '../components/Section';
import SiteHeader from '../components/SiteHeader';
import ScrollPill from '../components/ScrollPill';
import ProjectSlide from '../components/projects/ProjectSlide';
import { projects, PLACEHOLDER_PROJECT } from '../data/projects';
import { MORE_PROJECTS_URL } from '../data/site';
import { at } from '../lib/layout';
import arrow from '../assets/projetos/arrow-right.svg';
import pill from '../assets/projetos/scroll-pill.svg';
import '../components/projects/projects.css';
import './Projetos.css';

/** Frame "PROJETOS" (Figma 4:944). Cada projeto é uma aba do carrossel. */
export default function Projetos() {
  const list = projects.length ? projects : [PLACEHOLDER_PROJECT];
  const [index, setIndex] = useState(0);
  const total = list.length;
  const canNavigate = total > 1;
  const go = (step) => setIndex((i) => (i + step + total) % total);

  // Pré-carrega as fotos das abas vizinhas para a troca ser instantânea.
  useEffect(() => {
    if (!canNavigate) return;
    [index + 1, index - 1].forEach((i) => {
      list[(i + total) % total].cover?.forEach((item) => {
        if (item.type === 'image') new Image().src = item.src;
      });
    });
  }, [index, canNavigate, list, total]);

  const onKeyDown = (e) => {
    if (!canNavigate) return;
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  return (
    <Section id="projetos" className="projetos section--yellow" label="Projetos">
      <SiteHeader theme="projetos" current="projetos" />

      <h2 className="abs projetos__title f-display fs-90 upper" style={at(115, 212, 430)}>
        PROJETOS
      </h2>

      <div
        className="group projetos__carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Projetos"
        tabIndex={canNavigate ? 0 : undefined}
        onKeyDown={onKeyDown}
      >
        <div className="group" aria-live="polite">
          <ProjectSlide key={index} project={list[index]} />
        </div>

        <button
          type="button"
          className="abs projetos__arrow projetos__arrow--prev"
          style={at(30.36, 488, 48, 48)}
          onClick={() => go(-1)}
          disabled={!canNavigate}
          aria-label="Projeto anterior"
        >
          <img src={arrow} alt="" />
        </button>
        <button
          type="button"
          className="abs projetos__arrow projetos__arrow--next"
          style={at(1356.64, 488, 48, 48)}
          onClick={() => go(1)}
          disabled={!canNavigate}
          aria-label="Próximo projeto"
        >
          <img src={arrow} alt="" />
        </button>

        {canNavigate && (
          <p className="sr-only">
            Projeto {index + 1} de {total}
          </p>
        )}
      </div>

      <a
        href={MORE_PROJECTS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="abs btn btn--green projetos__more f-ui fs-24 upper"
        style={at(1053, 750, 271, 46)}
      >
        Ver mais projetos
      </a>

      <ScrollPill src={pill} x={1157} y={840} to="experiencia" label="Ir para Experiência" />
    </Section>
  );
}
