/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    // Private
    DOMAIN_NAME: string;
    PORT: string;

    // Public
    NEXT_PUBLIC_CMS_BASE_URL: string;
  }
}
