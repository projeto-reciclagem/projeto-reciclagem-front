import { api } from '@/lib/axios'

interface ApproveScheduleParams {
  scheduleId: number
}

export async function approveSchedule({ scheduleId }: ApproveScheduleParams) {
  await api.patch(`/agendamentos/${scheduleId}/approve`)
}
