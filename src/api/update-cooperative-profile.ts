import { api } from '@/lib/axios'

interface updateCooperativeProfileBody {
  nome: string
  email: string
  imgUsuario?: string
  cnpj?: string
  senha?: string
  cep?: string
  logradouro?: string
  numero?: string
  bairro?: string
  cidade?: string
  complemento?: string
}

export async function updateCooperativeProfile({
  nome,
  email,
  cnpj,
  imgUsuario,
  senha,
  cep,
  logradouro,
  numero,
  bairro,
  cidade,
  complemento,
}: updateCooperativeProfileBody) {
  await api.patch('/cooperativas/atualizar', {
    nome,
    email,
    cnpj,
    imgUsuario,
    senha,
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    complemento,
  })
}
