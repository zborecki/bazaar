import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '#nz/i18n/routing.i18n';

const i18nRouting = createMiddleware(routing, {
  localeDetection: false
});

export default async function middleware(request: NextRequest) {
  const response = i18nRouting(request);

  return response;
}

export const config = {
  matcher: ['/', '/(en)/:path*']
};
