import {
  assertUniqueArticleSlugs,
  normalizeArticleMetadata,
} from '../content/articles/articleMetadata';
import {
  createArticleNotFoundSeoMetadata,
  createArticleSeoMetadata,
  createArticlesSeoMetadata,
  createHomeSeoMetadata,
  SITE_URL,
} from './metadata';

const frontmatterModules = import.meta.glob('../content/articles/*.mdx', {
  eager: true,
  import: 'frontmatter',
});

const articles = Object.entries(frontmatterModules).map(
  ([filePath, frontmatter]) =>
    normalizeArticleMetadata(filePath, frontmatter),
);

assertUniqueArticleSlugs(articles);

export const staticSeoRoutes = [
  {
    path: '/',
    metadata: createHomeSeoMetadata(),
  },
  {
    path: '/artigos',
    metadata: createArticlesSeoMetadata(),
  },
  ...articles.map((article) => ({
    path: `/artigos/${article.slug}`,
    metadata: createArticleSeoMetadata(article),
  })),
];

export const sitemapEntries = staticSeoRoutes
  .filter(({ metadata }) => !metadata.robots.startsWith('noindex'))
  .map(({ path, metadata }) => ({
    path,
    lastmod:
      metadata.article?.modifiedTime || metadata.article?.publishedTime,
  }));

export const articleNotFoundSeoMetadata =
  createArticleNotFoundSeoMetadata();

export { SITE_URL };
