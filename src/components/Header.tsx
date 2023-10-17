import { Link } from 'react-router-dom'

import EcoSystemLogoBlack from '@/assets/eco-system-black-logo.svg'

export default function Header() {
  const navItems = [
    {
      value: 'Seja um parceiro',
      path: '/parceiro',
    },
    {
      value: 'Quem somos',
      path: '/quem-somos',
    },
    {
      value: 'Cadastro',
      path: '/cadastro',
    },
  ]

  return (
    <nav className="relative z-10 flex min-w-full items-center justify-between bg-[#F1F1F1] px-28 py-3 shadow-lg">
      <img
        src={EcoSystemLogoBlack}
        alt="Logo da EcoSystem com texto em preto"
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
        <Link to={'/login'}>
          <button className="relative rounded-md bg-moss-green-500 px-6 py-2 text-zinc-50 transition-all duration-500 ease-out hover:bg-moss-green-800">
            Login
          </button>
        </Link>
      </div>
    </nav>
  )
}
