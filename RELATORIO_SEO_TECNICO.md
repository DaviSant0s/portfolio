# Relatório da implementação de SEO técnico

## 1. Objetivo e diagnóstico inicial

Esta etapa preparou a Home, a listagem de artigos e cada artigo MDX para mecanismos de busca, compartilhamento social e futura integração com o Google Search Console, sem migrar o projeto para outro framework e sem alterar o layout aprovado.

Antes da implementação, o build do Vite produzia apenas `dist/index.html`. A Home, `/artigos` e `/artigos/primeiro-artigo` recebiam inicialmente o mesmo HTML, com o título `Davi Santos | Portfólio`, uma description genérica e sem canonical, Open Graph, Twitter Cards ou JSON-LD específicos. Os títulos de artigos eram alterados somente por `useEffect`, depois da execução do React. Isso não atendia crawlers e geradores de preview que leem apenas o HTML inicial.

## 2. Estratégia escolhida

Foi implementada uma geração estática de documentos HTML específicos por rota, integrada ao build atual do Vite.

O pipeline final é:

```text
npm run build
      ↓
build:client — gera o bundle normal do Vite em dist
      ↓
build:seo — compila uma entrada de build que descobre os frontmatters MDX
      ↓
generate:seo — grava HTML específico por rota, sitemap.xml e robots.txt
```

O resultado inclui:

```text
dist/index.html
dist/artigos/index.html
dist/artigos/{slug}/index.html
dist/artigos/404.html
dist/sitemap.xml
dist/robots.txt
```

Essa solução foi escolhida por ser pequena e compatível com React, Vite, React Router e Vercel. Nenhuma biblioteca de SEO ou runtime adicional foi necessária. O corpo da aplicação continua sendo renderizado pelo React no cliente; o documento estático já entrega todo o `<head>` específico da rota antes da execução do JavaScript. Assim, os metadados usados por mecanismos de busca e previews sociais não dependem de uma alteração posterior do DOM.

## 3. Fluxo completo de um artigo

```text
novo arquivo .mdx
        ↓
frontmatter obrigatório e campos opcionais
        ↓
import.meta.glob descobre o artigo automaticamente
        ↓
/artigos/:slug
        ↓
metadata central derivada do frontmatter
        ↓
JSON-LD TechArticle
        ↓
sitemap inclui o artigo quando noindex não é true
        ↓
HTML específico e indexável gerado no build
```

Não existe cadastro manual de artigos no sistema de SEO nem no sitemap.

## 4. Arquivos criados

### `site.config.js`

Configuração universal e central do site. Contém:

- URL padrão `https://davisantoss.vercel.app`;
- nome e autor;
- locale;
- título e description da Home;
- título e description da listagem de artigos;
- perfis reais já usados pelo portfólio;
- normalização da URL base;
- conversão de caminhos relativos para URLs absolutas.

### `src/config/site.js`

Conecta a configuração universal ao ambiente do Vite. Resolve `VITE_SITE_URL` e aplica o fallback central quando a variável estiver ausente ou for inválida.

### `src/content/articles/articleMetadata.js`

Centraliza a validação e normalização do frontmatter. Os campos mínimos permanecem:

```yaml
title:
description:
date:
tags:
slug:
```

Foram aceitos como opcionais:

```yaml
image:
updatedDate:
noindex:
```

O arquivo também preserva a validação de `tags`, normaliza datas e impede slugs duplicados.

### `src/components/SEO/index.jsx`

Componente central de SEO usado pelas páginas React. Durante navegações internas da SPA, ele:

- remove somente tags gerenciadas pelo próprio sistema;
- atualiza title e description;
- atualiza robots e canonical;
- atualiza Open Graph e Twitter Cards;
- adiciona metadados de artigo;
- atualiza o JSON-LD.

As manipulações que antes estavam espalhadas em `useEffect` nas páginas foram removidas.

### `src/seo/metadata.js`

Fonte central dos objetos de metadata. Gera:

- metadata da Home;
- metadata de `/artigos`;
- metadata individual baseada no frontmatter;
- metadata segura para artigo inexistente.

Também concentra canonical, Open Graph, Twitter Cards, datas de artigo e schemas JSON-LD.

### `src/seo/buildEntry.js`

Entrada compilada pelo Vite somente durante o build de SEO. Ela lê automaticamente o frontmatter de `src/content/articles/*.mdx` com `import.meta.glob`, usa a mesma validação do runtime e entrega ao gerador:

