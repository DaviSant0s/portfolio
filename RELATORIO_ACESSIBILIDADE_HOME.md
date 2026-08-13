# Relatório de acessibilidade e HTML semântico da Home

## 1. Escopo

Esta etapa corrigiu exclusivamente problemas de acessibilidade, HTML semântico, ARIA, landmarks, headings, links, ícones e navegação por teclado na Home.

Foram preservados:

- aparência visual;
- cores e tipografia;
- espaçamentos;
- conteúdo textual;
- animações;
- responsividade;
- React Router e `react-scroll`;
- Header e Footer;
- tema claro e escuro;
- artigos, SEO e MDX.

Nenhuma dependência foi adicionada.

## 2. Auditoria inicial reproduzida

A Home foi auditada antes das alterações com Lighthouse 13.4.1 em modo mobile, usando o Chromium headless limpo fornecido pelo Playwright, sem extensões.

Resultado inicial:

```text
Accessibility: 90
Best Practices: 100
```

O DOM real confirmou:

```text
main landmarks: 0
h1: 5
dt/dd fora de um dl real: 6
links com aria-label sem href: 1
grupos de links com o mesmo nome e destinos diferentes: 1
tabIndex positivo: 0
imagens sem atributo alt: 0
```

## 3. Elements use prohibited ARIA attributes

### Elemento responsável

Arquivo: `src/components/SocialsGroup/index.jsx`.

O link de ícone que levava à seção de contato era um `Link` do `react-scroll` com `aria-label`, mas sem `href`:

```jsx
<Link
  to='id_contact'
  aria-label='Ir para a seção de contato'
>
```

O `react-scroll` renderizava:

```html
<a aria-label="Ir para a seção de contato">
```

Sem `href`, o elemento `<a>` não possui semântica nativa de link e assume um papel genérico. Nessa condição, o nome criado com `aria-label` foi considerado proibido pelo axe/Lighthouse.

### Correção

Foi fornecido um destino real, mantendo o comportamento suave do `react-scroll`:

```jsx
<Link
  to='id_contact'
  href='/#contato'
  aria-label='Ir para a seção de contato'
>
```

O elemento agora é uma âncora nativa válida e o `aria-label` descreve corretamente o link composto apenas por ícone.

### Outras correções preventivas de ARIA

- os containers genéricos de tecnologias no carrossel deixaram de receber `aria-label`;
- seus ícones passaram a ser decorativos e o texto já existente continua fornecendo o nome da tecnologia;
- o marcador “Certificação em destaque” recebeu `role="img"`, tornando válido seu `aria-label`;
- o SVG decorativo de cada habilidade deixou de combinar `role="img"` com `aria-hidden="true"`.

Resultado final do audit `aria-prohibited-attr`:

```text
score: 1
ocorrências: 0
```

## 4. Definition list items are not wrapped in `<dl>` elements

### Elementos responsáveis

Arquivos:

- `src/pages/Bio/index.jsx`;
- `src/components/ScrollReveal/index.jsx`.

Os três fatos rápidos da Bio representam semanticamente pares de termo e descrição:

```text
Formação     → Engenharia de Computação na FURG
Atuação      → Desenvolvimento Full Stack...
Foco atual   → IA aplicada...
```

Portanto, `dt` e `dd` eram elementos adequados e não deveriam ser substituídos por elementos genéricos.

A Bio solicitava `as="dl"` ao `ScrollReveal`, mas o mapa interno do componente não possuía `dl`. O fallback era `m.div`, produzindo no DOM:

```html
<div>
  <dt>Formação</dt>
  <dd>Engenharia de Computação na FURG</dd>
</div>
```

### Correção

O `ScrollReveal` agora possui:

```jsx
dl: m.dl
```

Assim, a animação preserva o elemento semântico solicitado.

Também foi removido um wrapper que separava o `dt` do grupo reconhecido pelo axe. As classes de alinhamento foram transferidas ao próprio `dt`:

```html
<dl>
  <div class="card">
    <dt class="flex items-center ...">
      <span aria-hidden="true">ícone</span>
      <span>Formação</span>
    </dt>
    <dd>Engenharia de Computação na FURG</dd>
  </div>
</dl>
```

