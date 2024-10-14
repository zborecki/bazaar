import { MetadataRoute } from 'next';

import { PRIVATE_ENV } from '#bazaar/constants/env.constants';
import { GLOBAL_ROUTE, ROUTE } from '#bazaar/constants/routes.constants';
import { Locale, getPathname, routing } from '#bazaar/i18n/routing.i18n';

type Href = Parameters<typeof getPathname>[0]['href'];

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ href, locale });
  return `${PRIVATE_ENV.DOMAIN_NAME}/${locale}${pathname === '/' ? '' : pathname}`;
}

function getEntry(href: Href) {
  return {
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale: string) => [locale, getUrl(href, locale)])
      )
    },
    lastModified: new Date(),
    url: getUrl(href, routing.defaultLocale)
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      ...getEntry(GLOBAL_ROUTE.ROOT),
      changeFrequency: 'always',
      priority: 1
    },
    {
      ...getEntry(ROUTE.WISHLIST),
      changeFrequency: 'always',
      priority: 0.8
    }
  ];
}
