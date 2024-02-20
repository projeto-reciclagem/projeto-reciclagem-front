import axios from 'axios'

import { env } from '@/env'

const token = sessionStorage?.getItem('token')

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${token || ''}`,
  },
})
