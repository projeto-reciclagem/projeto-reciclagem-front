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
  fkCooperativa: number
  fkCondominio: number
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
function getPriceMaterials() {
  api.get('/materiais/precos/listar').then((res) => {
    return res.data
  })
}

// GET: /materiais/precos/listar/cooperativa/{id}
function getPriceMaterialsByCooperative() {
  const id = 0
  api.get(`/materiais/precos/listar/cooperativa/${id}`).then((res) => {
    return res.data
  })
}

// POST: /materiais/precos/cadastrar
function addPriceMaterial(data: MaterialsProps) {
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
function updatePriceMaterial(data: MaterialsProps) {
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
function getAllCooperatives() {
  api.get('/cooperativas/listar').then((res) => {
    return res.data
  })
}

// GET: /cooperativas/buscar/{id}
function getCooperativeById() {
  const id = 0
  api.get(`/cooperativas/buscar/${id}`).then((res) => {
    return res.data
  })
}

// POST: /cooperativas/cadastrar
function addCooperative(data: CooperativeProps) {
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
function exportCooperativeData(nomeArq: string) {
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
function updateCooperativeData(data: CooperativeProps) {
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
function deleteCooperative() {
  const id = 0
  api.delete(`/cooperativas/deletar/${id}`).then((res) => {
    return res.data
  })
}

// Requisições Condomínios
// GET: /condominios/listar
function getAllCondos() {
  api.get('/condominios/listar').then((res) => {
    return res.data
  })
}

// GET: /condominios/buscar/{id}
function getCondoById() {
  const id = 0
  api.get(`/condominios/buscar/${id}`).then((res) => {
    return res.data
  })
}

// POST: /condominios/cadastrar
function addCondo(data: CondoProps) {
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
function updateCondoData(data: CondoProps) {
  const id = 0
  api
    .put(`/condominios/atualizar/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}
// DELETE: /condominios/deletar/{id}
function deleteCondo() {
  const id = 0
  api.delete(`/condominios/deletar/${id}`).then((res) => {
    return res.data
  })
}

// Requisições Agendamentos
// GET: /agendamentos/listar
function getAllSchedules() {
  api.get('/agendamentos/listar').then((res) => {
    return res.data
  })
}

// GET: /agendamentos/historico
function getSchedulesHistory() {
  api.get('/agendamentos/historico').then((res) => {
    return res.data
  })
}

// GET: /agendamentos/buscar/data
function getSchedulesByDate(date: Date) {
  api.get('/agendamentos/historico').then((res) => {
    return res.data
  })
}

// GET: /agendamentos/ultima-coleta/{id}
function getLastSchedule() {
  const id = 0
  api.get(`/agendamentos/ultima-coleta/${id}`).then((res) => {
    return res.data
  })
}

// GET: /agendamentos/coletas/ultima-semana/{id}
function getLastWeekCollectSchedules() {
  const id = 0
  api.get(`/agendamentos/coletas/ultima-semana/${id}`).then((res) => {
    return res.data
  })
}

// GET: /agendamentos/coletas-solicitadas/mes/{id}
function getRequestedSchedulesOfMonth() {
  const id = 0
  api.get(`/agendamentos/coletas-solicitadas/mes/${id}`).then((res) => {
    return res.data
  })
}

// GET: /agendamentos/atendimentos/ultima-semana/{id}
function getLastWeekSchedules() {
  const id = 0
  api.get(`/agendamentos/atendimentos/ultima-semana/${id}`).then((res) => {
    return res.data
  })
}

// POST: /agendamentos/cadastrar
function addSchedule(data: ScheduleProps) {
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
function updateSchedule(data: ScheduleProps) {
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
function deleteSchedule(data: ScheduleProps) {
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
function loginUser(data: UserProps) {
  api
    .post('/usuarios/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return res.data
    })
}

// Requisições Material-Coletado
// GET: /materiais/coletados/valor-total/mes/{id}
function getTotalPriceOfMaterialsCollectedLastMonth() {
  const id = 0
  api.get(`/materiais/coletados/valor-total/mes/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/total-coletado/semana/{id}
function getTotalAmountMaterialsCollectedLastWeek() {
  const id = 0
  api.get(`/materiais/coletados/total-coletado/semana/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/reciclagem-semanal/{id}
function getAmountCollectedByWeek() {
  const id = 0
  api.get(`/materiais/coletados/reciclagem-semanal/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/porcentagem-material/{id}
function getPercentMaterial() {
  const id = 0
  api.get(`/materiais/coletados/total-coletado/semana/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/material-por-coleta/ano/{id}
function getTotalAmountMaterialsCollectedLastWeek() {
  const id = 0
  api.get(`/materiais/coletados/total-coletado/semana/${id}`).then((res) => {
    return res.data
  })
}

// GET: /materiais/coletados/mais-coletado/{id}
function getMostCollectedMaterial() {
  const id = 0
  api.get(`/materiais/coletados/total-coletado/semana/${id}`).then((res) => {
    return res.data
  })
}

// POST: /materiais/coletados/cadastrar
function addCollectedMaterials(data: CollectedMaterialsProps) {
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
function addUserImage(data: UploadImageProps) {
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
