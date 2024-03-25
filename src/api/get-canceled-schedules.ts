import { api } from '@/lib/axios'

interface CanceledSchedulesResponse {
  qntMesAtual: number
  qntMesAnterior: number
  vlrPorentagemDiferanca: number
}

export async function getCanceledSchedules() {
  const id = sessionStorage.getItem('id')

  const response = await api.get<CanceledSchedulesResponse>(
    `/agendamentos/total/cancelado/mes/${id}`,
  )

  return response.data
}
