import Image from 'next/image'
import { memo } from 'react'
import styles from './styles.module.scss'

export const BlockWithDelivery = memo(() => (
    <article className={styles.BlockWithDelivery}>
        <Image className={styles.imgDrone} src="/drone.svg" alt="." width={800} height={620} />
        <div className={styles.BlockWithDeliveryContent}>
            <div className={styles.blockShares}>
                <p className={styles.blockSharesP}>Акция</p>
            </div>
            <h1>
                БЕСПЛАТНАЯ ДОСТАВКА
                <br />
                ЭЛЕКТРОСАМОКАТОВ
                <br />
                ПО РОССИИ ДО 01.09
            </h1>
            <button type="button" className={styles.contentBtn}>
                <p className={styles.contentBtnP}>Подробнее</p>
            </button>
        </div>
    </article>
))
