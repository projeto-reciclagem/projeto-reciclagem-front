import { CalendarCheck, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { ScheduleDetails } from './schedule-details'

export function ScheduleTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="size-3" />
              <span className="sr-only">Detalhes do agendamento</span>
            </Button>
          </DialogTrigger>

          <ScheduleDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-medium">Condomínio KeyMoema</TableCell>
      <TableCell>há 1 dia</TableCell>
      <TableCell>22/03/2024</TableCell>
      <TableCell>3 bags</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-yellow-400"></span>
          <span className="font-medium">Pendente</span>
        </div>
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <CalendarCheck className="mr-2 size-4 text-teal-600" />
          Confirmar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 size-4 text-red-500" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
