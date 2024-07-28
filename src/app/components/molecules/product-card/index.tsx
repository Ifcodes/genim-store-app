import { IProductType } from "@/app/utils/types";
import Image from "next/image";
import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import Text from "../../atoms/typography/text/text";
import Title from "../../atoms/typography/title";
import IconButton from "../../atoms/icon-button";
import "./product-card-styles.scss";

interface IProductCardProps extends IProductType {
  handleLiked: (val: boolean) => void;
  isLiked: boolean;
}
const ProductCard = ({ isLiked, handleLiked, ...props }: IProductCardProps) => {
  return (
    <div className="product-card-wrapper">
      <div className="product-image-container">
        <CiHeart className="like-icon" size={32} />
        <Image
          width={100}
          height={100}
          src={props.images[0]}
          alt={props.productTitle}
        />
      </div>
      <Text text={props.productTitle} />
      <div className="flex justify-between items-center">
        <Title variant="h2" text={`$${props.price}`} />
        <IconButton otherClasses="bg-grey-2 rounded-full p-2">
          <CiShoppingCart size={24} />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductCard;
