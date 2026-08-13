# Relatório de otimização de fontes e ícones

Data da execução: 13 de agosto de 2026.

## Escopo respeitado

Esta etapa alterou exclusivamente o carregamento e a renderização de fontes e ícones. Não houve redesign nem mudanças intencionais em conteúdo, imagens, estrutura das seções, MDX, syntax highlighting, SEO, animações, rotas ou lógica funcional sem relação direta com ícones.

A identidade tipográfica foi preservada: a interface continua usando **Plus Jakarta Sans**. Os blocos de código dos artigos continuam usando a pilha monoespaçada que já existia no CSS dos artigos.

## Método de auditoria

Antes das alterações foram executados:

- busca estática em `index.html`, `src/index.css`, componentes, dados, `package.json` e `package-lock.json`;
- build de produção;
- navegação real no build com Chromium, viewport mobile, cache desativado e leitura do corpo das respostas;
- Lighthouse 13.4.1 mobile e desktop com os quatro grupos de auditoria;
- mapeamento de todas as classes e ligatures de ícones encontradas no código;
- inspeção dos pesos tipográficos realmente usados pelas classes do projeto.

As medições posteriores usaram o mesmo build de produção, servidor, Chromium e perfis do Lighthouse. As rodadas finais de mobile e desktop foram executadas isoladamente para evitar contenção artificial de CPU.

## Inventário de fontes antes da alteração

| Fonte ou sistema | Origem | Arquivo que solicitava | Uso real encontrado | Transferência medida no carregamento da Home | Necessária? | Ação |
| --- | --- | --- | --- | ---: | --- | --- |
| Plus Jakarta Sans | Google Fonts | `src/index.css`, via `@import` | `body`, headings, botões, Header, cards, artigos e restante da interface | 3.385 B de CSS + 27.348 B de WOFF2 | Sim | Mantida, movida para `index.html`, somente estilo normal e faixa de pesos 300–700, com `display=swap` |
| Roboto Slab | Google Fonts | `src/index.css`, via `@import` | Nenhum consumidor de `font-display` ou da variável associada | 2.513 B de CSS; nenhum arquivo de fonte baixado | Não | Removida |
| Playfair Display | Google Fonts | `src/index.css`, via `@import` | Nenhum consumidor de `font-brand` ou da variável associada | 1.655 B de CSS; nenhum arquivo de fonte baixado | Não | Removida |
| Open Sans | Google Fonts | `index.html` | Nenhuma regra ou variável usava a família | 12.137 B de CSS; nenhum arquivo de fonte baixado | Não | Removida |
| Biryani | Google Fonts | `index.html` | Nenhuma regra ou variável usava a família | 8.395 B de CSS; nenhum arquivo de fonte baixado | Não | Removida |
| Sora | Google Fonts | `index.html` | Nenhuma regra ou variável usava a família | 826 B de CSS; nenhum arquivo de fonte baixado | Não | Removida |
| Roboto | Google Fonts | `index.html` | Nenhuma regra ou variável usava a família | 67.176 B de CSS; nenhum arquivo de fonte baixado | Não | Removida |
| Material Symbols Outlined | Google Fonts | `index.html` | 37 símbolos da interface | 631 B de CSS + **3.964.532 B de fonte** | Sim, mas não o arquivo completo | Mantida como subconjunto explícito de 37 símbolos, pesos 400–600 e FILL 0–1 |
| Material Symbols Sharp | Google Fonts | `index.html` | Nenhuma classe `material-symbols-sharp` encontrada | 615 B de CSS; nenhum arquivo de fonte adicional baixado | Não | Removida |
| Material Icons legado | Google Fonts | `index.html` | 6 ocorrências em Button, DarkModeBtn e ProjectDetailsModal | 569 B de CSS + 128.352 B de fonte | Não como sistema separado | Ocorrências migradas para o subconjunto de Material Symbols Outlined |
| Boxicons | unpkg + pacote npm | `index.html` e dependência `boxicons` | 20 ícones únicos referenciados | 68.028 B de CSS + 115.680 B de fonte | Não como webfont global | Substituída por 20 SVGs locais equivalentes e removida das dependências |

