import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const carouselItems = [
  {
    id: 1,
    src: 'bg-carousel-item1',
    title: 'A solução para a sua cooperativa e para o seu condomínio.',
    content: `A ECO System traz a conexão que sua cooperativa precisa com
    condomínios da sua região e vice-versa, trazendo benefícios
    de ambos os lados.`,
  },
  {
    id: 2,
    src: 'bg-carousel-item2',
    title: 'Conheça um novo modo de reciclar!',
    content: `Com a ECO System, você pode reciclar seu lixo quando quiser, e ainda recebe recompensas por isso.`,
  },
  {
    id: 3,
    src: 'bg-carousel-item3',
    title: 'Transformando o mercado de produtos recicláveis.',
    content: `Nossa empresa busca a transformação do mercado de produtos recicláveis, 
    mostrando a importância de reciclar para o dia a dia e para nosso mundo.`,
  },
]

export function MainCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-[81rem]"
    >
      <CarouselContent>
        {carouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <div
              className={`${item.src} flex h-[28rem] flex-col justify-center gap-8 rounded-2xl bg-cover bg-center px-6`}
            >
              <div className="flex w-2/3 flex-col justify-center gap-8 px-8">
                <h1 className="text-4xl font-bold text-leaf-500">
                  {item.title}
                </h1>
                <p className="w-3/4 text-xl text-white">{item.content}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-moss-green-400 bg-moss-green-50 text-moss-green-600 hover:border-moss-green-600 hover:bg-moss-green-200" />
      <CarouselNext className="border-moss-green-400 bg-moss-green-50 text-moss-green-600 hover:border-moss-green-600 hover:bg-moss-green-200" />
    </Carousel>
  )
}
