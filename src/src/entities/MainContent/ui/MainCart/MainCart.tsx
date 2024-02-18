'use client'

import Image from 'next/image'
import Link from 'next/link'
import { memo, useCallback } from 'react'
import styles from './styles.module.scss'
import { useItems } from '@/src/entities/BasketContainer'
import { ProductSchema } from '@/src/shared/lib/schema'

 interface MainCartProps {
   el: ProductSchema
}

export const MainCart = memo((props: MainCartProps) => {
    const {
        el,
    } = props

    const addBasketItem = useItems((state) => state.addBasketItem)

    const {
        id, image, name, battery, speed, power, times, price, status,
    } = el

    const toggleAddItem = useCallback(() => {
        addBasketItem(id)
    }, [id])

    return (
        <div className={styles.MainCart}>
            <div className={styles.MainCartStatus}>
                {status === 'hit' ? (
                    <div className={styles.MainCartStatusHit}>
                        <p className={styles.MainCartStatusP}>Хит</p>
                    </div>
                ) : (
                    <div className={styles.MainCartStatusNew}>
                        <p className={styles.MainCartStatusP}>Новинка</p>
                    </div>
                )}
            </div>
            <Link href={`${el.id}`}>
                <img className={styles.img} src={image} alt="." />
            </Link>
            <hr className={styles.hr} />
            <div className={styles.container}>
                <h6>{name}</h6>
                <Link href={`${el.id}`}>
                    <div className={styles.infoCard}>
                        <span className={styles.icon}>
                            <Image className={styles.iconImg} src="/accumulator.svg" alt="." width={18} height={18} />
                            <p className={styles.p}>{`${battery} mAh`}</p>
                        </span>
                        <span className={styles.icon}>
                            <Image className={styles.iconImg} src="/speedometer.svg" alt="." width={18} height={18} />
                            <p className={styles.p}>{`${speed} км/ч`}</p>
                        </span>
                        <span className={styles.icon}>
                            <Image className={styles.iconImg} src="/power.svg" alt="." width={18} height={18} />
                            <p className={styles.p}>{`${power} л.с.`}</p>
                        </span>
                        <span className={styles.icon}>
                            <Image className={styles.iconImg} src="/timer.svg" alt="." width={18} height={18} />
                            <p className={styles.p}>{`${times / 60} часов`}</p>
                        </span>
                    </div>
                </Link>
                <div className={styles.blockUpperContainer}>
                    <div className={styles.blockUpper}>
                        <p className={styles.blockRigthInfoTextThrough}>39 900 ₽</p>
                        <h6>
                            {price}
                            {' '}
                            ₽
                        </h6>
                    </div>
                    <div className={styles.blockBtnCard}>
                        <button className={styles.btnButton} type="button" onClick={toggleAddItem}>
                            {}
                            <img className={styles.imgIconBasket} src="/basket.svg" alt="" width={20} height={20} id="btn" />
                        </button>
                        <button className={styles.btnButton} type="button" onClick={toggleAddItem}>
                            {}
                            <img className={styles.imgIconBasket} src="/heart.svg" alt="" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
            <button className={styles.btnCard} type="button">Купить в 1 клик</button>
        </div>
    )
})
