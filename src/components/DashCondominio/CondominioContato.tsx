import { useState } from 'react'
import { Truck } from 'lucide-react'

interface CondominioChatProps {
    id: string
    status: string
    cooperativa: string
    mensagem: string
    data: string
    hora: string
}

export default function CondominioChat(props: CondominioChatProps) {
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    return (
        <>
            <li
                className='flex w-full cursor-pointer items-center gap-4'
                onClick={openModal}
                id={props.id}
            >
                <div className='flex flex-row justify-between'>
                    <div className='flex h-16 w-16 justify-center items-center rounded-full bg-marine-50'>
                        <Truck className={`h-10 w-10 ${props.status === 'online'
                            ? 'text-moss-green-600'
                            : props.status === 'offline'
                                ? 'text-camel-600'
                                : 'text-black'
                            } `} />
                    </div>
                    <div className='w-2/4'>
                        <h6 className='overflow-hidden whitespace-nowrap text-xl font-medium'>
                            {props.cooperativa}
                        </h6>
                        <p className='w-full overflow-hidden whitespace-nowrap text-sm'>
                            {props.mensagem}
                        </p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p>{props.hora}</p>
                        <p>{props.data}</p>
                    </div>
                </div>
            </li>

            <div className={`modal ${modal ? 'block' : 'hidden'
                } absolute right-16 top-6 h-[95%] w-2/4 rounded-2xl bg-marine-50`} id={`${props.id + 'modal-content'}`}>
                <div className='flex h-full'>
                    <nav className="flex h-40 w-full items-center justify-between rounded-b-3xl bg-marine-500 px-24">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-marine-50">
                        <Truck className={`h-16 w-16 ${props.status === 'online'
                            ? 'text-moss-green-600'
                            : props.status === 'offline'
                                ? 'text-camel-600'
                                : 'text-black'
                            } `} />
                        </div>
                        <h4 className="text-3xl text-marine-50">{props.cooperativa}</h4>
                        <span className="material-symbols-outlined text-3xl text-marine-50">
                            more_vert
                        </span>
                    </nav>
                    
                    <div className="absolute bottom-0 flex h-24 w-full items-center justify-center gap-10 rounded-t-3xl bg-marine-300 px-24">
                        <input
                            type="text"
                            className="h-14 w-4/5 rounded-full bg-marine-50 px-8 text-xl text-marine-600 placeholder-marine-300 placeholder:text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-moss-green-500"
                            placeholder="Digite sua mensagem..."
                        />
                        <span className="material-symbols-outlined flex h-16 w-16 cursor-pointer select-none items-center justify-center rounded-full bg-marine-600 text-4xl text-moss-green-50">
                            send
                        </span>
                    </div>
                </div>
            </div>
        </>
    )

}