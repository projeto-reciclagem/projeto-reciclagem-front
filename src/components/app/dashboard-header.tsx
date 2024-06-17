import { /* BarChart3, */ Calendar, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

import ecoSystemLogo from '@/assets/eco-system-black-logo.svg'
import { AccountMenu } from '@/components/app/account-menu'
import { NavLink } from '@/components/nav-link'
import { Separator } from '@/components/ui/separator'

export function DashboardHeader() {
  return (
    <header>
      <div className="flex h-16 items-center gap-6 px-6">
        <Link to="/">
          <img src={ecoSystemLogo} alt="" />
        </Link>

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/dashboard'}>
            <Home className="size-4" />
            Início
          </NavLink>
          <NavLink to={'/schedules'}>
            <Calendar className="size-4" />
            Agendamentos
          </NavLink>
          {/* <NavLink to={'/reports'}>
            <BarChart3 className="size-4" />
            Relatórios
          </NavLink> */}
        </nav>

        <div className="ml-auto">
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
