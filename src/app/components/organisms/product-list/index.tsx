"use client";
import { IProductType } from "@/app/utils/types";
import React, { useState } from "react";
import Pagenation from "../../molecules/pagenation";
import Title from "../../atoms/typography/title";

interface IProductListProps {
  products: IProductType[];
}
const ProductList = ({ products }: IProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalInView, setTotalInView] = useState(20);

  return (
    <section className="w-full">
      <header className="w-full flex justify-between">
        <Title variant="h2" text="Curated for you" />
        <div className="w-[80%]">
          <Pagenation
            totalPerPage={20}
            totalItems={200}
            totalShowing={totalInView}
            currentPage={currentPage}
            handleCurrentPage={setCurrentPage}
          />
        </div>
      </header>
    </section>
  );
};

export default ProductList;
