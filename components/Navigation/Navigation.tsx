import Link from "next/link";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <Link href="/" className={css.navLink}>
        Головна
      </Link>
      <Link href="/catalog" className={css.navLink}>
        Каталог
      </Link>
      <Link href="/about" className={css.navLink}>
        Про нас
      </Link>
      <Link href="/contacts" className={css.navLink}>
        Контакти
      </Link>
    </nav>
  );
}
