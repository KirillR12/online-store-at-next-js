'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import {
    Navigation, Pagination, Scrollbar, A11y,
} from 'swiper/modules'
import styles from './styles.module.scss'

export const SwipperPage = () => (
    <div className={styles.swipperBlock}>
        <h3 className={styles.title}>Отзывы и фото реальных покупателей</h3>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            loop
            slidesPerView={5}
        >
            <SwiperSlide><Image src="/photo2.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo4.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo5.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo6.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo6.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo2.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo4.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo5.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo6.svg" width={370} height={270} alt="." /></SwiperSlide>
        </Swiper>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            loop
            slidesPerView={5}
        >
            <SwiperSlide><Image src="/photo1.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo2.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo4.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo5.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo6.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo6.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo1.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo2.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo4.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo5.svg" width={370} height={270} alt="." /></SwiperSlide>
            <SwiperSlide><Image src="/photo6.svg" width={370} height={270} alt="." /></SwiperSlide>
        </Swiper>
    </div>
)
