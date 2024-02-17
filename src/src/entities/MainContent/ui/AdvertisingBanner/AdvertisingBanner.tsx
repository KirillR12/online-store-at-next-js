'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    A11y, Autoplay, Navigation, Pagination, Scrollbar,
} from 'swiper/modules'
import styles from './styles.module.scss'

export const AdvertisingBanner = () => (
    <>
        <div className={styles.AdvertisingBanner}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                loop
                className="mySwiper"
                navigation
                autoplay={{ delay: 2000, stopOnLastSlide: true, disableOnInteraction: false }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <article className={styles.article}>
                        <div className={styles.articleBlockText}>
                            <div className={styles.articleBlockNew}>
                                <p className={styles.articleBlockNewP}>Новинка</p>
                            </div>
                            <h1 className={styles.articleTitle}>
                                ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN
                                <br />
                                ОТ ОФИЦИАЛЬНОГО ДИЛЕРА
                            </h1>
                            <p className={styles.articleText}>с бесплатной доставкой по РФ от 1 дня </p>
                            <button className={styles.articleBtn} type="button">
                                Перейти в католог
                            </button>
                        </div>
                        <div className={styles.articleBlockImg}>
                            <Image className={styles.imgArticle} src="/scooter.svg" alt="" width={538} height={405} />
                            <p className={styles.behindText}>KIRIN</p>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.article}>
                        <div className={styles.articleBlockText}>
                            <div className={styles.articleBlockNew}>
                                <p className={styles.articleBlockNewP}>Новинка</p>
                            </div>
                            <h1 className={styles.articleTitle}>
                                ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN
                                <br />
                                ОТ ОФИЦИАЛЬНОГО ДИЛЕРА
                            </h1>
                            <p className={styles.articleText}>с бесплатной доставкой по РФ от 1 дня </p>
                            <button className={styles.articleBtn} type="button">
                                Перейти в католог
                            </button>
                        </div>
                        <div className={styles.articleBlockImg}>
                            <Image className={styles.imgArticle} src="/scooter.svg" alt="" width={538} height={405} />
                            <p className={styles.behindText}>KIRIN</p>
                        </div>
                    </article>
                </SwiperSlide>
                <SwiperSlide>
                    <article className={styles.article}>
                        <div className={styles.articleBlockText}>
                            <div className={styles.articleBlockNew}>
                                <p className={styles.articleBlockNewP}>Новинка</p>
                            </div>
                            <h1 className={styles.articleTitle}>
                                ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN
                                <br />
                                ОТ ОФИЦИАЛЬНОГО ДИЛЕРА
                            </h1>
                            <p className={styles.articleText}>с бесплатной доставкой по РФ от 1 дня </p>
                            <button className={styles.articleBtn} type="button">
                                Перейти в католог
                            </button>
                        </div>
                        <div className={styles.articleBlockImg}>
                            <Image className={styles.imgArticle} src="/scooter.svg" alt="" width={538} height={405} />
                            <p className={styles.behindText}>KIRIN</p>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className={styles.detailsBlockCenter}>
            <div className={styles.detailsBlock}>
                <div>
                    <h4>ГАРАНТИЯ 1 ГОД</h4>
                    <p>на весь ассортимент</p>
                </div>
                <div>
                    <h4>РАССРОЧКА</h4>
                    <p>от 6 месяцев</p>
                </div>
                <div>
                    <h4>ПОДАРКИ</h4>
                    <p>и бонусам к покупкам</p>
                </div>
            </div>
            <img src="/grade.svg" alt="." />
        </div>
    </>
)
