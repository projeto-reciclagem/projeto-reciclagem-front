import { api } from '@/lib/axios'

export interface GetSchedulesRequest {
  scheduleId: number
}

export interface GetSchedulesResponse {
  id: number
  datAgendamento: string
  datRetirada: string
  qtBag: number
  status: 'pending' | 'scheduled' | 'completed' | 'canceled'
  cooperativa: {
    id: number
    nome: string
    cnpj: string
    usuario: {
      id: number
      email: string
      imgUsuario: string
      endereco: {
        id: number
        cep: string
        logradouro: string
        numero: number
        bairro: string
        cidade: string
        complemento: string | null
        latitude: number
        longitude: number
      }
    }
  }
  condominio: {
    id: number
    nome: string
    cnpj: string
    usuario: {
      id: number
      email: string
      imgUsuario: string
      endereco: {
        id: number
        cep: string
        logradouro: string
        numero: number
        bairro: string
        cidade: string
        complemento: string | null
        latitude: number
        longitude: number
      }
    }
  }
}

export async function getScheduleDetails({ scheduleId }: GetSchedulesRequest) {
  const response = await api.get<GetSchedulesResponse>(
    `/agendamentos/detalhes-agendamento/${scheduleId}`,
  )

  return response.data
}
