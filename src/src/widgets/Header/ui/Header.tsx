import Image from 'next/image'
import { FC } from 'react'
import { Button } from 'antd'
import Search from 'antd/es/input/Search'
import Link from 'next/link'
import styles from './styles.module.scss'

export const Header: FC = () => (
    <>
        <header className={styles.Header}>
            <div className={styles.navUpper}>
                <nav className={styles.navLeft}>
                    <Button type="link" style={{ padding: '0 15px 0 0' }} danger>Сервис</Button>
                    <Button type="link" style={{ padding: '0 15px' }} danger>Сотрудничество</Button>
                    <Button type="link" style={{ padding: '0 15px' }} danger>Заказать звонок</Button>
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
            </div>
            <hr className={styles.hr} />
            <div className={styles.middle}>
                <Link href="/">
                    <h2>
                        KUGGO
                    </h2>
                </Link>
                <Button
                    type="primary"
                    size="large"
                    style={{ width: 114, margin: '0 20px 0 0' }}
                >
                    Primary
                </Button>
                <Search
                    className={styles.search}
                    placeholder="Искать самокат KUGO"
                    allowClear
                    enterButton
                    size="large"
                    style={{ width: 603 }}
                />
                <i className={styles.middleIcons}>
                    <Image src="/comparison.svg" alt="" width={20} height={20} />
                </i>
                <i className={styles.middleIcons}>
                    <Image src="/favourite.svg" alt="" width={20} height={20} />
                </i>
                <Link href="/basket">
                    <i className={styles.middleIcons}>
                        <Image src="/basket.svg" alt="" width={20} height={20} />
                    </i>
                    Корзина
                </Link>
            </div>
        </header>
        <nav className={styles.navLower}>
            <div className={styles.navLowerItems}>
                <Button className={styles.btnText} style={{ padding: '0 15px 0 0' }} type="text">О магазине</Button>
                <Button className={styles.btnText} type="text">Доставка и оплата</Button>
                <Button className={styles.btnText} type="text">Тест-драйв</Button>
                <Button className={styles.btnText} type="text">Блог</Button>
                <Button className={styles.btnText} type="text">Контакты</Button>
                <Button className={styles.btnText} type="text">Акции</Button>
            </div>
        </nav>
    </>
)
