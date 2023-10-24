import EC from '@/assets/EC.svg'
import symbol from '@/assets/symbol.svg'
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  const handleQuemSomos = () => {
    navigate('/quem-somos')
  }

  const redeSociais = [
    { nome: 'Facebook', icone: 'facebook' },
    { nome: 'Instagram', icone: 'instagram' },
    { nome: 'Linkedin', icone: 'linkedin' },
    { nome: 'Whatsapp', icone: 'whatsapp' },
  ]

  return (
    <footer
      className="relative
         z-[2] mt-[30vh] flex w-full
        items-center justify-around gap-8 bg-moss-green-100 py-16 shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)]"
    >
      <section className="flex h-full w-4/12 flex-col justify-between gap-10">
        <div
          className="logo flex w-3/4 cursor-pointer"
          onClick={handleNavigate}
        >
          <img src={EC} className="w-20" />
          <img src={symbol} className="mr-2 w-20" />
          <ul className="relative h-[6em] overflow-hidden text-moss-green-800">
            <li
              className="footer__li relative top-0 list-none text-[4em]"
              style={{ animation: 'slide 8s steps(4) infinite' }}
            >
              System
            </li>
            <li
              className="footer__li relative top-0 list-none text-[4em]"
              style={{ animation: 'slide 8s steps(4) infinite' }}
            >
              Recicle!
            </li>
            <li
              className="footer__li relative top-0 list-none text-[4em]"
              style={{ animation: 'slide 8s steps(4) infinite' }}
            >
              Reutilize!
            </li>
            <li
              className="footer__li relative top-0 list-none text-[4em]"
              style={{ animation: 'slide 8s steps(4) infinite' }}
            >
              Reduza!
            </li>
          </ul>
        </div>
        <div className="flex w-6/12 flex-col gap-3">
          <p
            className="footer__contact relative flex cursor-pointer items-center gap-3
            text-xl text-camel-800 transition-all duration-100 hover:translate-x-4 hover:text-moss-green-800 hover:before:w-3/4"
          >
            Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001
          </p>
          <div>
            <p
              className="footer__contact relative flex cursor-pointer items-center 
            gap-3 text-xl text-camel-800 transition-all duration-100 hover:translate-x-4 hover:text-moss-green-800 hover:before:w-6/12"
            >
              suporte@ecosystem.com
            </p>
            <p
              className="footer__contact relative flex cursor-pointer items-center gap-3
            text-xl text-camel-800 transition-all duration-100 hover:translate-x-4 hover:text-moss-green-800 hover:before:w-5/12"
            >
              +55 (11) 3589-4043
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          {redeSociais.map((rede) => {
            const Icon =
              rede.icone === 'facebook'
                ? FacebookLogo
                : rede.icone === 'instagram'
                ? InstagramLogo
                : rede.icone === 'linkedin'
                ? LinkedinLogo
                : WhatsappLogo

            return (
              <a
                href={`https://www.${rede.nome.toLowerCase()}.com`}
                target="_blank"
                className="text-4xl text-moss-green-700 transition-all hover:-translate-y-1"
              >
                <Icon size={40} />
              </a>
            )
          })}
        </div>
      </section>
      <section className="flex w-5/12 flex-col items-center justify-start gap-16 border-l-2 border-moss-green-600 py-3 pl-10">
        <p
          className="text-primary-500 text-justify font-mono text-3xl text-moss-green-800"
          style={{
            wordSpacing: '5px',
            letterSpacing: '3px',
            lineHeight: '50px',
          }}
        >
          "Abra sua mente para uma nova era de sustentabilidade através da
          reciclagem"
        </p>
        <div className="flex w-full">
          <div className="left w-2/4">
            <ul className="flex flex-col gap-4">
              <li
                className="footer__options relative w-3/4 cursor-pointer whitespace-nowrap
              font-mono text-4xl text-moss-green-500 transition-all duration-100 hover:translate-x-4 hover:text-moss-green-800 hover:before:w-full hover:after:w-full"
              >
                Seja um Parceiro
              </li>
              <li
                onClick={handleQuemSomos}
                className="footer__options relative w-[60%] cursor-pointer whitespace-nowrap
                font-mono text-4xl text-moss-green-500 transition-all duration-100 hover:translate-x-4 hover:text-moss-green-800 hover:before:w-full hover:after:w-full"
              >
                Quem somos
              </li>
            </ul>
          </div>
          <div className="right flex w-2/4 flex-col gap-1"></div>
        </div>
        <p className="flex w-full text-left font-mono text-moss-green-400">
          Copyright &copy; 2023 EcoSystem{' '}
        </p>
        {/* "A maior ameaça ao nosso planeta é a crença de que outra pessoa irá salvá-lo." */}
      </section>
    </footer>
  )
}
