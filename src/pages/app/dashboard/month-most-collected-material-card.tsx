import { Recycle } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthMostCollectedMaterialCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Material mais coletado (mês)
        </CardTitle>
        <Recycle className="size-4 text-moss-green-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight text-red-500">
          Plástico
        </span>
        <p className="text-xs">
          <span className="font-semibold text-yellow-500">Metal</span> foi o
          material mais coletado do mês passado
        </p>
      </CardContent>
    </Card>
  )
}
