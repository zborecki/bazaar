import { NextUIProvider } from '@nextui-org/system';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { FC } from 'react';

import { RootLayoutProps } from '#nz/types/props/layouts.props';

import 'normalize.css';
import '#nz/theme/scss/_globals.scss';

export const metadata: Metadata = {
  title: 'Bazaar'
};

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider>
            { children }
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
