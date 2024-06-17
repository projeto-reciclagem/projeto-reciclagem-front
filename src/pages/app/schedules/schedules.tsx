import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getSchedules } from '@/api/get-schedules'
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
import { ScheduleTableSkeleton } from './schedule-table-skeleton'

export function Schedules() {
  const [searchParams, setSearchParams] = useSearchParams()

  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? 1)

  const perPage = z.coerce.number().parse(searchParams.get('perPage') ?? 8)

  const { data: result, isLoading: isLoadingSchedules } = useQuery({
    queryKey: ['schedules', pageIndex, perPage, customerName, status],
    queryFn: () =>
      getSchedules({
        pageIndex,
        perPage,
        nomeCliente: customerName,
        status: status === 'all' ? null : status,
      }),
  })

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

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
                {result &&
                  result.schedules.map((schedule) => {
                    return (
                      <ScheduleTableRow key={schedule.id} schedule={schedule} />
                    )
                  })}
              </TableBody>
            </Table>
            {isLoadingSchedules && <ScheduleTableSkeleton />}
          </div>

          {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )}
        </div>

        <p className="text-xs font-medium leading-tight">
          *A pesagem informada sempre será em quantidade de bags de material
        </p>
      </div>
    </>
  )
}
