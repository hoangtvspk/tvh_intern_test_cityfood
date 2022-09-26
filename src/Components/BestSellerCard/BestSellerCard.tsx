import styles from "./BestSellerCard.module.scss";
import classNames from "classnames/bind";
import { FoodModel } from "../../Models/FoodModel";

const cx = classNames.bind(styles);

interface BestSellerCardProps {
  food: FoodModel;
}

const BestSellerCard = ({ food }: BestSellerCardProps) => {
  return (
    <div className={cx("wrapper")}>
      <img alt="" src={food.image} />
      <p className={cx("name")}>{food.name}</p>
      <p className={cx("description")}>{food.description}</p>
      <p className={cx("price")}>
        <span>$ </span>
        {food.price}
      </p>
    </div>
  );
};

export default BestSellerCard;
