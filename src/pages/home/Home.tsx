import EcoSystemLogoBlack from '@/assets/eco-system-black-logo.svg'
import ImageHome from '@/assets/image-home.png'
import { Link } from 'react-router-dom'

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
      <div className='flex justify-center items-center min-w-full border border-red-500'>
        <h1>aqui vai ficar o carrossel</h1>
      </div>
      {/* TODO fazer o bloco com os cards de reciclagem */}
      <div className='flex px-28 py-12 gap-16 border border-red-500'>
        <div className='flex flex-col gap-4 border border-blue-500'>
          <h1>A melhor coisa é poder ajudar o mundo do conforto de casa</h1>
          <p>Com nossa solução você poderá ajudar o meio-ambiente, sentado do seu próprio celular, ajudando também outras pessoas!</p>
          <h3>Aqui estão alguns dos materiais que você pode estar reciclando:</h3>
          <div>Cards</div>
        </div>
        <img src={ImageHome} alt="" />
      </div>
    </main>
  )
}