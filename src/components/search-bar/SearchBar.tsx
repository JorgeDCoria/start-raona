import { PrimaryButton } from "@fluentui/react";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import "../../App.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <input type="text" />

        <RiSearch2Line className="icon-search-bar" />
      </div>
      <PrimaryButton className="button-primary" text="Buscar" />
    </div>
  );
};

export default SearchBar;
