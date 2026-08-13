const requiredMetadata = ['title', 'description', 'date', 'tags', 'slug'];

const normalizeDate = (date) => {
  if (date instanceof Date) {
    return date.toISOString().slice(0, 10);
  }

  return String(date);
};

export function normalizeArticleMetadata(filePath, metadata = {}) {
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
    updatedDate: metadata.updatedDate
      ? normalizeDate(metadata.updatedDate)
      : undefined,
    tags: metadata.tags.map(String),
    slug: String(metadata.slug),
    image: metadata.image ? String(metadata.image) : undefined,
    noindex: metadata.noindex === true,
  };
}

export function assertUniqueArticleSlugs(articles) {
  const duplicatedSlugs = articles
    .map(({ slug }) => slug)
    .filter((slug, index, slugs) => slugs.indexOf(slug) !== index);

  if (duplicatedSlugs.length > 0) {
    throw new Error(
      `Existem artigos com slugs duplicados: ${[...new Set(duplicatedSlugs)].join(', ')}.`,
    );
  }
}
