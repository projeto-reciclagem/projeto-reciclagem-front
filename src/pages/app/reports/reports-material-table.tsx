import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ReportsMaterialTableHeader } from './reports-material-table-header'
import { ReportsTableRow } from './reports-table-row'

export function ReportsMaterialTable() {
  return (
    <div>
      <ReportsMaterialTableHeader />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-3"></TableHead>
              <TableHead className="w-[90px]">Material</TableHead>
              <TableHead className="w-[120px]">Valor p/Kilo</TableHead>
              <TableHead className="w-[150px]">Peso total coletado</TableHead>
              <TableHead className="w-16"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ReportsTableRow />
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
