import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from './Form'

const loginUserSchema = z.object({
  email: z.string().min(1, 'O e-mail é obrigatório!').email().toLowerCase(),
  senha: z.string().min(6, 'A senha deve ter no mínimo 6 carácteres'),
})

type LoginUserData = z.infer<typeof loginUserSchema>

export function FormLogin() {
  const loginForm = useForm<LoginUserData>({
    resolver: zodResolver(loginUserSchema),
  })

  function loginUser(data: LoginUserData) {
    console.log(data)
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = loginForm

  return (
    <>
      <h3 className="mb-4 font-mono text-4xl text-moss-green-50">
        Login to EcoSystem
      </h3>
      <FormProvider {...loginForm}>
        <form
          className="flex w-full flex-col gap-10"
          onSubmit={handleSubmit(loginUser)}
        >
          <Form.Field>
            <Form.Label className="text-moss-green-50 transition-all duration-150">
              E-mail
            </Form.Label>

            <Form.Input
              type="email"
              name="email"
              className="w-full select-none rounded-none border-b-2  border-moss-green-700 bg-transparent p-2 text-lg text-moss-green-100 outline-none"
            />
            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.Label className="text-moss-green-50 transition-all duration-150">
              Senha
            </Form.Label>

            <Form.Input
              type="password"
              name="senha"
              className="w-full select-none rounded-none border-b-2 border-moss-green-700 bg-transparent p-2 text-lg text-moss-green-100 outline-none"
            />
            <Form.ErrorMessage field="senha" />
          </Form.Field>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full select-none rounded-lg bg-moss-green-300 py-2 text-lg text-moss-green-900 transition-all duration-300 hover:bg-moss-green-700 hover:text-moss-green-50 hover:drop-shadow-md"
          >
            Entrar
          </button>
        </form>
      </FormProvider>
    </>
  )
}
