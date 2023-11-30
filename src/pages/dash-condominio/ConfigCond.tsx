import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import SideBarCondominio from '../../components/DashCondominio/SidebarCondominio'
import { Form } from '../../components/Form'
import { loginUser } from '../../services/requisicoes'
import { api } from '../../lib/axios'

const updateUserSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  telefone: z.string().min(10).max(12),
  cnpj: z.string().min(13).max(14),
  senha: z.string().min(8),
  confirmSenha: z.string().min(8),
  cep: z.string().min(8).max(8),
  logradouro: z.string().min(1),
  numero: z.string().min(1),
  complemento: z.string(),
  bairro: z.string().min(1),
  cidade: z.string().min(1),
  uf: z.string().min(2).max(2),
})

type UpdateUserData = z.infer<typeof updateUserSchema>

export default function ConfigCond() {
  const updateUserForm = useForm<UpdateUserData>({
    resolver: zodResolver(updateUserSchema),
  })

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = updateUserForm

  function clearAddress() {
    setValue('logradouro', '')
    setValue('bairro', '')
    setValue('cidade', '')
    setValue('uf', '')
  }

  async function searchAddress(cep: string) {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await res.json()

    if (!('erro' in data)) {
      setValue('logradouro', data.logradouro)
      setValue('bairro', data.bairro)
      setValue('cidade', data.localidade)
      setValue('uf', data.uf)
    } else {
      clearAddress()
    }
  }

  function getAddress(value: string) {
    const cep = value.replace(/\D/g, '')

    if (cep !== '') {
      const validateCep = /^[0-9]{8}$/

      if (validateCep.test(cep)) {
        searchAddress(cep)
      } else {
        clearAddress()
      }
    } else {
      clearAddress()
    }
  }

  function updateUser(data: UpdateUserData) {
    const id = sessionStorage.getItem('id')
    const complementoAtual = data.complemento

    data.complemento = `${data.numero} ${complementoAtual}`
    data.cidade = `${data.cidade} ${data.uf}`

    const res = api.put(`/condominios/atualizar/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    res.then((res) => {
      const newInfos = {
        email: res.data.email,
        senha: data.senha,
      }

      loginUser(newInfos)
    })
  }

  return (
    <>
      <main className="flex h-screen gap-1 bg-marine-50 p-2">
        <SideBarCondominio />
        <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-marine-700 p-8">
          <FormProvider {...updateUserForm}>
            <form
              onSubmit={handleSubmit(updateUser)}
              className="flex h-full w-full flex-col gap-6 rounded-2xl bg-moss-green-50"
            >
              <div className="mt-4 flex flex-col items-center justify-center gap-1">
                <p className="text-center text-3xl text-marine-900">
                  Editar Perfil
                </p>
                <div className="h-[2px] w-[590px] bg-gray-500" />
              </div>

              <div className="flex h-full flex-col items-center p-4">
                <div className="flex h-full w-full justify-center gap-20">
                  <Form.Field className="flex h-full w-[280px] flex-col gap-2 text-marine-900">
                    <Form.Label>Nome</Form.Label>
                    <Form.Input
                      name="nome"
                      className="rounded-md bg-white px-1 py-2"
                    />
                    <Form.Label>E-mail</Form.Label>
                    <Form.Input
                      type="email"
                      name="email"
                      className="rounded-md bg-white px-1 py-2"
                    />
                    <Form.Label>Telefone</Form.Label>
                    <Form.Input
                      type="string"
                      name="telefone"
                      className="rounded-md bg-white px-1 py-2"
                    />
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Input
                      type="string"
                      name="cnpj"
                      className="rounded-md bg-white px-1 py-2"
                    />
                    <Form.Label>Senha</Form.Label>
                    <Form.Input
                      type="string"
                      name="senha"
                      className="rounded-md bg-white px-1 py-2"
                    />
                    <Form.Label>Confirmação de Senha</Form.Label>
                    <Form.Input
                      type="string"
                      name="confirmSenha"
                      className="rounded-md bg-white px-1 py-2"
                    />
                  </Form.Field>

                  <Form.Field className="flex h-full w-[280px] flex-col gap-2 text-marine-900">
                    <Form.Label>CEP</Form.Label>
                    <Form.Input
                      id="cep"
                      type="string"
                      name="cep"
                      onBlur={(e) => getAddress(e.target.value)}
                      className="rounded-md bg-white px-1 py-2"
                    />
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Input
                      id="logradouro"
                      type="string"
                      name="logradouro"
                      className="rounded-md bg-white px-1 py-2 disabled:cursor-not-allowed disabled:bg-zinc-300/80"
                    />
                    <Form.Label>Número</Form.Label>
                    <Form.Input
                      id="numero"
                      type="string"
                      name="numero"
                      className="rounded-md bg-white px-1 py-2"
                    />
                    <Form.Label>Complemento</Form.Label>
                    <Form.Input
                      id="complemento"
                      type="string"
                      name="complemento"
                      className="rounded-md bg-white px-1 py-2"
                    />
                    <Form.Label>Bairro</Form.Label>
                    <Form.Input
                      id="bairro"
                      type="string"
                      name="bairro"
                      className="rounded-md bg-white px-1 py-2 disabled:cursor-not-allowed disabled:bg-zinc-300/80"
                    />
                    <Form.Label>Cidade</Form.Label>
                    <Form.Input
                      id="cidade"
                      type="string"
                      name="cidade"
                      className="rounded-md bg-white px-1 py-2 disabled:cursor-not-allowed disabled:bg-zinc-300/80"
                    />
                    <Form.Label>Estado</Form.Label>
                    <Form.Input
                      id="uf"
                      type="string"
                      name="uf"
                      className="rounded-md bg-white px-1 py-2 disabled:cursor-not-allowed disabled:bg-zinc-300/80"
                    />
                  </Form.Field>
                </div>

                <div className="h-[40px] w-[88px] justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-max w-max rounded-lg bg-marine-500 p-2"
                  >
                    Alterar Dados
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </main>
    </>
  )
}
