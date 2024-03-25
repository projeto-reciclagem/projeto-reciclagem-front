import { api } from '@/lib/axios'

interface CollectedBagsResponse {
  qntMesAtual: number
  qntMesAnterior: number
  vlrPorcentagemDiferenca: number
}

export async function getCollectedBags() {
  const id = sessionStorage.getItem('id')

  const response = await api.get<CollectedBagsResponse>(
    `/materiais/coletados/quantidade-bags/mes/${id}`,
  )

  return response.data
}
