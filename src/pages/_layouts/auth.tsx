import { Link, Outlet } from 'react-router-dom'

import ecoSystemLogo from '@/assets/eco-system-logo.svg'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-moss-green-500 bg-carousel-item2 bg-cover bg-center p-10">
        <div className="flex items-center gap-3">
          <Link to={'/'}>
            <img src={ecoSystemLogo} alt="" />
          </Link>
        </div>
        <footer className="text-sm text-white">
          Painel de controle &copy; EcoSystem - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
