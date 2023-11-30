import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CardsSlider } from '../../components/CardsSlider'
import { CarrosselSlider } from '../../components/CarrosselSlider'
import LastSection from '../../components/LastSection'

export default function Home() {
  return (
    <>
      <main className="flex h-full w-full flex-col justify-center bg-moss-green-50 bg-cover">
        <Header />
        <CarrosselSlider />
        <section className="mx-14 flex h-[60vh] items-center gap-24 lg:mx-auto lg:mb-24 lg:h-[90vh] lg:w-5/6">
          <div className="flex flex-col justify-center gap-4 lg:w-[650px] ">
            <h1 className="w-[320px] text-2xl font-medium text-camel-900 lg:w-[618px] lg:text-4xl">
              A melhor coisa é poder ajudar o mundo do conforto de casa
            </h1>
            <p className="w-[320px] text-lg font-normal text-marine-900 lg:w-[618px] lg:text-xl">
              Com nossa solução você poderá ajudar o meio-ambiente, sentado do
              seu próprio celular, ajudando também outras pessoas!
            </p>
            <h3 className="w-[320px] text-lg font-normal text-marine-900 lg:w-[618px] lg:text-xl">
              Aqui estão alguns dos materiais que você pode estar reciclando:
            </h3>
            <CardsSlider />
          </div>
          <div className="invisible rounded-lg bg-[url('@/assets/img/recicle.jpg')] lg:visible lg:h-3/4 lg:w-full lg:bg-cover lg:bg-bottom lg:bg-no-repeat" />
        </section>
        <LastSection>
          <section className='h-[80vh] w-full bg-[url("@/assets/img/imageSection2.png")] bg-cover bg-bottom lg:h-[100vh]'>
            <div
              className="flex h-full w-40 flex-col items-start justify-center gap-6 bg-marine-900 px-10 font-light text-white lg:w-3/12 lg:gap-10 lg:px-20"
              style={{ borderRadius: '0px 25em 0 0' }}
            >
              <h1 className="text-md font-medium lg:text-5xl">
                Se torne uma empresa parceira!
              </h1>
              <p className="text-xs lg:text-2xl">
                A <b>EcoSystem</b> nasceu com um propósito simples:{' '}
                <b>transformar</b> o mercado de produtos recicláveis.
              </p>
              <p className="text-xs lg:text-2xl">
                Se a sua empresa trabalha com produtos recicláveis ou se você se
                interessa pelo nosso projeto,
                <b> adoraríamos</b> tê-lo como nosso parceiro!
              </p>
              <p className="text-xs lg:text-2xl">
                Juntos, podemos fazer a diferença e contribuir para um mundo
                mais sustentável.
              </p>
              <Link to={'parceiro'}>
                <button className="rounded-lg bg-moss-green-300 px-2 py-1 text-xs font-normal text-zinc-950 transition-all hover:bg-moss-green-500 hover:text-white lg:rounded-2xl lg:px-4 lg:py-2 lg:text-lg">
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