O `div` agrupa cada par de definição, enquanto `dt` e `dd` permanecem irmãos no mesmo grupo. O layout em cards e todas as classes visuais foram preservados.

Resultado final do audit `dlitem`:

```text
score: 1
ocorrências: 0
```

## 5. Heading elements are not in a sequentially-descending order

### Causa técnica

O `SectionIntro` usa `h1` como padrão. Skills, Projects, Experience, Certifications e Contact não informavam outro nível. Isso produzia vários `h1` e saltos diretos para headings de cards em `h3`.

Exemplos anteriores:

```text
h1 Tecnologias que uso na prática
└── h3 Frontend

h1 Interfaces, produtos e estudos aplicados
└── h3 ClarIA Task

h1 Experiências que conectam estudo e entrega
└── h3 Residência em TIC...

h1 Certificações que sustentam minha evolução
└── h3 Desenvolvimento Web...
```

O Lighthouse apontava quatro ocorrências representativas desses saltos.

### Correção

O título principal da Home continua sendo o único `h1`:

```text
h1 Construo experiências web com clareza, performance e propósito.
```

Cada grande seção passou a informar `as="h2"` ao `SectionIntro`. Os títulos internos permanecem `h3`, sem alteração de classes ou tamanho visual.

Os dois títulos de painéis internos da seção Contato mudaram de `h2` para `h3`, pois pertencem ao `h2` da seção.

### Hierarquia final da Home

```text
h1 Construo experiências web com clareza, performance e propósito.

├── h2 Bio profissional e trajetória atual
├── h2 Tecnologias que uso na prática
│   ├── h3 Frontend
│   ├── h3 Backend
│   ├── h3 Inteligência Artificial
│   ├── h3 Bancos de dados
│   ├── h3 Ferramentas e qualidade
│   └── h3 Outros conhecimentos
├── h2 Interfaces, produtos e estudos aplicados
│   └── h3 para cada projeto
├── h2 Experiências que conectam estudo e entrega
│   └── h3 para cada experiência
├── h2 Certificações que sustentam minha evolução
│   └── h3 para cada certificação
└── h2 Contato para oportunidades e projetos
    ├── h3 Vamos conversar
    └── h3 Canais diretos
```

Resultado final do audit `heading-order`:

```text
score: 1
ocorrências: 0
```

## 6. Document does not have a main landmark

### Causa técnica

Em `src/routes/index.jsx`, `PortfolioHome` retornava um fragmento contendo as sete áreas da Home. O Header e o Footer globais já eram semânticos, mas não existia `<main>` entre eles.

### Correção

Foi introduzido um único `<main>` apenas na composição da rota Home:

```jsx
<>
  <SEO metadata={homeSeoMetadata}/>
  <main>
    <Home/>
    <Bio/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Certifications/>
    <Contact/>
  </main>
</>
```

O Header, Footer, toasts e botões flutuantes globais continuam fora do conteúdo principal.

As rotas `/artigos` e `/artigos/:slug` já possuem seus próprios `<main>` e não são renderizadas simultaneamente com `PortfolioHome`. A validação encontrou exatamente um `<main>` em cada uma das três rotas.

Resultado final do audit `landmark-one-main`:

```text
score: 1
ocorrências: 0
```

## 7. Revisão das sections

As grandes áreas já utilizavam `<section>`, com exceção do hero inicial, que usava um `div`. Como o hero contém o título principal e representa uma região temática real, ele passou a ser `<section>`.

Todas as sete áreas do conteúdo principal receberam associação explícita com seu heading:

```text
id_home           → aria-labelledby="id_title_home"
id_bio            → aria-labelledby="id_title_bio"
id_skills         → aria-labelledby="id_title_skills"
id_projects       → aria-labelledby="id_title_projects"
id_experience     → aria-labelledby="id_title_experience"
id_certifications → aria-labelledby="id_title_certifications"
id_contact        → aria-labelledby="id_title_contact"
```

Todos os IDs referenciados existem no DOM.

