/*
 * ============================================================
 *  PROJETOS — único arquivo a editar para incluir/remover projetos
 * ============================================================
 *
 * Cada projeto vira uma "aba" do carrossel da seção Projetos, um card
 * na página /projetos e uma página individual em /projetos/<slug>.
 *
 * Mídias ficam em: src/assets/projects/<slug>/
 * e são importadas no topo deste arquivo. Exemplo:
 *
 *   import exLogo from '../assets/projects/exemplo/logo.svg';
 *   import exCapa1 from '../assets/projects/exemplo/capa-1.jpg';
 *   import exVideo from '../assets/projects/exemplo/making-of.mp4';
 *
 * Modelo de projeto:
 *
 *   {
 *     slug: 'exemplo',                    // usado na URL (sem espaços/acentos)
 *     title: 'Nome do projeto',
 *     category: 'Identidade visual',
 *     logo: exLogo,                       // ocupa o lugar de "LOGO"
 *     description: 'Texto do projeto...',
 *     instagram: '@perfil',              // opcional: perfil do cliente
 *     // 5 mídias do mosaico, na ordem:
 *     // 1 = central alta (344x615), 2 = sup. esquerda, 3 = inf. esquerda,
 *     // 4 = sup. direita, 5 = inf. direita (241x303 cada)
 *     cover: [
 *       { type: 'image', src: exCapa1, alt: 'Descrição da imagem' },
 *       { type: 'video', src: exVideo, poster: exCapa1, alt: '...' },
 *       ...
 *     ],
 *     // Mídias extras da página individual (opcional)
 *     gallery: [
 *       { type: 'image', src: ..., alt: '...' },
 *     ],
 *   }
 */

import bideseLogo from '../assets/projects/bidese/logo.png';
import bideseStory from '../assets/projects/bidese/story-destaques-cwb.mp4';
import bideseMobiliarioManha from '../assets/projects/bidese/mobiliario-manha-card4.mp4';
import bideseUnidadeManha from '../assets/projects/bidese/destaque-unidade-manha-card3.jpg';
import bideseBemEstar from '../assets/projects/bidese/bem-estar-manha-card1.mp4';
import bideseZen from '../assets/projects/bidese/mobiliario-zen-card1.jpg';

import soulLogo from '../assets/projects/soul-power/logo.png';
import soulMoodTropical from '../assets/projects/soul-power/video-mood-tropical.mp4';
import soulAcidificante from '../assets/projects/soul-power/finalizacao-acidificante-card1.mp4';
import soulAlecrim from '../assets/projects/soul-power/linha-alecrim.jpg';
import soulOQueEuQuero from '../assets/projects/soul-power/o-que-eu-quero.jpg';
import soulTropical from '../assets/projects/soul-power/lancamento-linha-tropical.jpg';

import maristaLogo from '../assets/projects/marista/logo.png';
import maristaUbuntu from '../assets/projects/marista/projeto-ubuntu.mp4';
import maristaEnem from '../assets/projects/marista/resultado-enem.jpg';
import maristaPauta from '../assets/projects/marista/pauta-mensal-setembro.jpg';
import maristaAtitude from '../assets/projects/marista/atitude-marista.jpg';
import maristaPost from '../assets/projects/marista/instagram-post.jpg';

import elixirLogo from '../assets/projects/elixir/logo.png';
import elixirAntesDepois from '../assets/projects/elixir/reels-antes-e-depois.mp4';
import elixirAcidificante from '../assets/projects/elixir/acidificante-card1.mp4';
import elixirComentarios from '../assets/projects/elixir/comentarios-positivos.jpg';
import elixirFormulas from '../assets/projects/elixir/formulas-dia-a-dia.jpg';
import elixirAtivador from '../assets/projects/elixir/ativador-escova-blindagem.jpg';

import narcoLogo from '../assets/projects/narcoticos/logo.png';
import narcoVideo from '../assets/projects/narcoticos/video-reels.mp4';
import narcoPost1 from '../assets/projects/narcoticos/post-1.jpg';
import narcoPost2 from '../assets/projects/narcoticos/post-2.jpg';
import narcoPost3 from '../assets/projects/narcoticos/post-3.jpg';
import narcoPost4 from '../assets/projects/narcoticos/post-4.jpg';

