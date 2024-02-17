import { memo } from 'react'
import { useQuery } from 'react-query'
import { useItems } from '../..'
import styles from './styles.module.scss'
import { BasketCard } from '../BasketCard/BasketCard'
import { Loader } from '@/src/shared/ui/Loader/Loader'
import { getProductsByIds } from '@/src/shared/api/api'

export const BasketContent = memo(() => {
    const itemsLength = useItems((state) => state.itemsInCart)
    const deleteItemsAll = useItems((state) => state.deleteItemsAll)

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [itemsLength],
        queryFn: getProductsByIds,
    })
    const arr = data?.map((el) => el.price)
    const res = arr?.reduce((sum, elem) => sum + elem, 0)

    const deleteAll = () => {
        deleteItemsAll()
    }

    if (!itemsLength.length) {
        return (
            <div className={styles.emptyBlock}>
                <img src="/empty.svg" alt="." />
                <h4>ВАША КОРЗИНА ПУСТА</h4>
                <p>Добавьте в нее товары из каталога</p>
                <button className={styles.emptyBasketBtn} type="button">Перейти в католог</button>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className={styles.basket}>
                <button onClick={deleteAll} type="button">Удалить все</button>
                <div>
                    <p>{`${itemsLength.length} товара`}</p>
                    <div className={styles.blockLeft} />
                    <Loader />
                </div>
            </div>
        )
    }

    if (isSuccess) {
        return (
            <div className={styles.basket}>
                <button onClick={deleteAll} type="button">Удалить все</button>
                <div>
                    <p>{`${itemsLength.length} товара`}</p>
                    <div className={styles.blockLeft} />
                    {data.map((el) => <BasketCard key={el.id} el={el} />)}
                </div>
                <div className={styles.blockRigth}>
                    Сумма товара
                    {res}
                </div>
            </div>
        )
    } return <h1>Произошла ошибка</h1>
})
