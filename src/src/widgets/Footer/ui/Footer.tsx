import classNames from 'classnames'
import { FC, memo } from 'react'
import { Button } from 'antd'
import Image from 'next/image'
import styles from './styles.module.scss'

export const Footer: FC = memo(() => (
    <>
        <div className={styles.upperContent}>
            <h5>
                ОСТАВЬТЕ СВОЮ ПОЧТУ И СТАНЬТЕ ПЕРВЫМ,
                <br />
                КТО ПОЛУЧИТ СКИДКУ НА НОВЫЕ САМОКАТЫ
            </h5>
            <form className={styles.upperForm}>
                <input type="text" id="text" className={styles.inputFooter} placeholder="Введите Ваш email" />
                <input type="button" value="Подписаться" className={styles.inputBtn} />
            </form>
        </div>
        <div className={classNames(styles.Footer, {}, [])}>
            <div className={styles.centerContent}>
                <div className={styles.footerBlockLeft}>
                    <h6>Каталог товаров</h6>
                    <div>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Электросамокаты</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Электроскутеры</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Электровелосипеды</Button>
                        <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Электровелосипеды</Button>
                    </div>
                </div>

                <div className={styles.footerBlockCenter}>
                    <h6>Покупателям</h6>
                    <div className={styles.blockCenterContent}>
                        <div className={styles.blockCenterContentColumn}>
                            <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Сервисный центр</Button>
                            <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Доставка и оплата</Button>
                            <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Рассрочка</Button>
                            <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Тест-драйв</Button>
                        </div>
                        <div className={styles.blockCenterContentColumn}>
                            <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Блог</Button>
                            <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Сотрудничество</Button>
                            <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Контакты</Button>
                            <Button style={{ padding: '0', color: '#5D6C7B' }} type="text">Акции</Button>
                        </div>
                    </div>
                </div>
                <div className={styles.blockRigth}>
                    <h6>
                        Контакты
                    </h6>
                    <div className={styles.blockRigthContent}>
                        <div className={styles.content}>
                            <p className={styles.titleP}>Call-центр</p>
                            <h6>+7 (800) 505-54-61</h6>
                            <p className={styles.titleComment}>Пн-Вс 10:00 - 20:00</p>
                        </div>
                        <div className={styles.content}>
                            <p className={styles.titleP}>Сервисный центр</p>
                            <h6>+7 (499) 350-76-92</h6>
                            <p className={styles.titleComment}>Пн-Вс 10:00 - 20:00</p>
                        </div>
                    </div>
                </div>
                <button type="button" className={styles.btnBlockRigth}>
                    Заказать звонок
                </button>
            </div>
            <hr />
            <div className={styles.blockBottom}>
                <h2>
                    KUGGO
                </h2>
                <div className={styles.blockBottomContent}>
                    <Image src="/playMarket.svg" alt="." width={151} height={45} />
                    <Image src="/appStore.svg" alt="." width={151} height={45} />
                </div>

            </div>
        </div>
    </>
))
