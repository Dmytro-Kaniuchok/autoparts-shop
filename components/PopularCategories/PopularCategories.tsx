import Link from "next/link";
import css from "./PopularCategories.module.css";
import Container from "../Container/Container";

const categories = [
  { title: "Двигуни", image: "/images/engine.jpg", link: "/catalog/engines" },
  { title: "Фільтри", image: "/images/filters.jpg", link: "/catalog/filters" },
  { title: "Гальма", image: "/images/brakes.jpg", link: "/catalog/brakes" },
  { title: "Колеса", image: "/images/wheels.jpg", link: "/catalog/wheels" },
  {
    title: "Масла та рідини",
    image: "/images/lighting.jpg",
    link: "/catalog/lighting",
  },
  {
    title: "Акумулятори",
    image: "/images/battery.jpg",
    link: "/catalog/battery",
  },
];

export default function PopularCategories() {
  return (
    <section className={css.categoriesSection}>
      <Container>
        <h2 className={css.sectionTitle}>Популярні категорії</h2>
        <div className={css.grid}>
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.link} className={css.card}>
              <div className={css.imageWrapper}>
                <img src={cat.image} alt={cat.title} />
              </div>
              <h3 className={css.cardTitle}>{cat.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
