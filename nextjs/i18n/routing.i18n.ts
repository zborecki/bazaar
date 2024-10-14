import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { defaultLanguage, languages } from '#bazaar/constants/i18n.constants';
import { pathnames } from '#bazaar/i18n/pathnames.i18n';

export const routing = defineRouting({
  defaultLocale: defaultLanguage,
  locales: languages,
  pathnames
});

export type Locale = (typeof routing.locales)[number];
export type Routes = keyof typeof routing.pathnames;

export const {
  Link, getPathname, redirect, usePathname, useRouter
} = createLocalizedPathnamesNavigation(routing);
