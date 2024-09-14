'use client';

import Error from 'next/error';
import { redirect } from 'next/navigation';

import { defaultLocale } from '#nz/i18n/constants.i18n';

const Error404 = () => {
  redirect('/en'); // Works!
};

const Unknown = () => (
  <html lang={defaultLocale}>
    <body>
      <Error statusCode={404} />
    </body>
  </html>
);

export default Unknown;
