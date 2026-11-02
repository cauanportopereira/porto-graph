import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageShell from './PageShell';
import ProjectCard from '../components/projects/ProjectCard';
import { projects, PLACEHOLDER_PROJECT } from '../data/projects';
import '../components/projects/projects.css';

/** /projetos: todos os projetos em cards. */
export default function ProjectsIndexPage() {
  useEffect(() => {
    document.title = 'Projetos | Porto Graph';
    window.scrollTo(0, 0);
  }, []);

  const list = projects.length ? projects : [PLACEHOLDER_PROJECT, PLACEHOLDER_PROJECT, PLACEHOLDER_PROJECT];

  return (
    <PageShell>
      <h1 className="page__title f-display">PROJETOS</h1>
      <div className="page__grid">
        {list.map((project, i) => (
          <ProjectCard key={project.slug ?? i} project={project} />
        ))}
      </div>
      <Link to="/#projetos" className="btn btn--green page__back">
        ← Voltar
      </Link>
    </PageShell>
  );
}
