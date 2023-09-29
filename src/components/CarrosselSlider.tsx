import { Slider } from "./Slider";
import { SwiperSlide } from "swiper/react";

export function CarrosselSlider() {
  const settings = {
    spaceBetween: 48,
    effect: 'fade',
    slidesPerView: 1,
    navigation: true,
    centeredSlides: true,
    style: {
      width: '97%',
      height: '656px',
      padding: '1.5rem',
    },
    loop: true,
    initialSlide: 1
  }

  const contents = [
    {
      bgImg: 'bg-carousel-item3',
      title: 'Transformando o mercado de produtos recicláveis.',
      text: 'Nossa empresa busca a transformação do mercado de produtos recicláveis, mostrando a importância de reciclar para o dia a dia e para nosso mundo.'
    },
    {
      bgImg: 'bg-carousel-item1',
      title: 'A solução para a sua cooperativa e para o seu condomínio.',
      text: 'A ECO System conecta cooperativas de reciclagem à condomínios que precisam descartar seus resíduos.'
    },
    {
      bgImg: 'bg-carousel-item2',
      title: 'Conheça um novo modo de reciclar!',
      text: 'Com a ECO System, você pode reciclar seu lixo quando quiser, e ainda recebe cashback por isso.'
    },
  ]
    
  return (
    <Slider settings={settings}>
      {contents.map((content) => (
        <SwiperSlide key={content.bgImg} className='flex justify-center items-center'>
          <div className={`flex flex-col justify-center w-11/12 h-[608px] px-16 gap-8 ${content.bgImg} bg-cover rounded-3xl shadow-lg`}>
            <h1 className='text-3xl font-medium w-[568px] text-leaf-500 leading-normal'>
              {content.title}
            </h1>
            <p className='text-2xl w-[568px] leading-snug text-white'>
              {content.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  )
}