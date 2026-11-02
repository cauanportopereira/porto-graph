import { Link } from 'react-router-dom';
import MediaSlot from './MediaSlot';

/** Card de projeto (página /projetos). Usa a 1ª mídia do mosaico como capa. */
export default function ProjectCard({ project }) {
  const cover = <MediaSlot item={project.cover?.[0]} label="Capa do projeto" size="241 × 303" className="project-card__cover" />;

  if (!project.slug) {
    return (
      <article className="project-card project-card--placeholder">
        {cover}
        <p className="project-card__title f-ui">Projeto</p>
        <p className="project-card__category f-body">Categoria</p>
      </article>
    );
  }

  return (
    <article className="project-card">
      <Link to={`/projetos/${project.slug}`} className="project-card__link">
        {cover}
        <h2 className="project-card__title f-ui">{project.title}</h2>
        {project.category && <p className="project-card__category f-body">{project.category}</p>}
      </Link>
    </article>
  );
}
