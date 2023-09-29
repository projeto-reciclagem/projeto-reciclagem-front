import { ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { A11y, Navigation, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

interface SliderProps {
  settings: SwiperProps 
  children: ReactNode
}

export function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper
      modules={[EffectFade, Navigation, Pagination, A11y]}
      {...settings}
      className='flex'
    >
      {children}
    </Swiper>
  )
}