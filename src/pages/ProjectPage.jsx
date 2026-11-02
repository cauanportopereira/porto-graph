import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageShell from './PageShell';
import Media from '../components/Media';
import ProjectMosaic from '../components/projects/ProjectMosaic';
import { getProject, instagramUrl, projects } from '../data/projects';
import '../components/projects/projects.css';

/** /projetos/:slug: página individual, montada só com os dados do projeto. */
export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    if (project) document.title = `${project.title} | Porto Graph`;
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return <Navigate to="/projetos" replace />;

  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <PageShell>
      <article className="project-page">
        <header className="project-page__head">
          {project.logo && <img className="project-page__logo" src={project.logo} alt="" />}
          <h1 className={project.logo ? 'sr-only' : 'page__title f-display'}>{project.title}</h1>
          {project.category && <p className="project-page__category f-ui">{project.category}</p>}
        </header>

        <div className="project-page__intro">
          <ProjectMosaic project={project} className="project-page__mosaic" />
          <div className="project-page__desc f-body">
            <p>{project.description}</p>
            {project.instagram && (
              <p className="project-page__insta">
                Instagram:{' '}
                <a href={instagramUrl(project.instagram)} target="_blank" rel="noopener noreferrer">
                  {project.instagram}
                </a>
              </p>
            )}
          </div>
        </div>

        {project.gallery?.length > 0 && (
          <div className="project-page__gallery">
            {project.gallery.map((item, k) => (
              <figure key={k} className="project-page__item">
                <Media item={item} />
              </figure>
            ))}
          </div>
        )}

        <nav className="project-page__nav" aria-label="Outros projetos">
          <Link to="/projetos" className="btn btn--green">
            ← Todos os projetos
          </Link>
          {projects.length > 1 && (
            <div className="project-page__pager">
              <Link to={`/projetos/${prev.slug}`} className="f-ui">
                ← {prev.title}
              </Link>
              <Link to={`/projetos/${next.slug}`} className="f-ui">
                {next.title} →
              </Link>
            </div>
          )}
        </nav>
      </article>
    </PageShell>
  );
}
