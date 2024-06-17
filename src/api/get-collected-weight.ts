import { api } from '@/lib/axios'

interface CollectedWeightResponse {
  pesagemAtual: number
  pesagemAnterior: number
  valorDiferenca: number
}

export async function getCollectedWeight() {
  const response = await api.get<CollectedWeightResponse>(
    `/materiais/pesagem-coletada`,
  )

  return response.data
}
