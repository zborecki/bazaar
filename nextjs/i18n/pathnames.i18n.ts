import { GLOBAL_ROUTE } from '#bazaar/constants/routes.constants';
import { Pathnames } from '#bazaar/types/i18n';

export const pathnames: Pathnames = {
  '/': GLOBAL_ROUTE.ROOT,
  '/wishlist': {
    en: '/wishlist',
    pl: '/koszyk'
  }
};