O navegador não baixava os binários das famílias textuais sem consumidores, mas ainda precisava solicitar, transferir e analisar todos os CSS externos. O caso mais grave era diferente: Material Symbols Outlined baixava efetivamente um arquivo de 3.964.532 B.

## Tipografia realmente usada

O levantamento das classes mostrou os seguintes pesos textuais efetivos:

- 300 (`font-light`);
- 400 (`font-normal` ou padrão);
- 500 (`font-medium`);
- 600 (`font-semibold` e peso 650 dos headings de artigo, interpolado pela fonte variável);
- 700 (`font-bold`).

Por isso a Plus Jakarta Sans continua variável, mas foi limitada de `200..800` com itálico e normal para apenas `300..700` normal. O único `font-extralight` do código pertence ao botão de seta e afeta o Material Symbol, não texto em Plus Jakarta Sans.

Mapeamento visual confirmado:

| Área | Família após a mudança |
| --- | --- |
| `body`, headings, botões, Header, cards e elementos especiais | Plus Jakarta Sans, com fallback `sans-serif` |
| Artigos em MDX | Plus Jakarta Sans para texto e headings |
| Código inline e blocos do artigo | Pilha monoespaçada existente; não alterada |
| Ícones Material | Material Symbols Outlined em subconjunto |
| Ícones sociais e conceituais antes em Boxicons | SVG local com `currentColor` |
| Logos tecnológicos já baseados em Simple Icons | Sistema existente; não alterado |

## Causa do Material Symbols de quase 4 MB

A URL anterior solicitava a família variável completa com quatro eixos muito amplos:

```text
opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200
```

Ela não especificava `icon_names`, então o Google Fonts entregava o conjunto completo de glifos. Isso resultava em uma fonte de **3.964.532 B** para poucas dezenas de símbolos.

A URL nova usa o mecanismo oficial de subconjunto por `icon_names`, instancia somente os eixos usados e define `display=block` para que o texto da ligature, como `menu` ou `dark_mode`, não apareça durante a troca da fonte:

```text
Material Symbols Outlined:FILL,wght@0..1,400..600
```

