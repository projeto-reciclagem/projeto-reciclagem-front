import logo from '@/assets/eco-system-logo.svg'
import { LogOut } from 'lucide-react'
import { useState } from 'react'

interface LayoutCooperativaProps {
  children: React.ReactNode
}

export function LayoutCooperativa({ children }: LayoutCooperativaProps) {
  const [menuus, setMenu] = useState(true)
  const [activeItem, setActiveItem] = useState('')

  const toggleMenu = () => {
    setMenu(!menuus)
  }

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item)
  }

  return (
    <>
      <div className="flex w-screen">
        <nav
          className={`relative flex h-screen w-2/12 flex-col items-center gap-10 bg-moss-green-800 pt-8 transition-all duration-150
          ${!menuus ? 'left-[-12.79%] ' : 'left-0'}`}
        >
          {/* Logo */}
          <img src={logo} alt="" className="w-6/12" />
          {/* Foto e nome do usuário */}
          <div className="flex w-11/12 flex-col items-center gap-5 pb-5">
            <div className="h-32 w-32 rounded-full bg-moss-green-50" />
            <p className="text-2xl text-moss-green-50">Olá, User!</p>
          </div>{' '}
          {/* Menu */}
          <div className="flex h-[30vh] w-11/12">
            <ul className="mx-auto flex w-7/12 flex-col justify-between gap-5">
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Overview'
                    ? 'mx-auto w-[120%] -translate-x-6 justify-center rounded-full bg-moss-green-300 py-1'
                    : ''
                }`}
                onClick={() => handleSetActiveItem('Overview')}
              >
                <span className="material-symbols-outlined text-3xl text-moss-green-500">
                  insert_chart
                </span>
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Overview
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Pedidos'
                    ? 'mx-auto w-[120%] -translate-x-6 justify-center rounded-full bg-moss-green-300 py-1'
                    : ''
                }`}
                onClick={() => handleSetActiveItem('Pedidos')}
              >
                <span className="material-symbols-outlined text-3xl text-moss-green-500">
                  assignment
                </span>
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Pedidos
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Condomínios'
                    ? 'mx-auto w-[120%] -translate-x-6 justify-center rounded-full bg-moss-green-300 py-1'
                    : ''
                }`}
                onClick={() => handleSetActiveItem('Condomínios')}
              >
                <span className="material-symbols-outlined text-3xl text-moss-green-500">
                  apartment
                </span>
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Condomínios
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Chat'
                    ? 'mx-auto w-[120%] -translate-x-6 justify-center rounded-full bg-moss-green-300 py-1'
                    : ''
                }`}
                onClick={() => handleSetActiveItem('Chat')}
              >
                <span className="material-symbols-outlined text-3xl text-moss-green-500">
                  chat
                </span>
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Chat
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Relatório'
                    ? 'mx-auto w-[120%] -translate-x-6 justify-center rounded-full bg-moss-green-300 py-1'
                    : ''
                }`}
                onClick={() => handleSetActiveItem('Relatório')}
              >
                <span className="material-symbols-outlined text-3xl text-moss-green-500">
                  finance
                </span>
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Relatório
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Configurações'
                    ? 'mx-auto w-[120%] -translate-x-6 justify-center rounded-full bg-moss-green-300 py-1'
                    : ''
                }`}
                onClick={() => handleSetActiveItem('Configurações')}
              >
                <span className="material-symbols-outlined text-3xl text-moss-green-500">
                  settings
                </span>
                <p className="navbar-item relative cursor-pointer transition-all duration-100 hover:translate-x-2">
                  Configurações
                </p>
              </li>
            </ul>
          </div>
          {/* Sair */}
          <div className="mx-auto flex h-[50vh] w-5/12 items-center">
            <p className="flex select-none items-center gap-3 text-xl text-moss-green-50">
              <LogOut size={28} className="text-moss-green-500" />
              <p className="lative cursor-pointer transition-all duration-100">
                Sair
              </p>
            </p>
          </div>
          {/* Menu Toggle */}
        </nav>
        <div
          className="absolute left-0 top-0 z-10 pl-3 pt-8"
          onClick={toggleMenu}
        >
          {menuus ? (
            <span className="material-symbols-outlined cursor-pointer select-none text-5xl text-moss-green-400">
              left_panel_close
            </span>
          ) : (
            <span className="material-symbols-outlined cursor-pointer select-none text-5xl text-moss-green-400">
              dock_to_right
            </span>
          )}
        </div>
        <main
          className={`absolute h-screen border-l-4 border-moss-green-500 bg-moss-green-800 transition-all duration-150 ${
            !menuus ? 'left-[3.87%] w-[95.9999vw]' : 'left-[16.666667%] w-10/12'
          }`}
        >
          {children}
        </main>
      </div>
    </>
  )
}
