import { Facebook, Instagram, Mail } from 'lucide-react'

import logo from '@/assets/eco-system-black-logo.svg'

export function Footer() {
  return (
    <footer className="flex w-full justify-start gap-96 bg-moss-green-50 px-16 py-8">
      <div className="flex flex-col gap-8 text-camel-700">
        <img src={logo} alt="" className="w-56" />
        <div className="text-xl">
          <p>Rua Haddock, 595 - Cerqueira César,</p>
          <p>São Paulo - SP, 01414-001</p>
          <br />
          <p>suporte@ecosystem.com</p>
          <p>+55 (11) 3589-4043</p>
        </div>

        <div className="flex gap-2 ">
          <Facebook
            size={32}
            className="cursor-pointer text-moss-green-400 transition-colors hover:text-moss-green-600"
          />
          <Instagram
            size={32}
            className="cursor-pointer text-moss-green-400 transition-colors hover:text-moss-green-600"
          />
          <Mail
            size={32}
            className="cursor-pointer text-moss-green-400 transition-colors hover:text-moss-green-600"
          />
        </div>
      </div>

      <div className="flex w-[28.5rem] gap-8 text-moss-green-700">
        <div className="w-px bg-moss-green-500" />

        <div className="flex flex-col justify-between">
          <p className="font-mono text-xl">
            &quot;Abra a sua mente para uma nova era de sustentabilidade através
            da reciclagem&quot;
          </p>

          <div className="flex flex-col">
            <a
              className="text-2xl underline underline-offset-4 transition-all hover:text-moss-green-400 hover:no-underline"
              href=""
            >
              Seja um parceiro
            </a>
            <a
              className="text-2xl underline underline-offset-4 transition-all hover:text-moss-green-400 hover:no-underline"
              href=""
            >
              Quem somos
            </a>
          </div>

          <p>Copyright 2023 &copy; EcoSystem</p>
        </div>
      </div>
    </footer>
  )
}
