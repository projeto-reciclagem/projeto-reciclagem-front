import { format } from 'date-fns'

import { api } from '@/lib/axios'

interface GetCollectsFromPeriodProps {
  initialDate?: Date
  finalDate?: Date
}

export type GetCollectsFromPeriodResponse = {
  dataColeta: string
  coletados: number
}[]

export async function getCollectsFromPeriod({
  initialDate,
  finalDate,
}: GetCollectsFromPeriodProps) {
  const formattedInitialDate = format(initialDate!, 'yyyy-MM-dd')
  const formattedFinalDate = format(finalDate!, 'yyyy-MM-dd')

  const response = await api.get<GetCollectsFromPeriodResponse>(
    `/agendamentos/realizados-periodo`,
    {
      params: {
        initialDate: formattedInitialDate,
        finalDate: formattedFinalDate,
      },
    },
  )

  return response.data
}