import academicosLogo from '../assets/projects/academicos/logo.png';
import academicosVideo from '../assets/projects/academicos/video-captacao.mp4';
import academicosPost5 from '../assets/projects/academicos/post-5.jpg';
import academicosPost6 from '../assets/projects/academicos/post-6.jpg';
import academicosPost7 from '../assets/projects/academicos/post-7.jpg';
import academicosPost8 from '../assets/projects/academicos/post-8.jpg';

export const projects = [
  {
    slug: 'bidese',
    title: 'Bidese',
    category: '',
    logo: bideseLogo,
    description:
      'A Bidese é uma construtora e incorporadora de alto padrão, com foco em arquitetura, design e inovação. Para a marca, desenvolvi peças gráficas para redes sociais e animações sutis em motion design, respeitando sua identidade visual e comunicação sofisticada.',
    instagram: '@bideseconstrutora',
    cover: [
      { type: 'video', src: bideseStory, alt: 'Story Destaques CWB, Bidese' },
      { type: 'video', src: bideseMobiliarioManha, alt: 'Mobiliário assinado, Edifício Manhã' },
      { type: 'image', src: bideseUnidadeManha, alt: 'Edifício Manhã: a conveniência do Batel' },
      { type: 'video', src: bideseBemEstar, alt: 'Bem-estar e autocuidado, Edifício Manhã' },
      { type: 'image', src: bideseZen, alt: 'Curadoria de Mobiliário ZEN: sintonia entre forma, função e essência' },
    ],
    gallery: [],
  },
  {
    slug: 'soul-power',
    title: 'Soul Power',
    category: '',
    logo: soulLogo,
    description:
      'A Soul Power é uma marca brasileira de cosméticos capilares que valoriza a diversidade e a beleza natural dos cabelos. Para a marca, desenvolvi peças gráficas para redes sociais e campanhas de mídia ON, animações sutis em motion design, além de edição e tratamento de imagens, valorizando os produtos e respeitando a identidade visual vibrante da marca.',
    instagram: '@soulpowerbrasil',
    cover: [
      { type: 'video', src: soulMoodTropical, alt: 'Vídeo mood da Linha Tropical, Soul Power' },
      { type: 'video', src: soulAcidificante, alt: 'Finalização com a Linha Acidificante, Soul Power' },
      { type: 'image', src: soulAlecrim, alt: 'Peça estática da Linha Alecrim, Soul Power' },
      { type: 'image', src: soulTropical, alt: 'Post de lançamento da Linha Tropical, Soul Power' },
      { type: 'image', src: soulOQueEuQuero, alt: 'O que eu quero, o que eu preciso, o que eu mereço, Soul Power' },
    ],
    gallery: [],
  },
  {
    slug: 'marista',
    title: 'Grupo Marista',
    category: '',
    logo: maristaLogo,
    description:
      'O Grupo Marista atua na área da educação, reunindo iniciativas como o Marista Brasil, os Colégios Maristas e as Escolas Sociais Maristas. Para suas diferentes unidades, desenvolvi peças gráficas para redes sociais, projetos de ambientação e materiais personalizados, como camisetas, moletons, bottons e outros itens, respeitando a identidade visual e as necessidades de cada instituição.',
    cover: [
      { type: 'video', src: maristaUbuntu, alt: 'Pauta personalizada: Projeto Ubuntu, Marista' },
      { type: 'image', src: maristaEnem, alt: 'Resultado ENEM, Marista' },
      { type: 'image', src: maristaAtitude, alt: 'Atitude Marista' },
      { type: 'image', src: maristaPauta, alt: 'Pauta mensal de setembro, Marista Brasil' },
      { type: 'image', src: maristaPost, alt: 'Post para Instagram, Marista' },
    ],
    gallery: [],
  },
  {
    slug: 'elixir',
    title: 'E.lixir',
    category: '',
    logo: elixirLogo,
    description:
      'A E.lixir é uma marca de cosméticos capilares voltada ao cuidado e à valorização dos cabelos. Para a marca, desenvolvi peças gráficas para redes sociais e campanhas de mídia ON, animações sutis em motion design, além de edição e tratamento de imagens, destacando os produtos e respeitando a identidade visual da marca.',
    instagram: '@e.lixiroficial',
    cover: [
      { type: 'video', src: elixirAntesDepois, alt: 'Reels Antes e Depois, E.lixir' },
      { type: 'video', src: elixirAcidificante, alt: 'Carrossel Acidificante, E.lixir' },
      { type: 'image', src: elixirComentarios, alt: 'Carrossel Comentários positivos, E.lixir' },
      { type: 'image', src: elixirFormulas, alt: 'Carrossel Fórmulas pensadas para acompanhar o dia a dia, E.lixir' },
      { type: 'image', src: elixirAtivador, alt: 'Diferença entre Ativador de Escova e Blindagem, E.lixir' },
    ],
    gallery: [],
  },
  {
    slug: 'narcoticos',
    title: 'Bateria Narcóticos',
    category: '',
    logo: narcoLogo,
    description:
      'A Bateria Narcóticos é a bateria universitária dos cursos de Comunicação, Artes e Design da PUCPR. Entre dezembro de 2025 e novembro de 2026, atuei como Diretor de Comunicação na criação de peças gráficas para redes sociais, desenvolvimento de identidades visuais para festas e eventos, além da criação de produtos personalizados, como camisetas, canecas, ecobags e bandeiras. Também fui responsável pela captação e edição de vídeos para Reels e TikTok, contribuindo para a comunicação e divulgação das atividades da bateria.',
    instagram: '@narcoticospucpr',
    cover: [
      { type: 'video', src: narcoVideo, alt: 'Reels: um dia de escalada com Red Bull, Bateria Narcóticos' },
      { type: 'image', src: narcoPost1, alt: 'Caneca personalizada da Bateria Narcóticos' },
      { type: 'image', src: narcoPost2, alt: 'Camisa personalizada da Bateria Narcóticos' },
      { type: 'image', src: narcoPost3, alt: 'Bandeira União Sinistra da Bateria Narcóticos' },
      { type: 'image', src: narcoPost4, alt: 'Cartaz da festa Rednight: IV edição da Casa dos Medos' },
    ],
    gallery: [],
  },
  {
    slug: 'academicos',
    title: 'Projetos Acadêmicos',
    category: '',
    logo: academicosLogo,
    description:
      'Ao longo da minha trajetória acadêmica, desenvolvi projetos voltados à produção audiovisual, envolvendo captação de fotografias e vídeos para redes sociais e trabalhos universitários. Atuei em diferentes etapas do processo criativo, desde a concepção e direção criativa até a produção, edição e pós-produção de conteúdos visuais, explorando diferentes linguagens, narrativas e técnicas audiovisuais.',
    cover: [
      { type: 'video', src: academicosVideo, alt: 'Vídeo de projeto acadêmico de produção audiovisual' },
      { type: 'image', src: academicosPost5, alt: 'Fotografia de projeto acadêmico' },
      { type: 'image', src: academicosPost6, alt: 'Fotografia de projeto acadêmico' },
      { type: 'image', src: academicosPost7, alt: 'Fotografia de projeto acadêmico' },
      { type: 'image', src: academicosPost8, alt: 'Fotografia de projeto acadêmico' },
    ],
    gallery: [],
  },
];

/**
 * Espaço reservado exibido enquanto não houver projetos.
 * Usa os textos-modelo do Figma ("LOGO" e o lorem ipsum).
 */
export const PLACEHOLDER_PROJECT = {
  slug: null,
  title: '',
  category: '',
  logo: null,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at venenatis turpis. Fusce fermentum feugiat pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum porta turpis, ac faucibus mauris. Suspendisse dignissim orci erat, nec luctus ligula laoreet quis. Donec consectetur nunc vel leo placerat accumsan. Fusce a interdum sapien, hendrerit condimentum sapien. Pellentesque a massa bibendum, elementum felis viverra, commodo purus. Fusce varius dolor nisl, eu mollis tellus volutpat in. Cras ornare eleifend nunc nec ullamcorper.',
  cover: [],
  gallery: [],
  isPlaceholder: true,
};

/** URL do perfil a partir do @ informado. */
export function instagramUrl(handle) {
  return `https://www.instagram.com/${handle.replace(/^@/, '')}/`;
}

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
