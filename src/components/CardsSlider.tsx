import { Slider } from './Slider'
import { SwiperSlide } from 'swiper/react'
import {
  Newspaper,
  BeerBottle,
  BatteryEmpty,
  Martini,
} from '@phosphor-icons/react'
import { useState } from 'react'

export function CardsSlider() {
  const settings = {
    spaceBetween: 24,
    slidesPerView: 2.5,
    style: {
      width: '550px',
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

  const [hovered, setHovered] = useState(false)

  const handleMouseOver = () => {
    setHovered(true)
  }

  const handleMouseOut = () => {
    setHovered(false)
  }

  return (
    <div className="" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Slider settings={settings}>
        <div
          className="none absolute z-10 h-full w-full items-center justify-center transition-all"
          style={{
            animation: 'fade 2s alternate infinite',
            display: hovered ? 'none' : 'flex',
          }}
        >
          <span
            className="material-symbols-outlined text-[3.5em] transition-all"
            style={{ animation: 'cursor 1500ms alternate infinite' }}
          >
            pan_tool_alt
          </span>
        </div>
        {contents.map((content) => (
          <SwiperSlide
            key={content.material}
            className={`flex h-[278px] flex-col items-center justify-between px-4 py-6 ${content.color} rounded-3xl`}
          >
            <h3 className="text-xl font-medium">{content.material}</h3>
            <content.Icon size={48} />
            <p className="text-center text-base font-medium leading-6">
              {content.text}
            </p>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  )
}
