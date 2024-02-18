import Link from 'next/link'
import { memo } from 'react'
import styles from './styles.module.scss'
import { Portal } from '../Portal/Portal'

 interface ModalProps {
    state: boolean,
    quantityBasket: number
}

export const ModalBasket = memo((props: ModalProps) => {
    const {
        state,
        quantityBasket,
    } = props

    if (state) {
        return (
            <Portal>
                <div className={styles.container}>
                    <div className={styles.blockContant}>
                        <h6 className={styles.btnText}>В вашей корзине</h6>
                        <p>{`${quantityBasket}  товаров`}</p>
                    </div>
                    <h3>Заглушка</h3>
                    <div className={styles.blockContentUpper}>
                        <Link
                            href="/basket"
                            className={styles.btnMiddle}
                        >
                            Перейти в корзину
                        </Link>
                    </div>
                </div>
            </Portal>
        )
    } return null
})
