import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { getMaterialPercentageCollected } from '@/api/get-material-percentage-collected'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const COLORS = [
  colors.blue[500],
  colors.red[500],
  colors.yellow[500],
  colors.green[700],
]

export function MaterialPercentageChart() {
  const { data: materialPercentage } = useQuery({
    queryKey: ['metrics', 'material-percentage'],
    queryFn: getMaterialPercentageCollected,
  })

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center">
          <CardTitle className="text-base font-medium">
            Percentual de material coletado (mês)
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {materialPercentage ? (
          <ResponsiveContainer width="100%" height={260}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={materialPercentage}
                dataKey="percentual"
                nameKey="material"
                cx="50%"
                cy="50%"
                outerRadius={86}
                innerRadius={64}
                strokeWidth={8}
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180
                  const radius = 12 + innerRadius + (outerRadius - innerRadius)
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {materialPercentage[index].material.length > 12
                        ? materialPercentage[index].material
                            .substring(0, 12)
                            .concat('...')
                        : materialPercentage[index].material}{' '}
                      ({value}%)
                    </text>
                  )
                }}
              >
                {materialPercentage.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      className="hover:opacity-80"
                    />
                  )
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
