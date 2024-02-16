import styles from './styles.module.scss'
import { useBasket } from '../..'

export const BasketContent = () => {
    const basket = useBasket((state) => state.basket)

    if (!basket.length) {
        return (
            <div className={styles.emptyBlock}>
                <img src="/empty.svg" alt="." />
                <h4>ВАША КОРЗИНА ПУСТА</h4>
                <p>Добавьте в нее товары из каталога</p>
                <button className={styles.emptyBasketBtn} type="button">Перейти в католог</button>
            </div>
        )
    }

    return (
        <div className={styles.basket}>
            <div>
                <p>{`${basket.length} товара`}</p>
                <div className={styles.blockLeft} />
                {basket.map((el) => (
                    <div key={el.id} className={styles.basketCard}>
                        <div className={styles.basketCardBlock}>
                            <img src={el.image} alt="." className={styles.imgBasket} />
                            <div className={styles.basketCardContent}>
                                <h6>{el.name}</h6>
                                <h6>{`${el.price} ₽`}</h6>
                                <img src="/delete.svg" alt="." />
                            </div>
                        </div>
                        <div className={styles.basketCardLower} />
                        <hr className={styles.basketHr} />
                    </div>
                ))}
            </div>
            <div className={styles.blockRigth} />
        </div>

    )
}
