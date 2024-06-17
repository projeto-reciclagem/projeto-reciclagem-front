import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
  VITE_SUPABASE_PROJECT_URL: z.string().url(),
  VITE_SUPABASE_SECRET_KEY: z.string().min(1),
})

export const env = envSchema.parse(import.meta.env)