## 8. Identical links have the same purpose

### Elementos responsáveis

Arquivo: `src/components/CardCertification/index.jsx`.

Todos os cards expunham o mesmo nome acessível:

```text
Ver certificado
```

mas os links podiam levar a instituições e certificados diferentes. A auditoria informativa do Lighthouse listava o grupo, e a inspeção do DOM confirmou destinos distintos sob o mesmo nome.

### Correção

O texto visual foi preservado e cada link passou a receber contexto pelo nome da certificação:

```jsx
aria-label={`Ver certificado: ${name}`}
```

Exemplos finais:

```text
Ver certificado: Desenvolvimento Web com React e Node.js
Ver certificado: Certificado de autoridade: HTML
```

Links repetidos que realmente apontam ao mesmo destino e possuem a mesma finalidade, como GitHub, LinkedIn, WhatsApp e currículo, não foram artificialmente renomeados.

A inspeção final do DOM não encontrou grupos com o mesmo nome acessível e destinos diferentes.

## 9. Links, navegação e teclado

### Links de rolagem

Os links do `react-scroll` no Header, menu mobile, Footer, hero, redes sociais e botão “Ver menos” receberam `href` real no formato `/#hash`.

Isso mantém a rolagem suave existente e acrescenta:

- semântica nativa de link;
- foco por teclado;
- destino disponível sem depender exclusivamente do clique JavaScript;
- possibilidade de copiar ou abrir o destino do link.

### Menu mobile

Antes, o fechamento do menu ficava em um `onClick` aplicado ao `div` animado dentro do link. A ativação do link por teclado não garantia que esse handler interno fosse executado.

O handler foi movido para o próprio `RouterLink`/`ScrollLink`. Agora Enter ativa a navegação e fecha o menu.

### Navegações

Os três landmarks de navegação foram nomeados:

```text
Navegação principal
Navegação do menu
Navegação do rodapé
```

O Header e o menu mobile também informam `aria-current` para a página ou localização ativa.

### Foco

Foram mantidos os estilos existentes e adicionados indicadores `focus-visible` coerentes onde faltavam:

- links do Header;
- links do menu mobile;
- links e redes sociais do Footer;
- botões sociais flutuantes;
- links dos canais de contato.

Não existem `tabIndex` positivos.

## 10. Botões versus links

Os controles revisados utilizam elementos nativos:

- alternância de tema: `button`;
- abrir e fechar menu: `button`;
- filtros de certificações: `button`;
- copiar contato: `button`;
- setas do carrossel: `button`;
- abrir detalhes de projeto: `button`;
- fechar modal: `button`;
- navegação entre seções: `a href` com `react-scroll`;
- links externos: `a href`.

No controle “Ver menos”, o link passou a controlar tanto a rolagem quanto a redução da lista. O `span` visual interno deixou de receber um handler ou papel interativo redundante.

Cada botão “Ver detalhes” do carrossel recebeu um nome contextual, por exemplo:

```text
Ver detalhes do projeto ClarIA Task
```

## 11. Ícones decorativos

Foi adicionado `aria-hidden="true"` a ícones que aparecem junto de texto ou dentro de controles já nomeados, incluindo:

- currículo;
- tema;
- menu mobile;
- redes sociais;
- navegação mobile;
- setas do carrossel;
- copiar contato;
- abrir/fechar modal;
- indicadores da timeline;
- ícones de fatos da Bio;
- tecnologias e habilidades.

Isso evita nomes acessíveis duplicados ou leitura de ligaturas como `south_east`, `content_copy` e `chevron_right`.

Ícones que são o único conteúdo interativo continuam com nome no elemento pai por `aria-label`.

## 12. Imagens

A inspeção final encontrou zero imagens sem atributo `alt`.

Foram preservados textos alternativos informativos para:

- retrato profissional;
- prévias dos projetos;
- imagens de conteúdo.

Imagens redundantes com texto adjacente passaram a usar `alt=""`:

- logos em cards de experiência;
- logos das instituições em certificações;
- ícones de Gmail e WhatsApp ao lado do nome do canal;
- imagens de tecnologias ao lado do texto da tecnologia.