- rotas estáticas;
- metadata de cada rota;
- URLs indexáveis do sitemap;
- metadata do fallback de artigo inexistente.

### `scripts/generate-static-seo.mjs`

Gerador executado após os builds. Ele:

- injeta metadata específica em cada HTML;
- cria os diretórios de cada rota;
- cria `dist/artigos/404.html`;
- gera `dist/sitemap.xml`;
- gera `dist/robots.txt`;
- escapa valores usados no HTML e XML;
- serializa JSON-LD substituindo caracteres que poderiam encerrar ou alterar o contexto do `<script>`.

## 5. Arquivos modificados

### `.env.example`

Adicionada a variável:

```env
VITE_SITE_URL=https://davisantoss.vercel.app
```

### `.gitignore`

- `dist-seo` foi adicionado, pois é um artefato intermediário do build;
- a regra que ignorava toda a pasta `scripts` foi removida para versionar o gerador.

### `package.json`

O build foi dividido em três passos:

```json
"build": "npm run build:client && npm run build:seo && npm run generate:seo",
"build:client": "vite build",
"build:seo": "vite build --ssr src/seo/buildEntry.js --outDir dist-seo",
"generate:seo": "node scripts/generate-static-seo.mjs"
```

O termo `--ssr` é usado apenas para o Vite produzir um módulo Node capaz de fornecer frontmatters ao gerador. Não foi adicionado um servidor SSR em produção.

### `index.html`

O título e a description genéricos foram substituídos por um bloco delimitado por `SEO_HEAD_START` e `SEO_HEAD_END`. O gerador substitui esse bloco por metadata específica em cada documento do build.

### `src/content/articles/index.js`

A descoberta atual com `import.meta.glob` foi preservada. Apenas a validação e normalização do frontmatter foram extraídas para que o runtime e o build de SEO usem exatamente as mesmas regras.

### `src/content/articles/primeiro-artigo.mdx`

Adicionado somente:

```yaml
noindex: true
```

O conteúdo temporário não foi transformado em artigo definitivo.

### `src/pages/Article/index.jsx`

- removidos os `useEffect` que alteravam `document.title`;
- adicionado o sistema central de SEO;
- metadata do artigo agora vem integralmente do frontmatter;
- artigo inexistente recebe metadata própria com `noindex, nofollow` e sem canonical.

### `src/pages/Articles/index.jsx`

- removida a alteração manual de title;
- adicionada metadata específica da listagem por meio do componente central;
- layout e conteúdo visual foram preservados.

### `src/routes/index.jsx`

A Home passou a usar a metadata central. A configuração das rotas existentes não foi modificada.

### `vercel.json`

- o fallback SPA geral foi preservado;
- foi adicionado fallback específico de artigo inexistente para `dist/artigos/404.html`;
- `trailingSlash: false` evita versões duplicadas com e sem barra final e mantém as URLs canônicas sem barra;
- arquivos estáticos gerados possuem precedência sobre rewrites na Vercel, então artigos existentes recebem seu HTML próprio e apenas slugs ausentes chegam ao fallback `noindex`.

## 6. Dependências

Nenhuma dependência foi adicionada ou atualizada.

A solução usa somente:

- APIs do navegador;
- APIs nativas do Node.js;
- Vite e plugins MDX já presentes no projeto.

Isso evita adicionar uma biblioteca de runtime apenas para SEO.

## 7. Metadados por página

### Home

```text
title: Davi Santos | Desenvolvedor Full Stack
canonical: https://DOMINIO/
robots: index, follow
og:type: website
JSON-LD: ProfilePage com Person como mainEntity
```

A description usa somente informações existentes no portfólio: desenvolvimento Full Stack, graduação na FURG e tecnologias já apresentadas.

### `/artigos`

```text
title: Artigos | Davi Santos
canonical: https://DOMINIO/artigos
robots: index, follow
og:type: website
```

### `/artigos/:slug`

O título, description, datas, tags, slug e imagem opcional são derivados do frontmatter.

```text
title: {frontmatter.title} | Davi Santos
canonical: https://DOMINIO/artigos/{frontmatter.slug}
og:type: article
```

`article:published_time` usa `date`. `article:modified_time` usa `updatedDate` quando existe e, caso contrário, usa `date`. Cada tag gera um `article:tag`.

## 8. Canonical

A URL absoluta é criada com `VITE_SITE_URL` e o caminho da rota. Páginas indexáveis recebem exatamente um canonical.

