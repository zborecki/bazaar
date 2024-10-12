import axios from 'axios';

import { PUBLIC_ENV } from '#bazaar/constants/env.constants';

export const axiosHelper = axios.create({
  baseURL: PUBLIC_ENV.CMS_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
