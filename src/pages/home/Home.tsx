import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { CardsSlider } from '../../components/CardsSlider'
import { CarrosselSlider } from '../../components/CarrosselSlider'

import HomeSection1 from '@/assets/img/home-section1.jpg'

export default function Home() {
  return (
    <main className='min-w-full min-h-screen bg-moss-green-50'>
      <Header />
      <CarrosselSlider />
      <section className='flex justify-around px-28 py-12 gap-16 min-w-full'>
        <section className='flex flex-col gap-4 max-w-[618px]'>
          <h1 className='font-medium text-4xl text-camel-900 w-[618px]'>
            A melhor coisa é poder ajudar o mundo do conforto de casa
          </h1>
          <p className='text-xl text-marine-900 w-[618px]'>
            Com nossa solução você poderá ajudar o meio-ambiente, sentado do seu 
            próprio celular, ajudando também outras pessoas!
          </p>
          <h3 className='text-xl font-medium text-marine-900 w-[618px]'>
            Aqui estão alguns dos materiais que você pode estar reciclando:
          </h3>
          <CardsSlider />
        </section>
        <figure>
          <img src={HomeSection1} alt="" className='w-full h-full odd:rounded-3xl shadow-md'/>
        </figure>
      </section>
      <section className='min-w-full px-28 py-14 bg-[url("@/assets/img/home-section2.jpg")] bg-cover'>
        <section className='flex flex-col justify-center items-start w-[816px] gap-8 text-white text-2xl font-light'>
          <h1 className='font-medium text-5xl'>Se torne uma empresa parceira!</h1>
          <p>
            A <b>EcoSystem</b> nasceu com um propósito simples: <b>transformar</b> o mercado de produtos recicláveis.
          </p>
          <p>
            Se a sua empresa trabalha com produtos recicláveis ou se você se interessa pelo nosso projeto, 
            <b> adoraríamos</b> tê-lo como nosso parceiro!
          </p>
          <p>Juntos, podemos fazer a diferença e contribuir para um mundo mais sustentável.</p>
          <Link to={'parceiro'}>
            <button className='bg-moss-green-300 text-zinc-950 font-normal px-4 py-2 rounded-2xl hover:bg-moss-green-500 hover:text-white transition-all'>
              Seja um parceiro
            </button>
          </Link>
        </section>
      </section>
      <Footer />
    </main>
  )
}