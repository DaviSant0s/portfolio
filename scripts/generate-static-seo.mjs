import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const outputDirectory = path.join(projectRoot, 'dist');
const seoEntryPath = path.join(projectRoot, 'dist-seo', 'buildEntry.js');
const templatePath = path.join(outputDirectory, 'index.html');
const SEO_START_MARKER = '<!-- SEO_HEAD_START -->';
const SEO_END_MARKER = '<!-- SEO_HEAD_END -->';

const {
  SITE_URL,
  articleNotFoundSeoMetadata,
  sitemapEntries,
  staticSeoRoutes,
} = await import(pathToFileURL(seoEntryPath));

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const escapeXml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const safeJson = (value) =>
  JSON.stringify(value)
    .replaceAll('<', '\\u003c')
    .replaceAll('>', '\\u003e')
    .replaceAll('&', '\\u0026');

const renderMeta = (attribute, key, content) => {
  if (!content) {
    return '';
  }

  return `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}" data-seo-managed="true">`;
};

const renderHead = (metadata) => {
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    renderMeta('name', 'description', metadata.description),
    renderMeta('name', 'robots', metadata.robots),
  ];

  if (metadata.canonical) {
    tags.push(
      `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" data-seo-managed="true">`,
    );
  }

  if (metadata.openGraph) {
    tags.push(
      renderMeta('property', 'og:type', metadata.openGraph.type),
      renderMeta('property', 'og:title', metadata.openGraph.title),
      renderMeta('property', 'og:description', metadata.openGraph.description),
      renderMeta('property', 'og:url', metadata.openGraph.url),
      renderMeta('property', 'og:site_name', metadata.openGraph.siteName),
      renderMeta('property', 'og:locale', metadata.openGraph.locale),
      renderMeta('property', 'og:image', metadata.openGraph.image),
    );
  }

  if (metadata.twitter) {
    tags.push(
      renderMeta('name', 'twitter:card', metadata.twitter.card),
      renderMeta('name', 'twitter:title', metadata.twitter.title),
      renderMeta('name', 'twitter:description', metadata.twitter.description),
      renderMeta('name', 'twitter:image', metadata.twitter.image),
    );
  }

  if (metadata.article) {
    tags.push(
      renderMeta(
        'property',
        'article:published_time',
        metadata.article.publishedTime,
      ),
      renderMeta(
        'property',
        'article:modified_time',
        metadata.article.modifiedTime,
      ),
      ...metadata.article.tags.map((tag) =>
        renderMeta('property', 'article:tag', tag),
      ),
    );
  }

  if (metadata.jsonLd) {
    tags.push(
      `<script type="application/ld+json" data-seo-managed="true">${safeJson(metadata.jsonLd)}</script>`,
    );
  }

  return tags.filter(Boolean).join('\n    ');
};

const injectSeoHead = (template, metadata) => {
  const startIndex = template.indexOf(SEO_START_MARKER);
  const endIndex = template.indexOf(SEO_END_MARKER);

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error('Os marcadores de SEO não foram encontrados em dist/index.html.');
  }

  const before = template.slice(0, startIndex + SEO_START_MARKER.length);
  const after = template.slice(endIndex);

  return `${before}\n    ${renderHead(metadata)}\n    ${after}`;
};

const routeOutputPath = (routePath) => {
  if (routePath === '/') {
    return templatePath;
  }

  return path.join(
    outputDirectory,
    routePath.replace(/^\//, ''),
    'index.html',
  );
};

const template = await readFile(templatePath, 'utf8');

for (const route of staticSeoRoutes) {
  const outputPath = routeOutputPath(route.path);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, injectSeoHead(template, route.metadata));
}

const notFoundOutputPath = path.join(
  outputDirectory,
  'artigos',
  '404.html',
);
await mkdir(path.dirname(notFoundOutputPath), { recursive: true });
await writeFile(
  notFoundOutputPath,
  injectSeoHead(template, articleNotFoundSeoMetadata),
);

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapEntries.map(({ path: routePath, lastmod }) => {
    const location = new URL(routePath, `${SITE_URL}/`).href;
    const lines = ['  <url>', `    <loc>${escapeXml(location)}</loc>`];

    if (lastmod) {
      lines.push(`    <lastmod>${escapeXml(lastmod)}</lastmod>`);
    }

    lines.push('  </url>');
    return lines.join('\n');
  }),
  '</urlset>',
  '',
].join('\n');

await writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemap);
await writeFile(
  path.join(outputDirectory, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`,
);

console.log(
  `SEO estático gerado para ${staticSeoRoutes.length} rotas; ${sitemapEntries.length} URLs indexáveis no sitemap.`,
);
