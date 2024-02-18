import { useQuery } from 'react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { memo } from 'react'
import { getAllProduct } from '@/src/shared/api/api'
import { ProductSchema } from '@/src/shared/lib/schema'
import './styles.css'
import { MainCart } from '@/src/entities/MainContent'

export const BasketSwiper = memo(() => {
    const {
        data, isSuccess,
    } = useQuery({
        queryKey: [],
        queryFn: getAllProduct,
    })

    if (isSuccess) {
        return (
            <div className="containerSwipperBasket">
                <h3>Рекомендуется вам</h3>
                <div className="containerSwipperBlock">
                    <Swiper
                        slidesPerView={4}
                        loop
                        modules={[Autoplay]}
                        autoplay={{ delay: 1000, stopOnLastSlide: true, disableOnInteraction: false }}
                    >
                        {data.map((el: ProductSchema) => (
                            <SwiperSlide key={el.id}>
                                <MainCart el={el} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        )
    } return <h1>Произошла ошибка</h1>
})
