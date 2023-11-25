import logo from '@/assets/eco-system-logo.svg'
import { LogOut } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface LayoutCooperativaProps {
  page: string
}

export function LayoutCooperativa({ page }: LayoutCooperativaProps) {
  const [menuus, setMenu] = useState(false)
  const [activeItem, setActiveItem] = useState(page)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenu(!menuus)
  }

  const handleSetActiveItem = (item: string, route: string) => {
    setActiveItem(item)
    navigate(route)
  }

  useEffect(() => {
    if (activeItem === 'Overview') {
      navigate('/cooperativa')
    } else if (activeItem === 'Pedidos') {
      navigate('/cooperativa/pedidos')
    } else if (activeItem === 'Condomínios') {
      navigate('/cooperativa/condominios')
    } else if (activeItem === 'Chat') {
      navigate('/cooperativa/chat')
    } else if (activeItem === 'Relatório') {
      navigate('/cooperativa/relatorio')
    } else if (activeItem === 'Configurações') {
      navigate('/cooperativa/configuracoes')
    }
  }, [activeItem, navigate])

  return (
    <>
      <div className="flex w-screen">
        <nav
          className={`absolute top-0 z-10 flex h-screen w-2/12 flex-col items-center gap-10 border-r-4 border-moss-green-500 bg-moss-green-900 pt-8 transition-all duration-150
          ${!menuus ? 'left-[-12.79%]' : 'left-0'}`}
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
                    ? `mx-auto w-[120%] ${
                        menuus ? '-translate-x-6' : '-translate-x-14'
                      } justify-center rounded-full bg-moss-green-300 py-1`
                    : ''
                }`}
                onClick={() => handleSetActiveItem(page, '/cooperativa')}
              >
                <span className="material-symbols-outlined text-4xl text-moss-green-500">
                  insert_chart
                </span>
                <p
                  className={`navbar-item relative cursor-pointer transition-all duration-100 ${
                    activeItem === 'Overview' ? '' : 'hover:translate-x-2'
                  }`}
                >
                  Overview
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Pedidos'
                    ? `mx-auto w-[120%] ${
                        menuus ? '-translate-x-6' : '-translate-x-14'
                      } justify-center rounded-full bg-moss-green-300 py-1`
                    : ''
                }`}
                onClick={() =>
                  handleSetActiveItem(page, '/cooperativa/pedidos')
                }
              >
                <span className="material-symbols-outlined text-4xl text-moss-green-500">
                  assignment
                </span>
                <p
                  className={`navbar-item relative cursor-pointer transition-all duration-100 ${
                    activeItem === 'Pedidos' ? '' : 'hover:translate-x-2'
                  }`}
                >
                  Pedidos
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Condomínios'
                    ? `mx-auto w-[120%] ${
                        menuus ? '-translate-x-6' : '-translate-x-14'
                      } justify-center rounded-full bg-moss-green-300 py-1`
                    : ''
                }`}
                onClick={() =>
                  handleSetActiveItem(page, '/cooperativa/condominios')
                }
              >
                <span className="material-symbols-outlined text-4xl text-moss-green-500">
                  apartment
                </span>
                <p
                  className={`navbar-item relative cursor-pointer transition-all duration-100 ${
                    activeItem === 'Condomínios' ? '' : 'hover:translate-x-2'
                  }`}
                >
                  Condomínios
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Chat'
                    ? `mx-auto w-[120%] ${
                        menuus ? '-translate-x-6' : '-translate-x-14'
                      } justify-center rounded-full bg-moss-green-300 py-1`
                    : ''
                }`}
                onClick={() => handleSetActiveItem(page, '/cooperativa/chat')}
              >
                <span className="material-symbols-outlined text-4xl text-moss-green-500">
                  chat
                </span>
                <p
                  className={`navbar-item relative cursor-pointer transition-all duration-100 ${
                    activeItem === 'Chat' ? '' : 'hover:translate-x-2'
                  }`}
                >
                  Chat
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Relatório'
                    ? `mx-auto w-[120%] ${
                        menuus ? '-translate-x-6' : '-translate-x-14'
                      } justify-center rounded-full bg-moss-green-300 py-1`
                    : ''
                }`}
                onClick={() =>
                  handleSetActiveItem(page, '/cooperativa/relatorio')
                }
              >
                <span className="material-symbols-outlined text-4xl text-moss-green-500">
                  finance
                </span>
                <p
                  className={`navbar-item relative cursor-pointer transition-all duration-100 ${
                    activeItem === 'Relatório' ? '' : 'hover:translate-x-2'
                  }`}
                >
                  Relatório
                </p>
              </li>
              <li
                className={`flex select-none items-center gap-3 text-xl text-moss-green-50 ${
                  activeItem === 'Configurações'
                    ? `mx-auto w-[120%] ${
                        menuus ? '-translate-x-6' : '-translate-x-14'
                      } justify-center rounded-full bg-moss-green-300 py-1`
                    : ''
                }`}
                onClick={() => handleSetActiveItem(page, '/cooperativa/config')}
              >
                <span className="material-symbols-outlined text-4xl text-moss-green-500">
                  settings
                </span>
                <p
                  className={`navbar-item relative cursor-pointer transition-all duration-100 ${
                    activeItem === 'Configurações' ? '' : 'hover:translate-x-2'
                  }`}
                >
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
      </div>
    </>
  )
}
