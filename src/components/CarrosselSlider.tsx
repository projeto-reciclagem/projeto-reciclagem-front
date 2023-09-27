import { Slider } from "./Slider";
import { SwiperSlide } from "swiper/react";

export function CarrosselSlider() {
  const settingsBanner = {
    spaceBetween: 48,
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
  
  return (
    <Slider settings={settingsBanner}>
      <SwiperSlide className='flex justify-center items-center'>
        <div className='flex items-center w-11/12 h-[608px] px-16 bg-carrossel-item3 bg-cover rounded shadow-lg'>
          <h1 className='text-2xl font-bold text-white'>Slide 3</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <div className='flex items-center w-11/12 h-[608px] px-16 bg-carrossel-item1 bg-cover rounded shadow-lg'>
          <h1 className='text-2xl font-bold text-white'>Slide 1</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <div className='flex items-center w-11/12 h-[608px] px-16 bg-carrossel-item2 bg-cover rounded shadow-lg'>
          <h1 className='text-2xl font-bold text-white'>Slide 2</h1>
        </div>
      </SwiperSlide>
    </Slider>
  )
}