Páginas com `noindex` e artigos inexistentes não recebem canonical. Isso evita sinalizar uma URL temporária ou inválida como documento principal.

## 9. Open Graph e Twitter/X Cards

Home e listagem usam `og:type=website`. Artigos usam `og:type=article` e os campos de publicação quando aplicáveis.

Quando o frontmatter tiver, por exemplo:

```yaml
image: "/images/articles/cache-redis.png"
```

o sistema converte o valor para:

```text
https://DOMINIO/images/articles/cache-redis.png
```

e gera `og:image`, `twitter:image` e `twitter:card=summary_large_image`.

Como o projeto não possui hoje uma imagem social padrão adequada, nenhuma imagem fictícia foi criada. Sem `image`, as tags de imagem são omitidas e o card usado é `summary`, que é apropriado para compartilhamento sem imagem. Nenhum usuário fictício de X/Twitter foi adicionado.

## 10. JSON-LD

### Home

Foi escolhido `ProfilePage`, pois a página apresenta o perfil profissional. `mainEntity` é uma `Person` com nome, cargo, conhecimentos exibidos no portfólio e perfis reais já utilizados pelo site.

### Artigos

Foi escolhido `TechArticle`, semanticamente adequado ao conteúdo técnico. O schema contém:

- headline;
- description;
- datePublished;
- dateModified;
- author Person;
- mainEntityOfPage;
- url;
- keywords originadas das tags;
- image somente quando existir.

Os JSON-LD gerados foram extraídos do HTML do build e validados como JSON. Os tipos encontrados foram `ProfilePage`, `Person` e `TechArticle`.

## 11. Sitemap automático

O sitemap usa a mesma fonte MDX do sistema de artigos. Para cada novo arquivo, o build lê o frontmatter e adiciona a rota automaticamente, desde que `noindex` não seja `true`.

Quando um artigo indexável possuir `updatedDate`, ela será usada como `lastmod`; sem ela, será usada `date`. Não foram inventados `priority` ou `changefreq`.

Conteúdo atual de `dist/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://davisantoss.vercel.app/</loc>
  </url>
  <url>
    <loc>https://davisantoss.vercel.app/artigos</loc>
  </url>
</urlset>
```

O playground não aparece porque está marcado com `noindex: true`.

## 12. Robots.txt

Conteúdo atual de `dist/robots.txt`:

```text
User-agent: *
Allow: /
Sitemap: https://davisantoss.vercel.app/sitemap.xml
```

Nenhuma rota de artigos foi bloqueada. Assim, crawlers podem acessar uma página e ler sua diretiva individual de indexação.

## 13. Como usar `noindex`

Adicionar ao frontmatter:

```yaml
noindex: true
```

Efeitos:

- HTML recebe `<meta name="robots" content="noindex, nofollow">`;
- canonical é omitido;
- artigo é excluído do sitemap;
- a listagem pública e a rota continuam funcionando normalmente.

Sem esse campo, o artigo é indexável por padrão.

## 14. Artigos inexistentes

O componente já existente de “Artigo não encontrado” foi preservado. Agora ele recebe:

```html
<title>Artigo não encontrado | Davi Santos</title>
<meta name="description" content="O artigo solicitado não foi encontrado.">
<meta name="robots" content="noindex, nofollow">
```

Não são gerados canonical, Open Graph de artigo ou JSON-LD que possam fazer a rota parecer válida.

Na Vercel, o rewrite específico entrega `dist/artigos/404.html` quando o filesystem não encontra um artigo estático. O React mantém o endereço original e renderiza o estado de artigo inexistente.

## 15. `VITE_SITE_URL`

Uso padrão:

```env
VITE_SITE_URL=https://davisantoss.vercel.app
```

Para trocar de domínio, basta configurar a variável no ambiente de build. Não é necessário alterar componentes, sitemap ou robots. A URL é normalizada, a barra final duplicada é removida e valores inválidos usam o fallback central.

Foi feito um build de teste com `https://portfolio.example.dev`. Canonical, `og:url`, JSON-LD, sitemap e robots foram atualizados para esse host. Depois do teste, o build foi restaurado ao domínio padrão.

## 16. Exemplos reais do HTML gerado

### `dist/index.html`

