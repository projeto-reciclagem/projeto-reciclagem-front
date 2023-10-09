import { api } from '../lib/axios'

export async function getAllCondos() {
  await api.get('/condominios').then((response) => {
    console.log(response.data)
  })
}
