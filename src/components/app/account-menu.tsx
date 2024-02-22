import { useQuery } from '@tanstack/react-query'
import { ChevronDown, LogOut, User2 } from 'lucide-react'

import { getCooperativeProfile } from '@/api/get-cooperative-profile'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Dialog, DialogTrigger } from '../ui/dialog'
import { Skeleton } from '../ui/skeleton'
import { ProfileDialog } from './profile-dialog'

export function AccountMenu() {
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ['cooperativeProfile'],
    queryFn: getCooperativeProfile,
    staleTime: Infinity,
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isProfileLoading ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              <>
                <Avatar className="size-6">
                  <AvatarImage src={profile?.imgUsuario} />
                  <AvatarFallback>L</AvatarFallback>
                </Avatar>
                {profile?.nome}
              </>
            )}
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-60">
          <DropdownMenuLabel className="flex flex-col">
            {isProfileLoading ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>{profile?.nome}</span>
                <span className="text-sm font-normal">{profile?.email}</span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <User2 className="mr-2 size-4" />
              <span>Perfil da cooperativa</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
            <LogOut className="mr-2 size-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ProfileDialog />
    </Dialog>
  )
}
