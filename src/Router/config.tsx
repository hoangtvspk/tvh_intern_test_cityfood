import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export const appRoutes = {
  Home: "/",
};

const MyRoutes = () => {
  return (
    <Routes>
      <Route path={appRoutes.Home} element={<Home />} />
    </Routes>
  );
};

export default MyRoutes;
