import HeartIcon from "../vectors/heart-icon";
import { CiHeart } from "react-icons/ci";
import "./liked-products-indicator-styles.scss";

const LikedProductsIndicator = ({ likes }: { likes: number }) => {
  return (
    <div className="liked-products-wrapper">
      {likes > 0 && <div className="badge">{likes}</div>}
      <CiHeart size={32} />
    </div>
  );
};

export default LikedProductsIndicator;
