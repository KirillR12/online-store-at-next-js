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
        <CommentsOnAdvertisements stylesProps={styles.gharantip} title="ГАРАНТИЯ 1 ГОД" text="на весь ассортимент" />
        <CommentsOnAdvertisements stylesProps={styles.installmentPlan} title="РАССРОЧКА" text="от 6 месяцев" />
        <CommentsOnAdvertisements stylesProps={styles.present} title="ПОДАРКИ" text="и бонусам к покупкам" />
    </>
)
