'use client'

import { memo } from 'react'
import styles from './styles.module.scss'
import { SwiperBlock } from '../SwiperBlock/SwiperBlock'

export const SwipperSection = memo(() => (
    <section className={styles.swipperBlock}>
        <h3 className={styles.title}>Отзывы и фото реальных покупателей</h3>
        <SwiperBlock />
    </section>
))
