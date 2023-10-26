import React, { useEffect, useState } from 'react'

interface Props {
  label: string
  type: string
  id: string
  children?: React.ReactNode
}

export default function Input({ label, type, id, children }: Props) {
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    const inputElement = document.getElementById(id) as HTMLInputElement

    const handleFocus = () => {
      setFocused(true)
    }

    const handleBlur = () => {
      if (!inputElement.value) {
        setFocused(false)
      }
    }

    inputElement.addEventListener('focus', handleFocus)
    inputElement.addEventListener('blur', handleBlur)

    return () => {
      inputElement.removeEventListener('focus', handleFocus)
      inputElement.removeEventListener('blur', handleBlur)
    }
  }, [id])

  if (type === null) {
    type = 'text'
  }

  return (
    <div className="input-group relative w-full">
      <label
        htmlFor={id}
        className={`absolute ${
          focused ? '-top-7' : 'top-1/4'
        } text-moss-green-50 transition-all duration-150`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`w-full select-none rounded-none border-b-2  border-moss-green-700
            bg-transparent p-2 text-lg text-moss-green-100 outline-none`}
      />
      {children}
    </div>
  )
}
