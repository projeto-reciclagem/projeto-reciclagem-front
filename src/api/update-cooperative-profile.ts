import { api } from '@/lib/axios'

interface updateCooperativeProfileBody {
  nome: string
  email: string
  cnpj?: string
  senha?: string
  cep?: string
  logradouro?: string
  bairro?: string
  cidade?: string
  complemento?: string
}

export async function updateCooperativeProfile({
  nome,
  email,
  cnpj,
  senha,
  cep,
  logradouro,
  bairro,
  cidade,
  complemento,
}: updateCooperativeProfileBody) {
  const id = sessionStorage.getItem('id')

  await api.put(`/cooperativas/atualizar/${id}`, {
    nome,
    email,
    cnpj,
    senha,
    cep,
    logradouro,
    bairro,
    cidade,
    complemento,
  })
}
