import EC from '@/assets/EC.svg'
import symbol from '@/assets/symbol.svg'
import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  }

  const redeSociais = [
    { "nome": "Facebook", "icone": "facebook" },
    { "nome": "Instagram", "icone": "instagram" },
    { "nome": "Linkedin", "icone": "linkedin" },
    { "nome": "Whatsapp", "icone": "whatsapp" }
  ]

  return (
    <footer
      className="shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)]
         w-full relative z-[2] mt-[30vh]
        flex justify-around items-center gap-8 bg-moss-green-100 py-16"
    >
      <section className='w-4/12 h-full flex flex-col gap-10 justify-between'>
        <div className="logo w-3/4 flex cursor-pointer" onClick={handleNavigate}>
          <img src={EC} className='w-20' />
          <img src={symbol} className='w-20 mr-2' />
          <ul className='text-moss-green-800 h-[6em] relative overflow-hidden'>
            <li className='footer__li list-none text-[4em] relative top-0'
              style={{ animation: 'slide 8s steps(4) infinite' }}>System</li>
            <li className='footer__li list-none text-[4em] relative top-0'
              style={{ animation: 'slide 8s steps(4) infinite' }}>Recicle!</li>
            <li className='footer__li list-none text-[4em] relative top-0'
              style={{ animation: 'slide 8s steps(4) infinite' }}>Reutilize!</li>
            <li className='footer__li list-none text-[4em] relative top-0'
              style={{ animation: 'slide 8s steps(4) infinite' }}>Reduza!</li>
          </ul>
        </div>
        <div className="w-6/12 flex flex-col gap-3">
          <p className='flex text-xl items-center gap-3 text-camel-800 relative
            transition-all duration-100 hover:text-moss-green-800 cursor-pointer hover:before:w-3/4 hover:translate-x-4 footer__contact'>
            Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP, 01414-001
          </p>
          <div>
            <p className='flex text-xl items-center gap-3 text-camel-800 
            relative transition-all duration-100 hover:text-moss-green-800 cursor-pointer hover:before:w-6/12 hover:translate-x-4 footer__contact'>suporte@ecosystem.com</p>
            <p className='flex text-xl items-center gap-3 text-camel-800 relative
            transition-all duration-100 hover:text-moss-green-800 cursor-pointer hover:before:w-5/12 hover:translate-x-4 footer__contact'>+55 (11) 3589-4043</p>
          </div>
        </div>
        <div className="flex gap-10">
          {redeSociais.map((rede) => {
            const Icon = rede.icone === 'facebook' ? FacebookLogo : rede.icone === 'instagram' ? InstagramLogo : rede.icone === 'linkedin' ? LinkedinLogo : WhatsappLogo;

            return (
              <a href={`https://www.${rede.nome.toLowerCase()}.com`} target="_blank" className="text-4xl text-moss-green-700 hover:-translate-y-1 transition-all"
              >
                <Icon size={40} />
              </a>
            )
          }
          )}
        </div>
      </section>
      <section className='w-5/12 pl-10 flex flex-col gap-16 items-center justify-start border-l-2 py-3 border-moss-green-600'>
        <p className="text-3xl text-primary-500 font-mono text-moss-green-800 text-justify"
          style={{ wordSpacing: "5px", letterSpacing: '3px', lineHeight: '50px' }}>
          "Abra sua mente para uma nova era de sustentabilidade através da reciclagem"
        </p>
        <div className="flex w-full">
          <div className="left w-2/4">
            <ul className='flex flex-col gap-4'>
              <li className='text-4xl text-moss-green-500 font-mono w-3/4
              relative transition-all duration-100 hover:text-moss-green-800 cursor-pointer hover:before:w-10/12 hover:translate-x-4 footer__contact'>Seja um Parceiro</li>
              <li className='text-4xl text-moss-green-500 font-mono w-4/6
              relative transition-all duration-100 hover:text-moss-green-800 cursor-pointer hover:before:w-9/12 hover:translate-x-4 footer__contact'>Quem somos</li>
            </ul>
          </div>
          <div className="right w-2/4 flex flex-col gap-1">

          </div>
        </div>
        <p className='flex text-moss-green-400 font-mono text-left w-full'>Copyright &copy; 2023 EcoSystem </p>
        {/* "A maior ameaça ao nosso planeta é a crença de que outra pessoa irá salvá-lo." */}
      </section>
    </footer>
  )
}
