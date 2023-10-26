import React, { useState } from 'react'

interface MembersProps {
  nome: string
  cargo: string
  texto: string
  img: string
}

function Members({ nome, cargo, texto, img }: MembersProps) {
  const [hovered, setHovered] = useState(false)

  const handleHoveredOver = () => {
    setHovered(true)
  }

  const handleHoveredOut = () => {
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
                rounded-lg border-4
                border-moss-green-800 bg-[url('@/assets/img/augusto.jpg')] bg-cover
                bg-center
                transition-all duration-500
                hover:cursor-pointer
                hover:border-solid
                "
        style={{ backgroundImage: `url(${img})` }}
        onMouseOver={handleHoveredOver}
        onMouseOut={handleHoveredOut}
      >
        <div
          className={`test
                absolute
                ${hovered ? 'top-0' : 'top-48'}
                flex h-48
                w-full
                flex-col
                justify-start
                gap-2
                bg-moss-green-700/90 p-2
                transition-all duration-300
                `}
        >
          <h5 className="text-lg font-medium text-gray-50">{nome}</h5>
          <p className="text-base text-camel-300">{cargo}</p>
          <p className="text-md text-center text-camel-50">{texto}</p>
        </div>
      </div>
      <p className="font-mono text-lg font-medium text-moss-green-200 transition-all duration-300">
        {nome}
      </p>
    </div>
  )
}

export default Members
