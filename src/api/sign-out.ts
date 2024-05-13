import { api } from '@/lib/axios'

export async function signOut() {
  return await api.post('/usuarios/sign-out')
}
