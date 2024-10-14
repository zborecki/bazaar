import { MetadataRoute } from 'next';

import { DEVELOPMENT_MODE, PRIVATE_ENV, PRODUCTION_MODE } from '#bazaar/constants/env.constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: PRODUCTION_MODE ? '/' : undefined,
      disallow: DEVELOPMENT_MODE ? '/' : undefined,
      userAgent: '*'
    },
    sitemap: PRIVATE_ENV.DOMAIN_NAME
  };
}
