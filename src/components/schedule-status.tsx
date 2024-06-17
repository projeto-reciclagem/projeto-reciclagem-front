export type ScheduleStatus = 'pending' | 'canceled' | 'scheduled' | 'completed'

interface ScheduleStatusProps {
  status: ScheduleStatus
}

const scheduleStatusMap: Record<ScheduleStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  scheduled: 'Agendado',
  completed: 'Concluído',
}

export function ScheduleStatus({ status }: ScheduleStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="size-2 rounded-full bg-yellow-400"
        />
      )}

      {status === 'canceled' && (
        <span data-testid="badge" className="size-2 rounded-full bg-red-500" />
      )}

      {status === 'scheduled' && (
        <span data-testid="badge" className="size-2 rounded-full bg-blue-400" />
      )}

      {status === 'completed' && (
        <span
          data-testid="badge"
          className="size-2 rounded-full bg-green-400"
        />
      )}

      <span className="font-medium">{scheduleStatusMap[status]}</span>
    </div>
  )
}
