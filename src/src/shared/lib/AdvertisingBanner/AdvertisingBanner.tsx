import Image from 'next/image'
import styles from './styles.module.scss'
import { CommentsOnAdvertisements } from './CommentsOnAdvertisements/CommentsOnAdvertisements'

export const AdvertisingBanner = () => (
    <>
        <article className={styles.article}>
            <Image className={styles.imgArticle} src="/scooter.svg" alt="" width={538} height={405} />
            <h1 className={styles.articleTitle}>
                ЭЛЕКТРОСАМОКАТЫ KUGOO KIRIN
                <br />
                ОТ ОФИЦИАЛЬНОГО ДИЛЕРА
            </h1>
            <p className={styles.articleText}>с бесплатной доставкой по РФ от 1 дня </p>
            <button className={styles.articleBtn} type="button">
                Перейти в католог
            </button>
            <p className={styles.behindText}>KIRIN</p>
        </article>
        <div className={styles.detailsBlock}>
            <div>
                <h4>ГАРАНТИЯ 1 ГОД</h4>
                <p>на весь ассортимент</p>
            </div>
            <div>
                <h4>РАССРОЧКА</h4>
                <p>от 6 месяцев</p>
            </div>
            <div>
                <h4>ПОДАРКИ</h4>
                <p>и бонусам к покупкам</p>
            </div>
        </div>

    </>
)
