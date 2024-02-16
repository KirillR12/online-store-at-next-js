'use client'

import styles from './styles.module.scss'
import { useBasket } from '../model/state/basketState'
import { Navbar } from '@/src/widgets/Navbar/ui/Navbar'
import { BasketContent } from './BasketContent/BasketContent'

export const BasketPage = () => (
    <div className={styles.BasketPage}>
        <Navbar />
        <h3>МОЯ КОРЗИНА</h3>
        <BasketContent />
    </div>
)
