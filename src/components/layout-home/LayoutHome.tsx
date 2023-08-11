import React from "react";
import { Outlet } from "react-router-dom";

const LayoutHome = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutHome;
