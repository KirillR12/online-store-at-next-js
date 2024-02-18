import { memo, useCallback } from 'react'
import { useItems } from '../..'
import styles from './styles.module.scss'
import { ProductSchema } from '@/src/shared/lib/schema'

 interface BasketCardProps {
   el: ProductSchema,
}

export const BasketCard = memo((props: BasketCardProps) => {
    const deleteItem = useItems((state) => state.deleteItem)

    const { el } = props

    const {
        id, image, name, price,
    } = el

    const deleteItemBtn = useCallback(() => {
        deleteItem(id)
    }, [id])

    return (
        <div className={styles.basketCard}>
            <div className={styles.basketCardBlock}>
                <div className={styles.basketCardContent}>
                    <div className={styles.basketCardContentBlock}>
                        <img src={image} alt="." className={styles.imgBasket} />
                        <div className={styles.basketCardContentBlockMargin}>
                            <h6>{name}</h6>
                            <div className={styles.basketCardConteiner}>
                                <div className={styles.elips} />
                                <p className={styles.basketCardConteinerP}>В наличии</p>
                                <p className={styles.basketCardConteinerP}>+ 2 подарка</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.basketCounterBlock}>
                        <div className={styles.basketCounter}>
                            <button className={styles.basketCounterBtn} type="button">
                                <img src="+.svg" alt="." />
                            </button>
                            <p className={styles.basketCounterP}>1</p>
                            <button className={styles.basketCounterBtn} type="button">
                                <img src="-.svg" alt="." />
                            </button>
                        </div>
                        <h6>{`${price} ₽`}</h6>
                        <button type="button" onClick={deleteItemBtn} className={styles.deleteBtn}>
                            <img src="/delete.svg" alt="." />
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.basketCardSelect}>
                <div className={styles.basketCardLower}>
                    <select className={styles.selectBlock}>
                        <option>Комплектация: стандартная</option>
                    </select>
                    <select className={styles.selectBlock}>
                        <option>Тип покрышки: шоссейная</option>
                    </select>
                    <select className={styles.selectBlock}>
                        <option>Подарочная упаковка:</option>
                    </select>
                    <select className={styles.selectBlock}>
                        <option>Доп.услуги: гидроизоляция</option>
                    </select>
                    <select className={styles.selectBlock}>
                        <option>Гарантия: 1 год</option>
                    </select>
                </div>
            </div>
            <hr className={styles.basketHr} />
        </div>
    )
})
