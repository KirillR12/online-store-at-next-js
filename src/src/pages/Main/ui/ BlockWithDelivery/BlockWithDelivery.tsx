import classNames from 'classnames'
import Image from 'next/image'
import styles from './styles.module.scss'

 interface BlockWithDeliveryProps {
   className?: string
}

export const BlockWithDelivery = ({ className }: BlockWithDeliveryProps) => (
    <div className={classNames(styles.BlockWithDelivery, {}, [className])}>
        <Image className={styles.imgDrone} src="/drone.svg" alt="." width={800} height={620} />
        <div className={styles.BlockWithDeliveryContent}>
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
    </div>
)
