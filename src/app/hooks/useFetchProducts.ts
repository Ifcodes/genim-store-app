"use client";
import { useEffect, useState } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        const images = json.map((product: any) => product.image);
        setProducts(json);
        setImages(images);
        console.log(images, json);
      })
      .catch((err) => setError(err.message));
  }, []);

  return { products, images, error };
};
