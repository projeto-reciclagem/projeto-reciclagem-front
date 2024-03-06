import { useQuery } from '@tanstack/react-query'
import { LeafyGreen } from 'lucide-react'

import { getCooperativeProfile } from '@/api/get-cooperative-profile'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function MonthCollectedBagsCard() {
  const { isLoading: isProfileLoading } = useQuery({
    queryKey: ['cooperativeProfile'],
    queryFn: getCooperativeProfile,
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
        {isProfileLoading ? (
          <Skeleton className="h-14 w-64" />
        ) : (
          <>
            <span className="text-2xl font-bold tracking-tight">20</span>
            <p className="text-xs">
              <span className="font-semibold text-moss-green-500">+2%</span> em
              relação ao mês passado.
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
