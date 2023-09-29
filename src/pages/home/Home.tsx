import { Link } from 'react-router-dom'
import { CardsSlider } from '../../components/CardsSlider'
import { CarrosselSlider } from '../../components/CarrosselSlider'

import EcoSystemLogoBlack from '@/assets/eco-system-black-logo.svg'
import HomeSection1 from '@/assets/img/home-section1.jpg'

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
      <nav className='flex items-center justify-between min-w-full px-28 py-3 bg-[#F1F1F1] shadow-lg'>
        <img src={EcoSystemLogoBlack} alt="Logo da EcoSystem com texto em preto" />
        <div className='flex gap-6 font-mono text-sm'>
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
      <CarrosselSlider />
      <section className='flex justify-between px-28 py-12 gap-16 min-w-full'>
        <section className='flex flex-col gap-4 max-w-[618px]'>
          <h1 className='font-medium text-4xl text-camel-900 w-[618px]'>
            A melhor coisa é poder ajudar o mundo do conforto de casa
          </h1>
          <p className='text-xl text-marine-900 w-[618px]'>
            Com nossa solução você poderá ajudar o meio-ambiente, sentado do seu próprio celular, ajudando também outras pessoas!
          </p>
          <h3 className='text-xl font-medium text-marine-900 w-[618px]'>
            Aqui estão alguns dos materiais que você pode estar reciclando:
          </h3>
          <CardsSlider />
        </section>
        <figure>
          <img src={HomeSection1} alt="" className='rounded-3xl'/>
        </figure>
      </section>
    </main>
  )
}