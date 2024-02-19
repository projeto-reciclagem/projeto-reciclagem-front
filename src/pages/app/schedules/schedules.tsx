import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ScheduleTableFilters } from './schedule-table-filters'
import { ScheduleTableRow } from './schedule-table-row'

export function Schedules() {
  return (
    <>
      <Helmet title="Agendamentos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Agendamentos</h1>
        <div className="space-y-2.5">
          <ScheduleTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[132px]">Data da retirada</TableHead>
                  <TableHead className="w-[140px]">Pesagem*</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 8 }).map((_, i) => (
                  <ScheduleTableRow key={i} />
                ))}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>

        <p className="text-xs font-medium leading-tight">
          *A pesagem informada sempre será em quantidade de bags de material
        </p>
      </div>
    </>
  )
}
