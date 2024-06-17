import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getCooperativeProfile } from '@/api/get-cooperative-profile'
import { updateCooperativeProfile } from '@/api/update-cooperative-profile'
import { getProfilePictureUrl, uploadFile } from '@/lib/supabase'

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

const updateProfileSchema = z.object({
  avatar: z
    .instanceof(FileList)
    .transform((list) => list.item(0))
    .nullish(),
  orgName: z.string().min(1),
  email: z.string().email(),
  cnpj: z.string().min(14).max(18),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
  cep: z.string().min(8),
  street: z.string().min(3),
  number: z.string().min(1),
  city: z.string().min(3),
  district: z.string().min(3),
  complement: z.string().optional(),
})

interface CepProps {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export function ProfileDialog() {
  const queryClient = useQueryClient()

  const { data: profile } = useQuery({
    queryKey: ['cooperativeProfile'],
    queryFn: getCooperativeProfile,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
    values: {
      avatar: null,
      orgName: profile?.nome ?? '',
      email: profile?.email ?? '',
      cnpj:
        profile?.cnpj
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d)/, '$1-$2') ?? '',
      password: '',
      confirmPassword: '',
      cep:
        profile?.cep
          ?.replace(/\D/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{3})\d+?$/, '$1') ?? '',
      street: profile?.logradouro ?? '',
      district: profile?.bairro ?? '',
      city: profile?.cidade ?? '',
      number: profile?.numero ?? '',
      complement: profile?.complemento ?? '',
    },
  })

  const { mutateAsync: updateCooperativeProfileFn } = useMutation({
    mutationFn: updateCooperativeProfile,
    onSuccess(_, { nome, email, imgUsuario }) {
      const cached = queryClient.getQueryData(['cooperativeProfile'])

      if (cached) {
        queryClient.setQueryData(['cooperativeProfile'], {
          ...cached,
          nome,
          email,
          imgUsuario,
        })
      }
    },
  })

  async function handleUpdateProfile(userData: UpdateProfileData) {
    let avatarPublicUrl

    if (userData.avatar !== null) {
      const avatarPath = await uploadFile(userData.avatar!)
      avatarPublicUrl = await getProfilePictureUrl(avatarPath)
    }

    try {
      if (userData.password === userData.confirmPassword) {
        await updateCooperativeProfileFn({
          imgUsuario: avatarPublicUrl,
          nome: userData.orgName,
          email: userData.email,
          cnpj: userData.cnpj,
          cep: userData.cep.replace(/\D/g, ''),
          logradouro: userData.street,
          bairro: userData.district,
          senha: userData.password,
          cidade: userData.city,
          complemento: userData.complement,
          numero: userData.number,
        })

        toast.success('Perfil atualizado com sucesso.')
      }
    } catch {
      toast.error('Erro ao atualizar o perfil, tente novamente.')
    }
  }

  async function checkCep() {
    const cep = getValues('cep')
    setValue(
      'cep',
      cep
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1'),
    )

    const {
      data: { bairro, localidade, logradouro },
    } = await axios.get<CepProps>(
      `https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json`,
    )

    setValue('district', bairro)
    setValue('street', logradouro)
    setValue('city', localidade)
  }

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

  return (
    <DialogContent className="min-w-[800px]">
      <DialogHeader>
        <DialogTitle>Perfil da cooperativa</DialogTitle>
        <DialogDescription>
          Atualize as informações da cooperativa
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-2">
              <h1 className="mb-6 text-xl font-bold leading-tight">
                Informações da cooperativa
              </h1>
              <div className="flex items-center gap-6">
                <Avatar className="size-16">
                  <AvatarImage src={profile?.imgUsuario} />
                  <AvatarFallback>
                    {profile?.nome[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-2">
                  <Label className="text-black">Alterar imagem de perfil</Label>
                  <Input
                    id="imgUser"
                    accept="image/*"
                    type="file"
                    {...register('avatar')}
                  />
                </div>
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
              <Input
                id="cnpj"
                type="cnpj"
                {...register('cnpj')}
                onChange={(e) => formatCnpj(e.target.value)}
              />

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
              <Input id="cep" {...register('cep')} onBlur={checkCep} />

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
