import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'

import { getScheduleDetails } from '@/api/get-schedule-details'
import { ScheduleStatus } from '@/components/schedule-status'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export interface ScheduleDetailsProps {
  scheduleId: number
  open: boolean
}

export function ScheduleDetails({ scheduleId, open }: ScheduleDetailsProps) {
  const { data: scheduleDetails } = useQuery({
    queryKey: ['schedule-details', scheduleId],
    queryFn: () => getScheduleDetails({ scheduleId }),
    enabled: open,
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Agendamento - {scheduleDetails?.condominio.nome}
        </DialogTitle>
        <DialogDescription>Detalhes do agendamento</DialogDescription>
      </DialogHeader>

      {scheduleDetails ? (
        <div>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell className="flex justify-end">
                  <ScheduleStatus status={scheduleDetails.status} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Data do agendamento</TableCell>
                <TableCell className="flex justify-end">
                  <span className="font-medium">22/03/2024</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Pesagem</TableCell>
                <TableCell className="flex justify-end">
                  <span className="font-medium">
                    {scheduleDetails.qtBag} bags
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>E-mail</TableCell>
                <TableCell className="flex justify-end">
                  <span className="font-medium">
                    {scheduleDetails.condominio.usuario.email}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Endereço</TableCell>
                <TableCell className="flex justify-end">
                  <span className="font-medium">
                    {scheduleDetails.condominio.usuario.endereco.logradouro},{' '}
                    {scheduleDetails.condominio.usuario.endereco.numero}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Bairro</TableCell>
                <TableCell className="flex justify-end">
                  <span className="font-medium">
                    {scheduleDetails.condominio.usuario.endereco.bairro}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex h-[240px] w-full items-center justify-center">
          <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
        </div>
      )}
    </DialogContent>
  )
}
