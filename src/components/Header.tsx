import { Link, useNavigate } from 'react-router-dom'

import EcoSystemLogoBlack from '@/assets/eco-system-black-logo.svg'

export default function Header() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/acesso')
  }

  const handleHome = () => {
    navigate('/')
  }

  const navItems = [
    {
      value: 'Seja um parceiro',
      path: '/parceiro',
    },
    {
      value: 'Quem somos',
      path: '/quem-somos',
    },
  ]

  return (
    <nav className="relative z-10 flex min-w-full items-center justify-between bg-[#F1F1F1] px-28 py-3 shadow-lg">
      <img
        onClick={handleHome}
        src={EcoSystemLogoBlack}
        alt="Logo da EcoSystem com texto em preto"
        className="cursor-pointer"
      />
      <div className="flex gap-6 font-mono text-sm">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li
              key={item.path}
              className="
                            relative
                            from-moss-green-200
                            to-moss-green-500
                            text-base
                            before:absolute
                            before:top-full
                            before:h-0.5 before:w-0 before:bg-gradient-to-r
                            before:transition-all
                            before:duration-500
                            before:ease-in-out
                            before:content-['']
                            hover:before:w-full
                        "
            >
              <Link to={item.path}>{item.value}</Link>
            </li>
          ))}
        </ul>
        <button
          className="relative rounded-md bg-moss-green-500 px-6 py-2 text-zinc-50 transition-all duration-500 ease-out hover:bg-moss-green-800"
          onClick={handleLogin}
        >
          Acessar
        </button>
      </div>
    </nav>
  )
}
