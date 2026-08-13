# Relatório da implementação dos componentes MDX

Este documento descreve detalhadamente a segunda etapa da área de artigos técnicos do portfólio: criação de componentes reutilizáveis para MDX, syntax highlighting, responsividade, acessibilidade, alterações realizadas e decisões técnicas.

## 1. Objetivo desta etapa

A infraestrutura principal de artigos já estava funcionando com:

- rotas `/artigos` e `/artigos/:slug`;
- artigos armazenados em arquivos `.mdx`;
- metadados em frontmatter;
- descoberta automática com `import.meta.glob`;
- página de listagem automática;
- página genérica de artigo;
- registro central de componentes MDX;
- compatibilidade com acesso direto às rotas na Vercel.

O objetivo desta nova etapa foi permitir a criação de artigos técnicos mais ricos sem exigir imports dentro de cada `.mdx`.

Foram implementados:

- `ArticleImage`;
- `TwoColumns`;
- `Callout`;
- syntax highlighting para blocos de código;
- rótulos automáticos de linguagem;
- uma imagem local temporária;
- um playground MDX para validação.

## 2. Arquitetura preservada

Não foram refeitos ou alterados:

- sistema de rotas;
- `src/routes/index.jsx`;
- `BrowserRouter`;
- descoberta de artigos com `import.meta.glob`;
- validação de frontmatter;
- Header;
- Footer;
- navegação entre seções da Home;
- página `/artigos`;
- estrutura geral da página `/artigos/:slug`;
- `HeaderContext`;
- `ThemeContext`;
- fallback de SPA da Vercel.

A integração existente foi preservada:

```jsx
<Content components={mdxComponents}/>
```

## 3. Arquivos criados

### `src/components/ArticleImage/index.jsx`

Componente semântico e responsivo para imagens utilizadas nos artigos.

### `src/components/TwoColumns/index.jsx`

Componente de layout responsivo com três proporções permitidas.

### `src/components/Callout/index.jsx`

Componente semântico para informações, alertas e resultados.

### `public/images/articles/mdx-playground-placeholder.svg`

Imagem vetorial temporária criada exclusivamente para validar o `ArticleImage` durante o desenvolvimento.

### `RELATORIO_COMPONENTES_MDX.md`

Este relatório.

## 4. Arquivos modificados

### `package.json`

Foi registrada a dependência de desenvolvimento responsável pelo syntax highlighting.

### `package-lock.json`

Foi atualizada a árvore bloqueada de dependências do npm.

### `vite.config.js`

Foram adicionados:

- plugin Rehype do Shiki;
- temas claro e escuro;
- transformer para rótulos de linguagem;
- integração do highlighting com a compilação MDX já existente.

As configurações anteriores de MDX, frontmatter, React, Tailwind e chunks manuais foram preservadas.

### `src/content/articles/mdxComponents.js`

O registro antes vazio passou a fornecer globalmente:

- `ArticleImage`;
- `TwoColumns`;
- `Callout`.

### `src/content/articles/primeiro-artigo.mdx`

O artigo temporário foi ampliado e transformado em um playground de desenvolvimento.

### `src/index.css`

Foram adicionados estilos isolados para:

- componentes MDX;
- blocos Shiki;
- código inline;
- rótulos de linguagem;
- responsividade;
- prevenção de overflow.

### `DOCUMENTACAO_ARTIGOS.md`

A documentação geral da infraestrutura de artigos foi atualizada para não continuar descrevendo `mdxComponents` como vazio e para registrar os novos recursos.

## 5. Dependência adicionada

Foi adicionada somente uma dependência direta:

```json
"@shikijs/rehype": "^4.4.3"
```

Ela foi instalada como dependência de desenvolvimento porque participa da compilação do MDX e não é uma funcionalidade executada no navegador.

O pacote utiliza Shiki internamente e fornece integração direta com Rehype:

- documentação oficial: <https://shiki.style/packages/rehype>;
- documentação de temas duplos: <https://shiki.style/guide/dual-themes>.

O npm continuou informando 17 vulnerabilidades na árvore completa do projeto:

- 1 baixa;
- 6 moderadas;
- 10 altas.

Nenhum `npm audit fix` foi executado, evitando atualizações automáticas fora do escopo.

## 6. Registro global dos componentes

O arquivo central é:

```text
src/content/articles/mdxComponents.js
```

Implementação:

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

Como a página individual já entrega esse objeto ao conteúdo:

```jsx
<Content components={mdxComponents}/>
```

qualquer artigo pode utilizar esses nomes diretamente.

Não é necessário escrever imports como:

```js
import ArticleImage from '../../components/ArticleImage';
```

dentro de cada arquivo `.mdx`.

