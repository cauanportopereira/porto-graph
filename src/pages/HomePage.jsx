import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from '../sections/Home';
import Sobre from '../sections/Sobre';
import Projetos from '../sections/Projetos';
import Experiencia from '../sections/Experiencia';
import Habilidades from '../sections/Habilidades';
import Contato from '../sections/Contato';

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = 'Porto Graph | Cauan Porto';
  }, []);

  // Vindo de outra página com /#secao: rola até a seção.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
  }, [hash]);

  return (
    <>
      <Home />
      <Sobre />
      <Projetos />
      <Experiencia />
      <Habilidades />
      <Contato />
    </>
  );
}
