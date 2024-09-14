import axios from 'axios';

import { ENV } from '#nz/constants/env.constants';

export const agent = axios.create({
  baseURL: ENV.CMS_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
