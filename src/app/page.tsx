"use client";
import Swiper from "./components/molecules/swiper";
import { useFetchProducts } from "./hooks/useFetchProducts";

export default function Home() {
  const { products, images, error } = useFetchProducts();

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

  if (error) {
    return <div>{error}</div>;
  }

  return <Swiper images={imgs} />;
}
