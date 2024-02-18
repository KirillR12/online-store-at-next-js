import { memo, useState } from 'react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './styles.css'
import type { Swiper as SwipperType } from 'swiper'

 interface ItemSwipperProps {
   el?: string
}

export const ItemSwipper = memo(({ el }: ItemSwipperProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwipperType | null>(null)

    return (
        <div className="hello">
            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={10}
                navigation
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={5}
                spaceBetween={10}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
                <SwiperSlide><img className="img" src={el} alt="." /></SwiperSlide>
            </Swiper>
        </div>
    )
})
