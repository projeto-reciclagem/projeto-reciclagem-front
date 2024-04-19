import { api } from '@/lib/axios'

interface GetCooperativeProfileResponse {
  id: number
  nome: string
  email: string
  cnpj: string
  cep: string | null
  logradouro: string | null
  bairro: string | null
  cidade: string | null
  complemento: string | null
  latitude: string | null
  longitude: string | null
  imgUsuario: string | undefined
}

export async function getCooperativeProfile() {
  const id = sessionStorage.getItem('id')

  const response = await api.get<GetCooperativeProfileResponse>(
    `/cooperativas/buscar/${id}`,
  )

  return response.data
}
