export const DEFAULT_SITE_URL = 'https://davisantoss.vercel.app';

export const siteConfig = Object.freeze({
  name: 'Davi Santos',
  author: 'Davi Santos',
  locale: 'pt_BR',
  home: {
    title: 'Davi Santos | Desenvolvedor Full Stack',
    description:
      'Portfólio de Davi Santos, desenvolvedor Full Stack e graduando em Engenharia de Computação na FURG, com projetos em React, TypeScript, Node.js, Python e IA aplicada.',
  },
  articles: {
    title: 'Artigos | Davi Santos',
    description:
      'Artigos técnicos de Davi Santos sobre desenvolvimento de software, backend, inteligência artificial e tecnologia.',
  },
  profiles: [
    'https://github.com/DaviSant0s',
    'https://www.linkedin.com/in/davisantoss/',
  ],
});

export function normalizeSiteUrl(value = DEFAULT_SITE_URL) {
  try {
    const url = new URL(value || DEFAULT_SITE_URL);

    if (!['http:', 'https:'].includes(url.protocol)) {
      return DEFAULT_SITE_URL;
    }

    return url.href.replace(/\/+$/, '');
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function toAbsoluteUrl(path, siteUrl = DEFAULT_SITE_URL) {
  return new URL(path, `${normalizeSiteUrl(siteUrl)}/`).href;
}
