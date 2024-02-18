import { useQuery } from 'react-query'
import { memo } from 'react'
import styles from './styles.module.scss'
import { getOneProduct } from '@/src/shared/api/api'
import { Loader } from '@/src/shared/ui/Loader/Loader'
import { ItemSwipper } from '../..'

interface ItemDetaliProps {
    id: string | string[]
 }

export const ItemDetali = memo(({ id }: ItemDetaliProps) => {
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: [`${id}`],
        queryFn: getOneProduct,
    })

    if (isLoading) {
        return (
            <div className={styles.loaderBlock}>
                <Loader />
            </div>
        )
    }

    if (isSuccess) {
        return (
            <div className={styles.itemDetali}>
                <ItemSwipper el={data.image} />
                <div>
                    <div className={styles.blockRigth}>
                        <h3>
                            {data.name}
                        </h3>
                        <div className={styles.blockRigthInfo}>
                            <span className={styles.blockRigthInfoText}>Просмотров 350</span>
                            <span className={styles.blockRigthInfoText}>Купили 196 раз</span>
                            <span className={styles.blockRigthInfoText}>Артикул: 2200000000026</span>
                        </div>
                        <div className={styles.blockBtnLower}>
                            <div>
                                <img src="/ellipsGreen.svg" alt="." />
                                <span className={styles.blockBtnLowerText}>В наличии</span>
                            </div>
                            <button type="button" className={styles.blockBtnLowerBtn}>
                                <img src="/balance.svg" alt="." />
                                <span className={styles.blockBtnLowerText}>Сравнить</span>
                            </button>
                            <button type="button" className={styles.blockBtnLowerBtn}>
                                <img src="/share.svg" alt="." />
                                <span className={styles.blockBtnLowerText}>Поделиться</span>
                            </button>
                        </div>
                        <div className={styles.blockClueContant}>
                            <div>
                                <p className={styles.blockRigthInfoTextThrough}>39 900 ₽</p>
                                <h4>{`${data.price} ₽`}</h4>
                            </div>
                            <div className={styles.clueBlock}>
                                <img src="/map.svg" alt="." />
                                <div className={styles.blockRigthInfoClue}>
                                    <span className={styles.blockRigthInfoText}>Рассрочка:</span>
                                    <span className={styles.blockRigthInfoTitle}>1 760 ₽ в месяц / 24 месяца</span>
                                </div>

                            </div>
                        </div>
                        <div className={styles.blockEquipment}>
                            <h6>Комплектация</h6>
                            <img src="/question.svg" alt="." />
                        </div>
                        <div className={styles.btnBlockItemDetali}>
                            <button type="button" className={styles.itemDetaliBtn}>Базовая</button>
                            <button type="button" className={styles.itemDetaliBtn}>Версия MAX</button>
                            <button type="button" className={styles.itemDetaliBtn}>VIP-версия</button>
                        </div>
                        <hr />
                        <div className={styles.blockAboutTire}>
                            <div className={styles.blockAboutTireContent}>
                                <span className={styles.itemDetaliSmallText}>Покрышки</span>
                                <h6>Внедорожная шипованная</h6>
                                <span className={styles.blockBtnLowerTextTire} style={{ marginLeft: '0' }}>
                                    + установка (с доп.комплектом базовых покрышек)
                                </span>
                                <h6 className={styles.blockBtnLowerTitleTire}>7600 руб.</h6>
                            </div>
                            <button type="button" className={styles.PinkButton}>Изменить</button>
                        </div>
                        <hr />
                        <h6>Гарантия</h6>
                        <div className={styles.btnBlockItemDetali}>
                            <button type="button" className={styles.itemDetaliBtn}>Стандартная 1 год</button>
                            <button type="button" className={styles.itemDetaliBtn}>Стандартная 2 года</button>
                        </div>
                        <hr />
                        <h6>Дополнительные услуги</h6>
                        <div className={styles.btnBlockItemDetali}>
                            <button type="button" className={styles.itemDetaliBtn}>Нет</button>
                            <button type="button" className={styles.itemDetaliBtn}>Гидроизоляция</button>
                            <button type="button" className={styles.itemDetaliBtn}>Настройка</button>
                            <button type="button" className={styles.itemDetaliBtn}>Гидроизоляция и настройка</button>
                        </div>
                        <hr />
                        <div className={styles.blockTime}>
                            <h6>Подарочная упаковка</h6>
                            <div className={styles.blockTimeContent}>
                                <span className={styles.blockRigthInfoText}>До конца акции</span>
                                <h6>06:34:23:02</h6>
                            </div>
                        </div>
                        <div className={styles.blockPresentBlock}>
                            <h6 className={styles.blockPresentBlockTitle}>2 подарка при покупке</h6>
                            <div className={styles.blockPresentBlockContainer}>
                                <div className={styles.blockPresentLift}>
                                    <img src="/detaliItem1.svg" alt="." />
                                    <span className={styles.blockRigthInfoText}>
                                        Книга «6 вопросов об
                                        <br />
                                        электротранспорте, на которые
                                        <br />
                                        вы должны знать ответ».
                                    </span>
                                </div>
                                <div className={styles.blockPresentRigth}>
                                    <img src="/detaliItem2.svg" alt="." />
                                    <span className={styles.blockRigthInfoText}>

                                        Универсальный
                                        <br />
                                        держатель
                                        <br />
                                        для телефона
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.btnBlockItemDetali}>
                            <button type="button" className={styles.itemDetaliBtn}>Без упаковки</button>
                            <button type="button" className={styles.itemDetaliBtn}>
                                <div className={styles.ellipseViolet} />
                                <span>Синий</span>
                            </button>
                            <button type="button" className={styles.itemDetaliBtn}>
                                <div className={styles.ellipsePink} />
                                <span>Розовый</span>
                            </button>
                            <button type="button" className={styles.itemDetaliBtn}>
                                <div className={styles.ellipseRed} />
                                <span>Красный</span>
                            </button>
                        </div>
                        <div className={styles.finalBlock}>
                            <div className={styles.blockTime}>
                                <h3>45 900 руб.</h3>
                                <button className={styles.btnButton} type="button">
                                    {}
                                    <img className={styles.imgIconBasket} src="/heart.svg" alt="" width={20} height={20} />
                                </button>
                            </div>
                            <hr className={styles.hrBlock} />
                            <div className={styles.finalBlockLower}>
                                <img src="truck.svg" alt="." />
                                <p>
                                    Бесплатная доставка по РФ
                                    <br />
                                    от 1 дня при заказе до 01.09
                                </p>
                            </div>
                            <div className={styles.finalBlockBtn}>
                                <button type="button" className={styles.itemDetaliLowerBtn}>Купить в 1 клик</button>
                                <button type="button" className={styles.itemDetaliLowerFloodedBtn}>Добавить в корзину</button>
                            </div>
                        </div>
                        <button type="button" className={styles.PinkButton}>Хотите купить позже?</button>
                    </div>
                </div>
            </div>
        )
    } return <h1>Произошла ошибка</h1>
})
