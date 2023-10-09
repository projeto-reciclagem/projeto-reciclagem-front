import { Slider } from './Slider'
import { SwiperSlide } from 'swiper/react'

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
    initialSlide: 1,
  }

  const contents = [
    {
      bgImg: 'bg-carousel-item3',
      title: 'Transformando o mercado de produtos recicláveis.',
      text: 'Nossa empresa busca a transformação do mercado de produtos recicláveis, mostrando a importância de reciclar para o dia a dia e para nosso mundo.',
    },
    {
      bgImg: 'bg-carousel-item1',
      title: 'A solução para a sua cooperativa e para o seu condomínio.',
      text: 'A ECO System conecta cooperativas de reciclagem à condomínios que precisam descartar seus resíduos.',
    },
    {
      bgImg: 'bg-carousel-item2',
      title: 'Conheça um novo modo de reciclar!',
      text: 'Com a ECO System, você pode reciclar seu lixo quando quiser, e ainda recebe cashback por isso.',
    },
  ]

  return (
    <Slider settings={settings}>
      {contents.map((content) => (
        <SwiperSlide
          key={content.bgImg}
          className="flex items-center justify-center"
        >
          <div
            className={`flex h-[608px] w-11/12 flex-col justify-center gap-8 px-16 ${content.bgImg} rounded-3xl bg-cover shadow-lg`}
          >
            <h1 className="w-[568px] text-4xl font-medium leading-normal text-leaf-500">
              {content.title}
            </h1>
            <p className="w-[568px] text-2xl leading-snug text-white">
              {content.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  )
}
