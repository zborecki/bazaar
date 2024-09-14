import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

import { defaultLocale, locales } from '#nz/i18n/constants.i18n';

export const routing = defineRouting({
  defaultLocale,
  locales
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter
} = createSharedPathnamesNavigation(routing);
