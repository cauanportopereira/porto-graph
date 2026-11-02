# Porto Graph — portfólio de Cauan Porto

Site em React + Vite reproduzindo o layout do Figma
(`Nf44knBubu8sAkKgij2GxJ`, frames HOMEPAGE, SOBRE, PROJETOS, EXPERIÊNCIA,
HABILIDADES e CONTATO).

## 1. Como executar e visualizar

Pré-requisito: [Node.js LTS](https://nodejs.org) instalado.

```bash
npm install        # só na primeira vez
npm run dev        # abre em http://localhost:5173
```

Para gerar a versão final otimizada: `npm run build` (sai em `dist/`).
Para conferir essa versão localmente: `npm run preview`.

## Estrutura

```
src/
  assets/                Mídias exportadas do Figma, uma pasta por seção
    fonts/               Fontes originais (Block Berthold, Printvetica, Helvetica)
    projects/            Mídias dos projetos (uma pasta por projeto)
  components/            Navegação, logo, setas, rosto composto, mídia
    projects/            Mosaico, slide, card e célula de mídia dos projetos
  sections/              Home, Sobre, Projetos, Experiencia, Habilidades, Contato
  pages/                 Página inicial, /projetos e /projetos/:slug
  data/projects.js       ← dados dos projetos (único arquivo a editar)
  data/site.js           Menu, cores do cabeçalho por seção, contato
  styles/                Tokens (cores/fontes), estilos globais e "stage"
```

### Como a fidelidade ao Figma é mantida

Cada seção é um "stage" de 1440 × 1024 (o tamanho do frame). Os elementos
usam as coordenadas exatas do Figma (`at(x, y, w, h)` em `src/lib/layout.js`)
e escalam proporcionalmente com a largura da tela. Abaixo de 900 px o layout
vira uma coluna, com menu fixo e cores da seção visível.

## 2. Como atualizar as imagens

As imagens ficam em `src/assets/<seção>/`. Para trocar uma imagem, substitua o
arquivo **mantendo o mesmo nome** (ex.: `src/assets/sobre/foto-1.png`). O
enquadramento (recorte) é definido no componente da seção por `crop(...)`.
Se a nova imagem tiver outra proporção, ajuste os 4 últimos números
(posição e tamanho da imagem dentro do recorte), que são os mesmos valores
do Figma.

## 3. Como adicionar novos projetos

Edite **apenas** `src/data/projects.js`:

1. Crie a pasta `src/assets/projects/<slug-do-projeto>/` e coloque logo,
   imagens e vídeos (`.jpg`, `.png`, `.webp`, `.svg`, `.mp4`).
2. Importe os arquivos no topo de `projects.js`.
3. Adicione um objeto ao array `projects` seguindo o modelo comentado no
   arquivo (slug, título, categoria, logo, descrição, 5 mídias do mosaico e
   galeria opcional).

Automaticamente:

- o projeto vira uma aba do carrossel da seção Projetos (setas ← →);
- aparece como card em `/projetos`;
- ganha uma página própria em `/projetos/<slug>`.

Comprima os vídeos antes de adicionar (ideal: até ~10 MB cada, 720 px de
largura). O GitHub recusa arquivos acima de 100 MB.

Para remover, apague o objeto do array. Para editar, altere seus campos.
Nenhuma outra seção é afetada.

Enquanto não houver projetos, a seção mostra os espaços reservados do Figma
(retângulos cinza identificados "Imagem 1…5", "LOGO" e o texto-modelo).

## 4. Como publicar

O site é estático (sem servidor nem banco de dados).

### GitHub Pages (configurado)

O arquivo `.github/workflows/deploy.yml` publica o site automaticamente a
cada `git push` na branch `main`:

1. Crie no GitHub um repositório **público** e vazio (ex.: `porto-graph`).
2. Envie o projeto:
   ```bash
   git remote add origin https://github.com/<usuario>/porto-graph.git
   git push -u origin main
   ```
3. No repositório: **Settings → Pages → Source: GitHub Actions**.
4. Acompanhe em **Actions**; ao terminar, o site fica em
   `https://<usuario>.github.io/porto-graph/`.

Para atualizar o site depois: altere os arquivos, faça commit e `git push`.
O caminho base (`/porto-graph/`) é calculado pelo próprio workflow a partir
do nome do repositório.

### Outras opções

- **Vercel**: importe o repositório em vercel.com; o arquivo `vercel.json`
  já trata as rotas `/projetos/...`.
- **Netlify**: build `npm run build`, pasta `dist`; o arquivo
  `public/_redirects` já trata as rotas.
- **Hospedagem comum**: rode `npm run build` e envie o conteúdo de `dist/`.
  Configure o servidor para responder `index.html` em rotas desconhecidas.

Antes de publicar:

- Confirme a licença de uso web das fontes Block Berthold e Printvetica
  (num repositório público os arquivos de fonte ficam visíveis).
- Converta as fontes para `.woff2` (a Printvetica tem 2 MB em `.otf`) e
  comprima as fotos (algumas têm mais de 1,5 MB).

## Links

Links externos (Behance, LinkedIn, Instagram, e-mail e o botão
"Ver mais projetos") ficam em `src/data/site.js`.

## Observações

- A seção CONTATO foi montada a partir do SVG exportado do frame
  (rostos e seta extraídos dele em `src/assets/contato/`).
- O texto "Photohop - AVANÇADO" foi mantido exatamente como está no Figma.
