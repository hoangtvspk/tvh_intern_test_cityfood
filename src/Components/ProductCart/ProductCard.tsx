import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { CartItemModel } from "../../Models/CartItem";
import { FoodModel } from "../../Models/FoodModel";
import styles from "./ProductCard.module.scss";
import { updateCartData } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

interface BestSellerCardProps {
  food: FoodModel;
  category: string;
}

const ProductCard = ({ food, category }: BestSellerCardProps) => {
  const dispatch = useDispatch();
  const [imageLoading, setImageLoading] = useState(true);

  const HandleAddCartClick = (food: FoodModel) => {
    const cartList = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItemModel[];
    const ProductExist = cartList.find(
      (item) => item.food.name === food.name
    ) as CartItemModel;
    if (!!ProductExist) {
      dispatch(
        updateCartData(
          cartList.map((item) =>
            item.food.name === food.name
              ? {
                  ...ProductExist,
                  quantity: ProductExist.quantity + 1,
                  totalPrice: (ProductExist.quantity + 1) * food.price,
                }
              : item
          )
        )
      );
    } else {
      dispatch(
        updateCartData([
          ...cartList,
          {
            food,
            quantity: 1,
            totalPrice: food.price,
          },
        ])
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setImageLoading(false);
    }, 500);
    return setImageLoading(true);
  }, [category]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("above")}>
        <img
          alt=""
          src={food.image}
          style={{ opacity: imageLoading ? 0 : 1 }}
        />
        <div className={cx("cart")} onClick={() => HandleAddCartClick(food)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className={cx("text-white")}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M17.21 9l-4.38-6.56a.993.993 0 00-.83-.42c-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
          </svg>
        </div>
      </div>
      <div className={cx("info")}>
        <p className={cx("name")}>{food.name}</p>
        <p className={cx("description")}>{food.calories} calories</p>
        <p className={cx("price")}>
          <span>$ </span>
          {food.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