```html
<title>Davi Santos | Desenvolvedor Full Stack</title>
<meta name="description" content="Portfólio de Davi Santos, desenvolvedor Full Stack e graduando em Engenharia de Computação na FURG, com projetos em React, TypeScript, Node.js, Python e IA aplicada.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://davisantoss.vercel.app/">
<meta property="og:title" content="Davi Santos | Desenvolvedor Full Stack">
```

### `dist/artigos/index.html`

```html
<title>Artigos | Davi Santos</title>
<meta name="description" content="Artigos técnicos de Davi Santos sobre desenvolvimento de software, backend, inteligência artificial e tecnologia.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://davisantoss.vercel.app/artigos">
<meta property="og:title" content="Artigos | Davi Santos">
```

### `dist/artigos/primeiro-artigo/index.html`

```html
<title>Playground temporário de MDX | Davi Santos</title>
<meta name="description" content="Conteúdo temporário de desenvolvimento para validar componentes e blocos de código em artigos MDX.">
<meta name="robots" content="noindex, nofollow">
<meta property="og:type" content="article">
<meta property="og:title" content="Playground temporário de MDX | Davi Santos">
```

O HTML do playground não contém canonical e não depende do React para receber `noindex`.

## 17. Segurança

No navegador, o componente de SEO usa `document.createElement`, `setAttribute` e `textContent`, sem interpolar HTML bruto.

No build:

- valores de HTML e atributos são escapados;
- valores do sitemap são escapados como XML;
- JSON-LD usa `JSON.stringify` e neutraliza `<`, `>` e `&` antes da inserção no `<script>`.

## 18. Validações executadas

### Qualidade e build

```text
npm run lint       → aprovado, zero erros e zero warnings
npm run build      → aprovado
git diff --check   → aprovado
```

O build informou apenas o aviso já relacionado ao tamanho do bundle principal, sem falhar. Não houve aumento por biblioteca de SEO, pois nenhuma foi adicionada.

### HTML inicial

Foram inspecionados diretamente os arquivos produzidos para:

- `/`;
- `/artigos`;
- `/artigos/primeiro-artigo`;
- fallback de artigo inexistente.

As páginas indexáveis possuem uma description, uma diretiva robots e exatamente um canonical. O playground e a página inexistente possuem `noindex, nofollow` e nenhum canonical.

### Regressão funcional em navegador

Foi executado um navegador headless contra o build de produção. Resultados:

- Home renderizada corretamente;
- listagem de artigos renderizada corretamente;
- acesso direto ao artigo funcionando;
- artigo MDX renderizado com três blocos Shiki encontrados;
- Header navegou do artigo para `/#projetos`;
- seção `#id_projects` encontrada;
- Footer presente;
- tema alternou de dark para light e voltou para dark;
- menu mobile abriu e exibiu o link de Artigos;
- artigo inexistente mostrou o estado correto, `noindex` e zero canonicals;
- nenhum erro foi registrado no console.

## 19. O que foi preservado

Não foram refeitos ou alterados:

- sistema MDX;
- componentes `ArticleImage`, `TwoColumns` e `Callout`;
- syntax highlighting;
- layout visual da Home e dos artigos;
- Header e Footer;
- navegação da Home;
- sistema de tema;
- formato `/artigos/:slug`;
- conteúdo temporário do playground.

Também não foram adicionados Analytics, Tag Manager, Search Console, RSS, busca, paginação, comentários, CMS ou qualquer funcionalidade fora do escopo de SEO técnico.

## 20. Limitações e decisões restantes

1. A geração estática cobre o `<head>` específico de cada rota; o corpo continua sendo renderizado no cliente. Essa foi a opção menos invasiva para a SPA atual e resolve metadados iniciais, Open Graph, Twitter Cards, canonical e JSON-LD sem os riscos de hidratação de uma migração para SSR completo.
2. O fallback de artigo inexistente na hospedagem é um rewrite estático. Ele entrega metadata `noindex` correta, mas pode responder HTTP 200 em vez de um status HTTP 404 real. Obter status 404 dinâmico exigiria uma Function/SSR ou mudança maior de infraestrutura.
3. Não existe hoje uma imagem social padrão com proporção apropriada. Por isso, imagens sociais são emitidas apenas quando o artigo declara `image` no frontmatter.
4. O sitemap atual possui apenas Home e listagem porque o único artigo é intencionalmente `noindex`. O primeiro artigo definitivo sem `noindex` entrará automaticamente.
5. O projeto está tecnicamente preparado para o Search Console, mas a verificação e o envio do sitemap dependem de ação externa após o deploy e não foram realizados nesta etapa.
