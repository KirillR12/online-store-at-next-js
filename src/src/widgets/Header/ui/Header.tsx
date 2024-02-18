'use client'

import Image from 'next/image'
import {
    FC, memo, useCallback, useState,
} from 'react'
import { Button } from 'antd'
import Link from 'next/link'
import { UnorderedListOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import styles from './styles.module.scss'
import { ModalBasket } from '@/src/shared/ui/ModalBasket/ModalBasket'
import { useItems } from '@/src/entities/BasketContainer'

export const Header: FC = memo(() => {
    const itemsLength = useItems((state) => state.itemsInCart).length

    const [state, setState] = useState(false)
    const [stateWindow, setStateWindow] = useState(false)

    const isActionCatalog = useCallback(() => {
        setState((prev) => !prev)
    }, [])

    const isWindowBasketAction = useCallback(() => {
        setStateWindow((prev) => !prev)
    }, [])

    return (
        <>
            <header className={styles.Header}>
                <section className={styles.navUpper}>
                    <nav className={styles.navLeft}>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Сервис</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Сотрудничество</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Заказать звонок</Button>
                        <div className={styles.i}>
                            <i>
                                <Image src="/viber.svg" alt="" width={12} height={12} />
                            </i>
                            <i>
                                <Image src="/whatsapp.svg" alt="" width={12} height={12} />
                            </i>
                            <i>
                                <Image src="/telegram.svg" alt="" width={12} height={12} />
                            </i>
                        </div>
                    </nav>
                    <div className={styles.navRigth}>
                        <a href="tel:+78005055461" className={styles.aMargin}>+7 (800) 505-54-61</a>
                        <Image src="/group.svg" alt="" width={12} height={12} />
                    </div>
                </section>
                <hr className={styles.hr} />

                <div className={styles.middleHeader}>
                    <Link href="/">
                        <h2>
                            KUGGO
                        </h2>
                    </Link>
                    <button
                        type="button"
                        className={styles.btnMiddle}
                        onClick={isActionCatalog}
                    >
                        <UnorderedListOutlined />
                        Каталог
                    </button>
                    <form className={styles.formMiddle}>
                        <select className={styles.selectSearch}>
                            <option>Везде</option>
                        </select>
                        <input
                            className={styles.searchMiddle}
                            placeholder="Искать самокат KUGO"
                        />

                        <button
                            type="submit"
                            className={styles.btnSearch}
                        >
                            <img src="/search.svg" alt="." />
                        </button>

                    </form>
                    <div className={styles.blockMiddleLeft}>
                        <i className={styles.middleIcons}>
                            <Image src="/comparison.svg" alt="" width={20} height={20} />
                        </i>
                        <i className={styles.middleIcons}>
                            <Image src="/favourite.svg" alt="" width={20} height={20} />
                        </i>
                        <button
                            className={styles.btnBasket}
                            onClick={isWindowBasketAction}
                            type="button"
                        >
                            <img
                                src="/basket.svg"
                                alt=""
                                className={styles.btnIcon}
                                width={20}
                                height={20}
                            />
                            <div className={styles.quantity}>
                                <p className={styles.quantityP}>{itemsLength}</p>
                            </div>
                            <p>Корзина</p>
                        </button>
                    </div>
                </div>
            </header>
            <div className={classNames(styles.catalogBlock, { [styles.catalogBlockNone]: state })}>
                <div className={styles.catalogBlockLeft}>
                    <Button className={styles.btnText} type="text">
                        <img src="/electric-scooter.svg" alt="." className={styles.catalogBlockLeftImg} />
                        Электросамокаты
                    </Button>
                    <Button className={styles.btnText} type="text">
                        <img src="/mountain-bike.svg" alt="." className={styles.catalogBlockLeftImg} />
                        Электроскутеры
                    </Button>
                    <Button className={styles.btnText} type="text">
                        <img src="/scooter-2.svg" alt="." className={styles.catalogBlockLeftImg} />
                        Электровелосипеды
                    </Button>
                    <Button className={styles.btnText} type="text">
                        <img src="/vacuum-cleaner.svg" alt="." className={styles.catalogBlockLeftImg} />
                        Робот-пылесосы
                    </Button>
                    <Button className={styles.btnText} type="text">
                        <img src="/weighing-scale.svg" alt="." className={styles.catalogBlockLeftImg} />
                        Весы
                    </Button>
                </div>
                <div className={styles.catalogBlockCenter}>
                    <h6>Особенности</h6>
                    <div className={styles.catalogBlockBtn}>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Внедорожный</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Городской</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Зимний</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">С сиденьем</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Без сиденья</Button>
                    </div>
                </div>
                <div className={styles.catalogBlockRigth}>
                    <h6>Для кого</h6>
                    <div className={styles.catalogBlockBtn}>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Для детей и подростков</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Для взрослых</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Для пенсионеров</Button>
                    </div>
                </div>
            </div>
            <nav className={styles.navLower}>
                <div className={styles.navLowerItems}>
                    <Button className={styles.btnText} style={{ padding: '0 15px 0 0' }} type="text">О магазине</Button>
                    <div className={styles.navLowerItemBtn}>
                        <Button style={{ display: 'flex' }} className={styles.btnText} type="text">
                            Доставка и оплата
                            <div className={styles.navLowerItem}>
                                <p className={styles.navLowerItemP}>
                                    Доступна рассрочка
                                </p>
                            </div>
                        </Button>
                    </div>
                    <Button className={styles.btnText} type="text">Тест-драйв</Button>
                    <Button className={styles.btnText} type="text">Блог</Button>
                    <Button className={styles.btnText} type="text">Контакты</Button>
                    <Button style={{ display: 'flex' }} className={styles.btnText} type="text">
                        Акции
                        <div className={styles.navLowerItemPromotion}>
                            <p className={styles.navLowerItemP}>
                                %
                            </p>
                        </div>
                    </Button>
                </div>
            </nav>
            <ModalBasket state={stateWindow} quantityBasket={itemsLength} />
        </>
    )
})
