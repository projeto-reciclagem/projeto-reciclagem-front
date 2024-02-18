import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha inválida'),
})

type LoginFormType = z.infer<typeof loginSchema>

interface LoginFormProps {
  shouldShowLogin: (state: boolean) => void
}

export function LoginForm({ shouldShowLogin }: LoginFormProps) {
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleSubmitForm(values: LoginFormType) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="flex w-96 flex-col justify-center gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
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

        <Button
          type="submit"
          className="mt-3 select-none bg-moss-green-400 text-lg text-marine-900 outline-none hover:bg-moss-green-600 focus-visible:ring-2 focus-visible:ring-camel-600"
        >
          Entrar
        </Button>

        <p className="text-center text-white">
          Não tem uma conta ainda?{' '}
          <span
            onClick={() => shouldShowLogin(false)}
            className="cursor-pointer text-moss-green-400 hover:underline"
          >
            Cadastre-se
          </span>
        </p>
      </form>
    </Form>
  )
}
