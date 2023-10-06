import { useState } from 'react'

interface MembersProps {
  nome: string
  cargo: string
  texto: string
  img: string
}

function Members({ nome, cargo, texto, img }: MembersProps) {
  const [hovered, setHovered] = useState(false)

  const handleMouseOver = () => {
    setHovered(true)
  }

  const handleMouseOut = () => {
    setHovered(false)
  }

  return (
    <div className="flex flex-col items-center mx-8">
      <div
        className="members-main
                w-48
                h-48
                flex
                relative
                overflow-hidden
                rounded-full
                transition-all duration-500
                bg-[url('@/assets/img/augusto.jpg')] bg-cover bg-center
                hover:h-80
                hover:border-solid border-4 border-moss-green-800
                hover:bg-top
                hover:mt-6
                hover:cursor-pointer
                z-10
                "
        style={{ backgroundImage: `url(${img})` }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="test
                w-full
                h-44
                flex flex-col
                justify-start
                p-2
                bg-moss-green-700/75
                absolute top-48
                "
        >
          <h5 className="text-lg font-medium text-gray-50">{nome}</h5>
          <p className="text-base">{cargo}</p>
          <p className="text-sm text-camel-50 text-center">{texto}</p>
        </div>
      </div>
      <p
        className="transition-all duration-300 text-lg font-medium"
        style={{
          position: hovered ? 'relative' : 'static',
          top: hovered ? '-50px' : '0',
        }}
      >
        {nome}
      </p>
    </div>
  )
}

export default Members
