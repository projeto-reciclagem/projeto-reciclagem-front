import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CardsSlider } from '../../components/CardsSlider'
import { CarrosselSlider } from '../../components/CarrosselSlider'
import LastSection from '../../components/LastSection'

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center h-full w-full bg-cover bg-moss-green-50">
        <Header />
        <CarrosselSlider />
        <section className="mx-14 h-[60vh] lg:mx-auto lg:mb-24 flex lg:h-[90vh] lg:w-5/6 items-center gap-24">
          <div className="flex lg:w-[650px] flex-col justify-center gap-4 ">
            <h1 className="w-[320px] text-2xl lg:w-[618px] lg:text-4xl font-medium text-camel-900">
              A melhor coisa é poder ajudar o mundo do conforto de casa
            </h1>
            <p className="w-[320px] text-lg lg:w-[618px] lg:text-xl font-normal text-marine-900">
              Com nossa solução você poderá ajudar o meio-ambiente, sentado do
              seu próprio celular, ajudando também outras pessoas!
            </p>
            <h3 className="w-[320px] text-lg lg:w-[618px] lg:text-xl font-normal text-marine-900">
              Aqui estão alguns dos materiais que você pode estar reciclando:
            </h3>
            <CardsSlider />
          </div>
          <div className= "invisible lg:visible lg:h-3/4 lg:w-full rounded-lg bg-[url('@/assets/img/recicle.jpg')] lg:bg-cover lg:bg-bottom lg:bg-no-repeat" />
        </section>
        <LastSection>
          <section className='h-[80vh] lg:h-[100vh] w-full bg-[url("@/assets/img/imageSection2.png")] bg-cover bg-bottom'>
            <div
              className="flex h-full w-40 lg:w-3/12 flex-col items-start justify-center gap-6 lg:gap-10 bg-marine-900 px-10 lg:px-20 font-light text-white"
              style={{ borderRadius: '0px 25em 0 0' }}
            >
              <h1 className="text-md lg:text-5xl font-medium">
                Se torne uma empresa parceira!
              </h1>
              <p className='text-xs lg:text-2xl'>
                A <b>EcoSystem</b> nasceu com um propósito simples:{' '}
                <b>transformar</b> o mercado de produtos recicláveis.
              </p>
              <p className='text-xs lg:text-2xl'>
                Se a sua empresa trabalha com produtos recicláveis ou se você se
                interessa pelo nosso projeto,
                <b> adoraríamos</b> tê-lo como nosso parceiro!
              </p>
              <p className='text-xs lg:text-2xl'>
                Juntos, podemos fazer a diferença e contribuir para um mundo
                mais sustentável.
              </p>
              <Link to={'parceiro'}>
                <button className="rounded-lg lg:rounded-2xl bg-moss-green-300 px-2 lg:px-4 py-1 lg:py-2 font-normal text-xs lg:text-lg text-zinc-950 transition-all hover:bg-moss-green-500 hover:text-white">
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
