import { api } from '@/lib/axios'

interface GetMonthSchedulesRealized {
  qntMesAtual: number
  qntMesAnterior: number
  vlrPorcentagemDiferenca: number
}

export async function getSchedulesCompleted() {
  const id = sessionStorage.getItem('id')

  const response = await api.get<GetMonthSchedulesRealized>(
    `/agendamentos/coletas-realizadas/mes/${id}`,
  )

  return response.data
}
