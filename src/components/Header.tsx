import { Link } from 'react-router-dom'

import logo from '@/assets/eco-system-black-logo.svg'

import { Button } from './ui/button'

export function Header() {
  return (
    <header className="flex items-center justify-between px-16 py-3">
      <img src={logo} alt="" />
      <nav className="flex items-center gap-4 font-mono">
        <a href="">Seja um parceiro</a>
        <a href="">Quem somos</a>
        <Link to="/sign-in">
          <Button className="rounded-lg bg-moss-green-400 px-4 py-2 text-zinc-50 hover:bg-moss-green-600">
            Acessar
          </Button>
        </Link>
      </nav>
    </header>
  )
}
