# Implementação da área de artigos técnicos

Este documento registra tudo que foi analisado, implementado, alterado e validado durante a criação da área de artigos técnicos do portfólio.

## 1. Objetivo da implementação

O portfólio funcionava como uma única página, com o Header navegando suavemente entre as seções da Home. A implementação adicionou uma área multipágina para artigos técnicos sem remover esse comportamento.

As URLs disponíveis passaram a ser:

| URL | Responsabilidade |
| --- | --- |
| `/` | Home original do portfólio, com todas as suas seções |
| `/artigos` | Listagem automática dos artigos publicados |
| `/artigos/:slug` | Página genérica que renderiza o artigo correspondente ao slug |

Também foi configurado o acesso direto a essas URLs, inclusive ao atualizar o navegador em uma página de artigo.

## 2. Análise da arquitetura original

Antes das alterações, foram identificados os seguintes pontos:

- React 18 como biblioteca de interface.
- Vite 5 como servidor de desenvolvimento e ferramenta de build.
- Tailwind CSS 4 integrado pelo plugin `@tailwindcss/vite`.
- Estilos globais e variáveis de tema centralizados em `src/index.css`.
- Alternância entre tema claro e escuro feita pelo `ThemeContext`.
- Animações feitas com Motion.
- Navegação interna da Home feita com `react-scroll`.
- Controle da seção ativa feito pelo `HeaderContext` e pelo hook `useTrackActiveSection`.
- Header dividido entre componentes para desktop e mobile, principalmente `Header`, `NavHeader`, `SideBar` e `NavHeaderSideBar`.
- Seções da Home identificadas por IDs como `id_home`, `id_projects`, `id_experience` e `id_contact`.
- Não existia roteador React configurado.
- Não existia suporte a MDX.
- A configuração do Vite já possuía separação manual de alguns pacotes em chunks e foi preservada.

Não foi feita uma reestruturação geral. A composição visual da Home e os contextos já existentes foram mantidos.

## 3. Dependências adicionadas

### Dependência de execução

- `react-router-dom`: responsável pelo roteamento entre Home, listagem e página individual de artigo.

### Dependências de desenvolvimento e compilação

- `@mdx-js/rollup`: compila arquivos `.mdx` por meio do Vite/Rollup.
- `@shikijs/rehype`: aplica syntax highlighting aos blocos de código durante a compilação MDX.
- `remark-frontmatter`: reconhece blocos YAML de frontmatter nos arquivos MDX.
- `remark-mdx-frontmatter`: transforma os metadados do frontmatter em um export utilizável pelo React.

As versões foram registradas em `package.json` e `package-lock.json`.

Durante a instalação, o npm informou 17 vulnerabilidades na árvore completa de dependências, sendo 1 baixa, 6 moderadas e 10 altas. Nenhum `npm audit fix` automático foi executado, pois isso poderia atualizar dependências fora do escopo e introduzir incompatibilidades.

## 4. Configuração do MDX no Vite

O arquivo `vite.config.js` foi atualizado para:

1. Executar o plugin MDX antes da transformação React.
2. Reconhecer arquivos `.md` e `.mdx` junto com `.js` e `.jsx`.
3. Processar frontmatter YAML.
4. Exportar os metadados de cada artigo pelo nome `frontmatter`.
5. Aplicar syntax highlighting com temas GitHub claro e escuro por meio do Shiki.
6. Adicionar automaticamente o nome da linguagem ao bloco de código.
7. Preservar a configuração existente de Tailwind CSS e dos chunks manuais do build.

Configuração conceitual aplicada:

```js
mdx({
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
  rehypePlugins: [[rehypeShiki, {
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  }]],
})
```

Com isso, um arquivo MDX exporta simultaneamente:

- o componente React que representa seu conteúdo;
- o objeto `frontmatter` com seus metadados.

O highlighting é feito na transformação do MDX. O navegador recebe apenas a marcação já tokenizada e os estilos necessários, sem executar uma biblioteca para analisar o código.

## 5. Estrutura de rotas

O `BrowserRouter` foi adicionado em `src/main.jsx`, envolvendo o `ThemeProvider` e o `App`.

Em uma primeira etapa, as rotas foram configuradas diretamente no `App.jsx`. Depois, atendendo à solicitação de separar essa responsabilidade, toda a configuração foi extraída para:

```text
src/routes/index.jsx
```

O componente `AppRoutes` agora concentra:

- imports das páginas que participam do roteamento;
- composição das seções da Home por meio de `PortfolioHome`;
- gerenciamento de rolagem entre rotas;
- declaração de todas as rotas;
- redirecionamento de caminhos desconhecidos para a Home.

Rotas configuradas:

```jsx
<Routes>
  <Route path='/' element={<PortfolioHome/>}/>
  <Route path='/artigos' element={<Articles/>}/>
  <Route path='/artigos/:slug' element={<Article/>}/>
  <Route path='*' element={<Navigate to='/' replace/>}/>
</Routes>
```

O `App.jsx` ficou responsável somente pela estrutura global compartilhada:

- `LazyMotion`;
- providers do Header e do menu lateral;
- Header;
- botões sociais flutuantes da Home;
- `ToastContainer`;
- `AppRoutes`;
- Footer.

Os botões flutuantes continuam aparecendo somente na Home e em telas desktop, evitando que interfiram nas páginas de artigos.

## 6. Preservação da Home

A composição original da Home foi mantida na mesma ordem:

1. Home/apresentação.
2. Biografia.
3. Habilidades.
4. Projetos.
5. Experiências.
6. Certificações, ainda envolvidas pelo `CertificationsProvider`.
7. Contato.

Essa composição foi apenas movida para o componente interno `PortfolioHome`, dentro do arquivo de rotas. Os componentes das seções não foram reestruturados.

## 7. Navegação pelo Header e Footer

O item `Artigos` foi adicionado à fonte central de navegação, em `src/data/navigationSections.js`:

```js
{
  section: 'articles',
  path: '/artigos',
  label: 'Artigos',
  icon: 'article',
}
```

Além disso, cada seção da Home recebeu um hash legível:

| Seção | Hash | ID real do elemento |
| --- | --- | --- |
| Início | `#inicio` | `id_home` |
| Sobre | `#sobre` | `id_bio` |
| Habilidades | `#habilidades` | `id_skills` |
| Projetos | `#projetos` | `id_projects` |
| Experiências | `#experiencia` | `id_experience` |
| Certificações | `#certificacoes` | `id_certifications` |
| Contato | `#contato` | `id_contact` |

### Comportamento dentro da Home

Quando o usuário está em `/`, os itens das seções continuam usando `react-scroll`. Assim, o comportamento original de rolagem suave, duração e offset do Header foi preservado.

O item `Artigos` usa `RouterLink` e navega para `/artigos`.

### Comportamento fora da Home

Quando o usuário está em `/artigos` ou `/artigos/:slug`, os links das seções passam a usar URLs como:

```text
/#projetos
/#experiencia
/#contato
```

O React Router primeiro retorna à Home e o gerenciador de rolagem localiza a seção correspondente.

### Item ativo

- Na Home, o item ativo continua sendo definido pelo `HeaderContext` e pela seção visível.
- Nas páginas de artigos, `Artigos` fica ativo quando o caminho começa com `/artigos`.
- Os itens das seções da Home não aparecem como ativos enquanto o usuário está em uma página de artigos.

### Desktop, mobile e Footer

O mesmo comportamento foi aplicado em:

- `NavHeader`, usado no Header desktop;
- `NavHeaderSideBar`, usado no menu mobile;
- `Footer`.

No menu mobile, selecionar qualquer item também atualiza a seção ativa e fecha o menu lateral.

O espaçamento do menu desktop foi ajustado para acomodar o novo item sem causar overflow, mantendo o padrão visual existente.

## 8. Gerenciamento da rolagem entre rotas

Foi criado `src/components/RouteScrollManager/index.jsx`.

Esse componente observa `pathname` e `hash` por meio de `useLocation`.

Seu fluxo é:

1. Se a rota for `/` e existir um hash, ele procura a seção correspondente em `navigationSections`.
2. Converte o hash legível, como `#projetos`, no ID real, como `id_projects`.
3. Aguarda o próximo frame de renderização com `requestAnimationFrame`.
4. Executa `scrollIntoView` com rolagem suave.
5. Em rotas sem hash, reposiciona a página no topo.

Isso corrigiu a navegação para seções da Home quando o clique é iniciado dentro de uma página de artigo.

## 9. Organização dos artigos

Todos os artigos ficam em:

```text
src/content/articles/
```

Arquivos existentes nessa estrutura:

```text
src/content/articles/
  index.js
  mdxComponents.js
  primeiro-artigo.mdx
```

Não existe um array manual de artigos. O carregamento é feito com:

```js
import.meta.glob('./*.mdx', { eager: true })
```

Portanto, qualquer novo arquivo `.mdx` criado diretamente nessa pasta é encontrado pelo Vite automaticamente.

## 10. Fluxo de descoberta e carregamento

O arquivo `src/content/articles/index.js` implementa o catálogo automático.

Para cada arquivo MDX encontrado, o sistema:

1. Lê o export `frontmatter`.
2. Valida os campos obrigatórios.
3. Normaliza a data para o formato textual `YYYY-MM-DD`.
4. Confirma que `tags` é uma lista.
5. Converte os valores para tipos consistentes.
6. Armazena o componente MDX em `Content`.
7. Verifica se existem slugs duplicados.
8. Ordena os artigos da data mais recente para a mais antiga.

Metadados obrigatórios:

```yaml
title:
description:
date:
tags:
slug:
```

Metadado opcional já reconhecido:

```yaml
image:
```

Se um campo obrigatório estiver ausente, se `tags` não for uma lista ou se houver slugs duplicados, a aplicação apresenta um erro explícito durante o desenvolvimento/build em vez de gerar uma listagem inconsistente.

A ordenação atual pressupõe datas no formato ISO `YYYY-MM-DD`.

As funções públicas disponibilizadas pelo catálogo são:

- `articles`: lista completa já validada e ordenada;
- `getArticleBySlug(slug)`: procura um artigo específico;
- `formatArticleDate(date)`: formata a data em português do Brasil usando UTC para evitar mudança de dia por fuso horário.

## 11. Página de listagem

Foi criada `src/pages/Articles/index.jsx` para a rota `/artigos`.

A página:

- define o título do navegador como `Artigos | Davi Santos`;
- reutiliza o componente visual `SectionIntro`;
- usa cores, bordas, sombras e variáveis já existentes no portfólio;
- lista automaticamente todos os artigos encontrados;
- mostra título, descrição, data e tags;
- cria links para `/artigos/{slug}`;
- mantém responsividade e estados visíveis de foco;
- restaura o título original do portfólio ao sair.

Nenhum artigo é cadastrado manualmente dentro desse componente.

## 12. Página individual do artigo

Foi criada `src/pages/Article/index.jsx` para a rota `/artigos/:slug`.

A página:

1. Obtém o slug com `useParams`.
2. Busca o artigo com `getArticleBySlug`.
3. Exibe seus metadados.
4. Renderiza o componente React gerado pelo MDX.
5. Atualiza o título da aba com o título do artigo.
6. Oferece um link de retorno para `/artigos`.

A solução é genérica. Não existem componentes específicos como `ArtigoJWT.jsx` ou `ArtigoRedis.jsx`.

Quando o slug não existe, a própria rota de artigo mostra uma tela de erro 404 com link para a listagem. Caminhos que não correspondem a nenhuma rota configurada são redirecionados para `/`.

## 13. Registro global de componentes React no MDX

Foi criado:

```text
src/content/articles/mdxComponents.js
```

Ele importa e registra os componentes compartilhados:

```js
import ArticleImage from '../../components/ArticleImage';
import Callout from '../../components/Callout';
import TwoColumns from '../../components/TwoColumns';

export const mdxComponents = {
  ArticleImage,
  Callout,
  TwoColumns,
};
```

Esse objeto é passado para todo conteúdo MDX:

```jsx
<Content components={mdxComponents}/>
```

Como o registro é centralizado, esses componentes podem ser utilizados diretamente em qualquer `.mdx`, sem imports locais:

```mdx
<ArticleImage
  src="/images/articles/diagrama.png"
  alt="Descrição do diagrama"
  caption="Legenda opcional."
/>

<TwoColumns ratio="60-40">
  <div>Conteúdo principal.</div>
  <div>Conteúdo de apoio.</div>
</TwoColumns>

<Callout type="warning" title="Atenção">
  Conteúdo do aviso.
</Callout>
```

`ArticleImage` usa `figure`, `img` e `figcaption`, aceita legenda opcional, carrega a imagem de forma lazy e preserva sua proporção.

`TwoColumns` usa CSS Grid, empilha o conteúdo no mobile e aceita somente `50-50`, `60-40` e `40-60`. Valores ausentes ou desconhecidos usam `50-50`.

`Callout` usa uma estrutura semântica com `role="note"`, título opcional e os tipos `info`, `warning` e `success`. O tipo padrão é `info`; valores desconhecidos também usam esse fallback.