## 7. ArticleImage

### Responsabilidade

Renderizar imagens de artigos com estrutura semântica, legenda opcional e comportamento responsivo.

### Estrutura HTML conceitual

```html
<figure>
  <img />
  <figcaption>Legenda opcional</figcaption>
</figure>
```

### Propriedades

| Propriedade | Uso |
| --- | --- |
| `src` | Caminho público da imagem |
| `alt` | Texto alternativo; quando omitido, utiliza string vazia |
| `caption` | Legenda opcional |

### Comportamentos implementados

- largura limitada ao espaço disponível no artigo;
- altura automática;
- proporção original preservada;
- `object-fit: contain`;
- suporte a mobile;
- borda baseada nas variáveis do tema;
- sombra discreta baseada no design existente;
- legenda centralizada e semanticamente associada;
- `loading="lazy"`;
- `decoding="async"`.

### Exemplo de uso

```mdx
<ArticleImage
  src="/images/articles/jwt-flow.png"
  alt="Fluxo de autenticação utilizando JWT"
  caption="Fluxo simplificado de autenticação entre cliente e API."
/>
```

## 8. TwoColumns

### Responsabilidade

Organizar dois conteúdos lado a lado em telas maiores e empilhá-los em telas menores.

### Proporções suportadas

```text
50-50
60-40
40-60
```

O padrão é:

```text
50-50
```

Um valor desconhecido também utiliza `50-50`, evitando a criação de classes ou layouts inválidos.

### Implementação

O componente usa um `Set` com as proporções permitidas:

```js
const supportedRatios = new Set(['50-50', '60-40', '40-60']);
```

As colunas usam CSS Grid e tracks com `minmax(0, ...)`. Essa decisão impede que textos, imagens ou blocos de código forcem a grade além da largura do artigo.

### Breakpoint

- abaixo de 790px: uma coluna, com conteúdos empilhados;
- a partir de 790px: duas colunas na proporção solicitada.

### Proteções contra overflow

- container com `min-width: 0`;
- filhos diretos com `min-width: 0`;
- imagens limitadas a `max-width: 100%`;
- blocos de código limitados ao tamanho da coluna;
- scroll horizontal mantido dentro do próprio bloco de código.

### Exemplo padrão

```mdx
<TwoColumns>
  <div>
    Conteúdo da esquerda.
  </div>

  <div>
    Conteúdo da direita.
  </div>
</TwoColumns>
```

### Exemplo 60-40

```mdx
<TwoColumns ratio="60-40">
  <div>
    Conteúdo principal.
  </div>

  <div>
    Conteúdo de apoio.
  </div>
</TwoColumns>
```

## 9. Callout

### Responsabilidade

Destacar informações importantes sem utilizar caixas excessivamente coloridas.

### Tipos suportados

| Tipo | Ícone | Uso sugerido |
| --- | --- | --- |
| `info` | `info` | Informações e observações |
| `warning` | `warning` | Cuidados e avisos |
| `success` | `check_circle` | Resultados e confirmações |

O tipo padrão é `info`. Valores desconhecidos também utilizam `info`.

### Propriedades

| Propriedade | Uso |
| --- | --- |
| `type` | Define `info`, `warning` ou `success` |
| `title` | Título opcional |
| `children` | Conteúdo livre do callout |

### Acessibilidade

- utiliza um elemento `aside`;
- utiliza `role="note"`;
- recebe um `aria-label` baseado no título ou no tipo;
- o ícone é decorativo e possui `aria-hidden="true"`;
- a informação não depende somente da cor, pois também possui ícone e rótulo acessível.

### Design

- fundo baseado em `--color-surface-muted`;
- borda baseada em `--color-border`;
- somente a borda esquerda e o ícone recebem a cor do tipo;
- utiliza `--color-info`, `--color-warning` e `--color-success-strong` já existentes;
- nenhuma nova paleta global foi criada.

### Exemplos

```mdx
<Callout type="info" title="Importante">
  Access Tokens normalmente devem possuir duração curta.
</Callout>

<Callout type="warning" title="Atenção">
  Nunca armazene senhas em texto puro.
</Callout>

<Callout type="success" title="Resultado">
  A requisição foi processada corretamente.
</Callout>

<Callout>
  Um conteúdo informativo simples sem título visível.
</Callout>
```

## 10. Syntax highlighting

### Abordagem escolhida

Foi utilizado `@shikijs/rehype`, integração oficial do Shiki com Rehype.

O plugin foi adicionado à configuração já existente do `@mdx-js/rollup`:

```js
rehypePlugins: [
  [
    rehypeShiki,
    {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      transformers: [codeLanguageLabelTransformer],
    },
  ],
]
```

