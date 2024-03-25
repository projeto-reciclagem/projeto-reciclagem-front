import { api } from '@/lib/axios'

interface RegisterCondoBody {
  nome: string
  cnpj: string
  email: string
  senha: string
}

export async function registerCondo({
  nome,
  cnpj,
  email,
  senha,
}: RegisterCondoBody) {
  await api.post('/condominios/cadastrar', { nome, cnpj, email, senha })
}
