import { Outlet } from "react-router-dom";
import NavBar from "../layout/navbar/NavBar";
import Banner from "../banner/Banner";
import Footer from "../layout/footer/Footer";

const LayoutHome = () => {
  return (
    <div>
      <NavBar />
      <Banner />

      <Outlet />

      <Footer />
    </div>
  );
};

export default LayoutHome;
