import { Helmet } from 'react-helmet-async'

// import { MaterialPercentageChart } from './material-percentage-chart'
import { MonthCanceledSchedulesAmountCard } from './month-canceled-schedules-amount-card'
import { MonthCollectedWeightCard } from './month-collected-weight-card'
import { MonthCollectsCard } from './month-collects-card'
import { MonthMostCollectedMaterialCard } from './month-most-collected-material-card'
import { OverviewChart } from './overview-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Geral" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Visão Geral</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthCollectsCard />
          <MonthCollectedWeightCard />
          <MonthMostCollectedMaterialCard />
          <MonthCanceledSchedulesAmountCard />
        </div>
      </div>

      <div className="grid gap-4">
        <OverviewChart />
        {/* <MaterialPercentageChart /> */}
      </div>
    </>
  )
}
