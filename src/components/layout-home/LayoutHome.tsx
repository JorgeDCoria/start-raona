import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../layout/navbar/NavBar";

const LayoutHome = () => {
  return (
    <div>
      <NavBar />
      hola que utal
      <Outlet />
    </div>
  );
};

export default LayoutHome;
