import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Logo from "../../Assets/Images/logo.png";
import Avatar from "../../Assets/Images/avatar.png";
import { Link } from "react-router-dom";
import { appRoutes } from "../../Router/config";
import { CartIcon } from "../../Assets/icons";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

interface HeaderProps {
  className: string;
}

const Header = ({ className }: HeaderProps) => {
  const cartLength = useSelector((state: any) => {
    return state.cartSlice.total;
  });
  const classes = cx("wrapper", {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div className={cx("cart-icon")}>
        <CartIcon />
        {cartLength > 0 ? (
          <div>
            <p>{cartLength}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Link className={cx("to-home")} to={appRoutes.Home}>
        <img className={cx("logo")} src={Logo} alt="logo" />
        <p className={cx("city")}>City</p>
      </Link>
      <div className={cx("menu-group")}>
        <div className={cx("pages-option")}>
          <Link to="">Home</Link>
          <Link to="">Menu</Link>
          <Link to="">About Us</Link>
          <Link to="">Service</Link>
        </div>
        <div className={cx("cart-icon")}>
          <CartIcon />
          {cartLength > 0 ? (
            <div>
              <p>{cartLength}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <img src={Avatar} alt="avt" width="40px" />
      </div>
    </div>
  );
};

export default Header;
