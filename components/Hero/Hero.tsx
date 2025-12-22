import Container from "../Container/Container";
import css from "./Hero.module.css";
import { HiChevronRight } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.heroContent}>
          <div className={css.banner}>
            <span>Якісні запчастини від перевірених брендів</span>
          </div>
          <h1 className={css.heroTitle}>
            Знайди
            <br /> ідеальну
            <br />
            <span>запчастину</span> <br /> за кілька хвилин
          </h1>
          <p className={css.heroSubtitle}>
            Великий вибір запчастин <br /> для сільськогосподарської техніки і
            автомобілів.
          </p>
        </div>

        <div className={css.searchBox}>
          <form className={css.searchForm}>
            <input type="text" placeholder="Введіть назву запчастини..." />
            <button type="submit">
              Пошук <HiChevronRight />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
