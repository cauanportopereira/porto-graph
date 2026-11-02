import { Link, useLocation } from 'react-router-dom';

/**
 * Link para uma seção da página inicial. Na home vira âncora (rolagem suave);
 * nas páginas de projeto volta para a home já na seção.
 */
export default function SectionLink({ to, children, ...rest }) {
  const { pathname } = useLocation();
  if (pathname === '/') {
    return (
      <a href={`#${to}`} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link to={`/#${to}`} {...rest}>
      {children}
    </Link>
  );
}
