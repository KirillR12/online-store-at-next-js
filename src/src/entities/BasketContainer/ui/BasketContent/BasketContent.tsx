import { memo, useCallback } from 'react'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { useItems } from '../..'
import styles from './styles.module.scss'
import { BasketCard } from '../BasketCard/BasketCard'
import { Loader } from '@/src/shared/ui/Loader/Loader'
import { getProductsByIds } from '@/src/shared/api/api'
import { BasketSwiper } from '../BasketSwiper/BasketSwiper'
import { Navbar } from '@/src/widgets/Navbar'

export const BasketContent = memo(() => {
    const itemsLength = useItems((state) => state.itemsInCart)
    const deleteItemsAll = useItems((state) => state.deleteItemsAll)

    const { data, isLoading, isSuccess } = useQuery({
        queryKey: [itemsLength],
        queryFn: getProductsByIds,
    })

    const deleteAll = useCallback(() => {
        deleteItemsAll()
    }, [])

    if (!itemsLength.length) {
        return (
            <div className={styles.basketBlockPage}>
                <Navbar />
                <h3>МОЯ КОРЗИНА</h3>
                <div className={styles.emptyBlock}>
                    <img src="/empty.svg" alt="." />
                    <h4>ВАША КОРЗИНА ПУСТА</h4>
                    <p>Добавьте в нее товары из каталога</p>
                    <Link href="/">
                        <button className={styles.emptyBasketBtn} type="button">Перейти в католог</button>
                    </Link>
                </div>
                <BasketSwiper />
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className={styles.basket}>
                <div>
                    <p>{`${itemsLength.length} товара`}</p>
                    <div className={styles.blockLeft} />
                    <Loader />
                </div>
            </div>
        )
    }

    if (isSuccess) {
        const arr = data?.map((el) => Number(el.price))
        const res = arr?.reduce((sum, elem) => sum + elem, 0)

        return (
            <>
                <div className={styles.basketBlockPage}>
                    <Navbar />
                    <h3>МОЯ КОРЗИНА</h3>
                    <div className={styles.blockText}>
                        <p className={styles.blockRigthText}>{`${itemsLength.length} товаров`}</p>
                    </div>
                    <div className={styles.basket}>
                        <div>
                            <div className={styles.blockLeft}>
                                <p className={styles.blockLeftP}>Товар</p>
                                <div className={styles.blockLeftContainer}>
                                    <p className={styles.blockLeftP}>Количество</p>
                                    <p className={styles.blockLeftP}>Сумма</p>
                                    <button type="button" onClick={deleteAll} className={styles.deleteBtn}>
                                        <p style={{ color: '#5D6C7B' }} className={styles.blockLeftP}>Удалить все</p>
                                    </button>
                                </div>
                            </div>
                            {data.map((el) => <BasketCard key={el.id} el={el} />)}
                        </div>
                        <div className={styles.blockRigth}>
                            <p className={styles.blockRigthText}>Итого</p>
                            <h4>{`${res} ₽`}</h4>
                            <hr className={styles.basketHr} />
                            <div className={styles.blockRigthBlock}>
                                <p className={styles.blockRigthText}>Стоимость товаров</p>
                                <h6 className={styles.blockRigthBlockTitle}>{`${res} ₽`}</h6>
                            </div>
                            <div className={styles.blockRigthBlock}>
                                <p className={styles.blockRigthText}>Сумма скидки</p>
                                <h6 className={styles.blockRigthBlockTitle}>8 000 ₽</h6>
                            </div>
                            <div className={styles.blockRigthBlock}>
                                <p className={styles.blockRigthText}>Итого без учета доставки</p>
                                <h6 className={styles.blockRigthBlockTitle}>{`${res - 8000} ₽`}</h6>
                            </div>
                            <hr className={styles.basketHr} />
                            <button type="button" className={styles.blockRigthBtn}>
                                Оформить заказ
                            </button>
                            <div className={styles.blockRigthBlockUpper}>
                                <input className={styles.blockRigthBlockInput} type="checkbox" />
                                <p className={styles.blockRigthTextUpper}>
                                    Нажимая на кнопку, вы соглашаетесь
                                    <br />
                                    на обработку персональных данных
                                    <br />
                                    и
                                    <a href="." className={styles.blockRigthBlockA}> политикой конфиденциальности</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <BasketSwiper />
            </>
        )
    } return <h1>Произошла ошибка</h1>
})
