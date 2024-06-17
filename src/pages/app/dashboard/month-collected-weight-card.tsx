import { useQuery } from '@tanstack/react-query'
import { LeafyGreen } from 'lucide-react'

import { getCollectedWeight } from '@/api/get-collected-weight'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { DifferentialPercentage } from './differential-percentage'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthCollectedWeightCard() {
  const { data: monthWeightCollected } = useQuery({
    queryKey: ['bagsCollected'],
    queryFn: getCollectedWeight,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Pesagem coletada (mês)
        </CardTitle>
        <LeafyGreen className="size-4 text-moss-green-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthWeightCollected ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthWeightCollected.pesagemAtual} Kg
            </span>
            <p className="text-xs">
              <DifferentialPercentage
                valueDifferentialPercentage={
                  monthWeightCollected.valorDiferenca
                }
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
