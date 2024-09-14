import { PropsWithChildren } from 'react';

export interface RootLayoutProps extends PropsWithChildren {
  params: {
    locale: string;
  }
}
