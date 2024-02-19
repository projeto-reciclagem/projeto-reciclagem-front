import { Building, Truck } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useController, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const SignUpForm = z.object({
  orgName: z.string(),
  cnpj: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
  orgType: z.string(),
})

type SignUpForm = z.infer<typeof SignUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { field } = useController({
    name: 'orgType',
    control,
    defaultValue: '',
  })

  const { value, onChange } = field

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      if (data.orgType === 'condominio') {
        toast.success('Cadastro do condomínio feito com sucesso', {
          description: 'Redirecionando para a página de Login',
          duration: 6000,
        })

        await new Promise((resolve) => setTimeout(resolve, 7000))
        navigate('/sign-in')
      } else {
        toast.success('Cadastro da cooperativa feito com sucesso', {
          description: 'Redirecionando para a página de Login',
          duration: 6000,
        })

        await new Promise((resolve) => setTimeout(resolve, 7000))
        navigate('/sign-in')
      }
    } catch {
      toast.error('Erro ao cadastrar o usuário.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant={'ghost'} asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer Login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar sua conta
            </h1>
            <p className="text-sm">Faça parte desse EcoSystem</p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName" className="text-zinc-900">
                Nome da organização
              </Label>
              <Input id="orgName" type="text" {...register('orgName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cnpj" className="text-zinc-900">
                CNPJ
              </Label>
              <Input id="cnpj" type="text" {...register('cnpj')} />
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-zinc-900">
                Confirmação da sua senha
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-900">
                Qual o tipo da sua organização?
              </Label>

              <Select value={value} onValueChange={onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma organização" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="condominio">
                    <div className="flex items-center gap-2">
                      Condomínio <Building className="size-4" />
                    </div>
                  </SelectItem>
                  <SelectItem value="cooperativa">
                    <div className="flex items-center gap-2">
                      Cooperativa <Truck className="size-4" />
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button disabled={isSubmitting} className="w-full">
              Registrar
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed">
              Ao continuar você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="">
                termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
