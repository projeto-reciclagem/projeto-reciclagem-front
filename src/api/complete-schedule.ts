import { api } from '@/lib/axios'

interface CompleteScheduleParams {
  scheduleId: number
}

export async function completeSchedule({ scheduleId }: CompleteScheduleParams) {
  await api.patch(`/agendamentos/${scheduleId}/complete`)
}
