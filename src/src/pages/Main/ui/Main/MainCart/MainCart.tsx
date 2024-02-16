import classNames from 'classnames'
import Image from 'next/image'
import styles from './styles.module.scss'
import { ProductSchema } from '../../../model/types/ProductSchema'
import { useBasket } from '@/src/pages/Basket'

 interface MainCartProps {
   className?: string
   el: ProductSchema
}

export const MainCart = (props: MainCartProps) => {
    const {
        el,
        className,
    } = props

    const addBasketItem = useBasket((state) => state.addBasketItem)

    const toggleAddItem = () => {
        addBasketItem(el)
    }

    return (
        <div className={classNames(styles.MainCart, {}, [className])}>
            <img className={styles.img} src={el.image} alt="." />
            <hr className={styles.hr} />
            <div className={styles.container}>
                <h6>{el.name}</h6>
                <div className={styles.infoCard}>
                    <span className={styles.icon}>
                        <Image className={styles.iconImg} src="/accumulator.svg" alt="." width={18} height={18} />
                        <p className={styles.p}>{`${el.battery} mAh`}</p>
                    </span>
                    <span className={styles.icon}>
                        <Image className={styles.iconImg} src="/speedometer.svg" alt="." width={18} height={18} />
                        <p className={styles.p}>{`${el.speed} км/ч`}</p>
                    </span>
                    <span className={styles.icon}>
                        <Image className={styles.iconImg} src="/power.svg" alt="." width={18} height={18} />
                        <p className={styles.p}>{`${el.power} л.с.`}</p>
                    </span>
                    <span className={styles.icon}>
                        <Image className={styles.iconImg} src="/timer.svg" alt="." width={18} height={18} />
                        <p className={styles.p}>{`${el.times / 60} часов`}</p>
                    </span>
                </div>
                <h6>
                    {el.price}
                    {' '}
                    ₽
                </h6>
                <button className={styles.btnButton} type="button" onClick={toggleAddItem}>
                    <img src="/ellipseBtn.svg" width={40} height={40} alt="." />
                    <img className={styles.img} src="/basket.svg" alt="" width={20} height={20} />
                </button>
            </div>
            <button className={styles.btnCard} type="button">Купить в 1 клик</button>
        </div>
    )
}