### Motivo da escolha

- funciona diretamente com a pipeline MDX/Rehype existente;
- realiza o processamento durante o build;
- não exige uma biblioteca de highlighting sendo executada no navegador;
- utiliza gramáticas TextMate;
- possui suporte amplo a linguagens;
- oferece temas duplos;
- permite transformers sem dependências extras.

### Temas

Foram configurados:

```text
github-light
github-dark
```

O Shiki gera variáveis CSS para o tema escuro. O CSS utiliza o atributo já existente no portfólio:

```css
:root[data-theme='dark']
```

para ativar as cores escuras nos blocos e tokens.

### Linguagens verificadas

- JavaScript;
- TypeScript;
- JSX;
- TSX;
- Python;
- JSON;
- Bash;
- SQL;
- CSS;
- HTML.

### Uso em um artigo

````md
```python
@app.post("/login")
def login():
    return {"access_token": token}
```
````

O código inline continua independente:

```md
Utilizamos o endpoint `/login`.
```

## 11. Rótulos automáticos de linguagem

Foi criado um transformer Shiki pequeno no `vite.config.js`.

Ele recebe a linguagem informada no bloco e adiciona `data-language` ao elemento `pre`.

Mapeamentos definidos:

```js
{
  bash: 'Bash',
  css: 'CSS',
  html: 'HTML',
  javascript: 'JavaScript',
  js: 'JavaScript',
  json: 'JSON',
  jsx: 'JSX',
  python: 'Python',
  sql: 'SQL',
  ts: 'TypeScript',
  tsx: 'TSX',
  typescript: 'TypeScript',
}
```

O CSS exibe discretamente esse valor com:

```css
content: attr(data-language);
```

Isso evita um componente React adicional e não adiciona lógica no navegador.

## 12. Estilos dos blocos de código

Os blocos receberam:

- `max-width: 100%`;
- `overflow-x: auto`;
- borda usando `--color-border`;
- radius coerente com os painéis do portfólio;
- padding horizontal e vertical;
- fonte monoespaçada com fallbacks de sistema;
- `tab-size: 2`;
- suporte a scroll suave em dispositivos touch;
- código interno com `min-width: max-content`.

A combinação de `pre` com overflow e `code` com largura mínima garante que linhas extensas não sejam quebradas artificialmente e não provoquem overflow na página.

## 13. Pasta de imagens

A localização padrão é:

```text
public/images/articles/
```

Uma imagem armazenada como:

```text
public/images/articles/jwt-flow.png
```

deve ser usada no MDX como:

```text
/images/articles/jwt-flow.png
```

Não se utiliza `public` na URL.

## 14. Playground temporário

O arquivo atualizado foi:

```text
src/content/articles/primeiro-artigo.mdx
```

Sua URL foi preservada:

```text
/artigos/primeiro-artigo
```

O slug não foi alterado, evitando quebrar links existentes.

O artigo demonstra:

### Markdown

- `h2`;
- `h3`;
- parágrafos;
- negrito;
- link;
- lista;
- código inline.

### Callout

- `info` com título;
- `warning` com título;
- `success` com título;
- `info` sem título visível.

### TwoColumns

- proporção padrão `50-50`;
- proporção `60-40`.

### ArticleImage

- imagem local;
- texto alternativo;
- legenda;
- placeholder explicitamente temporário.

### Código

- JavaScript;
- Python;
- JSON.

O título e a descrição continuam deixando claro que se trata de conteúdo temporário de desenvolvimento.

## 15. Placeholder de imagem

Foi criado:

```text
public/images/articles/mdx-playground-placeholder.svg
```

Características:

- formato vetorial responsivo;
- proporção 2:1;
- texto indicando que é temporário;
- representação visual dos três componentes;
- título e descrição dentro do SVG;
- uso exclusivo para desenvolvimento.

Ele pode ser removido ou substituído quando o artigo temporário deixar de ser necessário.

## 16. Responsividade validada

Foram testadas as larguras:

| Largura | Contexto aproximado |
| --- | --- |
| 1440px | Desktop |
| 1024px | Notebook/tablet horizontal |
| 768px | Tablet |
| 390px | Smartphone |

Resultados:

- nenhum overflow horizontal no `body` ou no documento;
- `TwoColumns` exibido lado a lado em 1440px e 1024px;
- `TwoColumns` empilhado em 768px e 390px;
- imagem limitada à largura do artigo;
- proporção natural da imagem preservada;
- callouts adaptados ao smartphone;
- blocos de código limitados à largura disponível;
- scroll horizontal configurado somente no `pre`.

## 17. Acessibilidade validada

