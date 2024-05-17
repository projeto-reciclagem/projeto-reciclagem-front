import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarCheck, Check, Search, X } from 'lucide-react'

import { approveSchedule } from '@/api/approve-schedule'
import { cancelSchedule } from '@/api/cancel-schedule'
import { completeSchedule } from '@/api/complete-schedule'
import { GetSchedulesResponse } from '@/api/get-schedules'
import { ScheduleStatus } from '@/components/schedule-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { ScheduleDetails } from './schedule-details'

interface ScheduleTableRowProps {
  schedule: {
    id: number
    datAgendamento: string
    datRetirada: Date
    qtdBags: number
    status: 'pending' | 'canceled' | 'scheduled' | 'completed'
    cooperativa: {
      nome: string
      email: string
      cep: string
      logradouro: string
      bairro: string
      cidade: string
      complemento: string
      numero: string
    }
    condominio: {
      nome: string
      email: string
      cep: string
      logradouro: string
      bairro: string
      cidade: string
      complemento: string
      numero: string
    }
  }
}

export function ScheduleTableRow({ schedule }: ScheduleTableRowProps) {
  const queryClient = useQueryClient()

  function updateScheduleStatusOnCache(
    scheduleId: number,
    status: ScheduleStatus,
  ) {
    const schedulesListCache = queryClient.getQueriesData<GetSchedulesResponse>(
      {
        queryKey: ['schedules'],
      },
    )

    schedulesListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      queryClient.setQueryData<GetSchedulesResponse>(cacheKey, {
        ...cacheData,
        schedules: cacheData.schedules.map((schedule) => {
          if (schedule.id === scheduleId) {
            return { ...schedule, status }
          }

          return schedule
        }),
      })
    })
  }

  const { mutateAsync: cancelScheduleFn, isPending: isCancelingSchedule } =
    useMutation({
      mutationFn: cancelSchedule,
      async onSuccess(_, { scheduleId }) {
        updateScheduleStatusOnCache(scheduleId, 'canceled')
      },
    })

  const { mutateAsync: approveScheduleFn, isPending: isApprovingSchedule } =
    useMutation({
      mutationFn: approveSchedule,
      async onSuccess(_, { scheduleId }) {
        updateScheduleStatusOnCache(scheduleId, 'scheduled')
      },
    })

  const { mutateAsync: completeScheduleFn, isPending: isCompletingSchedule } =
    useMutation({
      mutationFn: completeSchedule,
      async onSuccess(_, { scheduleId }) {
        updateScheduleStatusOnCache(scheduleId, 'completed')
      },
    })

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
      <TableCell className="font-medium">{schedule.condominio.nome}</TableCell>
      <TableCell>
        {formatDistanceToNow(Date.parse(schedule.datAgendamento), {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>22/03/2024</TableCell>
      <TableCell>{schedule.qtdBags} bags</TableCell>
      <TableCell>
        <ScheduleStatus status={schedule.status} />
      </TableCell>
      <TableCell>
        {schedule.status === 'pending' && (
          <Button
            disabled={isApprovingSchedule}
            variant="outline"
            size="xs"
            onClick={() => approveScheduleFn({ scheduleId: schedule.id })}
          >
            <CalendarCheck className="mr-2 size-4 text-blue-500" />
            Agendar
          </Button>
        )}

        {schedule.status === 'scheduled' && (
          <Button
            disabled={isCompletingSchedule}
            variant="outline"
            size="xs"
            onClick={() => completeScheduleFn({ scheduleId: schedule.id })}
          >
            <Check className="mr-2 size-4 text-teal-600" />
            Concluir
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          disabled={
            !['pending', 'scheduled'].includes(schedule.status) ||
            isCancelingSchedule
          }
          onClick={() => cancelScheduleFn({ scheduleId: schedule.id })}
          variant="ghost"
          size="xs"
        >
          <X className="mr-2 size-4 text-red-500" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
