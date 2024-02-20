import { LeafyGreen } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCollectedBagsCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Bags coletadas (mês)
        </CardTitle>
        <LeafyGreen className="size-4 text-moss-green-500" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">20</span>
        <p className="text-xs">
          <span className="font-semibold text-moss-green-500">+2%</span> em
          relação ao mês passado.
        </p>
      </CardContent>
    </Card>
  )
}
