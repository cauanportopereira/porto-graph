import { Route, Routes, useLocation } from 'react-router-dom';
import MobileNav from './components/MobileNav';
import useActiveSection from './hooks/useActiveSection';
import { SECTION_ORDER } from './data/site';
import HomePage from './pages/HomePage';
import ProjectsIndexPage from './pages/ProjectsIndexPage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const active = useActiveSection(SECTION_ORDER, isHome);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <MobileNav theme={isHome ? active : 'projetos'} />
      <Routes>
        <Route
          path="/"
          element={
            <main id="conteudo">
              <HomePage />
            </main>
          }
        />
        <Route path="/projetos" element={<ProjectsIndexPage />} />
        <Route path="/projetos/:slug" element={<ProjectPage />} />
        <Route path="*" element={<ProjectsIndexPage />} />
      </Routes>
    </>
  );
}
