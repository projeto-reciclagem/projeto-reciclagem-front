import logo from '@/assets/eco-system-logo.svg'
import { LogOut } from 'lucide-react'
import { useState } from 'react'
import { KanbanSquare } from 'lucide-react'

interface SideBarCondominioProps {
    children: React.ReactNode
}

export default function SideBarCondominio({ children }: SideBarCondominioProps) {

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
            <main className='flex p-2 gap-4'>
                <div className='flex w-56 justify-between h-5/6 self-center justify-center flex-shrink-0 rounded-3xl bg-marine-700'>
                    <nav className='flex flex-col items-center'>
                        <img src={logo} alt="" className='w-44 h-12' />
                        <div className="flex w-11/12 flex-col items-center gap-5 pb-5">
                            <div className="h-32 w-32 rounded-full bg-moss-green-50" />
                            <p className="text-2xl text-moss-green-50">Olá, User!</p>
                        </div>
                        <div>
                            <KanbanSquare className='w-12 h-12 '></KanbanSquare>
                        </div>
                    </nav>
                </div>
            </main>
        </>
    )
}