## 14. Estilos do conteúdo MDX

O arquivo `src/index.css` recebeu estilos locais sob a classe `.article-content`.

Foram adicionados estilos para:

- parágrafos e espaçamento vertical;
- títulos `h1`, `h2` e `h3`;
- links;
- listas ordenadas e não ordenadas;
- itens de lista;
- citações com `blockquote`;
- código inline;
- blocos de código com syntax highlighting, rótulo de linguagem e rolagem horizontal interna;
- imagens responsivas;
- `ArticleImage` e suas legendas;
- grades responsivas do `TwoColumns`;
- variações discretas do `Callout`;
- ajuste de tamanho de texto em telas maiores.

Os estilos usam as variáveis de cor e superfície já existentes. Não foram alteradas as cores globais nem as famílias tipográficas do portfólio.

## 15. Primeiro artigo de validação

O artigo temporário foi transformado em um playground de validação:

```text
src/content/articles/primeiro-artigo.mdx
```

Ele fica disponível em:

```text
/artigos/primeiro-artigo
```

Ele continua explicitamente identificado como conteúdo temporário de desenvolvimento e demonstra:

- títulos `h2` e `h3`;
- parágrafos, negrito, link, lista e código inline;
- callouts `info`, `warning`, `success` e um callout sem título;
- colunas `50-50` e `60-40`;
- imagem local com legenda;
- blocos JavaScript, Python e JSON com syntax highlighting.

Nenhum artigo técnico completo foi escrito nesta etapa.

## 16. Compatibilidade com a Vercel

Foi criado `vercel.json` com um fallback de SPA:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Essa configuração garante que URLs como `/artigos` e `/artigos/primeiro-artigo` sejam entregues ao React Router quando acessadas diretamente ou atualizadas no navegador.

Sem esse fallback, uma hospedagem estática poderia tentar localizar um arquivo físico correspondente à URL e responder com 404 antes de carregar a aplicação.

## 17. Como criar um novo artigo

Crie um novo arquivo `.mdx` diretamente em:

```text
src/content/articles/
```

Exemplo mínimo:

```mdx
---
title: "Cache com Redis"
description: "Introdução ao uso de Redis como camada de cache."
date: "2026-08-20"
tags: ["Backend", "Redis"]
slug: "cache-com-redis"
---

# Cache com Redis

Conteúdo do artigo.
```

O artigo aparecerá automaticamente em `/artigos` e ficará disponível em:

```text
/artigos/cache-com-redis
```

Não é necessário alterar `App.jsx`, `src/routes/index.jsx`, a página de listagem ou qualquer array JavaScript.

Recomendações:

- mantenha a data no formato `YYYY-MM-DD`;
- use um slug único, sem espaços e preferencialmente em letras minúsculas;
- mantenha `tags` como uma lista YAML;
- não repita o título principal no corpo se não quiser dois títulos visuais, pois a página individual já renderiza o `title` do frontmatter como `h1`.

Imagens dos artigos devem ser salvas em:

```text
public/images/articles/
```

E referenciadas a partir da raiz pública:

```mdx
<ArticleImage
  src="/images/articles/minha-imagem.png"
  alt="Descrição acessível da imagem"
  caption="Legenda opcional."
/>
```

Blocos de código recebem highlighting a partir do identificador informado depois das crases:

````md
```typescript
const published = true
```
````

As linguagens suportadas pelo Shiki incluem JavaScript, TypeScript, JSX, TSX, Python, JSON, Bash, SQL, CSS e HTML.

## 18. Arquivos criados

- `src/components/RouteScrollManager/index.jsx`
- `src/components/ArticleImage/index.jsx`
- `src/components/Callout/index.jsx`
- `src/components/TwoColumns/index.jsx`
- `src/content/articles/index.js`
- `src/content/articles/mdxComponents.js`
- `src/content/articles/primeiro-artigo.mdx`
- `src/pages/Article/index.jsx`
- `src/pages/Articles/index.jsx`
- `src/routes/index.jsx`
- `public/images/articles/mdx-playground-placeholder.svg`
- `vercel.json`
- `DOCUMENTACAO_ARTIGOS.md`

## 19. Arquivos modificados

