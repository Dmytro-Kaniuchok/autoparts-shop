import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import css from "./Header.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { LiaPhoneSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerContainer}>
          <div className={css.content}>
            <div className={css.leftSide}>
              {/* Лого зліва */}
              <Logo />

              {/* Навігація по центру */}
              <nav className={css.navCenter}>
                <Navigation />
              </nav>
            </div>

            <div className={css.rightSide}>
              <div className={css.phoneBlock}>
                <div className={css.phoneRow}>
                  <LiaPhoneSolid size={20} />
                  <a href="tel:+380501234567" className={css.phone}>
                    +38 (050) 123-45-67
                  </a>
                </div>
                <span className={css.phoneTime}>Пн-Нд: 10:00-18:00</span>
              </div>

              {/* Кошик справа */}
              <button className={css.cartButton} aria-label="Кошик">
                <FiShoppingCart size={24} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
