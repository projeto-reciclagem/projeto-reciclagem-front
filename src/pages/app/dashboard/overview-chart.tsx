import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { getCollectsFromPeriod } from '@/api/get-collects-from-period'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Label } from '@/components/ui/label'

export function OverviewChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  })

  const { data: dailyCollectsInPeriod } = useQuery({
    queryKey: ['metrics', 'collects-in-period'],
    queryFn: () =>
      getCollectsFromPeriod({
        initialDate: dateRange?.from,
        finalDate: dateRange?.to,
      }),
  })

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Coletas no período
          </CardTitle>
          <CardDescription>Coleta diária no período</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>Período</Label>
          <DateRangePicker date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {dailyCollectsInPeriod && (
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={dailyCollectsInPeriod} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value: number) => value.toLocaleString('pt-BR')}
              />

              <CartesianGrid vertical={false} className="stroke-black/20" />

              <Line
                type="linear"
                strokeWidth={2}
                dataKey="coletados"
                stroke="#549431"
              />

              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}
