import { Helmet } from 'react-helmet-async'

import { ReportsInvoiceTable } from './reports-invoice-table'
import { ReportsMaterialTable } from './reports-material-table'

export function Reports() {
  return (
    <>
      <Helmet title="Relatórios" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>

        <div className="grid grid-cols-2 gap-3">
          <ReportsMaterialTable />

          <ReportsInvoiceTable />
        </div>
      </div>
    </>
  )
}
