import { api } from '@/lib/axios'

export interface GetSchedulesQuery {
  nomeCliente?: string | null
  status?: string | null
  pageIndex?: number | null
  perPage?: number | null
}

export interface GetSchedulesResponse {
  schedules: {
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
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getSchedules({
  nomeCliente,
  pageIndex,
  perPage,
  status,
}: GetSchedulesQuery) {
  const response = await api.get<GetSchedulesResponse>('/agendamentos', {
    params: {
      nomeCliente,
      pageIndex,
      perPage,
      status,
    },
  })

  return response.data
}
