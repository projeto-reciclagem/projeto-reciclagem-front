import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getCooperativeProfile } from '@/api/get-cooperative-profile'
import { updateCooperativeProfile } from '@/api/update-cooperative-profile'
import { updateUserImage } from '@/api/update-user-image'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const profileSchema = z.object({
  // imgUser: z
  //   .instanceof(FileList)
  //   .transform((list) => list.item(0))
  //   .refine(
  //     (file) => file!.size <= 5 * 1024 * 1024,
  //     'O arquivo deve conter até no máximo 5mb',
  //   )
  //   .optional(),
  orgName: z.string().min(1),
  email: z.string().email(),
  cnpj: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  district: z.string(),
  city: z.string(),
  complement: z.string(),
})

type ProfileSchema = z.infer<typeof profileSchema>

export function ProfileDialog() {
  // const queryClient = useQueryClient()

  const { data: profile } = useQuery({
    queryKey: ['cooperativeProfile'],
    queryFn: getCooperativeProfile,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    values: {
      orgName: profile?.nome ?? '',
      email: profile?.email ?? '',
      cnpj: profile?.cnpj ?? '',
      cep: profile?.cep ?? '',
      city: '',
      complement: '',
      confirmPassword: '',
      district: '',
      number: '',
      password: '',
      street: '',
    },
  })

  const { mutateAsync: updateCooperativeProfileFn } = useMutation({
    mutationFn: updateCooperativeProfile,
  })

  async function handleUpdateCooperativeProfile(data: ProfileSchema) {
    try {
      console.log(data)

      // await updateCooperativeProfile({
      //   nome: data.orgName,
      //   email: data.email,
      // })

      toast.success('Perfil atualizado com sucesso')
    } catch {
      toast.error('Falha ao atualizar o perfil, tente novamente!')
    }
  }

  return (
    <DialogContent className="min-w-[800px]">
      <DialogHeader>
        <DialogTitle>Perfil da cooperativa</DialogTitle>
        <DialogDescription>
          Atualize as informações da cooperativa
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateCooperativeProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-2">
              <h1 className="mb-6 text-xl font-bold leading-tight">
                Informações da cooperativa
              </h1>
              <div className="flex items-center gap-6">
                {/* <Avatar className="size-16">
                  <AvatarImage src={profile?.imgUsuario} />
                  <AvatarFallback>L</AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-2">
                  <Label className="text-black">Alterar imagem de perfil</Label>
                  <Input
                    id="imgUser"
                    accept="image/*"
                    type="file"
                    {...register('imgUser')}
                  />
                </div> */}
              </div>

              <Label className="text-black" htmlFor="name">
                Nome
              </Label>
              <Input id="name" {...register('orgName')} />

              <Label className="text-black" htmlFor="email">
                E-mail
              </Label>
              <Input id="email" type="email" {...register('email')} />

              <Label className="text-black" htmlFor="cnpj">
                CNPJ
              </Label>
              <Input id="cnpj" type="cnpj" {...register('cnpj')} />

              <Label className="text-black" htmlFor="password">
                Senha
              </Label>
              <Input id="password" type="password" {...register('password')} />

              <Label className="text-black" htmlFor="confirmPassword">
                Confirmação de senha
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
              />
            </div>
            <div className="col-span-2">
              <h1 className="mb-6 text-xl font-bold leading-tight">
                Localização da cooperativa
              </h1>

              <Label className="text-black" htmlFor="cep">
                CEP
              </Label>
              <Input id="cep" {...register('cep')} />

              <Label className="text-black" htmlFor="street">
                Logradouro
              </Label>
              <Input id="street" {...register('street')} />

              <Label className="text-black" htmlFor="number">
                Número
              </Label>
              <Input id="number" {...register('number')} />

              <Label className="text-black" htmlFor="city">
                Cidade
              </Label>
              <Input id="city" {...register('city')} />

              <Label className="text-black" htmlFor="district">
                Bairro
              </Label>
              <Input id="district" {...register('district')} />

              <Label className="text-black" htmlFor="complement">
                Complemento
              </Label>
              <Input id="complement" {...register('complement')} />
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </DialogClose>
          <Button disabled={isSubmitting} type="submit">
            Salvar alterações
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
