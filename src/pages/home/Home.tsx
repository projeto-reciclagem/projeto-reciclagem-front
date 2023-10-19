import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CardsSlider } from '../../components/CardsSlider'
import { CarrosselSlider } from '../../components/CarrosselSlider'
import { useEffect } from 'react'
import LastSection from '../../components/LastSection'

export default function Home() {
  return (
    <>
      <main className="h-full w-full bg-moss-green-50">
        <Header />
        <CarrosselSlider />
        <section className="flex gap-24 w-5/6 h-[80vh] mx-auto py-32 mb-24">
          <div className="flex flex-col justify-center w-[650px] gap-4 ">
            <h1 className="w-[618px] text-4xl font-medium text-camel-900">
              A melhor coisa é poder ajudar o mundo do conforto de casa
            </h1>
            <p className="w-[618px] text-xl text-marine-900">
              Com nossa solução você poderá ajudar o meio-ambiente, sentado do seu
              próprio celular, ajudando também outras pessoas!
            </p>
            <h3 className="w-[618px] text-xl font-medium text-marine-900">
              Aqui estão alguns dos materiais que você pode estar reciclando:
            </h3>
            <CardsSlider />
          </div>
          <figure className=" w-2/3 bg-[url('@/assets/img/recicle.jpg')] bg-bottom bg-cover rounded-lg" />
        </section>
        <LastSection>
          <section className='w-full h-[100vh] bg-[url("@/assets/img/imageSection2.png")] bg-bottom bg-cover'>
            <div className="flex flex-col items-start justify-center gap-8 w-7/12 h-full text-2xl px-20 font-light text-white bg-marine-900"
              style={{ borderRadius: '0px 25em 0 0' }}>
              <h1 className="text-5xl font-medium">
                Se torne uma empresa parceira!
              </h1>
              <p>
                A <b>EcoSystem</b> nasceu com um propósito simples:{' '}
                <b>transformar</b> o mercado de produtos recicláveis.
              </p>
              <p>
                Se a sua empresa trabalha com produtos recicláveis ou se você se
                interessa pelo nosso projeto,
                <b> adoraríamos</b> tê-lo como nosso parceiro!
              </p>
              <p>
                Juntos, podemos fazer a diferença e contribuir para um mundo mais
                sustentável.
              </p>
              <Link to={'parceiro'}>
                <button className="rounded-2xl bg-moss-green-300 px-4 py-2 font-normal text-zinc-950 transition-all hover:bg-moss-green-500 hover:text-white">
                  Seja um parceiro
                </button>
              </Link>
            </div>
          </section>
        </LastSection>
        <Footer />
      </main>
    </>
  )
}
