import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from './Form'

const registerUserSchema = z.object({
  nome: z.string().min(3, 'Nome inválido'),
  cnpj: z.string().min(14, 'CNPJ inválido'),
  email: z.string().email(),
  telefone: z.string().min(8, 'Telefone inválido'),
  senha: z.string().min(8, 'Sua senha requer no mínimo 8 caracteres'),
  confirmacaoSenha: z.string(),
})

type RegisterUserData = z.infer<typeof registerUserSchema>

export function FormCadastro() {
  const registerForm = useForm<RegisterUserData>({
    resolver: zodResolver(registerUserSchema),
  })

  function registerUser(data: RegisterUserData) {
    console.log(data)
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = registerForm

  return (
    <FormProvider {...registerForm}>
      <form
        className="flex w-full flex-col gap-16"
        onSubmit={handleSubmit(registerUser)}
      >
        <div className="flex gap-5">
          <Form.Field className="w-full">
            <Form.Label
              htmlFor=""
              className="text-moss-green-50 transition-all duration-150"
            >
              Nome completo
            </Form.Label>
            <Form.Input
              id="nome"
              name="nome"
              type="text"
              className="w-full select-none rounded-none border-b-2 border-moss-green-700 bg-transparent p-2 text-lg text-moss-green-100 outline-none"
            />
          </Form.Field>

          <Form.Field className="w-full">
            <Form.Label
              htmlFor=""
              className="text-moss-green-50 transition-all duration-150"
            >
              CNPJ
            </Form.Label>
            <Form.Input
              id="cnpj"
              name="cnpj"
              type="text"
              className="w-full select-none rounded-none border-b-2 border-moss-green-700 bg-transparent p-2 text-lg text-moss-green-100 outline-none"
            />
          </Form.Field>
        </div>
        <div className="flex gap-5">
          <Form.Field className="w-full">
            <Form.Label
              htmlFor=""
              className="text-moss-green-50 transition-all duration-150"
            >
              Email
            </Form.Label>
            <Form.Input
              id="email-cad"
              name="email"
              type="email"
              className="w-full select-none rounded-none border-b-2 border-moss-green-700 bg-transparent p-2 text-lg text-moss-green-100 outline-none"
            />
          </Form.Field>

          <Form.Field className="w-full">
            <Form.Label
              htmlFor=""
              className="text-moss-green-50 transition-all duration-150"
            >
              Telefone
            </Form.Label>
            <Form.Input
              id="phone-cad"
              name="telefone"
              type="tel"
              className="w-full select-none rounded-none border-b-2 border-moss-green-700 bg-transparent p-2 text-lg text-moss-green-100 outline-none"
            />
          </Form.Field>
        </div>
        <div className="flex gap-5">
          <Form.Field className="w-full">
            <Form.Label
              htmlFor=""
              className="text-moss-green-50 transition-all duration-150"
            >
              Senha
            </Form.Label>
            <Form.Input
              id="password-cad"
              name="senha"
              type="password"
              className="w-full select-none rounded-none border-b-2 border-moss-green-700 bg-transparent p-2 text-lg text-moss-green-100 outline-none"
            />
          </Form.Field>

          <Form.Field className="w-full">
            <Form.Label
              htmlFor=""
              className="text-moss-green-50 transition-all duration-150"
            >
              Confirmar senha
            </Form.Label>
            <Form.Input
              id="confirm-password-cad"
              name="confirmacaoSenha"
              type="password"
              className="w-full select-none rounded-none border-b-2 border-moss-green-700 bg-transparent p-2 text-lg text-moss-green-100 outline-none"
            />
          </Form.Field>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full select-none rounded-lg bg-moss-green-300 py-2 text-lg text-moss-green-900 transition-all duration-300 hover:bg-moss-green-700 hover:text-moss-green-50 hover:drop-shadow-md"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
