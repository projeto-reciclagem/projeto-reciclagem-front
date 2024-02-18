import Autoplay from 'embla-carousel-autoplay'
import { Battery, Martini, Milk, Newspaper } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const recycleCards = [
  {
    id: 1,
    color: 'bg-[#35C1FD]',
    title: 'Papel',
    content: 'Jornais, revistas, cadernos, embalagens e papelão',
    icon: <Newspaper size={48} />,
  },
  {
    id: 2,
    color: 'bg-[#F87272]',
    title: 'Plástico',
    content: 'Garrafas, sacos, sacolas, potes e utensílios domésticos',
    icon: <Milk size={48} />,
  },
  {
    id: 3,
    color: 'bg-[#F8A035]',
    title: 'Metal',
    content: 'Latas, peças de cobre, chumbo, bronze, fios e pequenas sucatas',
    icon: <Battery size={48} />,
  },
  {
    id: 4,
    color: 'bg-[#1BD00B]',
    title: 'Vidro',
    content: 'Garrafas, frascos, potes, vasos e copos de qualquer cor',
    icon: <Martini size={48} />,
  },
]

export function CardsCarousel() {
  return (
    <Carousel
      opts={{ loop: false }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {recycleCards.map((material) => (
          <CarouselItem className="basis-1/3" key={material.id}>
            <div className="p-1">
              <Card className={`${material.color} border-0 p-0`}>
                <CardContent
                  className={`flex h-64 flex-col items-center justify-between pt-6`}
                >
                  <CardTitle>{material.title}</CardTitle>
                  {material.icon}
                  <CardDescription className="text-center text-base font-medium text-black">
                    {material.content}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
