import { api } from '@/lib/axios'

interface MostCollectedMaterialsResponse {
  materialAtual: string
  materialAnterior: string
}

export async function getMostCollectedMaterials() {
  const response = await api.get<MostCollectedMaterialsResponse>(
    `/materiais/mais-coletado`,
  )

  return response.data
}
