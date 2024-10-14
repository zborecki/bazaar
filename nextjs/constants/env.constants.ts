const DEFAULT_PORT: number = 3000;

export const PRIVATE_ENV = {
  DOMAIN_NAME: process.env.DOMAIN_NAME
    ? `https://${process.env.DOMAIN_NAME}`
    : `http://localhost:${process.env.PORT || DEFAULT_PORT}`,
  PORT: process.env.PORT || DEFAULT_PORT
};

export const PUBLIC_ENV = {
  CMS_BASE_URL: process.env.NEXT_PUBLIC_CMS_BASE_URL || ''
};

export const DEVELOPMENT_MODE = process.env.NODE_ENV === 'development';
export const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
