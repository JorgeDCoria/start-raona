import React from "react";

interface LayoutHomeProps {
  children: React.ReactNode;
}
const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default LayoutHome;
