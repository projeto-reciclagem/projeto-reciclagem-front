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
    <div className="mx-8 flex flex-col items-center">
      <div
        className="members-main
                relative
                z-10
                flex
                h-48
                w-48
                overflow-hidden
                rounded-full border-4
                border-moss-green-800 bg-[url('@/assets/img/augusto.jpg')] bg-cover
                bg-center
                transition-all duration-500 hover:mt-6
                hover:h-80
                hover:cursor-pointer
                hover:border-solid
                hover:bg-top
                "
        style={{ backgroundImage: `url(${img})` }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="test
                absolute
                top-48
                flex h-44
                w-full
                flex-col
                justify-start
                bg-moss-green-700/75 p-2
                "
        >
          <h5 className="text-lg font-medium text-gray-50">{nome}</h5>
          <p className="text-base">{cargo}</p>
          <p className="text-center text-sm text-camel-50">{texto}</p>
        </div>
      </div>
      <p
        className="text-lg font-medium transition-all duration-300"
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
