import { CarrosselSlider } from '../../components/CarrosselSlider'
import HomeSection1 from '@/assets/img/home-section1.jpg'
import { Slider } from '../../components/Slider'
import { SwiperSlide } from 'swiper/react'
import Header from '../../components/Header'

export function Home() {
  const cardsSettings = {
    spaceBetween: 24,
    slidesPerView: 3,
    style: {
      width: '618px'
    }
  }
  
  return (
    <main className='min-w-full min-h-screen bg-moss-green-50'>
      {/* TODO componentizar */}
      <Header />
      <CarrosselSlider />
      {/* TODO fazer o bloco com os cards de reciclagem */}
      <section className='flex justify-between px-28 py-12 gap-16 min-w-full border border-red-600'>
        <section className='flex flex-col gap-4 max-w-[618px]'>
          <h1 className='font-medium text-4xl text-camel-900 w-[618px]'>
            A melhor coisa é poder ajudar o mundo do conforto de casa
          </h1>
          <p className='text-xl text-marine-900 w-[618px]'>
            Com nossa solução você poderá ajudar o meio-ambiente, sentado do seu próprio celular, ajudando também outras pessoas!
          </p>
          <h3 className='text-xl font-medium text-marine-900 w-[618px]'>
            Aqui estão alguns dos materiais que você pode estar reciclando:
          </h3>
          <Slider settings={cardsSettings}>
            <SwiperSlide className='h-[248px] px-4 py-6 bg-cards-paper rounded-3xl'>
            </SwiperSlide>
            <SwiperSlide className='h-[248px] px-4 py-6 bg-cards-plastic rounded-3xl'> 
            </SwiperSlide>
            <SwiperSlide className='h-[248px] px-4 py-6 bg-cards-metal rounded-3xl'>
            </SwiperSlide>
            <SwiperSlide className='h-[248px] px-4 py-6 bg-cards-glass rounded-3xl'>
            </SwiperSlide>
          </Slider>
        </section>
        <figure>
          <img src={HomeSection1} alt="" className='rounded-3xl'/>
        </figure>
     </section>
    </main>
  )
}