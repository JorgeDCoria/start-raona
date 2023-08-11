import { Outlet } from "react-router-dom";
import NavBar from "../layout/navbar/NavBar";
import Banner from "../banner/Banner";

const LayoutHome = () => {
  return (
    <div>
      <NavBar />
      <Banner />

      <Outlet />
    </div>
  );
};

export default LayoutHome;
