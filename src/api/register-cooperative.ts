import { api } from '@/lib/axios'

interface RegisterCooperativeBody {
  nome: string
  cnpj: string
  email: string
  senha: string
}

export async function registerCooperative({
  nome,
  cnpj,
  email,
  senha,
}: RegisterCooperativeBody) {
  await api.post('/cooperativas/cadastrar', { nome, cnpj, email, senha })
}
