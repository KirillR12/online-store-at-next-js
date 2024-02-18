import Link from 'next/link'
import { FC, memo } from 'react'
import styles from './styles.module.scss'

export const Navbar: FC = memo(() => (
    <nav className={styles.text}>
        <img src="/home.svg" alt="." />
        <Link href="/" type="button">
            Главная
        </Link>
        /
        <Link href="/">
            Каталог
        </Link>
        /
        <Link href="/">
            Моя корзина
        </Link>
    </nav>
))
