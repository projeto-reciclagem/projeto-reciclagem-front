import { api } from '@/lib/axios'

interface SignInBody {
  email: string
  senha: string
}

interface SignInResponse {
  id: number
  email: string
  token: string
  tipoUsuario: 'COOPERATIVA' | 'CONDOMINIO'
}

export async function signIn({ email, senha }: SignInBody) {
  const response = await api.post<SignInResponse>('/usuarios/login', {
    email,
    senha,
  })

  return response.data
}
