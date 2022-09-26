import styles from "./Cart.module.scss";
import classNames from "classnames/bind";
import EmptyCart from "../../Assets/Images/emptyCart.svg";
import CartItem from "./Components/CartItem/CartItem";
import { HealthyFoodList } from "../../Data/Data";
import { useEffect, useState } from "react";
import { CartItemModel } from "../../Models/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { updateCartData } from "../../redux/slices/cartSlice";
import { FoodModel } from "../../Models/FoodModel";

const cx = classNames.bind(styles);

const Cart = () => {
  const dispatch = useDispatch();

  const cartItemArray = useSelector((state: any) => {
    return state.cartSlice.cartItems;
  }) as CartItemModel[];

  const HandleBackClick = () => {
    const cartLayout = document.getElementById("cart-layout");
    if (cartLayout) {
      cartLayout.style.right = "-100%";
      cartLayout.style.opacity = "0";
    }
  };

  const HandleClearClick = () => {
    dispatch(updateCartData([]));
  };

  const [total, setTotal] = useState({} as CartItemModel);

  useEffect(() => {
    cartItemArray.length > 0
      ? setTotal(
          cartItemArray.reduce((pre, current) => {
            return {
              food: {} as FoodModel,
              quantity: 1,
              totalPrice: pre.totalPrice + current.totalPrice,
            };
          })
        )
      : setTotal({ food: {} as FoodModel, quantity: 1, totalPrice: 0 });
  }, [cartItemArray]);

  return (
    <div className={cx("wrapper")} id="cart-layout">
      <div className={cx("header")}>
        <div className={cx("back")} onClick={HandleBackClick}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className={cx("text-textColor", "text-3xl")}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"></path>
          </svg>
        </div>
        <p className={cx("title")}>Cart</p>
        <p className={cx("clear")} onClick={HandleClearClick}>
          Clear{" "}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924A7 7 0 0 0 9.032 5.658l.975 1.755A5 5 0 0 1 17 12h-3l2.82 5.076zm-1.852 1.266l-.975-1.755A5 5 0 0 1 7 12h3L7.18 6.924a7 7 0 0 0 7.788 11.418z"></path>
            </g>
          </svg>
        </p>
      </div>
      {cartItemArray.length < 1 ? (
        <div className={cx("empty-cart")}>
          <img
            className={cx("empty-cart-img")}
            src={EmptyCart}
            alt="empty cart"
          />
          <p>Add some items to your cart</p>
        </div>
      ) : (
        <div className={cx("cart")}>
          <div className={cx("item-list")}>
            {cartItemArray.length > 0 &&
              cartItemArray.map((item: CartItemModel, index) => (
                <CartItem key={index} item={item} />
              ))}
          </div>
          <div className={cx("checkout")}>
            <div className={cx("sub-total")}>
              <p className={cx("sub-text")}>Sub Total</p>
              <p className={cx("sub-text")}>$ {total.totalPrice}</p>
            </div>
            <div className={cx("sub-total")}>
              <p className={cx("sub-text")}>Delivery</p>
              <p className={cx("sub-text")}>$ 2.5</p>
            </div>
            <div className={cx("divide")}></div>
            <div className={cx("total")}>
              <p className={cx("total-text")}>Total</p>
              <p className={cx("total-text")}>${total.totalPrice + 2.5}</p>
            </div>
            <button className={cx("btn-checkout")}>Login to check out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
