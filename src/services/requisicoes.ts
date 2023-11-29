import { api } from '../lib/axios'

interface MaterialsProps {
  vlrMaterial: number
  nome: string
  fkCooperativa: number
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
// GET: /cooperativas/buscar/{id}
// POST: /cooperativas/cadastrar
// POST: /cooperativas/exportar-dados/{nomeArq}
// PUT: /cooperativas/atualizar/{id}
// DELETE: /cooperativas/deletar/{id}

// Requisições Condomínios
// GET: /condominios/listar
// GET: /condominios/buscar/{id}
// POST: /condominios/cadastrar
// PUT: /condominios/atualizar/{id}
// DELETE: /condominios/deletar/{id}

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
