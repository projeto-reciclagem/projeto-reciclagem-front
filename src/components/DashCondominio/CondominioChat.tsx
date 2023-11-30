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
                className=''>

            </li>
        </>
    )

}