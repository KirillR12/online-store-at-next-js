'use client'

import { useQuery } from 'react-query'
import { getOneProduct } from '@/src/shared/api/api'
import styles from './styles.module.scss'

 interface ItemDetaliProps {
   id: string | string[]
}

export const ItemDetali = ({ id }: ItemDetaliProps) => {
    const { data, isSuccess } = useQuery({
        queryKey: [`${id}`],
        queryFn: getOneProduct,
    })

    if (isSuccess) {
        return (
            <div className={styles.itemDetali}>
                <div>
                    <img src={data.image} alt="." width={570} height={506} />
                </div>
                <div className={styles.blockRigth}>
                    <h3>
                        {data.name}
                    </h3>
                    <div className={styles.blockRigthInfo}>
                        <p className={styles.blockRigthInfoText}>Просмотров 350</p>
                        <p className={styles.blockRigthInfoText}>Купили 196 раз</p>
                        <p className={styles.blockRigthInfoText}>Артикул: 2200000000026</p>
                    </div>
                    <div>
                        <img src="/ellipsGreen.svg" alt="." />
                        <p>В наличии</p>
                        <button type="button">
                            <img src="/balance.svg" alt="." />
                            Сравнить
                        </button>
                        <button type="button">
                            <img src="/share.svg" alt="." />
                            Поделиться
                        </button>
                    </div>
                    <hr />
                </div>
            </div>
        )
    } return <h1>Произошла ошибка</h1>
}
