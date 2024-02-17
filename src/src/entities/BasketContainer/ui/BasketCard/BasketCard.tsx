import { useItems } from '../..'
import styles from './styles.module.scss'
import { ProductSchema } from '@/src/shared/lib/schema'

 interface BasketCardProps {
   el: ProductSchema,
}

export const BasketCard = (props: BasketCardProps) => {
    const deleteItem = useItems((state) => state.deleteItem)

    const { el } = props

    const {
        id, image, name, price,
    } = el

    const deleteItemBtn = () => {
        deleteItem(id)
    }

    return (
        <div className={styles.basketCard}>
            <div className={styles.basketCardBlock}>
                <img src={image} alt="." className={styles.imgBasket} />
                <div className={styles.basketCardContent}>
                    <h6>{name}</h6>
                    <h6>{`${price} ₽`}</h6>
                    <img src="/delete.svg" alt="." />
                </div>
            </div>
            <div className={styles.basketCardLower} />
            <button onClick={deleteItemBtn} type="button">Удалмть</button>
            <hr className={styles.basketHr} />
        </div>
    )
}
