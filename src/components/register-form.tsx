import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'

const registerSchema = z.object({
  orgName: z.string().min(3, 'Nome inválido'),
  cnpj: z.string().min(14, 'CNPJ inválido'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(8, 'Telefone inválido'),
  password: z.string().min(8, 'Sua senha requer no mínimo 8 caracteres'),
  confirmPassword: z
    .string()
    .min(8, 'Sua confirmação de senha requer no mínimo 8 caracteres'),
})

type RegisterFormType = z.infer<typeof registerSchema>

interface RegisterFormProps {
  shouldShowLogin: (state: boolean) => void
}

export function RegisterForm({ shouldShowLogin }: RegisterFormProps) {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      orgName: '',
      cnpj: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  })

  function handleSubmitForm(values: RegisterFormType) {
    console.log(values)

    toast.success('Conta criada com sucesso!')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="grid w-[30rem] grid-cols-2 gap-x-4"
      >
        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="orgName"
            render={({ field }) => (
              <FormItem className="h-[7.5rem]">
                <FormLabel>Nome da organização</FormLabel>
                <FormControl>
                  <Input
                    className="bg-moss-green-50 outline-none focus-visible:ring-2 focus-visible:ring-camel-600"
                    placeholder="Nome da org."
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="h-[7.5rem]">
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="bg-moss-green-50 outline-none focus-visible:ring-2 focus-visible:ring-camel-600"
                    placeholder="E-mail"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="h-[7.5rem]">
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    className="bg-moss-green-50 outline-none focus-visible:ring-2 focus-visible:ring-camel-600"
                    type="password"
                    placeholder="Senha"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem className="h-[7.5rem]">
                <FormLabel>CNPJ</FormLabel>
                <FormControl>
                  <Input
                    className="bg-moss-green-50 outline-none focus-visible:ring-2 focus-visible:ring-camel-600"
                    placeholder="12.345.678/0001-90"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="h-[7.5rem]">
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input
                    className="bg-moss-green-50 outline-none focus-visible:ring-2 focus-visible:ring-camel-600"
                    placeholder="(**)*****-****"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="h-[7.5rem]">
                <FormLabel>Confirmação de senha</FormLabel>
                <FormControl>
                  <Input
                    className="bg-moss-green-50 outline-none focus-visible:ring-2 focus-visible:ring-camel-600"
                    type="password"
                    placeholder="Confirm. de senha"
                    {...field}
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="col-span-2 mt-2 select-none bg-moss-green-400 text-lg text-marine-900 outline-none hover:bg-moss-green-600 focus-visible:ring-2 focus-visible:ring-camel-600"
        >
          Registrar-se
        </Button>

        <p className="col-span-2 mt-3 text-center text-white">
          Já tem uma conta?{' '}
          <span
            onClick={() => shouldShowLogin(true)}
            className="cursor-pointer text-moss-green-400 hover:underline"
          >
            Faça a sua entrada
          </span>
        </p>
      </form>
    </Form>
  )
}
