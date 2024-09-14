import { Environment } from '#nz/types/common';

export const ENV: Environment = {
  CMS_BASE_URL: process.env.NEXT_PUBLIC_CMS_BASE_URL || ''
};
