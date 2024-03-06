import { useQuery } from '@tanstack/react-query'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { getCooperativeProfile } from '@/api/get-cooperative-profile'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const data = [
  {
    material: 'Papel',
    percentual: 10,
  },
  {
    material: 'Plástico',
    percentual: 60,
  },
  {
    material: 'Metal',
    percentual: 15,
  },
  {
    material: 'Vidro',
    percentual: 15,
  },
]

const COLORS = [
  colors.blue[500],
  colors.red[500],
  colors.yellow[500],
  colors.green[700],
]

export function MaterialPercentageChart() {
  const { isLoading: isProfileLoading } = useQuery({
    queryKey: ['cooperativeProfile'],
    queryFn: getCooperativeProfile,
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
        {isProfileLoading ? (
          <Skeleton className="h-64 w-full" />
        ) : (
          <ResponsiveContainer width="100%" height={260}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={data}
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
                      {data[index].material.length > 12
                        ? data[index].material.substring(0, 12).concat('...')
                        : data[index].material}{' '}
                      ({value}%)
                    </text>
                  )
                }}
              >
                {data.map((_, index) => {
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
        )}
      </CardContent>
    </Card>
  )
}
