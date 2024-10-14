export interface Internationalization {
  locale: string;
}

export type Locale = 'en' | 'pl';

export interface Pathnames {
  [pathname: string]: Record<Locale, string> | string;
}
