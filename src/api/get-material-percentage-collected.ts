import { api } from '@/lib/axios'

export type GetMaterialPercentageCollectedResponse = {
  material: string
  percentual: number
}[]

export async function getMaterialPercentageCollected() {
  const response = await api.get<GetMaterialPercentageCollectedResponse>(
    '/materiais/percentual-coletado',
  )

  return response.data
}
