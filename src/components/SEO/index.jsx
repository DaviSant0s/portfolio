import { useEffect } from 'react';

const MANAGED_ATTRIBUTE = 'data-seo-managed';

const appendMeta = (attribute, key, content) => {
  if (!content) {
    return;
  }

  const meta = document.createElement('meta');
  meta.setAttribute(attribute, key);
  meta.setAttribute('content', content);
  meta.setAttribute(MANAGED_ATTRIBUTE, 'true');
  document.head.appendChild(meta);
};

const appendLink = (rel, href) => {
  if (!href) {
    return;
  }

  const link = document.createElement('link');
  link.setAttribute('rel', rel);
  link.setAttribute('href', href);
  link.setAttribute(MANAGED_ATTRIBUTE, 'true');
  document.head.appendChild(link);
};

const applySeoMetadata = (metadata) => {
  document.head
    .querySelectorAll(`[${MANAGED_ATTRIBUTE}="true"]`)
    .forEach((element) => element.remove());

  document.title = metadata.title;

  appendMeta('name', 'description', metadata.description);
  appendMeta('name', 'robots', metadata.robots);
  appendLink('canonical', metadata.canonical);

  const openGraph = metadata.openGraph;

  if (openGraph) {
    appendMeta('property', 'og:type', openGraph.type);
    appendMeta('property', 'og:title', openGraph.title);
    appendMeta('property', 'og:description', openGraph.description);
    appendMeta('property', 'og:url', openGraph.url);
    appendMeta('property', 'og:site_name', openGraph.siteName);
    appendMeta('property', 'og:locale', openGraph.locale);
    appendMeta('property', 'og:image', openGraph.image);
  }

  const twitter = metadata.twitter;

  if (twitter) {
    appendMeta('name', 'twitter:card', twitter.card);
    appendMeta('name', 'twitter:title', twitter.title);
    appendMeta('name', 'twitter:description', twitter.description);
    appendMeta('name', 'twitter:image', twitter.image);
  }

  if (metadata.article) {
    appendMeta(
      'property',
      'article:published_time',
      metadata.article.publishedTime,
    );
    appendMeta(
      'property',
      'article:modified_time',
      metadata.article.modifiedTime,
    );
    metadata.article.tags.forEach((tag) =>
      appendMeta('property', 'article:tag', tag),
    );
  }

  if (metadata.jsonLd) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(metadata.jsonLd);
    script.setAttribute(MANAGED_ATTRIBUTE, 'true');
    document.head.appendChild(script);
  }
};

const SEO = ({ metadata }) => {
  const serializedMetadata = JSON.stringify(metadata);

  useEffect(() => {
    applySeoMetadata(JSON.parse(serializedMetadata));
  }, [serializedMetadata]);

  return null;
};

export default SEO;
