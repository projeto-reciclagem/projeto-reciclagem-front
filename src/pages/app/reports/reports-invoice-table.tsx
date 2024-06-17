import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function ReportsInvoiceTable() {
  return (
    <div>
      <div className="items-center">
        <h2 className="mb-2 mt-1 text-xl font-medium tracking-tight">
          Comprovantes
        </h2>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16"></TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead className="w-[140px]">Data da Retirada</TableHead>
              <TableHead className="w-[150px]">Pesagem</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell className="font-medium">Key Moema</TableCell>
              <TableCell>22/05/2024</TableCell>
              <TableCell>50kg</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
