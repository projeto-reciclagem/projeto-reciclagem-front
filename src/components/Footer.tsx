import {
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
} from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.25)]">
      <section className="flex h-44 min-w-full justify-around">
        <section className="flex flex-col items-center gap-6 py-4">
          <h1 className="text-2xl font-medium">Fale Conosco</h1>
          <ul className="list-disc">
            <li>Rua Haddock Lobo, 595,</li>
            <li>suporte@ecosystem.com</li>
            <li>(11) 3589-4043</li>
          </ul>
        </section>
        <section className="flex flex-col items-center gap-6 py-4">
          <h1 className="text-2xl font-medium">Sobre nós</h1>
          <ul className="list-disc">
            <li>Quem somos</li>
            <li>Nossos produtos</li>
            <li>Seja um parceiro</li>
          </ul>
        </section>
        <section className="flex flex-col items-center gap-6 py-4">
          <h1 className="text-2xl font-medium">Redes sociais</h1>
          <div className="flex items-center justify-between gap-6 py-3">
            <WhatsappLogo size={40} />
            <FacebookLogo size={40} />
            <InstagramLogo size={40} />
          </div>
        </section>
      </section>
      <div className="flex min-w-full items-center justify-center">
        <p className="text-xs">
          Todos os direitos reservados à EcoSystem. EcoSystem&copy; 2023
        </p>
      </div>
    </footer>
  )
}
