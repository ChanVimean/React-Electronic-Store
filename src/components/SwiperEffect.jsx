import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"



const SwiperEffect = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect='fade'
      navigation={true}
      pagination={{clickable: true}}
      modules={[Navigation, Pagination, EffectFade]}
      className='mySwiper w-100 h-100'
    >
      <SwiperSlide>
        <div className='text-center position-absolute z-3 top-50 start-50 translate-middle text-light font-poppins'>
          <h1>Today Special</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugit.</p>
          <button className='px-4 py-2 mt-3 fs-5 btn btn-outline-light rounded-0'>Shop Now</button>
        </div>
        <img
          src="https://cdn.mos.cms.futurecdn.net/ygzQsBASZAUvZAgqJT8iUd-1200-80.jpg"
          alt="image"
          style={{ filter: "brightness(60%)" }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div className='text-center position-absolute z-3 top-50 start-50 translate-middle text-light font-poppins'>
          <h1>Today Special</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugit.</p>
          <button className='px-4 py-2 mt-3 fs-5 btn btn-outline-light rounded-0'>Shop Now</button>
        </div>
        <img
          src="https://www.stuff.tv/wp-content/uploads/sites/2/2021/04/Stuff-Best-Laptop-Lead.png"
          alt="image"
          style={{ filter: "brightness(60%)" }}
        />
      </SwiperSlide>

      <SwiperSlide>
        <div className='text-center position-absolute z-3 top-50 start-50 translate-middle text-light font-poppins'>
          <h1>Today Special</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, fugit.</p>
          <button className='px-4 py-2 mt-3 fs-5 btn btn-outline-light rounded-0'>Shop Now</button>
        </div>
        <img
          src="https://datascripmall.id/media/Laptop_Dell.jpg"
          alt="image"
          style={{ filter: "brightness(60%)" }}
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperEffect
