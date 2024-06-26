import { api } from '@/lib/axios'

interface GetMonthSchedulesRealized {
  qntMesAtual: number
  qntMesAnterior: number
  valorDiferenca: number
}

export async function getSchedulesCompleted() {
  const response = await api.get<GetMonthSchedulesRealized>(
    `/agendamentos/realizados`,
  )

  return response.data
}
