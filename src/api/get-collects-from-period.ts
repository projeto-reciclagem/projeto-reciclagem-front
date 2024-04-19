import { format } from 'date-fns'

import { api } from '@/lib/axios'

interface GetCollectsFromPeriodProps {
  initialDate?: Date
  finalDate?: Date
}

export type GetCollectsFromPeriodResponse = {
  dataColeta: string
  qntTotal: number
}[]

export async function getCollectsFromPeriod({
  initialDate,
  finalDate,
}: GetCollectsFromPeriodProps) {
  const id = sessionStorage.getItem('id')

  const formattedInitialDate = format(initialDate!, 'yyyy-MM-dd')
  const formattedFinalDate = format(finalDate!, 'yyyy-MM-dd')

  const response = await api.get<GetCollectsFromPeriodResponse>(
    `/materiais/coletados/quantidade-coletas/diario/${id}`,
    {
      params: {
        dataInicial: formattedInitialDate,
        dataFinal: formattedFinalDate,
      },
    },
  )

  return response.data
}
