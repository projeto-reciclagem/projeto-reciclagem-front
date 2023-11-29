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
// GET: /agendamentos/historico
// GET: /agendamentos/buscar/data
// GET: /agendamentos/ultima-coleta/{id}
// GET: /agendamentos/coletas/ultima-semana/{id}
// GET: /agendamentos/colestas-solicitadas/mes/{id}
// GET: /agendamentos/atendimentos/ultima-semana/{id}
// POST: /agendamentos/cadastrar
// PUT: /agendamentos/atualizar/{id}
// DELETE: /agendamentos/deletar/{id}

// Requisições Usuário
// POST: /usuarios/login

// Requisições Material-Coletado
// GET: /materiais/coletados/valor-total/mes/{id}
// GET: /materiais/coletados/total-coletado/semana/{id}
// GET: /materiais/coletados/reciclagem-semanal/{id}
// GET: /materiais/coletados/porcentagem-material/{id}
// GET: /materiais/coletados/material-por-coleta/ano/{id}
// GET: /materiais/coletados/mais-coletado/{id}

// Requisições Imagem
// POST: /arquivo/upload-imagem
