import { Link } from 'react-router-dom'
import { CarrosselSlider } from '../../components/CarrosselSlider'

import EcoSystemLogoBlack from '@/assets/eco-system-black-logo.svg'

const navItems = [
  {
    value: "Seja parceiro",
    path: "/parceiro",
  },
  {
    value: "Quem somos",
    path: "/sobre",
  },
  {
    value: "Cadastro",
    path: "/cadastro",
  },
]

export function Home() {
  

  return (
    <main className='min-w-full min-h-screen bg-moss-green-50'>
      {/* TODO componentizar */}
      <nav className='flex items-center justify-between min-w-full px-28 py-3 bg-[#F1F1F1]'>
        <img src={EcoSystemLogoBlack} alt="Logo da EcoSystem com texto em preto" />
        <div className='flex items-center gap-6'>
          <ul className='flex items-center gap-6'>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.value}</Link>
              </li>
            ))}
          </ul>
          <button className='px-4 py-2 bg-moss-green-500 rounded-md text-zinc-50'>
            <Link to={'login'}>Login</Link>
          </button>
        </div>
      </nav>
      {/* TODO carrossel */}
      <CarrosselSlider />
      {/* TODO fazer o bloco com os cards de reciclagem */}
     
    </main>
  )
}