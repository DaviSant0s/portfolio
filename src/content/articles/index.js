import {
  assertUniqueArticleSlugs,
  normalizeArticleMetadata,
} from './articleMetadata';

const articleModules = import.meta.glob('./*.mdx', { eager: true });

function createArticle(filePath, articleModule) {
  const metadata = normalizeArticleMetadata(
    filePath,
    articleModule.frontmatter,
  );

  return {
    ...metadata,
    Content: articleModule.default,
  };
}

const discoveredArticles = Object.entries(articleModules).map(([filePath, articleModule]) => (
  createArticle(filePath, articleModule)
));

assertUniqueArticleSlugs(discoveredArticles);

export const articles = discoveredArticles.sort((firstArticle, secondArticle) => (
  secondArticle.date.localeCompare(firstArticle.date)
));

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

const articleDateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatArticleDate(date) {
  const parsedDate = new Date(`${date}T00:00:00Z`);

  return Number.isNaN(parsedDate.getTime())
    ? date
    : articleDateFormatter.format(parsedDate);
}
