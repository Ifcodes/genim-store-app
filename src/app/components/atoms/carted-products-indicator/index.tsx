import { BsCart2 } from "react-icons/bs";
import "./carted-products-indicator-styles.scss";
import { CiShoppingCart } from "react-icons/ci";

const CartedProductIndicator = ({
  totalProducts,
}: {
  totalProducts: number;
}) => {
  return (
    <div className="carted-products-wrapper">
      {totalProducts > 0 && <div className="badge">{totalProducts}</div>}
      <CiShoppingCart size={28} />

      {/* <BsCart2 size={28} /> */}
    </div>
  );
};

export default CartedProductIndicator;
