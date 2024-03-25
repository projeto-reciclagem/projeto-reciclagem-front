import { useQuery } from '@tanstack/react-query'
import { LeafyGreen } from 'lucide-react'

import { getCollectedBags } from '@/api/get-collected-bags'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthCollectedBagsCard() {
  const { data: monthBagsCollected } = useQuery({
    queryKey: ['bagsCollected'],
    queryFn: getCollectedBags,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Bags coletadas (mês)
        </CardTitle>
        <LeafyGreen className="size-4 text-moss-green-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthBagsCollected ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthBagsCollected.qntMesAtual}
            </span>
            <p className="text-xs">
              <span className="font-semibold text-moss-green-500">
                +{monthBagsCollected.vlrPorcentagemDiferenca}%
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
