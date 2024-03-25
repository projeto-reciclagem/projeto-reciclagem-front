import { api } from '@/lib/axios'

export async function getSchedulesCompleted() {
  const id = sessionStorage.getItem('id')

  const response = await api.get(`/agendamentos/coletas-realizadas/mes/${id}`)

  return response.data
}
