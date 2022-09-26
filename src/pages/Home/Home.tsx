import Delivery from "../../Assets/Images/delivery.png";
import Hero from "../../Assets/Images/heroBg.png";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { BestSellerList } from "../../Data/Data";
import { FoodModel } from "../../Models/FoodModel";
import BestSellerCard from "../../Components/BestSellerCard/BestSellerCard";
import HealthyFood from "./Components/HealthyFood/HelthyFood";
import HotDishes from "./Components/HotDishes/HotDishes";
import Cart from "../../Components/Cart/Cart";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("introduce")}>
          <div className={cx("deli")}>
            <p>Bike Delivery</p>
            <div>
              <img src={Delivery} alt="delivery" />
            </div>
          </div>
          <p className={cx("title")}>
            The Fastest Delivery in<span>Your City</span>
          </p>
          <p className={cx("body")}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            velit eaque fugit distinctio est nam voluptatum architecto, porro
            iusto deserunt recusandae ipsa minus eos sunt, dolores illo repellat
            facere suscipit!
          </p>
          <button className={cx("btn-order")}>Order Now</button>
        </div>
        <div className={cx("best-seller")}>
          <img alt="" src={Hero} />
          <div>
            {BestSellerList.length > 0 &&
              BestSellerList.map((food: FoodModel, index) => (
                <BestSellerCard key={index} food={food} />
              ))}
          </div>
        </div>
      </div>
      <HealthyFood />
      <HotDishes />
      <Cart />
    </div>
  );
}

export default Home;
