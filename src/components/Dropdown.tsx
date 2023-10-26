import { useState } from 'react'

interface DropdownProps {
  options: string[]
  text: string
  className?: string
}

export default function Dropdown({ options, text, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`dropdown relative` + className}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {text}
      {isOpen && (
        <ul className="options round absolute left-1 top-20 rounded-md bg-moss-green-300 px-4 py-2">
          {options.map((option, index) => (
            <li
              key={index}
              className="text-moss-green-900 transition-all duration-200"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
