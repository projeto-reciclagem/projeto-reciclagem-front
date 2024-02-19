import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof SignInForm>

export function SignIn() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Login efetuado com sucesso', {
        description: 'Redirecionando para o Dashboard',
        duration: 6000,
      })

      await new Promise((resolve) => setTimeout(resolve, 2000))
      navigate('/dashboard')
    } catch {
      toast.error('Credenciais inválidas')
    }
  }

  return (
    <>
      <Helmet title="Entrar" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className="absolute right-8 top-8">
          <Link to="/sign-up" className="font-semibold text-moss-green-400">
            Novo usuário
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar sua conta
            </h1>
            <p className="text-sm">
              Acompanhe suas solicitações e monitore seus ganhos.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-900">
                Seu e-mail
              </Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-900">
                Sua senha
              </Label>
              <Input id="password" type="password" {...register('password')} />
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full bg-moss-green-400"
            >
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
