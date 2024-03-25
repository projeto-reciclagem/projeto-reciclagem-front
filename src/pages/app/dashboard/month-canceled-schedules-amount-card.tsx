import { useQuery } from '@tanstack/react-query'
import { Ban } from 'lucide-react'


import { getCanceledSchedules } from '@/api/get-canceled-schedules'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'



export function MonthCanceledSchedulesAmountCard() {
  const { data: monthCanceledSchedules } = useQuery({
    queryKey: ['canceledSchedules'],
    queryFn: getCanceledSchedules,
  )}
                                                    
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <Ban className="size-4 text-moss-green-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledSchedules ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledSchedules.qntMesAtual}
            </span>
            <p className="text-xs">
              <span className="font-semibold text-moss-green-500">
                +{monthCanceledSchedules.vlrPorentagemDiferanca}%
              </span>{' '}
              em relação ao mês passado.
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
