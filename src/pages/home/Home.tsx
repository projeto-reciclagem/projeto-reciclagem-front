import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CardsSlider } from '../../components/CardsSlider'
import { CarrosselSlider } from '../../components/CarrosselSlider'
import LastSection from '../../components/LastSection'

export default function Home() {
  return (
    <>
      <main className="h-full w-full bg-moss-green-50">
        <Header />
        <CarrosselSlider />
        <section className="mx-auto mb-24 flex h-[80vh] w-5/6 gap-24 py-32">
          <div className="flex w-[650px] flex-col justify-center gap-4 ">
            <h1 className="w-[618px] text-4xl font-medium text-camel-900">
              A melhor coisa é poder ajudar o mundo do conforto de casa
            </h1>
            <p className="w-[618px] text-xl text-marine-900">
              Com nossa solução você poderá ajudar o meio-ambiente, sentado do
              seu próprio celular, ajudando também outras pessoas!
            </p>
            <h3 className="w-[618px] text-xl font-medium text-marine-900">
              Aqui estão alguns dos materiais que você pode estar reciclando:
            </h3>
            <CardsSlider />
          </div>
          <figure className=" w-2/3 rounded-lg bg-[url('@/assets/img/recicle.jpg')] bg-cover bg-bottom" />
        </section>
        <LastSection>
          <section className='h-[100vh] w-full bg-[url("@/assets/img/imageSection2.png")] bg-cover bg-bottom'>
            <div
              className="flex h-full w-7/12 flex-col items-start justify-center gap-8 bg-marine-900 px-20 text-2xl font-light text-white"
              style={{ borderRadius: '0px 25em 0 0' }}
            >
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
                Juntos, podemos fazer a diferença e contribuir para um mundo
                mais sustentável.
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
