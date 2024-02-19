import { Helmet } from 'react-helmet-async'

import { MonthCanceledSchedulesAmountCard } from './month-canceled-schedules-amount-card'
import { MonthCollectedBagsCard } from './month-collected-bags-card'
import { MonthCollectsCard } from './month-collects-card'
import { MonthMostCollectedMaterialCard } from './month-most-collected-material-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Geral" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Visão Geral</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthCollectsCard />
          <MonthCollectedBagsCard />
          <MonthMostCollectedMaterialCard />
          <MonthCanceledSchedulesAmountCard />
        </div>
      </div>

      <div className="grid grid-cols-9 gap-4"></div>
    </>
  )
}
