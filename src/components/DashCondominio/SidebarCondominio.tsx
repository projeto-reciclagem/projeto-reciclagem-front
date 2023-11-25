import logo from '@/assets/eco-system-logo.svg'
import { LogOut } from 'lucide-react'
import { useState } from 'react'
import { KanbanSquare, MessageCircle, ClipboardList, BarChart4, Cog } from 'lucide-react'

interface SideBarCondominioProps {
    children: React.ReactNode
}

export default function SideBarCondominio({ children }: SideBarCondominioProps) {

    return (
        <>
            <main className='flex p-2 gap-4 bg-marine-50'>
                <div className='flex w-56 justify-between h-max self-center flex-shrink-0 rounded-3xl bg-marine-700 p-6'>
                    <nav className='flex flex-col items-center self-center'>
                        <img src={logo} alt="" className='w-44 h-12' />
                        <div className="flex w-11/12 flex-col items-center gap-2 pb-4">
                            <div className="h-32 w-32 rounded-full bg-moss-green-50" />
                            <p className="text-2xl text-moss-green-50">Olá, User!</p>
                        </div>
                        <div className='flex flex-col p-2 gap-4 bg-moss-green-300 rounded-lg'>
                            <div className='flex flex-row h-16 gap-4 justify-center items-center bg-marine-300 w-40 p-2'>
                                <KanbanSquare className='w-10 h-10 text-marine-900'></KanbanSquare>
                                <button className=' text-marine-900'>Overview</button>
                            </div>
                            <div className='flex flex-row h-16 gap-4 justify-center items-center w-40 p-2'>
                                <MessageCircle className='w-10 h-10 text-marine-900'></MessageCircle>
                                <button className=' text-marine-900'>Chat</button>
                            </div>
                            <div className='flex flex-row h-16 gap-4 justify-center items-center w-40 p-2'>
                                <ClipboardList className='w-10 h-10 text-marine-900'></ClipboardList>
                                <button className=' text-marine-900'>Pedidos</button>
                            </div>
                            <div className='flex flex-row h-16 gap-4 justify-center items-center w-40 p-2'>
                                <BarChart4 className='w-10 h-10 text-marine-900'></BarChart4>
                                <button className=' text-marine-900'>Relatório</button>
                            </div>
                            <div className='flex flex-row h-16 gap-4 justify-center items-center w-40 p-2'>
                                <Cog className='w-10 h-10 text-marine-900'></Cog>
                                <button className=' text-marine-900'>Configurações</button>
                            </div>
                        </div>
                        <div className="flex p-2 w-44 h-12 items-center mt-5 justify-center rounded-lg bg-moss-green-300">
                            <p className="flex select-none items-center gap-6 text-xl">
                                <LogOut size={28} className="text-marine-900" />
                                <p className="text-marine-900 lative cursor-pointer transition-all duration-100">
                                    Sair
                                </p>
                            </p>
                        </div>
                    </nav>
                </div>
                
            </main>
        </>
    )
}