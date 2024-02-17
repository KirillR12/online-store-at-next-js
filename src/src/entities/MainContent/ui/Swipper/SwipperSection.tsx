'use client'

import styles from './styles.module.scss'
import { SwiperBlock } from './SwiperBlock/SwiperBlock'

export const SwipperSection = () => (
    <section className={styles.swipperBlock}>
        <h3 className={styles.title}>Отзывы и фото реальных покупателей</h3>
        <SwiperBlock />
    </section>
)