Nenhuma alteração de `width`, `height`, formato ou carregamento foi feita, pois otimização de imagens está fora desta etapa.

## 13. Arquivos alterados nesta etapa

### Estrutura e páginas

- `src/routes/index.jsx`;
- `src/pages/Home/index.jsx`;
- `src/pages/Bio/index.jsx`;
- `src/pages/Skills/index.jsx`;
- `src/pages/Projects/index.jsx`;
- `src/pages/Experience/index.jsx`;
- `src/pages/Certifications/index.jsx`;
- `src/pages/Contact/index.jsx`.

### Componentes

- `src/components/ScrollReveal/index.jsx`;
- `src/components/SocialsGroup/index.jsx`;
- `src/components/NavHeader/index.jsx`;
- `src/components/NavHeaderSideBar/index.jsx`;
- `src/components/Footer/index.jsx`;
- `src/components/FloatingButtons/index.jsx`;
- `src/components/Header/index.jsx`;
- `src/components/Logo/index.jsx`;
- `src/components/ArrowSlide/index.jsx`;
- `src/components/Button/index.jsx`;
- `src/components/CardCertification/index.jsx`;
- `src/components/CarouselCard/index.jsx`;
- `src/components/SkillsCard/index.jsx`;
- `src/components/FeaturedProject/index.jsx`;
- `src/components/ProjectDetailsModal/index.jsx`;
- `src/components/MiniCardExp/index.jsx`.

## 14. Validações executadas

### Comandos obrigatórios

```text
npm run lint     → aprovado, zero erros e zero warnings
npm run build    → aprovado
git diff --check → aprovado
```

O build mantém apenas o aviso já existente de chunk JavaScript acima de 500 kB. Ele não foi tratado porque performance está explicitamente fora do escopo.

### Lighthouse final

Ambiente:

```text
Lighthouse: 13.4.1
Form factor: mobile
Navegador: Chromium headless limpo do Playwright
Extensões: nenhuma
```

Resultado:

```text
Accessibility: 100
Best Practices: 100
Auditorias de acessibilidade com falha: 0
```

Auditorias solicitadas:

```text
aria-prohibited-attr              → aprovado, 0 ocorrências
dlitem                            → aprovado, 0 ocorrências
heading-order                     → aprovado, 0 ocorrências
landmark-one-main                 → aprovado, 0 ocorrências
identical-links-same-purpose      → 0 ocorrências listadas
```

## 15. Regressão funcional

Os testes automatizados em Chromium confirmaram:

- `/#inicio` funciona;
- `/#sobre` funciona;
- `/#habilidades` funciona;
- `/#projetos` funciona;
- `/#experiencia` funciona;
- `/#certificacoes` funciona;
- `/#contato` funciona;
- todas as seções ficam abaixo do Header ao navegar diretamente pelo hash;
- tema alterna de dark para light via teclado;
- modal de projeto abre e fecha via Enter;
- menu mobile abre via Enter;
- link “Projetos” do menu mobile navega e fecha o menu via Enter;
- `/`, `/artigos` e `/artigos/primeiro-artigo` possuem exatamente um `<main>`;
- a Home possui exatamente um `h1`;
- todos os `dt/dd` estão dentro de `dl` válido;
- todas as sections apontam para headings existentes;
- não existem `tabIndex` positivos;
- não existem imagens sem `alt`;
- não houve erro no console.

## 16. Itens que ainda se beneficiam de teste manual

Embora a auditoria automatizada tenha atingido 100, continuam recomendados:

1. percorrer a Home com um leitor de tela real, como NVDA, VoiceOver ou TalkBack, para avaliar a naturalidade da leitura;
2. revisar visualmente os indicadores de foco em navegadores e sistemas operacionais diferentes;
3. testar navegação completa somente por teclado em um dispositivo físico;
4. confirmar com usuários de tecnologias assistivas se a descrição dos links e regiões oferece contexto suficiente.

Esses itens não representam falhas detectadas pelo Lighthouse; são validações humanas complementares que uma pontuação automatizada não substitui.