Referência técnica: [Material Symbols Guide, Google Fonts](https://developers.google.com/fonts/docs/material_symbols?hl=en).

### Símbolos Material realmente usados

Foram incluídos, em ordem alfabética, todos os 37 nomes encontrados:

```text
article
arrow_back
arrow_forward
arrow_outward
badge
bookmark
check
check_circle
chevron_left
chevron_right
close
code
computer
contact_page
content_copy
dark_mode
deployed_code
emoji_objects
expand_less
expand_more
folder_open
groups
home
info
light_mode
menu
menu_book
neurology
north_east
person
psychology
school
south_east
verified
warning
work
```

O novo arquivo da fonte Material Symbols mede **13.464 B**, redução de 99,66% em relação aos 3.964.532 B anteriores.

## Auditoria e substituição de Boxicons

O projeto usava o CSS de produção no unpkg e, ao mesmo tempo, mantinha `boxicons` no `package.json`. O CSS externo carregava uma webfont inteira apesar de somente 20 desenhos serem referenciados.

Ícones encontrados:

```text
bx-accessibility
bx-bot
bx-brain
bx-chip
bx-code-alt
bx-customize
bx-data
bx-devices
bx-group
bx-line-chart
bxl-git
bxl-github
bxl-gmail
bxl-html5
bxl-javascript
bxl-linkedin
bxl-nodejs
bxl-python
bxl-react
bxl-whatsapp
```

Foi criado um único componente direto, `BoxIcon`, contendo somente os paths SVG desses 20 ícones. Os paths são os equivalentes da própria Boxicons, usam `viewBox="0 0 24 24"`, `fill="currentColor"`, `width/height="1em"`, `aria-hidden="true"` e `focusable="false"`.

Essa decisão preserva:

- o desenho original dos ícones;
- os tamanhos controlados pelas classes existentes;
- cores e variáveis dos temas por `currentColor`;
- hover, transformações e responsividade;
- nomes acessíveis nos links e botões pais.

Não foi adicionada outra biblioteca. Todos os 20 nomes usados têm um path correspondente, sem entradas ausentes ou não utilizadas no mapa.

## Sistemas de ícones após a consolidação

| Sistema | Finalidade | Forma de entrega | Custo medido externo |
| --- | --- | --- | ---: |
| Material Symbols Outlined | navegação, ações, estados e callouts | subconjunto Google Fonts com 37 glifos | 782 B de CSS + 13.464 B de WOFF2 |
| `BoxIcon` local | sociais, conceitos de skills e fallbacks de certificação | 20 SVGs incluídos no bundle e tree-shakeados junto ao código da aplicação | nenhuma requisição externa |
| Simple Icons | logos de tecnologias já existentes | paths SVG importados individualmente | nenhuma webfont; comportamento anterior mantido |
| Imagens de contato | Gmail e WhatsApp na seção Contato | assets existentes | não alteradas por pertencerem ao escopo de imagens |

Não foram encontrados Font Awesome, React Icons, Lucide, Heroicons ou Phosphor.

## Arquivos alterados

| Arquivo | Alteração |
| --- | --- |
| `index.html` | removeu links de sete famílias textuais desnecessárias, Material Icons legado, Material Symbols Sharp, URL completa de Symbols e Boxicons; adicionou Plus Jakarta otimizada e subconjunto Material |
| `src/index.css` | removeu três `@import` encadeados e tokens sem consumidores de Roboto Slab e Playfair Display |
| `src/components/BoxIcon/index.jsx` | novo componente SVG local com os 20 Boxicons efetivamente referenciados |
| `src/components/SocialsGroup/index.jsx` | trocou tags `<i>` por `BoxIcon` mantendo links, nomes acessíveis, tamanhos e estados |
| `src/components/FloatingButtons/index.jsx` | trocou os três Boxicons visíveis por SVGs locais |
| `src/components/Footer/index.jsx` | trocou os Boxicons por SVGs locais, preservando o invólucro, padding, hover e dimensão visual |
| `src/components/SkillsCard/index.jsx` | usa `BoxIcon` somente para os ícones conceituais; Simple Icons continuam inalterados |
| `src/components/CarouselCard/index.jsx` | renderiza o ícone de séries temporais com `BoxIcon` |
| `src/data/carouselProjects.js` | substituiu `iconClass` dependente da webfont por `iconName` |
| `src/components/CardCertification/index.jsx` | preservou o fallback de ícone das certificações por meio de `BoxIcon` |
| `src/components/Button/index.jsx` | migrou Material Icons legado para Material Symbols Outlined |
| `src/components/DarkModeBtn/index.jsx` | migrou três ocorrências legadas para o subconjunto único |
| `src/components/ProjectDetailsModal/index.jsx` | migrou `close` e `arrow_outward` para o subconjunto único |
| `package.json` | removeu `boxicons` |
| `package-lock.json` | removeu Boxicons e 24 dependências transitivas antigas, incluindo cópias próprias de React 16 e React Router 4 |

## Dependências

- Removida: `boxicons@2.1.4`.
- Adicionadas: nenhuma.
- `npm audit fix`: não executado.

## Comparação da rede de fontes e ícones

Medição feita na Home com build de produção, Chromium mobile, cache desativado e soma dos corpos das respostas.

| Métrica | Antes | Depois | Diferença |
| --- | ---: | ---: | ---: |
| Requests relacionados a fontes/ícones | 15 | 4 | -11 (-73,33%) |
| Transferência de fontes/ícones | 4.401.842 B (4,40 MB decimal) | 43.282 B (43,28 KB decimal) | -4.358.560 B (-99,02%) |
| Material Symbols WOFF2 | 3.964.532 B | 13.464 B | -3.951.068 B (-99,66%) |
| Maior recurso individual de fonte | 3.964.532 B | 27.348 B | -3.937.184 B |
| Boxicons CSS + fonte | 183.708 B | 0 B externo | -183.708 B (-100%) |

Requests finais:

| Recurso | Bytes medidos |
| --- | ---: |
| CSS Plus Jakarta Sans | 1.688 B |
| WOFF2 Plus Jakarta Sans, subconjunto Latin carregado | 27.348 B |
| CSS Material Symbols com `icon_names` | 782 B |
| WOFF2 Material Symbols com 37 glifos | 13.464 B |
| **Total** | **43.282 B** |

Não existe mais nenhum request de fonte próximo de 3–4 MB.

## Bundle de produção

| Artefato | Antes | Depois | Diferença |
| --- | ---: | ---: | ---: |
| JS principal, minificado | 503.770 B | 517.609 B | +13.839 B (+2,75%) |
| JS principal, gzip informado pelo Vite | 169,38 KB | 176,65 KB | +7,27 KB |
| CSS principal, minificado | 91.241 B | 90.843 B | -398 B |
| CSS principal, gzip informado pelo Vite | 15,75 KB | 15,59 KB | -0,16 KB |
| Todos os arquivos locais em `dist` | 4.042.733 B | 4.054.746 B | +12.013 B (+0,30%) |

O pequeno aumento local de JS é intencional: ele contém os 20 paths SVG necessários. Em troca, elimina 183.708 B externos de Boxicons e suas dependências de rede. A comprovação do ganho líquido aparece no peso total do Lighthouse, que caiu mais de 4,2 MB.

## Lighthouse mobile

Execução isolada com Lighthouse 13.4.1 e perfil mobile padrão.

| Métrica | Antes | Depois | Resultado |
| --- | ---: | ---: | ---: |
| Performance | 43 | 83 | +40 pontos |
| Accessibility | 100 | 100 | preservado |
| Best Practices | 100 | 100 | preservado |
| SEO | 100 | 100 | preservado |
| FCP | 3.832 ms | 3.060 ms | -772 ms (-20,15%) |
| LCP | 28.402 ms | 3.519 ms | -24.883 ms (-87,61%) |
| TBT | 1.066 ms | 143 ms | -923 ms (-86,59%) |
| CLS | 0,005735 | 0,005811 | estável; variação de 0,000076 |
| Total Byte Weight | 6.149.360 B | 1.939.380 B | -4.209.980 B (-68,46%) |
| Requests totais | 44 | 33 | -11 (-25,00%) |

O LCP anterior desta execução local foi mais alto que o valor aproximado informado no pedido. O número foi mantido no relatório porque é o resultado realmente medido no baseline do mesmo ambiente; métricas temporais de laboratório variam com CPU e respostas externas. A redução de bytes e requests é determinística e foi confirmada separadamente pela captura de rede.

## Lighthouse desktop

Execução isolada com o preset desktop.

| Métrica | Antes | Depois | Resultado |
| --- | ---: | ---: | ---: |
| Performance | 96 | 99 | +3 pontos |
| Accessibility | 100 | 100 | preservado |
| Best Practices | 100 | 100 | preservado |
| SEO | 100 | 100 | preservado |
| FCP | 883 ms | 766 ms | -117 ms (-13,25%) |
| LCP | 1.263 ms | 860 ms | -403 ms (-31,91%) |
| TBT | 17 ms | 22 ms | +5 ms; variação irrelevante de laboratório |
| CLS | 0,003896 | 0,006968 | permanece muito baixo |
| Total Byte Weight | 6.149.271 B | 1.939.380 B | -4.209.891 B (-68,46%) |
| Requests totais | 44 | 33 | -11 (-25,00%) |

## Validação visual e funcional

Foram testadas as três rotas reais em 12 combinações: mobile 390 × 844 e desktop 1440 × 1000, cada um nos temas claro e escuro.

Rotas verificadas:

```text
/
/artigos
/artigos/primeiro-artigo
```

As âncoras `/#inicio`, `/#sobre`, `/#habilidades`, `/#projetos`, `/#experiencia`, `/#certificacoes` e `/#contato` permanecem na mesma Home e seus componentes foram exercitados por rolagem e testes de interação.

Resultados:

- todas as 12 navegações retornaram HTTP 200 e os títulos esperados;
- nenhum erro de página ou console foi registrado;
- nenhum Material Symbol teve largura zero ou largura compatível com ligature textual não resolvida;
- nenhum texto `menu`, `close`, `dark_mode`, `content_copy` ou semelhante apareceu no lugar do glifo;
- Home, listagem de artigos e artigo foram inspecionados nos dois temas e breakpoints;
- menu mobile abriu e fechou, com todos os ícones presentes;
- theme toggle alternou `dark` para `light` e atualizou os ícones;
- modal de projeto abriu e fechou;
- carrossel respondeu ao botão seguinte e mudou de `translate3d(0px, ...)` para `translate3d(-277.02px, ...)`;
- botão “Copiar E-mail” mudou de `content_copy` para `check`, renderizado com 24 px;
- links sociais mantiveram URLs, nomes acessíveis e SVGs decorativos;
- Header, Hero, SocialsGroup, FloatingButtons, Footer, Skills, cards de projeto, modal, certificações, Contato, carrossel e callouts de artigo foram cobertos pela navegação ou inspeção.

Os SVGs locais mantêm `currentColor`, então cores, hover e dark/light mode continuam controlados pelas classes e variáveis existentes. Ícones decorativos permanecem ocultos da árvore acessível e os controles pais mantêm seus `aria-label`.

## Validações técnicas obrigatórias

| Comando ou teste | Resultado |
| --- | --- |
| `npm run lint` | passou, zero warnings e zero erros |
| `npm run build` | passou; client, SSR SEO e geração estática concluídos |
| `git diff --check` | passou, sem erros de whitespace |
| Cobertura dos nomes de Boxicons | 20 usados, 20 definidos, 0 ausentes, 0 não utilizados |
| Teste automatizado em Chromium | passou nas rotas, temas e interações descritos acima |

O Vite continua emitindo o aviso já existente de chunk principal acima de 500 KB. Code splitting geral está fora do escopo desta etapa e não foi alterado.

## Decisões de implementação

### CDN versus self-hosting

Self-hosting foi avaliado e não aplicado. Depois da limpeza, o único arquivo textual carregado tem 27.348 B e o total de fontes/ícones externos é somente 43.282 B. Copiar e manter binários locais traria complexidade e responsabilidade de atualização para economizar basicamente duas respostas CSS e a negociação com o domínio já preconectado. A relação benefício/manutenção não ficou clara o bastante para justificar a mudança.

### Preload

Nenhum preload foi adicionado. Não houve evidência de benefício adicional que compensasse o risco de preload duplicado ou não utilizado. Os dois `preconnect` do Google Fonts foram mantidos porque a Plus Jakarta e o subconjunto Material são usados imediatamente.

### `font-display`

- Plus Jakarta Sans usa `display=swap`, evitando bloqueio de texto.
- Material Symbols usa `display=block`, abordagem indicada para evitar flash das strings de ligature enquanto o pequeno subconjunto é carregado.

### Por que manter Material Symbols em subconjunto

Substituir os 37 símbolos por SVGs manuais aumentaria muito a superfície de manutenção e o risco de diferenças perceptíveis. O subconjunto oficial custa somente 13.464 B, preserva exatamente a família visual, os eixos FILL/peso e as animações existentes. Para os 20 Boxicons, paths locais eram menores e mais diretos que manter a segunda webfont global.

## Limitações e manutenção futura

- A Plus Jakarta e o subconjunto Material ainda dependem do Google Fonts. Em falha da fonte textual, `display=swap` garante fallback `sans-serif`.
- Ao adicionar um novo Material Symbol, seu nome deve ser incluído no parâmetro `icon_names` de `index.html`; caso contrário a ligature não terá glifo no subconjunto.
- Ao adicionar um novo ícone do antigo catálogo Boxicons, é necessário acrescentar somente o path correspondente ao mapa `BoxIcon` ou preferir um SVG/Simple Icon já existente.
- Lighthouse é uma medição de laboratório e tempos podem variar entre rodadas; bytes e requests foram medidos diretamente com cache desativado.
- Imagens continuam sendo a maior parte restante da transferência, mas foram deliberadamente mantidas fora desta etapa.
- Não foi realizado um teste de regressão visual pixel a pixel por inexistir baseline versionado; foi feita inspeção visual automatizada e manual nas 12 combinações descritas.

## Conclusão

```text
ANTES
fontes/ícones: 4.401.842 B (4,40 MB decimal)
requests de fontes/ícones: 15

DEPOIS
fontes/ícones: 43.282 B (43,28 KB decimal)
requests de fontes/ícones: 4

ECONOMIA
4.358.560 B
99,02% da transferência de fontes/ícones
11 requests a menos
```

O recurso Material Symbols de quase 4 MB foi eliminado, a tipografia visual foi preservada, nenhum pacote novo foi adicionado e as três categorias que já estavam em 100 — Accessibility, Best Practices e SEO — permaneceram em 100 nos testes mobile e desktop.
