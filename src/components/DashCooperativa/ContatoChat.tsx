import { useState } from 'react'

interface ContatoChatProps {
  id: string
  status: string
  condominio: string
  mensagem: string
  data: string
  hora: string
}

export default function ContatoChat(props: ContatoChatProps) {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }

  return (
    <>
      <li
        className="relative flex w-full cursor-pointer items-center gap-5"
        onClick={openModal}
        id={props.id}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-moss-green-50">
          <span
            className={`icon material-symbols-outlined text-4xl ${
              props.status === 'online'
                ? 'text-moss-green-600'
                : props.status == 'offline'
                  ? 'text-camel-600'
                  : 'text-black'
            }`}
          >
            apartment
          </span>
        </div>
        <div className="w-2/4">
          <h6 className="overflow-hidden whitespace-nowrap text-xl font-medium">
            {props.condominio}
          </h6>
          <p className="w-full overflow-hidden whitespace-nowrap text-sm">
            {props.mensagem}
          </p>
        </div>
        <span className="absolute right-0 flex flex-col items-center">
          <p>{props.hora}</p>
          <p>{props.data}</p>
        </span>
      </li>

      <div
        className={`modal ${
          modal ? 'block' : 'hidden'
        } absolute right-16 top-6 h-[95%] w-[70%] rounded-2xl bg-marine-50`}
        id={`${props.id + 'modal-content'}`}
      >
        <div className="relative h-full">
          <nav className="flex h-40 w-full items-center justify-between rounded-b-3xl bg-moss-green-500 px-24">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-moss-green-50">
              <span className="material-symbols-outlined text-4xl text-moss-green-600">
                apartment
              </span>
            </div>
            <h4 className="text-3xl text-moss-green-50">{props.condominio}</h4>
            <span className="material-symbols-outlined text-3xl text-moss-green-50">
              more_vert
            </span>
          </nav>

          {/* input de escrever mensagem */}
          <div className="absolute bottom-0 flex h-24 w-full items-center justify-center gap-10 rounded-t-3xl bg-moss-green-300 px-24">
            <input
              type="text"
              className="h-14 w-4/5 rounded-full bg-moss-green-50 px-8 text-xl text-moss-green-600 placeholder-moss-green-300 placeholder:text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-moss-green-500"
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
