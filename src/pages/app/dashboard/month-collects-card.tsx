import { Truck } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCollectsCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Coletas feitas (mês)
        </CardTitle>
        <Truck className="size-4 text-moss-green-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          45 coletas feitas
        </span>
        <p className="text-xs">
          <span className="font-semibold text-moss-green-500">+2%</span> em
          relação ao mês passado.
        </p>
      </CardContent>
    </Card>
  )
}
