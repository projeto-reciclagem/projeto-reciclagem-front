import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function ScheduleTableSkeleton() {
  return Array.from({ length: 8 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button disabled variant="outline" size="xs">
            <Search className="size-3" />
            <span className="sr-only">Detalhes do agendamento</span>
          </Button>
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[500px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[150px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[100px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[100px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[100px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[130px]" />
        </TableCell>
        <TableCell>
          <Skeleton className="h-4 w-[120px]" />
        </TableCell>
      </TableRow>
    )
  })
}
