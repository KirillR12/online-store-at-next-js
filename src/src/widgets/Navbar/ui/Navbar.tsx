import Link from 'next/link'

export const Navbar = () => (
    <nav>
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
)
