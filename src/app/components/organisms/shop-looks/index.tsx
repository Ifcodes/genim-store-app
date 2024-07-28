"use client";
import { useState } from "react";
import Swiper from "../../molecules/swiper";
import ProductCard from "../../molecules/product-card";
import "./shop-looks-styles.scss";

const ShopLooks = () => {
  const [isLiked, setIsLiked] = useState(false);

  const imgs = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.avif",
    "/img4.avif",
    // "/img5.avif",
    "/img6.avif",
    "/img7.avif",
    "/img8.jpg",
  ];

  return (
    <section className="shop-looks-wrapper">
      <Swiper images={imgs} />
      <div>
        <ProductCard
          productTitle="Gucci fashion shirt"
          description="With each meticulously crafted piece, this attire exudes strength, embracing an innate boldness while embracing the essence of femininity in all its glory. This collection embodies a remarkable blend of favor, grace, and regal fashion. It radiates an aura of sophistication and confidence that captivates all who encounter her."
          price={300}
          lookImageUrl={imgs[1]}
          images={[imgs[0], imgs[1]]}
          isLiked={isLiked}
          handleLiked={setIsLiked}
        />
        <ProductCard
          productTitle="Gucci fashion shirt"
          description="With each meticulously crafted piece, this attire exudes strength, embracing an innate boldness while embracing the essence of femininity in all its glory. This collection embodies a remarkable blend of favor, grace, and regal fashion. It radiates an aura of sophistication and confidence that captivates all who encounter her."
          price={300}
          lookImageUrl={imgs[1]}
          images={[imgs[0], imgs[1]]}
          isLiked={isLiked}
          handleLiked={setIsLiked}
        />
      </div>
    </section>
  );
};

export default ShopLooks;
