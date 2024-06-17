import { createClient } from '@supabase/supabase-js'

import { env } from '@/env'

export const supabase = createClient(
  env.VITE_SUPABASE_PROJECT_URL,
  env.VITE_SUPABASE_SECRET_KEY,
)

export async function uploadFile(file: File) {
  const { data, error } = await supabase.storage
    .from('ecosystem-bucket')
    .upload(`public/${new Date().toISOString() + '-' + file.name}`, file)

  if (error) {
    return error.message
  } else {
    return data.path
  }
}

export async function getProfilePictureUrl(filePath: string) {
  const { data } = await supabase.storage
    .from('ecosystem-bucket')
    .getPublicUrl(filePath)

  return data.publicUrl
}