- `package.json`: registro das novas dependências.
- `package-lock.json`: atualização da árvore de dependências.
- `vite.config.js`: compilação MDX, leitura de frontmatter, syntax highlighting e rótulos de linguagem.
- `src/main.jsx`: inclusão do `BrowserRouter`.
- `src/App.jsx`: integração de rotas ao layout global e posterior extração para `AppRoutes`.
- `src/data/navigationSections.js`: hashes das seções e item `Artigos`.
- `src/components/NavHeader/index.jsx`: navegação híbrida entre scroll e rotas no desktop.
- `src/components/NavHeaderSideBar/index.jsx`: navegação híbrida no menu mobile.
- `src/components/Footer/index.jsx`: navegação funcional tanto na Home quanto nas páginas de artigos.
- `src/content/articles/mdxComponents.js`: registro global de `ArticleImage`, `TwoColumns` e `Callout`.
- `src/content/articles/primeiro-artigo.mdx`: playground temporário de todos os recursos desta etapa.
- `src/index.css`: apresentação tipográfica, componentes MDX e blocos Shiki responsivos.
- `DOCUMENTACAO_ARTIGOS.md`: atualização da documentação para refletir a segunda etapa.

## 20. Validações realizadas

Foram executadas as seguintes verificações:

### Qualidade e build

```text
npm run lint
npm run build
git diff --check
```

Resultados:

- lint aprovado sem warnings ou erros;
- build de produção aprovado;
- 751 módulos transformados no build após a inclusão do highlighting;
- nenhum problema de whitespace detectado no diff.

### Rotas e renderização

Foram validados em servidor local:

- acesso direto a `/artigos` com resposta HTTP 200;
- acesso direto a `/artigos/primeiro-artigo` com resposta HTTP 200;
- título da página de listagem;
- título da página individual;
- exibição do card do primeiro artigo;
- renderização do conteúdo MDX;
- registro global dos três componentes, sem imports no artigo;
- quatro callouts renderizados com semântica e variações visuais;
- `TwoColumns` em duas colunas no desktop/notebook e empilhado no tablet/smartphone;
- imagem com `figure`, `figcaption`, carregamento local e proporção preservada;
- três blocos Shiki com rótulos JavaScript, Python e JSON;
- alternância real das cores dos tokens entre tema claro e escuro;
- overflow horizontal restrito ao bloco de código;
- ausência de overflow horizontal da página nas larguras de 1440, 1024, 768 e 390 pixels;
- ausência de erros no console do navegador.

### Navegação

Também foram validados:

- clique em `Projetos` a partir de uma página de artigo;
- retorno correto para `/#projetos`;
- posicionamento da seção abaixo do Header fixo;
- presença do item `Artigos` no menu mobile;
- fechamento e funcionamento do menu lateral;
- ausência de overflow no Header nas larguras de 1101, 1200 e 1440 pixels.

## 21. Decisões técnicas importantes

### React Router sem substituir `react-scroll`

O React Router foi adicionado para as novas páginas, mas `react-scroll` foi preservado dentro da Home. Isso evita mudanças desnecessárias no comportamento existente.

### Descoberta com `import.meta.glob`

Essa é uma funcionalidade nativa do Vite e elimina a necessidade de manter uma lista manual de artigos.

### Carregamento eager nesta primeira etapa

Os módulos MDX são carregados com `{ eager: true }`. Isso simplifica a obtenção imediata dos metadados e do componente de cada artigo. Para uma quantidade muito grande de artigos, poderá ser considerada uma estratégia de carregamento sob demanda no futuro.

### Validação durante desenvolvimento/build

Problemas de frontmatter são tratados como erros explícitos. Isso evita publicar silenciosamente artigos com URL, data ou tags inconsistentes.

### Datas em UTC

A formatação usa UTC para impedir que uma data editorial mude para o dia anterior por causa do fuso horário do navegador.

### Rotas centralizadas

Toda a configuração foi retirada do `App.jsx` e colocada em `src/routes/index.jsx`, mantendo o arquivo principal focado no layout e nos recursos globais.

### Syntax highlighting no build

Foi escolhido `@shikijs/rehype`, integração oficial do Shiki com Rehype. A transformação ocorre durante o build do MDX, usa os temas `github-light` e `github-dark` e não depende de uma biblioteca executada no navegador. Um transformer pequeno adiciona o rótulo da linguagem ao `<pre>` sem outra dependência.

## 22. Commits relacionados

As mudanças foram registradas nos seguintes commits:

```text
a3ed605 feat: adiciona área de artigos técnicos com suporte a MDX
5265530 refactor: centraliza configuração de rotas
```
