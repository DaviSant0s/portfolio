const articleModules = import.meta.glob('./*.mdx', { eager: true });
const requiredMetadata = ['title', 'description', 'date', 'tags', 'slug'];

function normalizeDate(date) {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }

  return String(date);
}

function createArticle(filePath, articleModule) {
  const metadata = articleModule.frontmatter ?? {};
  const missingMetadata = requiredMetadata.filter((field) => {
    const value = metadata[field];
    return value === undefined || value === null || value === '';
  });

  if (missingMetadata.length > 0) {
    throw new Error(
      `O artigo ${filePath} não possui os metadados obrigatórios: ${missingMetadata.join(', ')}.`,
    );
  }

  if (!Array.isArray(metadata.tags)) {
    throw new Error(`O campo tags do artigo ${filePath} precisa ser uma lista.`);
  }

  return {
    title: String(metadata.title),
    description: String(metadata.description),
    date: normalizeDate(metadata.date),
    tags: metadata.tags.map(String),
    slug: String(metadata.slug),
    image: metadata.image ? String(metadata.image) : undefined,
    Content: articleModule.default,
  };
}

const discoveredArticles = Object.entries(articleModules).map(([filePath, articleModule]) => (
  createArticle(filePath, articleModule)
));

const duplicatedSlugs = discoveredArticles
  .map(({ slug }) => slug)
  .filter((slug, index, slugs) => slugs.indexOf(slug) !== index);

if (duplicatedSlugs.length > 0) {
  throw new Error(`Existem artigos com slugs duplicados: ${[...new Set(duplicatedSlugs)].join(', ')}.`);
}

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
