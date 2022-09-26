import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import CateCard from "../../../../Components/CateCard/CateCard";
import ProductCard from "../../../../Components/ProductCart/ProductCard";
import { Category, HotDishesList } from "../../../../Data/Data";
import { FoodModel } from "../../../../Models/FoodModel";
import styles from "./HotDishes.module.scss";

const cx = classNames.bind(styles);

function HotDishes() {
  const [selectedValue, setSelectedValue] = useState("Chicken");
  const [foodList, setFoodList] = useState<FoodModel[]>([]);
  const HandleCardClick = (category: string) => {
    setSelectedValue(category);
  };

  useEffect(() => {
    setFoodList(
      HotDishesList.filter((food) => {
        return food.category === selectedValue;
      })
    );
  }, [selectedValue]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <p className={cx("title")}>Our Hot Dishes</p>
      </div>
      <div className={cx("categories")}>
        {Category.map((category: string, index) => (
          <CateCard
            key={index}
            category={category}
            selectedValue={selectedValue}
            onClick={() => HandleCardClick(category)}
          />
        ))}
      </div>
      <div className={cx("food-list")}>
        {foodList.map((food: FoodModel, index) => (
          <ProductCard food={food} key={index} category={selectedValue} />
        ))}
      </div>
    </div>
  );
}

export default HotDishes;
