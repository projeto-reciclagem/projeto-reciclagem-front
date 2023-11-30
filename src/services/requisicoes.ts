import { api } from '../lib/axios'

interface MaterialsProps {
  vlrMaterial: number
  nome: string
  fkCooperativa: number
}

interface CooperativeProps {
  nome: string
  cnpj: string
  email: string
  senha: string
  cep?: string
  logradouro?: string
  bairro?: string
  cidade?: string
  complemento?: string
}

interface CondoProps {
  nome: string
  cnpj: string
  email: string
  senha: string
  cep?: string
  logradouro?: string
  bairro?: string
  cidade?: string
  complemento?: string
  qtdMoradores?: number
  qtdMoradias?: number
  qtdBags?: number
}

interface ScheduleProps {
  datRetirada: Date
  qtBag: number
  status: string
  fkCooperativa?: number
  fkCondominio?: number
}

interface UserProps {
  email: string
  senha: string
}

interface CollectedMaterialsProps {
  qntKgColetado: number
  fkAgendamento: number
  fkMaterialPreco: number
}

interface UploadImageProps {
  file: string
}

// Requisições Materiais

// GET: /materiais/precos/listar
export function getPriceMaterials() {
  api.get('/materiais/precos/listar').then((res) => {
    return res.data
  })
}

// GET: /materiais/precos/listar/cooperativa/{id}
export function getPriceMaterialsByCooperative() {
  const id = 0
  api.get(`/materiais/precos/listar/cooperativa/${id}`).then((res) => {
    return res.data
  })
}

