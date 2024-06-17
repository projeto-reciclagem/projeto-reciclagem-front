import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

export function ReportsMaterialTableHeader() {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h2 className="text-xl font-medium tracking-tight">Materiais</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="items-center gap-2" size="xs">
            <Plus className="size-4" /> Novo material
          </Button>
        </DialogTrigger>
      </Dialog>
    </div>
  )
}
