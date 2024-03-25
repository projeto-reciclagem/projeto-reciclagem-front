import { useQuery } from '@tanstack/react-query'
import { Recycle } from 'lucide-react'

import { getCooperativeProfile } from '@/api/get-cooperative-profile'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function MonthMostCollectedMaterialCard() {
  const { isLoading: isProfileLoading } = useQuery({
    queryKey: ['cooperativeProfile'],
    queryFn: getCooperativeProfile,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Material mais coletado (mês)
        </CardTitle>
        <Recycle className="size-4 text-moss-green-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        {isProfileLoading ? (
          <Skeleton className="h-14 w-64" />
        ) : (
          <>
            <span className="text-2xl font-bold tracking-tight text-red-500">
              Plástico
            </span>
            <p className="text-xs">
              <span className="font-semibold text-yellow-500">Metal</span> foi o
              material mais coletado do mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
