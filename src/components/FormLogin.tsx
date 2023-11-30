import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { api } from '../lib/axios'
import { Form } from './Form'

const loginUserSchema = z.object({
  email: z.string().min(1, 'O e-mail é obrigatório!').email().toLowerCase(),
  senha: z.string(),
})

type LoginUserData = z.infer<typeof loginUserSchema>

export function FormLogin() {
  const navigate = useNavigate()

  const loginForm = useForm<LoginUserData>({
    resolver: zodResolver(loginUserSchema),
  })

  async function loginUser(data: LoginUserData) {
    await api
      .post('/usuarios/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
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

    if (sessionStorage.getItem('tipo') === 'COOPERATIVA') {
      navigate('/cooperativa')
    } else {
      navigate('/condominio')
    }
  }

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = loginForm

  return (
    <>
      <h3 className="mb-9 font-mono text-4xl text-moss-green-50">
        Login to EcoSystem
      </h3>
      <FormProvider {...loginForm}>
        <form
          className="flex w-full flex-col gap-16"
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
