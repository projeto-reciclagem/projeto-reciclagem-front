import { api } from '@/lib/axios'

interface CanceledSchedulesResponse {
  qntMesAtual: number
  qntMesAnterior: number
  vlrPorcentagemDiferenca: number
}

export async function getCanceledSchedules() {
  const response = await api.get<CanceledSchedulesResponse>(
    `/agendamentos/cancelados`,
  )

  return response.data
}
