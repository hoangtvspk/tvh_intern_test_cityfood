import styles from "./CartItem.module.scss";
import classNames from "classnames/bind";
import { CartItemModel as CartItemModel } from "../../../../Models/CartItem";
import { useDispatch } from "react-redux";
import { updateCartData } from "../../../../redux/slices/cartSlice";

const cx = classNames.bind(styles);

interface CartItemProps {
  item: CartItemModel;
}
function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();

  const HandleIncreaseClick = (cartItem: CartItemModel) => {
    const cartList = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItemModel[];

    const ProductExist = cartList.find(
      (item) => item.food.name === cartItem.food.name
    ) as CartItemModel;

    dispatch(
      updateCartData(
        cartList.map((item) =>
          item.food.name === cartItem.food.name
            ? {
                ...ProductExist,
                quantity: ProductExist.quantity + 1,
                totalPrice: (ProductExist.quantity + 1) * item.food.price,
              }
            : item
        )
      )
    );
  };

  const HandleDecreaseClick = (cartItem: CartItemModel) => {
    const cartList = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItemModel[];

    const ProductExist = cartList.find(
      (item) => item.food.name === cartItem.food.name
    ) as CartItemModel;

    dispatch(
      updateCartData(
        ProductExist.quantity > 1
          ? cartList.map((item) =>
              item.food.name === cartItem.food.name
                ? {
                    ...ProductExist,
                    quantity: ProductExist.quantity - 1,
                    totalPrice: (ProductExist.quantity - 1) * item.food.price,
                  }
                : item
            )
          : cartList.filter((item) => item.food.name !== cartItem.food.name)
      )
    );
  };

  return (
    <div className={cx("wrapper")}>
      <img alt="" src={item.food.image} />
      <div className={cx("food-info")}>
        <p className={cx("name")}>{item.food.name}</p>
        <p className={cx("price")}>$ {item.totalPrice}</p>
      </div>
      <div className={cx("quantity-option")}>
        <svg
          onClick={() => {
            HandleDecreaseClick(item);
          }}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-gray-50 "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 11h14v2H5z"></path>
        </svg>
        <p className={cx("quantity")}>{item.quantity}</p>
        <svg
          onClick={() => {
            HandleIncreaseClick(item);
          }}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          className="text-gray-50 "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
        </svg>
      </div>
    </div>
  );
}

export default CartItem;
