import { useQuery } from '@tanstack/react-query'
import { Recycle } from 'lucide-react'

import { getMostCollectedMaterials } from '@/api/get-most-collected-materials'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { LastMostCollectedMaterial } from './last-most-collected-material'
import { MetricCardSkeleton } from './metric-card-skeleton'
import { MostCollectedMaterialVariant } from './most-collected-material-variant'

export function MonthMostCollectedMaterialCard() {
  const { data: mostCollectedMaterials } = useQuery({
    queryKey: ['collectedMaterials'],
    queryFn: getMostCollectedMaterials,
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
        {mostCollectedMaterials ? (
          <>
            {mostCollectedMaterials.materialAtual ? (
              <MostCollectedMaterialVariant
                materialAtual={mostCollectedMaterials.materialAtual}
              />
            ) : (
              <span className="text-2xl font-bold tracking-tight">
                Sem coletas
              </span>
            )}
            <p className="text-xs">
              {mostCollectedMaterials.materialAnterior !== null ? (
                <LastMostCollectedMaterial
                  lastMaterial={mostCollectedMaterials.materialAnterior}
                />
              ) : (
                <>
                  <span className="font-semibold">Não houveram coletas</span>{' '}
                  foi o material mais coletado do mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
