import styles from "./HealthyFood.module.scss";
import classNames from "classnames/bind";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import { HealthyFoodList } from "../../../../Data/Data";
import { FoodModel } from "../../../../Models/FoodModel";
import ProductCard from "../../../../Components/ProductCart/ProductCard";

const cx = classNames.bind(styles);

function HealthyFood() {
  const HandleScrollRight = () =>
    document.getElementById("rightarrow")?.click();
  const HandleScrollLeft = () => document.getElementById("leftarrow")?.click();

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <p className={cx("title")}>Our Fresh & Healthy Fruits</p>
        <div className={cx("overflow-row")}>
          <div onClick={HandleScrollLeft}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className={cx("text-lg", "text-white")}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
          </div>
          <div onClick={HandleScrollRight}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className={cx("text-lg", "text-white")}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </div>
        </div>
      </div>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {HealthyFoodList.map((food: FoodModel, index) => (
          <ProductCard food={food} key={index} category="" />
        ))}
      </ScrollMenu>
    </div>
  );
}
function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      id="leftarrow"
      style={{ width: 0, height: 0, display: "none" }}
      onClick={() => scrollPrev()}
    >
      Left
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <div
      id="rightarrow"
      style={{ width: 0, height: 0, display: "none" }}
      onClick={() => scrollNext()}
    >
      Right
    </div>
  );
}

export default HealthyFood;
