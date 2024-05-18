import { useMutation } from '@tanstack/react-query'
import { Building, Loader2, Truck } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useController, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerCondo } from '@/api/register-condo'
import { registerCooperative } from '@/api/register-cooperative'
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

  const { control, register, handleSubmit, setValue } = useForm<SignUpForm>()

  const { field } = useController({
    name: 'orgType',
    control,
    defaultValue: '',
  })

  const { value, onChange } = field

  const { mutateAsync: registerCondoFn, isPending: isRegisteringCondo } =
    useMutation({
      mutationFn: registerCondo,
    })

  const {
    mutateAsync: registerCooperativeFn,
    isPending: isRegisteringCooperative,
  } = useMutation({
    mutationFn: registerCooperative,
  })

  function formatCnpj(cnpj: string) {
    const clearedCnpj = cnpj.replace(/\D/g, '')

    if (clearedCnpj.length > 11) {
      setValue(
        'cnpj',
        clearedCnpj
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d)/, '$1-$2'),
      )
    }
  }

  async function handleSignUp(data: SignUpForm) {
    try {
      if (data.orgType === 'condominio') {
        if (data.password === data.confirmPassword) {
          await registerCondoFn({
            nome: data.orgName,
            cnpj: data.cnpj.replace(/\D/g, ''),
            email: data.email,
            senha: data.password,
          })
        } else {
          toast.error('Erro ao registrar usuário, tente novamente')
        }

        toast.success('Cadastro do condomínio feito com sucesso', {
          description: 'Redirecionando para a página de Login',
          duration: 6000,
        })

        await new Promise((resolve) => setTimeout(resolve, 7000))
        navigate(`/sign-in?email=${data.email}`)
      } else {
        if (data.password === data.confirmPassword) {
          await registerCooperativeFn({
            nome: data.orgName,
            cnpj: data.cnpj,
            email: data.email,
            senha: data.password,
          })
        } else {
          toast.error('Erro ao registrar usuário, tente novamente')
        }
        toast.success('Cadastro da cooperativa feito com sucesso', {
          description: 'Redirecionando para a página de Login',
          duration: 6000,
        })

        await new Promise((resolve) => setTimeout(resolve, 7000))
        navigate(`/sign-in?email=${data.email}`)
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
          <Link to="/sign-in" className="font-semibold text-moss-green-400">
            Fazer Login
          </Link>
        </Button>

        <div className="flex w-[500px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar sua conta
            </h1>
            <p className="text-sm">Faça parte desse EcoSystem</p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-1 space-y-2">
              <Label htmlFor="orgName" className="text-zinc-900">
                Nome da organização
              </Label>
              <Input id="orgName" type="text" {...register('orgName')} />
            </div>

            <div className="col-span-1 space-y-2">
              <Label htmlFor="cnpj" className="text-zinc-900">
                CNPJ
              </Label>
              <Input
                id="cnpj"
                type="text"
                {...register('cnpj')}
                onChange={(e) => formatCnpj(e.target.value)}
              />
            </div>

            <div className="col-span-1 space-y-2">
              <Label htmlFor="email" className="text-zinc-900">
                Seu e-mail
              </Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="col-span-1 space-y-2">
              <Label htmlFor="password" className="text-zinc-900">
                Sua senha
              </Label>
              <Input id="password" type="password" {...register('password')} />
            </div>

            <div className="col-span-1 space-y-2">
              <Label htmlFor="confirmPassword" className="text-zinc-900">
                Confirmação da sua senha
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
              />
            </div>

            <div className="col-span-1 space-y-2">
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

            <Button
              disabled={isRegisteringCondo || isRegisteringCooperative}
              className="col-span-2 w-full gap-2 bg-moss-green-400"
            >
              Registrar
              {(isRegisteringCondo || isRegisteringCooperative) && (
                <Loader2 className="size-4 animate-spin" strokeWidth={3} />
              )}
            </Button>

            <p className="col-span-2 px-6 text-center text-sm leading-relaxed">
              Ao continuar você concorda com nossos{' '}
              <a
                className="text-moss-green-400 underline underline-offset-4"
                href=""
              >
                termos de serviço
              </a>{' '}
              e{' '}
              <a
                className="text-moss-green-400 underline underline-offset-4"
                href=""
              >
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
