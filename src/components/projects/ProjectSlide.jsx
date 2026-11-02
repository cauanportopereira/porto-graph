import { Link } from 'react-router-dom';
import { at } from '../../lib/layout';
import ProjectMosaic from './ProjectMosaic';
import { instagramUrl } from '../../data/projects';

/**
 * Uma "aba" do carrossel de Projetos, nas posições do frame PROJETOS do Figma.
 */
export default function ProjectSlide({ project }) {
  const href = project.slug ? `/projetos/${project.slug}` : null;
  const mosaic = <ProjectMosaic project={project} />;

  return (
    <div className="group project-slide">
      <div className="abs project-slide__mosaic" style={at(116, 324, 846, 615)}>
        {href ? (
          <Link to={href} className="project-slide__mosaic-link" aria-label={`Ver projeto ${project.title}`}>
            {mosaic}
          </Link>
        ) : (
          mosaic
        )}
      </div>

      <div className="abs project-slide__logo" style={at(1065, 324, 243, 70)}>
        {project.logo ? (
          <img src={project.logo} alt={project.title} />
        ) : (
          <p className="f-ui fs-48 upper t-center">LOGO</p>
        )}
      </div>

      {project.title && <h3 className="sr-only">{project.title}</h3>}

      <div className="abs project-slide__desc f-body fs-16" style={at(1065, 403, 243, 303)}>
        {project.category && <p className="project-slide__category f-ui">{project.category}</p>}
        <p>{project.description}</p>
        {project.instagram && (
          <p className="project-slide__insta">
            Instagram:{' '}
            <a href={instagramUrl(project.instagram)} target="_blank" rel="noopener noreferrer">
              {project.instagram}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
