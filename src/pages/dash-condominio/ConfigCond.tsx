import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import SideBarCondominio from '../../components/DashCondominio/SidebarCondominio'
import { Form } from '../../components/Form'

const updateUserSchema = z.object({
  nome: z.string(),
  email: z.string().email(),
  telefone: z.string(),
  cnpj: z.string(),
  senha: z.string(),
  confirmSenha: z.string(),
  cep: z.string(),
  logradouro: z.string(),
  numero: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string(),
})

type UpdateUserData = z.infer<typeof updateUserSchema>

export default function ConfigCond() {
  const updateUserForm = useForm<UpdateUserData>({
    resolver: zodResolver(updateUserSchema),
  })

  function updateUser(data: UpdateUserData) {
    console.log(data)
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = updateUserForm

  return (
    <>
      <main className="flex h-screen gap-1 bg-marine-50 p-2">
        <SideBarCondominio />
        <div className="flex h-full w-full flex-col items-center justify-center self-stretch rounded-2xl bg-marine-700">
          <FormProvider {...updateUserForm}>
            <form
              onSubmit={handleSubmit(updateUser)}
              className="flex h-5/6 w-5/6 flex-col items-center justify-center gap-6 rounded-2xl bg-moss-green-50"
            >
              <div className="mt-4 flex flex-col items-center justify-center gap-1">
                <p className="text-center text-3xl text-marine-900">
                  Editar Perfil
                </p>
                <div className="h-[2px] w-[590px] bg-gray-500" />
              </div>

              <div className="flex w-4/6 flex-col items-center justify-center gap-8">
                <div className="flex gap-8">
                  <Form.Field className="flex h-[300px] w-[280px] flex-col text-marine-900">
                    <Form.Label>Nome</Form.Label>
                    <Form.Input name="nome" />
                    <Form.Label>E-mail</Form.Label>
                    <Form.Input type="email" name="email" />
                    <Form.Label>Telefone</Form.Label>
                    <Form.Input type="string" name="telefone" />
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Input type="string" name="cnpj" />
                    <Form.Label>Senha</Form.Label>
                    <Form.Input type="string" name="senha" />
                    <Form.Label>Confirmação de Senha</Form.Label>
                    <Form.Input type="string" name="confirmSenha" />
                  </Form.Field>

                  <Form.Field className="flex h-[300px] w-[280px] flex-col text-marine-900">
                    <Form.Label>Cep</Form.Label>
                    <Form.Input type="string" name="cep" />
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Input type="string" name="logradouro" />
                    <Form.Label>Número</Form.Label>
                    <Form.Input type="string" name="numero" />
                    <Form.Label>Bairro</Form.Label>
                    <Form.Input type="string" name="bairro" />
                    <Form.Label>Cidade</Form.Label>
                    <Form.Input type="string" name="cidade" />
                    <Form.Label>UF</Form.Label>
                    <Form.Input type="string" name="uf" />
                  </Form.Field>
                </div>

                <div className="h-[40px] w-[88px] justify-center self-center">
                  <button
                    disabled={isSubmitting}
                    className="h-max w-max rounded-lg bg-moss-green-500 p-2"
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
