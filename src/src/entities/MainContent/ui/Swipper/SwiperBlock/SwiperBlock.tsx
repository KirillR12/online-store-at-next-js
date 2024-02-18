import './styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import { memo } from 'react'

export const SwiperBlock = memo(() => (
    <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop
        modules={[Pagination]}
        className="mySwiper"
    >
        <SwiperSlide><img className="imgBlock" src="/photo1.svg" width={370} height={270} alt="." /></SwiperSlide>
        <SwiperSlide><img className="imgBlock" src="/photo2.svg" width={370} height={270} alt="." /></SwiperSlide>
        <SwiperSlide><img className="imgBlock" src="/photo3.svg" width={370} height={270} alt="." /></SwiperSlide>
        <SwiperSlide><img className="imgBlock" src="/photo4.svg" width={370} height={270} alt="." /></SwiperSlide>
        <SwiperSlide><img className="imgBlock" src="/photo5.svg" width={370} height={270} alt="." /></SwiperSlide>
        <SwiperSlide><img className="imgBlock" src="/photo7.svg" width={370} height={270} alt="." /></SwiperSlide>
        <SwiperSlide><img className="imgBlock" src="/photo6.svg" width={370} height={270} alt="." /></SwiperSlide>
    </Swiper>
))
