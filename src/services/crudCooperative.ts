import { api } from '../lib/axios'

export async function getAllCooperative() {
  await api.get('/cooperativas/listarCooperativas').then((response) => {
    console.log(response.data)
  })
}
