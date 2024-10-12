import { PropsWithChildren } from 'react';

import { Internationalization } from '#bazaar/types/i18n';

export interface LocaleLayoutProps extends PropsWithChildren {
  params: Internationalization;
}
