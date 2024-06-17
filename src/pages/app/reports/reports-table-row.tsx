import { Cog } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

export function ReportsTableRow() {
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell className="font-medium">Papel</TableCell>
      <TableCell>R$ 5,00</TableCell>
      <TableCell>50kg</TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Cog className="size-3" />
              <span className="sr-only">Detalhes do agendamento</span>
            </Button>
          </DialogTrigger>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
