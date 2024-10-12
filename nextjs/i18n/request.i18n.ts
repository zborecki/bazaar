import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { defaultLanguage } from '#bazaar/constants/i18n.constants';
import { routing } from '#bazaar/i18n/routing.i18n';

export default getRequestConfig(async ({ locale }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === defaultLanguage
        ? import(`../languages/${defaultLanguage}.json`)
        : import(`../languages/${locale}.json`))
    ).default
  };
});
