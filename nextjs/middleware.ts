import createMiddleware from 'next-intl/middleware';

import { routing } from '#bazaar/i18n/routing.i18n';

export default createMiddleware(routing, {
  localeDetection: false
});

export const config = {
  matcher: [
    '/',
    '/(en|pl)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
