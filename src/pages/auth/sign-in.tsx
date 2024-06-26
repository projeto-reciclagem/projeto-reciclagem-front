import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const SignInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof SignInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate, isPending: isAuthenticating } =
    useMutation({
      mutationFn: signIn,
    })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({
        email: data.email,
        senha: data.password,
      })

      toast.success('Login efetuado com sucesso', {
        description: 'Redirecionando para o Dashboard',
        duration: 4000,
      })

      await new Promise((resolve) => setTimeout(resolve, 2000))
      navigate('/dashboard')
    } catch {
      toast.error('Credenciais inválidas, tente novamente.')
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
              disabled={isAuthenticating}
              className="w-full gap-2 bg-moss-green-400"
            >
              Acessar
              {isAuthenticating && (
                <Loader2 className="size-4 animate-spin" strokeWidth={3} />
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
