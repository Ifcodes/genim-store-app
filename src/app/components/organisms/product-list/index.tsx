import { IProductType } from "@/app/utils/types";
import React from "react";

interface IProductListProps {
  products: IProductType[];
}
const ProductList = ({ products }: IProductListProps) => {
  return <div>ProductList</div>;
};

export default ProductList;