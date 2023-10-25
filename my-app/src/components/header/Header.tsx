import Link from "next/link";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href="/">Главная</Link>
        <Link href="/socials">Переходы</Link>
        <Link href="/news">Инфо-раздел</Link>
        <Link href="/">О нас</Link>
      </nav>
    </header>
  );
}
