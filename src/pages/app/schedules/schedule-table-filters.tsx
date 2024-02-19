import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ScheduleTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="scheduled">Agendado</SelectItem>
          <SelectItem value="realized">Realizado</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" size="xs">
        <Search className="mr-2 size-4" /> Filtrar agendamentos
      </Button>
      <Button type="button" variant="outline" size="xs">
        <X className="mr-2 size-4" /> Remover filtros
      </Button>
    </form>
  )
}
