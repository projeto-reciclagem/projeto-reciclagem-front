import { api } from '@/lib/axios'

interface CancelScheduleParams {
  scheduleId: number
}

export async function cancelSchedule({ scheduleId }: CancelScheduleParams) {
  await api.patch(`/agendamentos/${scheduleId}/cancel`)
}
