import logo from '@/assets/eco-system-logo.svg'
import {
  BarChart4,
  Building,
  ClipboardList,
  Cog,
  KanbanSquare,
  LogOut,
  MessageCircle,
  PanelLeft,
  PanelLeftClose,
} from 'lucide-react'
import { useState } from 'react'

interface LayoutCooperativaProps {
  children: React.ReactNode
}

export function LayoutCooperativa({ children }: LayoutCooperativaProps) {
  const [menuus, setMenu] = useState(true)

  const toggleMenu = () => {
    setMenu(!menuus)
  }

  return (
    <>
      <div className="flex">
        <nav
          className={`relative flex h-screen w-2/12 flex-col items-center gap-10 bg-moss-green-800 pt-8 transition-all duration-150
          ${!menuus ? 'left-[-238px] ' : 'left-0'}`}
        >
          {/* Logo */}
          <img src={logo} alt="" className="w-6/12" />
          {/* Foto e nome do usuário */}
          <div className="flex w-11/12 flex-col items-center gap-5 pb-5">
            <div className="h-32 w-32 rounded-full bg-moss-green-50" />
            <p className="text-2xl text-moss-green-50">Olá, User!</p>
          </div>
          {/* Menu */}
          <div className="flex h-[30vh] w-11/12">
            <ul className="mx-auto flex w-7/12 flex-col justify-between gap-5">
              <li className="flex items-center gap-3 text-xl text-moss-green-50">
                <KanbanSquare size={38} className="text-moss-green-500" />
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Overview
                </p>
              </li>
              <li className="flex items-center gap-3 text-xl text-moss-green-50">
                <ClipboardList size={38} className="text-moss-green-500" />
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Pedidos
                </p>
              </li>
              <li className="flex items-center gap-3 text-xl text-moss-green-50">
                <Building size={38} className="text-moss-green-500" />
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Condomínios
                </p>
              </li>
              <li className="flex items-center gap-3 text-xl text-moss-green-50">
                <MessageCircle size={38} className="text-moss-green-500" />
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Chat
                </p>
              </li>
              <li className="flex items-center gap-3 text-xl text-moss-green-50">
                <BarChart4 size={38} className="text-moss-green-500" />
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Relatório
                </p>
              </li>
              <li className="flex items-center gap-3 text-xl text-moss-green-50">
                <Cog size={38} className="text-moss-green-500" />
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Configurações
                </p>
              </li>
            </ul>
          </div>
          {/* Sair */}
          <div className="mx-auto flex h-[50vh] w-5/12 items-center">
            <p className="flex items-center gap-3 text-xl text-moss-green-50">
              <LogOut size={28} className="text-moss-green-500" />
              <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                Sair
              </p>
            </p>
          </div>
          {/* Menu Toggle */}
        </nav>
        <div className="absolute left-4 top-9 z-10" onClick={toggleMenu}>
          {menuus ? (
            <PanelLeftClose
              size={38}
              className={`cursor-pointer text-moss-green-400 transition-all duration-150`}
            />
          ) : (
            <PanelLeft
              size={38}
              className={`cursor-pointer text-moss-green-400 transition-all duration-150`}
            />
          )}
        </div>
        <main
          className={`absolute h-screen bg-moss-green-50 transition-all duration-150 ${
            !menuus ? 'left-[4%] w-full' : 'left-[16.666667%] w-10/12'
          }`}
        >
          {children}
        </main>
      </div>
    </>
  )
}
