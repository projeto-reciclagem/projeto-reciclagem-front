import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export function ScheduleDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Agendamento - Condomínio KeyMoema</DialogTitle>
        <DialogDescription>Detalhes do agendamento</DialogDescription>
      </DialogHeader>

      <div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-yellow-400"></span>
                  <span className="font-medium">Pendente</span>
                </div>
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
                <span className="font-medium">3 bags</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>E-mail</TableCell>
              <TableCell className="flex justify-end">
                <span className="font-medium">
                  condominio-keymoema@gmail.com
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Telefone</TableCell>
              <TableCell className="flex justify-end">
                <span className="font-medium">(19) 99389-2828</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Endereço</TableCell>
              <TableCell className="flex justify-end">
                <span className="font-medium">Rua Haddock Lobo, 595</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Bairro</TableCell>
              <TableCell className="flex justify-end">
                <span className="font-medium">Vila Cerqueira Cesar</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