// POST: /materiais/precos/cadastrar
export function addPriceMaterial(data: MaterialsProps) {
  api
    .post('/materiais/precos/cadastrar', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// PUT: /materiais/precos/atualizar/{id}
export function updatePriceMaterial(data: MaterialsProps) {
  const id = 0
  api
    .put(`/materiais/precos/atualizar/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// Requisições Cooperativas
// GET: /cooperativas/listar
export function getAllCooperatives() {
  api.get('/cooperativas/listar').then((res) => {
    return res.data
  })
}

// GET: /cooperativas/buscar/{id}
export function getCooperativeById() {
  const id = 0
  api.get(`/cooperativas/buscar/${id}`).then((res) => {
    return res.data
  })
}

// POST: /cooperativas/cadastrar
export function addCooperative(data: CooperativeProps) {
  api
    .post('/cooperativas/cadastrar', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// POST: /cooperativas/exportar-dados/{nomeArq}
export function exportCooperativeData(nomeArq: string) {
  api
    .post(`/cooperativas/exportar-dados/${nomeArq}`, {
      headers: {
        'Content-type': 'application/csv',
      },
    })
    .then((res) => {
      return res.data
    })
}

// PUT: /cooperativas/atualizar/{id}
export function updateCooperativeData(data: CooperativeProps) {
  const id = 0
  api
    .put(`/cooperativas/atualizar/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// DELETE: /cooperativas/deletar/{id}
export function deleteCooperative() {
  const id = 0
  api.delete(`/cooperativas/deletar/${id}`).then((res) => {
    return res.data
  })
}

// Requisições Condomínios
// GET: /condominios/listar
export function getAllCondos() {
  api.get('/condominios/listar').then((res) => {
    return res.data
  })
}

// GET: /condominios/buscar/{id}
export function getCondoById(id: string) {
  const data = api.get(`/condominios/buscar/${id}`).then((res) => {
    return res.data
  })

  return data
}

// POST: /condominios/cadastrar
export function addCondo(data: CondoProps) {
  api
    .post('/condominios/cadastrar', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}
// PUT: /condominios/atualizar/{id}
export function updateCondoData(data: CondoProps, id: number | null) {
  api
    .put(`/condominios/atualizar/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log(res.data)
    })
}
// DELETE: /condominios/deletar/{id}
export function deleteCondo() {
  const id = 0
  api.delete(`/condominios/deletar/${id}`).then((res) => {
    return res.data
  })
}

// Requisições Agendamentos
// GET: /agendamentos/listar
export function getAllSchedules() {
  api.get('/agendamentos/listar').then((res) => {
    return res.data
  })
}

// GET: /agendamentos/historico
export function getSchedulesHistory() {
  api.get('/agendamentos/historico').then((res) => {
    return res.data
  })
}

// GET: /agendamentos/buscar/data
export function getSchedulesByDate(date: Date) {
  api
    .get('/agendamentos/buscar/data', {
      params: {
        data: date,
      },
    })
    .then((res) => {
      return res.data
    })
}

// GET: /agendamentos/ultima-coleta/{id}
export function getLastSchedule() {
  const id = 0
  api.get(`/agendamentos/ultima-coleta/${id}`).then((res) => {
    return res.data
  })
}

// GET: /agendamentos/coletas/ultima-semana/{id}
export function getLastWeekCollectSchedules() {
  const id = 0
  api.get(`/agendamentos/coletas/ultima-semana/${id}`).then((res) => {
    return res.data
  })
}

// GET: /agendamentos/coletas-solicitadas/mes/{id}
export function getRequestedSchedulesOfMonth() {
  const id = 0
  api.get(`/agendamentos/coletas-solicitadas/mes/${id}`).then((res) => {
    return res.data
  })
}

// GET: /agendamentos/atendimentos/ultima-semana/{id}
export function getLastWeekSchedules() {
  const id = 0
  api.get(`/agendamentos/atendimentos/ultima-semana/${id}`).then((res) => {
    return res.data
  })
}

// POST: /agendamentos/cadastrar
export function addSchedule(data: ScheduleProps) {
  api
    .post('/agendamentos/cadastrar', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// PUT: /agendamentos/atualizar/{id}
export function updateSchedule(data: ScheduleProps) {
  const id = 0
  api
    .post(`/agendamentos/atualizar/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// DELETE: /agendamentos/deletar/{id}
export function deleteSchedule() {
  const id = 0
  api
    .post(`/agendamentos/deletar/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// Requisições Usuário
// POST: /usuarios/login
export function loginUser({ email, senha }: UserProps) {
  api
    .post(
      '/usuarios/login',
      {
        email,
        senha,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: '',
        },
      },
    )
    .then((res) => {
      if (res.status === 200 && res?.data) {
        sessionStorage.setItem('id', res.data.id)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('tipo', res.data.tipoUsuario)
      }
    })
    .catch((err) => {
      // TODO: dependendo dos erros vai fazer coisa diferente
      if (err.res.status === 404) {
        console.log('Usuário não encontrado')
      } else {
        console.log('Usuário inválido')
      }
    })
}

// Requisições Material-Coletado
// GET: /materiais/coletados/valor-total/mes/{id}
export function getTotalPriceOfMaterialsCollectedLastMonth() {
  const id = 0
  api.get(`/materiais/coletados/valor-total/mes/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/total-coletado/semana/{id}
export function getTotalAmountMaterialsCollectedLastWeek() {
  const id = 0
  api.get(`/materiais/coletados/total-coletado/semana/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/reciclagem-semanal/{id}
export function getAmountCollectedByWeek() {
  const id = 0
  api.get(`/materiais/coletados/reciclagem-semanal/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/porcentagem-material/{id}
export function getPercentMaterial() {
  const id = 0
  api.get(`/materiais/coletados/total-coletado/semana/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/material-por-coleta/ano/{id}
export function getTotalAmountMaterialsCollectedLastYear() {
  const id = 0
  api.get(`/materiais/coletados/total-coletado/semana/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/mais-coletado/{id}
export function getMostCollectedMaterial() {
  const id = 0
  api.get(`/materiais/coletados/total-coletado/semana/${id}`).then((res) => {
    return res.data
  })
}

// POST: /materiais/coletados/cadastrar
export function addCollectedMaterials(data: CollectedMaterialsProps) {
  api
    .post('/materiais/coletados/cadastrar', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// Requisições Imagem
// POST: /arquivo/upload-imagem
export function addUserImage(data: UploadImageProps) {
  api
    .post('/arquivo/upload-imagem', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}
