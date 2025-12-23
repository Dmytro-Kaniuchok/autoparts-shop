"use client";

import Image from "next/image";
import css from "./HeroProductCard.module.css";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export default function ProductCard({
  id,
  name,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          className={css.image}
        />
      </div>
      <div className={css.info}>
        <h3 className={css.name}>{name}</h3>
        <p className={css.price}>{price.toLocaleString()} грн</p>
        <button className={css.button}>Додати до кошика</button>
      </div>
    </div>
  );
}
