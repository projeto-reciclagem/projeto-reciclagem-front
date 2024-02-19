import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  {
    date: '10/12',
    coletas: 30,
  },
  {
    date: '11/12',
    coletas: 12,
  },
  {
    date: '12/12',
    coletas: 50,
  },
  {
    date: '13/12',
    coletas: 8,
  },
  {
    date: '14/12',
    coletas: 6,
  },
  {
    date: '15/12',
    coletas: 16,
  },
  {
    date: '16/12',
    coletas: 28,
  },
]

export function OverviewChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Coletas no período
          </CardTitle>
          <CardDescription>Coleta diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} style={{ fontSize: 12 }}>
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
              dataKey="coletas"
              stroke="#549431"
            />

            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
