import {
  DEFAULT_SITE_URL,
  normalizeSiteUrl,
  siteConfig,
  toAbsoluteUrl,
} from '../../site.config';

export const SITE_URL = normalizeSiteUrl(import.meta.env.VITE_SITE_URL);

export { DEFAULT_SITE_URL, siteConfig, toAbsoluteUrl };
