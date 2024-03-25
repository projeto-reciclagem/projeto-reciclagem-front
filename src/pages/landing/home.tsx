import { Helmet } from 'react-helmet-async'

import handshake from '@/assets/img/imageSection2.png'
import recicle from '@/assets/img/recicle.jpg'
import { CardsCarousel } from '@/components/cards-carousel'
import { MainCarousel } from '@/components/main-carousel'
import { Button } from '@/components/ui/button'

export function Home() {
  return (
    <>
      <Helmet title="Inicio" />
      <div className="flex flex-col gap-4">
        <div className="mb-8 flex items-center justify-center">
          <MainCarousel />
        </div>

        <main className="mb-8 flex w-full gap-8 px-16">
          <div className="flex w-1/2 flex-col gap-2">
            <h1 className="text-3xl font-semibold text-camel-900">
              A melhor coisa é poder ajudar o mundo do conforto de casa
            </h1>
            <p className="text-xl text-marine-900">
              Com nossa solução você poderá ajudar o meio-ambiente, sentado do
              seu próprio celular, ajudando também outras pessoas!
            </p>
            <p className="text-xl font-medium text-marine-700">
              Aqui estão alguns dos materiais que você pode estar reciclando:
            </p>

            <CardsCarousel />
          </div>

          <img src={recicle} className="w-1/2 rounded-lg object-cover" alt="" />
        </main>

        <div className="relative flex">
          <div className="z-50 flex h-[30rem] w-[50rem] flex-col justify-center gap-10 rounded-tr-[200px] bg-marine-900 px-20">
            <h1 className="text-3xl font-bold text-zinc-50">
              Se torne uma empresa parceira!
            </h1>

            <span className="flex w-[39.25rem] flex-col gap-8">
              <p className="text-xl text-zinc-50">
                A <strong>ECO System</strong> nasceu com um propósito simples:{' '}
                <strong>transformar</strong> o mercado de produtos recicláveis.
              </p>
              <p className="text-xl text-zinc-50">
                Se a sua empresa trabalha com produtos recicláveis ou se você se
                interessa pelo nosso projeto, <strong>adoraríamos</strong> tê-lo
                como nosso parceiro!
              </p>
              <p className="text-xl text-zinc-50">
                Juntos, podemos fazer a diferença e contribuir para um mundo
                mais sustentável.
              </p>
            </span>
            <Button className="w-40 bg-leaf-400 text-lg text-zinc-800 hover:bg-leaf-600">
              Seja um parceiro
            </Button>
          </div>
          <img
            src={handshake}
            className="absolute right-0 h-[30rem] w-[60rem]"
            alt="Duas pessoas dando um aperto de mãos"
          />
        </div>
      </div>
    </>
  )
}
