import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function ImageSwiper({images}) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={1}
      className='w-full'
    >
      {images.map((img, index)=>(
        <SwiperSlide key={index}>
          <img src={img} alt="slide image" className='w-full aspect-[3/3.5] object-cover' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
