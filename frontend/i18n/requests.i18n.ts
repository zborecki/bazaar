import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { routing } from '#nz/i18n/routing.i18n';

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale)) notFound();

  return {
    messages: (await import(`../translations/${locale}.json`)).default
  };
});