- `ArticleImage` utiliza `figure` e `figcaption`;
- `alt` é encaminhado diretamente para `img`;
- legenda não depende de posicionamento visual para fazer sentido;
- `Callout` utiliza `role="note"`;
- ícones decorativos usam `aria-hidden`;
- tipo do callout possui rótulo acessível;
- componentes não introduzem botões ou áreas clicáveis desnecessárias;
- navegação por teclado existente não foi afetada;
- o conteúdo continua compreensível sem depender somente da cor;
- blocos Shiki recebem `tabindex="0"`, permitindo navegação quando existe conteúdo horizontal.

## 18. Validações executadas

### Lint

Comando:

```text
npm run lint
```

Resultado:

```text
Aprovado sem erros ou warnings.
```

### Build

Comando:

```text
npm run build
```

Resultado:

```text
✓ 751 modules transformed
✓ built successfully
```

### Integridade do diff

Comando:

```text
git diff --check
```

Resultado:

```text
Nenhum erro de whitespace.
```

### URLs diretas

Foram verificadas com resposta HTTP 200:

```text
/
/artigos
/artigos/primeiro-artigo
```

### Navegador automatizado

Foram verificados:

- renderização dos três componentes globais;
- quatro callouts;
- dois exemplos de colunas;
- uma imagem com legenda;
- três blocos Shiki;
- rótulos `JavaScript`, `Python` e `JSON`;
- troca real da cor dos tokens entre dark e light mode;
- ausência de erros no console;
- ausência de overflow da página;
- presença do item Artigos no menu mobile;
- retorno da página do artigo para `/#projetos`;
- posicionamento da seção Projetos abaixo do Header fixo;
- listagem automática mostrando o novo título do playground.

### Linguagens do Shiki

Também foi feita uma compilação direta de amostras para:

```text
javascript
typescript
jsx
tsx
python
json
bash
sql
css
html
```

Todas foram processadas corretamente.

## 19. Decisões técnicas

### Highlighting realizado no build

Foi evitada uma biblioteca que analisasse código no navegador. Isso reduz JavaScript de runtime e evita efeitos visuais após a renderização.

### Integração oficial do Shiki

Foi utilizado `@shikijs/rehype` diretamente, em vez de adicionar uma camada adicional de abstração.

### Temas GitHub

Foram escolhidos `github-light` e `github-dark` por oferecerem boa legibilidade, contraste conhecido e aparência profissional sem interferir na identidade visual ao redor dos blocos.

### Rótulo por transformer

O nome da linguagem é inserido na AST produzida pelo Shiki. Isso é mais simples do que criar um componente React específico para blocos de código.

### CSS restrito ao conteúdo dos artigos

As novas regras foram mantidas dentro de `.article-content` ou em classes com prefixos como:

```text
article-image
article-two-columns
article-callout
```

Não foram alterados estilos do Header, Home, Projetos, Experiências, Certificações ou Footer.

### Proporções limitadas

O `TwoColumns` aceita apenas três proporções para evitar uma API genérica e desnecessariamente complexa.

### Reutilização de variáveis existentes

Os componentes reutilizam cores, bordas, superfícies e sombras já disponíveis. Nenhuma nova paleta global foi criada.

### Manutenção do slug temporário

O slug `primeiro-artigo` foi mantido mesmo após a alteração do título para evitar quebra da URL já usada nos testes.

## 20. Limitações e observações

- `@shikijs/rehype` 4 requer Node.js 20 ou superior durante o build.
- O ambiente local utilizado possui Node.js 25.8.1.
- O ambiente da Vercel deve permanecer em Node.js 20 ou superior.
- O highlighting aumenta o tempo de compilação, mas não adiciona uma etapa de análise no navegador.
- Os módulos MDX continuam sendo carregados com `import.meta.glob` e `{ eager: true }`, conforme a arquitetura aprovada.
- Não foi implementado botão de copiar código.
- Não foram implementados títulos personalizados para blocos além do nome automático da linguagem.
- O placeholder SVG é temporário e não deve ser tratado como imagem definitiva.
- `ArticleImage` utiliza `alt=""` quando o atributo é omitido; imagens informativas devem sempre fornecer uma descrição adequada.

## 21. Recursos que permaneceram fora do escopo

Não foram implementados:

- CMS;
- banco de dados;
- comentários;
- likes;
- autenticação;
- newsletter;
- busca;
- filtros;
- paginação;
- tabela de conteúdos;
- tempo de leitura;
- botão de copiar código;
- compartilhamento social;
- SEO avançado;
- Open Graph;
- sitemap;
- RSS;
- analytics;
- redesign da listagem de artigos.

## 22. Commit relacionado

A implementação foi registrada no commit:

```text
48fe4e5 feat: adiciona componentes MDX e syntax highlighting
```

