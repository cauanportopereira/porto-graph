import SiteHeader from '../components/SiteHeader';
import './pages.css';

/**
 * Moldura das páginas internas (lista e páginas de projeto): fundo amarelo
 * e cabeçalho idênticos ao frame PROJETOS.
 */
export default function PageShell({ children }) {
  return (
    <main id="conteudo" className="section section--yellow page">
      <div className="stage page__head">
        <SiteHeader theme="projetos" current="projetos" />
      </div>
      <div className="page__body">{children}</div>
    </main>
  );
}
