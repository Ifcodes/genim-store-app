"use client";
import Swiper from "./components/swiper";
import { useFetchProducts } from "./hooks/useFetchProducts";

export default function Home() {
  const { products, images, error } = useFetchProducts();

  if (error) {
    return <div>{error}</div>;
  }

  return <Swiper images={images} />;
}
