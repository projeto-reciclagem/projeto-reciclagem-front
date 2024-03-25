import { api } from '@/lib/axios'

interface MostCollectedMaterialsResponse {
  materialMesAtual: string
  materialMesAnterior: string
}

export async function getMostCollectedMaterials() {
  const id = sessionStorage.getItem('id')

  const response = await api.get<MostCollectedMaterialsResponse>(
    `/materiais/coletados/mais-coletados/mes/${id}`,
  )

  return response.data
}
