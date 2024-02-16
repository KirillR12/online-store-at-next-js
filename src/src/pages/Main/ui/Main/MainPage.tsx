'use client'

import classNames from 'classnames'
import { useQuery } from 'react-query'
import Image from 'next/image'
import styles from './styles.module.scss'
import { getAllProduct } from '@/src/shared/api/api'
import { ProductSchema } from '../../model/types/ProductSchema'
import { Loader } from '@/src/shared/ui/Loader/Loader'
import { MainCart } from './MainCart/MainCart'

export const Main = () => {
    const {
        data, isSuccess, isLoading, isError,
    } = useQuery({
        queryKey: [],
        queryFn: getAllProduct,
    })

    if (isError) {
        return (
            <div className={classNames(styles.MainPage, {}, [])}>
                <h3>Произошла ошибка</h3>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className={classNames(styles.MainPage, {}, [])}>
                <Loader />
            </div>
        )
    }
    if (isSuccess) {
        return (
            <div className={classNames(styles.MainPage, {}, [])}>
                <div className={styles.upperContent}>
                    <h3>ЭЛЕКТРОСАМОКАТЫ</h3>
                    <div className={styles.blockBtn}>
                        <button type="button" className={styles.upperBtn}>Хиты продаж</button>
                        <button type="button" className={styles.upperBtn}>Для города</button>
                        <button type="button" className={styles.upperBtn}>Для взрослых</button>
                        <button type="button" className={styles.upperBtn}>Для детей</button>
                    </div>
                </div>
                <ul className={styles.ulMain}>
                    {data.map((el: ProductSchema) => (
                        <MainCart el={el} key={el.id} />
                    ))}
                </ul>
                <button type="button" className={styles.btnCenter}>Смотреть все</button>
                <div className={styles.informationBlock}>
                    <div className={styles.informationBanner}>
                        <div className={styles.titleInformationBlock}>
                            <h4>
                                ПОДБОР МОДЕЛИ
                                <br />
                                ЭЛЕКТРОСАМОКАТА
                            </h4>
                            <p className={styles.textInformationBlock}>
                                Пройдите тест и выберите
                                <br />
                                электросамокат по своим критериям
                            </p>
                            <button className={styles.informationBlockBtn} type="button">
                                <p className={styles.informationBlockBtnP}>Подобрать модель</p>
                                <Image src="/arrow.svg" alt="." width={11} height={11} />
                            </button>
                        </div>

                        <Image
                            className={styles.informationBlockLiftImg}
                            src="/informationBlockLeftImg.svg"
                            alt="."
                            width={310}
                            height={240}
                        />
                        <Image
                            className={styles.informationBlockEllipse}
                            src="/ellipse.svg"
                            alt="."
                            width={446}
                            height={446}
                        />
                        <Image
                            className={styles.informationBlockShadow}
                            src="/shadow.svg"
                            alt="."
                            width={400}
                            height={100}
                        />
                    </div>
                    <div className={styles.informationBanner}>
                        <div className={styles.titleInformationBlock}>
                            <h4>
                                СЕРВИСНОЕ
                                <br />
                                ОБСЛУЖИВАНИЕ
                            </h4>
                            <p className={styles.textInformationBlock}>
                                Крупнейший сервисный центр
                                <br />
                                в России для продуктов Kugoo
                            </p>
                            <button className={styles.informationBlockBtn} type="button">
                                <p className={styles.informationBlockBtnP}>Подобрать модель</p>
                                <Image src="/arrow.svg" alt="." width={11} height={11} />
                            </button>
                        </div>
                        <Image
                            className={styles.informationBlockRigthImg}
                            src="/informationBlockRigthImg.svg"
                            alt="."
                            width={310}
                            height={240}
                        />
                        <Image
                            className={styles.informationBlockEllipse}
                            src="/ellipse.svg"
                            alt="."
                            width={446}
                            height={446}
                        />
                    </div>
                </div>
            </div>
        )
    }
    return 'Произошла ошибка'
}
