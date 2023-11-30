import logo from '@/assets/eco-system-logo.svg'
import {
  LogOut,
  KanbanSquare,
  ClipboardList,
  BarChart4,
  Cog,
} from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/dash-condominio.css'
import { getCondoById } from '../../services/requisicoes'

export default function SideBarCondominio() {
  const location = useLocation()
  const [nomeCliente, setNomeCliente] = useState('')
  const [currentPage, setCurrentPage] = useState(location.pathname)

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
  }

  function updateShowingData() {
    const id = sessionStorage.getItem('id')

    const data = getCondoById(id || '0')

    data.then((res) => {
      setNomeCliente(res.nome)
    })
  }

  updateShowingData()

  function clearCredentials() {
    sessionStorage.clear()
  }

  return (
    <>
      <header className="flex justify-between">
        <div className="flex h-full justify-between rounded-3xl bg-marine-700 p-4">
          <nav className="flex flex-col items-center justify-between">
            <img src={logo} alt="" className="h-12 w-44" />
            <div className="flex w-11/12 flex-col items-center gap-4 pb-4">
              <div className="h-20 w-20 rounded-full bg-moss-green-50" />
              <p className="text-center text-2xl text-moss-green-50">
                Olá, {nomeCliente.length > 0 ? nomeCliente : 'Usuário'}
              </p>
            </div>
            <div className="flex w-full flex-col gap-6 rounded-lg bg-moss-green-300 p-2">
              <div
                className={`flex h-14 w-full flex-row items-center justify-center gap-4 p-2 ${
                  currentPage === '/condominio' ? 'selected' : ''
                }`}
              >
                <KanbanSquare className="h-10 w-10 text-marine-900"></KanbanSquare>
                <Link
                  to="/condominio"
                  className={`text-marine-900 ${
                    currentPage === '/condominio' ? 'selected' : ''
                  }`}
                  onClick={() => handlePageChange('/overview')}
                >
                  Overview
                </Link>
              </div>
              <div
                className={`flex h-14 w-full flex-row items-center justify-center gap-4 p-2 ${
                  currentPage === '/pedidos-condominio' ? 'selected' : ''
                }`}
              >
                <ClipboardList className="h-10 w-10 text-marine-900"></ClipboardList>
                <Link
                  to="/pedidos-condominio"
                  className={`text-marine-900 ${
                    currentPage === '/pedidos-condominio' ? 'selected' : ''
                  }`}
                  onClick={() => handlePageChange('/pedidos-condominio')}
                >
                  Pedidos
                </Link>
              </div>
              <div
                className={`flex h-14 w-full flex-row items-center justify-center gap-4 p-2 ${
                  currentPage === '/relatorio-condominio' ? 'selected' : ''
                }`}
              >
                <BarChart4 className="h-10 w-10 text-marine-900"></BarChart4>
                <Link
                  to="/relatorio-condominio"
                  className={`text-marine-900 ${
                    currentPage === '/relatorio-condominio' ? 'selected' : ''
                  }`}
                  onClick={() => handlePageChange('/relatorio-condominio')}
                >
                  Relatório
                </Link>
              </div>
              <div
                className={`flex h-14 w-full flex-row items-center justify-center gap-4 p-2 ${
                  currentPage === '/config-condominio' ? 'selected' : ''
                }`}
              >
                <Cog className="h-10 w-10 text-marine-900"></Cog>
                <Link
                  to="/config-condominio"
                  className={`text-marine-900 ${
                    currentPage === '/config-condominio' ? 'selected' : ''
                  }`}
                  onClick={() => handlePageChange('/config-condominio')}
                >
                  Configurações
                </Link>
              </div>
            </div>
            <div className="mt-5 flex h-14 w-44 items-center justify-center rounded-lg bg-moss-green-300 p-2">
              <p className="flex select-none items-center gap-6 text-xl">
                <LogOut size={28} className="text-marine-900" />
                <p className="lative cursor-pointer text-marine-900 transition-all duration-100">
                  <Link to="/acesso" onClick={clearCredentials}>
                    Sair
                  </Link>
                </p>
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
