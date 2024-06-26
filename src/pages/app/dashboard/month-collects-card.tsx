import { useQuery } from '@tanstack/react-query'
import { Truck } from 'lucide-react'

import { getSchedulesCompleted } from '@/api/get-schedules-realized'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { DifferentialPercentage } from './differential-percentage'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthCollectsCard() {
  const { data: schedulesRealized } = useQuery({
    queryKey: ['schedulesCompleted'],
    queryFn: getSchedulesCompleted,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Coletas feitas (mês)
        </CardTitle>
        <Truck className="size-4 text-moss-green-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        {schedulesRealized ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {schedulesRealized.qntMesAtual}
            </span>
            <p className="text-xs">
              <DifferentialPercentage
                valueDifferentialPercentage={schedulesRealized.valorDiferenca}
              />{' '}
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
