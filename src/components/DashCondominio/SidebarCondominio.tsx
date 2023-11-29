import logo from '@/assets/eco-system-logo.svg'
import { LogOut } from 'lucide-react'
import { useState } from 'react'
import { KanbanSquare, MessageCircle, ClipboardList, BarChart4, Cog } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/dash-condominio.css';

export default function SideBarCondominio() {

    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(location.pathname);

    const handlePageChange = (page : string) => {
        setCurrentPage(page);
    }

    return (
        <>
            <header className='flex'>
                <div className='flex justify-between h-full self-center rounded-3xl bg-marine-700 p-4'>
                    <nav className='flex flex-col gap-2 items-center self-center'>
                        <img src={logo} alt="" className='w-44 h-12' />
                        <div className="flex w-11/12 flex-col items-center gap-2 pb-4">
                            <div className="h-20 w-20 rounded-full bg-moss-green-50" />
                            <p className="text-2xl text-moss-green-50">Olá, User!</p>
                        </div>
                        <div className='flex flex-col p-2 gap-6 bg-moss-green-300 rounded-lg'>
                            <div className={`flex flex-row h-14 gap-4 justify-center items-center w-40 p-2 ${currentPage === '/condominio' ? 'selected' : ''}`}>
                                <KanbanSquare className='w-10 h-10 text-marine-900'></KanbanSquare>
                                <Link to="/condominio" className={`text-marine-900 ${currentPage === '/condominio' ? 'selected' : ''}`}
            onClick={() => handlePageChange('/overview')}>Overview</Link>
                            </div>
                            <div className={`flex flex-row h-14 gap-4 justify-center items-center w-40 p-2 ${currentPage === '/chat-condominio' ? 'selected' : ''}`}>
                                <MessageCircle className='w-10 h-10 text-marine-900'></MessageCircle>
                                <Link to="/chat-condominio" className={`text-marine-900 ${currentPage === '/chat-condominio' ? 'selected' : ''}`}
            onClick={() => handlePageChange('/chat-condominio')}>Chat</Link>
                            </div>
                            <div className={`flex flex-row h-14 gap-4 justify-center items-center w-40 p-2 ${currentPage === '/pedidos-condominio' ? 'selected' : ''}`}>
                                <ClipboardList className='w-10 h-10 text-marine-900'></ClipboardList>
                                <Link to="/pedidos-condominio" className={`text-marine-900 ${currentPage === '/pedidos-condominio' ? 'selected' : ''}`}
            onClick={() => handlePageChange('/pedidos-condominio')}>Pedidos</Link>
                            </div>
                            <div className={`flex flex-row h-14 gap-4 justify-center items-center w-40 p-2 ${currentPage === '/relatorio-condominio' ? 'selected' : ''}`}>
                                <BarChart4 className='w-10 h-10 text-marine-900'></BarChart4>
                                <Link to="/relatorio-condominio" className={`text-marine-900 ${currentPage === '/relatorio-condominio' ? 'selected' : ''}`}
            onClick={() => handlePageChange('/relatorio-condominio')}>Relatório</Link>
                            </div>
                            <div className={`flex flex-row h-14 gap-4 justify-center items-center w-40 p-2 ${currentPage === '/config-condominio' ? 'selected' : ''}`}>
                                <Cog className='w-10 h-10 text-marine-900'></Cog>
                                <Link to="/config-condominio" className={`text-marine-900 ${currentPage === '/config-condominio' ? 'selected' : ''}`}
            onClick={() => handlePageChange('/config-condominio')}>Configurações</Link>
                            </div>
                        </div>
                        <div className="flex p-2 w-44 h-14 items-center mt-5 justify-center rounded-lg bg-moss-green-300">
                            <p className="flex select-none items-center gap-6 text-xl">
                                <LogOut size={28} className="text-marine-900" />
                                <p className="text-marine-900 lative cursor-pointer transition-all duration-100">
                                    <Link to="/acesso">Sair</Link>
                                </p>
                            </p>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}