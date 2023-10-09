import { Slider } from './Slider'
import { SwiperSlide } from 'swiper/react'
import {
  Newspaper,
  BeerBottle,
  BatteryEmpty,
  Martini,
} from '@phosphor-icons/react'

export function CardsSlider() {
  const settings = {
    spaceBetween: 24,
    slidesPerView: 3,
    style: {
      width: '618px',
    },
  }

  const contents = [
    {
      color: 'bg-cards-paper',
      material: 'Papel',
      Icon: Newspaper,
      text: 'Jornais, revistas, cadernos, embalagens e papelão.',
    },
    {
      color: 'bg-cards-plastic',
      material: 'Plástico',
      Icon: BeerBottle,
      text: 'Garrafas, sacos, sacolas, potes, tampas e utensílios domesticos',
    },
    {
      color: 'bg-cards-metal',
      material: 'Metal',
      Icon: BatteryEmpty,
      text: 'Latas, peças de alumínio, peças de cobre, chumbo, bronze, fios e pequenas sucatas',
    },
    {
      color: 'bg-cards-glass',
      material: 'Vidro',
      Icon: Martini,
      text: 'Garrafas, frascos, potes e copos de qualquer cor',
    },
  ]

  return (
    <Slider settings={settings}>
      {contents.map((content) => (
        <SwiperSlide
          key={content.material}
          className={`flex h-[248px] flex-col items-center justify-between px-4 py-6 ${content.color} rounded-3xl`}
        >
          <h3 className="text-xl font-medium">{content.material}</h3>
          <content.Icon size={48} />
          <p className="w-[141px] text-center text-base font-medium leading-6">
            {content.text}
          </p>
        </SwiperSlide>
      ))}
    </Slider>
  )
}
