import React from "react";
import image from "../../assets/error.png";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
const Error = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.error);
  return (
    <div className="container-error">
      <div className="container-img">
        <img src={image} alt="imagen de error" />
      </div>
      <div className="container-info">
        <h2>Error: {error?.statusCodeApi}</h2>
        <p>{error?.messageApi}</p>
      </div>
    </div>
  );
};

export default Error;
