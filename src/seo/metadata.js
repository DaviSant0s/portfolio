import { SITE_URL, siteConfig, toAbsoluteUrl } from '../config/site';

const createPageMetadata = ({
  title,
  description,
  path,
  type = 'website',
  image,
  noindex = false,
  article,
  jsonLd,
}) => {
  const url = toAbsoluteUrl(path, SITE_URL);
  const absoluteImage = image ? toAbsoluteUrl(image, SITE_URL) : undefined;

  return {
    title,
    description,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    canonical: noindex ? undefined : url,
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      image: absoluteImage,
    },
    twitter: {
      card: absoluteImage ? 'summary_large_image' : 'summary',
      title,
      description,
      image: absoluteImage,
    },
    article,
    jsonLd,
  };
};

export const createHomeSeoMetadata = () => {
  const url = toAbsoluteUrl('/', SITE_URL);

  return createPageMetadata({
    ...siteConfig.home,
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      name: siteConfig.home.title,
      description: siteConfig.home.description,
      url,
      mainEntity: {
        '@type': 'Person',
        name: siteConfig.author,
        url,
        jobTitle: 'Desenvolvedor Full Stack',
        knowsAbout: [
          'React',
          'TypeScript',
          'Node.js',
          'Python',
          'APIs REST',
          'Inteligência Artificial',
        ],
        sameAs: siteConfig.profiles,
      },
    },
  });
};

export const createArticlesSeoMetadata = () =>
  createPageMetadata({
    ...siteConfig.articles,
    path: '/artigos',
  });

export const createArticleSeoMetadata = (article) => {
  const path = `/artigos/${article.slug}`;
  const url = toAbsoluteUrl(path, SITE_URL);
  const image = article.image
    ? toAbsoluteUrl(article.image, SITE_URL)
    : undefined;
  const dateModified = article.updatedDate || article.date;

  return createPageMetadata({
    title: `${article.title} | ${siteConfig.name}`,
    description: article.description,
    path,
    type: 'article',
    image: article.image,
    noindex: article.noindex,
    article: {
      publishedTime: article.date,
      modifiedTime: dateModified,
      tags: article.tags,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified,
      url,
      mainEntityOfPage: url,
      author: {
        '@type': 'Person',
        name: siteConfig.author,
        url: toAbsoluteUrl('/', SITE_URL),
      },
      keywords: article.tags,
      ...(image ? { image } : {}),
    },
  });
};

export const createArticleNotFoundSeoMetadata = () => ({
  title: `Artigo não encontrado | ${siteConfig.name}`,
  description: 'O artigo solicitado não foi encontrado.',
  robots: 'noindex, nofollow',
});

export { SITE_URL };
