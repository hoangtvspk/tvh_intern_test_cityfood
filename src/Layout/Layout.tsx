import { ReactNode } from "react";

import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import Header from "./Header/Header";

const cx = classNames.bind(styles);

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={cx("wrapper")}>
      <Header className={cx("pd")} />
      <div className={cx("pd", "content")}>{children}</div>
    </div>
  );
}

export default Layout;
